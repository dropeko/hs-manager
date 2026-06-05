import { Container } from '@/components/Container'

const INDICATORS = [
  { kpi: 'Prenhez', target: '> 80%', freq: 'Mensal', accent: 'orange' },
  { kpi: 'Mortalidade', target: '< 2%', freq: 'Mensal', accent: 'brown' },
  { kpi: 'Custo / animal', target: 'Controlado', freq: 'Mensal', accent: 'orange' },
  { kpi: 'Vacinação', target: '100%', freq: 'Calendário', accent: 'brown' },
  { kpi: 'Conversão alimentar', target: 'Meta técnica', freq: 'Trimestral', accent: 'orange' },
] as const

export function Indicators() {
  return (
    <section id="indicadores" className="relative py-20 lg:py-28">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-orange-600">
              Painel de controle
            </p>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-balance">
              Indicadores que transformam intuição em decisão.
            </h2>
            <p className="mt-5 text-lg text-ink-soft text-pretty">
              Cada KPI segue uma meta clara e uma frequência de revisão definida — para que a
              gestão veterinária, operacional e financeira caminhem no mesmo compasso.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-brand-brown-200 bg-cream-50 px-4 py-2 text-sm text-brand-brown-700">
              <span className="size-2 rounded-full bg-brand-orange-500 animate-pulse" />
              Atualizações em tempo real
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-line/70 bg-cream-50/70 backdrop-blur-sm">
              <header className="hidden sm:grid grid-cols-12 px-6 py-4 text-[11px] uppercase tracking-[0.16em] text-ink-muted border-b border-line/70 bg-cream-100/60">
                <div className="col-span-5">Indicador</div>
                <div className="col-span-4">Meta</div>
                <div className="col-span-3">Frequência</div>
              </header>

              <ul>
                {INDICATORS.map((row) => (
                  <li
                    key={row.kpi}
                    className="group grid grid-cols-1 sm:grid-cols-12 items-center gap-2 px-6 py-5 border-b border-line/50 last:border-b-0 hover:bg-cream-50 transition-colors"
                  >
                    <div className="sm:col-span-5 flex items-center gap-3">
                      <span
                        className={
                          row.accent === 'orange'
                            ? 'size-2.5 rounded-full bg-brand-orange-500 shadow-[0_0_0_4px_rgba(217,99,51,0.15)]'
                            : 'size-2.5 rounded-full bg-brand-brown-600 shadow-[0_0_0_4px_rgba(101,38,33,0.15)]'
                        }
                      />
                      <span className="font-display text-lg text-brand-brown-800">{row.kpi}</span>
                    </div>
                    <div className="sm:col-span-4">
                      <span className="inline-flex items-center rounded-full bg-brand-orange-50 text-brand-orange-700 border border-brand-orange-200 px-3 py-1 text-sm font-medium">
                        {row.target}
                      </span>
                    </div>
                    <div className="sm:col-span-3 text-sm text-ink-muted">{row.freq}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
