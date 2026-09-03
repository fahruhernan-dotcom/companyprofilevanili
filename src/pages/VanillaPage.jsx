import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { SeamlessDualVideo } from '../components/SeamlessDualVideo';
import heroMacroImg from '../assets/images/hero_macro.webp';
import { TheVanilla } from '../sections/TheVanilla';
import { TheCraft } from '../sections/TheCraft';
import { QualitySpecs } from '../sections/QualitySpecs';
import { VanillaDerivativesCatalog } from '../components/VanillaDerivativesCatalog';
import { Applications } from '../sections/Applications';
import { ArrowLeft, FileText, Sparkles, MessageCircle, Leaf } from 'lucide-react';

export const VanillaPage = ({
  onNavigateHome,
  onOpenInquiry,
  onOpenSpecSheet
}) => {
  const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Essence Indonesia, I would like to inquire about Vanilla export sourcing.')}`;

  return (
    <div className="page-vanilla" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      
      {/* Editorial Vanilla Header with Video Background - Bottom-Left Anchored */}
      <section
        style={{
          paddingTop: 'clamp(120px, 14vh, 160px)',
          paddingBottom: 'clamp(48px, 8vh, 72px)',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-inverse-primary)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        {/* Cinematic Dual-Video Background Layer (Macro -> Dolly Crossfade) */}
        <SeamlessDualVideo
          videos={[
            '/videos/vanilla_hero_macro.mp4',
            '/videos/vanilla_macro_dolly.mp4'
          ]}
          poster={heroMacroImg}
          objectPosition="center 45%"
          crossfadeTime={1.0}
        />

        {/* Scrim Gradient Overlay for Contrast & Text Legibility (Focused on bottom-left) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background: `
              linear-gradient(180deg, rgba(17, 15, 12, 0.5) 0%, rgba(17, 15, 12, 0.1) 20%, rgba(17, 15, 12, 0.45) 50%, rgba(17, 15, 12, 0.88) 78%, rgba(17, 15, 12, 0.98) 100%),
              radial-gradient(ellipse at 12% 92%, rgba(17, 15, 12, 0.94) 0%, rgba(17, 15, 12, 0.6) 50%, transparent 80%)
            `,
            pointerEvents: 'none'
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 3,
            width: '100%',
            paddingLeft: 'clamp(20px, 5.5vw, 64px)',
            paddingRight: 'clamp(20px, 5.5vw, 64px)',
            boxSizing: 'border-box',
            paddingBottom: 'clamp(36px, 6.5vh, 64px)'
          }}
        >
          <div style={{ maxWidth: '520px', textAlign: 'left' }}>
            
            {/* Editorial Micro-Eyebrow */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ width: '20px', height: '1.5px', backgroundColor: 'var(--accent-gold)' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)'
                  }}
                >
                  Equatorial Botanical Harvest
                </span>
              </div>
            </ScrollReveal>

            {/* Editorial Luxury Title */}
            <ScrollReveal animation="fade-up" delay={100}>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.35rem, 6.5vw, 4.4rem)',
                  fontWeight: 300,
                  color: 'var(--text-inverse-primary)',
                  lineHeight: 1.05,
                  margin: '0 0 14px 0',
                  letterSpacing: '0.01em',
                  textShadow: '0 2px 24px rgba(0, 0, 0, 0.9)'
                }}
              >
                Indonesian <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)', fontWeight: 400 }}>Vanilla.</span>
              </h1>
            </ScrollReveal>

            {/* Editorial Compact Paragraph */}
            <ScrollReveal animation="fade-up" delay={160}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.84rem, 1.05vw, 0.95rem)',
                  color: 'rgba(246, 242, 234, 0.86)',
                  lineHeight: 1.65,
                  margin: '0 0 20px 0',
                  maxWidth: '460px',
                  letterSpacing: '0.01em',
                  textShadow: '0 1px 16px rgba(0, 0, 0, 0.85)'
                }}
              >
                Single-origin <em>Vanilla planifolia</em> and <em>Vanilla tahitensis</em> cured under equatorial sun and slow wooden-box conditioning. Verified with lab-tested vanillin content and statutory export certifications.
              </p>
            </ScrollReveal>

            {/* Harmonious Action Buttons (Side-by-side on mobile, elegant row on desktop) */}
            <ScrollReveal animation="fade-up" delay={220}>
              <div className="vanilla-hero-actions">
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  className="vanilla-hero-btn vanilla-hero-btn-primary"
                >
                  <span>Request Quotation</span>
                  <Sparkles size={12} />
                </button>

                <button
                  type="button"
                  onClick={onOpenSpecSheet}
                  className="vanilla-hero-btn vanilla-hero-btn-secondary"
                >
                  <FileText size={12} />
                  <span>Spec Dossier</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Minimalist Scroll Down Cue (Desktop-Only Cue, Hidden on Mobile to avoid collision) */}
        <div
          className="vanilla-scroll-cue"
          style={{
            position: 'absolute',
            bottom: 'clamp(24px, 4vh, 36px)',
            right: 'clamp(20px, 4vw, 48px)',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            opacity: 0.65,
            pointerEvents: 'none'
          }}
        >
          <span style={{ fontSize: '0.625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-inverse-secondary)' }}>Scroll</span>
          <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--accent-gold)' }} />
        </div>
      </section>

      {/* 01. Anatomy & Sensory Profile with Hotspot Slomo Playback */}
      <TheVanilla
        onOpenInquiry={onOpenInquiry}
        onOpenSpecSheet={onOpenSpecSheet}
      />

      {/* 02. Physical Quality & Laboratory Grades Table */}
      <QualitySpecs
        onOpenInquiry={onOpenInquiry}
        onOpenSpecSheet={onOpenSpecSheet}
      />

      {/* 03. Complete Vanilla Derivatives Portfolio (10 Products) */}
      <VanillaDerivativesCatalog
        onOpenInquiry={onOpenInquiry}
        onOpenSpecSheet={onOpenSpecSheet}
      />

      {/* 04. The Craft of Curing Timeline */}
      <TheCraft />

      {/* 05. Culinary & Industrial Applications */}
      <Applications onOpenInquiry={onOpenInquiry} />

      {/* 06. Cinematic Direct Sourcing Call to Action with Ambient Slomo Video */}
      <section
        style={{
          padding: 'clamp(80px, 12vh, 130px) 0',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-inverse-primary)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center'
        }}
      >
        {/* Ambient Video Background Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            overflow: 'hidden'
          }}
          aria-hidden="true"
        >
          <video
            src="/videos/vanilla_slomo_macro_texture.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.32) contrast(1.15)',
              transform: 'scale(1.02)'
            }}
          />
        </div>

        {/* Gradient Scrim */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background: 'linear-gradient(180deg, rgba(17,15,12,0.85) 0%, rgba(17,15,12,0.6) 50%, rgba(17,15,12,0.92) 100%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container-narrow" style={{ position: 'relative', zIndex: 3 }}>
          <ScrollReveal animation="fade-up">
            <span className="overline overline-accent" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '12px' }}>
              Export Allocation Desk
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                color: 'var(--text-inverse-primary)',
                margin: '0 0 16px 0',
                lineHeight: 1.15
              }}
            >
              Secure Your Vanilla Harvest Allocation
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-inverse-secondary)',
                lineHeight: 1.7,
                maxWidth: '620px',
                margin: '0 auto 32px'
              }}
            >
              Direct commercial supply of Gourmet Grade A pods, seeds, and extracts with certified Certificate of Analysis and phytosanitary clearance.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
              <Button variant="gold" onClick={onOpenInquiry} style={{ minHeight: '48px', padding: '0 28px' }}>
                Begin Vanilla Sourcing Inquiry
              </Button>
              
              <Button
                variant="whatsapp"
                href={whatsappUrl}
                target="_blank"
                style={{ minHeight: '48px', padding: '0 24px' }}
              >
                WhatsApp Concierge
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default VanillaPage;
