/**
 * BRAND & ENVIRONMENT CONFIGURATION
 * Centralized reader for public environment variables (VITE_*)
 * Only non-secret public values are stored here.
 */

export const brandConfig = {
  // Brand Nomenclature
  name: import.meta.env.VITE_BRAND_NAME || 'SVARNA',
  surname: import.meta.env.VITE_BRAND_SURNAME || 'VANILLA',
  fullName: `${import.meta.env.VITE_BRAND_NAME || 'SVARNA'} ${import.meta.env.VITE_BRAND_SURNAME || 'VANILLA'}`.trim(),
  tagline: import.meta.env.VITE_BRAND_TAGLINE || 'Pure Vanilla, Grown with Intention.',
  subtitle: import.meta.env.VITE_BRAND_SUBTITLE || 'Indonesian single-origin vanilla beans cultivated, cured, and curated with quiet devotion.',
  origin: import.meta.env.VITE_BRAND_ORIGIN || 'Indonesia',
  terroir: import.meta.env.VITE_BRAND_TERROIR || 'Indonesian Volcanic Archipelagos',

  // Configurable Claims & Technical Specs
  claims: {
    grade: import.meta.env.VITE_CLAIM_GRADE || 'Gourmet Grade A',
    moisture: import.meta.env.VITE_CLAIM_MOISTURE || '30% – 35%',
    length: import.meta.env.VITE_CLAIM_LENGTH || '16 – 20 cm',
    vanillin: import.meta.env.VITE_CLAIM_VANILLIN || 'Lab-Verified High Vanillin',
    aroma: import.meta.env.VITE_CLAIM_AROMA || 'Warm, Floral, Woody, Balsamic undertones',
  },

  // B2B Contact Concierge
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'concierge@svarna-vanilla.com',
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890',
    whatsappDefaultMessage: import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE || 'Hello, I would like to inquire about sourcing your premium Indonesian vanilla beans.',
    specSheetUrl: import.meta.env.VITE_SPEC_SHEET_URL || '#specification-sheet',
  }
};

export default brandConfig;
