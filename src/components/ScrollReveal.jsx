import { useEffect, useRef, useState } from 'react'

/**
  * ScrollReveal component using IntersectionObserver for fluid, 60fps entrance reveals.
  *
  * @param {React.ReactNode} children - Contents to reveal
  * @param {string} className - Additional CSS classes
  * @param {number} delay - Animation delay in ms (for staggered grids)
  * @param {number} threshold - Intersection threshold (default 0.15)
  * @param {'up' | 'down' | 'left' | 'right' | 'scale' | 'none'} direction - Reveal style
  */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.12,
  direction = 'up',
  as: Component = 'div',
  ...rest
}) {
  const [isRevealed, setIsRevealed] = useState(false)
  const domRef = useRef(null)

  useEffect(() => {
    // Immediate show if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true)
      return
    }

    const element = domRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [threshold])

  const getTransform = () => {
    if (isRevealed) return 'translate3d(0, 0, 0) scale(1)'
    switch (direction) {
      case 'up':
        return 'translate3d(0, 28px, 0)'
      case 'down':
        return 'translate3d(0, -28px, 0)'
      case 'left':
        return 'translate3d(-28px, 0, 0)'
      case 'right':
        return 'translate3d(28px, 0, 0)'
      case 'scale':
        return 'translate3d(0, 16px, 0) scale(0.96)'
      default:
        return 'translate3d(0, 0, 0)'
    }
  }

  return (
    <Component
      ref={domRef}
      className={className}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}
