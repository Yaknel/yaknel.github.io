/** Configuración leída de variables de entorno (ver .env.example). Un único punto de acceso. */
export const config = {
  formspreeId: import.meta.env.VITE_FORMSPREE_ID?.trim() || null,
  substackUrl: (import.meta.env.VITE_SUBSTACK_URL?.trim() || 'https://yaknel.substack.com').replace(
    /\/$/,
    '',
  ),
} as const
