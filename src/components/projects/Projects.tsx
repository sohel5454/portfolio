import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import ArchitectureDiagram from './ArchitectureDiagram'
import GpsDemo from './GpsDemo'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { gpsProject, gpsArchitecture, gpsIntegrations, gpsFeatures, otherProjects } from '../../data/projects'
import type { OtherProject } from '../../data/projects'

export default function Projects() {
  const [activeProject, setActiveProject] = useState<OtherProject | null>(null)

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading eyebrow="Featured work" title="Projects" />

        <div className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <span className="inline-block rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-mono text-accent">{gpsProject.badge}</span>
          <h3 className="mt-4 font-display text-2xl font-semibold text-text">{gpsProject.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{gpsProject.description}</p>

          <div className="mt-8">
            <p className="mb-4 text-xs font-mono uppercase tracking-wide text-muted">Architecture</p>
            <ArchitectureDiagram nodes={gpsArchitecture} />
            <div className="mt-6 flex flex-wrap gap-2">
              {gpsIntegrations.map((item) => (
                <span key={item} className="rounded-md border border-border bg-bg-alt px-2.5 py-1 text-xs text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs font-mono uppercase tracking-wide text-muted">Capabilities</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {gpsFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="rounded-lg border border-border bg-bg-alt p-4"
                >
                  <p className="font-display text-sm font-semibold text-text">{f.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs font-mono uppercase tracking-wide text-muted">Interactive Demo</p>
            <GpsDemo />
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-mono uppercase tracking-wide text-muted">Other Projects</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onOpen={() => setActiveProject(project)} />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
