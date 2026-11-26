import { useSearchParams } from 'react-router'
import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { subjectFromSlug } from '@/features/contact/subjects'
import { ContactSection } from '@/features/sections'

export default function ContactPage() {
  const [params] = useSearchParams()
  return (
    <>
      <Seo title={site.contact.title} description={site.contact.lead} />
      <ContactSection asPage subject={subjectFromSlug(params.get('asunto'))} />
    </>
  )
}
