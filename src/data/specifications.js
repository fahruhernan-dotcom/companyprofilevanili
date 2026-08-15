/**
 * TECHNICAL SPECIFICATIONS DATA
 * Authoritative baseline verified against official catalog PDF.
 */

export const vanillaSpecifications = {
  primaryProduct: {
    botanicalName: "Vanilla planifolia Indonesia (HS 0905.10) & Vanilla tahitensis (HS 0905.10)",
    commonName: "Indonesian Planifolia & Tahitensis Vanilla Beans",
    harvestType: "Single-Season Selective Hand-Harvest",
    curingMethod: "Traditional Sun-Cured & Sweat Conditioning",
    shelfLife: "24 – 36 Months in Vacuum Sealed Storage"
  },

  grades: [
    {
      title: "Planifolia Indonesia (Gourmet / Grade A, B, C)",
      species: "Vanilla planifolia (Andrews)",
      image: "/images/catalog_products/planifolia_vanilla_official.webp",
      targetAudience: "Haute Pastry, Fine Chocolatiers, Artisan Gelato, Vanilla Extracts",
      specs: [
        { label: "HS Code", value: "0905.10", verified: true },
        { label: "Origin", value: "Indonesia (Selected Origins)", verified: true },
        { label: "Length", value: "13 – 21 cm (Longer & Slender)", verified: true },
        { label: "Vanillin Content", value: "2% – 3% (High)", verified: true },
        { label: "Moisture Content", value: "30% – 35% (Gourmet / Grade A)", verified: true },
        { label: "Color & Texture", value: "Dark brown to black, glossy, oily, chewy, supple", verified: true },
        { label: "Aroma & Flavor", value: "Balsamic, sweet, warm, classic vanilla with rich depth", verified: true },
        { label: "Packaging", value: "Food-Grade Vacuum Plastic (Hermetic Sealing)", verified: true }
      ]
    },
    {
      title: "Tahitensis Vanilla (Gourmet / Grade A, B, C)",
      species: "Vanilla tahitensis (J.W. Moore)",
      image: "/images/catalog_products/tahitensis_vanilla_official.webp",
      targetAudience: "Perfumes, Gourmet Desserts, Luxury Patisserie, Infusions",
      specs: [
        { label: "HS Code", value: "0905.10", verified: true },
        { label: "Origin", value: "Indonesian & Papua Archipelago", verified: true },
        { label: "Length", value: "13 – 16 cm (Shorter & Plumper)", verified: true },
        { label: "Vanillin Content", value: "1.0% – 1.5%", verified: true },
        { label: "Moisture Content", value: "32% – 38%", verified: true },
        { label: "Color & Texture", value: "Reddish-brown to deep purple, softer, flexible", verified: true },
        { label: "Aroma & Flavor", value: "Floral, fruity, smooth, complex, lighter sweetness", verified: true },
        { label: "Packaging", value: "Food-Grade Vacuum Plastic (Hermetic Sealing)", verified: true }
      ]
    }
  ],

  certificationsAndEthics: [
    { name: "Halal Certified", description: "Fully certified by statutory Indonesian Halal authorities (BPJPH / LPPOM MUI)." },
    { name: "P-IRT Registered", description: "Registered food production facility under Indonesian health & food agencies." },
    { name: "ISO 22000 Ready", description: "Compliant with international food safety management systems." },
    { name: "Phytosanitary Clearance", description: "Mandatory agricultural health clearance issued for all export shipments." },
    { name: "100% Pure & Natural", description: "No additives, preservatives, artificial flavors, GMO-Free, Gluten-Free, Allergen-Free." }
  ]
};

export const organicAccreditations = [
  {
    id: 'usda-organic',
    name: 'USDA Organic',
    standard: 'National Organic Program (NOP)',
    logo: '/images/certifications/logo_usda_organic.png',
    scope: '100% Synthetic-Free Volcanic Soils',
    badge: 'Certified Organic',
    auditBody: 'USDA Accredited Certifier',
    description: 'Guaranteed 100% pesticide-free and non-GMO agricultural cultivation harvested from pristine Indonesian volcanic agroforestry.'
  },
  {
    id: 'ceres-certified',
    name: 'CERES Certified',
    standard: 'EU Organic & USDA-NOP Standards',
    logo: '/images/certifications/logo_ceres_certified.png',
    scope: 'International Processing & Chain of Custody',
    badge: 'International Audit',
    auditBody: 'CERES GmbH (Germany / Global)',
    description: 'Rigorous annual audit ensuring zero chemical cross-contamination throughout whole bean curing, extraction, and hermetic packaging.'
  },
  {
    id: 'rainforest-alliance',
    name: 'Rainforest Alliance',
    standard: 'Sustainable Agriculture Standard',
    logo: '/images/certifications/logo_rainforest_alliance.webp',
    scope: 'Canopy Agroforestry & Farmer Welfare',
    badge: 'People & Nature',
    auditBody: 'Rainforest Alliance Certified',
    description: 'Preserving biodiversity under natural equatorial forest shade while guaranteeing fair wages and ethical community trade.'
  }
];

export default vanillaSpecifications;
