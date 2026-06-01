import type { ReactNode } from 'react'

interface OsWindowProps {
  title: string
  children: ReactNode
  className?: string
  id?: string
}

export function OsWindow({ title, children, className = '', id }: OsWindowProps) {
  return (
    <div id={id} className={`os-window ${className}`}>
      <div className="os-titlebar">
        <div className="os-traffic" aria-hidden>
          <span className="os-dot os-dot-red" />
          <span className="os-dot os-dot-yellow" />
          <span className="os-dot os-dot-green" />
        </div>
        <span className="os-window-title">{title}</span>
        <span className="os-window-badge">running</span>
      </div>
      <div className="os-window-body">{children}</div>
    </div>
  )
}
