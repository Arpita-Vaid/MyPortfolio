import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Home,
  FolderKanban,
  Briefcase,
  Cpu,
  Trophy,
  Mail,
  Wifi,
  Battery,
  FileText,
  Sparkles,
  Folder,
  Code2,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'
import { ProfileImage } from '../ui/ProfileImage'
import {
  education,
  heroBootChecks,
  heroFooterMetrics,
  heroNavItems,
  heroProfileData,
  heroQuickAccess,
  heroSystemMetrics,
  osConfig,
  personal,
} from '../../data/portfolio'

const navIcons: Record<string, LucideIcon> = {
  home: Home,
  projects: FolderKanban,
  experience: Briefcase,
  skills: Cpu,
  achievements: Trophy,
  contact: Mail,
}

const quickIcons: Record<string, LucideIcon> = {
  folder: Folder,
  sparkles: Sparkles,
  trophy: Trophy,
  file: FileText,
  mail: Mail,
}

const footerIcons: Record<string, LucideIcon> = {
  folder: Folder,
  trophy: Trophy,
  code: Code2,
  graduation: GraduationCap,
}

function Panel({
  title,
  children,
  className = '',
}: {
  title?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`hero-panel ${className}`}>
      {title && (
        <div className="hero-panel-header">
          <span className="hero-panel-dot" />
          <span>{title}</span>
        </div>
      )}
      <div className={title ? 'hero-panel-body' : ''}>{children}</div>
    </div>
  )
}

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        <span>{label}</span>
        <span className="text-foreground/80">{value}%</span>
      </div>
      <div className="hero-progress-track">
        <motion.div
          className="hero-progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

function GitHubHeatmap() {
  const weeks = 12
  const days = 7
  const levels = [0.15, 0.25, 0.4, 0.65, 0.9]

  return (
    <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }}>
      {Array.from({ length: weeks * days }).map((_, i) => {
        const level = levels[i % levels.length]
        return (
          <div
            key={i}
            className="aspect-square rounded-[2px]"
            style={{ backgroundColor: `hsl(var(--os-accent) / ${level})` }}
          />
        )
      })}
    </div>
  )
}

