import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Consultoria from '@/components/Consultoria'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import CtaFinal from '@/components/CtaFinal'
import Footer from '@/components/Footer'
import WhatsappButton from '@/components/WhatsappButton'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Services />
      <Consultoria />
      <HowItWorks />
      <CtaFinal />
      <Footer />
      <WhatsappButton />
    </main>
  )
}
