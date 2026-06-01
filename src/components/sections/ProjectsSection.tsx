import { FadeIn } from '../ui/FadeIn'
import { ProjectCard } from './ProjectCard'
import { projects } from '../../data/portfolio'

export function ProjectsSection() {
  return (
    <section className="relative px-5 py-12 sm:px-8 md:py-16">
      <FadeIn className="mb-16 md:mb-24">
        <h2
          className="hero-heading text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 120px)' }}
        >
          Projects
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-muted-foreground md:text-base">
          Featured full-stack and AI-powered applications — each with a live demo on Render.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  )
}
