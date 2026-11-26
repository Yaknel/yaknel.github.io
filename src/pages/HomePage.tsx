import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import {
  AboutSection,
  ContactSection,
  GallerySection,
  HeroSection,
  NewsletterSection,
  OfferingsSection,
  ShopSection,
} from '@/features/sections'

/** Portada: cada sección en su franja de color. La poética de la historia vive en /tienda. */
export default function HomePage() {
  return (
    <>
      <Seo description={site.hero.lead} />
      <HeroSection />
      <NewsletterSection />
      <OfferingsSection kind="taller" />
      <GallerySection />
      <ShopSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
