/**
 * BRAND & ENVIRONMENT CONFIGURATION
 * Centralized reader for public environment variables (VITE_*)
 * Strictly non-secret public values.
 */

export const brandConfig = {
  // Corporate Brand Identity
  name: import.meta.env.VITE_BRAND_NAME || import.meta.env.VITE_COMPANY_NAME || 'ESSENCE INDONESIA',
  brandName: import.meta.env.VITE_BRAND_NAME || import.meta.env.VITE_COMPANY_NAME || 'ESSENCE INDONESIA',
  fullName: import.meta.env.VITE_BRAND_NAME || import.meta.env.VITE_COMPANY_NAME || 'ESSENCE INDONESIA',
  surname: '',
  positioning: import.meta.env.VITE_BRAND_POSITIONING || import.meta.env.VITE_COMPANY_POSITIONING || 'Premium Indonesian Vanilla Exporter',
  heroStatement: import.meta.env.VITE_BRAND_HERO_STATEMENT || import.meta.env.VITE_HERO_STATEMENT || 'INDONESIAN ORIGINS. SOURCED FOR THE WORLD.',
  tagline: 'Pure Vanilla. Rich Heritage. The True Essence of Indonesia in Every Batch.',
  heroSubtitle: import.meta.env.VITE_BRAND_HERO_SUBTITLE || 'Direct export sourcing of single-origin Indonesian Vanilla (Planifolia & Tahitensis) and value-added derivatives.',
  subtitle: import.meta.env.VITE_BRAND_HERO_SUBTITLE || 'Direct export sourcing of single-origin Indonesian Vanilla (Planifolia & Tahitensis) and value-added derivatives.',
  origin: import.meta.env.VITE_BRAND_ORIGIN || 'Indonesia',
  terroir: import.meta.env.VITE_BRAND_TERROIR || 'Selected Indonesian Origins',

  // Primary Strategic Product Verticals
  verticals: [
    {
      id: 'vanilla',
      name: 'Vanilla',
      botanicalName: 'Vanilla planifolia / Vanilla tahitensis',
      tagline: 'Authentic taste of Indonesian vanilla cured with slow artisanal devotion.',
      share: 100
    }
  ],

  // Defensive Fallback Claims for Legacy Vanilla Sections
  claims: {
    grade: 'Gourmet / Grade A',
    length: '13 – 21 cm',
    moisture: '30% – 35%'
  },

  // B2B Contact Concierge (Verified Channels)
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || import.meta.env.VITE_COMPANY_EMAIL || 'essenceindonesia@gmail.com',
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '6289669241131',
    contactPerson: import.meta.env.VITE_CONTACT_PERSON || 'Iwan',
    websiteUrl: import.meta.env.VITE_WEBSITE_URL || 'https://www.essenceindonesia.com',
    whatsappDefaultMessage: import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE || 'Hello Essence Indonesia, I would like to inquire about commercial sourcing for international export.',
    specSheetUrl: import.meta.env.VITE_SPEC_SHEET_URL || '#specification-sheet'
  }
};

export default brandConfig;
