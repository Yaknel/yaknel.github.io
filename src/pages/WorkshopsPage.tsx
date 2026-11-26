import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { NewsletterSection, OfferingsSection } from '@/features/sections'

export default function WorkshopsPage() {
  return (
    <>
      <Seo title={site.workshops.title} description={site.workshops.lead} />
      <OfferingsSection kind="taller" asPage />
      <OfferingsSection kind="poetica" />
      <NewsletterSection />
    </>
  )
}
