import { createTheme, type MantineColorsTuple } from '@mantine/core'

/**
 * Paleta Hilma af Klint de yaknel.com. Cambia aquí un HEX y se actualiza toda la web:
 * las 10 tonalidades que Mantine necesita se generan solas.
 */
export const palette = {
  // Paleta C001 (coolors.co), noviembre 2026
  azul: '#59758b',
  verde: '#578874',
  rosa: '#ae787c',
  mostaza: '#c8b439',
  lila: '#ac92ac',
  // Tinta para textos: azul al -50 % de la misma paleta
  tinta: '#2d3b46',
} as const

function hexToRgb(hex: string): [number, number, number] {
  const n = Number.parseInt(hex.slice(1), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

function mix(hex: string, target: [number, number, number], amount: number): string {
  const rgb = hexToRgb(hex)
  const out = rgb.map((c, i) => Math.round(c + ((target[i] ?? c) - c) * amount))
  return `#${out.map((c) => c.toString(16).padStart(2, '0')).join('')}`
}

/** Genera la escala 0–9 de Mantine con el color base en la posición 6. */
export function shades(base: string): MantineColorsTuple {
  const white: [number, number, number] = [255, 255, 255]
  const black: [number, number, number] = [0, 0, 0]
  return [
    mix(base, white, 0.9),
    mix(base, white, 0.78),
    mix(base, white, 0.62),
    mix(base, white, 0.45),
    mix(base, white, 0.3),
    mix(base, white, 0.15),
    base,
    mix(base, black, 0.15),
    mix(base, black, 0.3),
    mix(base, black, 0.45),
  ]
}

export const theme = createTheme({
  primaryColor: 'verde',
  primaryShade: 6,
  autoContrast: true,
  luminanceThreshold: 0.35,
  colors: {
    azul: shades(palette.azul),
    verde: shades(palette.verde),
    rosa: shades(palette.rosa),
    mostaza: shades(palette.mostaza),
    lila: shades(palette.lila),
    tinta: shades(palette.tinta),
  },
  black: palette.tinta,
  // Textos en Alegreya Sans, como en yaknel.com; títulos en Micky
  fontFamily: '"Alegreya Sans", "Trebuchet MS", Verdana, sans-serif',
  headings: {
    fontFamily: '"Micky", Georgia, serif',
    fontWeight: '400',
    sizes: {
      h1: { fontSize: 'clamp(2.1rem, 4.2vw, 3.2rem)', lineHeight: '1.1' },
      h2: { fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', lineHeight: '1.15' },
      h3: { fontSize: '1.3rem', lineHeight: '1.25' },
    },
  },
  fontSizes: { sm: '0.95rem', md: '1.1rem', lg: '1.25rem' },
  defaultRadius: 0,
  cursorType: 'pointer',
  respectReducedMotion: true,
  components: {
    Button: { defaultProps: { radius: 0, size: 'md' } },
    TextInput: { defaultProps: { radius: 0, size: 'md' } },
    Textarea: { defaultProps: { radius: 0, size: 'md' } },
    Select: { defaultProps: { radius: 0, size: 'md' } },
    Container: { defaultProps: { size: 'lg' } },
  },
})
