import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { ArrowUp, Mail, MessageCircle, ArrowUpRight, Leaf } from 'lucide-react';

export const Footer = ({ currentRoute = 'home', onNavigate, onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (route, hash) => {
    if (onNavigate) {
      onNavigate(route, hash);
    } else if (hash) {
      window.location.hash = hash;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="site-footer"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-inverse-primary)',
        borderTop: '1px solid var(--border-dark)',
        paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
        paddingBottom: 'clamp(2rem, 3.5vw, 3rem)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Top Footer Section */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'clamp(28px, 5vw, 56px)',
            marginBottom: 'clamp(2.5rem, 4vw, 4rem)'
          }}
        >
          {/* Brand & Sourcing Statement */}
          <div className="footer-brand-col" style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(246, 242, 234, 0.1)',
                  border: '1px solid var(--border-dark-gold)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '5px'
                }}
              >
                <img
                  src="/logo-emblem.svg"
                  alt={`${brandConfig.name} Emblem`}
                  width="22"
                  height="22"
                  style={{
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.45rem',
                  letterSpacing: '0.1em',
                  color: 'var(--text-inverse-primary)'
                }}
              >
                {brandConfig.name}
              </span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                color: 'var(--accent-gold)',
                letterSpacing: '0.04em',
                marginBottom: '12px',
                lineHeight: 1.4
              }}
            >
              {brandConfig.heroStatement}
            </p>

            <p
              style={{
                color: 'var(--text-inverse-secondary)',
                fontSize: '0.8125rem',
                lineHeight: 1.6,
                marginBottom: '12px'
              }}
            >
              {brandConfig.heroSubtitle}
            </p>

            <p
              style={{
                color: 'var(--accent-gold)',
                fontSize: '0.75rem',
                fontStyle: 'italic',
                lineHeight: 1.5,
                marginBottom: '16px'
              }}
            >
              "{brandConfig.tagline}"
            </p>

            <span className="overline" style={{ color: 'var(--text-inverse-muted)', fontSize: '0.625rem', display: 'block' }}>
              Positioning: {brandConfig.positioning}
            </span>
          </div>

          {/* Links Wrapper for 2-column mobile responsiveness */}
          <div className="footer-links-group" style={{ display: 'contents' }}>
            {/* Col 1: EXPLORE */}
            <div className="footer-col">
              <span className="overline" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '16px', fontSize: '0.6875rem' }}>
                Explore
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>
                  <a
                    href="/#origins"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('origins', 'origins');
                    }}
                    style={{
                      color: 'var(--text-inverse-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.8125rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
                  >
                    Indonesian Origins
                  </a>
                </li>
                <li>
                  <a
                    href="/vanilla"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('vanilla', 'vanilla');
                    }}
                    style={{
                      color: 'var(--text-inverse-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.8125rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
                  >
                    <Leaf size={12} color="var(--accent-gold)" />
                    <span>Vanilla (Planifolia & Tahitensis)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/quality"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('quality', 'quality');
                    }}
                    style={{
                      color: 'var(--text-inverse-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.8125rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
                  >
                    Quality & Export Standards
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2: COMPANY */}
            <div className="footer-col">
              <span className="overline" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '16px', fontSize: '0.6875rem' }}>
                Company
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>
                  <a
                    href="/about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('about', 'about');
                    }}
                    style={{
                      color: 'var(--text-inverse-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.8125rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
                  >
                    About Essence Indonesia
                  </a>
                </li>
                <li>
                  <a
                    href="/buyers"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('buyers', 'buyers');
                    }}
                    style={{
                      color: 'var(--text-inverse-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.8125rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
                  >
                    For International Buyers
                  </a>
                </li>
                <li>
                  <a
                    href="#inquiry"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onOpenInquiry) onOpenInquiry();
                      else handleLinkClick('inquiry', 'inquiry');
                    }}
                    style={{
                      color: 'var(--accent-gold)',
                      textDecoration: 'none',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'opacity 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    <span>Start Sourcing Inquiry</span>
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: CONTACT (Verified from Official Catalog) */}
          <div className="footer-contact-col">
            <span className="overline" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '16px', fontSize: '0.6875rem' }}>
              Contact
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a
                  href={`https://wa.me/${brandConfig.contact.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(brandConfig.contact.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-inverse-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.8125rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#25D366')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
                >
                  <MessageCircle size={14} color="#25D366" />
                  <span>WhatsApp: (+62) 89-669-241-131</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${brandConfig.contact.email}`}
                  style={{
                    color: 'var(--text-inverse-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.8125rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-inverse-secondary)')}
                >
                  <Mail size={14} color="var(--accent-gold)" />
                  <span>{brandConfig.contact.email}</span>
                </a>
              </li>

              <li>
                <span style={{ color: 'var(--text-inverse-muted)', fontSize: '0.75rem', display: 'block', marginTop: '4px' }}>
                  Web: {brandConfig.contact.websiteUrl.replace('https://', '')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'var(--border-dark)', margin: '24px 0' }} />

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          className="footer-bottom-bar"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.75rem',
            color: 'var(--text-inverse-muted)'
          }}
        >
          <span>
            © {currentYear} {brandConfig.name}. All rights reserved. Sourced exclusively from {brandConfig.origin}.
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              background: 'rgba(246, 242, 234, 0.06)',
              border: '1px solid var(--border-dark-gold)',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 14px',
              color: 'var(--text-inverse-secondary)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
              e.currentTarget.style.color = '#171512';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(246, 242, 234, 0.06)';
              e.currentTarget.style.color = 'var(--text-inverse-secondary)';
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .site-footer {
            padding-top: 3rem !important;
            padding-bottom: 2rem !important;
          }
          .footer-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
            margin-bottom: 2rem !important;
          }
          .footer-links-group {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .footer-col span.overline,
          .footer-contact-col span.overline {
            margin-bottom: 8px !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
