import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { portfolioConfig } from '../../data/profile'
import { scrollToId } from '../../lib/utils'

const links = ['about', 'experience', 'skills', 'projects', 'contact']

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="mx-auto max-w-content px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-text">
              {portfolioConfig.initials}
              <span className="text-primary">.</span>
            </p>
            <p className="mt-1 text-sm text-muted">{portfolioConfig.title}</p>
            <p className="mt-3 max-w-xs text-sm text-muted">Building scalable software and connected experiences.</p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-wide text-muted mb-3">Sections</p>
              <ul className="space-y-2 text-sm">
                {links.map((id) => (
                  <li key={id}>
                    <button onClick={() => scrollToId(id)} className="capitalize text-muted hover:text-text focus-ring rounded">
                      {id}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wide text-muted mb-3">Connect</p>
              <div className="flex gap-3">
                <a href={portfolioConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text hover:border-primary focus-ring">
                  <GithubIcon size={16} />
                </a>
                <a href={portfolioConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text hover:border-primary focus-ring">
                  <LinkedinIcon size={16} />
                </a>
                <a href={`mailto:${portfolioConfig.email}`} aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text hover:border-primary focus-ring">
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {portfolioConfig.name}. All rights reserved.</p>
          <p className="font-mono">Built with React + TypeScript</p>
        </div>
      </div>
    </footer>
  )
}
