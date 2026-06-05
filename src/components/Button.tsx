import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

const button = cva(
  'inline-flex items-center justify-center gap-2 font-medium tracking-tight whitespace-nowrap rounded-full transition-all duration-300 ease-[var(--ease-smooth)] focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-orange-500 text-cream-50 shadow-[0_8px_24px_-8px_rgba(217,99,51,0.55)] hover:bg-brand-orange-600 hover:shadow-[0_12px_30px_-8px_rgba(217,99,51,0.65)] hover:-translate-y-0.5 active:translate-y-0',
        secondary:
          'bg-brand-brown-600 text-cream-50 shadow-[0_8px_24px_-8px_rgba(101,38,33,0.45)] hover:bg-brand-brown-700 hover:-translate-y-0.5 active:translate-y-0',
        ghost:
          'bg-transparent text-brand-brown-700 hover:bg-brand-brown-50 border border-brand-brown-200/60',
        outline:
          'bg-cream-50/60 text-brand-brown-700 border border-brand-brown-300/60 hover:bg-cream-100 hover:border-brand-brown-400',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-[15px]',
        lg: 'h-13 px-8 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & { asLink?: false }

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof button> & { asLink: true }

type Props = ButtonProps | AnchorProps

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ variant, size, className, ...props }, ref) => {
    if ((props as AnchorProps).asLink) {
      const { asLink: _asLink, ...rest } = props as AnchorProps
      void _asLink
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(button({ variant, size }), className)}
          {...rest}
        />
      )
    }
    const { asLink: _a, ...rest } = props as ButtonProps
    void _a
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(button({ variant, size }), className)}
        {...rest}
      />
    )
  }
)
Button.displayName = 'Button'
