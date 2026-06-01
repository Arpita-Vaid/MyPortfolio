import { FadeIn } from '../ui/FadeIn'
import { services } from '../../data/portfolio'

export function ServicesSection() {
  return (
    <section className="px-5 py-12 sm:px-8 md:py-16">
      <FadeIn>
        <h2
          className="hero-heading mb-16 text-center sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 120px)' }}
        >
          What I Do
        </h2>
      </FadeIn>

      <ul className="mx-auto max-w-5xl">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} as="li">
            <div className="flex flex-col gap-4 border-t border-border py-8 sm:flex-row sm:items-start sm:gap-8 sm:py-10 md:py-12">
              <span
                className="shrink-0 font-display text-foreground/30"
                style={{ fontSize: 'clamp(2.5rem, 10vw, 100px)' }}
              >
                {service.number}
              </span>
              <div>
                <h3
                  className="font-medium uppercase text-foreground"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="mt-2 max-w-2xl font-light leading-relaxed text-muted-foreground"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </ul>
    </section>
  )
}
