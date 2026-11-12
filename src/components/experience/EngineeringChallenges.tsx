import { motion } from 'framer-motion'
import { challenges } from '../../data/experience'

export default function EngineeringChallenges() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {challenges.map((c, i) => (
        <motion.div
          key={c.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
          className="rounded-lg border border-border bg-surface p-5"
        >
          <h3 className="font-display text-base font-semibold text-text">{c.title}</h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed">
            <p className="text-muted">{c.problem}</p>
            <p className="border-l-2 border-accent pl-3 text-text">{c.solution}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
