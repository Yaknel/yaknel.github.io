import { Seo } from '@/components/ui/Seo'
import { site } from '@/content/site'
import {
  AboutSection,
  ContactSection,
  HeroSection,
  NewsletterSection,
  OfferingsSection,
  ShopSection,
} from '@/features/sections'

/** Portada: todas las secciones encadenadas, cada una en su franja de color. */
export default function HomePage() {
  return (
    <>
      <Seo description={site.hero.lead} />
      <HeroSection />
      <NewsletterSection />
      <OfferingsSection kind="taller" />
      <OfferingsSection kind="poetica" />
      <ShopSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
