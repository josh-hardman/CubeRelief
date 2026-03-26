import { ValueStrip } from './components/layout/ValueStrip'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Product } from './components/sections/Product'
import { KeyBenefits } from './components/sections/KeyBenefits'
import { HowItWorks } from './components/sections/HowItWorks'
import { PrivateLabel } from './components/sections/PrivateLabel'
import { FinalCTA } from './components/sections/FinalCTA'

function App() {
  return (
    <>
      <ValueStrip />
      <Hero />
      <Product />
      <KeyBenefits />
      <HowItWorks />
      <PrivateLabel />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default App
