import React from 'react';
import { organicAccreditations } from '../data/specifications';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './Button';
import { ShieldCheck, CheckCircle2, Award, FileText, ArrowRight, Leaf } from 'lucide-react';

export const OrganicCertificationsShowcase = ({ onOpenInquiry }) => {
  return (
    <div
      className="organic-certifications-showcase"
      style={{
        marginTop: 'clamp(48px, 6vh, 64px)',
        paddingTop: 'clamp(40px, 5vh, 56px)',
        borderTop: '1px solid var(--border-light)'
      }}
    >
      {/* Header with Luxury Editorial Framing */}
      <ScrollReveal animation="fade-up">
        <div style={{ maxWidth: '720px', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <Leaf size={16} style={{ color: 'var(--accent-gold)' }} />
            <span className="overline overline-accent" style={{ color: 'var(--accent-gold)' }}>
              Certified Organic & Sustainable Standards
            </span>
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              margin: '0 0 12px 0'
            }}
          >
            Organic Verification & ESG Accreditations
          </h3>
          <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
            Independent third-party audits validating 100% chemical-free cultivation, strict chain-of-custody processing, and canopy rainforest biodiversity.
          </p>
        </div>
      </ScrollReveal>

      {/* 3-Column Luxury Accreditation Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(18px, 2.5vw, 26px)',
          alignItems: 'stretch',
          marginBottom: '28px'
        }}
      >
        {organicAccreditations.map((cert, idx) => (
          <ScrollReveal key={cert.id} animation="fade-up" delay={idx * 80}>
            <div
              className="double-bezel-outer"
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div
                className="double-bezel-inner"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: 'clamp(20px, 3vw, 28px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  borderRadius: 'var(--radius-xs)'
                }}
              >
                <div>
                  {/* Top Header: Logo Emblem & Badge */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '20px'
                    }}
                  >
                    {/* Embossed Logo Container (Ensures 100% Crisp Visual Clarity) */}
                    <div
                      style={{
                        width: '84px',
                        height: '84px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--border-light)',
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px'
                      }}
                    >
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain'
                        }}
                        loading="lazy"
                      />
                    </div>

                    {/* Verified Status Pill */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: 'rgba(200, 169, 107, 0.12)',
                        border: '1px solid var(--border-dark-gold)',
                        color: 'var(--accent-gold)',
                        fontSize: '0.6875rem',
                        fontWeight: 600
                      }}
                    >
                      <CheckCircle2 size={12} />
                      <span>{cert.badge}</span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      color: 'var(--text-primary)',
                      margin: '0 0 4px 0',
                      lineHeight: 1.3
                    }}
                  >
                    {cert.name}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      display: 'block',
                      marginBottom: '12px'
                    }}
                  >
                    {cert.issuer}
                  </span>

                  {/* Description */}
                  <p
                    className="body-small"
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.8125rem',
                      lineHeight: 1.6,
                      margin: '0 0 16px 0'
                    }}
                  >
                    {cert.description}
                  </p>
                </div>

                {/* Scope Parameter Pill */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-xs)',
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.6875rem',
                    color: 'var(--text-primary)',
                    fontWeight: 500
                  }}
                >
                  <Award size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                  <span>{cert.scope}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom Procurement Quick-Action Bar */}
      <ScrollReveal animation="fade-up" delay={120}>
        <div
          className="double-bezel-outer"
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: 'var(--radius-xs)'
          }}
        >
          <div
            className="double-bezel-inner"
            style={{
              padding: '16px 24px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={20} style={{ color: 'var(--accent-gold)' }} />
              <div>
                <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'block' }}>
                  Audited Lots & Organic Certificate of Analysis Available
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Accredited batch COA, USDA NOP compliance certificates, and EU import documentation provided with sample and commercial shipments.
                </span>
              </div>
            </div>

            <Button
              variant="gold"
              onClick={onOpenInquiry}
              style={{
                minHeight: '44px',
                padding: '0 24px',
                fontSize: '0.75rem',
                flexShrink: 0
              }}
            >
              Request Certified Organic Lot
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default OrganicCertificationsShowcase;
