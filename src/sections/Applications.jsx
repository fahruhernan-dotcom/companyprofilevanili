import React, { useState } from 'react';
import { culinaryApplications } from '../data/applications';
import { SectionHeader } from '../components/SectionHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Applications = ({ onOpenInquiry }) => {
  const [selectedAppIndex, setSelectedAppIndex] = useState(0);
  const currentApp = culinaryApplications[selectedAppIndex];

  return (
    <section id="applications" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <ScrollReveal animation="fade-up">
          <SectionHeader
            overline="Haute Gastronomy"
            title="Where Vanilla Belongs"
            subtitle="Designed for master artisans where aromatic depth, oily luster, and persistent finish define the craft."
          />
        </ScrollReveal>

        <div className="grid-12" style={{ alignItems: 'center' }}>
          
          {/* Left: Magazine List of Applications */}
          <div style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {culinaryApplications.map((app, idx) => {
              const isSelected = idx === selectedAppIndex;
              return (
                <ScrollReveal key={app.index} animation="fade-right" delay={idx * 60}>
                  <div
                    onMouseEnter={() => setSelectedAppIndex(idx)}
                    onClick={() => setSelectedAppIndex(idx)}
                    style={{
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-xs)',
                      borderBottom: '1px solid var(--border-light)',
                      backgroundColor: isSelected ? 'var(--bg-surface)' : 'transparent',
                      borderLeft: isSelected ? '2.5px solid var(--accent-gold)' : '2.5px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setSelectedAppIndex(idx);
                    }}
                    aria-pressed={isSelected}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.25rem',
                          fontWeight: isSelected ? 600 : 400,
                          color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                          margin: 0,
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '10px'
                        }}
                      >
                        <span className="num-label" style={{ fontSize: '0.75rem' }}>{app.index}</span>
                        <span>{app.name}</span>
                      </h3>
                      <ArrowRight
                        size={14}
                        style={{
                          color: 'var(--accent-gold)',
                          opacity: isSelected ? 1 : 0,
                          transform: isSelected ? 'translateX(0)' : 'translateX(-8px)',
                          transition: 'all 0.25s ease'
                        }}
                      />
                    </div>
                    <p className="body-small" style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>
                      {app.role}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right: Dynamic Visual Reveal Card (Double-Bezel) */}
          <div style={{ gridColumn: 'span 6', paddingLeft: 'clamp(0px, 2vw, 24px)' }}>
            <ScrollReveal animation="fade-left" delay={100}>
              <div className="double-bezel-outer">
                <div
                  className="double-bezel-inner"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    position: 'relative'
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img
                      key={currentApp.image}
                      src={currentApp.image}
                      alt={currentApp.name}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        animation: 'appImageFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </div>

                  <div style={{ padding: '18px 22px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Sparkles size={13} style={{ color: 'var(--accent-gold)' }} />
                        <span className="overline" style={{ color: 'var(--accent-gold)', fontSize: '0.6875rem' }}>
                          {currentApp.name} Application
                        </span>
                      </div>
                    </div>

                    <p className="body-regular" style={{ color: 'var(--text-primary)', fontSize: '0.875rem', lineHeight: 1.6, margin: '0 0 14px 0' }}>
                      {currentApp.description}
                    </p>

                    {/* Commodity Matching Chip */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '10px',
                        padding: '8px 12px',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-light)',
                        borderRadius: 'var(--radius-xs)',
                        fontSize: '0.6875rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={13} style={{ color: 'var(--accent-gold)' }} />
                        <span style={{ color: 'var(--text-muted)' }}>Recommended Format:</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{currentApp.recommendedFormat}</strong>
                      </div>

                      <button
                        type="button"
                        onClick={onOpenInquiry}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--accent-gold)',
                          fontWeight: 600,
                          fontSize: '0.6875rem',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>Inquire</span>
                        <ArrowRight size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes appImageFade {
          from {
            opacity: 0.7;
            transform: scale(1.02);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Applications;
