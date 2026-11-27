/** Colores de bloque disponibles (paleta C001). Cada uno define texto, título y botón con buen contraste. */
export type BandTone = 'azul' | 'verde' | 'rosa' | 'mostaza' | 'lila' | 'blanco'

/** Tonos oscuros: el texto va en blanco. */
export const darkTones: BandTone[] = ['azul', 'verde', 'rosa']

/** Color del botón principal sobre cada bloque. */
export const bandAccent: Record<BandTone, string> = {
  azul: 'mostaza',
  verde: 'mostaza',
  rosa: 'tinta',
  mostaza: 'verde',
  lila: 'tinta',
  blanco: 'lila',
}
