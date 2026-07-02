# AkademiWriter — Landing Page

Landing page profesional untuk **AkademiWriter**, layanan jasa pendampingan riset & akademik. Dibangun sesuai PRD dengan fokus pada **trust** (kepercayaan) dan **speed** (respons cepat).

## 🚀 Teknologi

- **React 18** + **Vite 5** (dev server & build cepat)
- **Tailwind CSS 3** (styling utility-first, mobile-first)
- **Framer Motion 11** (animasi halus & profesional)

## 📦 Cara Menjalankan

Butuh Node.js 18+ terpasang.

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Build untuk produksi
npm run build

# 4. Preview hasil build
npm run preview
```

Buka URL yang ditampilkan (default: http://localhost:5173).

## ⚙️ Konfigurasi

Semua data yang sering diubah terpusat agar mudah dikelola:

| File | Isi |
| --- | --- |
| `src/config/site.js` | **Nomor WhatsApp**, pesan default, link rekrutmen, email/kontak |
| `src/data/pillars.js` | 4 Pilar layanan |
| `src/data/usp.js` | Poin keunggulan (USP) |
| `src/data/testimonials.js` | Testimoni klien |

> ⚠️ **Penting:** Ganti `whatsapp.number` di `src/config/site.js` dengan nomor WhatsApp bisnis kamu (format internasional tanpa `+`, contoh: `628123456789`).

## 🗂️ Struktur Proyek

```
src/
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Hero, SocialProof, Pillars, USP, HowItWorks, FinalCTA
│   └── ui/          # WhatsAppButton, FloatingWhatsApp, kartu, ikon, dll
├── data/            # Konten (pilar, USP, testimoni)
├── config/          # Konfigurasi situs (WhatsApp, kontak)
├── animations/      # Variants Framer Motion
├── App.jsx
├── main.jsx
└── index.css
```

## ✨ Fitur

- Hero section persuasif dengan CTA WhatsApp menonjol
- Social proof (testimoni bintang 5 + statistik)
- Grid 4 Pilar Ekosistem
- Section keunggulan (USP): anti-ghosting, harga jelas, dll
- Alur "Cara Kerja" (user journey)
- Footer hub rekrutmen
- Tombol WhatsApp melayang (sticky) di semua halaman
- Responsif (mobile-first) & aksesibel

---

© AkademiWriter
