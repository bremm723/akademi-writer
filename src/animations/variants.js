// Konfigurasi animasi Framer Motion yang dipakai ulang di seluruh situs.

// Container yang memunculkan anak-anaknya secara berurutan.
export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

// Item yang naik & memudar masuk.
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

// Fade sederhana.
export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
}

// Props umum untuk animasi saat elemen masuk viewport.
export const revealOnView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
}
