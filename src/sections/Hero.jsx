import React, { useState, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import heroMacroImg from '../assets/images/hero_macro.jpg';
import { Sparkles, ArrowDown, Play, Pause, Mountain, Droplets, Award } from 'lucide-react';

export const Hero = ({ onOpenInquiry }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleVideoPlayback = () => {
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

  return (
    <section
      id="hero"
      className="section-hero"
      style={{
        position: 'relative',
        height: '100dvh',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        backgroundColor: '#171512'
      }}
    >
      {/* 1. Full-Bleed 4K Video Background (Layer 1) */}
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
        <video
          ref={videoRef}
          src="/videos/vanilla_macro_dolly.mp4"
          poster={heroMacroImg}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 45%',
            transform: 'scale(1.02)',
            transition: 'transform 10s ease-out'
          }}
        />
      </div>

      {/* 2. Cinematic Dual-Vignette Shading (Layer 2) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          background: `
            radial-gradient(ellipse at center, rgba(23, 21, 18, 0.45) 0%, rgba(23, 21, 18, 0.82) 100%),
            linear-gradient(180deg, rgba(23, 21, 18, 0.8) 0%, rgba(23, 21, 18, 0.25) 40%, rgba(23, 21, 18, 0.55) 75%, rgba(23, 21, 18, 0.95) 100%)
          `
        }}
      />

      {/* 3. Main Hero Narrative (Layer 3) - Truly Vertically Centered via flex: 1 */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 3,
          width: '100%',
          padding: '48px var(--space-md) 16px',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ maxWidth: '880px', width: '100%', margin: '0 auto', textAlign: 'center' }}>
          
          <ScrollReveal animation="fade-up" delay={50}>
            {/* Main Editorial Hero Heading */}
            <h1
              className="display-hero"
              style={{
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.05,
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.85)'
              }}
            >
              Pure Vanilla, <br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent-gold)' }}>
                Grown with
              </span> Intention.
            </h1>
          </ScrollReveal>
        </div>
      </div>

      {/* 4. Luxury Dark Frosted Telemetry Strip (Telemetry + Discreet Media Control) */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          backgroundColor: 'rgba(23, 21, 18, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(200, 169, 107, 0.25)',
          padding: '12px 0'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            {/* Terroir Spec Chip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mountain size={14} style={{ color: 'var(--accent-gold)' }} />
              <span className="num-label" style={{ fontSize: '0.6875rem' }}>TERROIR</span>
              <span style={{ color: 'var(--text-inverse-secondary)', fontSize: '0.8125rem' }}>
                {brandConfig.terroir}
              </span>
            </div>

            {/* Centered Scroll Indicator */}
            <a
              href="#philosophy"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: 'var(--accent-gold)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.75'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <span>Scroll to Explore</span>
              <ArrowDown size={14} style={{ animation: 'bounceSlow 2s infinite ease-in-out' }} />
            </a>

            {/* Right Telemetry: Live Specs & Discreet Video Reel Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Droplets size={13} style={{ color: 'var(--accent-gold)' }} />
                <span style={{ color: 'var(--text-inverse-secondary)', fontSize: '0.8125rem' }}>
                  Moisture: 33% (Gourmet A)
                </span>
              </div>

              {/* Discreet Film Play/Pause Toggle */}
              <button
                type="button"
                onClick={toggleVideoPlayback}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-dark)',
                  color: 'var(--text-inverse-secondary)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-inverse-primary)';
                  e.currentTarget.style.borderColor = 'var(--border-dark-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-inverse-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-dark)';
                }}
                aria-label={isPlaying ? "Pause background film" : "Play background film"}
              >
                {isPlaying ? <Pause size={10} style={{ color: 'var(--accent-gold)' }} /> : <Play size={10} style={{ color: 'var(--accent-gold)' }} />}
                <span>{isPlaying ? 'Pause Reel' : 'Play Reel'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
