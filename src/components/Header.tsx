import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { Button } from './Button'
import { Container } from './Container'
import { cn } from '@/lib/cn'

const NAV = [
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Áreas de gestão', href: '#areas' },
  { label: 'Indicadores', href: '#indicadores' },
  { label: 'Método', href: '#metodo' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-cream-50/85 backdrop-blur-xl border-b border-line/60 shadow-soft'
          : 'bg-transparent'
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-ink-soft hover:text-brand-brown-700 transition-colors group"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px bg-brand-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asLink href="#contato" variant="ghost" size="sm">
            Entrar
          </Button>
          <Button asLink href="#demo" variant="primary" size="sm">
            Solicitar demonstração
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex size-10 items-center justify-center rounded-full text-brand-brown-700 hover:bg-brand-brown-50 transition-colors"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <div
        className={cn(
          'lg:hidden overflow-hidden transition-[max-height,opacity] duration-500',
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <Container className="pb-6">
          <nav className="flex flex-col gap-1 rounded-2xl bg-cream-50/90 backdrop-blur-xl border border-line/60 p-3 shadow-soft">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-[15px] font-medium text-ink-soft hover:bg-brand-brown-50 hover:text-brand-brown-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <Button asLink href="#contato" variant="ghost" size="sm" className="flex-1">
                Entrar
              </Button>
              <Button asLink href="#demo" variant="primary" size="sm" className="flex-1">
                Demonstração
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  )
}
