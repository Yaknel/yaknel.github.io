import { useSearchParams } from 'react-router'
import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { subjectFromSlug } from '@/features/contact/subjects'
import { ContactSection, NewsletterSection } from '@/features/sections'

/** Formulario de contacto y, debajo, la invitación a suscribirse a la newsletter. */
export default function ContactPage() {
  const [params] = useSearchParams()
  return (
    <>
      <Seo title={site.contact.title} description={site.contact.lead} />
      <ContactSection subject={subjectFromSlug(params.get('asunto'))} />
      <NewsletterSection />
    </>
  )
}
