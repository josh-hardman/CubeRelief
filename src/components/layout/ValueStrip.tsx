import { VALUE_STRIP_ITEMS } from '../../lib/constants'

export function ValueStrip() {
  return (
    <div className="sticky top-0 z-50 bg-dark-base/80 backdrop-blur-md border-b border-dark-card-border">
      <div className="mx-auto max-w-6xl px-4 py-2.5 flex items-center justify-between">
        <img src="/images/logo.png" alt="Cube Relief" className="h-7 sm:h-8" />
        <nav className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium tracking-wide text-text-muted">
          {VALUE_STRIP_ITEMS.map((item, i) => (
            <span key={item.label} className="hidden sm:flex items-center gap-4 sm:gap-8">
              {i > 0 && <span className="text-accent/30">|</span>}
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="whitespace-nowrap hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            </span>
          ))}
        </nav>
      </div>
    </div>
  )
}
