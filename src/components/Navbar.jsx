import React, { useState, useEffect } from 'react';
import { brandConfig } from '../config/brandConfig';
import { useScrollHeader } from '../hooks/useScrollHeader';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { Menu, X, ArrowUpRight, Sparkles, ArrowLeft } from 'lucide-react';

export const Navbar = ({ currentPage = 'home', onNavigate, onOpenInquiry }) => {
  const isScrolled = useScrollHeader(40);
  const scrollProgress = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const homeSectionIds = ['philosophy', 'experience-3d', 'the-vanilla', 'terroir', 'craft', 'quality', 'applications'];
  const aboutSectionIds = ['genesis', 'stewards', 'impact', 'milestones', 'visit'];
  
  const activeSection = useScrollSpy(currentPage === 'home' ? homeSectionIds : aboutSectionIds, 160);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const homeNavLinks = [
    { id: 'philosophy', label: 'Philosophy', href: '#philosophy' },
    { id: 'experience-3d', label: '3D Orbit', href: '#experience-3d' },
    { id: 'the-vanilla', label: 'Our Vanilla', href: '#the-vanilla' },
    { id: 'terroir', label: 'Terroir', href: '#terroir' },
    { id: 'craft', label: 'The Craft', href: '#craft' },
    { id: 'quality', label: 'Quality', href: '#quality' },
    { id: 'applications', label: 'Applications', href: '#applications' },
  ];

  const aboutNavLinks = [
    { id: 'genesis', label: 'The Genesis', href: '#genesis' },
    { id: 'stewards', label: 'The Stewards', href: '#stewards' },
    { id: 'impact', label: 'Impact & Soil', href: '#impact' },
    { id: 'milestones', label: 'Milestones', href: '#milestones' },
    { id: 'visit', label: 'Estate Visit', href: '#visit' },
  ];

  return (
    <>
      {/* Dynamic Top Scroll Reading Progress Line */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* Floating Island Header Architecture */}
      <header
        style={{
          position: 'fixed',
          top: '12px',
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 var(--space-md)',
          pointerEvents: 'none'
        }}
      >
        <div
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '1160px',
            height: '48px',
            backgroundColor: isScrolled ? 'rgba(246, 242, 234, 0.95)' : 'rgba(246, 242, 234, 0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: isScrolled ? '1px solid rgba(200, 169, 107, 0.35)' : '1px solid rgba(36, 28, 23, 0.08)',
            borderRadius: 'var(--radius-pill)',
            boxShadow: isScrolled ? 'var(--shadow-medium)' : 'var(--shadow-subtle)',
            padding: '0 12px 0 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Brand Monogram / Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('home');
              else window.location.hash = 'home';
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              color: 'var(--text-primary)'
            }}
            aria-label={`${brandConfig.fullName} Homepage`}
          >
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: 'var(--text-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 600
              }}
            >
              {brandConfig.name.charAt(0)}
            </span>
            
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)'
                }}
              >
                {brandConfig.name}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.5rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  color: 'var(--text-muted)',
                  marginTop: '1px',
                  textTransform: 'uppercase'
                }}
              >
                {brandConfig.surname}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Dynamic Multi-Page Support */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '18px'
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {currentPage === 'home' ? (
              <>
                {homeNavLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      style={{
                        fontSize: '0.78125rem',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                        textDecoration: 'none',
                        letterSpacing: '0.02em',
                        transition: 'all 0.2s ease',
                        padding: '4px 3px',
                        position: 'relative'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span
                          style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '12px',
                            height: '1.5px',
                            backgroundColor: 'var(--accent-gold)',
                            borderRadius: '1px'
                          }}
                        />
                      )}
                    </a>
                  );
                })}

                {/* Dedicated About Page Link */}
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('about');
                    else window.location.hash = 'about';
                  }}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--accent-pod)',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    backgroundColor: 'rgba(200, 169, 107, 0.16)',
                    border: '1px solid var(--border-gold)',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-pill)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(200, 169, 107, 0.16)';
                    e.currentTarget.style.color = 'var(--accent-pod)';
                  }}
                >
                  <Sparkles size={10} />
                  <span>Our Story</span>
                </a>
              </>
            ) : (
              <>
                {/* About Page Sub-Section Anchor Navigation */}
                {aboutNavLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      style={{
                        fontSize: '0.78125rem',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                        textDecoration: 'none',
                        letterSpacing: '0.02em',
                        transition: 'all 0.2s ease',
                        padding: '4px 3px',
                        position: 'relative'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span
                          style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '12px',
                            height: '1.5px',
                            backgroundColor: 'var(--accent-gold)',
                            borderRadius: '1px'
                          }}
                        />
                      )}
                    </a>
                  );
                })}

                {/* Return to Products Pill */}
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-light)',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-pill)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-gold)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
                  }}
                >
                  <ArrowLeft size={11} style={{ color: 'var(--accent-gold)' }} />
                  <span>Vanilla Showcase</span>
                </button>
              </>
            )}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              padding: 0
            }}
            className="mobile-nav-toggle"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'var(--bg-primary)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'var(--space-2xl) var(--space-xl)',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
            <a
              href="#home"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigate) onNavigate('home');
              }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                color: currentPage === 'home' ? 'var(--accent-gold)' : 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              Vanilla Showcase
            </a>

            <a
              href="#about"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigate) onNavigate('about');
              }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                color: currentPage === 'about' ? 'var(--accent-gold)' : 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              Our Story (Heritage)
            </a>

            {(currentPage === 'home' ? homeNavLinks : aboutNavLinks).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ marginTop: '32px', borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="btn-agency btn-agency-primary"
              style={{ width: '100%', padding: '10px 14px 10px 24px', justifyContent: 'center' }}
            >
              <span>Inquire Sourcing Concierge</span>
              <span className="btn-agency-icon-wrapper">
                <ArrowUpRight size={14} strokeWidth={2} />
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Embedded CSS for responsive navbar toggle */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
