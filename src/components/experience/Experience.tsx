import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import ExperienceCard from './ExperienceCard'
import EngineeringChallenges from './EngineeringChallenges'
import { experience, journey, responsibilityGroups, approach } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
          <div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <p className="font-display text-base font-semibold text-text">{experience.role}</p>
              <p className="mt-1 text-sm text-primary">{experience.company}</p>
              <p className="mt-3 text-xs font-mono text-muted">{experience.duration}</p>
              <p className="mt-1 text-xs font-mono text-muted">{experience.location}</p>
            </div>

            <ol className="mt-6 space-y-6 border-l border-border pl-5">
              {journey.map((entry) => (
                <li key={entry.title} className="relative">
                  <span className="absolute -left-[25px] top-1 h-2.5 w-2.5 rounded-full border-2 border-primary bg-bg" />
                  <p className="font-display text-sm font-semibold text-text">{entry.title}</p>
                  <p className="text-xs text-muted">{entry.org}</p>
                  <p className="mt-0.5 text-xs font-mono text-accent">{entry.period}</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted">
                    {entry.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 content-start">
            {responsibilityGroups.map((group, i) => (
              <ExperienceCard key={group.id} group={group} defaultOpen={i < 2} />
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h3 className="mb-6 font-display text-xl font-semibold text-text">Engineering Challenges I've Solved</h3>
          <EngineeringChallenges />
        </div>

        <div>
          <h3 className="mb-6 font-display text-xl font-semibold text-text">My Engineering Approach</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="font-mono text-sm text-primary">{step.step}</p>
                <p className="mt-2 font-display text-base font-semibold text-text">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
