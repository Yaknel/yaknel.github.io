/**
 * Secciones de la web. Cada una es una franja con su propio color de fondo.
 * La portada las encadena; cada página interna usa la suya con título <h1>.
 */
import { Box, Button, Grid, Group, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router'
import { Band } from '@/components/ui/Band'
import { bandAccent, type BandTone } from '@/components/ui/bandTones'
import { Gallery } from '@/components/ui/Gallery'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { Reveal } from '@/components/ui/Reveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { photos } from '@/content/photos'
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
  const [portrait, performance, sea] = photos.hero
  return (
    <Band tone="morado" labelledBy="hero-title">
      <Grid align="center" gap={{ base: 48, md: 64 }}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="lg" className="stagger">
            <Text fw={700} c="mostaza.3" size="sm" style={{ letterSpacing: '0.12em' }}>
              {site.fullName} · {site.tagline}
            </Text>
            <Title id="hero-title" order={1} c="white">
              {site.hero.title}
            </Title>
            <Text className="subtitle">{site.hero.lead}</Text>
            <Group gap="sm">
              <Button component={Link} to="/suscribete" size="lg" color="mostaza">
                Suscríbete a Sigo Aquí
              </Button>
              <Button component={Link} to="/talleres" size="lg" variant="outline" color="white">
                Ver talleres
              </Button>
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <div className={classes.collage}>
            {portrait && (
              <Reveal effect="up" className={classes.collageMain}>
                <PhotoFrame photo={portrait} shape="arch" ratio={3 / 4} priority />
              </Reveal>
            )}
            {performance && (
              <Reveal effect="right" delay={200} className={classes.collageTop}>
                <PhotoFrame photo={performance} ratio={4 / 3} priority />
              </Reveal>
            )}
            {sea && (
              <Reveal effect="left" delay={400} className={classes.collageBottom}>
                <PhotoFrame photo={sea} shape="pill" ratio={2 / 3} priority />
              </Reveal>
            )}
          </div>
        </Grid.Col>
      </Grid>
    </Band>
  )
}

export function NewsletterSection({ asPage }: SectionProps) {
  return (
    <Band tone="rosa" id="suscribirse" labelledBy="newsletter-title">
      <Grid align="center" gap={{ base: 40, md: 72 }}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Reveal effect="left">
            <PhotoFrame
              photo={photos.newsletter}
              shape="arch"
              ratio={4 / 5}
              className={classes.narrow}
            />
          </Reveal>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Reveal effect="up">
            <Stack gap="lg">
              <SectionTitle
                id="newsletter-title"
                order={level(asPage)}
                title={site.newsletter.title}
              />
              <Text maw={520} className="subtitle">
                {site.newsletter.lead}
              </Text>
              <SubscribeEmbed />
            </Stack>
          </Reveal>
        </Grid.Col>
      </Grid>
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
      <Reveal effect="up">
        <SectionTitle
          id={`${kind}-title`}
          order={level(asPage)}
          title={copy.title}
          lead={copy.lead}
        />
      </Reveal>
      <OfferingList items={items} buttonColor={bandAccent[tone]} />
    </Band>
  )
}

export function GallerySection() {
  return <Gallery photos={photos.gallery} label="Galería de fotos" />
}

export function ShopSection({ asPage }: SectionProps) {
  return (
    <Band tone="bosque" id="tienda" labelledBy="tienda-title">
      <Reveal effect="up">
        <SectionTitle
          id="tienda-title"
          order={level(asPage)}
          title={site.shop.title}
          lead={site.shop.lead}
        />
      </Reveal>
      <ProductList items={products} buttonColor={bandAccent.bosque} />
    </Band>
  )
}

export function AboutSection({ asPage }: SectionProps) {
  return (
    <>
      <Band tone="azul" id="sobre-mi" labelledBy="about-title">
        <Grid align="center" gap={{ base: 40, md: 72 }}>
          <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
            <Reveal effect="up">
              <Stack gap="lg">
                <SectionTitle id="about-title" order={level(asPage)} title={site.motto} />
                <Text size="lg">{site.about.intro}</Text>
              </Stack>
            </Reveal>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
            <Reveal effect="right">
              <PhotoFrame
                photo={photos.about}
                shape="arch"
                ratio={3 / 4}
                className={classes.narrow}
              />
            </Reveal>
          </Grid.Col>
        </Grid>
      </Band>
      <Band tone="mostaza" labelledBy="about-more">
        <Grid gap={{ base: 32, md: 72 }} align="center">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Reveal effect="left">
              <PhotoFrame
                photo={photos.aboutMore}
                shape="pill"
                ratio={2 / 3}
                className={classes.narrow}
              />
            </Reveal>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Reveal effect="up">
              <Title id="about-more" order={asPage ? 2 : 3} c="noche.7" mb="lg">
                {site.about.title}
              </Title>
              <Stack gap="md">
                {site.about.paragraphs.map((p) => (
                  <Text key={p}>{p}</Text>
                ))}
              </Stack>
            </Reveal>
          </Grid.Col>
        </Grid>
      </Band>
    </>
  )
}

export function ContactSection({ asPage, subject }: SectionProps & { subject?: string }) {
  return (
    <Band tone="morado" id="contacto" labelledBy="contacto-title">
      <Grid gap={{ base: 40, md: 72 }} align="center">
        <Grid.Col span={{ base: 12, md: 5 }} visibleFrom="md">
          <Reveal effect="left">
            <PhotoFrame photo={photos.contact} shape="arch" ratio={3 / 4} />
          </Reveal>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Reveal effect="up">
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
          </Reveal>
        </Grid.Col>
      </Grid>
    </Band>
  )
}
