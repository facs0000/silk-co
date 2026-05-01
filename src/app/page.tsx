import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import WhySilk from '@/components/WhySilk'
import CtaFinal from '@/components/CtaFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-navy min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <WhySilk />
      <CtaFinal />
      <Footer />
    </main>
  )
}
