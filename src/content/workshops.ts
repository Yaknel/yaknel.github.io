/**
 * Talleres y libros personalizados. Añade, quita o edita entradas: la web se actualiza sola.
 * - `kind: 'taller'` aparece en la franja Talleres; `kind: 'poetica'` en La poética de la historia.
 * - `dates` en formato ISO (AAAA-MM-DD); las fechas pasadas se ocultan automáticamente.
 * - `cta.href` puede ser un enlace de pago, de inscripción o "/contact?asunto=<id>".
 */
export type OfferingKind = 'taller' | 'poetica'

export interface Offering {
  id: string
  kind: OfferingKind
  title: string
  summary: string
  format: string
  price?: string
  dates?: string[]
  cta: { label: string; href: string }
}

export const offerings: Offering[] = [
  {
    id: 'taller-mensual-online',
    kind: 'taller',
    title: 'Taller mensual de escritura somática',
    summary:
      'Un encuentro al mes, unido por un hilo conductor, para escribir desde la cuerpa: atención, respiración, memoria y palabra.',
    format: 'Online · Zoom · en español',
    dates: ['2026-11-29', '2026-12-27'],
    cta: { label: 'Quiero participar', href: '/contact?asunto=taller-mensual' },
  },
  {
    id: 'poetry-project',
    kind: 'taller',
    title: 'The Poetry Project Berlin',
    summary: 'Talleres semanales de escritura creativa y somática en español.',
    format: 'Presencial · Berlín',
    cta: { label: 'Más información', href: '/contact?asunto=poetry-project' },
  },
  {
    id: 'cronica-de-un-si',
    kind: 'poetica',
    title: 'Crónica de un Sí',
    summary: 'Un libro que narra vuestra historia de amor, como regalo de compromiso.',
    format: 'Libro impreso personalizado',
    cta: { label: 'Pedir información', href: '/contact?asunto=cronica-de-un-si' },
  },
  {
    id: 'lo-que-quedo-dicho',
    kind: 'poetica',
    title: 'Lo que Quedó Dicho',
    summary: 'Un recuerdo después de la boda tejido con los mensajes de vuestras invitadas.',
    format: 'Libro impreso personalizado',
    cta: { label: 'Pedir información', href: '/contact?asunto=lo-que-quedo-dicho' },
  },
  {
    id: 'tus-propios-votos',
    kind: 'poetica',
    title: 'Tus Propios Votos',
    summary: 'Acompañamiento personalizado para que escribáis vuestros propios votos.',
    format: 'Acompañamiento 1:1',
    cta: { label: 'Pedir información', href: '/contact?asunto=tus-propios-votos' },
  },
]
