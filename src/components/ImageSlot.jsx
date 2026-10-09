import { ImageIcon } from 'lucide-react'
/* Shows the image if `src` is set; otherwise a clearly-marked placeholder. */
export default function ImageSlot({ src, alt, label = 'Image placeholder', className = '' }) {
  if (src) return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />
  return (
    <div role="img" aria-label={`${alt} (placeholder)`}
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-sand to-wood-light/60 text-wood ${className}`}
      style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(138,90,59,.07) 0 12px, transparent 12px 24px)' }}>
      <ImageIcon className="h-8 w-8" aria-hidden="true" />
      <span className="px-4 text-center text-xs font-medium uppercase tracking-widest">{label}</span>
      <span className="px-4 text-center text-[10px] opacity-70">Replace in src/data/site.js</span>
    </div>
  )
}
