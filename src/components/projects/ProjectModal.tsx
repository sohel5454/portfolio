import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../common/BrandIcons'
import type { OtherProject } from '../../data/projects'

export default function ProjectModal({ project, onClose }: { project: OtherProject | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (project) closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-xl border border-border bg-surface p-6 sm:p-8"
          >
            <button ref={closeRef} onClick={onClose} aria-label="Close" className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-md border border-border text-text focus-ring">
              <X size={16} />
            </button>

            <h3 id="project-modal-title" className="pr-10 font-display text-xl font-semibold text-text">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="rounded border border-border bg-bg-alt px-2 py-0.5 text-xs font-mono text-muted">
                  {t}
                </span>
              ))}
            </div>

            {project.features.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-mono uppercase tracking-wide text-muted">Features</p>
                <ul className="mt-2 grid grid-cols-1 gap-1.5 text-sm text-text sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.placeholder && (
              <p className="mt-6 rounded-md border border-dashed border-border p-3 text-xs text-muted">
                Placeholder content — replace with your real project details in <code className="font-mono">src/data/projects.ts</code>.
              </p>
            )}

            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-text">
                <GithubIcon size={14} /> GitHub
              </a>
              <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-text">
                <ExternalLink size={14} /> Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
