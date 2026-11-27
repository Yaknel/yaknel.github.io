import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { HeroSection, HomeOverview, NewsletterSection } from '@/features/sections'

/** Landing: explica tu trabajo y lleva a cada apartado. */
export default function HomePage() {
  return (
    <>
      <Seo description={site.hero.lead} />
      <HeroSection />
      <HomeOverview />
      <NewsletterSection />
    </>
  )
}
