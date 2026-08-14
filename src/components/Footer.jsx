import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { ArrowUp, Mail, MessageCircle, FileText, Sparkles } from 'lucide-react';

export const Footer = ({ currentPage = 'home', onNavigate, onOpenInquiry, onOpenSpecSheet }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-inverse-primary)',
        borderTop: '1px solid var(--border-dark)',
        paddingTop: 'clamp(4rem, 6vw, 6.5rem)',
        paddingBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Top Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            marginBottom: 'clamp(3rem, 5vw, 5rem)'
          }}
        >
          {/* Col 1: Brand & Origin Identity */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 600
                }}
              >
                {brandConfig.name.charAt(0)}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.45rem',
                  letterSpacing: '0.12em',
                  color: 'var(--text-inverse-primary)'
                }}
              >
                {brandConfig.fullName}
              </span>
            </div>

            <p style={{ color: 'var(--text-inverse-secondary)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '20px' }}>
              {brandConfig.subtitle}
            </p>

            <span className="overline" style={{ color: 'var(--accent-gold)', fontSize: '0.6875rem' }}>
              Terroir: {brandConfig.terroir}
            </span>
          </div>

          {/* Col 2: Navigation Directory */}
          <div>
            <span className="overline" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '20px' }}>
              Navigation
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('about');
                    else window.location.hash = 'about';
                  }}
                  style={{
                    color: 'var(--accent-gold)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Sparkles size={12} />
                  <span>Our Story (Estate Heritage Page)</span>
                </a>
              </li>

              {[
                { label: 'Philosophy & Manifesto', href: '#philosophy' },
                { label: 'Our Vanilla (Anatomy)', href: '#the-vanilla' },
                { label: 'Volcanic Terroir & Origin', href: '#terroir' },
                { label: 'The Craft (4 Pillars)', href: '#craft' },
                { label: 'Quality & Specifications', href: '#quality' },
                { label: 'Culinary Applications', href: '#applications' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={() => {
                      if (currentPage === 'about' && onNavigate) onNavigate('home');
                    }}
                    style={{
                      color: 'var(--text-inverse-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-inverse-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Concierge & Sourcing */}
          <div>
            <span className="overline" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '20px' }}>
              B2B Sourcing & Export
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li>
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: 'var(--text-inverse-primary)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-primary)')}
                >
                  <span>Inquire Sourcing & Sample Kit →</span>
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={onOpenSpecSheet}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: 'var(--text-inverse-secondary)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-inverse-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
                >
                  <FileText size={14} style={{ color: 'var(--accent-gold)' }} />
                  <span>Technical Specification Sheet</span>
                </button>
              </li>

              <li>
                <a
                  href={`mailto:${brandConfig.contact.email}`}
                  style={{
                    color: 'var(--text-inverse-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
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
              </li>

              <li>
                <a
                  href={`https://wa.me/${brandConfig.contact.whatsappNumber.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-inverse-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-inverse-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
                >
                  <MessageCircle size={14} style={{ color: '#25D366' }} />
                  <span>Direct WhatsApp Concierge</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Divider & Copyright */}
        <div
          style={{
            borderTop: '1px solid var(--border-dark)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.8125rem',
            color: 'var(--text-inverse-muted)'
          }}
        >
          <div>
            © {currentYear} {brandConfig.fullName}. All rights reserved. Sourced exclusively from {brandConfig.origin}.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid var(--border-dark)',
              color: 'var(--text-inverse-secondary)',
              borderRadius: 'var(--radius-xs)',
              padding: '6px 12px',
              fontSize: '0.75rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-gold)';
              e.currentTarget.style.color = 'var(--text-inverse-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-dark)';
              e.currentTarget.style.color = 'var(--text-inverse-secondary)';
            }}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