export function HeroDashboard() {
  const [checks, setChecks] = useState(0)
  const [cursorOn, setCursorOn] = useState(true)
  const [activeNav, setActiveNav] = useState('#home')

  useEffect(() => {
    if (checks < heroBootChecks.length) {
      const t = setTimeout(() => setChecks((c) => c + 1), 380)
      return () => clearTimeout(t)
    }
  }, [checks])

  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), 530)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="hero-dashboard">
      {/* Status bar */}
      <header className="hero-statusbar">
        <div className="flex items-center gap-3">
          <div className="os-traffic" aria-hidden>
            <span className="os-dot os-dot-red" />
            <span className="os-dot os-dot-yellow" />
            <span className="os-dot os-dot-green" />
          </div>
          <span className="font-mono text-xs font-medium text-foreground">{osConfig.fullTitle}</span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[10px] sm:text-xs">
          <span className="hero-online">STATUS: ONLINE</span>
          <Wifi size={14} className="text-muted-foreground" />
          <span className="flex items-center gap-1 text-muted-foreground">
            <Battery size={14} />
            100%
          </span>
        </div>
      </header>

      <div className="hero-dashboard-main">
        {/* Left sidebar */}
        <aside className="hero-sidebar">
          <Panel>
            <div className="flex flex-col items-center text-center">
              <div className="hero-avatar-ring">
                <ProfileImage alt={personal.name} className="h-full w-full object-cover" />
              </div>
              <h2 className="mt-4 text-lg font-medium text-foreground">{personal.name}</h2>
              <p className="text-sm text-[hsl(var(--os-accent))]">{personal.role}</p>
              <p className="text-xs text-muted-foreground">{personal.focus}</p>
            </div>
          </Panel>

          <Panel title="// NAVIGATION" className="flex-1">
            <nav className="space-y-1">
              {heroNavItems.map((item) => {
                const Icon = navIcons[item.icon]
                const isActive = activeNav === item.href
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveNav(item.href)}
                    className={`hero-nav-link ${isActive ? 'hero-nav-link-active' : ''}`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </a>
                )
              })}
            </nav>
          </Panel>

          <Panel className="hero-sysinfo">
            <dl className="space-y-2 font-mono text-[11px]">
              <div className="flex justify-between gap-2">
                <dt className="text-muted-foreground">Role</dt>
                <dd className="text-foreground/90">CSE Student</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-muted-foreground">CGPA</dt>
                <dd className="text-foreground/90">{education[0]?.score.replace('CGPA: ', '') ?? '9.22'}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-muted-foreground">Location</dt>
                <dd className="text-foreground/90">India</dd>
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-border pt-2">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="flex items-center gap-1.5 text-[hsl(var(--os-success))]">
                  <span className="hero-status-dot-sm" />
                  Building
                </dd>
              </div>
            </dl>
          </Panel>
        </aside>

        {/* Center — welcome.exe */}
        <main className="hero-center">
          <Panel title="welcome.exe" className="h-full min-h-[320px]">
            <div className="relative">
              <div className="hero-welcome-watermark" aria-hidden>
                <ProfileImage alt="" className="h-full w-full object-cover opacity-[0.06]" />
              </div>

              <h1 className="relative font-display text-3xl font-normal text-foreground sm:text-4xl md:text-5xl">
                Hello, I&apos;m Arpita
                <span className={cursorOn ? 'opacity-100' : 'opacity-0'}>_</span>
              </h1>
              <p className="relative mt-2 font-mono text-sm text-[hsl(var(--os-accent))] sm:text-base">
                Full Stack Developer &amp; AI Enthusiast
              </p>

              <div className="relative mt-6 overflow-hidden rounded-lg border border-border bg-[hsl(var(--hero-terminal))] p-4 font-mono text-xs leading-relaxed sm:text-sm">
                <pre className="text-muted-foreground">
                  <span className="text-[hsl(var(--os-accent))]">01</span> {'{'}
                  {'\n'}
                  <span className="text-[hsl(var(--os-accent))]">02</span> {'  '}
                  <span className="text-foreground/90">&quot;name&quot;</span>:{' '}
                  <span className="text-[hsl(var(--os-warm))]">&quot;{heroProfileData.name}&quot;</span>,
                  {'\n'}
                  <span className="text-[hsl(var(--os-accent))]">03</span> {'  '}
                  <span className="text-foreground/90">&quot;role&quot;</span>:{' '}
                  <span className="text-[hsl(var(--os-warm))]">&quot;{heroProfileData.role}&quot;</span>,
                  {'\n'}
                  <span className="text-[hsl(var(--os-accent))]">04</span> {'  '}
                  <span className="text-foreground/90">&quot;focus&quot;</span>:{' '}
                  <span className="text-[hsl(var(--os-warm))]">&quot;{heroProfileData.focus}&quot;</span>,
                  {'\n'}
                  <span className="text-[hsl(var(--os-accent))]">05</span> {'  '}
                  <span className="text-foreground/90">&quot;education&quot;</span>:{' '}
                  <span className="text-[hsl(var(--os-warm))]">&quot;{heroProfileData.education}&quot;</span>,
                  {'\n'}
                  <span className="text-[hsl(var(--os-accent))]">06</span> {'  '}
                  <span className="text-foreground/90">&quot;status&quot;</span>:{' '}
                  <span className="text-[hsl(var(--os-warm))]">&quot;{heroProfileData.status}&quot;</span>
                  {'\n'}
                  <span className="text-[hsl(var(--os-accent))]">07</span> {'}'}
                </pre>

                <div className="mt-4 border-t border-border/60 pt-3">
                  <p className="text-[hsl(var(--os-accent))]">&gt; run portfolio</p>
                  <ul className="mt-2 space-y-1">
                    {heroBootChecks.map((line, i) => (
                      <li
                        key={line}
                        className={`flex items-center gap-2 ${
                          i < checks ? 'text-[hsl(var(--os-success))]' : 'text-muted-foreground/40'
                        }`}
                      >
                        <span>{i < checks ? '✓' : '○'}</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Panel>
        </main>

        {/* Right widgets */}
        <aside className="hero-widgets">
          <Panel title="System Status">
            <div className="space-y-3">
              {heroSystemMetrics.map((m) => (
                <MetricBar key={m.label} label={m.label} value={m.value} />
              ))}
            </div>
          </Panel>

          <Panel title="GitHub Activity">
            <p className="mb-2 font-mono text-[10px] text-muted-foreground">Last 12 weeks</p>
            <GitHubHeatmap />
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-mono text-[10px] text-[hsl(var(--os-accent))] hover:underline"
            >
              @{personal.githubUsername} →
            </a>
          </Panel>

          <Panel title="Now Playing">
            <p className="font-mono text-xs text-foreground/90">Focus Mode</p>
            <p className="text-[10px] text-muted-foreground">Lo-fi beats · deep work</p>
            <div className="hero-waveform mt-3" aria-hidden>
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="hero-wave-bar"
                  style={{ animationDelay: `${i * 0.05}s` }}
                />
              ))}
            </div>
          </Panel>
        </aside>
      </div>

      {/* Quick access */}
      <div className="hero-quick-grid">
        {heroQuickAccess.map((item) => {
          const Icon = quickIcons[item.icon]
          return (
            <a
              key={item.label}
              href={item.download ? personal.resumePath : item.href}
              {...(item.download
                ? { download: personal.resumeFileName }
                : {})}
              className="hero-quick-card"
            >
              <Icon size={22} className="text-[hsl(var(--os-accent))]" />
              <span className="font-mono text-xs font-medium text-foreground">{item.label}</span>
            </a>
          )
        })}
      </div>

      {/* Footer command bar */}
      <footer className="hero-commandbar">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-[hsl(var(--os-accent))]">arpita@portfolio</span>
          <span className="text-foreground/50">:~$</span> Building scalable solutions that make an
          impact.
        </p>
        <div className="flex flex-wrap items-center justify-end gap-4">
          {heroFooterMetrics.map((m) => {
            const Icon = footerIcons[m.icon]
            return (
              <span key={m.label} className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground sm:text-xs">
                <Icon size={12} className="text-[hsl(var(--os-accent))]" />
                {m.label}
              </span>
            )
          })}
        </div>
      </footer>
    </section>
  )
}
