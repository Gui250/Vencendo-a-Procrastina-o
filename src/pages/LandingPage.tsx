import Hero from '../components/Hero'
import VSL from '../components/VSL'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import Bonuses from '../components/Bonuses'
import Pricing from '../components/Pricing'
import Modules from '../components/Modules'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <VSL />
      <Benefits />
      <Testimonials />
      <Bonuses />
      <Pricing />
      <Modules />
      <About />
      <FAQ />
      <Footer />
    </main>
  )
}
