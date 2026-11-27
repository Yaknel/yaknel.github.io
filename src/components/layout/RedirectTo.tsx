import { Navigate, useLocation } from 'react-router'

/** Redirige las URLs antiguas en español conservando ?asunto=… */
export function RedirectTo({ to }: { to: string }) {
  const { search } = useLocation()
  return <Navigate to={`${to}${search}`} replace />
}
