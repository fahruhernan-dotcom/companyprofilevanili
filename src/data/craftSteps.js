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
    description: "Freshly blanched pods are laid on woven bamboo racks under gentle morning sun for 2–3 hours, then immediately bundled into woolen blankets inside wooden boxes to sweat overnight. This slow cycle repeats for up to 90 days, developing the deep mahogany sheen and vanillin crystals.",
    image: curingImg,
    alt: "Traditional sun curing of dark vanilla beans on woven bamboo drying racks in Indonesia"
  },
  {
    id: "grading",
    step: "04",
    name: "Master Grading",
    tagline: "Rigorous sorting for moisture, length, and oily luster.",
    description: "Each cured bean is individually measured, palpated for suppleness, and inspected for skin perfection. Only the plumpest, defect-free pods with rich natural moisture are classified as Gourmet Grade A for fine culinary applications.",
    image: gradingImg,
    alt: "Artisan measuring and grading long supple Grade A black vanilla beans"
  }
];

export default craftSteps;
