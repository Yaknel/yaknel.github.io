import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { AboutSection, NewsletterSection } from '@/features/sections'

export default function AboutPage() {
  return (
    <>
      <Seo title="Sobre mí" description={site.about.intro} />
      <AboutSection asPage />
      <NewsletterSection />
    </>
  )
}
