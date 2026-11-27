import { products } from '@/content/products'
import { offerings } from '@/content/workshops'

export const GENERAL_SUBJECT = 'Consulta general'

const subjectsById: Array<{ id: string; title: string }> = [
  { id: 'editorial', title: 'Acompañamiento editorial 1:1' },
  { id: 'colaboracion', title: 'Colaboración creativa' },
  { id: 'charlas', title: 'Charlas y presentaciones' },
  ...offerings.map(({ id, title }) => ({ id, title: `Taller: ${title}` })),
  ...products.map(({ id, title }) => ({ id, title: `Tienda: ${title}` })),
]

export const subjectOptions = [GENERAL_SUBJECT, ...subjectsById.map((s) => s.title), 'Prensa']

/** Convierte "?asunto=cronica-de-un-si" en el asunto correspondiente del desplegable. */
export function subjectFromSlug(slug: string | null): string {
  if (!slug) return GENERAL_SUBJECT
  return subjectsById.find((s) => s.id === slug || s.id.startsWith(slug))?.title ?? GENERAL_SUBJECT
}
