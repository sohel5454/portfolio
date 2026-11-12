import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import SkillCategory from './SkillCategory'
import { skillCategories, skillFilters } from '../../data/skills'
import { cn } from '../../lib/utils'

export default function Skills() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return skillCategories
    return skillCategories.filter((c) => c.filters.includes(filter))
  }, [filter])

  return (
    <section id="skills" className="border-t border-border bg-bg-alt py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading eyebrow="What I work with" title="Technical Skills" description="Grouped by area rather than arbitrary proficiency percentages." />

        <div className="mb-8 flex flex-wrap gap-2">
          {skillFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm transition-colors focus-ring',
                filter === f ? 'border-primary bg-primary text-white' : 'border-border text-muted hover:text-text'
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((category, i) => (
              <SkillCategory key={category.id} category={category} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
