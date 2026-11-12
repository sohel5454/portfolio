import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import EngineeringFocus from './EngineeringFocus'
import { aboutText } from '../../data/profile'

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-bg-alt py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading eyebrow="Who I am" title="About Me" />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-5">
            {aboutText.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </motion.div>
          <EngineeringFocus />
        </div>
      </div>
    </section>
  )
}
