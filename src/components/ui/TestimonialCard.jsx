import { motion } from "framer-motion"
import { fadeUp } from "../../animations/variants"
import StarRating from "./StarRating"

// Kartu satu testimoni klien.
export default function TestimonialCard({ testimonial }) {
  return (
    <motion.figure
      variants={fadeUp}
      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
    >
      <StarRating rating={testimonial.rating} className="mb-4" />
      <blockquote className="flex-1 text-slate-700">
        <p className="leading-relaxed">“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
          {testimonial.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-slate-900">
            {testimonial.name}
          </span>
          <span className="block text-sm text-slate-500">{testimonial.role}</span>
        </span>
      </figcaption>
    </motion.figure>
  )
}
