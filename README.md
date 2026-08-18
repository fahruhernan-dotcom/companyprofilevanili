# 🌿 SVARNA VANILLA — Luxury Single-Origin Company Profile

An editorial, interactive digital experience and B2B sourcing portal designed for **Single-Origin Indonesian Vanilla**. Built with **React 18**, **Vite**, and **Modular Vanilla CSS**, featuring high-end typography, scrollytelling showcases, interactive craft steps, and an instant concierge system.

---

## ✨ Key Highlights

- **🏛️ High-End Editorial Aesthetics**: Tailored luxury color palette (*Warm Ivory*, *Obsidian Charcoal*, *Vanilla Gold*), paired with *Cormorant Garamond* display serif and *Inter* typography.
- **🎥 Interactive 360 Scrollytelling Showcase**: Apple-inspired canvas and cinematic visual progression highlighting single-origin vanilla anatomy.
- **🌱 The Craft (4-Stage Process)**: Interactive tabs exploring traditional cultivation: *01 Pollination*, *02 Harvest*, *03 Curing*, and *04 Grading*.
- **📊 Technical Spec Sheet & Dossier**: Interactive modal detailing lab-verified specifications (Grade A, moisture content, vanillin levels, harvest season, packaging standards).
- **💼 B2B Sourcing Inquiry & WhatsApp Concierge**: Built-in modal inquiry form + one-click international WhatsApp concierge with pre-formatted trade messages.
- **📖 Multi-View Experience**: Seamless hash-routed navigation between the primary editorial showcase and the in-depth **About / Terroir Story** page.
- **⚙️ 100% Configurable via `.env`**: Customize brand name, claims, contact email, and WhatsApp numbers dynamically without editing code.
- **♿ Accessible & Performant**: Lightweight bundle, zero bloated UI libraries, WCAG 2.2 AA compliant focus states, keyboard navigation, and semantic HTML5.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) |
| **Styling** | Pure Vanilla CSS (CSS Variables / Design Tokens, Grid & Flexbox) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | `Cormorant Garamond` (Display) & `Inter` (Body & UI) via Google Fonts |
| **Routing** | Lightweight hash-based router (`#home`, `#about`) |

---

## 📁 Project Structure

```
.
├── public/
│   ├── favicon.svg
│   └── videos/                     # High-definition video assets
├── src/
│   ├── assets/
│   │   └── images/                 # Editorial photos (terroir, craft, applications)
│   ├── components/                 # Reusable UI primitives
│   │   ├── Button.jsx              # Polymorphic button component
│   │   ├── FloatingConcierge.jsx   # Quick WhatsApp & inquiry concierge pill
│   │   ├── Footer.jsx              # Editorial footer with quick links
│   │   ├── InquiryModal.jsx        # B2B sourcing quotation modal
│   │   ├── Navbar.jsx              # Adaptive sticky header with scroll indicator
│   │   ├── ScrollReveal.jsx        # Scroll-triggered reveal animations
│   │   ├── SectionHeader.jsx       # Standardized editorial section headings
│   │   └── SpecSheetModal.jsx      # Technical specifications dossier
│   ├── config/
│   │   └── brandConfig.js          # Centralized reader for environment variables
│   ├── data/                       # Content models & structured data
│   │   ├── aboutStory.js           # Brand story, terroir pillars, and values
│   │   ├── applications.js        # Culinary & industrial application profiles
│   │   ├── brandStory.js           # Philosophy and origin manifesto
│   │   ├── craftSteps.js           # 4-stage handcraft cultivation process
│   │   └── specifications.js       # Physical & chemical quality metrics
│   ├── hooks/                      # Custom React hooks
│   │   ├── useScrollHeader.js      # Navbar background & blur on scroll
│   │   ├── useScrollProgress.js    # Window scroll depth calculation
│   │   ├── useScrollReveal.js      # IntersectionObserver for calm reveals
│   │   └── useScrollSpy.js         # Active section highlight detection
│   ├── pages/
│   │   └── AboutPage.jsx           # Dedicated brand origins & terroir view
│   ├── sections/                   # Modular landing page sections
│   │   ├── Applications.jsx        # Culinary applications (Pastry, Gelato, etc.)
│   │   ├── ClosingInquiry.jsx      # Bottom obsidian CTA & concierge
│   │   ├── Hero.jsx                # Cinematic hero with editorial typography
│   │   ├── Philosophy.jsx          # Brand manifesto & 3 craft pillars
│   │   ├── QualitySpecs.jsx        # Verified technical specifications
│   │   ├── ScrollytellingShowcase.jsx # Interactive 360 showcase
│   │   ├── TerroirOrigin.jsx       # Volcanic archipelago terroir narrative
│   │   ├── TheCraft.jsx            # 4-step cultivation process
│   │   └── TheVanilla.jsx          # Bean anatomy & sensory profile
│   ├── styles/                     # Modular design system
│   │   ├── animations.css          # Transitions and calm keyframes
│   │   ├── layout.css              # Grid system, container tokens & modals
│   │   ├── tokens.css              # Color tokens, shadows, radiuses
│   │   └── typography.css          # Font sizes, line heights, fluid scales
│   ├── utils/                      # Helper utilities
│   │   ├── validation.js           # Form validation
│   │   └── whatsapp.js             # International WhatsApp URL generator
│   ├── App.jsx                     # Root application wrapper
│   ├── index.css                   # Global reset and combined styling
│   └── main.jsx                    # React DOM entry point
├── .env.example                    # Environment variable template
├── BRAND_DIRECTION.md              # Brand guide, tone of voice, perception matrix
├── index.html                      # HTML document template with meta tags
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18.0 or later)** and **npm** installed.

### 2. Clone the Repository
```bash
git clone https://github.com/fahruhernan-dotcom/companyprofilevanili.git
cd companyprofilevanili
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a local `.env` file from the example:
```bash
cp .env.example .env
```

