/** Formas decorativas inspiradas en Hilma af Klint (círculos, semicírculos, espiral). */
interface KlintShapesProps {
  variant?: 'hero' | 'corner'
  className?: string
}

const c = (shade: string) => `var(--mantine-color-${shade})`

export function KlintShapes({ variant = 'hero', className }: KlintShapesProps) {
  if (variant === 'corner') {
    return (
      <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
        <circle cx="100" cy="100" r="90" fill={c('mostaza-6')} />
        <path d="M10 100 A90 90 0 0 1 190 100 Z" fill={c('rosa-6')} />
        <circle cx="100" cy="100" r="34" fill={c('lila-6')} />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" focusable="false">
      <circle cx="200" cy="200" r="190" fill={c('rosa-6')} />
      <path d="M10 200 A190 190 0 0 0 390 200 Z" fill={c('mostaza-6')} />
      <circle cx="200" cy="200" r="120" fill={c('morado-6')} />
      <path d="M80 200 A120 120 0 0 1 320 200 Z" fill={c('lila-6')} />
      <circle cx="200" cy="200" r="56" fill={c('azul-6')} />
      <path
        d="M200 200 m0 -40 a40 40 0 1 1 -28 68 a28 28 0 1 1 20 -46 a16 16 0 1 1 -10 26"
        fill="none"
        stroke={c('mostaza-6')}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="335" cy="64" r="26" fill={c('verde-6')} />
      <circle cx="60" cy="342" r="16" fill={c('lila-3')} />
    </svg>
  )
}
