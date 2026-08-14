import React, { useRef, useState, useEffect, useCallback } from 'react';
import { brandConfig } from '../config/brandConfig';
import { SectionHeader } from '../components/SectionHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { Button } from '../components/Button';
import { Compass, Sparkles, Play, Pause, RotateCw, MoveHorizontal } from 'lucide-react';

export const ScrollytellingShowcase = ({ onOpenInquiry }) => {
  const videoRef = useRef(null);
  const trackRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startProgress: 0 });

  const angleBreakpoints = [
    {
      degree: '0°',
      progress: 0.05,
      label: 'Origin Terroir',
      title: 'Volcanic Soil & Living Canopy',
      description: 'Grown in high-altitude Indonesian rainforest understories. Absorbing rich volcanic mineral ash with zero artificial chemicals.'
    },
    {
      degree: '90°',
      progress: 0.32,
      label: 'Traditional Curing',
      title: '90 Days of Sun & Cedar Sweating',
      description: 'Sun-cured on woven bamboo mats and fermented overnight in wooden boxes to release concentrated natural vanillin and oily luster.'
    },
    {
      degree: '180°',
      progress: 0.62,
      label: 'Gourmet Grade A',
      title: 'Plump Pliability & Caviar Core',
      description: 'Optimal 30% – 35% moisture content ensuring smooth effortless slicing and dense aromatic visual speckling for haute pastry.'
    },
    {
      degree: '270°',
      progress: 0.90,
      label: 'Global Export',
      title: 'Curated for Master Creators',
      description: 'Strict vacuum packaging and phytosanitary certification ready for international Michelin-star pastry and confectionery partners.'
    }
  ];

  // Helper to find closest angle breakpoint
  const getClosestAngleIndex = useCallback((prog) => {
    let closestIdx = 0;
    let minDiff = Infinity;
    angleBreakpoints.forEach((bp, idx) => {
      const diff = Math.abs(bp.progress - prog);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });
    return closestIdx;
  }, []);

  // Sync video playback time with current progress during normal playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (Number.isFinite(video.duration) && video.duration > 0 && !isDragging) {
        const prog = video.currentTime / video.duration;
        setCurrentProgress(prog);
        setActiveAngleIndex(getClosestAngleIndex(prog));
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [isDragging, getClosestAngleIndex]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const jumpToAngle = (index) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
    
    const targetProg = angleBreakpoints[index].progress;
    video.pause();
    setIsPlaying(false);
    video.currentTime = targetProg * video.duration;
    setCurrentProgress(targetProg);
    setActiveAngleIndex(index);
  };

  // Robust Window-Level Drag & Touch Handlers
  const handleDragStart = (clientX) => {
    const video = videoRef.current;
    if (video) video.pause();
    setIsPlaying(false);
    setIsDragging(true);
    dragRef.current = {
      startX: clientX,
      startProgress: currentProgress
    };
  };

  const onMouseDown = (e) => {
    handleDragStart(e.clientX);
  };

  const onTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      handleDragStart(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleWindowMove = (clientX) => {
      const deltaX = clientX - dragRef.current.startX;
      const sensitivity = 0.0025; // Balanced drag sensitivity
      
      let newProg = dragRef.current.startProgress - deltaX * sensitivity;
      // Wrap-around seamlessly between 0.0 and 1.0
      while (newProg < 0) newProg += 1;
      while (newProg > 1) newProg -= 1;

      const video = videoRef.current;
      if (video && Number.isFinite(video.duration) && video.duration > 0) {
        video.currentTime = newProg * video.duration;
        setCurrentProgress(newProg);
        setActiveAngleIndex(getClosestAngleIndex(newProg));
      }
    };

    const handleMouseMove = (e) => {
      handleWindowMove(e.clientX);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        handleWindowMove(e.touches[0].clientX);
      }
    };

    const handleDragEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleDragEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, getClosestAngleIndex]);

  const currentAngleData = angleBreakpoints[activeAngleIndex] || angleBreakpoints[0];

  return (
    <section
      id="experience-3d"
      className="section"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-inverse-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
        <ScrollReveal animation="fade-up">
          <SectionHeader
            overline="Interactive 360° Studio"
            title="Inspect Every Dimension of the Crop"
            subtitle="Drag horizontally to rotate, explore key curing angles, or watch the calm turntable motion of our single-origin cured bundle."
            light={true}
          />
        </ScrollReveal>

        <div className="grid-12" style={{ alignItems: 'center' }}>
          
          {/* Col 1-7: Interactive 360 Video Viewport */}
          <div style={{ gridColumn: 'span 7' }}>
            <ScrollReveal animation="fade-right">
              {/* Outer Doppelrand Shell */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-dark-gold)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '10px',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)'
                }}
              >
                {/* Inner Video Core */}
                <div
                  ref={trackRef}
                  onMouseDown={onMouseDown}
                  onTouchStart={onTouchStart}
                  style={{
                    position: 'relative',
                    aspectRatio: '16/9',
                    borderRadius: 'calc(var(--radius-lg) - 8px)',
                    overflow: 'hidden',
                    backgroundColor: '#000000',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    userSelect: 'none',
                    touchAction: 'pan-y'
                  }}
                >
                  <video
                    ref={videoRef}
                    src="/videos/vanilla_bundle_360.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Top Left Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(23, 21, 18, 0.85)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--border-dark-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-inverse-primary)',
                      pointerEvents: 'none'
                    }}
                  >
                    <Compass size={13} style={{ color: 'var(--accent-gold)' }} />
                    <span>Angle: {Math.round(currentProgress * 360)}°</span>
                  </div>

                  {/* Drag Prompt Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(23, 21, 18, 0.82)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--border-dark)',
                      fontSize: '0.6875rem',
                      color: 'var(--text-inverse-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      pointerEvents: 'none'
                    }}
                  >
                    <MoveHorizontal size={13} style={{ color: 'var(--accent-gold)' }} />
                    <span>Click & Drag to Rotate 360°</span>
                  </div>

                  {/* Play/Pause Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(23, 21, 18, 0.88)',
                      border: '1px solid var(--border-dark-gold)',
                      color: 'var(--accent-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      zIndex: 10
                    }}
                    aria-label={isPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
                  >
                    {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                  </button>
                </div>
              </div>

              {/* Angle Quick Buttons Selector */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px',
                  marginTop: '16px'
                }}
              >
                {angleBreakpoints.map((bp, bIdx) => {
                  const isSelected = bIdx === activeAngleIndex;
                  return (
                    <button
                      key={bIdx}
                      type="button"
                      onClick={() => jumpToAngle(bIdx)}
                      style={{
                        padding: '10px 8px',
                        backgroundColor: isSelected ? 'rgba(200, 169, 107, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: isSelected ? '1px solid var(--accent-gold)' : '1px solid var(--border-dark)',
                        borderRadius: 'var(--radius-xs)',
                        color: isSelected ? 'var(--accent-gold)' : 'var(--text-inverse-muted)',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        textAlign: 'center'
                      }}
                    >
                      <span style={{ display: 'block', color: isSelected ? 'var(--text-inverse-primary)' : 'inherit' }}>
                        {bp.degree}
                      </span>
                      <span style={{ fontSize: '0.625rem', marginTop: '2px', display: 'block', opacity: isSelected ? 1 : 0.7 }}>
                        {bp.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Col 8-12: Dynamic Angle Narrative & Specifications */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: 'clamp(0px, 2vw, 24px)'
            }}
          >
            <ScrollReveal animation="fade-left" delay={100}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 'clamp(20px, 3vw, 32px)',
                  boxShadow: 'var(--shadow-medium)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span className="num-label">ANGLE 0{activeAngleIndex + 1} / 04</span>
                  <span style={{ color: 'var(--border-dark-gold)' }}>·</span>
                  <span className="overline" style={{ color: 'var(--accent-gold)', fontSize: '0.6875rem' }}>
                    {currentAngleData.label}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    color: 'var(--text-inverse-primary)',
                    marginBottom: '16px',
                    lineHeight: 1.2
                  }}
                >
                  {currentAngleData.title}
                </h3>

                <p
                  className="body-regular"
                  style={{
                    color: 'var(--text-inverse-secondary)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    marginBottom: '28px'
                  }}
                >
                  {currentAngleData.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Button
                    variant="gold"
                    onClick={onOpenInquiry}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Inquire Crop Allocation
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ScrollytellingShowcase;
