import { createBrowserRouter, type RouteObject } from 'react-router'
import { AppLayout } from '@/components/layout/AppLayout'
import { RouteError } from '@/components/layout/RouteError'

// Cada página se carga bajo demanda (code splitting por ruta).
export const routes: RouteObject[] = [
  {
    path: '/',
    Component: AppLayout,
    ErrorBoundary: RouteError,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: (await import('@/pages/HomePage')).default }),
      },
      {
        path: 'talleres',
        lazy: async () => ({ Component: (await import('@/pages/WorkshopsPage')).default }),
      },
      {
        path: 'tienda',
        lazy: async () => ({ Component: (await import('@/pages/ShopPage')).default }),
      },
      {
        path: 'sobre-mi',
        lazy: async () => ({ Component: (await import('@/pages/AboutPage')).default }),
      },
      {
        path: 'contacto',
        lazy: async () => ({ Component: (await import('@/pages/ContactPage')).default }),
      },
      {
        path: 'suscribete',
        lazy: async () => ({ Component: (await import('@/pages/SubscribePage')).default }),
      },
      {
        path: '*',
        lazy: async () => ({ Component: (await import('@/pages/NotFoundPage')).default }),
      },
    ],
  },
]

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/',
})
