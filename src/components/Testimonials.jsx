import { Star, Quote } from 'lucide-react'
import { testimonials, company } from '../data/site'
import SectionHeading from './SectionHeading'
import Button from './Button'

export default function Testimonials() {
  const has = testimonials.length > 0
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Client Reviews" title="What our clients say" />
        {has ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name + t.text.slice(0, 10)} className="rounded-2xl bg-white p-8 shadow-sm">
                <Quote className="h-7 w-7 text-brand-red/60" aria-hidden="true" />
                <div className="mt-4 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating || 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />)}
                </div>
                <blockquote className="mt-4 leading-relaxed text-ink/80">{t.text}</blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-navy">{t.name}<span className="block font-normal text-ink/50">{t.source}</span></figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border-2 border-dashed border-wood-light/60 bg-white p-10 text-center">
            <Quote className="mx-auto h-8 w-8 text-wood-light" aria-hidden="true" />
            <p className="mt-4 text-ink/70">Customer reviews will appear here. Read what clients say about us on Google.</p>
            <Button href={company.mapsLink} variant="outlineDark" className="mt-6" target="_blank" rel="noopener noreferrer">See Reviews on Google</Button>
          </div>
        )}
      </div>
    </section>
  )
}
