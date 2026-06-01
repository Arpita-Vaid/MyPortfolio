import { personal } from '../../data/portfolio'

interface ResumeDownloadProps {
  className?: string
  children?: React.ReactNode
  variant?: 'link' | 'button' | 'glass'
}

/** Links to the resume PDF in /public for download across the site. */
export function ResumeDownload({
  className = '',
  children = 'Download Resume',
  variant = 'link',
}: ResumeDownloadProps) {
  const base =
    variant === 'glass'
      ? 'liquid-glass inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs font-medium text-foreground sm:text-sm'
      : variant === 'button'
        ? 'inline-flex items-center justify-center rounded-full border border-border bg-secondary px-6 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-accent sm:text-sm'
        : 'font-mono text-xs text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline'

  return (
    <a
      href={personal.resumePath}
      download={personal.resumeFileName}
      className={`${base} ${className}`}
    >
      {variant === 'glass' ? <span className="relative z-[1]">{children}</span> : children}
    </a>
  )
}
