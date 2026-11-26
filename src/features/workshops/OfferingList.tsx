import { Grid, Group, List, Stack, Text, Title } from '@mantine/core'
import { IconCalendarEvent } from '@tabler/icons-react'
import { SmartButton } from '@/components/ui/SmartButton'
import type { Offering } from '@/content/workshops'
import { formatDate, upcomingDates } from '@/lib/dates'
import classes from './OfferingList.module.css'

interface OfferingListProps {
  items: Offering[]
  buttonColor: string
}

/** Lista de talleres en filas separadas por líneas finas (sin tarjetas). */
export function OfferingList({ items, buttonColor }: OfferingListProps) {
  return (
    <ul className={classes.list}>
      {items.map((o) => {
        const dates = upcomingDates(o.dates ?? [])
        return (
          <li key={o.id} className={classes.row}>
            <Grid gap={{ base: 'md', md: 'xl' }} align="center">
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Title order={3} c="inherit">
                  {o.title}
                </Title>
                <Text size="sm" mt={6} className={classes.meta}>
                  {o.format}
                  {o.price && ` · ${o.price}`}
                </Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 5 }}>
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
          </li>
        )
      })}
    </ul>
  )
}
