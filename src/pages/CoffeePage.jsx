import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import coffeeImg from '../assets/images/terroir_origin.webp';
import { ArrowLeft, Coffee, MessageCircle, ShieldCheck, FileText, CheckCircle, Sparkles } from 'lucide-react';

export const CoffeePage = ({
  onNavigateHome,
  onOpenInquiry
}) => {
  const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Hello Essence Indonesia, I would like to inquire about Selected Indonesian Coffee export sourcing.')}`;

  const coffeeParameters = [
    {
      label: 'Commodity Type',
      value: 'Green Coffee (Raw / Unroasted)',
      detail: 'Available for international commercial export.'
    },
    {
      label: 'Origin Terroir',
      value: 'Selected Indonesian Origins',
      detail: 'Equatorial volcanic soil regions across Indonesia.'
    },
    {
      label: 'Specifications',
      value: 'Available Upon Inquiry',
      detail: 'Detailed moisture, grade, and screen size dossiers provided upon commercial request.'
    },
    {
      label: 'Commercial Terms',
      value: 'FOB / CIF Available',
      detail: 'Incoterms contracting, lot allocations, and sample dispatch upon buyer inquiry.'
    }
  ];

  return (
    <div className="page-coffee" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      
      {/* Editorial Coffee Header (100svh Full-Screen Experience) */}
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
            src="/videos/coffee_hero_cinematic.mp4"
            poster={coffeeImg}
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
              rgba(17, 15, 12, 0.70) 45%,
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
                SELECTED INDONESIAN COFFEE.
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
                Direct export sourcing of selected Indonesian green coffee for international commercial roasters and commodity procurement teams. Technical specifications and lot availability provided upon commercial inquiry.
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
                  <span>Start Sourcing Inquiry</span>
                  <Sparkles size={12} />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    textDecoration: 'none',
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
                  <MessageCircle size={12} style={{ color: '#25D366' }} />
                  <span>WhatsApp Desk</span>
                </a>
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

      {/* Sourcing Framework Section */}
      <section
        style={{
          padding: 'clamp(70px, 9vh, 110px) 0',
          backgroundColor: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          
          <div className="grid-12" style={{ alignItems: 'center' }}>
            
            {/* Visual Terroir Frame */}
            <div style={{ gridColumn: 'span 5' }}>
              <ScrollReveal animation="fade-right">
                <div className="double-bezel-outer">
                  <div className="double-bezel-inner img-container" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={coffeeImg}
                      alt="Indonesian volcanic highland coffee agroforestry terroir"
                      className="img-hover-zoom"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Specifications & Inquiry Guardrail Grid */}
            <div style={{ gridColumn: 'span 7', paddingLeft: 'clamp(0px, 2vw, 24px)' }}>
              <ScrollReveal animation="fade-left">
                <span className="overline overline-accent" style={{ display: 'block', marginBottom: '10px' }}>
                  Commercial Specifications
                </span>
                
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    margin: '0 0 16px 0',
                    lineHeight: 1.2
                  }}
                >
                  Export Procurement Framework
                </h2>

                <p
                  className="body-small"
                  style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}
                >
                  To maintain strict export integrity, commercial specifications and lot allocations for Indonesian green coffee are structured directly in consultation with procurement teams.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                  {coffeeParameters.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '16px 18px',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--accent-gold)',
                          marginBottom: '4px'
                        }}
                      >
                        {item.label}
                      </span>
                      <strong
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.1rem',
                          color: 'var(--text-primary)',
                          marginBottom: '4px'
                        }}
                      >
                        {item.value}
                      </strong>
                      <span className="body-small" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* Sourcing Call to Action */}
      <section
        style={{
          padding: 'clamp(60px, 8vh, 100px) 0',
          backgroundColor: 'var(--bg-primary)',
          textAlign: 'center'
        }}
      >
        <div className="container-narrow">
          <ScrollReveal animation="fade-up">
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                color: 'var(--text-primary)',
                margin: '0 0 16px 0',
                lineHeight: 1.2
              }}
            >
              Begin Your Indonesian Coffee Sourcing Inquiry
            </h2>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '580px',
                margin: '0 auto 32px'
              }}
            >
              Connect directly with our export desk for origin availability, container volume quotations, and pre-shipment evaluation protocols.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
              <Button variant="primary" onClick={onOpenInquiry} style={{ minHeight: '48px' }}>
                Submit Coffee Sourcing Inquiry →
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default CoffeePage;
