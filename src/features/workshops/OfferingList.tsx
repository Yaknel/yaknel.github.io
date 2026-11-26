import { Grid, Group, List, Stack, Text, Title } from '@mantine/core'
import { IconCalendarEvent } from '@tabler/icons-react'
import { PhotoFrame } from '@/components/ui/PhotoFrame'
import { Reveal } from '@/components/ui/Reveal'
import { SmartButton } from '@/components/ui/SmartButton'
import { photos } from '@/content/photos'
import type { Offering } from '@/content/workshops'
import { formatDate, upcomingDates } from '@/lib/dates'
import classes from './OfferingList.module.css'

interface OfferingListProps {
  items: Offering[]
  buttonColor: string
}

/** Talleres en filas con foto, separadas por líneas finas; cada fila entra al hacer scroll. */
export function OfferingList({ items, buttonColor }: OfferingListProps) {
  return (
    <ul className={classes.list}>
      {items.map((o, i) => {
        const dates = upcomingDates(o.dates ?? [])
        const photo = photos.workshops[o.id]
        return (
          <Reveal key={o.id} component="li" effect="up" delay={i * 90} className={classes.row}>
            <Grid gap={{ base: 'md', md: 'xl' }} align="center">
              {photo && (
                <Grid.Col span={{ base: 12, sm: 3, md: 2 }}>
                  <PhotoFrame
                    photo={photo}
                    shape={i % 2 ? 'pill' : 'arch'}
                    ratio={3 / 4}
                    className={classes.thumb}
                  />
                </Grid.Col>
              )}
              <Grid.Col span={{ base: 12, sm: 9, md: photo ? 3 : 4 }}>
                <Title order={3} c="inherit">
                  {o.title}
                </Title>
                <Text size="sm" mt={6} className={classes.meta}>
                  {o.format}
                  {o.price && ` · ${o.price}`}
                </Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: photo ? 4 : 5 }}>
                <Stack gap="xs">
                  <Text c="inherit">{o.summary}</Text>
                  {dates.length > 0 && (
                    <List
                      spacing={2}
                      size="sm"
                      c="inherit"
                      icon={<IconCalendarEvent size={16} aria-hidden="true" />}
                      aria-label="Próximas fechas"
                    >
                      {dates.map((d) => (
                        <List.Item key={d}>{formatDate(d)}</List.Item>
                      ))}
                    </List>
                  )}
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 3 }}>
                <Group justify="flex-end" className={classes.cta}>
                  <SmartButton href={o.cta.href} color={buttonColor}>
                    {o.cta.label}
                  </SmartButton>
                </Group>
              </Grid.Col>
            </Grid>
          </Reveal>
        )
      })}
    </ul>
  )
}
