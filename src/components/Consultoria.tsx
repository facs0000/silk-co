'use client'

import { motion } from 'framer-motion'

export default function Consultoria() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-body text-[11px] font-medium tracking-[0.14em] uppercase text-hint mb-5">
          Antes del cómo, el qué
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream leading-[1.1] mb-6">
          No empezamos por la tecnología.{' '}
          <span className="text-coral">Empezamos por tu negocio.</span>
        </h2>
        <p className="font-body text-lg text-muted leading-[1.6]">
          Cada solución se diseña a la medida de tu{' '}
          <span className="text-coral">necesidad real</span>.
        </p>
      </motion.div>
    </section>
  )
}
