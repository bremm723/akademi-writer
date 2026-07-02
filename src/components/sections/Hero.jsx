import { motion } from "framer-motion"
import WhatsAppButton from "../ui/WhatsAppButton"
import { staggerContainer, fadeUp } from "../../animations/variants"

const trustSignals = [
  "Respons < 1 jam",
  "Harga transparan",
  "Garansi revisi",
]

const pulseAnim = { scale: [1, 1.15, 1], opacity: [1, 0.6, 1] }
const pulseTrans = { duration: 2, repeat: Infinity }

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white"
    >
      {/* Dekorasi background halus */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" />

      <div className="container-page relative py-20 sm:py-24 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm"
          >
            <motion.span
              animate={pulseAnim}
              transition={pulseTrans}
              className="h-2 w-2 rounded-full bg-green-500"
            />
            Dipercaya 500+ mahasiswa & peneliti
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Selesaikan Riset & Skripsimu{" "}
            <span className="text-brand-600">Tanpa Drama, Tanpa Ghosting.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl"
          >
            Pendampingan riset akademik yang transparan, responsif, dan
            terstruktur. Harga jelas di depan, progres update rutin, revisi
            sampai kamu benar-benar paham.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <WhatsAppButton size="lg" className="w-full sm:w-auto" />
            <a
              href="#pilar"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-slate-300 px-8 py-4 text-lg font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
            >
              Lihat Layanan Kami
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500"
          >
            {trustSignals.map((signal) => (
              <li key={signal} className="flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" className="h-4 w-4 text-green-500" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                {signal}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
