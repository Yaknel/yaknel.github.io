import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { NewsletterSection, OfferingsSection } from '@/features/sections'

export default function SubscribePage() {
  return (
    <>
      <Seo title="Suscríbete" description={site.newsletter.lead} />
      <NewsletterSection asPage />
      <OfferingsSection kind="taller" />
    </>
  )
}
