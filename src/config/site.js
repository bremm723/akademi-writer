// Konfigurasi pusat: ubah nilai di sini untuk memperbarui seluruh situs.
export const site = {
  brand: "AkademiWriter",
  tagline: "Partner Riset & Akademik Terpercaya",
  whatsapp: {
    // Format internasional TANPA tanda "+" atau spasi. Contoh: 628123456789
    number: "6282341989974",
    defaultMessage:
      "Halo AkademiWriter, saya ingin konsultasi gratis mengenai pendampingan riset/akademik saya.",
  },
  // Tautan hub rekrutmen (ganti dengan URL form / halaman Anda)
  recruitment: {
    konsultan: "#",
    admin: "#",
    freelancer: "#",
  },
  contact: {
    email: "halo@akademiwriter.id",
    instagram: "https://instagram.com/akademiwriter",
  },
}

// Host WhatsApp click-to-chat, dirakit dari potongan agar mudah diganti.
const WA_PROTO = "https:"
const WA_HOST = "wa.me"
const WA_BASE = `${WA_PROTO}//${WA_HOST}`

// Membuat link click-to-chat lengkap dengan pesan ter-encode.
export function waLink(message = site.whatsapp.defaultMessage) {
  const base = `${WA_BASE}/${site.whatsapp.number}`
  return `${base}?text=${encodeURIComponent(message)}`
}
