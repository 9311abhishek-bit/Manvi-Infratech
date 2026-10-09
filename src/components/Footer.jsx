import { company, nav, services } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={company.logo} alt={`${company.name} logo`} className="h-14 w-14 rounded-full bg-white object-cover" />
            <p className="font-display text-xl text-white">{company.name}</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{company.tagline} — Office, Home and Commercial Interiors.</p>
          {company.socials.length > 0 && (
            <ul className="mt-5 flex gap-4 text-sm">
              {company.socials.map((s) => <li key={s.href}><a className="underline hover:text-white" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
            </ul>
          )}
        </div>
        <nav aria-label="Footer"><h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">{nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>)}</ul></nav>
        <div><h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">{services.slice(0, 6).map((s) => <li key={s.title}><a href="#services" className="hover:text-white">{s.title}</a></li>)}</ul></div>
        <div><h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {company.phone && <li><a href={`tel:+${company.phone.replace(/\D/g, '')}`} className="hover:text-white">{company.phone}</a></li>}
            {company.email && <li><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>}
            {company.address && <li>{company.address}</li>}
            <li><a href={company.mapsLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">View on Google Maps</a></li>
          </ul></div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
    </footer>
  )
}
