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
  title: 'Silk Co. | Agentes de IA para Empresas',
  description:
    'Identificamos qué automatizar en tu empresa y lo implementamos. Soluciones de IA ya en producción: conciliación bancaria inteligente, bots de documentos y agentes web remotos.',
  openGraph: {
    title: 'Silk Co. | Agentes de IA para Empresas',
    description:
      'Identificamos qué automatizar en tu empresa y lo implementamos. Soluciones de IA ya en producción.',
    url: 'https://silkco.vercel.app',
    siteName: 'Silk Co.',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silk Co. | Agentes de IA para Empresas',
    description: 'Identificamos qué automatizar en tu empresa y lo implementamos.',
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
