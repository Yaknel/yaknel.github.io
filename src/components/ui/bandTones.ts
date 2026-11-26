/** Colores de franja disponibles. Cada uno define su color de texto y de botones con buen contraste. */
export type BandTone =
  'morado' | 'lila' | 'rosa' | 'mostaza' | 'bosque' | 'azul' | 'noche' | 'blanco'

export const darkTones: BandTone[] = ['morado', 'bosque', 'azul', 'noche']

/** Color de botón principal que contrasta con cada franja. */
export const bandAccent: Record<BandTone, string> = {
  morado: 'mostaza',
  lila: 'morado',
  rosa: 'noche',
  mostaza: 'morado',
  bosque: 'mostaza',
  azul: 'mostaza',
  noche: 'mostaza',
  blanco: 'morado',
}