Edit `.env` to configure your brand name, claims, and contact details:

```env
# Brand Nomenclature
VITE_BRAND_NAME="SVARNA"
VITE_BRAND_SURNAME="VANILLA"
VITE_BRAND_TAGLINE="Pure Vanilla, Grown with Intention."
VITE_BRAND_SUBTITLE="Indonesian single-origin vanilla beans cultivated, cured, and curated with quiet devotion."
VITE_BRAND_ORIGIN="Indonesia"
VITE_BRAND_TERROIR="Indonesian Volcanic Archipelagos"

# Technical Specifications & Claims
VITE_CLAIM_GRADE="Gourmet Grade A"
VITE_CLAIM_MOISTURE="30% – 35%"
VITE_CLAIM_LENGTH="16 – 20 cm"
VITE_CLAIM_VANILLIN="Lab-Verified High Vanillin"
VITE_CLAIM_AROMA="Warm, Floral, Woody, Balsamic undertones"

# B2B Concierge & Contact
VITE_CONTACT_EMAIL="concierge@example-vanilla.com"
VITE_WHATSAPP_NUMBER="6281234567890"
VITE_WHATSAPP_DEFAULT_MESSAGE="Hello, I would like to inquire about sourcing your premium Indonesian vanilla beans."
VITE_SPEC_SHEET_URL="#specification-sheet"
```

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 6. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

To test the production build locally:
```bash
npm run preview
```

---

## 🎨 Design Tokens & Palette

| Token | Hex / Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#F6F2EA` | Warm Ivory — Primary background |
| `--bg-surface` | `#EFE9DF` | Soft Sandstone — Card and elevated surface background |
| `--bg-dark` | `#171512` | Obsidian Charcoal — Footer and immersive night sections |
| `--text-primary` | `#241C17` | Deep Roasted Espresso — Primary reading text |
| `--text-secondary`| `#5E544A` | Muted Earth — Secondary descriptions and subtitles |
| `--text-muted` | `#8E8478` | Warm Taupe — Micro-copy, metadata, labels |
| `--accent-gold` | `#C8A96B` | Vanilla Gold — Selective accent highlights & borders |

---

## 🚢 Deployment Guide

The project can be deployed instantly to cPanel / Cloud Hosting, FTP, or modern Jamstack providers.

### 📦 1. Cloud Hosting / cPanel (Manual ZIP Upload)

Setiap kali Anda menjalankan build, sistem secara otomatis menghasilkan file arsip siap deploy: `dist-deploy.zip`.

```bash
# 1. Build project + SSG pre-render + generate dist-deploy.zip
npm run build

# Atau jika hanya ingin meng-generate ulang zip dari folder dist:
npm run zip
```

**Langkah Upload ke cPanel / Cloud Hosting:**
1. Login ke **cPanel Hosting** Anda.
2. Buka menu **File Manager** dan masuk ke direktori **`public_html`**.
3. (Opsional/Disarankan) Backup atau bersihkan file versi sebelumnya di `public_html`.
4. Klik tombol **Upload** di bagian atas, lalu pilih file **`dist-deploy.zip`** dari root project ini.
5. Setelah selesai upload (bar 100% hijau), klik kanan pada `dist-deploy.zip` di cPanel dan pilih **Extract** (Ekstrak ke `public_html/`).
6. Pastikan file `.htaccess`, `index.html`, `sitemap.xml`, `robots.txt`, serta subfolder (`vanilla/`, `coffee/`, `quality/`, `buyers/`, `about/`, `assets/`, `images/`, `videos/`) sudah berada langsung di dalam `public_html/`.
7. Hapus file `dist-deploy.zip` dari cPanel untuk menghemat storage.

---

### 🚀 2. CI/CD Otomatis via GitHub Actions & FTP

Project ini sudah dilengkapi workflow otomatis di [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
Cukup lakukan `git push origin main`, maka GitHub Actions akan:
1. Menjalankan `npm run build` (termasuk SSG Pre-rendering ke HTML statis).
2. Mengunggah folder `dist/` langsung ke cPanel via LFTP dengan *mirror sync*.

---

### 🌐 3. Vercel / Netlify (Alternatif)
- **Build Command**: `npm run build`
- **Output / Publish Directory**: `dist`
- **Node Version**: `20.x` atau `18.x`

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

Crafted with devotion for **Indonesian Single-Origin Vanilla**.
