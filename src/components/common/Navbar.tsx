import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { scrollToId } from '../../lib/utils'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { portfolioConfig } from '../../data/profile'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(links.map((l) => l.id))

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const go = (id: string) => {
    scrollToId(id)
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <button onClick={() => scrollToId('top')} className="font-display text-lg font-semibold tracking-tight text-text focus-ring rounded" aria-label="Go to top">
          {portfolioConfig.initials}
          <span className="text-primary">.</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`rounded-md px-3 py-2 text-sm transition-colors focus-ring ${
                  active === link.id ? 'text-primary' : 'text-muted hover:text-text'
                }`}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text focus-ring"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-bg/60 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[80%] transform bg-surface border-l border-border transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <span className="font-display font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="focus-ring rounded">
            <X size={18} />
          </button>
        </div>
        <ul className="flex flex-col gap-1 p-4">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`w-full rounded-md px-3 py-3 text-left text-sm transition-colors focus-ring ${
                  active === link.id ? 'text-primary bg-primary-soft' : 'text-text hover:bg-bg-alt'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  )
}
