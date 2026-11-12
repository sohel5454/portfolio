type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return (
    <div className={align === 'center' ? 'text-center max-w-2xl mx-auto mb-12' : 'max-w-2xl mb-12'}>
      {eyebrow && <p className="text-sm text-accent font-mono mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-text">{title}</h2>
      {description && <p className="mt-4 text-muted leading-relaxed">{description}</p>}
    </div>
  )
}
