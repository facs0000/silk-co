'use client'

import { useEffect, useRef, useState } from 'react'

type Variant = 'combined' | 'aurora' | 'orbs' | 'grid' | 'particles' | 'none'

function useVariant(): Variant {
  const [v, setV] = useState<Variant>('combined')
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('bg') as Variant | null
    if (p) setV(p)
  }, [])
  return v
}

/* 1 — Aurora: manchas de color que respiran detrás de todo */
function Aurora() {
  return (
    <div className="bg-anim fixed inset-0 -z-10 overflow-hidden bg-navy">
      <div
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full blur-[120px] opacity-[0.35]"
        style={{ background: 'radial-gradient(circle, #e05a4b, transparent 70%)', animation: 'auroraDrift 18s ease-in-out infinite' }}
      />
      <div
        className="absolute top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-[0.28]"
        style={{ background: 'radial-gradient(circle, #4fa8e0, transparent 70%)', animation: 'auroraDrift 22s ease-in-out infinite reverse' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-[0.22]"
        style={{ background: 'radial-gradient(circle, #eaa232, transparent 70%)', animation: 'auroraDrift 26s ease-in-out infinite' }}
      />
    </div>
  )
}

/* 2 — Orbs: orbes nítidos con borde de color flotando */
function Orbs() {
  return (
    <div className="bg-anim fixed inset-0 -z-10 overflow-hidden bg-navy">
      <div
        className="absolute top-[10%] left-[12%] w-[40vw] h-[40vw] rounded-full blur-[90px] opacity-30"
        style={{ background: 'conic-gradient(from 90deg, #e05a4b, #eaa232, #e05a4b)', animation: 'orbFloat 16s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-[5%] right-[8%] w-[34vw] h-[34vw] rounded-full blur-[90px] opacity-25"
        style={{ background: 'conic-gradient(from 200deg, #4fa8e0, #6a5acd, #4fa8e0)', animation: 'orbFloat 20s ease-in-out infinite reverse' }}
      />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03), transparent 60%)' }} />
    </div>
  )
}

/* 3 — Grid: grilla futurista en perspectiva (synthwave sutil) */
function Grid() {
  return (
    <div className="bg-anim fixed inset-0 -z-10 overflow-hidden bg-navy">
      <div className="absolute inset-x-0 bottom-0 h-[55%] overflow-hidden [perspective:420px]">
        <div
          className="absolute inset-x-[-50%] bottom-[-20%] h-[200%] opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(224,90,75,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(224,90,75,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            transformOrigin: 'center bottom',
            animation: 'gridScroll 3.5s linear infinite',
          }}
        />
      </div>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(224,90,75,0.10), transparent 55%)' }} />
    </div>
  )
}

/* Capa de orbes reutilizable (sin fondo, para combinar) */
function OrbLayer() {
  return (
    <>
      <div
        className="absolute top-[8%] left-[10%] w-[42vw] h-[42vw] rounded-full blur-[100px] opacity-[0.32]"
        style={{ background: 'conic-gradient(from 90deg, #e05a4b, #eaa232, #e05a4b)', animation: 'orbFloat 16s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-[4%] right-[6%] w-[36vw] h-[36vw] rounded-full blur-[100px] opacity-[0.26]"
        style={{ background: 'conic-gradient(from 200deg, #4fa8e0, #6a5acd, #4fa8e0)', animation: 'orbFloat 20s ease-in-out infinite reverse' }}
      />
    </>
  )
}

/* Canvas de partículas reutilizable (transparente) */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf = 0
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const N = Math.min(90, Math.floor((w * h) / 18000))
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }))
    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.hypot(dx, dy)
          if (d < 130) {
            ctx.strokeStyle = `rgba(154,160,184,${0.18 * (1 - d / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke()
          }
        }
      }
      ctx.fillStyle = 'rgba(244,240,232,0.5)'
      for (const p of pts) { ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2); ctx.fill() }
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}

/* Combinado — partículas detrás + orbes adelante */
function Combined() {
  return (
    <div className="bg-anim fixed inset-0 -z-10 overflow-hidden bg-navy">
      <ParticleCanvas />
      <OrbLayer />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.025), transparent 60%)' }} />
    </div>
  )
}

/* 4 — Particles: red de puntos conectados (canvas) */
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf = 0
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const N = Math.min(90, Math.floor((w * h) / 18000))
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }))
    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.hypot(dx, dy)
          if (d < 130) {
            ctx.strokeStyle = `rgba(224,90,75,${0.16 * (1 - d / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke()
          }
        }
      }
      ctx.fillStyle = 'rgba(244,240,232,0.55)'
      for (const p of pts) { ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2); ctx.fill() }
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return (
    <div className="bg-anim fixed inset-0 -z-10 overflow-hidden bg-navy">
      <canvas ref={ref} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(224,90,75,0.08), transparent 60%)' }} />
    </div>
  )
}

export default function AnimatedBackground() {
  const v = useVariant()
  if (v === 'none') return null
  if (v === 'aurora') return <Aurora />
  if (v === 'orbs') return <Orbs />
  if (v === 'grid') return <Grid />
  if (v === 'particles') return <Particles />
  return <Combined />
}
