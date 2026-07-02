import { motion } from "framer-motion"
import WhatsAppButton from "../ui/WhatsAppButton"
import { fadeUp, revealOnView } from "../../animations/variants"

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <motion.div
          variants={fadeUp}
          {...revealOnView}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-14 text-center text-white sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Fokus pada kelulusanmu. Sisanya, biar kami yang dampingi.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
              Mulai dengan konsultasi gratis hari ini. Tanpa komitmen, tanpa risiko — cukup obrolan jujur soal kebutuhanmu.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton size="lg">Mulai Konsultasi Gratis Sekarang</WhatsAppButton>
            </div>
            <p className="mt-4 text-sm text-brand-200">Rata-rata dibalas dalam kurang dari 1 jam.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
