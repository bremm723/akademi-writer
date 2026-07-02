import { motion } from "framer-motion"
import SectionTitle from "../ui/SectionTitle"
import PillarCard from "../ui/PillarCard"
import { staggerContainer, revealOnView } from "../../animations/variants"
import { pillars } from "../../data/pillars"

export default function Pillars() {
  return (
    <section id="pilar" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionTitle
          eyebrow="4 Pilar Ekosistem"
          title="Satu ekosistem untuk seluruh kebutuhan akademikmu"
          subtitle="Dari bimbingan skripsi hingga publikasi ilmiah — semua tertangani oleh tim yang tepat."
        />

        <motion.div
          variants={staggerContainer}
          {...revealOnView}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
