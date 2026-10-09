import { useState } from 'react'
import { gallery, galleryCategories } from '../data/site'
import SectionHeading from './SectionHeading'
import GalleryCard from './GalleryCard'
import Reveal from './Reveal'

export default function Gallery() {
  const [active, setActive] = useState('All')
  const items = active === 'All' ? gallery : gallery.filter((g) => g.category === active)
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Projects & Gallery" title="A look at our work" />
        <div role="group" aria-label="Filter gallery" className="-mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
          {galleryCategories.map((c) => (
            <button key={c} onClick={() => setActive(c)} aria-pressed={active === c}
              className={`min-h-[44px] shrink-0 rounded-full border px-5 text-sm font-medium transition-colors ${active === c ? 'border-navy bg-navy text-white' : 'border-navy/20 text-navy hover:border-navy'}`}>{c}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g, i) => <Reveal key={g.title + i}><GalleryCard {...g} /></Reveal>)}
        </div>
        {items.length === 0 && <p className="mt-10 text-center text-ink/60">No projects in this category yet.</p>}
      </div>
    </section>
  )
}
