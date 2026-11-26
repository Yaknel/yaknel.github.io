import { config } from '@/lib/config'
import { site } from '@/content/site'

/**
 * Formulario oficial de Substack: las suscriptoras van directas a tu lista, sin backend propio.
 */
export function SubscribeEmbed() {
  return (
    <iframe
      src={`${config.substackUrl}/embed`}
      title={`Suscríbete a ${site.newsletter.title}`}
      width="100%"
      height="150"
      loading="lazy"
      style={{ display: 'block', maxWidth: 480, border: 0, background: 'white' }}
    />
  )
}
