import { Button, Drawer, Stack } from '@mantine/core'
import { Link, NavLink } from 'react-router'
import { site } from '@/content/site'
import classes from './MobileNav.module.css'

interface MobileNavProps {
  opened: boolean
  onClose: () => void
}

export function MobileNav({ opened, onClose }: MobileNavProps) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title={site.name}
      position="right"
      size="xs"
      hiddenFrom="md"
      classNames={{
        title: classes.title,
        content: classes.content,
        header: classes.content,
        close: classes.close,
      }}
    >
      <Stack component="nav" aria-label="Principal" gap="xs">
        {site.nav.map((item) => (
          <NavLink key={item.to} to={item.to} end className={classes.link} onClick={onClose}>
            {item.label}
          </NavLink>
        ))}
        <Button component={Link} to="/suscribete" color="mostaza" mt="md" onClick={onClose}>
          Suscríbete
        </Button>
      </Stack>
    </Drawer>
  )
}
