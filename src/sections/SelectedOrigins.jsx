import React from 'react';
import { brandConfig } from '../config/brandConfig';
import terroirImg from '../assets/images/terroir_origin.webp';
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
          <ScrollReveal animation="fade-up" delay={50}>
            <span className="overline overline-accent" style={{ display: 'block', marginBottom: '12px' }}>
              03 · Provenance & Terroir
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
          
          {/* Left Column (6 cols): Framed Terroir Landscape (Double-Bezel) */}
          <div style={{ gridColumn: 'span 6' }}>
            <ScrollReveal animation="fade-right" delay={180}>
              <div className="double-bezel-outer">
                <div
                  className="double-bezel-inner img-container"
                  style={{ position: 'relative', aspectRatio: '16/11' }}
                >
                  <img
                    src={terroirImg}
                    alt="Indonesian equatorial highland agricultural terroir"
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
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (6 cols): 3 Terroir Characteristics */}
          <div
            style={{
              gridColumn: 'span 6',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              paddingLeft: 'clamp(0px, 2vw, 24px)'
            }}
          >
            {terroirPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <ScrollReveal key={idx} animation="fade-left" delay={idx * 120 + 200}>
                  <div
                    style={{
                      padding: '18px 22px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      transition: 'all 0.25s var(--ease-editorial)',
                      boxShadow: 'var(--shadow-subtle)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-gold)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-subtle)';
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(200, 169, 107, 0.12)',
                        color: 'var(--accent-gold)',
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
                          gap: '10px',
                          marginBottom: '4px'
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            margin: 0
                          }}
                        >
                          {pillar.title}
                        </h3>
                        <span
                          style={{
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: 'var(--accent-gold)'
                          }}
                        >
                          {pillar.tag}
                        </span>
                      </div>
                      <p
                        className="body-small"
                        style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6 }}
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
    </section>
  );
};

export default SelectedOrigins;
