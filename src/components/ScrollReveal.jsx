import { useEffect, useRef, useState } from 'react'

/**
 * High-Performance ScrollReveal component using IntersectionObserver.
 * Triggers entrance well BEFORE reaching viewport (rootMargin: 180px 0px)
 * so content is already revealed and rendered with zero perceived delay on scroll.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0,
  direction = 'up',
  as: Component = 'div',
  ...rest
}) {
  const [isRevealed, setIsRevealed] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true
    }
    return false
  })
  const domRef = useRef(null)

  useEffect(() => {
    if (isRevealed) return
    const element = domRef.current
    if (!element) return

    // If element is already in or near viewport on mount, reveal instantly without delay
    const rect = element.getBoundingClientRect()
    if (rect.top <= window.innerHeight + 100) {
      setIsRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0,
        // Pre-reveal 180px before entering viewport so user never sees a blank space
        rootMargin: '180px 0px 60px 0px',
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [threshold, isRevealed])

  const getTransform = () => {
    if (isRevealed) return 'translate3d(0, 0, 0) scale(1)'
    switch (direction) {
      case 'up':
        return 'translate3d(0, 16px, 0)'
      case 'down':
        return 'translate3d(0, -16px, 0)'
      case 'left':
        return 'translate3d(-16px, 0, 0)'
      case 'right':
        return 'translate3d(16px, 0, 0)'
      case 'scale':
        return 'translate3d(0, 8px, 0) scale(0.98)'
      default:
        return 'translate3d(0, 0, 0)'
    }
  }

  // Snappy delay (max 80ms) so staggered grids don't keep content invisible
  const effectiveDelay = Math.min(delay, 80)

  return (
    <Component
      ref={domRef}
      className={className}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1) ${effectiveDelay}ms, transform 0.28s cubic-bezier(0.16, 1, 0.3, 1) ${effectiveDelay}ms`,
        willChange: isRevealed ? 'auto' : 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}
