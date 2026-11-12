import { Mail, MapPin, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import ContactForm from './ContactForm'
import { portfolioConfig } from '../../data/profile'

const cards = [
  { icon: Mail, label: 'Email', value: portfolioConfig.email, href: `mailto:${portfolioConfig.email}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/sohelshaikh8547', href: portfolioConfig.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/sohel5454', href: portfolioConfig.github },
  { icon: MapPin, label: 'Location', value: portfolioConfig.location, href: undefined },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-bg-alt py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mb-14 rounded-xl border border-border bg-surface p-8 text-center sm:p-10">
          <h3 className="font-display text-2xl font-semibold text-text">Want to know more about my experience?</h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">Download my resume to explore my professional experience, technical skills and projects.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={portfolioConfig.resume} icon={<Download size={16} />}>
              Download Resume
            </Button>
            <Button variant="secondary" href={portfolioConfig.linkedin}>
              View LinkedIn
            </Button>
          </div>
        </div>

        <SectionHeading
          eyebrow="Get in touch"
          title="Let's Build Something Great"
          description="Whether you are looking for a software engineer, discussing a technical opportunity, or simply want to connect, feel free to reach out."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {cards.map((card) => {
              const Icon = card.icon
              const content = (
                <div className="flex h-full flex-col gap-3 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-primary">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-soft text-primary">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-muted">{card.label}</p>
                    <p className="mt-1 text-sm text-text break-words">{card.value}</p>
                  </div>
                </div>
              )
              return card.href ? (
                <a key={card.label} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="focus-ring rounded-lg">
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              )
            })}
          </div>

          <div className="rounded-lg border border-border bg-surface p-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
