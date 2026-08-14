/**
 * TECHNICAL SPECIFICATIONS DATA
 * B2B Export & Quality Verification Matrix
 */

export const vanillaSpecifications = {
  primaryProduct: {
    botanicalName: "Vanilla planifolia Andrews",
    commonName: "Indonesian Planifolia Vanilla Beans",
    harvestType: "Single-Season Selective Hand-Harvest",
    curingMethod: "Traditional Sun-Cured & Wooden Box Sweated",
    shelfLife: "24 – 36 Months in Vacuum Sealed Storage"
  },

  grades: [
    {
      title: "Gourmet / Grade A (Black / Prime)",
      targetAudience: "Haute Pastry, Fine Chocolatiers, Artisan Gelato, Gastronomy",
      specs: [
        { label: "Origin", value: "Indonesia (Java & Bali Terroirs)", verified: true },
        { label: "Moisture Content", value: "30% – 35%", verified: true },
        { label: "Pod Length", value: "16 – 20+ cm", verified: true },
        { label: "Color & Appearance", value: "Deep dark brown/black, oily sheen, supple & pliable", verified: true },
        { label: "Aroma Notes", value: "Warm, sweet, floral, deep woody rum undertones", verified: true },
        { label: "Splits / Defects", value: "< 2% (Hand-sorted)", verified: true }
      ]
    },
    {
      title: "Extraction / Grade B (Red / Cuts)",
      targetAudience: "Pure Natural Vanilla Extracts, Distilleries, Brewing, Perfumery",
      specs: [
        { label: "Origin", value: "Indonesia", verified: true },
        { label: "Moisture Content", value: "20% – 25%", verified: true },
        { label: "Pod Length", value: "13 – 16 cm (Whole & Split)", verified: true },
        { label: "Color & Appearance", value: "Reddish-brown, drier texture with concentrated vanillin", verified: true },
        { label: "Aroma Notes", value: "Intense, sharp woody, concentrated vanilla core", verified: true }
      ]
    }
  ],

  certificationsAndEthics: [
    { name: "Phytosanitary Certified", description: "Standard government agricultural health clearance for international shipping." },
    { name: "Zero Artificial Additives", description: "100% pure sun-cured vanilla with zero artificial vanillin or chemical enhancers." },
    { name: "Direct Agroforestry Sourcing", description: "Cultivated in biodiversity-rich forest canopies supporting local farming communities." }
  ]
};

export default vanillaSpecifications;
