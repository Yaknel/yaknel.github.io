import { config } from '@/lib/config'

export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
  /** Campo trampa anti-spam: los humanos no lo ven ni lo rellenan. */
  website: string
}

export class ContactNotConfiguredError extends Error {
  constructor() {
    super('Falta VITE_FORMSPREE_ID')
    this.name = 'ContactNotConfiguredError'
  }
}

/** Envía el mensaje a Formspree, que lo reenvía a tu correo sin exponerlo en la web. */
export async function sendContactMessage(
  data: ContactMessage,
  fetchImpl: typeof fetch = fetch,
): Promise<void> {
  if (data.website) return // bot: fingimos éxito y no enviamos nada
  if (!config.formspreeId) throw new ContactNotConfiguredError()

  const res = await fetchImpl(`https://formspree.io/f/${config.formspreeId}`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      _subject: `[yaknel.com] ${data.subject}`,
      _replyto: data.email,
      message: data.message,
    }),
  })

  if (!res.ok) throw new Error(`Formspree respondió ${res.status}`)
}
