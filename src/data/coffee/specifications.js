/**
 * ESSENCE INDONESIA — COFFEE SPECIFICATIONS SCHEMA (STRICT MOCKUP)
 * Schema structure ready for official Coffee documentation.
 * All actual values remain strictly null / 'Available Upon Inquiry'.
 */

export const coffeeProducts = [
  {
    id: 'indonesian-specialty-arabica',
    name: 'Indonesian Arabica Green Coffee',
    category: 'Specialty Green Coffee',
    hsCode: '0901.11.00',
    type: 'Coffea arabica',
    origin: 'Selected Indonesian Origins (Available Upon Inquiry)',
    variety: 'Available Upon Inquiry',
    altitude: 'Available Upon Inquiry',
    gradesAvailable: ['Available Upon Inquiry'],
    processingMethod: 'Available Upon Inquiry',
    cuppingScore: null,
    cupProfile: 'Available Upon Inquiry',
    screenSize: 'Available Upon Inquiry',
    moistureContent: 'Available Upon Inquiry',
    defectRate: 'Available Upon Inquiry',
    packaging: 'Available Upon Inquiry',
    capacity: 'Available Upon Inquiry',
    certifications: 'Available Upon Inquiry',
    moq: 'Available Upon Inquiry',
    incoterms: 'Available Upon Inquiry',
    exportVolume: 'Available Upon Inquiry',
    condition: 'Raw unroasted green coffee beans (Details Upon Inquiry).',
    bestUse: 'Specialty espresso, pour-over roasting, and premium commercial blends.',
    badge: 'Specialty Arabica',
    isMockup: true
  },
  {
    id: 'indonesian-fine-robusta',
    name: 'Indonesian Robusta Green Coffee',
    category: 'Commercial & Fine Robusta',
    hsCode: '0901.11.00',
    type: 'Coffea canephora',
    origin: 'Selected Indonesian Origins (Available Upon Inquiry)',
    variety: 'Available Upon Inquiry',
    altitude: 'Available Upon Inquiry',
    gradesAvailable: ['Available Upon Inquiry'],
    processingMethod: 'Available Upon Inquiry',
    cuppingScore: null,
    cupProfile: 'Available Upon Inquiry',
    screenSize: 'Available Upon Inquiry',
    moistureContent: 'Available Upon Inquiry',
    defectRate: 'Available Upon Inquiry',
    packaging: 'Available Upon Inquiry',
    capacity: 'Available Upon Inquiry',
    certifications: 'Available Upon Inquiry',
    moq: 'Available Upon Inquiry',
    incoterms: 'Available Upon Inquiry',
    exportVolume: 'Available Upon Inquiry',
    condition: 'Raw unroasted green coffee beans (Details Upon Inquiry).',
    bestUse: 'Commercial roasting, espresso crema formulations, and soluble beverage manufacturing.',
    badge: 'Fine Robusta',
    isMockup: true
  }
];

export const coffeeQualityStandards = [
  { name: 'Moisture Target', parameter: 'Available Upon Inquiry', status: 'Pending Official Documentation' },
  { name: 'Packaging Protection', parameter: 'Available Upon Inquiry', status: 'Pending Official Documentation' },
  { name: 'Physical Grading', parameter: 'Available Upon Inquiry', status: 'Lot Dependent' },
  { name: 'Phytosanitary Clearance', parameter: 'Available Upon Inquiry', status: 'Export Requirement' },
  { name: 'Traceability & Lot Data', parameter: 'Available Upon Inquiry', status: 'On Request' }
];

export default {
  coffeeProducts,
  coffeeQualityStandards
};
