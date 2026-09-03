import React, { useState, useEffect, useCallback } from 'react';
import { brandConfig } from './config/brandConfig';
import { PageLayout } from './components/PageLayout';
import { updateDocumentMeta } from './utils/updateMeta';

// Dedicated Pages
import { AboutPage } from './pages/AboutPage';
import { VanillaPage } from './pages/VanillaPage';
import { CoffeePage } from './pages/CoffeePage';
import { QualityPage } from './pages/QualityPage';
import { BuyersPage } from './pages/BuyersPage';

// Homepage Sections (The 6-Section Gateway)
import { Hero } from './sections/Hero';
import { TwoOrigins } from './sections/TwoOrigins';
import { SelectedOrigins } from './sections/SelectedOrigins';
import { Philosophy } from './sections/Philosophy';
import { ExportTrust } from './sections/ExportTrust';
import { ClosingInquiry } from './sections/ClosingInquiry';

export function App({ initialRoute }) {
  // Parse current route from path or legacy hash
  const parseCurrentRoute = useCallback(() => {
    if (typeof window === 'undefined') {
      return initialRoute || 'home';
    }

    const pathname = (window.location.pathname || '/').toLowerCase().replace(/^\/|\/$/g, '');
    const rawHash = (window.location.hash || '').replace(/^#\/?/, '').toLowerCase();

    // Check Clean Path URLs first
    if (pathname === 'about') return 'about';
    if (pathname === 'origins') return 'origins';
    if (pathname === 'vanilla') return 'vanilla';
    if (pathname === 'coffee') return 'vanilla'; // Coffee on hold -> redirect to vanilla
    if (pathname === 'quality') return 'quality';
    if (pathname === 'buyers' || pathname === 'for-buyers') return 'buyers';

    // Backward compatibility for legacy hashtag URLs (e.g., /#vanilla)
    if (rawHash === 'about') return 'about';
    if (rawHash === 'origins') return 'origins';
    if (rawHash === 'vanilla') return 'vanilla';
    if (rawHash === 'coffee') return 'vanilla'; // Coffee on hold -> redirect to vanilla
    if (rawHash === 'quality') return 'quality';
    if (rawHash === 'buyers' || rawHash === 'for-buyers') return 'buyers';

    return initialRoute || 'home';
  }, [initialRoute]);

  const [currentRoute, setCurrentRoute] = useState(parseCurrentRoute);
  const [isInquiryOpen, setIsInquiryOpen] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.location.hash === '#inquiry';
  });
  const [inquiryCommodity, setInquiryCommodity] = useState('Indonesian Vanilla — Gourmet Grade A Planifolia');
  const [isSpecSheetOpen, setIsSpecSheetOpen] = useState(false);

  const openInquiry = (commodity) => {
    if (commodity && typeof commodity === 'string') {
      setInquiryCommodity(commodity);
    }
    setIsInquiryOpen(true);
  };

  // Synchronize browser history (Back / Forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const route = parseCurrentRoute();
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [parseCurrentRoute]);

  // Clean up legacy hash in address bar if present
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const rawHash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (rawHash === 'coffee') {
        window.history.replaceState({ route: 'vanilla' }, '', '/vanilla');
      } else if (['about', 'vanilla', 'quality', 'buyers'].includes(rawHash)) {
        window.history.replaceState({ route: rawHash }, '', `/${rawHash}`);
      } else if (rawHash === 'origins') {
        const el = document.getElementById('origins');
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        }
      }
    }
  }, []);

  // Navigate handler for internal links
  const navigateTo = (route, targetHash) => {
    setCurrentRoute(route);

    if (typeof window !== 'undefined') {
      const targetPath = route === 'home' ? '/' : `/${route}`;

      // Update URL via HTML5 History API without page reload
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ route }, '', targetPath);
      }

      if (targetHash === 'origins') {
        const el = document.getElementById('origins');
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Dynamically update metadata, canonical URL, and Schema.org JSON-LD
  useEffect(() => {
    updateDocumentMeta(currentRoute);
  }, [currentRoute]);

  // Comprehensive Media Theft Protection (Anti-Save & Anti-Drag on Media)
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleContextMenu = (e) => {
      const isMedia = e.target.tagName === 'IMG' || 
                      e.target.tagName === 'VIDEO' || 
                      e.target.tagName === 'CANVAS' || 
                      e.target.closest('img, video, canvas, [data-protected-media], .img-container, .media-frame, .lightbox-image-container, .proof-frame-inner');
      if (isMedia) {
        e.preventDefault();
        return false;
      }
    };

    const handleDragStart = (e) => {
      const isMedia = e.target.tagName === 'IMG' || 
                      e.target.tagName === 'VIDEO' || 
                      e.target.closest('img, video');
      if (isMedia) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <PageLayout
      currentRoute={currentRoute}
      onNavigate={navigateTo}
      isInquiryOpen={isInquiryOpen}
      inquiryCommodity={inquiryCommodity}
      onOpenInquiry={openInquiry}
      onCloseInquiry={() => setIsInquiryOpen(false)}
      isSpecSheetOpen={isSpecSheetOpen}
      onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
      onCloseSpecSheet={() => setIsSpecSheetOpen(false)}
    >
      {/* Dynamic Route View Switching */}
      {currentRoute === 'about' && (
        <AboutPage
          onNavigateHome={() => navigateTo('home')}
          onOpenInquiry={() => openInquiry('Indonesian Vanilla — Gourmet Grade A Planifolia')}
        />
      )}

      {currentRoute === 'vanilla' && (
        <VanillaPage
          onNavigateHome={() => navigateTo('home')}
          onOpenInquiry={() => openInquiry('Indonesian Vanilla — Gourmet Grade A Planifolia')}
          onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
        />
      )}

      {currentRoute === 'coffee' && (
        <CoffeePage
          onNavigateHome={() => navigateTo('home')}
          onOpenInquiry={() => openInquiry('Selected Indonesian Green Coffee — Commercial Export')}
        />
      )}

      {currentRoute === 'quality' && (
        <QualityPage
          onNavigateHome={() => navigateTo('home')}
          onOpenInquiry={() => openInquiry('Indonesian Vanilla — Gourmet Grade A Planifolia')}
          onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
        />
      )}

      {currentRoute === 'buyers' && (
        <BuyersPage
          onNavigateHome={() => navigateTo('home')}
          onOpenInquiry={() => openInquiry('Indonesian Vanilla — Gourmet Grade A Planifolia')}
          onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
        />
      )}

      {(currentRoute === 'home' || currentRoute === 'origins') && (
        <>
          <Hero onOpenInquiry={() => openInquiry('Indonesian Vanilla — Gourmet Grade A Planifolia')} />
          <TwoOrigins onNavigate={navigateTo} onOpenInquiry={openInquiry} />
          <SelectedOrigins />
          <Philosophy />
          <ExportTrust
            onNavigate={navigateTo}
            onOpenInquiry={() => openInquiry('Indonesian Vanilla — Gourmet Grade A Planifolia')}
          />
          <ClosingInquiry
            onOpenInquiry={() => openInquiry('Indonesian Vanilla — Gourmet Grade A Planifolia')}
          />
        </>
      )}
    </PageLayout>
  );
}

export default App;
