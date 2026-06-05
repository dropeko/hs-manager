import { cn } from '@/lib/cn'

type Props = {
  className?: string
  withWordmark?: boolean
  variant?: 'default' | 'light'
}

export function Logo({ className, withWordmark = true, variant = 'default' }: Props) {
  const textColor = variant === 'light' ? 'text-cream-50' : 'text-brand-brown-600'
  const subColor = variant === 'light' ? 'text-cream-200/80' : 'text-ink-muted'

  return (
    <a
      href="/"
      aria-label="HS Manager — Página inicial"
      className={cn('inline-flex items-center gap-3 group', className)}
    >
      <span className="relative inline-block">
        <img
          src="/logo.svg"
          alt=""
          width={40}
          height={40}
          className="size-10 drop-shadow-[0_2px_8px_rgba(101,38,33,0.25)] transition-transform duration-500 group-hover:rotate-[8deg]"
        />
      </span>
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className={cn('font-display text-xl font-semibold tracking-tight', textColor)}>
            HS Manager
          </span>
          <span className={cn('text-[10px] font-medium uppercase tracking-[0.18em]', subColor)}>
            Gestão equina
          </span>
        </span>
      )}
    </a>
  )
}
