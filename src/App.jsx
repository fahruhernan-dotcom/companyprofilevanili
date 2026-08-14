import React, { useState, useEffect } from 'react';
import { brandConfig } from './config/brandConfig';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { SpecSheetModal } from './components/SpecSheetModal';
import { FloatingConcierge } from './components/FloatingConcierge';

// Pages & Sections
import { AboutPage } from './pages/AboutPage';
import { Hero } from './sections/Hero';
import { Philosophy } from './sections/Philosophy';
import { ScrollytellingShowcase } from './sections/ScrollytellingShowcase';
import { TheVanilla } from './sections/TheVanilla';
import { TerroirOrigin } from './sections/TerroirOrigin';
import { TheCraft } from './sections/TheCraft';
import { QualitySpecs } from './sections/QualitySpecs';
import { Applications } from './sections/Applications';
import { ClosingInquiry } from './sections/ClosingInquiry';

export function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#about' ? 'about' : 'home';
  });
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSpecSheetOpen, setIsSpecSheetOpen] = useState(false);

  // Sync hash with page state
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '' || window.location.hash === '#home' || window.location.hash.startsWith('#')) {
        if (currentPage === 'about' && (window.location.hash === '' || window.location.hash === '#home')) {
          setCurrentPage('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = 'about';
    } else {
      window.location.hash = 'home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync document title with dynamic brand name
  useEffect(() => {
    if (currentPage === 'home') {
      document.title = `${brandConfig.fullName} — ${brandConfig.tagline}`;
    }
  }, [currentPage]);

  return (
    <>
      {/* A11y Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Navigation with Scroll Progress & Page Routing */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {currentPage === 'about' ? (
          <AboutPage
            onNavigateHome={() => navigateTo('home')}
            onOpenInquiry={() => setIsInquiryOpen(true)}
          />
        ) : (
          <>
            <Hero onOpenInquiry={() => setIsInquiryOpen(true)} />
            <Philosophy />
            
            {/* Apple-Style Interactive 360 Scrollytelling Showcase */}
            <ScrollytellingShowcase onOpenInquiry={() => setIsInquiryOpen(true)} />
            
            <TheVanilla
              onOpenInquiry={() => setIsInquiryOpen(true)}
              onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
            />
            <TerroirOrigin />
            <TheCraft />
            <QualitySpecs
              onOpenInquiry={() => setIsInquiryOpen(true)}
              onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
            />
            <Applications onOpenInquiry={() => setIsInquiryOpen(true)} />
            <ClosingInquiry
              onOpenInquiry={() => setIsInquiryOpen(true)}
              onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
      />

      {/* Floating Concierge Action Pill */}
      <FloatingConcierge onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* B2B Sourcing Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* Technical Quality Dossier Modal */}
      <SpecSheetModal
        isOpen={isSpecSheetOpen}
        onClose={() => setIsSpecSheetOpen(false)}
        onOpenInquiry={() => {
          setIsSpecSheetOpen(false);
          setIsInquiryOpen(true);
        }}
      />
    </>
  );
}

export default App;
