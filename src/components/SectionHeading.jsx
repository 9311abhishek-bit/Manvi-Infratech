export default function SectionHeading({ eyebrow, title, text, light = false, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight font-semibold ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/80' : 'text-ink/70'}`}>{text}</p>}
    </div>
  )
}
