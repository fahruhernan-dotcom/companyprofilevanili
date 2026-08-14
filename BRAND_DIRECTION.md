# BRAND DIRECTION & DESIGN SYSTEM (v2)
### Single Source of Truth — Luxury Indonesian Vanilla

---

## 1. Brand Identity & Perception Matrix
* **Positioning**: Luxury Agricultural & Single-Origin Ingredient Brand.
* **Core Philosophy**: *"Not merely an agricultural crop. It is a slow craft of sun, volcanic soil, and human devotion."*
* **10-Second Perception Formula**:
  * 70% Generous White/Ivory Space (Breathing Room)
  * 20% Cinematic Editorial Photography (Macro & Handcraft)
  * 10% Selective Vanilla Gold Accent
* **Tone of Voice**: Calm, Confident, Poetic yet Scientifically Grounded, International Editorial.

---

## 2. Dynamic Branding via Environment Variables
Semua nama, tagline, klaim kualitas, dan kontak diatur melalui `.env` tanpa hardcode di JSX:

| Variabel `.env` | Nilai Default Placeholder | Fungsi |
| :--- | :--- | :--- |
| `VITE_BRAND_NAME` | `SVARNA` | Nama utama brand |
| `VITE_BRAND_SURNAME` | `VANILLA` | Suffix brand |
| `VITE_BRAND_TAGLINE` | `Pure Vanilla, Grown with Intention.` | Tagline utama hero |
| `VITE_BRAND_ORIGIN` | `Indonesia` | Negara asal komoditas |
| `VITE_BRAND_TERROIR` | `Indonesian Volcanic Archipelagos` | Wilayah terroir |
| `VITE_CLAIM_GRADE` | `Gourmet Grade A` | Standar grade default |
| `VITE_CLAIM_MOISTURE` | `30% – 35% (Verified Range)` | Estimasi kadar air |
| `VITE_CLAIM_LENGTH` | `16 – 20 cm` | Panjang rata-rata bean |
| `VITE_CONTACT_EMAIL` | `concierge@example-vanilla.com` | Email inkuiri B2B |
| `VITE_WHATSAPP_NUMBER` | `6281234567890` | Nomor WhatsApp Concierge |

---

## 3. Color Tokens
```css
:root {
  --bg-primary: #F6F2EA;       /* Warm Ivory */
  --bg-surface: #EFE9DF;       /* Soft Sandstone */
  --bg-dark: #171512;          /* Obsidian Charcoal */
  --text-primary: #241C17;     /* Deep Roasted Espresso */
  --text-secondary: #5E544A;   /* Muted Earth */
  --text-muted: #8E8478;       /* Warm Taupe */
  --text-inverse: #F6F2EA;     /* Warm Ivory text on dark */
  --accent-gold: #C8A96B;      /* Vanilla Gold (Aksen saja) */
  --border-light: rgba(36, 28, 23, 0.08);
  --border-gold: rgba(200, 169, 107, 0.35);
}
```

---

## 4. Typography System (Strictly 2 Font Families)
* **Display / Headings**: `Cormorant Garamond` (Google Fonts: 300, 400, 400i, 500, 600)
* **Body & UI**: `Inter` (Google Fonts: 300, 400, 500, 600)

---

## 5. Interaction & Motion Rules (80% Static, 20% Calm Motion)
1. **Header Behavior**: Transparan di hero. Mengaktifkan `background: rgba(246, 242, 234, 0.92)` dan `backdrop-filter: blur(12px)` secara halus setelah scroll > 60px.
2. **Scroll Reveals**: Transisi halus `translateY(16px)` ke `translateY(0)` dengan opacity fade saat masuk viewport.
3. **No Gimmicks**: Dilarang menggunakan parallax berlebihan, 3D tilt yang mengganggu, atau efek teks melayang agresif.
4. **Signature Section (The Craft)**: Tab 4-langkah (01 Pollination, 02 Harvest, 03 Curing, 04 Grading) dengan transisi visual yang lembut.

---

## 6. Page Hierarchy & Structure
1. `00 Navigation` — Sticky minimal header dengan tombol "Inquire Sourcing".
2. `01 Hero` — Asymmetrical editorial layout dengan vertical macro photo frame.
3. `02 Philosophy` — Brand manifesto dengan 3 pilar slow agricultural craft.
4. `03 The Vanilla` — Single-product anatomy & sensory profile.
5. `04 Terroir & Origin` — Narasi kesuburan kepulauan vulkanik nusantara.
6. `05 The Craft` — 4 pilar proses tradisional (Pollination, Harvest, Curing, Grading).
7. `06 Quality by Detail` — Spesifikasi terverifikasi & tombol download spec sheet.
8. `07 Applications` — 5 ranah kuliner (Pastry, Gelato, Chocolate, Beverage, Perfumery).
9. `08 Sourcing Inquiry & Footer` — Obsidian canvas dengan hybrid modal & WhatsApp concierge.
