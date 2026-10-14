import { useEffect, useRef } from 'react'

/* ─── Particle Canvas ─────────────────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null)
  const mouseRef  = useRef({ x: -9999, y: -9999 })
  const frameRef  = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const COLORS = ['#A79CFF', '#F4B942', '#88C999', '#111827']
    const COUNT  = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 14000))
    const rnd = (min, max) => Math.random() * (max - min) + min

    let particles = []

    function buildParticles() {
      particles = Array.from({ length: COUNT }, () => ({
        x:      rnd(0, canvas.width),
        y:      rnd(0, canvas.height),
        r:      rnd(2, 5),
        vx:     rnd(-0.35, 0.35),
        vy:     rnd(-0.35, 0.35),
        color:  COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha:  rnd(0.25, 0.65),
        pulse:  rnd(0, Math.PI * 2),
        pSpeed: rnd(0.005, 0.015),
      }))
    }

    function resize() {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      buildParticles()
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    window.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (const p of particles) {
        p.pulse += p.pSpeed
        const rLive = p.r + Math.sin(p.pulse) * 0.6
        const dx   = p.x - mx
        const dy   = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120 * 0.6
          p.x += (dx / dist) * force
          p.y += (dy / dist) * force
        }
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10)                p.x = canvas.width  + 10
        if (p.x > canvas.width  + 10) p.x = -10
        if (p.y < -10)                p.y = canvas.height + 10
        if (p.y > canvas.height + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, rLive, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
      }

      ctx.globalAlpha = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx   = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            const opacity = (1 - dist / 100) * 0.15
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = '#111827'
            ctx.globalAlpha = opacity
            ctx.lineWidth   = 0.8
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      frameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(frameRef.current)
      ro.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
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

function AuroraBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="aurora-blob aurora-blob--1" />
      <div className="aurora-blob aurora-blob--2" />
      <div className="aurora-blob aurora-blob--3" />
      <div className="aurora-blob aurora-blob--4" />
    </div>
  )
}

function NoiseGrain() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '180px',
      }}
      aria-hidden="true"
    />
  )
}

function RetroGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(17,24,39,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(17,24,39,0.035) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
      aria-hidden="true"
    />
  )
}

export default function AnimatedBackground({ showParticles = true, showGrid = true }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <AuroraBlobs />
      {showGrid && <RetroGrid />}
      {showParticles && <ParticleCanvas />}
      <NoiseGrain />
    </div>
  )
}
