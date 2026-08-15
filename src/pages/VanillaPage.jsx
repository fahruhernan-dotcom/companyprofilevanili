import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import heroMacroImg from '../assets/images/hero_macro.jpg';
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
      
      {/* Editorial Vanilla Header with Video Background */}
      <section
        style={{
          paddingTop: 'clamp(120px, 15vh, 160px)',
          paddingBottom: 'clamp(60px, 10vh, 100px)',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-inverse-primary)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {/* Cinematic Video Background Layer */}
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
            src="/videos/vanilla_hero_macro.mp4"
            poster={heroMacroImg}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 45%',
              transform: 'scale(1.02)'
            }}
          />
        </div>

        {/* Scrim Gradient Overlay for Contrast & Text Legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background: `linear-gradient(
              180deg,
              rgba(17, 15, 12, 0.85) 0%,
              rgba(17, 15, 12, 0.72) 42%,
              rgba(17, 15, 12, 0.95) 100%
            )`,
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div style={{ maxWidth: '780px' }}>
            <ScrollReveal animation="fade-up" delay={50}>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                  fontWeight: 300,
                  color: 'var(--text-inverse-primary)',
                  lineHeight: 1.1,
                  margin: '0 0 18px 0',
                  letterSpacing: '0.02em',
                  textShadow: '0 2px 16px rgba(0, 0, 0, 0.7)'
                }}
              >
                INDONESIAN VANILLA.
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.0625rem)',
                  color: 'var(--text-inverse-secondary)',
                  lineHeight: 1.7,
                  margin: '0 0 28px 0',
                  maxWidth: '640px',
                  textShadow: '0 1px 10px rgba(0, 0, 0, 0.6)'
                }}
              >
                Single-origin <em>Vanilla planifolia</em> and <em>Vanilla tahitensis</em> cured under equatorial sun and slow wooden-box conditioning. Verified with lab-tested vanillin content and export certifications.
              </p>
            </ScrollReveal>

            {/* Compact Minimal Luxury Action Buttons */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'var(--accent-gold)',
                    border: '1px solid var(--accent-gold)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '8px 18px',
                    color: 'var(--bg-dark)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#DFC182')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-gold)')}
                >
                  <span>Request Quotation</span>
                  <Sparkles size={12} />
                </button>

                <button
                  type="button"
                  onClick={onOpenSpecSheet}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'rgba(246, 242, 234, 0.06)',
                    border: '1px solid var(--border-dark-gold)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '8px 16px',
                    color: 'var(--text-inverse-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-inverse-primary)';
                    e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-inverse-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-dark-gold)';
                  }}
                >
                  <FileText size={12} />
                  <span>Spec Dossier</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Minimalist Scroll Down Cue */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            opacity: 0.6,
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
              <Button variant="primary" onClick={onOpenInquiry} style={{ minHeight: '48px', padding: '0 28px' }}>
                Begin Vanilla Sourcing Inquiry →
              </Button>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  minHeight: '48px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: '#FFF',
                  borderColor: 'rgba(255,255,255,0.2)'
                }}
              >
                <MessageCircle size={16} style={{ color: '#25D366' }} />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default VanillaPage;
