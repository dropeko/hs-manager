import {
  ClipboardList,
  HeartPulse,
  Wheat,
  Syringe,
  Wallet,
  Settings2,
  ArrowUpRight,
} from 'lucide-react'
import { Container } from '@/components/Container'

const AREAS = [
  {
    icon: ClipboardList,
    title: 'Gestão Animal',
    desc: 'Ficha individual completa com genealogia, peso, sanidade, alimentação e performance.',
    items: ['Ganho de peso', 'Incidência de doenças', 'Mortalidade', 'Fertilidade'],
  },
  {
    icon: HeartPulse,
    title: 'Reprodução',
    desc: 'Cios, coberturas, IA, transferência embrionária, gestação e partos no mesmo eixo.',
    items: ['Taxa de prenhez', 'Taxa de aborto', 'Nascimentos', 'Intervalo entre partos'],
  },
  {
    icon: Wheat,
    title: 'Nutrição',
    desc: 'Planos alimentares por categoria — garanhões, matrizes, potros e atletas.',
    items: ['Consumo diário', 'Formulação', 'Estoque de ração', 'Qualidade da forragem'],
  },
  {
    icon: Syringe,
    title: 'Sanidade',
    desc: 'Calendário sanitário anual, protocolos de quarentena, isolamento e emergência.',
    items: ['Influenza', 'Tétano', 'Raiva', 'Encefalomielite'],
  },
  {
    icon: Wallet,
    title: 'Financeiro',
    desc: 'Centros de custo, receitas por linha de negócio e indicadores rurais.',
    items: ['Custo por animal', 'Margem operacional', 'EBITDA rural', 'ROI reprodutivo'],
  },
  {
    icon: Settings2,
    title: 'Operacional',
    desc: 'Checklists diários e semanais que garantem rotinas padronizadas no campo.',
    items: ['Alimentação', 'Inspeção', 'Pastagem', 'Manutenção'],
  },
]

export function Areas() {
  return (
    <section id="areas" className="relative py-20 lg:py-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-brown-300/50 to-transparent"
      />
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-orange-600">
              Áreas de gestão
            </p>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-balance">
              Tudo o que um haras de excelência precisa, integrado.
            </h2>
          </div>
          <p className="max-w-md text-ink-soft">
            Seis frentes conectadas por dados — uma só fonte de verdade para decisões clínicas,
            operacionais e financeiras.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <article
              key={a.title}
              className="group relative overflow-hidden rounded-3xl border border-line/70 bg-cream-50/80 backdrop-blur-sm p-7 transition-all duration-500 hover:border-brand-orange-300 hover:shadow-[0_24px_60px_-30px_rgba(101,38,33,0.4)] hover:-translate-y-1"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 size-48 rounded-full bg-brand-orange-200/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="relative flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-brown-600 to-brand-brown-700 text-cream-50 shadow-soft">
                  <a.icon className="size-5" />
                </span>
                <ArrowUpRight className="size-5 text-ink-muted/60 group-hover:text-brand-orange-600 group-hover:rotate-12 transition-all duration-500" />
              </div>

              <h3 className="relative mt-6 font-display text-2xl text-brand-brown-800">
                {a.title}
              </h3>
              <p className="relative mt-3 text-[15px] text-ink-soft leading-relaxed">{a.desc}</p>

              <ul className="relative mt-5 flex flex-wrap gap-2">
                {a.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full bg-brand-brown-50 text-brand-brown-700 border border-brand-brown-100 px-3 py-1 text-[12px] font-medium"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
