import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export type ArchNode = { id: string; label: string; sub?: string; detail: string }

export default function ArchitectureDiagram({ nodes }: { nodes: ArchNode[] }) {
  const [activeId, setActiveId] = useState(nodes[0]?.id)
  const active = nodes.find((n) => n.id === activeId)

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]">
      <div className="overflow-x-auto">
        <div className="flex min-w-max flex-col items-stretch gap-0 lg:min-w-0">
          {nodes.map((node, i) => (
            <div key={node.id} className="flex flex-col items-center">
              <motion.button
                onClick={() => setActiveId(node.id)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={cn(
                  'w-full max-w-xs rounded-lg border px-5 py-3 text-center transition-all duration-200 focus-ring',
                  activeId === node.id
                    ? 'border-primary bg-primary-soft text-text'
                    : 'border-border bg-surface text-text hover:border-primary/60'
                )}
                aria-pressed={activeId === node.id}
              >
                <p className="font-display text-sm font-semibold">{node.label}</p>
                {node.sub && <p className="mt-0.5 text-xs font-mono text-muted">{node.sub}</p>}
              </motion.button>
              {i < nodes.length - 1 && (
                <svg width="24" height="28" className="my-0.5" aria-hidden="true">
                  <line x1="12" y1="0" x2="12" y2="20" stroke="var(--border)" strokeWidth="1.5" />
                  <polygon points="6,20 18,20 12,28" fill="var(--border)" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-5 lg:sticky lg:top-28 lg:self-start">
        <p className="font-mono text-xs uppercase tracking-wide text-accent">Selected component</p>
        <p className="mt-2 font-display text-base font-semibold text-text">{active?.label}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{active?.detail}</p>
      </div>
    </div>
  )
}
