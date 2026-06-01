'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    tag: 'Solución 01 · Automatización',
    tagColor: 'text-[#4fa8e0]',
    cardStyle:
      'bg-[rgba(79,168,224,0.06)] border border-[rgba(79,168,224,0.22)] hover:shadow-[0_0_28px_rgba(79,168,224,0.12)]',
    dotColor: 'bg-[#4fa8e0]',
    badgeColor: 'text-[#4fa8e0] border-[#4fa8e0]/30 bg-[#4fa8e0]/10',
    title: 'Agentes que navegan por ti',
    image: '/agente-web.gif',
    imageAspect: 'landscape' as const,
    features: [
      <>Automatizan la navegación de <span className="text-[#4fa8e0]">cualquier sitio web</span></>,
      <>Trabajan con la <span className="text-[#4fa8e0]">frecuencia que definas</span></>,
      <>Corren en un <span className="text-[#4fa8e0]">servidor remoto</span>: apaga tu PC tranquilo</>,
    ],
  },
  {
    tag: 'Solución 02 · Finanzas',
    tagColor: 'text-coral',
    cardStyle:
      'bg-[rgba(224,90,75,0.06)] border border-[rgba(224,90,75,0.25)] hover:shadow-[0_0_28px_rgba(224,90,75,0.12)]',
    dotColor: 'bg-coral',
    badgeColor: 'text-coral border-coral/30 bg-coral/10',
    title: 'Conciliación Bancaria Inteligente',
    image: '/conciliacion-v4.png',
    imageAspect: 'landscape' as const,
    features: [
      <>Controla gastos e ingresos <span className="text-coral">en automático</span></>,
      <>Se integra con <span className="text-coral">bancos y entidades financieras</span></>,
      <>Cruza los movimientos con tu <span className="text-coral">información interna</span></>,
    ],
  },
  {
    tag: 'Solución 03 · Operaciones',
    tagColor: 'text-amber',
    cardStyle:
      'bg-[rgba(234,162,50,0.06)] border border-[rgba(234,162,50,0.22)] hover:shadow-[0_0_28px_rgba(234,162,50,0.12)]',
    dotColor: 'bg-amber',
    badgeColor: 'text-amber border-amber/30 bg-amber/10',
    title: 'Bot de WhatsApp que ordena tu operación',
    image: '/agente-gastos-t3.png',
    imageAspect: 'portrait' as const,
    features: [
      <>Se conecta con tus <span className="text-amber">sistemas internos</span></>,
      <><span className="text-amber">Un número</span> para clientes, proveedores y equipo</>,
      <>Convierte texto, imágenes y audios en <span className="text-amber">datos ordenados</span></>,
    ],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-body text-[11px] font-medium tracking-[0.14em] uppercase text-hint text-center mb-3"
        >
          Soluciones implementadas
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-serif text-3xl md:text-4xl font-bold text-cream text-center mb-10"
        >
          Esto <span className="text-coral">ya está funcionando</span> en empresas reales.
        </motion.h2>

        <div className="w-full h-px bg-white/[0.08] mb-10" />

        {/* Cards — full width, stacked, imagen + contenido lado a lado */}
        <div className="flex flex-col gap-5 mb-14">
          {services.map((service, i) => (
            <motion.div
              key={service.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`rounded-xl overflow-hidden transition-shadow duration-300 ${service.cardStyle}`}
            >
              <div className={`flex flex-col md:flex-row md:items-stretch ${service.image ? 'md:h-[360px]' : ''}`}>

                {/* Imagen */}
                {service.image && (
                  service.imageAspect === 'portrait' ? (
                    /* Celular: fondo del sitio, celular centrado, ocupa el alto de la card */
                    <div className="flex-shrink-0 md:w-[48%] h-80 md:h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-white/[0.06] py-2">
                      <Image
                        src={service.image}
                        alt={`Vista previa: ${service.title}`}
                        width={600}
                        height={1290}
                        className="max-h-full w-auto object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
                      />
                    </div>
                  ) : (
                    /* Landscape: panel completo (contain), centrado, ocupa el alto de la card */
                    <div className="flex-shrink-0 md:w-[48%] h-64 md:h-full flex items-center justify-center bg-white/[0.03] border-b md:border-b-0 md:border-r border-white/[0.06] p-6">
                      <Image
                        src={service.image}
                        alt={`Vista previa: ${service.title}`}
                        width={800}
                        height={650}
                        unoptimized={service.image.endsWith('.gif')}
                        className="max-h-full w-auto object-contain rounded-lg shadow-[0_6px_28px_rgba(0,0,0,0.4)]"
                      />
                    </div>
                  )
                )}

                {/* Contenido — centrado verticalmente */}
                <div className="flex flex-col justify-center p-7 md:p-9 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <p className={`font-body text-[10.5px] font-medium tracking-[0.12em] uppercase ${service.tagColor}`}>
                      {service.tag}
                    </p>
                    <span className={`font-body text-[9px] font-medium tracking-[0.1em] uppercase border rounded-full px-2 py-0.5 ${service.badgeColor}`}>
                      ● En producción
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-cream leading-[1.2] mb-5">
                    {service.title}
                  </h3>

                  <ul className="flex flex-col gap-y-3">
                    {service.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-start gap-2 font-body text-[12.5px] text-cream/80 leading-[1.45]"
                      >
                        <span
                          className={`w-[5px] h-[5px] rounded-full mt-[5px] flex-shrink-0 opacity-70 ${service.dotColor}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-body text-sm text-muted text-center mb-8"
        >
          ¿Tu caso es diferente?{' '}
          <a href="#contacto" className="text-coral hover:underline">
            También lo construimos.
          </a>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <a
            href="#contacto"
            className="inline-block bg-coral hover:bg-[#c94a3b] text-white font-body text-base font-medium tracking-[0.06em] uppercase px-12 py-5 rounded-full transition-colors duration-200"
          >
            Quiero mi Agente IA →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
