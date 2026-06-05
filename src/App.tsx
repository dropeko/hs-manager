import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Pillars } from './sections/Pillars'
import { Areas } from './sections/Areas'
import { Indicators } from './sections/Indicators'
import { Method } from './sections/Method'
import { CTA } from './sections/CTA'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Areas />
        <Indicators />
        <Method />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
