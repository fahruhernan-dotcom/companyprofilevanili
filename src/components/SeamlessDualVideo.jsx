import React, { useState, useEffect, useRef } from 'react';

/**
 * SeamlessDualVideo — High Performance Edition
 * Features:
 * - IntersectionObserver: Automatically pauses playback when scrolled out of view (0% GPU when offscreen)
 * - Page Visibility: Pauses playback when user changes browser tabs
 * - Lazy Buffer: Video 2 is loaded only as Video 1 nears completion, avoiding dual buffer contention
 * - Resampling Elimination: Removed transform: scale(1.02) to prevent continuous bicubic GPU re-rendering
 * - willChange: opacity for hardware-accelerated smooth crossfade
 *
 * @param {string[]} videos - Array of 2 video URLs [firstVideoUrl, secondVideoUrl]
 * @param {string} poster - Fallback poster image URL
 * @param {string} [objectPosition='center 45%'] - CSS object-position for framing
 * @param {number} [crossfadeTime=1.0] - Crossfade duration in seconds before video ends
 */
export const SeamlessDualVideo = ({
  videos = [],
  poster,
  objectPosition = 'center 45%',
  crossfadeTime = 1.0
}) => {
  const [activeSlot, setActiveSlot] = useState(0); // 0 = video 1 active, 1 = video 2 active
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isSecondVideoReady, setIsSecondVideoReady] = useState(false);

  const containerRef = useRef(null);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const isVisibleRef = useRef(true);
  const hasTriggeredNextRef = useRef(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // IntersectionObserver: Pause video when scrolled out of view to liberate GPU/CPU!
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isIntersecting = entry.isIntersecting;
        isVisibleRef.current = isIntersecting;

        const currentVid = activeSlot === 0 ? video1Ref.current : video2Ref.current;
        if (isIntersecting) {
          currentVid?.play().catch(() => {});
        } else {
          video1Ref.current?.pause();
          video2Ref.current?.pause();
        }
      },
      {
        threshold: 0.05 // Trigger pause as soon as hero is scrolled away
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [activeSlot, prefersReducedMotion]);

  // Tab Visibility: Pause when switching tabs
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video1Ref.current?.pause();
        video2Ref.current?.pause();
      } else if (isVisibleRef.current && !prefersReducedMotion) {
        const currentVid = activeSlot === 0 ? video1Ref.current : video2Ref.current;
        currentVid?.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [activeSlot, prefersReducedMotion]);

  // Initial playback
  useEffect(() => {
    if (prefersReducedMotion) return;

    if (video1Ref.current && isVisibleRef.current) {
      video1Ref.current.play().catch(() => {});
    }
  }, [prefersReducedMotion]);

  // Handle crossfade logic on timeupdate
  const handleTimeUpdate = (slot) => {
    if (prefersReducedMotion || slot !== activeSlot || !isVisibleRef.current || hasTriggeredNextRef.current) {
      return;
    }

    const currentVid = slot === 0 ? video1Ref.current : video2Ref.current;
    const nextVid = slot === 0 ? video2Ref.current : video1Ref.current;

    if (!currentVid || !nextVid || !currentVid.duration) return;

    const remainingTime = currentVid.duration - currentVid.currentTime;

    // Preload next video when current video has 3 seconds left
    if (remainingTime <= 3.0 && !isSecondVideoReady) {
      setIsSecondVideoReady(true);
    }

    // Trigger next video 1s before current video ends for a seamless dissolve
    if (remainingTime <= crossfadeTime && remainingTime > 0.05) {
      hasTriggeredNextRef.current = true;

      nextVid.currentTime = 0;
      nextVid.play().then(() => {
        setActiveSlot(slot === 0 ? 1 : 0);
      }).catch(() => {
        setActiveSlot(slot === 0 ? 1 : 0);
      });
    }
  };

  // Fallback if timeupdate missed the exact window
  const handleEnded = (slot) => {
    if (slot === activeSlot && isVisibleRef.current) {
      const nextVid = slot === 0 ? video2Ref.current : video1Ref.current;
      if (nextVid) {
        nextVid.currentTime = 0;
        nextVid.play().catch(() => {});
        setActiveSlot(slot === 0 ? 1 : 0);
      }
    }

    // Reset finished video
    const currentVid = slot === 0 ? video1Ref.current : video2Ref.current;
    if (currentVid) {
      currentVid.pause();
      currentVid.currentTime = 0;
    }

    hasTriggeredNextRef.current = false;
  };

  const videoStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: objectPosition,
    pointerEvents: 'none',
    willChange: 'opacity',
    transition: 'opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1)'
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        backgroundColor: '#171512'
      }}
      aria-hidden="true"
    >
      {/* Background Poster Backup */}
      {poster && (
        <img
          src={poster}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: objectPosition,
            opacity: 0.6,
            zIndex: 0
          }}
          loading="eager"
        />
      )}

      {/* Video Layer 1 */}
      {videos[0] && (
        <video
          ref={video1Ref}
          src={videos[0]}
          poster={poster}
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={() => handleTimeUpdate(0)}
          onEnded={() => handleEnded(0)}
          style={{
            ...videoStyle,
            opacity: activeSlot === 0 ? 1 : 0,
            zIndex: activeSlot === 0 ? 2 : 1
          }}
        />
      )}

      {/* Video Layer 2 */}
      {videos[1] && (
        <video
          ref={video2Ref}
          src={videos[1]}
          muted
          playsInline
          preload={isSecondVideoReady ? 'auto' : 'metadata'}
          onTimeUpdate={() => handleTimeUpdate(1)}
          onEnded={() => handleEnded(1)}
          style={{
            ...videoStyle,
            opacity: activeSlot === 1 ? 1 : 0,
            zIndex: activeSlot === 1 ? 2 : 1
          }}
        />
      )}
    </div>
  );
};

export default SeamlessDualVideo;
