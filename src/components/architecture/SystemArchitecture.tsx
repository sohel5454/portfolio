import SectionHeading from '../common/SectionHeading'
import ArchitectureDiagram from '../projects/ArchitectureDiagram'
import { systemArchitecture } from '../../data/projects'

export default function SystemArchitecture() {
  return (
    <section id="architecture" className="border-t border-border bg-bg-alt py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading eyebrow="Systems thinking" title="How I Build Systems" description="Click a component to see what it does." />
        <ArchitectureDiagram nodes={systemArchitecture} />
      </div>
    </section>
  )
}
