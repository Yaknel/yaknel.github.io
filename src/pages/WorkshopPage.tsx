import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { NewsletterSection, WorkshopSections } from '@/features/sections'

export default function WorkshopPage() {
  return (
    <>
      <Seo title="Workshop" description={site.workshop.lead} />
      <WorkshopSections />
      <NewsletterSection />
    </>
  )
}
