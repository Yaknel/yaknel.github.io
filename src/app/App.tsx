import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@/styles/global.css'

import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { RouterProvider } from 'react-router'
import { router } from './router'
import { theme } from './theme'

export function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Notifications position="top-center" />
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
