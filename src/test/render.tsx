import { MantineProvider } from '@mantine/core'
import { render as rtlRender } from '@testing-library/react'
import type { ReactNode } from 'react'
import { MemoryRouter } from 'react-router'
import { theme } from '@/app/theme'

/** Render con los mismos providers que la app. */
export function render(ui: ReactNode, { route = '/' }: { route?: string } = {}) {
  return rtlRender(
    <MantineProvider theme={theme}>
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
    </MantineProvider>,
  )
}
