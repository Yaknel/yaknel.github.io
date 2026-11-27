import { Button, Container, Group, Text } from '@mantine/core'
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMedium,
  IconBrandSpotify,
  IconBrandYoutube,
  IconNews,
} from '@tabler/icons-react'
import type { ComponentType } from 'react'
import { Link } from 'react-router'
import { site, type SocialLink } from '@/content/site'
import classes from './Footer.module.css'

const YEAR = new Date().getFullYear()

const icons: Record<SocialLink['label'], ComponentType<{ size?: number; stroke?: number }>> = {
  LinkedIn: IconBrandLinkedin,
  YouTube: IconBrandYoutube,
  Instagram: IconBrandInstagram,
  Substack: IconNews,
  Spotify: IconBrandSpotify,
  Medium: IconBrandMedium,
}

/** Colores de los cuadrados de redes, en el orden de la paleta (como en yaknel.com). */
const tileColors = ['mostaza', 'azul', 'rosa', 'lila', 'verde']

export function Footer() {
  const socials = site.socials.filter((s) => s.href)

  return (
    <footer className={classes.footer}>
      <Container size="lg" py={56}>
        <Group justify="space-between" align="center" gap="xl">
          <Text className={classes.motto} maw={260}>
            {site.motto}
          </Text>

          <Group component="nav" aria-label="Redes sociales" gap="lg">
            {socials.map((s, i) => {
              const Icon = icons[s.label]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className={classes.tile}
                  style={{
                    backgroundColor: `var(--mantine-color-${tileColors[i % tileColors.length]}-6)`,
                  }}
                >
                  <Icon size={26} stroke={1.8} />
                </a>
              )
            })}
          </Group>

          <Button component={Link} to="/contacto" color="lila" w={150}>
            CONTACTO
          </Button>
        </Group>

        <Group justify="space-between" mt={48} gap="md">
          <Text size="sm" fw={700} c="lila.6">
            ©{YEAR} {site.fullName}. Todos los derechos reservados
          </Text>
          <Group component="nav" aria-label="Legal" gap="lg">
            {site.legal.map((l) =>
              l.href ? (
                <a key={l.label} href={l.href} className={classes.legal}>
                  {l.label}
                </a>
              ) : (
                <span key={l.label} className={classes.legal}>
                  {l.label}
                </span>
              ),
            )}
          </Group>
          <Text size="sm" c="verde.6">
            {site.location}
          </Text>
        </Group>
      </Container>
    </footer>
  )
}
