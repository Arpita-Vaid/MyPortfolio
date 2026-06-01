import { useCallback, useRef, type ReactNode, type MouseEvent } from 'react'

interface MagnetProps {
  children: ReactNode
  className?: string
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
}

export function Magnet({
  children,
  className = '',
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distX = Math.abs(e.clientX - centerX)
      const distY = Math.abs(e.clientY - centerY)

      const inRange =
        distX < rect.width / 2 + padding && distY < rect.height / 2 + padding

      if (inRange) {
        const offsetX = (e.clientX - centerX) / strength
        const offsetY = (e.clientY - centerY) / strength
        el.style.transition = activeTransition
        el.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`
      } else {
        el.style.transition = inactiveTransition
        el.style.transform = 'translate3d(0, 0, 0)'
      }
    },
    [padding, strength, activeTransition, inactiveTransition],
  )

  const handleLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transition = inactiveTransition
    el.style.transform = 'translate3d(0, 0, 0)'
  }, [inactiveTransition])

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  )
}
