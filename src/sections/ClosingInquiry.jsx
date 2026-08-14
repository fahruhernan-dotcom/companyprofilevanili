import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import { MessageCircle, Mail, FileText } from 'lucide-react';

export const ClosingInquiry = ({ onOpenInquiry, onOpenSpecSheet }) => {
  const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(brandConfig.contact.whatsappDefaultMessage)}`;

  return (
    <section
      id="contact"
      className="section"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-inverse-primary)',
        borderTop: '1px solid var(--border-dark)',
        position: 'relative'
      }}
    >
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        
        <ScrollReveal animation="fade-up">
          {/* Overline Indicator */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span className="overline overline-accent" style={{ color: 'var(--accent-gold)' }}>
              Procurement & Collaboration
            </span>
            <span style={{ width: '32px', height: '1px', backgroundColor: 'var(--border-gold)' }}></span>
          </div>

          {/* Dramatic Closing Heading */}
          <h2
            className="heading-section"
            style={{
              color: 'var(--text-inverse-primary)',
              maxWidth: '740px',
              margin: '0 auto 24px',
              lineHeight: 1.15
            }}
          >
            Let's Curate Your Next <br />
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Culinary Masterpiece.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p
            className="body-lead"
            style={{
              maxWidth: '620px',
              margin: '0 auto clamp(2.5rem, 5vw, 3.5rem)',
              color: 'var(--text-inverse-secondary)'
            }}
          >
            Whether securing a single harvest allocation for a luxury patisserie or establishing a multi-tonne wholesale export partnership, our estate concierge is at your service.
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
              style={{ padding: '16px 36px', fontSize: '0.875rem' }}
            >
              Inquire Sourcing & Sample Kit
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
                fontSize: '0.8125rem'
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
              gap: '28px',
              borderTop: '1px solid var(--border-dark)',
              paddingTop: '28px',
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
                gap: '8px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-inverse-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
            >
              <Mail size={14} style={{ color: 'var(--accent-gold)' }} />
              <span>{brandConfig.contact.email}</span>
            </a>

            <button
              type="button"
              onClick={onOpenSpecSheet}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: 'var(--text-inverse-secondary)',
                fontSize: '0.8125rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-inverse-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
            >
              <FileText size={14} style={{ color: 'var(--accent-gold)' }} />
              <span>View Technical Dossier</span>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ClosingInquiry;
