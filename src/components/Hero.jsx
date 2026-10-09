import { company, hero } from '../data/site'
import Button from './Button'
import ImageSlot from './ImageSlot'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-dark pt-[72px]">
      <div className="absolute inset-0 opacity-30"><ImageSlot src={hero.image} alt="" label="Hero image" className="!from-navy !to-navy-light" /></div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_.8fr] lg:px-8 lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">{hero.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">{hero.title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{hero.text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">Get a Free Consultation</Button>
            <Button href="#projects" variant="outline">View Our Work</Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-full bg-white p-2 shadow-2xl ring-8 ring-white/10">
            <img src={company.logo} alt={`${company.name} – ${company.tagline}`} className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72" />
          </div>
        </div>
      </div>
    </section>
  )
}
