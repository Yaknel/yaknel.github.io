import { Anchor, Button, Container, Group, Stack, Text } from '@mantine/core'
import { Link } from 'react-router'
import { KlintShapes } from '@/components/ui/KlintShapes'
import { site } from '@/content/site'
import classes from './Footer.module.css'

const YEAR = new Date().getFullYear()

export function Footer() {
  const socials = site.socials.filter((s) => s.href)

  return (
    <footer className={classes.footer}>
      <KlintShapes variant="corner" className={classes.shapes} />
      <Container py={64} className={classes.content}>
        <Group justify="space-between" align="flex-start" gap="xl">
          <Stack gap="xs" maw={300}>
            <Text className={classes.name}>{site.name}</Text>
            <Text className={classes.motto}>{site.motto}</Text>
          </Stack>

          <Stack gap="md" align="flex-start">
            <Group component="nav" aria-label="Redes" gap="lg">
              {socials.map((s) => (
                <Anchor
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  c="white"
                >
                  {s.label}
                </Anchor>
              ))}
            </Group>
            <Button component={Link} to="/contacto" color="lila">
              Contacto
            </Button>
          </Stack>
        </Group>
        <Text size="sm" c="lila.3" mt={48} fw={700}>
          © {YEAR} {site.fullName}
        </Text>
      </Container>
    </footer>
  )
}
