import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type Props = {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({ children, onClick, href, variant = 'primary', icon, className, type = 'button', disabled }: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-all duration-200 focus-ring disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    primary: 'bg-primary text-white hover:opacity-90 hover:-translate-y-0.5',
    secondary: 'border border-border text-text hover:border-primary hover:-translate-y-0.5',
    ghost: 'text-text hover:text-primary',
  }
  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {children}
        {icon}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
      {icon}
    </button>
  )
}
