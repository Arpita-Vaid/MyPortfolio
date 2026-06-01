import { FadeIn } from '../ui/FadeIn'
import { skillCategories } from '../../data/portfolio'

export function TechStackSection() {
  return (
    <section className="px-5 py-12 sm:px-8 md:py-16">
      <FadeIn>
        <h2
          className="hero-heading mb-12 text-center sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 120px)' }}
        >
          Tech Stack
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <FadeIn key={category.title} delay={i * 0.08}>
            <div className="glass-panel h-full p-6 transition-shadow hover:shadow-lg">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
