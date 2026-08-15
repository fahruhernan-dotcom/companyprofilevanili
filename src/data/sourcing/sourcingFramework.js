/**
 * ESSENCE INDONESIA — SOURCING & BUYER GUIDE FRAMEWORK
 * Structural schema for international commodity buyers.
 */

export const sourcingFramework = {
  eyebrow: 'Commercial Intelligence',
  headline: 'Direct Export Procurement & Trade Architecture',
  lead: 'Structured to support international importers, culinary manufacturers, specialty roasters, and luxury fragrance houses with seamless Indonesian commodity sourcing.',
  tradeFlow: [
    {
      step: '01',
      title: 'Commercial Inquiry & Lot Specification',
      description: 'Submit your target commodity (Vanilla, Coffee, or Both), required grade, volume range, and destination port.'
    },
    {
      step: '02',
      title: 'Pre-Shipment Sample Dispatch',
      description: 'Production-representative evaluation samples dispatched via international air courier with preliminary specification sheets.'
    },
    {
      step: '03',
      title: 'Commercial Agreement & Terms',
      description: 'Contract finalization on international trade terms (FOB Tanjung Priok / Tanjung Perak or CIF global destination ports upon inquiry).'
    },
    {
      step: '04',
      title: 'Batch Preparation & Lab Clearance',
      description: 'Hermetic packaging in controlled facilities with mandatory Indonesian Agricultural Quarantine Inspection and Certificate of Analysis issuance.'
    },
    {
      step: '05',
      title: 'Export Freight & Documentation Transfer',
      description: 'Containerized ocean freight or expedited air cargo dispatch with complete trade dossier (Bill of Lading, COO, Phytosanitary, Commercial Invoice, Packing List).'
    }
  ],
  exportDocumentation: [
    { document: 'Phytosanitary Certificate', issuer: 'Indonesian Agricultural Quarantine Agency' },
    { document: 'Certificate of Origin (COO / Form AK/E/D)', issuer: 'Indonesian Ministry of Trade' },
    { document: 'Certificate of Analysis (COA)', issuer: 'Accredited Food Laboratory' },
    { document: 'Halal Certification', issuer: 'BPJPH / LPPOM MUI' },
    { document: 'Commercial Invoice & Packing List', issuer: 'Essence Indonesia Export Department' },
    { document: 'Bill of Lading / Airway Bill', issuer: 'Designated Shipping Line / Freight Forwarder' }
  ],
  commercialTermsNotice: 'Minimum Order Quantities (MOQ), seasonal harvest allocations, and forward contract pricing are provided directly upon commercial inquiry.'
};

export default sourcingFramework;
