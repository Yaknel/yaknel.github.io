/**
 * Secciones de la web. La mayoría siguen el layout de yaknel.com:
 * un bloque de color con el texto junto a una foto cuadrada (componente Split).
 */
import {
  Accordion,
  Anchor,
  Box,
  Button,
  Container,
  Group,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Band } from '@/components/ui/Band'
import { bandAccent, darkTones, type BandTone } from '@/components/ui/bandTones'
import { Gallery } from '@/components/ui/Gallery'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { Reveal } from '@/components/ui/Reveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { SmartButton } from '@/components/ui/SmartButton'
import { Split } from '@/components/ui/Split'
import type { Photo } from '@/content/photos'
import { photos } from '@/content/photos'
import { products } from '@/content/products'
import { site } from '@/content/site'
import { somatica } from '@/content/somatica'
import { testimonials, type Testimonial } from '@/content/testimonials'
import { offerings } from '@/content/workshops'
import { ContactForm } from '@/features/contact/ContactForm'
import { SubscribeEmbed } from '@/features/newsletter/SubscribeEmbed'
import { ProductList } from '@/features/shop/ProductList'
import { OfferingList } from '@/features/workshops/OfferingList'
import classes from './sections.module.css'

type PanelTone = Exclude<BandTone, 'blanco'>

interface Cta {
  label: string
  href: string
}

interface PanelProps {
  tone: PanelTone
  id: string
  kind?: string
  title: string
  order?: 1 | 2 | 3
  children?: ReactNode
  ctas?: Cta[]
}

/** Contenido de un bloque de color: etiqueta, título, texto y botones con buen contraste. */
function Panel({ tone, id, kind, title, order = 2, children, ctas = [] }: PanelProps) {
  const dark = darkTones.includes(tone)
  return (
    <>
      {kind && (
        <Text size="sm" fw={700} className={classes.kind}>
          {kind}
        </Text>
      )}
      <Title id={id} order={order}>
        {title}
      </Title>
      {children}
      {ctas.length > 0 && (
        <Group gap="sm" mt="xs">
          {ctas.map((cta, i) => (
            <SmartButton
              key={cta.href}
              href={cta.href}
              color={i === 0 ? bandAccent[tone] : dark ? 'white' : 'tinta'}
              variant={i === 0 ? 'filled' : 'outline'}
            >
              {cta.label}
            </SmartButton>
          ))}
        </Group>
      )}
    </>
  )
}

interface FeatureProps {
  tone: PanelTone
  photo: Photo
  id: string
  kind?: string
  title: string
  text: ReactNode
  ctas?: Cta[]
  photoFirst?: boolean
  order?: 1 | 2 | 3
  priority?: boolean
  photoFit?: 'cover' | 'contain'
}

/** Bloque de color + foto cuadrada con un título, un texto y sus botones. */
export function Feature({
  tone,
  photo,
  id,
  kind,
  title,
  text,
  ctas,
  photoFirst,
  order,
  priority,
  photoFit,
}: FeatureProps) {
  return (
    <Split
      tone={tone}
      photo={photo}
      photoFirst={photoFirst}
      labelledBy={id}
      priority={priority}
      photoFit={photoFit}
    >
      <Panel tone={tone} id={id} kind={kind} title={title} order={order} ctas={ctas}>
        {typeof text === 'string' ? <Text size="lg">{text}</Text> : text}
      </Panel>
    </Split>
  )
}

/** Cabecera de página interna: título grande centrado, como "Contact" en yaknel.com. */
export function PageHeading({ title, lead, id }: { title: string; lead?: string; id: string }) {
  return (
    <Container size="md" pt={{ base: 48, md: 72 }} pb={{ base: 32, md: 48 }} ta="center">
      <Reveal effect="up">
        <Title id={id} order={1} c="azul.6" className={classes.pageTitle}>
          {title}
        </Title>
        {lead && (
          <Text mt="md" size="lg" className="subtitle" c="tinta.5" maw={640} mx="auto">
            {lead}
          </Text>
        )}
      </Reveal>
    </Container>
  )
}

/* ---------------------------------- Home ---------------------------------- */

