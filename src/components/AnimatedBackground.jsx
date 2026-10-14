import { useEffect, useRef } from 'react'

/* ─── Particle Canvas with Theme Sensitivity & Smooth Physics ─────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const frameRef = useRef(null)

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const LIGHT_COLORS = ['#A79CFF', '#F4B942', '#88C999', '#4B5563']
    const DARK_COLORS  = ['#A79CFF', '#F4B942', '#88C999', '#E0E7FF']

    // Responsive particle count based on viewport area
    const COUNT = Math.min(85, Math.max(35, Math.floor((window.innerWidth * window.innerHeight) / 16000)))
    const rnd = (min, max) => Math.random() * (max - min) + min

    let particles = []

    function getIsDark() {
      return document.documentElement.classList.contains('dark')
    }

    function buildParticles() {
      const isDark = getIsDark()
      const colors = isDark ? DARK_COLORS : LIGHT_COLORS
      particles = Array.from({ length: COUNT }, () => ({
        x: rnd(0, canvas.width || window.innerWidth),
        y: rnd(0, canvas.height || window.innerHeight),
        r: rnd(2, 4.5),
        vx: rnd(-0.3, 0.3),
        vy: rnd(-0.3, 0.3),
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: rnd(0.25, 0.65),
        pulse: rnd(0, Math.PI * 2),
        pSpeed: rnd(0.006, 0.016),
      }))
    }

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      buildParticles()
    }

    resize()
    window.addEventListener('resize', resize)

    function onMouseMove(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const isDark = getIsDark()

      // 1. Draw and update particles
      for (const p of particles) {
        p.pulse += p.pSpeed
        const rLive = p.r + Math.sin(p.pulse) * 0.5
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Cursor repulsion
        if (dist < 130 && dist > 0) {
          const force = ((130 - dist) / 130) * 0.65
          p.x += (dx / dist) * force
          p.y += (dy / dist) * force
        }

        p.x += p.vx
        p.y += p.vy

        // Wrap around viewport edges
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
        if (p.y < -10) p.y = canvas.height + 10
        if (p.y > canvas.height + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, rLive, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
      }

      // 2. Draw connecting constellation lines between nearby particles
      ctx.globalAlpha = 1
      const maxConnectDist = 110
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxConnectDist) {
            const opacity = (1 - dist / maxConnectDist) * (isDark ? 0.22 : 0.14)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = isDark ? '#A79CFF' : '#111827'
            ctx.globalAlpha = opacity
            ctx.lineWidth = 0.85
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      frameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

/* ─── 6 Ambient Aurora Glow Blobs ─────────────────────────────────────────── */
function AuroraBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Top Left — Lavender #A79CFF */}
      <div className="aurora-blob aurora-blob--1" />
      {/* Top Right — Amber #F4B942 */}
      <div className="aurora-blob aurora-blob--2" />
      {/* Bottom Center — Mint #88C999 */}
      <div className="aurora-blob aurora-blob--3" />
      {/* Mid Left — Lavender #A79CFF */}
      <div className="aurora-blob aurora-blob--4" />
      {/* Mid Right — Mint #88C999 */}
      <div className="aurora-blob aurora-blob--5" />
      {/* Bottom Right — Amber #F4B942 */}
      <div className="aurora-blob aurora-blob--6" />
    </div>
  )
}

/* ─── Subtle Analog Noise Texture ─────────────────────────────────────────── */
function NoiseGrain() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.045] mix-blend-multiply dark:mix-blend-screen"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '180px',
      }}
      aria-hidden="true"
    />
  )
}

/* ─── Retro Neo-Brutalist Grid Lines (Light & Dark Mode) ───────────────────── */
function RetroGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-100"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(17, 24, 39, 0.035) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(17, 24, 39, 0.035) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}

/* ─── Exported Full-Length Animated Background Component ─────────────────── */
export default function AnimatedBackground({
  showParticles = true,
  showGrid = true,
  fixed = true,
}) {
  return (
    <div
      className={`${
        fixed ? 'fixed inset-0' : 'absolute inset-0'
      } overflow-hidden pointer-events-none z-0`}
      aria-hidden="true"
    >
      <AuroraBlobs />
      {showGrid && <RetroGrid />}
      {showParticles && <ParticleCanvas />}
      <NoiseGrain />
    </div>
  )
}
