import { AppShell, Center, Loader } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Suspense } from 'react'
import { Outlet, ScrollRestoration, useLocation, useNavigation } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileNav } from './MobileNav'

export function AppLayout() {
  const [menuOpened, menu] = useDisclosure(false)
  const navigation = useNavigation()
  const { pathname } = useLocation()

  return (
    <AppShell header={{ height: 84 }} padding={0} bg="transparent">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header menuOpened={menuOpened} onToggleMenu={menu.toggle} />
      <MobileNav opened={menuOpened} onClose={menu.close} />

      <AppShell.Main id="contenido" aria-busy={navigation.state === 'loading'}>
        <Suspense
          fallback={
            <Center mih="60vh">
              <Loader color="mostaza" type="dots" />
            </Center>
          }
        >
          {/* key: cada cambio de página vuelve a lanzar la animación de entrada */}
          <div key={pathname} className="page-enter">
            <Outlet />
          </div>
        </Suspense>
      </AppShell.Main>

      <Footer />
      <ScrollRestoration />
    </AppShell>
  )
}
