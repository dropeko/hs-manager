import { Logo } from '@/components/Logo'
import { Container } from '@/components/Container'

const COLUMNS = [
  {
    title: 'Plataforma',
    links: [
      { l: 'Gestão Animal', h: '#areas' },
      { l: 'Reprodução', h: '#areas' },
      { l: 'Sanidade', h: '#areas' },
      { l: 'Financeiro', h: '#areas' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { l: 'Indicadores', h: '#indicadores' },
      { l: 'Método de gestão', h: '#metodo' },
      { l: 'Protocolos POP', h: '#plataforma' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { l: 'Sobre', h: '#plataforma' },
      { l: 'Contato', h: '#contato' },
      { l: 'Privacidade', h: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer
      id="contato"
      className="relative mt-10 border-t border-line/70 bg-cream-100/40 backdrop-blur-sm"
    >
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-[15px] text-ink-soft leading-relaxed">
              Plataforma de gestão para haras que buscam excelência genética, bem-estar animal e
              sustentabilidade financeira.
            </p>

            <form
              className="mt-7 flex max-w-md gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Receber novidades"
            >
              <input
                type="email"
                required
                placeholder="seu@email.com"
                className="flex-1 rounded-full border border-line bg-cream-50 px-5 py-3 text-sm text-ink placeholder:text-ink-muted/70 focus:border-brand-orange-400 focus:outline-none focus:ring-4 focus:ring-brand-orange-200/40 transition-all"
              />
              <button
                type="submit"
                className="rounded-full bg-brand-brown-700 text-cream-50 px-5 py-3 text-sm font-medium hover:bg-brand-brown-800 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm uppercase tracking-[0.14em] text-brand-brown-700">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.l}>
                      <a
                        href={link.h}
                        className="text-sm text-ink-soft hover:text-brand-orange-600 transition-colors"
                      >
                        {link.l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} HS Manager. Todos os direitos reservados.
          </p>
          <p className="text-xs text-ink-muted">
            Feito com cuidado para haras que produzem com excelência.
          </p>
        </div>
      </Container>
    </footer>
  )
}
