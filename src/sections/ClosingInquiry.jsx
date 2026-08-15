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
          {/* Live Trade Desk Operational Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--radius-pill)', backgroundColor: 'rgba(200, 169, 107, 0.12)', border: '1px solid rgba(200, 169, 107, 0.35)', marginBottom: '22px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#25D366', boxShadow: '0 0 8px #25D366', display: 'inline-block' }}></span>
            <span style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
              Trade Desk Active: 08:00–22:00 UTC+7 · Guaranteed Response &lt; 2 Hours
            </span>
          </div>

          {/* Dramatic Closing Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 300,
              color: 'var(--text-inverse-primary)',
              maxWidth: '820px',
              margin: '0 auto 24px',
              lineHeight: 1.15,
              letterSpacing: '0.02em'
            }}
          >
            INDONESIAN ORIGINS.<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent-gold)' }}>
              Sourced for the World.
            </span>
          </h2>

          {/* Supporting Paragraph */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 1.2vw, 1.125rem)',
              maxWidth: '660px',
              margin: '0 auto clamp(2.5rem, 5vw, 3.5rem)',
              color: 'var(--text-inverse-secondary)',
              lineHeight: 1.75
            }}
          >
            Direct commercial export of single-origin Indonesian Vanilla and Selected Green Coffee. Pre-shipment sample evaluation kits (100g–500g) dispatched internationally via express air courier within 48–72 hours.
          </p>

          {/* Main CTA Actions Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)'
            }}
          >
            <Button
              variant="gold"
              onClick={onOpenInquiry}
              style={{
                padding: '16px 36px',
                fontSize: '0.875rem',
                letterSpacing: '0.04em',
                fontWeight: 600
              }}
            >
              Request Commercial Quotation
            </Button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                borderColor: 'var(--border-dark-gold)',
                color: 'var(--text-inverse-primary)',
                padding: '16px 28px',
                fontSize: '0.8125rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <MessageCircle size={16} style={{ color: '#25D366' }} />
              <span>WhatsApp Concierge</span>
            </a>
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
