'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ nombre: '', correo: '', telefono: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-navy border border-white/10 focus:border-coral/60 rounded-xl px-4 py-3.5 font-body text-sm text-cream placeholder:text-hint outline-none transition-colors duration-200'

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10"
        >
          <div className="w-14 h-14 rounded-full bg-coral/10 border border-coral/30 flex items-center justify-center mx-auto mb-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#e05a4b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-serif text-2xl font-bold text-cream mb-2">¡Mensaje enviado!</p>
          <p className="font-body text-sm text-muted">Te contactamos a la brevedad.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md mx-auto"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            value={form.nombre}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            required
            value={form.correo}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Número de teléfono"
            required
            value={form.telefono}
            onChange={handleChange}
            className={inputClass}
          />

          {status === 'error' && (
            <p className="font-body text-xs text-coral text-center">
              Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-coral hover:bg-[#c94a3b] disabled:opacity-60 disabled:cursor-not-allowed text-white font-body text-base font-medium tracking-[0.06em] uppercase px-10 py-4 rounded-full transition-colors duration-200 mt-2"
          >
            {status === 'loading' ? 'Enviando...' : 'Quiero mi Agente IA →'}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
