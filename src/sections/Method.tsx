import { Target, Play, Activity, Wrench, TrendingUp } from 'lucide-react'
import { Container } from '@/components/Container'

const STEPS = [
  { icon: Target, label: 'Planejar', desc: 'Definir metas claras por área de gestão.' },
  { icon: Play, label: 'Executar', desc: 'Aplicar protocolos POP no dia a dia do haras.' },
  { icon: Activity, label: 'Medir', desc: 'Monitorar indicadores e gerar evidência.' },
  { icon: Wrench, label: 'Corrigir', desc: 'Agir sobre desvios com plano de ação.' },
  { icon: TrendingUp, label: 'Escalar', desc: 'Padronizar o que funciona e crescer.' },
]

export function Method() {
  return (
    <section id="metodo" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-brand-brown-700 via-brand-brown-600 to-brand-brown-800"
      />
      <div aria-hidden className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay" />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-brand-orange-500/30 blur-[140px]"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-orange-200">
            Ciclo de gestão
          </p>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl text-cream-50 text-balance">
            Um método contínuo que evolui com o seu haras.
          </h2>
          <p className="mt-5 text-lg text-cream-100/80 text-pretty">
            Inspirado no ciclo PDCA aplicado ao agronegócio equino — cinco etapas para que cada
            safra reprodutiva, cada lote e cada protocolo se aproxime da excelência.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {/* Connecting line */}
          <span
            aria-hidden
            className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-orange-400/60 to-transparent"
          />

          {STEPS.map((s, idx) => (
            <li
              key={s.label}
              className="relative rounded-2xl border border-cream-50/12 bg-cream-50/5 backdrop-blur-sm p-6 hover:bg-cream-50/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex size-12 items-center justify-center rounded-2xl bg-brand-orange-500 text-cream-50 shadow-[0_8px_24px_-8px_rgba(217,99,51,0.6)]">
                  <s.icon className="size-5" />
                  <span className="absolute -top-1.5 -right-1.5 size-5 rounded-full bg-cream-50 text-brand-brown-700 text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                </span>
                <span className="font-display text-xl text-cream-50">{s.label}</span>
              </div>
              <p className="mt-4 text-sm text-cream-100/75 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
