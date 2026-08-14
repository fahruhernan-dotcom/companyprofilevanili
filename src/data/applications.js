/**
 * APPLICATIONS DATA
 * 5 Culinary & Sensory Realms
 */

import pastryImg from '../assets/images/application_pastry.jpg';
import gelatoImg from '../assets/images/application_gelato.jpg';
import chocolateImg from '../assets/images/application_chocolate.jpg';
import distillationImg from '../assets/images/application_distillation.jpg';
import fragranceImg from '../assets/images/application_fragrance.jpg';

export const culinaryApplications = [
  {
    index: "01",
    name: "Pastry & Viennoiserie",
    role: "Laminated doughs, crème pâtissière, mille-feuille, and canelés.",
    description: "The supple moisture and abundant caviar seeds deliver stunning visual speckling and an opulent aroma that withstands high-temperature oven baking.",
    image: pastryImg,
    alt: "Michelin-starred French mille-feuille pastry with real black vanilla caviar seeds"
  },
  {
    index: "02",
    name: "Artisan Gelato & Creams",
    role: "Fior di latte, vanilla bean custard, and dairy infusions.",
    description: "Fat-soluble vanillin compounds blossom when steeped in warm dairy, releasing deep floral top notes and a rounded, buttery finish.",
    image: gelatoImg,
    alt: "Artisanal gourmet vanilla bean gelato in a stoneware bowl with caviar speckles"
  },
  {
    index: "03",
    name: "Single-Origin Chocolates",
    role: "Dark ganaches, bean-to-bar pairings, and artisan truffles.",
    description: "The earthy, woody undertones of Indonesian Planifolia harmoniously balance the natural acidity of high-percentage single-origin cacao.",
    image: chocolateImg,
    alt: "Glossy handcrafted dark chocolate truffles with vanilla bean caviar ganache"
  },
  {
    index: "04",
    name: "Specialty Distillation & Brews",
    role: "Craft spirits, spiced rums, specialty coffee, and elixirs.",
    description: "Extended cold maceration unlocks complex balsamic resin notes, lending velvety mouthfeel and aromatic elegance to distilled spirits.",
    image: distillationImg,
    alt: "Amber barrel-aged craft spirit infused with whole vanilla bean pod"
  },
  {
    index: "05",
    name: "Haute Extracts & Fragrance",
    role: "Pure single-origin tinctures and niche artisanal perfumery accords.",
    description: "High natural vanillin density provides an enduring warm base note for luxury olfactory creations and clean-label botanical extracts.",
    image: fragranceImg,
    alt: "Luxury crystal perfume flacon with amber vanilla elixir on travertine stone"
  }
];

export default culinaryApplications;
