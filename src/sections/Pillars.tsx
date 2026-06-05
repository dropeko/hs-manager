import { Heart, Shield, Sprout, TrendingUp, Microscope } from 'lucide-react'
import { Container } from '@/components/Container'

const PILLARS = [
  { icon: Heart, title: 'Bem-estar animal', desc: 'Manejo humanitário em todas as rotinas.' },
  { icon: Shield, title: 'Segurança operacional', desc: 'Protocolos POP padronizados e auditáveis.' },
  { icon: Sprout, title: 'Sustentabilidade', desc: 'Eficiência produtiva sem comprometer recursos.' },
  { icon: TrendingUp, title: 'Eficiência econômica', desc: 'KPIs financeiros e operacionais ao vivo.' },
  { icon: Microscope, title: 'Melhoramento genético', desc: 'Genealogia e performance no centro da decisão.' },
]

export function Pillars() {
  return (
    <section id="plataforma" className="relative py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-orange-600">
            Nossos valores
          </p>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl text-balance">
            Cinco princípios que orientam cada decisão no haras.
          </h2>
          <p className="mt-5 text-lg text-ink-soft text-pretty">
            A plataforma traduz a cultura do haras em fluxos de trabalho concretos, conectando
            pessoas, animais e indicadores.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((p, i) => (
            <li
              key={p.title}
              className="group relative rounded-2xl border border-line/70 bg-cream-50/70 backdrop-blur-sm p-6 hover:border-brand-orange-300 hover:bg-cream-50 hover:-translate-y-1 transition-all duration-500 ease-[var(--ease-smooth)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-orange-500/10 text-brand-orange-600 group-hover:bg-brand-orange-500 group-hover:text-cream-50 transition-colors duration-500">
                <p.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg text-brand-brown-800">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">{p.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
