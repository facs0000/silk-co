'use client'

import { motion } from 'framer-motion'

const WA_URL =
  'https://wa.me/56994853468?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Silk%20Co.'

export default function WhatsappButton() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 2.333C7.556 2.333 2.333 7.556 2.333 14c0 2.023.536 3.92 1.473 5.56L2.333 25.667l6.293-1.449A11.583 11.583 0 0014 25.667c6.444 0 11.667-5.223 11.667-11.667S20.444 2.333 14 2.333z"
          fill="white"
        />
        <path
          d="M19.25 16.917c-.292-.147-1.726-.852-1.993-.948-.267-.097-.46-.145-.654.146-.194.29-.752.947-.921 1.141-.17.193-.34.218-.631.073-.292-.146-1.232-.454-2.347-1.449-.867-.774-1.452-1.73-1.621-2.022-.17-.291-.018-.449.127-.593.131-.13.292-.34.437-.51.146-.17.195-.29.292-.485.098-.194.049-.364-.024-.51-.073-.145-.654-1.578-.897-2.16-.236-.568-.476-.49-.654-.5-.17-.009-.364-.011-.558-.011-.194 0-.51.073-.777.364-.267.291-1.02 1.0-1.02 2.43 0 1.432 1.045 2.815 1.19 3.009.146.194 2.057 3.141 4.986 4.405.697.301 1.24.48 1.664.615.699.222 1.336.19 1.838.115.561-.083 1.726-.706 1.97-1.387.242-.68.242-1.263.17-1.385-.073-.12-.267-.193-.558-.34z"
          fill="#25D366"
        />
      </svg>
    </motion.a>
  )
}
