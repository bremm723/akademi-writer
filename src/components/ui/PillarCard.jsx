import { motion } from "framer-motion"
import { fadeUp } from "../../animations/variants"
import { Icon } from "./Icons"

const hoverLift = { y: -6 }

// Kartu satu pilar layanan.
export default function PillarCard({ pillar }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={hoverLift}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-colors hover:border-brand-300"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon name={pillar.icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {pillar.description}
      </p>
      <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
        {pillar.points.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
            <svg
              viewBox="0 0 20 20"
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 10-1.4 1.4l2 2a1 1 0 001.4 0z" />
            </svg>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
