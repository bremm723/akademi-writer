import { motion } from "framer-motion"
import SectionTitle from "../ui/SectionTitle"
import TestimonialCard from "../ui/TestimonialCard"
import { staggerContainer, revealOnView } from "../../animations/variants"
import { testimonials } from "../../data/testimonials"

const stats = [
  { value: "500+", label: "Klien terbantu" },
  { value: "4.9/5", label: "Rating kepuasan" },
  { value: "< 1 jam", label: "Rata-rata respons" },
  { value: "98%", label: "Lolos sidang" },
]

export default function SocialProof() {
  return (
    <section id="testimoni" className="border-y border-slate-100 bg-slate-50/60 py-20 sm:py-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="Bukti Nyata"
          title="Dipercaya ratusan mahasiswa & peneliti"
          subtitle="Kepercayaan dibangun dari hasil dan komunikasi yang jujur, bukan janji manis."
        />

        <motion.div
          variants={staggerContainer}
          {...revealOnView}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-soft sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-brand-600 sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
