import React, { useState, useEffect } from 'react';
import { brandConfig } from '../config/brandConfig';
import { MessageCircle, Sparkles } from 'lucide-react';

export const FloatingConcierge = ({ onOpenInquiry }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal floating action once user scrolls past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={onOpenInquiry}
      className="floating-concierge"
      aria-label="Open B2B Sourcing Concierge"
    >
      <Sparkles size={14} style={{ color: 'var(--accent-gold)' }} />
      <span>Concierge</span>
    </button>
  );
};

export default FloatingConcierge;
