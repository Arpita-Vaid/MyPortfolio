import { LiquidGlassButton } from './LiquidGlassButton'

interface ContactButtonProps {
  href?: string
  label?: string
  className?: string
}

export function ContactButton({
  href = '#contact',
  label = 'Contact Me',
  className = '',
}: ContactButtonProps) {
  return <LiquidGlassButton href={href} label={label} size="sm" className={className} />
}
