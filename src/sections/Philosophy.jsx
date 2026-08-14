import React from 'react';
import { brandStory } from '../data/brandStory';
import { ScrollReveal } from '../components/ScrollReveal';
import flowerImg from '../assets/images/brand_flower.jpg';

export const Philosophy = () => {
  return (
    <section
      id="philosophy"
      className="section"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div className="container">
        
        {/* Breathing Room Manifesto */}
        <ScrollReveal animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vh, 2.5rem)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span className="overline overline-accent" style={{ color: 'var(--accent-gold)' }}>
                Brand Philosophy
              </span>
              <span style={{ width: '24px', height: '1px', backgroundColor: 'var(--border-gold)', display: 'inline-block' }}></span>
            </div>

            <h2
              className="heading-section"
              style={{
                maxWidth: '840px',
                margin: '0 auto 14px',
                lineHeight: 1.15
              }}
            >
              {brandStory.manifesto.lead}{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-primary)' }}>
                {brandStory.manifesto.statement}
              </span>
            </h2>

            <p
              className="body-lead"
              style={{
                maxWidth: '680px',
                margin: '0 auto',
                color: 'var(--text-secondary)',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.125rem)'
              }}
            >
              {brandStory.manifesto.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Integrated Visual & 3 Minimal Editorial Pillars */}
        <div className="grid-12" style={{ alignItems: 'center', marginTop: 'clamp(1rem, 2vh, 2rem)' }}>
          
          {/* Left Col: Botanical Still Frame (Double-Bezel) */}
          <div style={{ gridColumn: 'span 5' }}>
            <ScrollReveal animation="fade-right" delay={80}>
              <div className="double-bezel-outer">
                <div className="double-bezel-inner img-container" style={{ aspectRatio: '16/10' }}>
                  <img
                    src={flowerImg}
                    alt="Vanilla orchid flower blooming on volcanic plantation vine"
                    className="img-hover-zoom"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Col: 3 Pillars Stack */}
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {brandStory.pillars.map((pillar, idx) => (
              <ScrollReveal key={idx} animation="fade-left" delay={idx * 100}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '12px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'var(--border-gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                  }}
                >
                  <span
                    className="num-label"
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--accent-gold)',
                      marginTop: '2px',
                      flexShrink: 0
                    }}
                  >
                    {pillar.number}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.2rem',
                        marginBottom: '4px',
                        color: 'var(--text-primary)',
                        lineHeight: 1.2
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="body-small"
                      style={{
                        color: 'var(--text-secondary)',
                        margin: 0,
                        lineHeight: 1.5
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Philosophy;
