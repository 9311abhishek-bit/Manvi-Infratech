const styles = {
  primary: 'bg-brand-red text-white hover:bg-red-700',
  navy: 'bg-navy text-white hover:bg-navy-dark',
  outline: 'border border-white/70 text-white hover:bg-white hover:text-navy',
  outlineDark: 'border border-navy text-navy hover:bg-navy hover:text-white',
}
export default function Button({ href, variant = 'primary', children, className = '', ...rest }) {
  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 min-h-[48px] ${styles[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
