'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const WA_URL =
  'https://wa.me/56994853468?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Silk%20Co.'

export default function CtaFinal() {
  return (
    <section id="contacto" className="py-28 px-6 bg-navy-card">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-6xl font-bold italic text-cream leading-tight mb-4"
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
          className="font-body text-base text-muted mb-10"
        >
          Primera consultoría sin costo. Sin compromisos.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>

        {/* WhatsApp alternative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <span className="font-body text-xs text-hint">¿Prefieres hablar directo?</span>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-xs font-medium text-[#25D366] hover:text-[#1fad55] transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
              <path d="M14 2.333C7.556 2.333 2.333 7.556 2.333 14c0 2.023.536 3.92 1.473 5.56L2.333 25.667l6.293-1.449A11.583 11.583 0 0014 25.667c6.444 0 11.667-5.223 11.667-11.667S20.444 2.333 14 2.333z" fill="currentColor"/>
            </svg>
            Escríbenos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
