import { why } from '../data/site'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading light eyebrow="Why Choose Us" title="A complete, carefully handled interior experience" />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {why.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 80} className="bg-navy">
              <div className="h-full p-8 transition-colors hover:bg-navy-light/40">
                <Icon className="h-8 w-8 text-white/90" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
