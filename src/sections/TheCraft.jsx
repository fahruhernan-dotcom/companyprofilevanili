import React, { useState } from 'react';
import { craftSteps } from '../data/craftSteps';
import { SectionHeader } from '../components/SectionHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { Sparkles, ChevronRight, Check } from 'lucide-react';

export const TheCraft = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = craftSteps[activeStepIndex];

  return (
    <section id="craft" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <ScrollReveal animation="fade-up">
          <SectionHeader
            overline="Artisanal Methodology"
            title="The Four Pillars of Vanilla Craft"
            subtitle="From ephemeral morning blooms to ninety days of sun-curing — honoring traditional horticultural mastery."
          />
        </ScrollReveal>

        {/* Desktop Step Selector Navigation */}
        <ScrollReveal animation="fade-up" delay={80}>
          <div
            className="craft-desktop-nav"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '14px',
              marginBottom: '24px',
              position: 'relative'
            }}
          >
            {craftSteps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    padding: '10px 14px',
                    borderLeft: isActive ? '2px solid var(--accent-gold)' : '2px solid transparent',
                    backgroundColor: isActive ? 'var(--bg-surface)' : 'transparent',
                    borderRadius: 'var(--radius-xs)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <span
                    className="num-label"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '2px',
                      fontSize: '0.6875rem',
                      color: isActive ? 'var(--accent-gold)' : 'var(--text-muted)'
                    }}
                  >
                    <span>STEP {step.step}</span>
                    {idx < activeStepIndex && <Check size={11} />}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      display: 'block'
                    }}
                  >
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Desktop Active Step Narrative & Image Display */}
        <div className="craft-desktop-view" style={{ display: 'block' }}>
          <div className="grid-12" style={{ alignItems: 'center' }}>
            
            {/* Left: Step Image (Double-Bezel) */}
            <div style={{ gridColumn: 'span 7' }}>
              <div className="double-bezel-outer">
                <div
                  className="double-bezel-inner img-container"
                  style={{ position: 'relative', aspectRatio: '16/10' }}
                >
                  <img
                    key={activeStep.image}
                    src={activeStep.image}
                    alt={activeStep.alt}
                    className="img-hover-zoom"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      animation: 'craftFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />

                  
                  {/* Step Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(23, 21, 18, 0.88)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      color: 'var(--text-inverse-primary)',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-xs)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Sparkles size={12} style={{ color: 'var(--accent-gold)' }} />
                    <span>Phase {activeStep.step} of 04 · {activeStep.name}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Step Detailed Narrative */}
            <div
              style={{
                gridColumn: 'span 5',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingLeft: 'clamp(0px, 2vw, 24px)'
              }}
            >
              <span className="num-label" style={{ fontSize: '0.875rem', marginBottom: '6px' }}>
                {activeStep.step} / 04
              </span>
              
              <h3 className="heading-sub" style={{ marginBottom: '10px', fontSize: 'clamp(1.4rem, 2vw, 1.85rem)' }}>
                {activeStep.name}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  marginBottom: '14px',
                  lineHeight: 1.3
                }}
              >
                "{activeStep.tagline}"
              </p>

              <p className="body-regular" style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '18px' }}>
                {activeStep.description}
              </p>

              {/* Next Step Nav Hint */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '14px' }}>
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((activeStepIndex + 1) % craftSteps.length)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                >
                  <span>Next: Step 0{((activeStepIndex + 1) % craftSteps.length) + 1} ({craftSteps[(activeStepIndex + 1) % craftSteps.length].name})</span>
                  <ChevronRight size={14} style={{ color: 'var(--accent-gold)' }} />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Accordion Stack View */}
        <div className="craft-mobile-view" style={{ display: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {craftSteps.map((step) => (
              <div
                key={step.id}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden'
                }}
              >
                <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img
                    src={step.image}
                    alt={step.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: '16px' }}>
                  <span className="num-label" style={{ fontSize: '0.75rem', display: 'block', marginBottom: '4px' }}>
                    STEP {step.step}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', marginBottom: '8px' }}>
                    {step.name}
                  </h3>
                  <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes craftFade {
          from { opacity: 0.6; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 767px) {
          .craft-desktop-nav, .craft-desktop-view {
            display: none !important;
          }
          .craft-mobile-view {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TheCraft;
