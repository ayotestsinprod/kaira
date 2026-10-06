import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Problem } from "./components/Problem"
import { Product } from "./components/Product"
import { Features } from "./components/Features"
import { HowItWorks } from "./components/HowItWorks"
import { Security } from "./components/Security"
import { Pricing } from "./components/Pricing"
import { Cta } from "./components/Cta"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Product />
        <Features />
        <HowItWorks />
        <Security />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
