import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { ScrollReveal } from '../components/ScrollReveal';
import { Compass, Award, ShieldCheck, TreePine } from 'lucide-react';

export const Philosophy = () => {
  const pillars = [
    {
      number: '01',
      title: '100% Authentic Indonesian Origin',
      icon: Compass,
      description: 'Harvested from optimal tropical soils, our vanilla possesses a signature rich aroma, moist texture, and naturally high vanillin concentration unique to Indonesia.'
    },
    {
      number: '02',
      title: 'Craftsmanship & Strict Quality Control',
      icon: Award,
      description: 'Evolving from a trusted family business, every batch is meticulously hand-selected, naturally cured, and rigorously tested to ensure uniform sizing, proper moisture, and zero contamination.'
    },
    {
      number: '03',
      title: 'Export-Ready & International Standards',
      icon: ShieldCheck,
      description: 'We understand global market compliance. Our products are processed, packaged, and documented to meet strict international food safety and import regulations for seamless customs clearance.'
    },
    {
      number: '04',
      title: 'Direct Sourcing & Sustainable Supply',
      icon: TreePine,
      description: 'By eliminating unnecessary intermediaries, we offer competitive B2B pricing, guaranteed supply continuity, and transparent traceability back to the farm level.'
    }
  ];

  return (
    <section
      id="philosophy"
      className="section"
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'clamp(60px, 9vh, 120px)',
        paddingBottom: 'clamp(60px, 9vh, 120px)',
        position: 'relative'
      }}
      aria-label="Essence Indonesia Philosophy and Principles"
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: 'clamp(32px, 5vh, 64px)' }}>
          <ScrollReveal animation="fade-up" delay={80}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                margin: '0 0 16px 0',
                letterSpacing: '0.02em'
              }}
            >
              ESSENCE INDONESIA.
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0
              }}
            >
              Connecting Indonesia’s equatorial terroirs directly to international buyers through provenance integrity, strict quality standards, and dependable export operations.
            </p>
          </ScrollReveal>
        </div>

        {/* 4-Column on Desktop / 2-Column Haute Editorial on Mobile Grid */}
        <div
          className="philosophy-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(14px, 2.2vw, 26px)',
            alignItems: 'stretch'
          }}
        >
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80 + 120} style={{ display: 'flex' }}>
                <div
                  className="philosophy-card"
                  style={{
                    flex: 1,
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    padding: 'clamp(20px, 2.5vw, 26px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-card)',
                    transition: 'all 0.35s var(--ease-editorial)'
                  }}
                >
                  <div>
                    {/* Top Meta: Left-Aligned Unified Anchor (Icon + Number) */}
                    <div
                      className="pillar-anchor"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '14px'
                      }}
                    >
                      <div
                        className="pillar-icon-box"
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(140, 102, 45, 0.08)',
                          border: '1px solid rgba(140, 102, 45, 0.22)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-gold-dark)',
                          flexShrink: 0
                        }}
                      >
                        <IconComp size={16} />
                      </div>
                      <span
                        className="pillar-num"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          color: 'var(--accent-gold-dark)',
                          letterSpacing: '0.06em'
                        }}
                      >
                        {pillar.number}
                      </span>
                    </div>

                    {/* Pillar Title */}
                    <h3
                      className="pillar-title"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.35rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        margin: '0 0 10px 0',
                        lineHeight: 1.25
                      }}
                    >
                      {pillar.title}
                    </h3>

                    {/* Pillar Body Description */}
                    <p
                      className="body-small pillar-desc"
                      style={{
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                        margin: 0
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      <style>{`
        .philosophy-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-gold-dark) !important;
          box-shadow: var(--shadow-medium) !important;
        }
        .philosophy-card:hover .pillar-icon-box {
          background-color: rgba(140, 102, 45, 0.16) !important;
          border-color: var(--accent-gold-dark) !important;
        }
        @media (max-width: 767px) {
          .philosophy-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .philosophy-card {
            padding: 14px 12px !important;
            border-radius: 6px !important;
          }
          .pillar-meta {
            margin-bottom: 8px !important;
          }
          .pillar-num {
            font-size: 1.15rem !important;
          }
          .pillar-icon-box {
            display: none !important;
          }
          .pillar-title {
            font-size: 0.9375rem !important;
            line-height: 1.2 !important;
            margin-bottom: 4px !important;
            font-weight: 600 !important;
          }
          .pillar-subtitle {
            font-size: 0.5625rem !important;
            letter-spacing: 0.08em !important;
            margin-bottom: 6px !important;
          }
          .pillar-desc {
            font-size: 0.72rem !important;
            line-height: 1.45 !important;
          }
        }
        @media (max-width: 380px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .philosophy-card {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Philosophy;