export function HeroSection() {
  return (
    <Split tone="rosa" photo={photos.hero} labelledBy="hero-title" priority>
      <div className="stagger">
        <Text size="sm" fw={700} className={classes.kind}>
          {site.hero.eyebrow}
        </Text>
        <Title id="hero-title" order={1} mt="md">
          {site.hero.title}
        </Title>
        <Text size="lg" mt="lg">
          {site.hero.lead}
        </Text>
        <Group gap="sm" mt="xl">
          <Button component={Link} to="/escritura" color="tinta" size="md">
            {site.writing.cta}
          </Button>
          <Button component={Link} to="/taller" color="white" variant="outline" size="md">
            {site.workshop.cta}
          </Button>
        </Group>
      </div>
    </Split>
  )
}

/** Resumen de cada apartado en la portada, cada uno con su llamada a la acción. */
export function HomeOverview() {
  return (
    <>
      <Feature
        tone="mostaza"
        photo={photos.writing.book}
        photoFirst
        id="home-writing"
        photoFit="contain"
        kind={site.writing.title}
        title={site.writing.book.title}
        text={site.writing.book.description}
        ctas={[{ label: site.writing.cta, href: '/escritura' }]}
      />
      <Feature
        tone="verde"
        photo={photos.workshop}
        id="home-workshop"
        kind="Taller"
        title={site.workshop.title}
        text={site.workshop.lead}
        ctas={[{ label: site.workshop.cta, href: '/taller' }]}
      />
      <Feature
        tone="azul"
        photo={photos.workWithMe.editorial}
        photoFirst
        id="home-work"
        kind={site.workWithMe.title}
        title={`${site.workWithMe.editorial.title} y ${site.workWithMe.collaboration.title.toLowerCase()}`}
        text={site.workWithMe.lead}
        ctas={[{ label: site.workWithMe.cta, href: '/trabaja-conmigo' }]}
      />
      <Feature
        tone="mostaza"
        photo={photos.about}
        photoFirst
        id="home-about"
        kind={site.about.title}
        title={site.about.heading}
        text={site.about.story}
        ctas={[{ label: site.about.cta, href: '/sobre-mi' }]}
      />
    </>
  )
}

/* -------------------------------- Writing -------------------------------- */

export function WritingSections() {
  const { book, poetry, publication, media } = site.writing
  return (
    <>
      <Feature
        tone="mostaza"
        photo={photos.writing.book}
        id="book"
        photoFit="contain"
        kind={book.kind}
        title={book.title}
        text={book.description}
        ctas={[{ label: book.cta, href: book.href }]}
      />
      <NewsletterSection
        id="poetry"
        kind={poetry.kind}
        text={poetry.description}
        link={{ label: poetry.cta, href: poetry.href }}
      />
      <Feature
        tone="azul"
        photo={photos.writing.publication}
        photoFirst
        id="publication"
        kind={publication.kind}
        title={publication.title}
        text={publication.description}
        ctas={[{ label: publication.cta, href: publication.href }]}
      />

      <Band tone="blanco" labelledBy="media-title">
        <Reveal effect="up">
          <Title id="media-title" order={2} c="verde.6" ta="center" mb={40}>
            Medios
          </Title>
        </Reveal>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={{ base: 40, sm: 24 }}>
          {media.map((m, i) => {
            const photo = photos.writing.media[i]
            const tone = (['lila', 'verde', 'rosa'] as const)[i % 3]
            return (
              <Reveal key={m.href} effect="up" delay={i * 120}>
                <Stack component="article" gap={0} h="100%">
                  {photo && <PhotoFrame photo={photo} />}
                  <Stack
                    gap="xs"
                    p="lg"
                    flex={1}
                    className={classes.card}
                    data-tone={tone}
                    align="flex-start"
                  >
                    <Text size="sm" fw={700} className={classes.kind}>
                      {m.kind}
                    </Text>
                    <Title order={3}>{m.title}</Title>
                    <Text flex={1}>{m.description}</Text>
                    <SmartButton href={m.href} color="white" variant="outline" size="sm">
                      {m.cta}
                    </SmartButton>
                  </Stack>
                </Stack>
              </Reveal>
            )
          })}
        </SimpleGrid>
      </Band>
    </>
  )
}

