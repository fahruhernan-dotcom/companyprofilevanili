import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import coffeeTerroirImg from '../assets/images/terroir_origin.webp';
import { ArrowRight } from 'lucide-react';

const vanillaImg = '/images/catalog_products/origin_planifolia_hero.webp';

export const TwoOrigins = ({ onNavigate, onOpenInquiry }) => {
  const handleNav = (e, targetRoute) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onNavigate) {
      onNavigate(targetRoute, targetRoute);
    } else {
      window.location.hash = targetRoute;
    }
  };

  return (
    <section
      id="origins"
      className="section"
      style={{
        backgroundColor: 'var(--bg-primary)',
        paddingTop: 'clamp(80px, 10vh, 120px)',
        paddingBottom: 'clamp(80px, 10vh, 120px)',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label="Two Origins: Vanilla and Coffee"
    >
      <div className="container">
        {/* Section Editorial Header */}
        <div style={{ maxWidth: '640px', marginBottom: 'clamp(40px, 6vh, 64px)' }}>
          <ScrollReveal animation="fade-up" delay={50}>
            <span className="overline overline-accent" style={{ display: 'block', marginBottom: '12px' }}>
              02 · Dual Origins
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
              TWO ORIGINS.
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
              Two Indonesian origins, presented for international buyers.
            </p>
          </ScrollReveal>
        </div>

        {/* Symmetrical Editorial Doors Grid */}
        <div
          className="editorial-doors-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(14px, 3.5vw, 40px)',
            alignItems: 'stretch'
          }}
        >
          {/* =========================================================================
              PANEL 01: VANILLA (Entire Box Clickable)
              ========================================================================= */}
          <ScrollReveal animation="fade-up" delay={200} style={{ display: 'flex' }}>
            <a
              href="/vanilla"
              onClick={(e) => handleNav(e, 'vanilla')}
              className="editorial-door"
              style={{
                flex: 1,
                position: 'relative',
                minHeight: 'clamp(380px, 52vh, 540px)',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(20px, 4vw, 44px)',
                boxSizing: 'border-box',
                backgroundColor: 'var(--bg-dark)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'transform 0.4s var(--ease-editorial), border-color 0.3s ease, box-shadow 0.4s var(--ease-editorial)'
              }}
              aria-label="Explore Vanilla planifolia and tahitensis dossier"
            >
              {/* Background Image Layer */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  overflow: 'hidden'
                }}
              >
                <img
                  src={vanillaImg}
                  alt="Indonesian cured vanilla pods on natural linen"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 40%',
                    transition: 'transform 0.8s var(--ease-editorial)'
                  }}
                  className="door-bg-img"
                />
              </div>

              {/* Scrim Gradient Overlay for Contrast */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  background: `linear-gradient(
                    180deg,
                    rgba(23, 21, 18, 0.4) 0%,
                    rgba(23, 21, 18, 0.6) 45%,
                    rgba(23, 21, 18, 0.96) 100%
                  )`,
                  pointerEvents: 'none'
                }}
              />

              {/* Top Quick Metrics Bar */}
              <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 'var(--radius-pill)', backgroundColor: 'rgba(200, 169, 107, 0.22)', color: 'var(--accent-gold)', border: '1px solid rgba(200, 169, 107, 0.4)', backdropFilter: 'blur(6px)' }}>
                  Vanillin ≥ 2.0%
                </span>
                <span style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 'var(--radius-pill)', backgroundColor: 'rgba(23, 21, 18, 0.65)', color: 'rgba(246, 242, 234, 0.9)', border: '1px solid rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(6px)' }}>
                  Gourmet Grade A
                </span>
              </div>

              {/* Content Overlay */}
              <div style={{ position: 'relative', zIndex: 3 }}>
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    marginBottom: '8px'
                  }}
                >
                  COMMODITY I · VANILLA
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                    fontWeight: 300,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    margin: '0 0 10px 0',
                    letterSpacing: '0.02em'
                  }}
                >
                  Vanilla planifolia<br />
                  <span style={{ fontStyle: 'italic', color: 'rgba(246, 242, 234, 0.85)' }}>
                    & tahitensis
                  </span>
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'rgba(246, 242, 234, 0.78)',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0',
                    maxWidth: '380px'
                  }}
                >
                  Single-origin Gourmet Grade A beans and pure natural derivatives (caviar, paste, ground powder) cured under 90-day equatorial conditioning.
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--accent-gold)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    paddingBottom: '4px',
                    borderBottom: '1px solid rgba(200, 169, 107, 0.4)',
                    transition: 'all 0.25s ease'
                  }}
                  className="door-cta"
                >
                  <span>Explore Vanilla Dossier ↗</span>
                </div>
              </div>
            </a>
          </ScrollReveal>

          {/* =========================================================================
              PANEL 02: COFFEE (Entire Box Clickable)
              ========================================================================= */}
          <ScrollReveal animation="fade-up" delay={300} style={{ display: 'flex' }}>
            <a
              href="/coffee"
              onClick={(e) => handleNav(e, 'coffee')}
              className="editorial-door"
              style={{
                flex: 1,
                position: 'relative',
                minHeight: 'clamp(380px, 52vh, 540px)',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(20px, 4vw, 44px)',
                boxSizing: 'border-box',
                backgroundColor: 'var(--bg-dark)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'transform 0.4s var(--ease-editorial), border-color 0.3s ease, box-shadow 0.4s var(--ease-editorial)'
              }}
              aria-label="Explore Selected Indonesian Green Coffee Beans dossier"
            >
              {/* Background Image Layer */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  overflow: 'hidden'
                }}
              >
                <img
                  src={coffeeTerroirImg}
                  alt="Indonesian volcanic highland terroir landscape"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 40%',
                    transition: 'transform 0.8s var(--ease-editorial)'
                  }}
                  className="door-bg-img"
                />
              </div>

              {/* Scrim Gradient Overlay for Contrast */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  background: `linear-gradient(
                    180deg,
                    rgba(23, 21, 18, 0.4) 0%,
                    rgba(23, 21, 18, 0.6) 45%,
                    rgba(23, 21, 18, 0.96) 100%
                  )`,
                  pointerEvents: 'none'
                }}
              />

              {/* Top Quick Metrics Bar */}
              <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 'var(--radius-pill)', backgroundColor: 'rgba(200, 169, 107, 0.22)', color: 'var(--accent-gold)', border: '1px solid rgba(200, 169, 107, 0.4)', backdropFilter: 'blur(6px)' }}>
                  Selected Green Coffee
                </span>
                <span style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 'var(--radius-pill)', backgroundColor: 'rgba(23, 21, 18, 0.65)', color: 'rgba(246, 242, 234, 0.9)', border: '1px solid rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(6px)' }}>
                  1,200+ MASL High Terroir
                </span>
              </div>

              {/* Content Overlay */}
              <div style={{ position: 'relative', zIndex: 3 }}>
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    marginBottom: '8px'
                  }}
                >
                  COMMODITY II · COFFEE
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                    fontWeight: 300,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    margin: '0 0 10px 0',
                    letterSpacing: '0.02em'
                  }}
                >
                  Selected Indonesian Coffee<br />
                  <span style={{ fontStyle: 'italic', color: 'rgba(246, 242, 234, 0.85)' }}>
                    Export Grade Green Beans
                  </span>
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'rgba(246, 242, 234, 0.78)',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0',
                    maxWidth: '380px'
                  }}
                >
                  High-altitude Indonesian green coffee sourced from volcanic microclimates. Screen size grading and FOB/CIF contracting upon commercial request.
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--accent-gold)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    paddingBottom: '4px',
                    borderBottom: '1px solid rgba(200, 169, 107, 0.4)',
                    transition: 'all 0.25s ease'
                  }}
                  className="door-cta"
                >
                  <span>Explore Coffee Dossier ↗</span>
                </div>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .editorial-door:hover {
          transform: translateY(-6px);
          border-color: var(--border-gold) !important;
          box-shadow: 0 16px 40px -10px rgba(200, 169, 107, 0.2), 0 8px 24px -6px rgba(23, 21, 18, 0.4);
        }
        .editorial-door:hover .door-bg-img {
          transform: scale(1.05);
        }
        .editorial-door:hover .door-cta {
          color: #DFC182;
          border-bottom-color: var(--accent-gold);
        }
        @media (max-width: 767px) {
          .editorial-doors-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .editorial-door {
            min-height: 260px !important;
            padding: 14px 12px !important;
            border-radius: 6px !important;
          }
          .editorial-door h3 {
            font-size: 1.05rem !important;
            margin-bottom: 4px !important;
            line-height: 1.15 !important;
          }
          .editorial-door p {
            font-size: 0.72rem !important;
            line-height: 1.4 !important;
            margin-bottom: 12px !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 2 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }
          .editorial-door .door-cta {
            font-size: 0.65rem !important;
            letter-spacing: 0.08em !important;
          }
        }
        @media (max-width: 360px) {
          .editorial-doors-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .editorial-door,
          .door-bg-img {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TwoOrigins;
