import React, { useState, useEffect } from 'react';
import { brandConfig } from '../config/brandConfig';
import { useScrollHeader } from '../hooks/useScrollHeader';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { Menu, X, ArrowUpRight, Leaf, ShieldCheck, Info, Briefcase } from 'lucide-react';

export const Navbar = ({ currentRoute = 'home', onNavigate, onOpenInquiry }) => {
  const isScrolled = useScrollHeader(40);
  const scrollProgress = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Handle Escape key to close open menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (route, hash) => {
    setMobileMenuOpen(false);
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
    if (onNavigate) {
      onNavigate(route, hash);
    } else if (hash) {
      window.location.hash = hash;
    }
  };

  return (
    <>
      {/* Top Scroll Reading Progress Line */}
      <div
        className="scroll-progress-bar"
        style={{
          width: `${scrollProgress}%`,
          opacity: scrollProgress > 1.2 ? 1 : 0
        }}
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
          zIndex: 'var(--z-header)',
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
            background: isScrolled
              ? 'linear-gradient(135deg, rgba(246, 238, 222, 0.97) 0%, rgba(236, 224, 198, 0.97) 100%)'
              : 'linear-gradient(135deg, rgba(249, 242, 228, 0.94) 0%, rgba(240, 229, 205, 0.94) 100%)',
            backdropFilter: 'blur(20px) saturate(150%)',
            WebkitBackdropFilter: 'blur(20px) saturate(150%)',
            border: isScrolled ? '1px solid rgba(184, 142, 68, 0.55)' : '1px solid rgba(184, 142, 68, 0.40)',
            borderRadius: 'var(--radius-pill)',
            boxShadow: isScrolled
              ? '0 10px 30px rgba(92, 70, 32, 0.14), inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -1px 1px rgba(184, 142, 68, 0.2)'
              : '0 6px 20px rgba(92, 70, 32, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -1px 1px rgba(184, 142, 68, 0.15)',
            padding: '0 12px 0 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.35s var(--ease-editorial)'
          }}
        >
          {/* Brand Logo & Title */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home', 'home');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: 'var(--text-primary)'
            }}
            aria-label={`${brandConfig.name} Homepage`}
          >
            <img
              src="/logo-emblem.svg"
              alt={`${brandConfig.name} Emblem`}
              width="24"
              height="24"
              style={{
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.06))'
              }}
            />
            
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(0.95rem, 3.6vw, 1.1rem)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--text-primary)',
                whiteSpace: 'nowrap'
              }}
            >
              {brandConfig.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {/* Vanilla Route */}
            <a
              href="/vanilla"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('vanilla', 'vanilla');
              }}
              style={{
                fontSize: '0.8125rem',
                fontWeight: currentRoute === 'vanilla' ? 600 : 500,
                color: currentRoute === 'vanilla' ? 'var(--text-primary)' : 'var(--text-secondary)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                padding: '6px 8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'color 0.2s ease'
              }}
            >
              <Leaf size={14} color={currentRoute === 'vanilla' ? 'var(--accent-gold-dark)' : 'var(--accent-gold)'} />
              <span>Vanilla</span>
            </a>

            {/* Quality Route */}
            <a
              href="/quality"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('quality', 'quality');
              }}
              style={{
                fontSize: '0.8125rem',
                fontWeight: currentRoute === 'quality' ? 600 : 500,
                color: currentRoute === 'quality' ? 'var(--text-primary)' : 'var(--text-secondary)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                padding: '6px 8px',
                transition: 'color 0.2s ease'
              }}
            >
              Quality
            </a>

            {/* About Route */}
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('about', 'about');
              }}
              style={{
                fontSize: '0.8125rem',
                fontWeight: currentRoute === 'about' ? 600 : 500,
                color: currentRoute === 'about' ? 'var(--text-primary)' : 'var(--text-secondary)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                padding: '6px 8px',
                transition: 'color 0.2s ease'
              }}
            >
              About
            </a>

            {/* For Buyers Route */}
            <a
              href="/buyers"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('buyers', 'buyers');
              }}
              style={{
                fontSize: '0.8125rem',
                fontWeight: currentRoute === 'buyers' ? 600 : 500,
                color: currentRoute === 'buyers' ? 'var(--text-primary)' : 'var(--text-secondary)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                padding: '6px 8px',
                transition: 'color 0.2s ease'
              }}
            >
              For Buyers
            </a>

            {/* Inquiry Action Button */}
            <button
              type="button"
              onClick={onOpenInquiry}
              style={{
                background: 'var(--text-primary)',
                color: 'var(--bg-primary)',
                border: 'none',
                borderRadius: 'var(--radius-pill)',
                padding: '5px 14px',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'background-color 0.2s ease, transform 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Inquiry</span>
              <ArrowUpRight size={13} color="var(--accent-gold)" />
            </button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="mobile-nav-trigger">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      <div
        className={`mobile-nav-panel ${mobileMenuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-label="Mobile Navigation"
        aria-modal="true"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Direct Navigation Links */}
          <a
            href="/vanilla"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('vanilla', 'vanilla');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: currentRoute === 'vanilla' ? 'var(--accent-gold-dark)' : 'var(--text-primary)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              padding: '8px 10px',
              borderRadius: 'var(--radius-xs)',
              backgroundColor: currentRoute === 'vanilla' ? 'rgba(140, 102, 45, 0.12)' : 'transparent'
            }}
          >
            <Leaf size={16} color={currentRoute === 'vanilla' ? 'var(--accent-gold-dark)' : 'var(--accent-gold)'} />
            <span>Indonesian Vanilla</span>
          </a>
            <a
              href="/quality"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('quality', 'quality');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                color: currentRoute === 'quality' ? 'var(--accent-gold)' : 'var(--text-primary)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                padding: '8px 10px'
              }}
            >
              <ShieldCheck size={16} color="var(--accent-gold)" />
              <span>Quality & Compliance</span>
            </a>

            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('about', 'about');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                color: currentRoute === 'about' ? 'var(--accent-gold)' : 'var(--text-primary)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                padding: '8px 10px'
              }}
            >
              <Info size={16} color="var(--accent-gold)" />
              <span>About Essence Indonesia</span>
            </a>

            <a
              href="/buyers"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('buyers', 'buyers');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                color: currentRoute === 'buyers' ? 'var(--accent-gold)' : 'var(--text-primary)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                padding: '8px 10px'
              }}
            >
              <Briefcase size={16} color="var(--accent-gold)" />
              <span>For International Buyers</span>
            </a>
          </div>

          {/* Action CTA in Mobile Drawer */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenInquiry) onOpenInquiry();
            }}
            style={{
              width: '100%',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              border: 'none',
              borderRadius: 'var(--radius-pill)',
              padding: '12px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '12px'
            }}
          >
            <span>Start Sourcing Inquiry</span>
            <ArrowUpRight size={15} color="var(--accent-gold)" />
          </button>
        </div>
      </>
    );
  };

export default Navbar;
