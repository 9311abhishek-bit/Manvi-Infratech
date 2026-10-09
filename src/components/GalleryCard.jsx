import ImageSlot from './ImageSlot'
export default function GalleryCard({ title, category, image }) {
  return (
    <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
      <div className="h-full w-full transition-transform duration-700 group-hover:scale-105"><ImageSlot src={image} alt={`${title} interior`} label={title} /></div>
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/90 to-transparent p-5 pt-16 text-white opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
        <p className="text-xs uppercase tracking-widest text-white/70">{category}</p>
        <p className="font-display text-lg">{title}</p>
      </figcaption>
    </figure>
  )
}
