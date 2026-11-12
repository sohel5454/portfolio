import { motion } from 'framer-motion'
import type { SkillCategory as SkillCategoryType } from '../../data/skills'

export default function SkillCategory({ category, index }: { category: SkillCategoryType; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="rounded-lg border border-border bg-surface p-5"
    >
      <p className="font-display text-sm font-semibold text-text">{category.label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="group cursor-default rounded-md border border-border bg-bg-alt px-2.5 py-1 text-xs text-muted transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-text"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
