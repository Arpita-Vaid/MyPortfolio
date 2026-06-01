import { FadeIn } from '../ui/FadeIn'
import { education } from '../../data/portfolio'

export function EducationSection() {
  return (
    <section className="px-5 py-12 sm:px-8 md:py-16">
      <FadeIn>
        <h2
          className="hero-heading mb-16 text-center sm:mb-20"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 100px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <ul className="mx-auto max-w-4xl space-y-0">
        {education.map((item, i) => (
          <FadeIn key={item.degree} delay={i * 0.1} as="li">
            <div className="border-t border-border py-8 sm:py-10">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-medium text-foreground md:text-2xl">{item.degree}</h3>
                  <p className="mt-1 text-muted-foreground">{item.institution}</p>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="font-medium text-muted-foreground">{item.duration}</p>
                  <p className="text-lg font-medium text-foreground">{item.score}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </ul>
    </section>
  )
}
