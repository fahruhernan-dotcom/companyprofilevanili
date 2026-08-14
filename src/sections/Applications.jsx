import React, { useState } from 'react';
import { culinaryApplications } from '../data/applications';
import { SectionHeader } from '../components/SectionHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { Sparkles, ArrowRight } from 'lucide-react';

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
                      padding: '12px 18px',
                      borderRadius: 'var(--radius-xs)',
                      borderBottom: '1px solid var(--border-light)',
                      backgroundColor: isSelected ? 'var(--bg-surface)' : 'transparent',
                      borderLeft: isSelected ? '2px solid var(--accent-gold)' : '2px solid transparent',
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
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
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        animation: 'appImageFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </div>

                  <div style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                      <Sparkles size={13} style={{ color: 'var(--accent-gold)' }} />
                      <span className="overline" style={{ color: 'var(--accent-gold)', fontSize: '0.6875rem' }}>
                        {currentApp.name} Application
                      </span>
                    </div>

                    <p className="body-regular" style={{ color: 'var(--text-primary)', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>
                      {currentApp.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes appImageFade {
          from { opacity: 0.5; transform: scale(1.03); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Applications;
