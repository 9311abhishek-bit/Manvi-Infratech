import { Check } from 'lucide-react'
import { about } from '../data/site'
import SectionHeading from './SectionHeading'
import ImageSlot from './ImageSlot'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl"><ImageSlot src={about.image} alt="Interior crafted by our team" label="About image" /></div>
            <div className="absolute -bottom-5 -right-3 hidden h-32 w-32 rounded-2xl border-4 border-cream bg-navy sm:block" aria-hidden="true" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <SectionHeading center={false} eyebrow="About Us" title={about.title} />
          <div className="mt-6 space-y-4 leading-relaxed text-ink/75">{about.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {about.points.map((p) => (
              <li key={p} className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-navy shadow-sm">
                <Check className="h-4 w-4 text-brand-red" aria-hidden="true" />{p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
