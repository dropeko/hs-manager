import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CTA() {
  return (
    <section id="demo" className="relative py-20 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-line/70 bg-cream-50/85 backdrop-blur-sm p-10 lg:p-16 shadow-soft">
          <div
            aria-hidden
            className="absolute -top-40 -right-40 size-[420px] rounded-full bg-brand-orange-300/40 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -left-40 size-[420px] rounded-full bg-brand-brown-300/30 blur-3xl"
          />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-orange-600">
                Vamos conversar
              </p>
              <h2 className="mt-3 font-display text-4xl lg:text-5xl text-balance">
                Pronto para gerir seu haras com a mesma precisão da sua genética?
              </h2>
              <p className="mt-5 text-lg text-ink-soft text-pretty max-w-xl">
                Agende uma demonstração e veja como o HS Manager se adapta às rotinas do seu
                plantel — do POP de parto ao EBITDA rural.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
              <Button asLink href="#contato" variant="primary" size="lg" className="w-full justify-center">
                Solicitar demonstração
                <ArrowRight className="size-4" />
              </Button>
              <Button asLink href="#contato" variant="ghost" size="lg" className="w-full justify-center">
                Falar com especialista
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
