/**
 * Secciones de la web. Cada una es una franja con su propio color de fondo.
 * La portada las encadena todas; cada página interna usa la suya con título <h1>.
 */
import { Box, Button, Grid, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router'
import { Band } from '@/components/ui/Band'
import { bandAccent, type BandTone } from '@/components/ui/bandTones'
import { KlintShapes } from '@/components/ui/KlintShapes'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { products } from '@/content/products'
import { site } from '@/content/site'
import { offerings, type OfferingKind } from '@/content/workshops'
import { ContactForm } from '@/features/contact/ContactForm'
import { SubscribeEmbed } from '@/features/newsletter/SubscribeEmbed'
import { ProductList } from '@/features/shop/ProductList'
import { OfferingList } from '@/features/workshops/OfferingList'
import classes from './sections.module.css'

interface SectionProps {
  /** true en páginas internas: el título pasa a ser <h1>. */
  asPage?: boolean
}

const level = (asPage?: boolean) => (asPage ? 1 : 2)

export function HeroSection() {
  return (
    <Band tone="morado" labelledBy="hero-title">
      <Grid align="center" gap={{ base: 40, md: 64 }}>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack gap="lg">
            <Text tt="uppercase" fw={700} c="mostaza.6" style={{ letterSpacing: '0.14em' }}>
              {site.fullName} · {site.tagline}
            </Text>
            <Title id="hero-title" order={1} c="white">
              {site.hero.title}
            </Title>
            <Text size="xl">{site.hero.lead}</Text>
            <Box>
              <Button component={Link} to="/suscribete" size="lg" color="mostaza" mr="sm" mb="sm">
                Suscríbete a Sigo Aquí
              </Button>
              <Button
                component={Link}
                to="/talleres"
                size="lg"
                variant="outline"
                color="white"
                mb="sm"
              >
                Ver talleres
              </Button>
            </Box>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <KlintShapes className={classes.heroShapes} />
        </Grid.Col>
      </Grid>
    </Band>
  )
}

export function NewsletterSection({ asPage }: SectionProps) {
  return (
    <Band tone="rosa" id="suscribirse" labelledBy="newsletter-title" size="md">
      <Stack align="center" ta="center" gap="lg">
        <SectionTitle id="newsletter-title" order={level(asPage)} title={site.newsletter.title} />
        <Text size="lg" maw={560}>
          {site.newsletter.lead}
        </Text>
        <SubscribeEmbed />
      </Stack>
    </Band>
  )
}

const offeringBands: Record<
  OfferingKind,
  { tone: BandTone; copy: { title: string; lead: string } }
> = {
  taller: { tone: 'lila', copy: site.workshops },
  poetica: { tone: 'mostaza', copy: site.poetica },
}

export function OfferingsSection({ kind, asPage }: SectionProps & { kind: OfferingKind }) {
  const { tone, copy } = offeringBands[kind]
  const items = offerings.filter((o) => o.kind === kind)
  if (items.length === 0) return null
  return (
    <Band tone={tone} id={kind === 'taller' ? 'talleres' : 'poetica'} labelledBy={`${kind}-title`}>
      <SectionTitle
        id={`${kind}-title`}
        order={level(asPage)}
        title={copy.title}
        lead={copy.lead}
      />
      <OfferingList items={items} buttonColor={bandAccent[tone]} />
    </Band>
  )
}

export function ShopSection({ asPage }: SectionProps) {
  return (
    <Band tone="bosque" id="tienda" labelledBy="tienda-title">
      <SectionTitle
        id="tienda-title"
        order={level(asPage)}
        title={site.shop.title}
        lead={site.shop.lead}
      />
      <ProductList items={products} buttonColor={bandAccent.bosque} />
    </Band>
  )
}

export function AboutSection({ asPage }: SectionProps) {
  return (
    <>
      <Band tone="azul" id="sobre-mi" labelledBy="about-title" size="md">
        <Stack align="center" ta="center" gap="lg">
          <SectionTitle id="about-title" order={level(asPage)} title={site.motto} />
          <Text size="lg" maw={680}>
            {site.about.intro}
          </Text>
        </Stack>
      </Band>
      <Band tone="mostaza" labelledBy="about-more">
        <Grid gap={48}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Title id="about-more" order={asPage ? 2 : 3} c="verde.8" tt="uppercase">
              {site.about.title}
            </Title>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap="md">
              {site.about.paragraphs.map((p) => (
                <Text key={p} size="lg">
                  {p}
                </Text>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Band>
    </>
  )
}

export function ContactSection({ asPage, subject }: SectionProps & { subject?: string }) {
  return (
    <Band tone="morado" id="contacto" labelledBy="contacto-title" size="sm">
      <SectionTitle
        id="contacto-title"
        order={level(asPage)}
        title={site.contact.title}
        lead={site.contact.lead}
      />
      <Box mt="xl">
        {/* key: si cambia el asunto en la URL, el formulario se reinicia con el nuevo valor */}
        <ContactForm key={subject} initialSubject={subject} />
      </Box>
    </Band>
  )
}
