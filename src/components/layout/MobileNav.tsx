import { Drawer, Stack } from '@mantine/core'
import { NavLink } from 'react-router'
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
      hiddenFrom="lg"
      classNames={{ title: classes.title, close: classes.close }}
    >
      <Stack component="nav" aria-label="Principal" gap={0}>
        {site.nav.map((item) => (
          <NavLink key={item.to} to={item.to} end className={classes.link} onClick={onClose}>
            {item.label}
          </NavLink>
        ))}
      </Stack>
    </Drawer>
  )
}
