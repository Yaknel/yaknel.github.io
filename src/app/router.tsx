import { createBrowserRouter, type RouteObject } from 'react-router'
import { AppLayout } from '@/components/layout/AppLayout'
import { RedirectTo } from '@/components/layout/RedirectTo'
import { RouteError } from '@/components/layout/RouteError'

const page = (load: () => Promise<{ default: React.ComponentType }>) => async () => ({
  Component: (await load()).default,
})

/** Direcciones antiguas que redirigen a las actuales (conservan ?asunto=…). */
const oldPaths: Record<string, string> = {
  talleres: '/taller',
  suscribete: '/newsletter',
  writing: '/escritura',
  workshop: '/taller',
  'work-with-me': '/trabaja-conmigo',
  speaking: '/charlas',
  about: '/sobre-mi',
  contact: '/contacto',
  shop: '/tienda',
}

// Cada página se carga bajo demanda (code splitting por ruta).
export const routes: RouteObject[] = [
  {
    path: '/',
    Component: AppLayout,
    ErrorBoundary: RouteError,
    children: [
      { index: true, lazy: page(() => import('@/pages/HomePage')) },
      { path: 'escritura', lazy: page(() => import('@/pages/WritingPage')) },
      { path: 'taller', lazy: page(() => import('@/pages/WorkshopPage')) },
      { path: 'trabaja-conmigo', lazy: page(() => import('@/pages/WorkWithMePage')) },
      { path: 'charlas', lazy: page(() => import('@/pages/SpeakingPage')) },
      { path: 'sobre-mi', lazy: page(() => import('@/pages/AboutPage')) },
      { path: 'contacto', lazy: page(() => import('@/pages/ContactPage')) },
      { path: 'newsletter', lazy: page(() => import('@/pages/SubscribePage')) },
      { path: 'tienda', lazy: page(() => import('@/pages/ShopPage')) },
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
