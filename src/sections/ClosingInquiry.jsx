import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { MessageCircle, Mail, Globe, ArrowRight } from 'lucide-react';

export const ClosingInquiry = ({ onOpenInquiry }) => {
  const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(brandConfig.contact.whatsappDefaultMessage)}`;

  return (
    <section
      id="inquiry-section"
      className="section"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-inverse-primary)',
        borderTop: '1px solid var(--border-dark)',
        paddingTop: 'clamp(90px, 12vh, 140px)',
        paddingBottom: 'clamp(90px, 12vh, 140px)',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label="Global Sourcing Concierge"
    >
      <div className="container-narrow" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        
        <ScrollReveal animation="fade-up">
          {/* Dramatic Closing Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.85rem, 5vw, 4rem)',
              fontWeight: 300,
              color: 'var(--text-inverse-primary)',
              maxWidth: '860px',
              margin: '0 auto 24px',
              lineHeight: 1.15,
              letterSpacing: '0.02em',
              wordBreak: 'break-word'
            }}
          >
            DIRECT EQUATORIAL HARVESTS.<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent-gold)' }}>
              Shipped to Global Ports.
            </span>
          </h2>

          {/* Supporting Paragraph */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1.125rem)',
              maxWidth: '660px',
              margin: '0 auto clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--text-inverse-secondary)',
              lineHeight: 1.75
            }}
          >
            Direct commercial export of single-origin Indonesian Vanilla (Planifolia & Tahitensis) and value-added derivatives. Pre-shipment sample evaluation kits (100g–500g) dispatched internationally via express air courier within 48–72 hours.
          </p>

          {/* Main CTA Actions Bar */}
          <div
            className="mobile-stack"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)'
            }}
          >
            <Button
              variant="gold"
              onClick={onOpenInquiry}
              style={{
                padding: '12px 32px',
                fontSize: '0.875rem',
                letterSpacing: '0.04em',
                fontWeight: 600
              }}
            >
              Start Sourcing Inquiry
            </Button>

            <Button
              variant="whatsapp"
              href={whatsappUrl}
              target="_blank"
              style={{
                padding: '12px 28px',
                fontSize: '0.8125rem'
              }}
            >
              WhatsApp Concierge
            </Button>
          </div>

          {/* Secondary Direct Channels */}
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '32px',
              borderTop: '1px solid var(--border-dark)',
              paddingTop: '32px',
              color: 'var(--text-inverse-muted)',
              fontSize: '0.8125rem'
            }}
          >
            <a
              href={`mailto:${brandConfig.contact.email}`}
              style={{
                color: 'var(--text-inverse-secondary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-inverse-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
            >
              <Mail size={14} style={{ color: 'var(--accent-gold)' }} />
              <span>{brandConfig.contact.email}</span>
            </a>

            <div
              style={{
                color: 'var(--text-inverse-secondary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Globe size={14} style={{ color: 'var(--accent-gold)' }} />
              <span>Origin: Indonesia · Worldwide Export</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ClosingInquiry;
