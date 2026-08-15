# 🌿 RINGKASAN PROYEK — LUXURY INDONESIAN VANILLA COMPANY PROFILE & B2B PORTAL

Dokumen ini berisi rangkuman menyeluruh mengenai arsitektur, struktur kode, sistem desain, aset, serta fitur interaktif dari proyek web profil perusahaan komoditas vanili premium Indonesia.

---

## 📌 1. Gambaran Umum Proyek (Executive Summary)

* **Nama Aplikasi**: SVARNA / Essence Indonesia — Single-Origin Vanilla Company Profile & Sourcing Portal.
* **Tujuan**: Membangun kehadiran digital kelas atas (*quiet luxury & haute gastronomy*) untuk komoditas ekspor vanili Indonesia (*Vanilla planifolia*), menghubungkan perkebunan nusantara langsung dengan *chef pastry* Michelin, *artisan chocolatier*, penyulingan minuman kriya, dan importir B2B internasional.
* **Filosofi Brand**: *"Not merely an agricultural crop. It is a slow craft of sun, volcanic soil, and human devotion."*
* **Tone & Persona**: Tenang, percaya diri, berbasis riset botani, puitis namun terverifikasi laboratorium, berstandar editorial internasional.

---

## 🛠️ 2. Arsitektur & Teknologi (Tech Stack)

