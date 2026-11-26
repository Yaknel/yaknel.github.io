import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import { NewsletterSection, OfferingsSection, ShopSection } from '@/features/sections'

export default function ShopPage() {
  return (
    <>
      <Seo title={site.shop.title} description={site.shop.lead} />
      <ShopSection asPage />
      <OfferingsSection kind="poetica" />
      <NewsletterSection />
    </>
  )
}
