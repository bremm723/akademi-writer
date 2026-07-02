import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Hero from "./components/sections/Hero"
import SocialProof from "./components/sections/SocialProof"
import Pillars from "./components/sections/Pillars"
import USP from "./components/sections/USP"
import HowItWorks from "./components/sections/HowItWorks"
import FinalCTA from "./components/sections/FinalCTA"
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Pillars />
        <USP />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