| Komponen | Teknologi / Library | Keterangan |
| :--- | :--- | :--- |
| **Framework** | [React 18.3](https://react.dev/) + [Vite 5.3](https://vitejs.dev/) | Rendering cepat, HMR instan, bundle produksi teroptimasi (~71 kB gzip) |
| **Styling** | Modular Vanilla CSS | Menggunakan CSS Variables / Design Tokens, Grid 12 kolom, Flexbox, tanpa framework CSS berat (zero-bloat) |
| **Ikonografi** | [Lucide React](https://lucide.dev/) | Ikon SVG modern, ringan, dan konsisten |
| **Tipografi** | Google Fonts (`Cormorant Garamond` + `Inter`) | Kombinasi *display serif editorial* dengan *clean modern UI body font* |
| **Routing** | Hash-Based Dynamic Router (`#home`, `#about`) | Navigasi instan antar-halaman tanpa ketergantungan server routing |
| **Vektorisasi** | Clean SVG Vectors | Lambang bunga anggrek & polong vanili berlatar transparan |

---

## 🎨 3. Design System & Palet Warna

Sistem desain dirancang dengan aturan **80% kanvas statis yang lega + 20% mikro-animasi tenang**:

```css
:root {
  --bg-primary: #F6F2EA;       /* Warm Ivory (Kanvas utama) */
  --bg-surface: #EFE9DF;       /* Soft Sandstone (Permukaan kartu berselang-seling) */
  --bg-dark: #171512;          /* Obsidian Charcoal (Kanvas penutup dramatis) */
  --text-primary: #241C17;     /* Deep Roasted Espresso (Teks & tinta utama) */
  --text-secondary: #5E544A;   /* Muted Earth (Teks deskripsi & narasi) */
  --text-muted: #8E8478;       /* Warm Taupe (Label indeks & metadata) */
  --text-inverse-primary: #F6F2EA; /* Teks ivory pada latar gelap */
  --accent-gold: #C8A96B;      /* Vanilla Gold (Aksen selektif ~5%) */
  --border-light: rgba(36, 28, 23, 0.08);
  --border-gold: rgba(200, 169, 107, 0.35);
}
```

### Elemen Visual Khas:
1. **Paper Grain / Tactile Noise Texture**: Efek tekstur kertas mewah halus di latar belakang (`body::before`).
2. **Double-Bezel (Doppelrand) Cards**: Rangka kartu dobel presisi bergaya perangkat keras mewah dengan efek *hover elevation*.
3. **Button-in-Button Architecture**: Tombol pill berikon sirkular interaktif dengan transisi sudut.

---

## 📁 4. Struktur Folder & Modul

```
Company Profile Vanila/
├── .env / .env.example             # Konfigurasi branding & klaim teknis dinamis
├── BRAND_DIRECTION.md              # Panduan persepsi brand, tone of voice, & token
├── PROJECT_SUMMARY.md              # Rangkuman lengkap proyek (file ini)
├── README.md                       # Panduan setup & deployment proyek
├── package.json                    # Dependensi & script build
├── vite.config.js                  # Konfigurasi Vite server & React plugin
├── index.html                      # Template HTML utama, SEO meta, JSON-LD Schema
│
├── Dokumen/                        # Aset mentah & referensi klien
│   ├── ESSENCE INDONESIA NEW CATALOG.pdf # Katalog spesifikasi resmi vanili
│   ├── LOGO.png / Logo tanpa background.png # Raster logo mentah
│   ├── loasosoaoaso.png            # Raster ikon bunga mentah
│   ├── loasosoaoaso.svg            # [HASIL] Vektor SVG lambang anggrek transparan
│   └── logo-full.svg               # [HASIL] Vektor SVG logo lengkap transparan
│
├── public/                         # Aset statis terdistribusi
│   ├── favicon.svg                 # Favicon vektor lambang anggrek vanili
│   ├── logo-emblem.svg             # Vektor lambang untuk web
│   ├── logo-full.svg               # Vektor logo lengkap untuk web
│   └── videos/
│       ├── vanilla_macro_dolly.mp4 # Video latar belakang hero sinematik
│       └── vanilla_bundle_360.mp4  # Video turntable 360° interaktif
│
└── src/
    ├── main.jsx                    # React entry point
    ├── App.jsx                     # Komponen induk, state modal, router hash
    ├── index.css                   # Global CSS imports
    │
    ├── config/
    │   └── brandConfig.js          # Reader terpusat untuk environment variables (VITE_*)
    │
    ├── data/                       # Pemisahan data konten & narasi dari JSX
    │   ├── brandStory.js           # Filosofi manifesto & 3 pilar terroir
    │   ├── aboutStory.js           # Data narasi halaman The Genesis, Stewards, Metrics, Milestones
    │   ├── craftSteps.js           # 4 tahapan budidaya tradisional vanili
    │   ├── specifications.js       # Spesifikasi laboratorium Grade A & Grade B
    │   └── applications.js         # 5 ranah aplikasi gastronomi & sensorik
    │
    ├── hooks/                      # Custom hooks
    │   ├── useScrollHeader.js      # Deteksi scroll untuk blur & background navbar
    │   ├── useScrollProgress.js    # Perhitungan persentase scrollbar atas
    │   ├── useScrollReveal.js      # IntersectionObserver untuk animasi reveal
    │   └── useScrollSpy.js         # Indikator navigasi section aktif
    │
    ├── utils/                      # Helper & validator
    │   ├── validation.js           # Validasi formulir B2B
    │   └── whatsapp.js             # Generator tautan WhatsApp concierge
    │
    ├── styles/                     # Desain sistem modular
    │   ├── tokens.css              # Variabel warna, radius, spasi, shadow
    │   ├── typography.css          # Skala ukuran font & line-height
    │   ├── layout.css              # Grid 12 kolom, card bezel, custom scrollbar
    │   └── animations.css          # Animasi hotspot ring, shimmer, zoom
    │
    ├── components/                 # Komponen antarmuka yang dapat digunakan ulang
    │   ├── Navbar.jsx              # Header mengambang adaptif dengan logo SVG & progress bar
    │   ├── Footer.jsx              # Footer editorial tema gelap dengan direktori link
    │   ├── Button.jsx              # Tombol kustom (primary, secondary, gold)
    │   ├── BrandLogo.jsx           # Komponen SVG rendering dinamis (emblem/full)
    │   ├── SectionHeader.jsx       # Judul section standar beraksen garis emas
    │   ├── ScrollReveal.jsx        # Pembungkus efek masuk viewport halus
    │   ├── FloatingConcierge.jsx   # Tombol mengambang aksi cepat concierge
    │   ├── InquiryModal.jsx        # Modal form penawaran B2B & pengiriman langsung
    │   └── SpecSheetModal.jsx      # Modal lembar spesifikasi teknis siap cetak/PDF
    │
    ├── sections/                   # Seksi-seksi pada halaman utama
    │   ├── Hero.jsx                # Video hero 100dvh dengan telemetry strip
    │   ├── Philosophy.jsx          # Manifesto brand & foto anggrek berbunga
    │   ├── ScrollytellingShowcase.jsx # Studio putar 360° dengan drag & selector sudut
    │   ├── TheVanilla.jsx          # Hotspot pin anatomi polong & flavor notes explorer
    │   ├── TerroirOrigin.jsx       # 3 kartu parameter tanah vulkanik & iklim khatulistiwa
    │   ├── TheCraft.jsx            # 4 tahapan budidaya (Pollination, Harvest, Curing, Grading)
    │   ├── QualitySpecs.jsx        # Perbandingan Grade A vs Grade B
    │   ├── Applications.jsx        # 5 aplikasi kuliner (Pastry, Gelato, Cacao, Spirits, Perfume)
    │   └── ClosingInquiry.jsx      # CTA inkuiri B2B & tautan concierge WhatsApp
    │
    └── pages/
        └── AboutPage.jsx           # Halaman khusus sejarah estate, agronomis, & keberlanjutan
```

---

## 🌟 5. Fitur Utama & Interaktivitas

1. **Konfigurasi Tanpa Sentuh Kode (`.env`)**:
   Pengelola dapat mengganti nama brand, nomor WhatsApp concierge, email perusahaan, wilayah asal, serta klaim spesifikasi kadar air dan panjang vanili langsung melalui file `.env`.
2. **Interactive 360° Studio ([ScrollytellingShowcase.jsx](file:///d:/Dokumen/02_Kerja_Profesional/Company%20Profile%20Vanila/src/sections/ScrollytellingShowcase.jsx))**:
   Pengunjung dapat mengklik dan menggeser (*drag*) bundel vanili secara mulus dalam 360 derajat atau memilih sudut breakpoint `0°`, `90°`, `180°`, `270°` untuk melihat detail proses kurasi.
3. **Bean Anatomy Hotspots ([TheVanilla.jsx](file:///d:/Dokumen/02_Kerja_Profesional/Company%20Profile%20Vanila/src/sections/TheVanilla.jsx))**:
   Pin berdenyut interaktif di atas foto makro vanili yang menampilkan penjelasan kadar minyak vanilin, kepadatan biji kaviar, dan kelenturan polong.
4. **Interactive Flavor Architecture**:
   Filter rasa interaktif (*Dark Rum Warmth, Floral High Notes, Balsamic Cedar, Custard Cream*) yang mengubah deskripsi profil sensorik secara real-time.
5. **Interactive Craft Tabs ([TheCraft.jsx](file:///d:/Dokumen/02_Kerja_Profesional/Company%20Profile%20Vanila/src/sections/TheCraft.jsx))**:
   Navigasi 4 fase pilar kerajinan budidaya: *01 Hand Pollination, 02 Selective Harvest, 03 Sun Curing & Sweating, 04 Master Grading*.
6. **B2B Dossier Modal & Cetak Lembar Data ([SpecSheetModal.jsx](file:///d:/Dokumen/02_Kerja_Profesional/Company%20Profile%20Vanila/src/components/SpecSheetModal.jsx))**:
   Tampilan lengkap data teknis mutu ekspor (*Botanical name, Moisture, Length, Vanillin %, Defect rate, Phytosanitary clearance*) yang dilengkapi tombol **Print / Save to PDF**.
7. **B2B Quotation Form + Instant WhatsApp Concierge**:
   Formulir inkuiri terhubung langsung dengan generator payload teks WhatsApp yang rapi dan terstruktur (*Name, Company, Volume, Inquiry type, Message notes*).
8. **Halaman Khusus Heritage & Impact ([AboutPage.jsx](file:///d:/Dokumen/02_Kerja_Profesional/Company%20Profile%20Vanila/src/pages/AboutPage.jsx))**:
   Sub-halaman komprehensif berisi *The Genesis, The Stewards/Agronomists, Regenerative Metrics (100% Parcel Traceability, 0% Synthetic Chemicals, 820+ Ha Canopy),* dan *Milestones Timeline*.
9. **Logo Vektor Asli Transparan ([loasosoaoaso.svg](file:///d:/Dokumen/02_Kerja_Profesional/Company%20Profile%20Vanila/Dokumen/loasosoaoaso.svg))**:
   Vektor SVG lambang anggrek emas dan biji vanili yang telah terintegrasi di navigasi, footer, serta *favicon* browser.

---

## 🚀 6. Panduan Menjalankan & Membangun Proyek

### Prasyarat:
* **Node.js**: v18.0 atau lebih baru
* **npm**: v9.0 atau lebih baru

### 1. Menjalankan Server Pengembangan (Dev Server):
```bash
npm run dev
```
Buka browser di `http://localhost:5000` (atau port yang ditunjuk terminal).

### 2. Membangun Bundle Produksi (Production Build):
```bash
npm run build
```
File siap rilis akan dioptimasi dan disimpan di folder `dist/`.

### 3. Menguji Hasil Build Secara Lokal:
```bash
npm run preview
```

---

## 📦 7. Panduan Deployment

* **Vercel / Netlify / Cloudflare Pages**:
  1. Hubungkan repository GitHub ke layanan hosting.
  2. Atur *Build Command* ke `npm run build`.
  3. Atur *Output Directory* ke `dist`.
  4. Masukkan variabel lingkungan `VITE_*` dari `.env` pada pengaturan *Environment Variables* di dashboard hosting.
  5. Klik **Deploy**.

---
*Dibuat khusus untuk representasi digital vanili single-origin premium Indonesia.*
