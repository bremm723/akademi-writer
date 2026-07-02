import { motion } from "framer-motion"
import SectionTitle from "../ui/SectionTitle"
import { staggerContainer, fadeUp, revealOnView } from "../../animations/variants"
import { Icon } from "../ui/Icons"
import { uspItems } from "../../data/usp"

export default function USP() {
  return (
    <section id="keunggulan" className="bg-slate-900 py-20 text-white sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-brand-200">
            Kenapa AkademiWriter
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Kepercayaan & kecepatan yang benar-benar kamu rasakan
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Kami menghapus dua ketakutan terbesarmu: takut ditipu dan takut ditinggal.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          {...revealOnView}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {uspItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                <Icon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
