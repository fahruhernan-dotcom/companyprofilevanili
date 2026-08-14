import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { brandStory } from '../data/brandStory';
import terroirImg from '../assets/images/terroir_origin.jpg';
import { SectionHeader } from '../components/SectionHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { Compass, Mountain, CloudRain, Sprout } from 'lucide-react';

export const TerroirOrigin = () => {
  const icons = [Mountain, CloudRain, Sprout];
  const terroirParams = [
    {
      title: 'Volcanic Mountain Soil',
      metric: '400 – 800m ASL',
      description: 'Rich in potassium, magnesium, and volcanic ash minerals, giving Indonesian vanilla beans their thick oily pods and distinct vanillin density.'
    },
    {
      title: 'Equatorial Microclimate',
      metric: '80%+ Humidity',
      description: 'Year-round equatorial rainfall and tropical humidity foster lush agroforestry canopies that protect orchid blossoms from harsh sun.'
    },
    {
      title: 'Living Shade Agroforestry',
      metric: '100% Bio-Shade',
      description: 'Vines climb upon living legume host trees (Gamal & Albizia), cultivating natural nitrogen fixation without synthetic chemical fertilizers.'
    }
  ];

  return (
    <section
      id="terroir"
      className="section"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)'
      }}
    >
      <div className="container">
        
        <ScrollReveal animation="fade-up">
          <SectionHeader
            overline="Origin & Terroir"
            title={brandStory.terroir.heading}
            subtitle={brandStory.terroir.subheading}
          />
        </ScrollReveal>

        {/* 2-Column Balanced Screen-Fit Grid */}
        <div className="grid-12" style={{ alignItems: 'center' }}>
          
          {/* Col 1-6: Cinematic Terroir Visual Frame (Double-Bezel) */}
          <div style={{ gridColumn: 'span 6' }}>
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="double-bezel-outer">
                <div
                  className="double-bezel-inner img-container"
                  style={{ position: 'relative', aspectRatio: '16/11' }}
                >
                  <img
                    src={terroirImg}
                    alt="Misty volcanic mountain highlands in Indonesia with terraced vanilla agroforestry vines"
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
                      padding: '8px 14px',
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

          {/* Col 7-12: 3 Microclimate Parameter Cards */}
          <div style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: 'clamp(0px, 2vw, 24px)' }}>
            {terroirParams.map((param, idx) => {
              const IconComp = icons[idx] || Mountain;
              return (
                <ScrollReveal key={idx} animation="fade-left" delay={idx * 120}>
                  <div
                    style={{
                      padding: '16px 20px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      transition: 'all 0.25s ease',
                      boxShadow: 'var(--shadow-subtle)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-gold)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                      e.currentTarget.style.transform = 'translateY(0)';
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

                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.2rem',
                            color: 'var(--text-primary)',
                            margin: 0
                          }}
                        >
                          {param.title}
                        </h3>
                        <span className="num-label" style={{ fontSize: '0.6875rem' }}>
                          {param.metric}
                        </span>
                      </div>
                      <p className="body-small" style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {param.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TerroirOrigin;
