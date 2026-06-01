import { Star, GitBranch, FolderGit2 } from 'lucide-react'
import { GitHubIcon } from '../ui/BrandIcons'
import { FadeIn } from '../ui/FadeIn'
import { GhostButton } from '../ui/GhostButton'
import { githubHighlights, personal } from '../../data/portfolio'

const stats = [
  { icon: FolderGit2, label: 'Repositories', value: 'Projects' },
  { icon: GitBranch, label: 'Stack', value: 'Full-Stack' },
  { icon: Star, label: 'Focus', value: 'Open Source' },
]

export function GitHubSection() {
  return (
    <section className="px-5 py-12 sm:px-8 md:py-16" aria-label="GitHub profile">
      <FadeIn>
        <h2
          className="hero-heading mb-6 text-center sm:mb-8"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 100px)' }}
        >
          GitHub
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-center text-muted-foreground">
          Explore source code, project implementations, and development workflow on GitHub.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="glass-panel mx-auto max-w-4xl overflow-hidden p-8 sm:p-10 md:p-12">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <div className="liquid-glass flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl">
              <GitHubIcon size={48} className="relative z-[1] text-foreground" />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                @{personal.githubUsername}
              </p>
              <h3 className="mt-2 text-2xl font-medium text-foreground md:text-3xl">
                github.com/{personal.githubUsername}
              </h3>
              <ul className="mt-6 space-y-3">
                {githubHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <GhostButton href={personal.github} label="View GitHub Profile" external />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-10">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon className="mx-auto h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                <p className="mt-2 text-lg font-medium text-foreground">{value}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
