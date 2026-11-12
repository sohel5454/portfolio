import { heroStats } from '../../data/profile'

export default function HeroStats() {
  return (
    <dl className="grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
      {heroStats.map((stat) => (
        <div key={stat.label}>
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-display text-xl font-semibold text-text sm:text-2xl">{stat.value}</dd>
          <p className="mt-1 text-sm text-muted">{stat.label}</p>
        </div>
      ))}
    </dl>
  )
}
