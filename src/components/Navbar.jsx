import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { company, nav } from '../data/site'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc); return () => window.removeEventListener('keydown', esc)
  }, [])
  const solid = scrolled || open
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-transparent'}`}>
      <nav aria-label="Main" className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label={`${company.name} – home`}>
          <img src={company.logo} alt={`${company.name} logo`} className="h-12 w-12 rounded-full bg-white object-cover" />
          <span className={`hidden font-display text-lg font-semibold sm:block ${solid ? 'text-navy' : 'text-white'}`}>{company.name}</span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <li key={n.href}><a href={n.href} className={`text-sm font-medium transition-colors hover:text-brand-red ${solid ? 'text-ink' : 'text-white'}`}>{n.label}</a></li>
          ))}
        </ul>
        <div className="hidden lg:block"><Button href="#contact" className="!py-2.5">Get a Free Consultation</Button></div>
        <button className={`flex h-11 w-11 items-center justify-center rounded-md lg:hidden ${solid ? 'text-navy' : 'text-white'}`}
          aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-sand bg-white px-4 pb-6 pt-2 lg:hidden">
          <ul>
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block border-b border-sand py-4 text-base font-medium text-navy">{n.label}</a></li>
            ))}
          </ul>
          <Button href="#contact" onClick={() => setOpen(false)} className="mt-5 w-full">Get a Free Consultation</Button>
        </div>
      )}
    </header>
  )
}
