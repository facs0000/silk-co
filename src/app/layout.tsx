import type { Metadata } from 'next'
import { Righteous, Crimson_Pro, DM_Sans, Unbounded } from 'next/font/google'
import './globals.css'

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous',
  display: 'swap',
})

const crimsonPro = Crimson_Pro({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const unbounded = Unbounded({
  weight: ['700', '900'],
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Silk Co. | Agentes de IA para Pymes',
  description:
    'Implementa tu primer Agente de IA en menos de 2 meses. Automatiza procesos, estructura tu información y libera a tu equipo. Consultoría especializada para Pymes chilenas.',
  openGraph: {
    title: 'Silk Co. | Agentes de IA para Pymes',
    description:
      'Implementa tu primer Agente de IA en menos de 2 meses. Automatiza procesos, estructura tu información y libera a tu equipo.',
    url: 'https://silkco.vercel.app',
    siteName: 'Silk Co.',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silk Co. | Agentes de IA para Pymes',
    description: 'Implementa tu primer Agente de IA en menos de 2 meses.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${righteous.variable} ${crimsonPro.variable} ${dmSans.variable} ${unbounded.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
