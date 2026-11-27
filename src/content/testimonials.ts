/**
 * Testimonios. Añade aquí las palabras reales de tus alumnas y clientas (con su permiso).
 * Mientras una lista esté vacía, su apartado no se muestra en la web.
 *
 * Ejemplo:
 *   { quote: 'Texto del testimonio…', name: 'Nombre', role: 'Taller de escritura somática, 2026' },
 */
export interface Testimonial {
  quote: string
  name: string
  role?: string
}

export const testimonials: { workshop: Testimonial[]; workWithMe: Testimonial[] } = {
  workshop: [],
  workWithMe: [],
}
