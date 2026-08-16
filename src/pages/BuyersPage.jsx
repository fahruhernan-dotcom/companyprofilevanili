import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { ArrowLeft, Briefcase, Globe, FileCheck2, Plane, Ship, CheckCircle2 } from 'lucide-react';
import { OrganicCertificationsShowcase } from '../components/OrganicCertificationsShowcase';

export const BuyersPage = ({
  onNavigateHome,
  onOpenInquiry,
  onOpenSpecSheet
}) => {
  const steps = [
    {
      step: '01',
      title: 'Commercial Inquiry & Quotation',
      description: 'Submit your commodity specifications, volume requirements, target Incoterm (FOB/CIF), and destination port.'
    },
    {
      step: '02',
      title: 'Evaluation Sample Dispatch',
      description: 'Physical evaluation sample kits are dispatched via express courier accompanied by laboratory Certificate of Analysis.'
    },
    {
      step: '03',
      title: 'Sales Contracting & Allocation',
      description: 'Finalize trade terms, payment arrangements (L/C, T/T), harvest allocation, and production timeline.'
    },
    {
      step: '04',
      title: 'Inspection, Quarantine & Loading',
      description: 'Statutory phytosanitary clearance by the Indonesian Agricultural Quarantine Agency followed by containerized port loading.'
    }
  ];

  return (
    <div className="page-buyers" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      
      {/* Header Section */}
      <section
        style={{
          paddingTop: 'clamp(100px, 14vw, 140px)',
          paddingBottom: 'clamp(50px, 8vh, 80px)',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-inverse-primary)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <ScrollReveal animation="fade-up" delay={50}>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
                  fontWeight: 300,
                  color: 'var(--text-inverse-primary)',
                  lineHeight: 1.1,
                  margin: '0 0 20px 0',
                  letterSpacing: '0.02em'
                }}
              >
                FOR INTERNATIONAL BUYERS.
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                  color: 'var(--text-inverse-secondary)',
                  lineHeight: 1.7,
                  margin: '0 0 32px 0',
                  maxWidth: '680px'
                }}
              >
                Structured procurement workflows, flexible Incoterms, pre-shipment evaluation samples, and dedicated export concierge support for global importers.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="mobile-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <Button
                  variant="gold"
                  onClick={onOpenInquiry}
                  style={{ padding: '14px 28px', fontSize: '0.8125rem' }}
                >
                  Request Sourcing Terms & Pricing
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Procurement Process Workflow */}
      <section style={{ padding: 'clamp(70px, 9vh, 110px) 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
            <span className="overline overline-accent" style={{ display: 'block', marginBottom: '10px' }}>
              Standard Operating Procedure
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                color: 'var(--text-primary)',
                margin: 0
              }}
            >
              Export Procurement Lifecycle
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '20px' }}>
            {steps.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: 'clamp(20px, 3.5vw, 28px)',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    color: 'var(--accent-gold)',
                    display: 'block',
                    marginBottom: '12px'
                  }}
                >
                  {item.step}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    margin: '0 0 8px 0',
                    lineHeight: 1.3
                  }}
                >
                  {item.title}
                </h3>

                <p className="body-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Export Packaging & Quality Proofs Showcase */}
          <div style={{ marginTop: '56px', borderTop: '1px solid var(--border-light)', paddingTop: '48px' }}>
            <div style={{ maxWidth: '640px', marginBottom: '32px' }}>
              <span className="overline overline-accent" style={{ display: 'block', marginBottom: '10px' }}>
                Hermetic Barrier Protection
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  color: 'var(--text-primary)',
                  margin: 0
                }}
              >
                Standard Export Packaging Formats
              </h3>
            </div>

            <div className="grid-12" style={{ alignItems: 'center' }}>
              <div style={{ gridColumn: 'span 6' }}>
                <div className="double-bezel-outer">
                  <div className="double-bezel-inner" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                    <img
                      src="/images/inspection_proofs/proof_export_packaging_1kg_vacuum.webp"
                      alt="1kg commercial export vacuum barrier pack"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <div style={{ position: 'absolute', bottom: '12px', left: '12px', padding: '6px 14px', backgroundColor: 'rgba(23, 21, 18, 0.9)', color: '#FFF', borderRadius: 'var(--radius-pill)', fontSize: '0.6875rem', fontWeight: 600 }}>
                      1.00 KG Master Vacuum Pack
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ gridColumn: 'span 6', paddingLeft: 'clamp(0px, 2vw, 24px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ padding: '16px 20px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', margin: '0 0 6px 0', color: 'var(--text-primary)' }}>
                      Multi-Layer EVOH Food-Grade Barrier
                    </h4>
                    <p className="body-small" style={{ margin: 0, color: 'var(--text-secondary)' }}>
                      Custom oxygen-barrier vacuum liners prevent aromatic loss and ambient humidity absorption during ocean freight.
                    </p>
                  </div>

                  <div style={{ padding: '16px 20px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', margin: '0 0 6px 0', color: 'var(--text-primary)' }}>
                      Incoterms & Direct Port Departure
                    </h4>
                    <p className="body-small" style={{ margin: 0, color: 'var(--text-secondary)' }}>
                      EXW / FOB Semarang / CIF with direct loading from Port of Tanjung Emas (Semarang), Tanjung Priok (Jakarta), and Tanjung Perak (Surabaya).
                    </p>
                  </div>

                  <div style={{ padding: '16px 20px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', margin: '0 0 6px 0', color: 'var(--text-primary)' }}>
                      Pre-Shipment Evaluation Samples
                    </h4>
                    <p className="body-small" style={{ margin: 0, color: 'var(--text-secondary)' }}>
                      MOQ 1 kg / 1 L trial orders dispatched internationally via express air courier (DHL, FedEx, UPS) within 5–7 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Production Capacity Grid */}
            <div style={{ marginTop: '40px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', padding: '24px' }}>
              <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <span className="overline overline-accent" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '4px' }}>
                    Supply Reliability & Allocation
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>
                    Monthly & Harvest Season Production Capacity
                  </h4>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Catalog Ref: Page 16 (Export Standard & Order Policy)
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xs)' }}>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block' }}>Gourmet Vanilla Beans</span>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', display: 'block' }}>100 – 300 kg / mo</strong>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--accent-gold)' }}>5 – 10 Tons / Harvest Season</span>
                </div>

                <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xs)' }}>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block' }}>Grade A Vanilla Beans</span>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', display: 'block' }}>500 kg / mo</strong>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--accent-gold)' }}>Continuous Harvest</span>
                </div>

                <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xs)' }}>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block' }}>Grade B & C Vanilla Beans</span>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', display: 'block' }}>1,000 kg (1 Ton) / mo</strong>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--accent-gold)' }}>Extraction Lots</span>
                </div>

                <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xs)' }}>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block' }}>Pure Vanilla Caviar</span>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', display: 'block' }}>100 kg / mo</strong>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--accent-gold)' }}>100% Pure Seed Mass</span>
                </div>

                <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xs)' }}>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block' }}>Vanilla Powder & Paste</span>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', display: 'block' }}>300 kg & 300 L / mo</strong>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--accent-gold)' }}>Food-Grade Facility</span>
                </div>

                <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-xs)' }}>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block' }}>Vanilla Extracts</span>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', display: 'block' }}>500 L / mo</strong>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--accent-gold)' }}>Alcohol & Non-Alcohol</span>
                </div>
              </div>
            </div>

            {/* Global Organic & Sustainability Accreditations */}
            <OrganicCertificationsShowcase onOpenInquiry={onOpenInquiry} />
          </div>
        </div>
      </section>

      {/* Sourcing Call to Action */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0', backgroundColor: 'var(--bg-primary)', textAlign: 'center' }}>
        <div className="container-narrow">
          <ScrollReveal animation="fade-up">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', margin: '0 0 16px 0' }}>
              Connect with our International Trade Desk
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto 32px' }}>
              Direct export supply, transparent pricing, and structured trade documentation.
            </p>
            <Button variant="gold" onClick={onOpenInquiry} style={{ minHeight: '48px', padding: '0 28px' }}>
              Begin Sourcing Quotation
            </Button>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default BuyersPage;
