import { services } from '../data/site'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="bg-sand/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Services" title="Everything your interior needs, under one roof" text="From a single wardrobe to a complete home or office, we plan and execute interiors end to end." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => <Reveal key={s.title} delay={(i % 4) * 80}><ServiceCard {...s} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
