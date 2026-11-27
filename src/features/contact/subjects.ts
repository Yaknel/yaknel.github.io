import { products } from '@/content/products'
import { offerings } from '@/content/workshops'

export const GENERAL_SUBJECT = 'General enquiry'

const subjectsById: Array<{ id: string; title: string }> = [
  { id: 'editorial', title: '1:1 editorial service' },
  { id: 'colaboracion', title: 'Creative collaboration' },
  { id: 'speaking', title: 'Public speaking / MC' },
  ...offerings.map(({ id, title }) => ({ id, title: `Workshop: ${title}` })),
  ...products.map(({ id, title }) => ({ id, title: `Shop: ${title}` })),
]

export const subjectOptions = [GENERAL_SUBJECT, ...subjectsById.map((s) => s.title), 'Press']

/** Convierte "?asunto=cronica-de-un-si" en el asunto correspondiente del desplegable. */
export function subjectFromSlug(slug: string | null): string {
  if (!slug) return GENERAL_SUBJECT
  return subjectsById.find((s) => s.id === slug || s.id.startsWith(slug))?.title ?? GENERAL_SUBJECT
}
