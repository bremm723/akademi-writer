import { motion } from "framer-motion"
import SectionTitle from "../ui/SectionTitle"
import { staggerContainer, fadeUp, revealOnView } from "../../animations/variants"

const steps = [
  {
    n: "01",
    title: "Konsultasi Gratis",
    desc: "Ceritakan kebutuhanmu via WhatsApp. Kami dengarkan dan beri rekomendasi jujur — tanpa tekanan.",
  },
  {
    n: "02",
    title: "Kesepakatan Jelas",
    desc: "Kamu terima rincian layanan, timeline, dan harga transparan sebelum apa pun dimulai.",
  },
  {
    n: "03",
    title: "Proses Terpantau",
    desc: "Pengerjaan berjalan dengan update progres rutin. Kamu selalu tahu posisi pekerjaanmu.",
  },
  {
    n: "04",
    title: "Selesai & Paham",
    desc: "Hasil diserahkan dengan pendampingan revisi hingga kamu percaya diri menghadapi sidang.",
  },
]

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="Cara Kerja"
          title="Empat langkah sederhana menuju kelulusan"
          subtitle="Proses yang jelas dari awal sampai akhir, tanpa kejutan yang bikin cemas."
        />

        <motion.ol
          variants={staggerContainer}
          {...revealOnView}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.li
              key={step.n}
              variants={fadeUp}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <span className="text-4xl font-extrabold text-brand-200">{step.n}</span>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
