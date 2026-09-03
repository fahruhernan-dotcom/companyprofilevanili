import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { ScrollReveal } from '../components/ScrollReveal';
import { ShieldCheck, FileCheck2, PackageCheck, Globe, ArrowRight } from 'lucide-react';
import { OrganicCertificationsShowcase } from '../components/OrganicCertificationsShowcase';

export const ExportTrust = ({ onNavigate, onOpenInquiry }) => {
  const trustPillars = [
    {
      icon: FileCheck2,
      tag: 'ISO/IEC 17025 CoA',
      title: 'Accredited Laboratory Testing',
      description: 'Every commercial lot is accompanied by a Certificate of Analysis (CoA) confirming vanillin content, moisture equilibrium (30-35%), water activity (aw < 0.65), and microbiological safety.'
    },
    {
      icon: ShieldCheck,
      tag: 'Quarantine Clearance',
      title: 'Phytosanitary Certification',
      description: 'Official statutory health inspection and phytosanitary clearance certificates issued by the Indonesian Agricultural Quarantine Agency for rapid customs release at destination ports.'
    },
    {
      icon: PackageCheck,
      tag: 'EVOH Food-Grade Barrier',
      title: 'Hermetic Barrier Packaging',
      description: 'Multi-layer food-grade vacuum liners and sealed barrier pouches engineered to prevent ambient moisture absorption and aroma dissipation during international ocean and air freight.'
    },
    {
      icon: Globe,
      tag: 'IDJKT & IDSUB Ports',
      title: 'Global Trade & Logistics',
      description: 'Direct vessel routing from Port of Tanjung Priok (Jakarta) and Tanjung Perak (Surabaya). Standardized Incoterms execution (FOB/CIF) and express 48–72h sample dispatch.'
    }
  ];

  const handleQualityNav = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('quality', 'quality');
    } else {
      window.location.hash = 'quality';
    }
  };

  return (
    <section
      id="quality-trust"
      className="section"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        paddingTop: 'clamp(60px, 9vh, 120px)',
        paddingBottom: 'clamp(60px, 9vh, 120px)',
        position: 'relative'
      }}
      aria-label="Export Assurance and Quality Standards"
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: 'clamp(32px, 5vh, 60px)' }}>
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
              STANDARDS FOR GLOBAL TRADE.
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
              Phytosanitary compliance, accredited laboratory testing, export-grade barrier packaging, and direct global freight coordination.
            </p>
          </ScrollReveal>
        </div>

        {/* 4-Column on Desktop / 2-Column on Tablet Grid of Export Trust Cards */}
        <div
          className="trust-grid"
          style={{
            marginBottom: 'clamp(36px, 5vh, 56px)'
          }}
        >
          {trustPillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100 + 200}>
                <div
                  className="trust-card"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    padding: 'clamp(20px, 2.5vw, 26px)',
                    height: '100%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-card)',
                    transition: 'all 0.35s var(--ease-editorial)'
                  }}
                >
                  <div>
                    {/* Top Meta: Left-Aligned Unified Anchor (Icon + Tag) */}
                    <div
                      className="trust-meta"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '14px'
                      }}
                    >
                      <div
                        className="trust-icon-box"
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(140, 102, 45, 0.08)',
                          border: '1px solid rgba(140, 102, 45, 0.22)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-gold-dark)',
                          flexShrink: 0
                        }}
                      >
                        <IconComp size={16} />
                      </div>

                      <span
                        className="trust-tag"
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--accent-gold-dark)'
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3
                      className="trust-title"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.3rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        margin: '0 0 10px 0',
                        lineHeight: 1.25
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p
                      className="body-small trust-desc"
                      style={{
                        color: 'var(--text-secondary)',
                        lineHeight: 1.65,
                        margin: 0
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Global Organic & Sustainability Accreditations Showcase */}
        <OrganicCertificationsShowcase onOpenInquiry={onOpenInquiry} showBottomAction={false} />

        {/* Unified Quality & Statutory Dossier Action Row */}
        <ScrollReveal animation="fade-up" delay={300} style={{ marginTop: 'clamp(32px, 5vh, 48px)' }}>
          <div
            className="mobile-stack"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              padding: '24px 28px',
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <ShieldCheck size={18} style={{ color: 'var(--accent-gold)' }} />
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  Comprehensive Quality & Statutory Dossier
                </h4>
              </div>
              <p
                className="body-small"
                style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6 }}
              >
                Accredited batch Certificate of Analysis (CoA), statutory phytosanitary clearance, and certified organic documentation provided with all sample evaluation kits and commercial shipments.
              </p>
            </div>

            <div className="mobile-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                href="/quality"
                onClick={handleQualityNav}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border-gold)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '10px 20px',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(200, 169, 107, 0.12)';
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--border-gold)';
                }}
              >
                <span>Explore Quality Standards ↗</span>
              </a>

              <button
                type="button"
                onClick={onOpenInquiry}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--accent-gold)',
                  border: '1px solid var(--accent-gold)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '10px 22px',
                  color: 'var(--bg-dark)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#DFC182';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
                }}
              >
                <span>Inquire Export Terms</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>

      <style>{`
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(14px, 2vw, 24px);
        }
        .trust-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-gold-dark) !important;
          box-shadow: var(--shadow-medium) !important;
        }
        .trust-card:hover .trust-icon-box {
          background-color: rgba(140, 102, 45, 0.16) !important;
          border-color: var(--accent-gold-dark) !important;
        }
        @media (max-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 767px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
          .trust-card {
            padding: 14px 12px !important;
            border-radius: 6px !important;
          }
          .trust-meta {
            margin-bottom: 8px !important;
          }
          .trust-icon-box {
            display: none !important;
          }
          .trust-tag {
            font-size: 0.5625rem !important;
          }
          .trust-title {
            font-size: 0.9375rem !important;
            line-height: 1.2 !important;
            margin-bottom: 4px !important;
          }
          .trust-desc {
            font-size: 0.72rem !important;
            line-height: 1.45 !important;
          }
        }
        @media (max-width: 380px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-card {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExportTrust;
