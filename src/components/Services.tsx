'use client'

import { motion } from 'framer-motion'

const services = [
  {
    tag: 'Servicio 01 · Agente de IA',
    tagColor: 'text-coral',
    cardStyle:
      'bg-[rgba(224,90,75,0.06)] border border-[rgba(224,90,75,0.25)] hover:shadow-[0_0_24px_rgba(224,90,75,0.15)]',
    dotColor: 'bg-coral',
    title: 'Tu primer empleado de IA',
    description:
      'Un agente que trabaja 24/7, usa tus herramientas y habla con tus sistemas.',
    features: [
      'Lee y escribe correos',
      'Genera y analiza planillas Excel',
      'Se conecta con tu banco y otras entidades financieras',
      'Se conecta a cualquier sistema que uses',
    ],
  },
  {
    tag: 'Servicio 02 · Administración',
    tagColor: 'text-amber',
    cardStyle:
      'bg-[rgba(234,162,50,0.06)] border border-[rgba(234,162,50,0.22)] hover:shadow-[0_0_24px_rgba(234,162,50,0.15)]',
    dotColor: 'bg-amber',
    title: 'Inteligencia Financiera',
    description: 'Ordena tus finanzas con información actualizada y unificada.',
    features: [
      'Sabe exactamente cuánto entra y cuánto sale',
      'Historial financiero listo para el banco',
      'Anticipa quiebres de caja antes de que ocurran',
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
          className="font-body text-[11px] font-medium tracking-[0.14em] uppercase text-hint text-center mb-10"
        >
          Lo que hacemos
        </motion.p>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.08] mb-10" />

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {services.map((service, i) => (
            <motion.div
              key={service.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className={`rounded-xl p-7 transition-shadow duration-300 ${service.cardStyle}`}
            >
              <p className={`font-body text-[10.5px] font-medium tracking-[0.12em] uppercase mb-3 ${service.tagColor}`}>
                {service.tag}
              </p>
              <h2 className="font-serif text-[28px] font-bold text-cream leading-[1.15] mb-4">
                {service.title}
              </h2>
              <p className="font-body text-[13.5px] text-muted leading-[1.55] mb-5">
                {service.description}
              </p>
              <ul className="flex flex-col gap-[7px]">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 font-body text-[13px] text-cream/80 leading-[1.45]"
                  >
                    <span
                      className={`w-[5px] h-[5px] rounded-full mt-[5px] flex-shrink-0 opacity-70 ${service.dotColor}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

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
