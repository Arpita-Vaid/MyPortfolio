import { Award, GraduationCap, BookOpen, Trophy } from 'lucide-react'
import { FadeIn } from '../ui/FadeIn'
import { achievements } from '../../data/portfolio'

const icons = [Trophy, GraduationCap, BookOpen, Award]

export function AchievementsSection() {
  return (
    <section className="px-5 py-12 sm:px-8 md:py-16">
      <FadeIn>
        <h2
          className="hero-heading mb-16 text-center sm:mb-20"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 100px)' }}
        >
          Achievements
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {achievements.map((item, i) => {
          const Icon = icons[i % icons.length]
          return (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="glass-panel h-full p-6 transition-colors hover:border-foreground/20">
                <Icon className="mb-4 h-8 w-8 text-muted-foreground" strokeWidth={1.5} />
                <h3 className="text-lg font-medium uppercase tracking-wide text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
