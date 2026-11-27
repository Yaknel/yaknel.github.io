import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { NewsletterSection } from '@/features/sections'

export default function SubscribePage() {
  return (
    <>
      <Seo title={site.newsletter.title} description={site.newsletter.lead} />
      <NewsletterSection />
    </>
  )
}
