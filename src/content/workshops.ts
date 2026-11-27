/**
 * Talleres y libros personalizados. Añade, quita o edita entradas: la web se actualiza sola.
 * - `kind: 'taller'` aparece en la franja Talleres; `kind: 'poetica'` en La poética de la historia.
 * - `dates` en formato ISO (AAAA-MM-DD); las fechas pasadas se ocultan automáticamente.
 * - `cta.href` puede ser un enlace de pago, de inscripción o "/contacto?asunto=<id>".
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
      'Un encuentro al mes, cada vez con un tema diferente, para escribir desde la cuerpa: atención, respiración, memoria y palabra. 65 € por taller.',
    format: 'Online · Zoom · último domingo del mes · 65 €',
    dates: ['2027-01-31'],
    cta: { label: 'Ver el taller', href: '/taller/escritura-somatica' },
  },
  {
    id: 'poetry-project',
    kind: 'taller',
    title: 'The Poetry Project Berlin',
    summary: 'Talleres semanales de escritura creativa y somática en español.',
    format: 'Presencial · Berlín',
    cta: { label: 'Más información', href: '/contacto?asunto=poetry-project' },
  },
  {
    id: 'cronica-de-un-si',
    kind: 'poetica',
    title: 'Crónica de un Sí',
    summary: 'Un libro que narra vuestra historia de amor, como regalo de compromiso.',
    format: 'Libro impreso personalizado',
    cta: { label: 'Pedir información', href: '/contacto?asunto=cronica-de-un-si' },
  },
  {
    id: 'lo-que-quedo-dicho',
    kind: 'poetica',
    title: 'Lo que Quedó Dicho',
    summary: 'Un recuerdo después de la boda tejido con los mensajes de vuestras invitadas.',
    format: 'Libro impreso personalizado',
    cta: { label: 'Pedir información', href: '/contacto?asunto=lo-que-quedo-dicho' },
  },
  {
    id: 'tus-propios-votos',
    kind: 'poetica',
    title: 'Tus Propios Votos',
    summary: 'Acompañamiento personalizado para que escribáis vuestros propios votos.',
    format: 'Acompañamiento 1:1',
    cta: { label: 'Pedir información', href: '/contacto?asunto=tus-propios-votos' },
  },
]
