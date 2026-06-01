'use client'

import { motion } from 'framer-motion'

function NoBureaucracyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="8" r="3.5" stroke="white" strokeWidth="1.5" />
      <path d="M4 19c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SpeedIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="1.5" />
      <path d="M11 7v4.5l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 3.5L5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 3.5l2-1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ChileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="18" height="12" rx="2" stroke="white" strokeWidth="1.5" />
      <path d="M2 9h18" stroke="white" strokeWidth="1.5" />
      <rect x="2" y="5" width="7" height="4" rx="0" fill="white" opacity="0.3" />
      <circle cx="5.5" cy="7" r="1" fill="white" />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M4 10a7 7 0 0114 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" stroke="white" strokeWidth="1.5" />
      <path d="M4 10a2 2 0 00-2 2v1a2 2 0 002 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 10a2 2 0 012 2v1a2 2 0 01-2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 17v2M9 19h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const differentiators = [
  {
    icon: <NoBureaucracyIcon />,
    title: 'Sin equipos enormes ni burocracia',
  },
  {
    icon: <SpeedIcon />,
    title: 'Implementación en semanas, no en años',
  },
  {
    icon: <ChileIcon />,
    title: 'La robustez de una gran consultora, sin su lentitud ni burocracia',
  },
  {
    icon: <SupportIcon />,
    title: 'Soporte continuo incluido',
  },
]

export default function WhySilk() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-body text-[11px] font-medium tracking-[0.14em] uppercase text-hint mb-4">
            Por qué elegirnos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Por qué Silk Co.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-5 p-6 rounded-xl bg-navy-card border border-border"
            >
              <div className="w-11 h-11 rounded-[9px] bg-coral/10 border border-coral/20 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <p className="font-body text-base text-cream leading-snug pt-2">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
