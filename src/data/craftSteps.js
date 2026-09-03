/**
 * THE CRAFT DATA
 * 4 Pillars of Traditional Indonesian Vanilla Artisanship
 */

import pollinationImg from '../assets/images/craft_pollination.webp';
import harvestImg from '../assets/images/craft_harvest.webp';
import curingImg from '../assets/images/craft_curing.webp';
import gradingImg from '../assets/images/craft_grading.webp';

export const craftSteps = [
  {
    id: "pollination",
    step: "01",
    name: "Hand Pollination",
    tagline: "A fleeting morning window. A master's delicate touch.",
    description: "The vanilla orchid blooms for only four hours at dawn. Skilled hands use a slender bamboo needle to lift the rostellum and press the pollen flap against the stigma before the midday tropical heat closes the petal forever.",
    image: pollinationImg,
    alt: "Artisan hand-pollinating a blooming pale ivory vanilla orchid with a bamboo needle"
  },
  {
    id: "harvest",
    step: "02",
    name: "Selective Harvest",
    tagline: "Harvesting only when the blossom scar turns to gold.",
    description: "Unlike commercial monocultures that strip-harvest vines, our growers visit every single vine individually. Pods are gently hand-snipped only when the tip displays the characteristic golden blush of physiological maturity.",
    image: harvestImg,
    alt: "Selective hand harvesting of mature green vanilla pods on Indonesian agroforestry vines"
  },
  {
    id: "curing",
    step: "03",
    name: "Sun Curing & Sweating",
    tagline: "Alchemy of tropical sun and wooden sweat boxes.",
    description: "Freshly blanched pods are laid on curing tables under the gentle morning tropical sun, then bundled into sweating blankets to develop deep mahogany gloss and complex vanillin crystallization over 60–90 days.",
    image: curingImg,
    alt: "Authentic slow sun-curing tables with rows of cured Indonesian vanilla beans drying under the tropical sun"
  },
  {
    id: "grading",
    step: "04",
    name: "Master Grading & Inspection",
    tagline: "Rigorous sorting for moisture, length, and oily luster.",
    description: "Our founders and curation team directly inspect every batch on the drying tables, measuring pod length, testing suppleness, and verifying uniform moisture density before packaging.",
    image: gradingImg,
    alt: "Essence Indonesia founders and quality curation team directly inspecting sun-cured vanilla bean lots",
    objectPosition: "center 25%"
  },
  {
    id: "packaging",
    step: "05",
    name: "Hermetic Packaging & Export",
    tagline: "Preserving peak moisture and aromatic vanillin oils for global dispatch.",
    description: "Graded beans are bundle-tied with natural raffia, vacuum-sealed into food-grade multi-layer EVOH barrier pouches, and boxed into heavy-duty master cartons ready for express international air cargo.",
    image: "/images/inspection_proofs/proof_master_export_carton_boxes.webp",
    alt: "Master export cartons packed with vacuum-sealed bundles of graded Indonesian vanilla beans ready for export"
  }
];

export default craftSteps;
