interface GhostButtonProps {
  href: string
  label: string
  external?: boolean
  className?: string
}

export function GhostButton({ href, label, external = false, className = '' }: GhostButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`liquid-glass inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.03] sm:px-10 sm:py-3.5 ${className}`}
    >
      <span className="relative z-[1]">{label}</span>
    </a>
  )
}
