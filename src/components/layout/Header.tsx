import { AppShell, Burger, Button, Container, Group, Text } from '@mantine/core'
import { Link, NavLink } from 'react-router'
import { site } from '@/content/site'
import classes from './Header.module.css'

interface HeaderProps {
  menuOpened: boolean
  onToggleMenu: () => void
}

export function Header({ menuOpened, onToggleMenu }: HeaderProps) {
  return (
    <AppShell.Header className={classes.header}>
      <Container h="100%">
        <Group h="100%" justify="space-between" wrap="nowrap">
          <Link to="/" className={classes.brand} aria-label={`${site.name}, ir al inicio`}>
            <Text component="span" className={classes.logo}>
              {site.name}
            </Text>
            <Text component="span" size="sm" className={classes.tagline} visibleFrom="xs">
              {site.tagline}
            </Text>
          </Link>

          <Group component="nav" aria-label="Principal" gap={4} visibleFrom="md">
            {site.nav.slice(1).map((item) => (
              <NavLink key={item.to} to={item.to} className={classes.link}>
                {item.label}
              </NavLink>
            ))}
            <Button component={Link} to="/suscribete" color="mostaza" ml="sm">
              Suscríbete
            </Button>
          </Group>

          <Burger
            opened={menuOpened}
            onClick={onToggleMenu}
            hiddenFrom="md"
            color="white"
            aria-label={menuOpened ? 'Cerrar menú' : 'Abrir menú'}
          />
        </Group>
      </Container>
    </AppShell.Header>
  )
}
