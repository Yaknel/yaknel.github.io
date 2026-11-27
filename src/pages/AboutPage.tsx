import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { AboutSections, NewsletterSection } from '@/features/sections'

export default function AboutPage() {
  return (
    <>
      <Seo title={site.about.title} description={site.about.story} />
      <AboutSections />
      <NewsletterSection />
    </>
  )
}
