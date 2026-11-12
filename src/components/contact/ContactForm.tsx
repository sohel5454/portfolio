import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import Button from '../common/Button'

type Status = 'idle' | 'loading' | 'success' | 'error'

// Swap this out for a real email/API call (e.g. fetch('/api/contact', ...)).
async function submitContactForm(_data: { name: string; email: string; subject: string; message: string }) {
  await new Promise((resolve) => setTimeout(resolve, 900))
  return { ok: true }
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = () => {
    const next: Record<string, string> = {}
    if (!values.name.trim()) next.name = 'Name is required.'
    if (!values.email.trim()) next.email = 'Email is required.'
    else if (!emailPattern.test(values.email)) next.email = 'Enter a valid email address.'
    if (!values.subject.trim()) next.subject = 'Subject is required.'
    if (values.message.trim().length < 20) next.message = 'Message should be at least 20 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await submitContactForm(values)
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setValues({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const field = (name: keyof typeof values, label: string, type: 'text' | 'email' = 'text') => (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-muted">
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={values[name]}
        onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        className="w-full rounded-md border border-border bg-bg-alt px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary"
      />
      {errors[name] && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-500">
          {errors[name]}
        </p>
      )}
    </div>
  )

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {field('name', 'Name')}
        {field('email', 'Email', 'email')}
      </div>
      {field('subject', 'Subject')}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="w-full resize-none rounded-md border border-border bg-bg-alt px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={status === 'loading'} icon={status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}>
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <p className="flex items-center gap-2 text-sm text-accent">
          <CheckCircle2 size={16} /> Message sent. I\u2019ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircle size={16} /> Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  )
}
