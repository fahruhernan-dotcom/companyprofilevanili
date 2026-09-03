import React from 'react';
import { brandConfig } from '../config/brandConfig';
import terroirImg from '../assets/images/vanilla_farm_real.webp';
import { ScrollReveal } from '../components/ScrollReveal';
import { Mountain, Sun, Sparkles, Compass } from 'lucide-react';

export const SelectedOrigins = () => {
  const terroirPillars = [
    {
      icon: Mountain,
      title: 'Volcanic Mineral Soil',
      tag: 'Andosol Soils',
      description: 'Rich volcanic ash and mineral-dense andosol soils provide natural nutrient depth essential for slow, concentrated botanical development.'
    },
    {
      icon: Sun,
      title: 'Equatorial Microclimates',
      tag: 'Tropical Humidity',
      description: 'Year-round equatorial sunlight, gentle seasonal rainfall, and consistent tropical humidity provide optimal conditions for natural outdoor curing and drying.'
    },
    {
      icon: Sparkles,
      title: 'Origin Stewardship',
      tag: 'Artisanal Care',
      description: 'Honoring regional agrarian knowledge and meticulous physical sorting across Indonesian origins, ensuring pure natural quality without synthetic shortcuts.'
    }
  ];

  return (
    <section
      id="selected-origins"
      className="section"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        paddingTop: 'clamp(80px, 10vh, 120px)',
        paddingBottom: 'clamp(80px, 10vh, 120px)',
        position: 'relative'
      }}
      aria-label="Selected Indonesian Origins and Terroir"
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: 'clamp(40px, 6vh, 60px)' }}>
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
              SELECTED INDONESIAN ORIGINS.
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
              Equatorial volcanic microclimates, mineral-rich soils, and careful origin stewardship across the Indonesian archipelago.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid-12" style={{ alignItems: 'center' }}>
          
          {/* Left Column (6 cols): Terroir Landscape (Frameless Clean Edge) */}
          <div style={{ gridColumn: 'span 6' }}>
            <ScrollReveal animation="fade-right" delay={180}>
              <div
                className="img-container"
                style={{
                  position: 'relative',
                  aspectRatio: '16/11',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-medium)',
                  backgroundColor: 'var(--bg-surface)'
                }}
              >
                <img
                  src={terroirImg}
                  alt="Authentic Indonesian vanilla vine cultivation on trellises in volcanic mineral soil"
                  className="img-hover-zoom"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />

                  {/* Minimalist Coordinate Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      backgroundColor: 'rgba(23, 21, 18, 0.88)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--border-dark-gold)',
                      color: 'var(--text-inverse-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    <Compass size={12} style={{ color: 'var(--accent-gold)' }} />
                    <span>0° Equator · {brandConfig.origin}</span>
                  </div>
                </div>
            </ScrollReveal>
          </div>

          {/* Right Column (6 cols): 3 Terroir Characteristics as Editorial List */}
          <div
            style={{
              gridColumn: 'span 6',
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: 'clamp(0px, 2.5vw, 28px)'
            }}
          >
            {terroirPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <ScrollReveal key={idx} animation="fade-left" delay={idx * 120 + 200}>
                  <div
                    className="terroir-pillar-item"
                    style={{
                      padding: '20px 0',
                      borderBottom: idx < terroirPillars.length - 1 ? '1px solid var(--border-light)' : 'none',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '18px',
                      transition: 'all 0.3s var(--ease-editorial)'
                    }}
                  >
                    <div
                      className="terroir-icon-box"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(140, 102, 45, 0.08)',
                        border: '1px solid rgba(140, 102, 45, 0.22)',
                        color: 'var(--accent-gold-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <IconComp size={18} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          justifyContent: 'space-between',
                          gap: '12px',
                          marginBottom: '6px'
                        }}
                      >
                        <h3
                          className="terroir-title"
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            margin: 0
                          }}
                        >
                          {pillar.title}
                        </h3>
                        <span
                          className="terroir-tag"
                          style={{
                            fontSize: '0.6875rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--accent-gold-dark)'
                          }}
                        >
                          {pillar.tag}
                        </span>
                      </div>
                      <p
                        className="body-small terroir-desc"
                        style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.65 }}
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

        {/* Provenance Archipelago Data Chips Bar */}
        <ScrollReveal animation="fade-up" delay={450}>
          <div
            style={{
              marginTop: 'clamp(32px, 5vh, 48px)',
              padding: '16px 20px',
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Compass size={15} style={{ color: 'var(--accent-gold)' }} />
              <span className="overline" style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                Equatorial Origin Belts:
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, padding: '4px 12px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', color: 'var(--text-primary)' }}>
                🌋 East Java Volcanic Belt (1,400–1,800 MASL)
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, padding: '4px 12px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', color: 'var(--text-primary)' }}>
                🏝️ Bali Kintamani Highlands (1,200–1,500 MASL)
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, padding: '4px 12px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', color: 'var(--text-primary)' }}>
                🌿 Flores & Sulawesi Slopes (Andosol Soils)
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .terroir-pillar-card {
            padding: 12px 14px !important;
            gap: 12px !important;
            border-radius: 6px !important;
          }
          .terroir-icon-box {
            width: 28px !important;
            height: 28px !important;
          }
          .terroir-title {
            font-size: 1rem !important;
          }
          .terroir-tag {
            font-size: 0.58rem !important;
          }
          .terroir-desc {
            font-size: 0.75rem !important;
            line-height: 1.45 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SelectedOrigins;
