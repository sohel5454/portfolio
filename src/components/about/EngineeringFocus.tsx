import { motion } from 'framer-motion'
import { Server, Layers, Radar, Waves, Smartphone, Building2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { engineeringFocus } from '../../data/profile'

const icons: Record<string, LucideIcon> = { Server, Layers, Radar, Waves, Smartphone, Building2 }

export default function EngineeringFocus() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {engineeringFocus.map((item, i) => {
        const Icon = icons[item.icon]
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-lg border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-soft text-primary transition-transform group-hover:scale-110">
              <Icon size={18} />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold text-text">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
