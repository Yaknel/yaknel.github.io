export function isExternalUrl(href: string): boolean {
  return /^(https?:)?\/\//i.test(href) || href.startsWith('mailto:')
}
