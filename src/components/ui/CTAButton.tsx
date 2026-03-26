import { MAILTO_LINK } from '../../lib/constants'

interface CTAButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function CTAButton({ label, variant = 'primary', className = '' }: CTAButtonProps) {
  const base = 'inline-block rounded-lg px-8 py-3.5 font-semibold text-base cursor-pointer text-center'
  const variants = {
    primary: 'btn-glow text-white',
    secondary: 'btn-outline text-white',
  }

  return (
    <a href={MAILTO_LINK} className={`${base} ${variants[variant]} ${className}`}>
      {label}
    </a>
  )
}
