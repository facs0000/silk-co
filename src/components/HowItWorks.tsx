'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: (
      <>Detectamos dónde la IA te genera <span className="text-coral">más valor</span>.</>
    ),
  },
  {
    number: '02',
    title: 'Implementación',
    description: (
      <>Construimos e integramos tu agente en menos de <span className="text-coral">2 meses</span>.</>
    ),
  },
  {
    number: '03',
    title: 'Optimización',
    description: (
      <>Medimos, ajustamos y mejoramos con <span className="text-coral">datos reales</span>.</>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-6 bg-navy-card">
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
            El proceso
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Cómo funciona
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — visible only on desktop */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            style={{ background: 'rgba(224,90,75,0.3)' }}
          />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-coral bg-navy-card flex items-center justify-center mb-6">
                  <span className="font-body text-xs font-medium tracking-[0.1em] text-coral">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-cream mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
