import { motion } from "framer-motion"
import { fadeUp, revealOnView } from "../../animations/variants"

// Judul section standar: eyebrow + heading + subheading.
export default function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start"
  return (
    <motion.div
      variants={fadeUp}
      {...revealOnView}
      className={`flex max-w-2xl flex-col gap-3 ${alignment}`}
    >
      {eyebrow ? (
        <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-lg leading-relaxed text-slate-600">{subtitle}</p>
      ) : null}
    </motion.div>
  )
}
