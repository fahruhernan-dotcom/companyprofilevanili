/**
 * ESSENCE INDONESIA — OFFICIAL EXPORT STANDARD & ORDER POLICY
 * 100% matched to page 16 of the official catalog.
 */

export const exportPolicy = {
  capacities: [
    { product: 'Vanilla Beans Gourmet', monthly: '100 – 300 kg', seasonal: '5 – 10 tons / harvest season' },
    { product: 'Vanilla Beans Grade A', monthly: '500 kg', seasonal: 'Harvest allocation' },
    { product: 'Vanilla Beans Grade B & C', monthly: '1,000 kg (1 Ton)', seasonal: 'Extraction volume' },
    { product: 'Vanilla Caviar', monthly: '100 kg', seasonal: 'Continuous' },
    { product: 'Vanilla Powder', monthly: '300 kg', seasonal: 'Continuous' },
    { product: 'Vanilla Paste', monthly: '300 L', seasonal: 'Continuous' },
    { product: 'Vanilla Extract (Alcohol & Non-Alcohol)', monthly: '500 L', seasonal: 'Continuous' },
    { product: 'Crystallized Vanilla', monthly: 'By Request', seasonal: 'Reserve lots' }
  ],

  categories: [
    {
      category: 'Solid Vanilla Products',
      products: 'Vanilla Beans, Crystallized Vanilla, Vanilla Powder, Vanilla Caviar, Dried Vanilla Seeds',
      packaging: 'Vacuum-sealed packaging, packed in 1 kg, 5 kg, or 10 kg boxes',
      packagingImage: '/images/inspection_proofs/proof_export_packaging_1kg_vacuum.jpg',
      qualityStandard: [
        '100% pure vanilla, no additives',
        'Cured & processed naturally',
        'Food-grade, export standard',
        'Sourced from mature Indonesian beans'
      ],
      moq: '1 kg (Trial Order Welcome)'
    },
    {
      category: 'Liquid Vanilla Products',
      products: 'Vanilla Extract (Alcohol/Non-Alcohol), Vanilla Paste, Vanilla Essence',
      packaging: 'HDPE bottle – 1 liter',
      packagingImage: '/images/catalog_products/real_extract_bottles_trio.jpg',
      qualityStandard: [
        'Extracted from fully matured vanilla',
        'Alcohol-based (35%) or non-alcohol',
        'No artificial flavor unless requested',
        'Food-grade, HACCP-compliant'
      ],
      moq: '1 L (Trial Order Welcome)'
    }
  ],

  terms: {
    leadTime: 'Ready Stock / 7–10 working days after payment confirmation',
    shippingTerms: 'EXW / FOB Semarang / CIF',
    portOfLoading: 'Port of Tanjung Emas (Semarang) / Port of Tanjung Priok (Jakarta) / Port of Tanjung Perak (Surabaya)',
    labeling: 'Standard Worldnesian or Private Label (MOQ applies)',
    airFreight: 'Air Freight (Trial Orders) via DHL, FedEx, UPS (5–7 days)',
    officialWebsite: 'www.essenceindonesia.com'
  }
};

export default exportPolicy;
