import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '../ui/BrandIcons'
import { GhostButton } from '../ui/GhostButton'
import type { projects } from '../../data/portfolio'

type Project = (typeof projects)[number]

interface ProjectCardProps {
  project: Project
  index: number
  total: number
}

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={containerRef}
      className="sticky h-[85vh]"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="glass-panel flex h-full flex-col border-2 p-4 sm:p-6 md:p-8"
      >
        <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap items-start gap-4 sm:gap-6">
            <span
              className="font-display text-foreground/30"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 80px)' }}
            >
              {project.number}
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {project.category}
              </p>
              <h3
                className="hero-heading"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
              >
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground md:text-base">{project.tag}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-medium text-foreground sm:text-sm"
            >
              <span className="relative z-[1] flex items-center gap-2">
                <GitHubIcon size={16} />
                GitHub
              </span>
            </a>
            {project.liveUrl && (
              <GhostButton href={project.liveUrl} label="Live Demo" external />
            )}
          </div>
        </div>

        <div className="mt-6 grid flex-1 gap-6 overflow-hidden lg:grid-cols-2">
          <div
            className={`flex min-h-[200px] flex-col items-center justify-center rounded-[32px] bg-gradient-to-br ${project.accent} p-8 sm:rounded-[40px] md:rounded-[50px]`}
          >
            <span className="font-display text-6xl text-white/10 md:text-8xl">{'{}'}</span>
            <p className="mt-4 text-center text-2xl font-medium tracking-wider text-foreground md:text-3xl">
              {project.previewLabel}
            </p>
            {project.highlight && (
              <span className="mt-4 rounded-full border border-border bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {project.highlight}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-4 overflow-y-auto">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.description}
            </p>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Key Features
              </p>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <ExternalLink size={12} className="shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  )
}
