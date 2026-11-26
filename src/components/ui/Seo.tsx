import { site } from '@/content/site'

interface SeoProps {
  title?: string
  description?: string
}

/** React 19 eleva <title> y <meta> al <head> automáticamente. */
export function Seo({ title, description }: SeoProps) {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.tagline}`
  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </>
  )
}
