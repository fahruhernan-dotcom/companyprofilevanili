import React, { useState, useEffect, useCallback } from 'react';
import { brandConfig } from './config/brandConfig';
import { PageLayout } from './components/PageLayout';
import { RoutePlaceholder } from './components/RoutePlaceholder';

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

export function App() {
  // Parse initial route from hash
  const parseRouteFromHash = useCallback(() => {
    const rawHash = (window.location.hash || '').replace(/^#\/?/, '').toLowerCase();
    
    if (rawHash === 'about') return 'about';
    if (rawHash === 'origins') return 'origins';
    if (rawHash === 'vanilla') return 'vanilla';
    if (rawHash === 'coffee') return 'coffee';
    if (rawHash === 'quality') return 'quality';
    if (rawHash === 'buyers' || rawHash === 'for-buyers') return 'buyers';
    if (rawHash === 'inquiry') return 'home'; // Inquiry triggers modal
    return 'home';
  }, []);

  const [currentRoute, setCurrentRoute] = useState(parseRouteFromHash);
  const [isInquiryOpen, setIsInquiryOpen] = useState(() => {
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

  // Synchronize hash changes with state
  useEffect(() => {
    const handleHashChange = () => {
      const route = parseRouteFromHash();
      setCurrentRoute(route);

      if (window.location.hash === '#inquiry') {
        setIsInquiryOpen(true);
      }

      // Page-level vs In-page section scroll behavior
      if (['about', 'vanilla', 'coffee', 'quality', 'buyers'].includes(route)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (['origins', 'selected-origins'].includes(route)) {
        const el = document.getElementById(route);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 60);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [parseRouteFromHash]);

  // Navigate handler for links
  const navigateTo = (route, targetHash) => {
    setCurrentRoute(route);
    const hash = targetHash || route;
    if (hash === 'home') {
      window.location.hash = 'home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = hash;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Update document title dynamically based on active route
  useEffect(() => {
    const titles = {
      home: `${brandConfig.name} — ${brandConfig.heroStatement}`,
      about: `Our Heritage & Origins — ${brandConfig.name}`,
      origins: `Indonesian Origins (Vanilla & Coffee) — ${brandConfig.name}`,
      vanilla: `Indonesian Vanilla Sourcing — ${brandConfig.name}`,
      coffee: `Indonesian Green Coffee Sourcing — ${brandConfig.name}`,
      quality: `Quality & Export Standards — ${brandConfig.name}`,
      buyers: `For International Buyers — ${brandConfig.name}`
    };
    document.title = titles[currentRoute] || titles.home;
  }, [currentRoute]);

  // Comprehensive Media Theft Protection (Anti-Save, Anti-RightClick, Anti-Drag)
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (
        e.target.tagName === 'IMG' ||
        e.target.tagName === 'VIDEO' ||
        e.target.closest('img, video, picture, figure, .media-frame, .craft-card, .inspection-proof-card, .gallery-item, .lightbox-image-container')
      ) {
        e.preventDefault();
        return false;
      }
    };

    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO' || e.target.closest('img, video')) {
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
