import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import Button from '../common/Button'
import TechNetwork from './TechNetwork'
import HeroStats from './HeroStats'
import { heroContent, portfolioConfig } from '../../data/profile'
import { scrollToId } from '../../lib/utils'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-mono uppercase tracking-wide text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {heroContent.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-[3.2rem]"
          >
            {heroContent.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {heroContent.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button onClick={() => scrollToId('projects')} icon={<ArrowRight size={16} />}>
              {heroContent.primaryCta}
            </Button>
            <Button variant="secondary" href={portfolioConfig.resume} icon={<Download size={16} />}>
              {heroContent.secondaryCta}
            </Button>
            <Button variant="ghost" onClick={() => scrollToId('contact')} icon={<Mail size={16} />}>
              {heroContent.tertiaryCta}
            </Button>
          </motion.div>

          {portfolioConfig.availability && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex items-center gap-2 text-sm text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulseSoft rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to opportunities
            </motion.p>
          )}

          <div className="mt-12 hidden sm:block">
            <HeroStats />
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <TechNetwork />
        </motion.div>

        <div className="sm:hidden">
          <HeroStats />
        </div>
      </div>
    </section>
  )
}
