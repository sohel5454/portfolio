import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { education } from '../../data/education'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading eyebrow="Foundation" title="Education" />
        <div className="space-y-4">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 rounded-lg border border-border bg-surface p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-text">{item.degree}</p>
                <p className="mt-1 text-sm text-muted">
                  {item.college} · {item.university}
                </p>
                <p className="mt-1 text-xs font-mono text-muted">{item.year}</p>
                <p className="mt-2 text-sm text-text">
                  Project: <span className="text-muted">{item.project}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
