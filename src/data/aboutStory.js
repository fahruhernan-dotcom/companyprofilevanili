/**
 * ABOUT US / ESTATE HERITAGE DATA
 * Comprehensive editorial data for the dedicated About page
 */

import agronomistImg from '../assets/images/craft_pollination.jpg';
import curingMasterImg from '../assets/images/craft_curing.jpg';
import qualityDirectorImg from '../assets/images/craft_grading.jpg';
import estateTerraceImg from '../assets/images/terroir_origin.jpg';

export const aboutStory = {
  hero: {
    overline: "Our Heritage & Purpose",
    title: "Born from Volcanic Ash. Nurtured by Devotion.",
    subtitle: "A modern agricultural atelier dedicated to elevating Indonesian vanilla from raw commodity to revered haute gastronomy."
  },

  genesis: {
    headline: "The Genesis",
    quote: "We set out to challenge the industrial status quo: where vanilla is rushed, chemically accelerated, and stripped of its soulful terroir.",
    body: "Founded amidst the mist-shrouded volcanic ridges of the Indonesian archipelago, Svarna Vanilla was born from a fundamental reverence for botanical craft. Indonesia produces some of the world's most aromatic Vanilla Planifolia, yet for decades, the harvest was hurried by commercial pressure. We created an estate sanctuary where patience is uncompromising, trees remain living, and every blossom receives undivided human care.",
    image: estateTerraceImg
  },

  directives: [
    {
      number: "01",
      title: "Beyond Synthetic Vanillin",
      description: "Restoring the profound multidimensional complexity of 250+ natural organic aroma compounds that artificial lab synthetics can never replicate."
    },
    {
      number: "02",
      title: "Living Canopy Agroforestry",
      description: "Cultivating upon living host trees (Gamal and Albizia) under natural rainforest shade, preserving indigenous biodiversity and volcanic topsoil health."
    },
    {
      number: "03",
      title: "Equitable Farmer Prosperity",
      description: "Partnering directly with multi-generational smallholder farming families through guaranteed fair premiums and comprehensive botanical training."
    }
  ],

  stewards: [
    {
      name: "Budi Santoso",
      role: "Master of Curing (3rd Generation)",
      bio: "Carrying over 40 years of familial curing mastery, overseeing every sun blanket and cedar sweating session.",
      image: curingMasterImg,
      badge: "Curing Artisan"
    },
    {
      name: "Dr. Maya Pratiwi",
      role: "Lead Botanical Agronomist",
      bio: "Horticultural researcher specializing in volcanic andosol micro-ecology and organic vine vitality.",
      image: agronomistImg,
      badge: "Soil & Agroforestry"
    },
    {
      name: "Hendro Wijaya",
      role: "Director of International Quality",
      bio: "Former ISO and export inspector ensuring phytosanitary compliance and gourmet moisture standards.",
      image: qualityDirectorImg,
      badge: "Export Assurance"
    }
  ],

  sustainabilityMetrics: [
    {
      value: "100%",
      label: "Parcel Traceability",
      detail: "Every batch is tracked back to its specific agroforestry parcel."
    },
    {
      value: "0%",
      label: "Synthetic Chemicals",
      detail: "Zero synthetic pesticides or artificial ripening accelerators used."
    },
    {
      value: "820+",
      label: "Hectares Canopy",
      detail: "Rainforest buffer zones protected through sustainable polyculture."
    },
    {
      value: "140+",
      label: "Farmer Families",
      detail: "Empowered with direct premium contracts and technical education."
    }
  ],

  milestones: [
    {
      year: "2018",
      title: "The First Orchid Sanctuary",
      description: "Establishment of our volcanic nursery and mother vine conservation in East Java & Bali."
    },
    {
      year: "2020",
      title: "Traditional Cedar Curing Facility",
      description: "Construction of ventilated sun decks and Indonesian teak-and-cedar conditioning chambers."
    },
    {
      year: "2022",
      title: "Global Organic & Export Accreditation",
      description: "Achieved international phytosanitary and export compliance for European and North American markets."
    },
    {
      year: "2024",
      title: "Direct Michelin Culinary Partnerships",
      description: "Supplying premier pastry chefs, bean-to-bar chocolatiers, and craft distilleries worldwide."
    }
  ]
};

export default aboutStory;
