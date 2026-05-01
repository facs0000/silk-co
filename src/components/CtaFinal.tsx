'use client'

import { motion } from 'framer-motion'

export default function CtaFinal() {
  return (
    <section id="contacto" className="py-28 px-6 bg-navy-card">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-6xl font-bold italic text-cream leading-tight mb-6"
        >
          ¿Listo para que la IA
          <br />
          trabaje para ti?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-base text-muted mb-12"
        >
          Primera consultoría sin costo. Sin compromisos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="mailto:hola@silkco.cl"
            className="inline-block bg-coral hover:bg-[#c94a3b] text-white font-body text-lg font-medium tracking-[0.06em] uppercase px-14 py-5 rounded-full transition-colors duration-200"
          >
            Agenda tu hora gratis →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
