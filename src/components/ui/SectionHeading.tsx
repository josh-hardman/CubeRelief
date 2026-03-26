interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  shimmer?: boolean
}

export function SectionHeading({ label, title, subtitle, align = 'center', shimmer = false }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${alignment} mb-12`}>
      {label && (
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-4">
          {label}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${shimmer ? 'text-shimmer' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg max-w-3xl ${align === 'center' ? 'mx-auto' : ''} text-text-muted`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
