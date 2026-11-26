import { createTheme, type MantineColorsTuple } from '@mantine/core'

/**
 * Paleta Hilma af Klint de yaknel.com. Cambia aquí un HEX y se actualiza toda la web:
 * las 10 tonalidades que Mantine necesita se generan solas.
 */
export const palette = {
  // Tonos suavizados (un punto menos de saturación) de la paleta de yaknel.com.
  // Originales: morado #4b2a86, lila #b38db0, rosa #b87276, mostaza #c9b82a,
  // verde #3d8b72, bosque #173f3a, azul #53748b, noche #14233f.
  morado: '#5f478b',
  lila: '#b6a1b4',
  rosa: '#b28b8d',
  mostaza: '#b7ad56',
  verde: '#588f7e',
  bosque: '#2f5450',
  azul: '#5f7686',
  noche: '#2b3a55',
  tinta: '#33333a',
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
  primaryColor: 'morado',
  primaryShade: 6,
  autoContrast: true,
  luminanceThreshold: 0.35,
  colors: {
    morado: shades(palette.morado),
    lila: shades(palette.lila),
    rosa: shades(palette.rosa),
    mostaza: shades(palette.mostaza),
    verde: shades(palette.verde),
    bosque: shades(palette.bosque),
    azul: shades(palette.azul),
    noche: shades(palette.noche),
  },
  black: palette.tinta,
  fontFamily: '"Square Sans", "Trebuchet MS", Verdana, sans-serif',
  headings: {
    fontFamily: '"Micky", Georgia, serif',
    fontWeight: '400',
    sizes: {
      h1: { fontSize: 'clamp(2rem, 4.5vw, 3.3rem)', lineHeight: '1.1' },
      h2: { fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: '1.2' },
      h3: { fontSize: '1.3rem', lineHeight: '1.25' },
    },
  },
  fontSizes: { md: '1.05rem', lg: '1.2rem' },
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
