import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { OtherProject } from '../../data/projects'

export default function ProjectCard({ project, onOpen, index }: { project: OtherProject; onOpen: () => void; index: number }) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex h-full flex-col rounded-lg border border-border bg-surface p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-primary focus-ring"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-base font-semibold text-text">{project.title}</h3>
        <ArrowUpRight size={16} className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="rounded border border-border bg-bg-alt px-2 py-0.5 text-xs font-mono text-muted">
            {t}
          </span>
        ))}
      </div>
    </motion.button>
  )
}