/* -------------------------------- Workshop -------------------------------- */

export function WorkshopSections() {
  const items = offerings.filter((o) => o.kind === 'taller')
  return (
    <>
      <Feature
        tone="verde"
        photo={photos.workshop}
        id="workshop-title"
        order={1}
        kind="Taller"
        title={site.workshop.title}
        text={site.workshop.lead}
        ctas={[{ label: site.workshop.cta, href: '#next' }]}
        priority
      />
      <Band tone="blanco" id="next" labelledBy="next-title">
        <Reveal effect="up">
          <SectionTitle id="next-title" title="Próximos talleres" />
        </Reveal>
        <OfferingList items={items} buttonColor="verde" />
      </Band>
      <Gallery photos={photos.gallery} label="Fotos de los talleres" />
      <TestimonialsSection items={testimonials.workshop} tone="lila" />
      <FaqSection />
    </>
  )
}

function FaqSection({
  items = site.workshop.faq,
  title = site.workshop.faqTitle,
}: {
  items?: ReadonlyArray<{ q: string; a: string }>
  title?: string
}) {
  return (
    <Band tone="blanco" labelledBy="faq-title" size="md">
      <Reveal effect="up">
        <SectionTitle id="faq-title" title={title} />
        <Accordion mt="xl" variant="separated" radius={0} classNames={{ item: classes.faqItem }}>
          {items.map((f) => (
            <Accordion.Item key={f.q} value={f.q}>
              <Accordion.Control>{f.q}</Accordion.Control>
              <Accordion.Panel>{f.a}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Reveal>
    </Band>
  )
}

/* ------------------------------ Testimonials ------------------------------ */

/** Testimonios en bloques de color. No se muestra nada mientras la lista esté vacía. */
export function TestimonialsSection({ items, tone }: { items: Testimonial[]; tone: PanelTone }) {
  if (items.length === 0) return null
  return (
    <Band tone="blanco" labelledBy="testimonials-title">
      <Title id="testimonials-title" order={2} c="verde.6" ta="center" mb={40}>
        Testimonios
      </Title>
      <SimpleGrid cols={{ base: 1, md: Math.min(items.length, 3) }} spacing={24}>
        {items.map((t, i) => (
          <Reveal key={t.name + i} effect="up" delay={i * 120}>
            <Box component="figure" className={classes.quote} data-tone={tone} m={0}>
              <Text component="blockquote" size="lg" m={0} className="subtitle">
                “{t.quote}”
              </Text>
              <Text component="figcaption" mt="md" fw={700}>
                {t.name}
                {t.role && (
                  <Text component="span" fw={400}>
                    {' '}
                    · {t.role}
                  </Text>
                )}
              </Text>
            </Box>
          </Reveal>
        ))}
      </SimpleGrid>
    </Band>
  )
}

/* ------------------------------ Work with me ------------------------------ */

export function WorkWithMeSections() {
  const { editorial, collaboration, cta } = site.workWithMe
  return (
    <>
      <Feature
        tone="azul"
        photo={photos.workWithMe.editorial}
        id="editorial"
        kind={editorial.kind}
        title={editorial.title}
        text={editorial.description}
        ctas={[{ label: cta, href: '/contacto?asunto=editorial' }]}
      />
      <Feature
        tone="verde"
        photo={photos.workWithMe.collaboration}
        photoFirst
        id="collaboration"
        kind={collaboration.kind}
        title={collaboration.title}
        text={collaboration.description}
        ctas={[{ label: cta, href: '/contacto?asunto=colaboracion' }]}
      />
      <TestimonialsSection items={testimonials.workWithMe} tone="mostaza" />
    </>
  )
}

/* ---------------------------- Public speaking ---------------------------- */

export function SpeakingSections() {
  const { title, lead, cta, topics, topicsTitle, events, eventsTitle } = site.speaking
  return (
    <Split tone="rosa" photo={photos.speaking} labelledBy="speaking-title" priority>
      <Title id="speaking-title" order={1}>
        {title}
      </Title>
      <Text size="lg">{lead}</Text>
      <div>
        <Title order={3} mb="xs">
          {topicsTitle}
        </Title>
        <List spacing={4} c="inherit">
          {topics.map((t) => (
            <List.Item key={t}>{t}</List.Item>
          ))}
        </List>
      </div>
      {events.length > 0 && (
        <div>
          <Title order={3} mb="xs">
            {eventsTitle}
          </Title>
          <List spacing={4} c="inherit">
            {events.map((e) => (
              <List.Item key={e}>{e}</List.Item>
            ))}
          </List>
        </div>
      )}
      <Group>
        <Button component={Link} to="/contacto?asunto=charlas" color="tinta">
          {cta}
        </Button>
      </Group>
    </Split>
  )
}

/* --------------------------------- About --------------------------------- */

export function AboutSections() {
  const a = site.about
  return (
    <>
      <Split tone="mostaza" photo={photos.about} photoFirst labelledBy="about-title" priority>
        <Text size="sm" fw={700} className={classes.kind}>
          {a.title}
        </Text>
        <Title id="about-title" order={1}>
          {a.heading}
        </Title>
        <Text size="lg">{a.story}</Text>
        <Text>{a.philosophy}</Text>
      </Split>
      <Split tone="azul" photo={photos.aboutMore} labelledBy="about-experience">
        <Title id="about-experience" order={2}>
          Experiencia
        </Title>
        <Group gap={8}>
          {a.roles.map((r) => (
            <span key={r} className={classes.role}>
              {r}
            </span>
          ))}
        </Group>
        <Stack gap="sm">
          {a.experience.map((p) => (
            <Text key={p}>{p}</Text>
          ))}
        </Stack>
        <div>
          <Title order={3} mb="xs">
            {a.credentialsTitle}
          </Title>
          <List spacing={4} c="inherit" size="sm">
            {a.credentials.map((c) => (
              <List.Item key={c}>{c}</List.Item>
            ))}
          </List>
        </div>
        <Group>
          <Button component={Link} to="/trabaja-conmigo" color="mostaza">
            {site.workWithMe.title}
          </Button>
        </Group>
      </Split>
    </>
  )
}

/* ------------------------- Newsletter & contact ------------------------- */

/**
 * Sigo Aquí: franja lila a todo el ancho, sin foto, con el título en Micky mostaza
 * y la casilla de suscripción (como el bloque de Da Yaknel Podcast en yaknel.com).
 */
export function NewsletterSection({
  id = 'newsletter',
  kind,
  text = site.newsletter.lead,
  link,
}: {
  id?: string
  kind?: string
  text?: string
  link?: Cta
}) {
  return (
    <Box component="section" id={id} aria-labelledby={`${id}-title`} className={classes.newsletter}>
      <Container size="xl">
        <div className={classes.newsletterInner}>
          <Reveal effect="up">
            <Stack align="center" gap="md" ta="center">
              {kind && (
                <Text size="sm" fw={700} className={classes.kind}>
                  {kind}
                </Text>
              )}
              <Title id={`${id}-title`} order={2} className={classes.newsletterTitle}>
                {site.newsletter.title}
              </Title>
              <Text size="lg" maw={720}>
                {text}
              </Text>
              <SubscribeEmbed label={site.newsletter.cta} />
              {link && (
                <Anchor
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  c="white"
                  size="sm"
                >
                  {link.label} →
                </Anchor>
              )}
            </Stack>
          </Reveal>
        </div>
      </Container>
    </Box>
  )
}

/** Contacto como en yaknel.com: fondo blanco, título centrado y formulario estrecho. */
export function ContactSection({ subject }: { subject?: string }) {
  return (
    <Box component="section" aria-labelledby="contact-title" pb={{ base: 56, md: 88 }}>
      <PageHeading id="contact-title" title={site.contact.title} lead={site.contact.lead} />
      <Container size={560}>
        <Reveal effect="up">
          {/* key: si cambia el asunto en la URL, el formulario se reinicia con el nuevo valor */}
          <ContactForm key={subject} initialSubject={subject} />
          <Text ta="center" mt="xl" c="verde.6">
            {site.location}
          </Text>
        </Reveal>
      </Container>
    </Box>
  )
}

/* ---------------------------------- Shop ---------------------------------- */

export function ShopSection() {
  return (
    <Band tone="blanco" labelledBy="shop-title">
      <SectionTitle id="shop-title" order={1} title={site.shop.title} lead={site.shop.lead} />
      <ProductList items={products} buttonColor="verde" />
    </Band>
  )
}

/* ----------------- Taller mensual de escritura somática ----------------- */

export function SomaticaSections() {
  const t = somatica
  return (
    <>
      <Split tone="verde" photo={photos.somatica.hero} labelledBy="somatica-title" priority>
        <div className="stagger">
          <Text size="sm" fw={700} className={classes.kind}>
            {t.eyebrow}
          </Text>
          <Title id="somatica-title" order={1} mt="md">
            {t.title}
          </Title>
          <Text size="lg" mt="md">
            {t.lead}
          </Text>
          <Group gap={8} mt="lg">
            {t.facts.map((f) => (
              <span key={f} className={classes.role}>
                {f}
              </span>
            ))}
            <span className={classes.price}>{t.price}</span>
          </Group>
          <Group mt="xl">
            <SmartButton href={t.bookingHref} color="mostaza" size="md">
              {t.cta}
            </SmartButton>
          </Group>
        </div>
      </Split>

      <Band tone="blanco" labelledBy="invitation-title" size="sm">
        <Reveal effect="up">
          <Title id="invitation-title" order={2} c="verde.6" ta="center">
            {t.invitation.title}
          </Title>
          <Stack gap="md" mt="xl">
            {t.invitation.paragraphs.map((p) => (
              <Text key={p} size="lg">
                {p}
              </Text>
            ))}
          </Stack>
        </Reveal>
      </Band>

      <Band tone="blanco" labelledBy="steps-title">
        <Reveal effect="up">
          <Title id="steps-title" order={2} c="verde.6" ta="center" mb={40}>
            ¿Qué haremos?
          </Title>
        </Reveal>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={24}>
          {t.steps.map((step, i) => (
            <Reveal key={step.title} effect="up" delay={i * 120}>
              <Stack
                gap="sm"
                p="xl"
                h="100%"
                className={classes.card}
                data-tone={(['azul', 'rosa', 'lila'] as const)[i % 3]}
              >
                <Text className={classes.stepNumber}>0{i + 1}</Text>
                <Title order={3}>{step.title}</Title>
                <Text>{step.text}</Text>
              </Stack>
            </Reveal>
          ))}
        </SimpleGrid>
      </Band>

      <Split tone="mostaza" photo={photos.workshop} photoFirst labelledBy="includes-title">
        <Title id="includes-title" order={2}>
          ¿Qué incluye el taller?
        </Title>
        <List spacing="xs" c="inherit">
          {t.includes.map((item) => (
            <List.Item key={item}>{item}</List.Item>
          ))}
        </List>
        <Text size="sm" fs="italic">
          {t.disclaimer}
        </Text>
      </Split>

      <Split tone="azul" photo={photos.somatica.guide} labelledBy="guide-title">
        <Text size="sm" fw={700} className={classes.kind}>
          Quién te acompaña
        </Text>
        <Title id="guide-title" order={2}>
          {t.guide.title}
        </Title>
        {t.guide.paragraphs.map((p) => (
          <Text key={p}>{p}</Text>
        ))}
      </Split>

      <FaqSection items={t.faq} title="Preguntas frecuentes" />

      <Band tone="mostaza" labelledBy="closing-title" size="sm">
        <Reveal effect="up">
          <Stack align="center" ta="center" gap="md">
            <Text size="sm" fw={700} className={classes.kind}>
              {t.closing.eyebrow}
            </Text>
            <Title id="closing-title" order={2} c="verde.9">
              {t.closing.title}
            </Title>
            <Text size="lg" maw={560}>
              {t.closing.text}
            </Text>
            <SmartButton href={t.bookingHref} color="verde" size="md">
              {t.closing.cta}
            </SmartButton>
          </Stack>
        </Reveal>
      </Band>
    </>
  )
}
