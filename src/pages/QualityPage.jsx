import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { ArrowLeft, ShieldCheck, FileCheck, PackageCheck, Award, FileText, CheckCircle2 } from 'lucide-react';
import { PhysicalInspectionGallery } from '../components/PhysicalInspectionGallery';

export const QualityPage = ({
  onNavigateHome,
  onOpenInquiry,
  onOpenSpecSheet
}) => {
  const compliancePillars = [
    {
      title: 'Accredited Laboratory Testing',
      subtitle: 'Certificate of Analysis (CoA)',
      description: 'Every commercial lot is tested by accredited laboratories for active vanillin content, moisture equilibrium, and complete microbiological purity (Salmonella, E. coli, Yeast & Molds negative).'
    },
    {
      title: 'Phytosanitary Certification',
      subtitle: 'Statutory Export Clearance',
      description: 'Issued by the Indonesian Agricultural Quarantine Agency, certifying that all commodities are free from regulated pests, insects, and soil pathogens before departure.'
    },
    {
      title: 'Food Safety & Hygiene',
      subtitle: 'ISO 22000 & Halal Compliance',
      description: 'Curing facilities and physical sorting protocols adhere to rigorous hygiene, sanitation, and safety standards registered under P-IRT and Halal certification.'
    },
    {
      title: 'Hermetic Barrier Packaging',
      subtitle: 'Moisture Protection in Transit',
      description: 'Heavy-duty food-grade vacuum liners and oxygen-barrier pouches prevent moisture migration and preserve delicate aromatic compounds during marine and air transit.'
    }
  ];

  return (
    <div className="page-quality" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      
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
                QUALITY & COMPLIANCE.
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
                Our quality framework ensures every consignment meets international statutory requirements, food safety standards, and strict moisture equilibrium for global trade.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <Button
                  variant="gold"
                  onClick={onOpenInquiry}
                  style={{ padding: '14px 28px', fontSize: '0.8125rem' }}
                >
                  Inquire Quality Specifications
                </Button>

                <Button
                  variant="secondary"
                  onClick={onOpenSpecSheet}
                  style={{
                    padding: '14px 24px',
                    fontSize: '0.8125rem',
                    borderColor: 'var(--border-dark-gold)',
                    color: 'var(--text-inverse-primary)'
                  }}
                >
                  <FileText size={14} style={{ marginRight: '6px' }} />
                  Open Technical Dossier
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Compliance Pillars Grid */}
      <section style={{ padding: 'clamp(70px, 9vh, 110px) 0', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
            <span className="overline overline-accent" style={{ display: 'block', marginBottom: '10px' }}>
              Four Pillars of Assurance
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                color: 'var(--text-primary)',
                margin: 0
              }}
            >
              Export Verification Framework
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '24px' }}>
            {compliancePillars.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '32px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <CheckCircle2 size={18} color="var(--accent-gold)" />
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold)'
                    }}
                  >
                    {item.subtitle}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    margin: '0 0 10px 0'
                  }}
                >
                  {item.title}
                </h3>

                <p className="body-small" style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Real Physical QC & Verification Gallery */}
          <PhysicalInspectionGallery />
        </div>
      </section>

      {/* Sourcing Call to Action */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0', backgroundColor: 'var(--bg-primary)', textAlign: 'center' }}>
        <div className="container-narrow">
          <ScrollReveal animation="fade-up">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)', margin: '0 0 16px 0' }}>
              Request Lab Specifications & Sample Lot
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 32px' }}>
              Our trade compliance desk provides complete Certificates of Analysis, Phytosanitary documentation, and export logistics support.
            </p>
            <Button variant="primary" onClick={onOpenInquiry} style={{ minHeight: '48px' }}>
              Contact Quality & Compliance Desk →
            </Button>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default QualityPage;
