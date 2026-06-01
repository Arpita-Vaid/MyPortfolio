import { useEffect, useRef } from 'react'
import { marqueeTech } from '../../data/portfolio'

function TechTile({ label }: { label: string }) {
  return (
    <div className="liquid-glass flex h-[200px] w-[320px] shrink-0 flex-col items-center justify-center rounded-2xl sm:h-[230px] sm:w-[380px] md:h-[270px] md:w-[420px]">
      <span className="relative z-[1] font-display text-4xl text-foreground/20 md:text-5xl">
        {'</>'}
      </span>
      <p className="relative z-[1] mt-4 px-6 text-center text-xl font-medium tracking-wider text-foreground md:text-2xl">
        {label}
      </p>
    </div>
  )
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  const row1Items = marqueeTech.slice(0, 11)
  const row2Items = marqueeTech.slice(11)
  const triple = (items: string[]) => [...items, ...items, ...items]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3

      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${offset - 200}px)`
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden pt-8 pb-6 sm:pt-10"
      aria-label="Tech stack marquee"
    >
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
        // running processes
      </p>
      <div className="flex flex-col gap-3">
        <div ref={row1Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
          {triple(row1Items).map((tech, i) => (
            <TechTile key={`r1-${tech}-${i}`} label={tech} />
          ))}
        </div>
        <div ref={row2Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
          {triple(row2Items.length ? row2Items : row1Items).map((tech, i) => (
            <TechTile key={`r2-${tech}-${i}`} label={tech} />
          ))}
        </div>
      </div>
    </section>
  )
}
