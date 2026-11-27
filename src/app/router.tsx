import { createBrowserRouter, type RouteObject } from 'react-router'
import { AppLayout } from '@/components/layout/AppLayout'
import { RedirectTo } from '@/components/layout/RedirectTo'
import { RouteError } from '@/components/layout/RouteError'

const page = (load: () => Promise<{ default: React.ComponentType }>) => async () => ({
  Component: (await load()).default,
})

const oldPaths: Record<string, string> = {
  talleres: '/workshop',
  'sobre-mi': '/about',
  contacto: '/contact',
  tienda: '/shop',
  suscribete: '/newsletter',
}

// Cada página se carga bajo demanda (code splitting por ruta).
export const routes: RouteObject[] = [
  {
    path: '/',
    Component: AppLayout,
    ErrorBoundary: RouteError,
    children: [
      { index: true, lazy: page(() => import('@/pages/HomePage')) },
      { path: 'writing', lazy: page(() => import('@/pages/WritingPage')) },
      { path: 'workshop', lazy: page(() => import('@/pages/WorkshopPage')) },
      { path: 'work-with-me', lazy: page(() => import('@/pages/WorkWithMePage')) },
      { path: 'speaking', lazy: page(() => import('@/pages/SpeakingPage')) },
      { path: 'about', lazy: page(() => import('@/pages/AboutPage')) },
      { path: 'contact', lazy: page(() => import('@/pages/ContactPage')) },
      { path: 'newsletter', lazy: page(() => import('@/pages/SubscribePage')) },
      { path: 'shop', lazy: page(() => import('@/pages/ShopPage')) },
      ...Object.entries(oldPaths).map(([from, to]) => ({
        path: from,
        element: <RedirectTo to={to} />,
      })),
      { path: '*', lazy: page(() => import('@/pages/NotFoundPage')) },
    ],
  },
]

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/',
})
