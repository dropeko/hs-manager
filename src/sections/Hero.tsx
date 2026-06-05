import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* Decorative gradient orbs */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 size-[520px] rounded-full bg-brand-orange-300/30 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-20 -right-40 size-[480px] rounded-full bg-brand-brown-400/25 blur-[120px] pointer-events-none"
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange-300/50 bg-cream-50/60 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-brand-brown-700">
              <Sparkles className="size-3.5 text-brand-orange-500" />
              <span className="uppercase tracking-[0.14em]">Plataforma de gestão equina</span>
            </div>

            <h1 className="mt-7 font-display text-[44px] leading-[1.04] sm:text-6xl lg:text-7xl text-balance">
              Excelência genética, <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-orange-500 via-brand-orange-600 to-brand-brown-600 bg-clip-text text-transparent">
                  bem-estar
                </span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 lg:h-4 bg-brand-orange-200/60 -z-0 rounded-sm"
                />
              </span>{' '}
              e resultado.
            </h1>

            <p className="mt-7 max-w-xl text-lg lg:text-xl text-ink-soft text-pretty leading-relaxed">
              O HS Manager unifica manejo, reprodução, sanidade, nutrição e finanças do seu haras
              em um único método — para você produzir, treinar e comercializar com
              previsibilidade.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up delay-200">
              <Button asLink href="#demo" variant="primary" size="lg">
                Solicitar demonstração
                <ArrowRight className="size-4" />
              </Button>
              <Button asLink href="#plataforma" variant="outline" size="lg">
                Conhecer a plataforma
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg animate-fade-up delay-300">
              {[
                { v: '+80%', l: 'Taxa de prenhez almejada' },
                { v: '<2%', l: 'Meta de mortalidade' },
                { v: '100%', l: 'Cobertura sanitária' },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-brand-orange-400/60 pl-4">
                  <dt className="font-display text-3xl font-semibold text-brand-brown-700">
                    {s.v}
                  </dt>
                  <dd className="mt-1 text-xs text-ink-muted leading-snug">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Visual card */}
          <div className="lg:col-span-5 animate-fade-up delay-200">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative">
      {/* Floating logo badge */}
      <div className="absolute -top-6 -right-4 z-20 size-24 rounded-3xl bg-cream-50 shadow-soft ring-1 ring-line/60 p-3 animate-float-slow">
        <img src="/logo.svg" alt="" className="size-full" />
      </div>

      {/* Main card */}
      <div className="relative rounded-3xl bg-gradient-to-br from-brand-brown-700 via-brand-brown-600 to-brand-brown-800 p-1 shadow-[0_30px_80px_-30px_rgba(101,38,33,0.55)]">
        <div className="relative rounded-[22px] bg-gradient-to-br from-brand-brown-600 to-brand-brown-800 overflow-hidden p-8">
          {/* Noise + radial */}
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" aria-hidden />
          <div
            aria-hidden
            className="absolute -top-20 -right-20 size-64 rounded-full bg-brand-orange-500/40 blur-3xl"
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-orange-200/80">
                  Painel de controle
                </p>
                <p className="mt-1 font-display text-xl text-cream-50">Visão geral · Maio</p>
              </div>
              <span className="rounded-full bg-brand-orange-500/20 text-brand-orange-100 border border-brand-orange-400/30 px-3 py-1 text-[11px] font-medium">
                Ao vivo
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { l: 'Plantel ativo', v: '184', sub: '+ 12 este mês' },
                { l: 'Prenhez', v: '82%', sub: 'meta atingida' },
                { l: 'Vacinação', v: '100%', sub: 'em dia' },
                { l: 'Custo/animal', v: 'R$ 2.1k', sub: '-4% vs mês ant.' },
              ].map((m) => (
                <div
                  key={m.l}
                  className="rounded-xl bg-cream-50/8 border border-cream-50/12 backdrop-blur-sm p-4"
                >
                  <p className="text-[11px] uppercase tracking-wider text-cream-200/70">{m.l}</p>
                  <p className="mt-1 font-display text-2xl text-cream-50">{m.v}</p>
                  <p className="mt-0.5 text-[11px] text-brand-orange-200/80">{m.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl bg-cream-50/8 border border-cream-50/12 p-4">
              <div className="flex items-center justify-between text-[11px] text-cream-200/70 uppercase tracking-wider">
                <span>Ciclo reprodutivo</span>
                <span>Q2 · 2026</span>
              </div>
              <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-cream-50/10">
                <div className="bg-brand-orange-400" style={{ width: '46%' }} />
                <div className="bg-brand-orange-300/80" style={{ width: '22%' }} />
                <div className="bg-cream-200/40" style={{ width: '14%' }} />
              </div>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-cream-200/80">
                <Legend color="bg-brand-orange-400" label="Prenhas · 46%" />
                <Legend color="bg-brand-orange-300/80" label="Cobertas · 22%" />
                <Legend color="bg-cream-200/40" label="Em cio · 14%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge bottom */}
      <div className="absolute -bottom-5 -left-4 z-20 rounded-2xl bg-cream-50 shadow-soft ring-1 ring-line/60 px-4 py-3 flex items-center gap-3 animate-float-slow [animation-delay:1.5s]">
        <span className="flex size-9 items-center justify-center rounded-xl bg-brand-orange-100 text-brand-orange-600">
          <Sparkles className="size-4" />
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-ink-muted">POP automatizado</p>
          <p className="text-sm font-medium text-brand-brown-700">Parto registrado</p>
        </div>
      </div>
    </div>
  )
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`size-2 rounded-full ${color}`} />
      {label}
    </span>
  )
}
