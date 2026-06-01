import { useEffect, useState } from 'react'
import { osConfig } from '../../data/portfolio'

export function OsMenuBar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      )
    }
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="os-menubar sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <a href="#home" className="os-menubar-brand">
          {osConfig.fullTitle}
        </a>
        <nav className="hidden gap-4 sm:flex" aria-label="System menu">
          {['File', 'View', 'Window', 'Help'].map((item) => (
            <button key={item} type="button" className="os-menubar-item">
              {item}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className="hidden md:inline">
          {osConfig.user}@{osConfig.host}
        </span>
        <span className="os-status-pill">
          <span className="os-status-dot" />
          {osConfig.status}
        </span>
        <span className="font-mono tabular-nums">{time}</span>
      </div>
    </header>
  )
}
