import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';
import { ArrowLeft, Sparkles, ShieldCheck, Coffee, Leaf, Briefcase } from 'lucide-react';

export const RoutePlaceholder = ({
  route = 'origins',
  onNavigateHome,
  onOpenInquiry,
  onOpenSpecSheet
}) => {
  const routeConfigs = {
    origins: {
      eyebrow: 'Indonesian Origins',
      title: 'Two Pillars of Indonesian Excellence',
      lead: 'Single-origin Vanilla planifolia and highland Green Coffee sourced directly from fertile equatorial terroirs.',
      icon: Leaf,
      badge: 'Dual Commodity Vertical',
      body: 'Our sourcing portfolio spans Indonesian archipelagic microclimates, offering global importers direct provenance traceability, artisanal curing, and certified export readiness.',
      primaryActionLabel: 'Explore Commodities on Homepage',
      showDualCards: true
    },
    vanilla: {
      eyebrow: 'Origin I · Vanilla',
      title: 'Planifolia & Tahitensis Portfolio',
      lead: 'Cured whole vanilla beans, pure caviar, extract preparations, and fine powders prepared for global gastronomy.',
      icon: Leaf,
      badge: 'Available for Export',
      body: 'Verified according to international standards (Halal, P-IRT, ISO 22000) with lab-tested vanillin concentrations and single-origin traceability.',
      primaryActionLabel: 'Begin a Vanilla Inquiry →',
      showSpecSheetBtn: true
    },
    coffee: {
      eyebrow: 'Origin II · Coffee',
      title: 'Selected Indonesian Green Coffee',
      lead: 'Green coffee sourced from selected Indonesian agricultural terroirs.',
      icon: Coffee,
      badge: 'Available Upon Inquiry',
      body: 'Commercial specifications, origin details, lot sizes, and export terms are provided directly upon commercial inquiry.',
      primaryActionLabel: 'Begin a Coffee Inquiry →',
      isCoffee: true
    },
    quality: {
      eyebrow: 'Export Assurance',
      title: 'Quality & Phytosanitary Compliance',
      lead: 'Strict physical sorting, lab-tested moisture stability, and statutory export certifications for every shipment.',
      icon: ShieldCheck,
      badge: 'ISO 22000 & Halal',
      body: 'We ensure full customs compliance with accredited Certificates of Analysis, Phytosanitary clearances from the Indonesian Agricultural Quarantine Agency, and hermetic barrier packaging.',
      primaryActionLabel: 'Inquire Quality Specifications',
      showSpecSheetBtn: true
    },
    buyers: {
      eyebrow: 'Commercial Intelligence',
      title: 'For International Importers & Buyers',
      lead: 'Direct procurement architecture, sample kit requests, container logistics, and flexible export terms.',
      icon: Briefcase,
      badge: 'B2B Trade Portal',
      body: 'Providing international buyers with structured pre-shipment evaluation samples, transparent trade documentation, and dedicated export concierge support.',
      primaryActionLabel: 'Request Commercial Sourcing Terms',
      isBuyer: true
    }
  };

  const config = routeConfigs[route] || routeConfigs.origins;
  const IconComponent = config.icon;

  return (
    <div
      style={{
        minHeight: '80vh',
        paddingTop: 'clamp(100px, 14vw, 140px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div className="container">
        {/* Double-Bezel Card Container */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(28px, 5vw, 56px)',
            boxShadow: 'var(--shadow-medium)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(200, 169, 107, 0.15)',
                border: '1px solid var(--border-gold)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)'
              }}
            >
              <IconComponent size={16} />
            </div>
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)'
              }}
            >
              {config.badge}
            </span>
          </div>

          <SectionHeader
            eyebrow={config.eyebrow}
            title={config.title}
            lead={config.lead}
            align="left"
          />

          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              marginTop: '20px',
              marginBottom: '36px'
            }}
          >
            {config.body}
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <Button
              variant="primary"
              onClick={onOpenInquiry}
              style={{ minHeight: '46px' }}
            >
              {config.primaryActionLabel || 'Start Sourcing Inquiry'}
            </Button>

            {config.showSpecSheetBtn && onOpenSpecSheet && (
              <Button
                variant="secondary"
                onClick={onOpenSpecSheet}
                style={{ minHeight: '46px' }}
              >
                Open Technical Dossier
              </Button>
            )}

            <Button
              variant="secondary"
              onClick={onNavigateHome}
              style={{ minHeight: '46px' }}
            >
              Explore Full Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePlaceholder;
