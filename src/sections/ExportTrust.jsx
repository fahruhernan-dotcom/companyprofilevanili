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
        paddingTop: 'clamp(80px, 10vh, 120px)',
        paddingBottom: 'clamp(80px, 10vh, 120px)',
        position: 'relative'
      }}
      aria-label="Export Assurance and Quality Standards"
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: 'clamp(40px, 6vh, 60px)' }}>
          <ScrollReveal animation="fade-up" delay={50}>
            <span className="overline overline-accent" style={{ display: 'block', marginBottom: '12px' }}>
              05 · Export Assurance & Standards
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

        {/* 2x2 Grid of Export Trust Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(20px, 2.5vw, 28px)',
            marginBottom: 'clamp(40px, 5vh, 56px)'
          }}
        >
          {trustPillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100 + 200}>
                <div
                  className="trust-card"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    padding: 'clamp(24px, 3.5vw, 32px)',
                    height: '100%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-subtle)',
                    transition: 'all 0.3s var(--ease-editorial)'
                  }}
                >
                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '20px'
                      }}
                    >
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(200, 169, 107, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-gold)'
                        }}
                      >
                        <IconComp size={18} />
                      </div>

                      <span
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--accent-gold)'
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.35rem',
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
                      className="body-small"
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
        <OrganicCertificationsShowcase onOpenInquiry={onOpenInquiry} />

        {/* Editorial Action Row */}
        <ScrollReveal animation="fade-up" delay={300} style={{ marginTop: 'clamp(40px, 5vh, 56px)' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              padding: '24px 28px',
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  margin: '0 0 4px 0'
                }}
              >
                Comprehensive Quality & Compliance Dossier
              </h4>
              <p
                className="body-small"
                style={{ margin: 0, color: 'var(--text-secondary)' }}
              >
                Access export specifications, statutory documentation, and sample evaluation protocols.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                href="#quality"
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
        .trust-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-gold) !important;
          box-shadow: var(--shadow-medium);
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
