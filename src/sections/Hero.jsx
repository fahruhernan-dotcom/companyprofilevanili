import React, { useState, useEffect, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';
import { ScrollReveal } from '../components/ScrollReveal';
import heroMacroImg from '../assets/images/hero_macro.webp';
import { ArrowDown, ArrowRight } from 'lucide-react';

export const Hero = ({ onOpenInquiry }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0); // 0: Vanilla, 1: Coffee
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  // Check for prefers-reduced-motion media query
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Handle sequential video playback and ultra-smooth morph transition
  useEffect(() => {
    if (prefersReducedMotion) return;

    const v1 = videoRef1.current;
    const v2 = videoRef2.current;
    if (!v1 || !v2) return;

    let isTransitioning = false;

    // Start with video 1
    v1.play().catch(() => {});

    const triggerTransitionTo2 = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      // 1. Warm up & play video 2 immediately
      v2.currentTime = 0;
      v2.play().catch(() => {});

      // 2. Fade in video 2 over 1.6s
      setActiveVideo(1);

      // 3. Reset transition flag after dissolve finishes
      setTimeout(() => {
        isTransitioning = false;
        if (v1) v1.pause();
      }, 1600);
    };

    const triggerTransitionTo1 = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      // 1. Warm up & play video 1 immediately
      v1.currentTime = 0;
      v1.play().catch(() => {});

      // 2. Fade in video 1 over 1.6s
      setActiveVideo(0);

      // 3. Reset transition flag after dissolve finishes
      setTimeout(() => {
        isTransitioning = false;
        if (v2) v2.pause();
      }, 1600);
    };

    const handleV1TimeUpdate = () => {
      if (!isTransitioning && v1.duration && v1.currentTime >= v1.duration - 1.5) {
        triggerTransitionTo2();
      }
    };

    const handleV2TimeUpdate = () => {
      if (!isTransitioning && v2.duration && v2.currentTime >= v2.duration - 1.5) {
        triggerTransitionTo1();
      }
    };

    const handleV1Ended = () => {
      if (!isTransitioning) triggerTransitionTo2();
    };

    const handleV2Ended = () => {
      if (!isTransitioning) triggerTransitionTo1();
    };

    v1.addEventListener('timeupdate', handleV1TimeUpdate);
    v1.addEventListener('ended', handleV1Ended);
    v2.addEventListener('timeupdate', handleV2TimeUpdate);
    v2.addEventListener('ended', handleV2Ended);

    return () => {
      v1.removeEventListener('timeupdate', handleV1TimeUpdate);
      v1.removeEventListener('ended', handleV1Ended);
      v2.removeEventListener('timeupdate', handleV2TimeUpdate);
      v2.removeEventListener('ended', handleV2Ended);
    };
  }, [prefersReducedMotion]);

  const handleScrollToOrigins = (e) => {
    e.preventDefault();
    const target =
      document.getElementById('origins') ||
      document.getElementById('two-origins') ||
      document.getElementById('philosophy') ||
      document.getElementById('main-content');

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="section-hero"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#171512'
      }}
      aria-label="Essence Indonesia Hero"
    >
      {/* 1. Full-Bleed Atmospheric Background with Ultra-Smooth Morph Video Sequence */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden',
          backgroundColor: '#171512'
        }}
      >
        {/* Track 1: Vanilla Macro Dolly */}
        <video
          ref={videoRef1}
          src="/videos/vanilla_macro_dolly.mp4"
          poster={heroMacroImg}
          muted
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 45%',
            opacity: activeVideo === 0 ? 1 : 0,
            transform: activeVideo === 0 ? 'scale(1.02)' : 'scale(1.05)',
            transition: 'opacity 1.6s cubic-bezier(0.25, 1, 0.5, 1), transform 2.0s cubic-bezier(0.25, 1, 0.5, 1)',
            willChange: 'opacity, transform',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        {/* Track 2: Roasted Coffee Beans Cinematic Morph */}
        <video
          ref={videoRef2}
          src="/videos/coffee_roast_hero.mp4"
          poster={heroMacroImg}
          muted
          playsInline
          preload="metadata"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 45%',
            opacity: activeVideo === 1 ? 1 : 0,
            transform: activeVideo === 1 ? 'scale(1.02)' : 'scale(1.05)',
            transition: 'opacity 1.6s cubic-bezier(0.25, 1, 0.5, 1), transform 2.0s cubic-bezier(0.25, 1, 0.5, 1)',
            willChange: 'opacity, transform',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />
      </div>

      {/* 2. Pure Quiet Luxury Scrim (Deep, Seamless & Subtle) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(23, 21, 18, 0.4) 0%, rgba(23, 21, 18, 0.85) 100%),
            linear-gradient(180deg, rgba(23, 21, 18, 0.75) 0%, rgba(23, 21, 18, 0.3) 50%, rgba(23, 21, 18, 0.9) 100%)
          `
        }}
      />

      {/* 3. Minimalist Editorial Centerpiece */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: '920px',
          padding: '0 var(--space-md)',
          textAlign: 'center',
          boxSizing: 'border-box',
          marginTop: '-2vh'
        }}
      >
        {/* Main Editorial Hero Heading */}
        <ScrollReveal animation="fade-up" delay={80}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
              fontWeight: 300,
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              lineHeight: 1.1,
              letterSpacing: '0.04em',
              textShadow: '0 4px 32px rgba(0, 0, 0, 0.9)'
            }}
          >
            INDONESIAN ORIGINS.<br />
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--accent-gold)',
                fontSize: 'clamp(1.85rem, 4.3vw, 3.55rem)',
                whiteSpace: 'nowrap',
                marginTop: '6px'
              }}
            >
              SOURCED FOR THE WORLD.
            </span>
          </h1>
        </ScrollReveal>

        {/* Whispered Single-Line Positioning */}
        <ScrollReveal animation="fade-up" delay={160}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.8125rem, 1.1vw, 0.9375rem)',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(246, 242, 234, 0.75)',
              margin: '0 auto 36px',
              maxWidth: '480px'
            }}
          >
            {brandConfig.positioning}
          </p>
        </ScrollReveal>

        {/* Single Refined CTA */}
        <ScrollReveal animation="fade-up" delay={240}>
          <a
            href="#origins"
            onClick={handleScrollToOrigins}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 28px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--accent-gold)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s var(--ease-editorial)',
              boxShadow: '0 8px 24px rgba(200, 169, 107, 0.25)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#DFC182';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(200, 169, 107, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(200, 169, 107, 0.25)';
            }}
          >
            <span>Explore Origins</span>
            <ArrowRight size={13} />
          </a>
        </ScrollReveal>
      </div>

      {/* 4. Delicate & Whispered Minimal Scroll Cue (Bottom) */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(20px, 4vh, 36px)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          pointerEvents: 'none'
        }}
      >
        <span
          style={{
            fontSize: '0.625rem',
            fontWeight: 500,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'rgba(246, 242, 234, 0.45)'
          }}
        >
          Scroll
        </span>
        <ArrowDown
          size={12}
          style={{
            color: 'var(--accent-gold)',
            opacity: 0.7,
            animation: 'pulseRing 2.6s infinite ease-in-out'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
