export default function ServiceCard({ icon: Icon, title, text }) {
  return (
    <article className="group h-full rounded-2xl border border-sand bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">{text}</p>
    </article>
  )
}
