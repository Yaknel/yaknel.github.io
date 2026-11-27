import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { NewsletterSection, PageHeading, WritingSections } from '@/features/sections'

export default function WritingPage() {
  return (
    <>
      <Seo title={site.writing.title} description={site.writing.lead} />
      <PageHeading id="writing-title" title={site.writing.title} lead={site.writing.lead} />
      <WritingSections />
      <NewsletterSection />
    </>
  )
}
