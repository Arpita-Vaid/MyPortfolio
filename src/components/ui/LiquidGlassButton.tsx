import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type BaseProps = {
  label: string
  className?: string
}

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type LiquidGlassButtonProps = (LinkProps | ButtonProps) & {
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'px-6 py-2.5 text-sm',
  md: 'px-14 py-5 text-base',
  lg: 'px-14 py-5 text-base',
}

export function LiquidGlassButton({
  label,
  className = '',
  size = 'md',
  ...props
}: LiquidGlassButtonProps) {
  const classes = `liquid-glass inline-flex cursor-pointer items-center justify-center rounded-full font-medium text-foreground transition-transform hover:scale-[1.03] ${sizeClasses[size]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...rest } = props as LinkProps
    return (
      <a href={href} className={classes} {...rest}>
        <span className="relative z-[1]">{label}</span>
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = props as ButtonProps
  return (
    <button type={type} className={classes} {...buttonProps}>
      <span className="relative z-[1]">{label}</span>
    </button>
  )
}
