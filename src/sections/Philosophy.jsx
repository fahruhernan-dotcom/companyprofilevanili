import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { ScrollReveal } from '../components/ScrollReveal';
import { Compass, Award, ShieldCheck, TreePine } from 'lucide-react';

export const Philosophy = () => {
  const pillars = [
    {
      number: '01',
      title: '100% Authentic Indonesian Origin',
      subtitle: 'Optimal Tropical Terroir',
      icon: Compass,
      description: 'Harvested from optimal tropical soils, our vanilla possesses a signature rich aroma, moist texture, and naturally high vanillin concentration unique to Indonesia.'
    },
    {
      number: '02',
      title: 'Craftsmanship & Strict Quality Control',
      subtitle: 'Family Heritage Rigor',
      icon: Award,
      description: 'Evolving from a trusted family business, every batch is meticulously hand-selected, naturally cured, and rigorously tested to ensure uniform sizing, proper moisture, and zero contamination.'
    },
    {
      number: '03',
      title: 'Export-Ready & International Standards',
      subtitle: 'Global Compliance',
      icon: ShieldCheck,
      description: 'We understand global market compliance. Our products are processed, packaged, and documented to meet strict international food safety and import regulations for seamless customs clearance.'
    },
    {
      number: '04',
      title: 'Direct Sourcing & Sustainable Supply',
      subtitle: 'Transparent Farm Supply',
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
          <ScrollReveal animation="fade-up" delay={50}>
            <span className="overline overline-accent" style={{ display: 'block', marginBottom: '12px' }}>
              04 · Philosophy & Principles
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
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
            gap: 'clamp(12px, 2vw, 26px)',
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
                    padding: 'clamp(18px, 3.5vw, 36px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-subtle)',
                    transition: 'all 0.3s var(--ease-editorial)'
                  }}
                >
                  <div>
                    {/* Top Meta: Number + Icon */}
                    <div
                      className="pillar-meta"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '20px'
                      }}
                    >
                      <span
                        className="pillar-num"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.75rem',
                          fontWeight: 400,
                          color: 'var(--accent-gold)',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {pillar.number}
                      </span>
                      <div
                        className="pillar-icon-box"
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(200, 169, 107, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-gold)'
                        }}
                      >
                        <IconComp size={18} />
                      </div>
                    </div>

                    {/* Pillar Title & Subtitle */}
                    <h3
                      className="pillar-title"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.45rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        margin: '0 0 6px 0',
                        lineHeight: 1.25
                      }}
                    >
                      {pillar.title}
                    </h3>
                    
                    <span
                      className="pillar-subtitle"
                      style={{
                        display: 'block',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-gold)',
                        marginBottom: '14px'
                      }}
                    >
                      {pillar.subtitle}
                    </span>

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
          border-color: var(--border-gold) !important;
          box-shadow: var(--shadow-medium);
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
