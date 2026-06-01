import { Code2, Cpu, Terminal, Braces } from 'lucide-react'
import { FadeIn } from '../ui/FadeIn'
import { AnimatedText } from '../ui/AnimatedText'
import { ContactButton } from '../ui/ContactButton'
import { GhostButton } from '../ui/GhostButton'
import { ProfileImage } from '../ui/ProfileImage'
import { ResumeDownload } from '../ui/ResumeDownload'
import {
  aboutParagraph,
  careerObjective,
  education,
  personal,
} from '../../data/portfolio'

const decorIcons = [
  { Icon: Code2, className: 'top-[4%] left-[2%] md:left-[4%]', delay: 0.1, x: -80 },
  { Icon: Terminal, className: 'bottom-[8%] left-[6%] md:left-[10%]', delay: 0.25, x: -80 },
  { Icon: Cpu, className: 'top-[4%] right-[2%] md:right-[4%]', delay: 0.15, x: 80 },
  { Icon: Braces, className: 'bottom-[8%] right-[6%] md:right-[10%]', delay: 0.3, x: 80 },
]

export function AboutSection() {
  const be = education[0]

  return (
    <section className="relative flex min-h-0 flex-col items-center justify-center px-5 py-12 sm:px-8 md:py-16">
      {decorIcons.map(({ Icon, className, delay, x }) => (
        <FadeIn
          key={className}
          delay={delay}
          x={x}
          y={0}
          duration={0.9}
          className={`pointer-events-none absolute hidden text-foreground/10 sm:block ${className}`}
        >
          <Icon className="h-24 w-24 md:h-32 md:w-32" strokeWidth={1} />
        </FadeIn>
      ))}

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
        <FadeIn delay={0.2} className="shrink-0 lg:w-1/3">
          <div className="mx-auto w-[220px] overflow-hidden rounded-[40px] border border-border sm:w-[280px]">
            <ProfileImage alt={personal.name} className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <GhostButton href={personal.github} label="GitHub" external />
            <ResumeDownload variant="glass">Download Resume</ResumeDownload>
          </div>
        </FadeIn>

        <div className="flex flex-1 flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 120px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={aboutParagraph}
            className="max-w-[600px] text-center text-base font-normal leading-relaxed text-foreground md:text-lg"
          />

          <FadeIn delay={0.2}>
            <blockquote className="max-w-[560px] border-l-2 border-border pl-4 text-left text-sm italic leading-relaxed text-muted-foreground md:text-base">
              &ldquo;{careerObjective}&rdquo;
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.3} className="glass-panel w-full max-w-md p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Education Snapshot
            </p>
            <p className="mt-2 text-lg font-medium text-foreground">{be.degree}</p>
            <p className="text-sm text-muted-foreground">{be.institution}</p>
            <p className="mt-2 text-sm text-foreground/80">
              {be.duration} · {be.score}
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-4 sm:mt-8">
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
