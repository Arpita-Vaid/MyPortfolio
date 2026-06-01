import { FadeIn } from '../ui/FadeIn'
import { activitiesInterests, coreCompetencies, experience } from '../../data/portfolio'

export function ExperienceSection() {
  return (
    <section className="px-5 py-12 sm:px-8 md:py-16">
      <FadeIn>
        <h2
          className="hero-heading mb-12 text-center sm:mb-16"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 100px)' }}
        >
          Practical Experience
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="glass-panel mx-auto max-w-3xl p-8 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {experience.subtitle}
          </p>
          <h3 className="mt-2 text-3xl font-medium text-foreground md:text-4xl">{experience.title}</h3>
          <ul className="mt-8 space-y-4">
            {experience.highlights.map((item, i) => (
              <li key={item} className="flex gap-4 text-muted-foreground">
                <span className="font-display text-foreground/25">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-border pt-8">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Core Competencies
            </p>
            <ul className="mt-4 space-y-2">
              {coreCompetencies.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-border pt-8">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Activities &amp; Interests
            </p>
            <ul className="mt-4 space-y-2">
              {activitiesInterests.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
