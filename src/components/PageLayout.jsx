import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingConcierge } from './FloatingConcierge';
import { InquiryModal } from './InquiryModal';
import { SpecSheetModal } from './SpecSheetModal';

export const PageLayout = ({
  currentRoute = 'home',
  onNavigate,
  isInquiryOpen = false,
  inquiryCommodity,
  onOpenInquiry,
  onCloseInquiry,
  isSpecSheetOpen = false,
  onOpenSpecSheet,
  onCloseSpecSheet,
  children
}) => {
  return (
    <div className="app-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* A11y Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={onNavigate}
        onOpenInquiry={onOpenInquiry}
      />

      {/* Main Page Content Body */}
      <main id="main-content" style={{ flex: '1 0 auto' }}>
        {children}
      </main>

      {/* Editorial Footer */}
      <Footer
        currentRoute={currentRoute}
        onNavigate={onNavigate}
        onOpenInquiry={onOpenInquiry}
      />

      {/* Floating Concierge Action */}
      <FloatingConcierge onOpenInquiry={onOpenInquiry} />

      {/* B2B Sourcing Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        initialCommodity={inquiryCommodity}
        onClose={onCloseInquiry}
      />

      {/* Technical Specification Dossier Modal */}
      <SpecSheetModal
        isOpen={isSpecSheetOpen}
        onClose={onCloseSpecSheet}
        onOpenInquiry={() => {
          if (onCloseSpecSheet) onCloseSpecSheet();
          if (onOpenInquiry) onOpenInquiry();
        }}
      />
    </div>
  );
};

export default PageLayout;
