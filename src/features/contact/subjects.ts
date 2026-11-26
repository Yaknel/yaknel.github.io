import { products } from '@/content/products'
import { offerings } from '@/content/workshops'

export const GENERAL_SUBJECT = 'Consulta general'

const subjectsById: Array<{ id: string; title: string }> = [
  ...offerings.map(({ id, title }) => ({ id, title })),
  ...products.map(({ id, title }) => ({ id, title: `Tienda: ${title}` })),
]

export const subjectOptions = [
  GENERAL_SUBJECT,
  ...subjectsById.map((s) => s.title),
  'Colaboraciones y prensa',
]

/** Convierte "?asunto=cronica-de-un-si" en el asunto correspondiente del desplegable. */
export function subjectFromSlug(slug: string | null): string {
  if (!slug) return GENERAL_SUBJECT
  return subjectsById.find((s) => s.id === slug || s.id.startsWith(slug))?.title ?? GENERAL_SUBJECT
}
