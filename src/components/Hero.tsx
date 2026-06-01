'use client'

import { motion } from 'framer-motion'

function RowsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="16" height="2.5" rx="1.2" fill="white" />
      <rect x="2" y="9" width="11" height="2.5" rx="1.2" fill="white" />
      <rect x="2" y="15" width="13" height="2.5" rx="1.2" fill="white" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="white" strokeWidth="1.5" />
      <path d="M10 6v4.5l2.5 1.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function PersonCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="6" r="3.5" stroke="white" strokeWidth="1.5" />
      <path d="M2 17c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.5 10.5l1.5 1.5 2.5-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const benefits = [
  { icon: <RowsIcon />, text: <><span className="text-coral">Ordena</span> tu información</> },
  { icon: <ClockIcon />, text: <><span className="text-coral">Automatiza</span> lo repetitivo</> },
  { icon: <PersonCheckIcon />, text: <><span className="text-coral">Libera</span> a tu equipo</> },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-24 px-6">
      <div className="max-w-3xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-body text-xs font-normal tracking-[0.08em] uppercase text-hint text-center mb-5"
        >
          IA aplicada a tu negocio
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl font-bold leading-[1.06] text-cream tracking-[-0.01em] text-center mb-12"
        >
          Tu primer <span className="text-coral">Agente de IA</span>
          <br />
          funcionando en menos de{' '}
          <span className="text-coral">2 meses.</span>
        </motion.h1>

        {/* Benefits */}
        <div className="flex flex-col gap-4 mb-14 max-w-fit mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.22 + i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-[9px] bg-coral flex items-center justify-center flex-shrink-0">
                {benefit.icon}
              </div>
              <span className="font-impact font-bold text-xl md:text-2xl text-cream uppercase tracking-[0.01em] leading-tight">
                {benefit.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#contacto"
            className="inline-block bg-coral hover:bg-[#c94a3b] text-white font-body text-base font-medium tracking-[0.06em] uppercase px-10 py-5 rounded-full transition-colors duration-200 whitespace-nowrap"
          >
            Quiero mi Agente IA →
          </a>
          <a
            href="#servicios"
            className="font-body text-sm text-muted hover:text-cream transition-colors duration-200"
          >
            Ver soluciones ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}
