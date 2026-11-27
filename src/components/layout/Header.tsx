import { AppShell, Burger, Container, Group } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { Link, NavLink } from 'react-router'
import { site } from '@/content/site'
import classes from './Header.module.css'

interface HeaderProps {
  menuOpened: boolean
  onToggleMenu: () => void
}

/** Cabecera blanca como en yaknel.com: logo en Micky verde y menú en texto fino. */
export function Header({ menuOpened, onToggleMenu }: HeaderProps) {
  const [scroll] = useWindowScroll()
  return (
    <AppShell.Header className={classes.header} data-scrolled={scroll.y > 24 || undefined}>
      <Container size="xl" h="100%">
        <Group h="100%" justify="space-between" wrap="nowrap" gap="xl">
          <Link to="/" className={classes.logo} aria-label={`${site.name}, ir al inicio`}>
            {site.name}
          </Link>

          <Group component="nav" aria-label="Principal" gap={2} visibleFrom="lg" wrap="nowrap">
            {site.nav.map((item) => (
              <NavLink key={item.to} to={item.to} end className={classes.link}>
                {item.label}
              </NavLink>
            ))}
          </Group>

          <Burger
            opened={menuOpened}
            onClick={onToggleMenu}
            hiddenFrom="lg"
            color="var(--mantine-color-verde-6)"
            aria-label={menuOpened ? 'Cerrar menú' : 'Abrir menú'}
          />
        </Group>
      </Container>
    </AppShell.Header>
  )
}
