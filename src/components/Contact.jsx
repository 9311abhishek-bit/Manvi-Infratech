import { Phone, MessageCircle, MapPin, Mail, Clock, Navigation } from 'lucide-react'
import { company } from '../data/site'
import SectionHeading from './SectionHeading'
import Button from './Button'

const digits = (s) => (s || '').replace(/\D/g, '')

export default function Contact() {
  const wa = company.whatsapp && `https://wa.me/${digits(company.whatsapp)}?text=${encodeURIComponent(`Hello ${company.name}, I would like a free interior consultation.`)}`
  const tel = company.phone && `tel:+${digits(company.phone).replace(/^0+/, '')}`
  const mail = company.email && `mailto:${company.email}?subject=${encodeURIComponent('Interior consultation request')}`
  const details = [
    { icon: MapPin, label: 'Address', value: company.address },
    { icon: Phone, label: 'Phone', value: company.phone },
    { icon: Mail, label: 'Email', value: company.email },
    { icon: Clock, label: 'Hours', value: company.hours },
  ].filter((d) => d.value)

  return (
    <section id="contact" className="bg-sand/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contact" title="Let’s plan your space together" text="Tell us about your home or office and get a free consultation." />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tel && <Button href={tel}><Phone className="h-4 w-4" aria-hidden="true" />Call Now</Button>}
          {wa && <Button href={wa} variant="navy" target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" aria-hidden="true" />WhatsApp</Button>}
          <Button href={company.mapsLink} variant="outlineDark" target="_blank" rel="noopener noreferrer"><Navigation className="h-4 w-4" aria-hidden="true" />Get Directions</Button>
          {mail && <Button href={mail} variant="outlineDark"><Mail className="h-4 w-4" aria-hidden="true" />Request a Consultation</Button>}
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-navy">{company.name}</h3>
            <p className="mt-1 text-sm text-ink/60">{company.tagline}</p>
            {details.length ? (
              <ul className="mt-6 space-y-5">
                {details.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex gap-4"><Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" /><div><p className="text-xs uppercase tracking-widest text-ink/50">{label}</p><p className="text-ink/90">{value}</p></div></li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 rounded-lg bg-cream p-4 text-sm text-ink/70">Add your phone, address and hours in <code>src/data/site.js</code>. Buttons appear automatically.</p>
            )}
          </div>
          <div className="min-h-[320px] overflow-hidden rounded-2xl bg-white shadow-sm">
            {company.mapsEmbedUrl ? (
              <iframe title={`Map showing ${company.name}`} src={company.mapsEmbedUrl} className="h-full min-h-[320px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            ) : (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 p-8 text-center text-ink/70">
                <MapPin className="h-10 w-10 text-brand-red" aria-hidden="true" />
                <p>Map embed placeholder. Paste your Google Maps embed URL into <code>mapsEmbedUrl</code>.</p>
                <Button href={company.mapsLink} target="_blank" rel="noopener noreferrer">Open in Google Maps</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
