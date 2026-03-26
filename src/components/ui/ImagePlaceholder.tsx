import { ImageIcon } from 'lucide-react'

interface ImagePlaceholderProps {
  label?: string
  className?: string
}

export function ImagePlaceholder({ label = 'Product image', className = '' }: ImagePlaceholderProps) {
  return (
    <div className={`flex flex-col items-center justify-center rounded-2xl bg-dark-surface border border-dark-card-border aspect-[4/3] glow-ring ${className}`}>
      <ImageIcon className="h-12 w-12 text-accent/40 mb-3" />
      <span className="text-sm text-text-muted font-medium">{label}</span>
    </div>
  )
}
