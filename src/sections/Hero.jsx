import React, { useState, useEffect } from 'react';
import { brandConfig } from '../config/brandConfig';
import { ScrollReveal } from '../components/ScrollReveal';
import { SeamlessDualVideo } from '../components/SeamlessDualVideo';
import heroMacroImg from '../assets/images/hero_macro.webp';
import { ArrowDown, ArrowRight } from 'lucide-react';

export const Hero = ({ onOpenInquiry }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for prefers-reduced-motion media query
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#171512'
      }}
      aria-label="Essence Indonesia Hero"
    >
      {/* 1. Full-Bleed Atmospheric Background with Seamless Dual-Video Crossfade Reel */}
      <SeamlessDualVideo
        videos={[
          '/videos/vanilla_macro_dolly.mp4',
          '/videos/vanilla_hero_macro.mp4'
        ]}
        poster={heroMacroImg}
        objectPosition="center 45%"
        crossfadeTime={1.0}
      />

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
          padding: '0 clamp(12px, 4vw, var(--space-md))',
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
              fontSize: 'clamp(1.85rem, 5.5vw, 4.5rem)',
              fontWeight: 300,
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
              letterSpacing: '0.03em',
              textShadow: '0 4px 32px rgba(0, 0, 0, 0.9)',
              wordBreak: 'break-word'
            }}
          >
            INDONESIAN ORIGINS.<br />
            <span
              style={{
                display: 'inline-block',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--accent-gold)',
                fontSize: 'clamp(1.25rem, 4vw, 3.55rem)',
                letterSpacing: '0.02em',
                maxWidth: '100%',
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
