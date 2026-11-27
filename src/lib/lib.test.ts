import { shades } from '@/app/theme'
import { formatDate, upcomingDates } from './dates'
import { isExternalUrl } from './url'

describe('upcomingDates', () => {
  it('oculta fechas pasadas y ordena', () => {
    const today = new Date('2026-12-01T10:00:00Z')
    expect(upcomingDates(['2026-12-27', '2026-11-29', '2026-12-01'], today)).toEqual([
      '2026-12-01',
      '2026-12-27',
    ])
  })
})

describe('formatDate', () => {
  it('formatea en español', () => {
    expect(formatDate('2026-11-29')).toBe('domingo, 29 de noviembre de 2026')
  })
})

describe('isExternalUrl', () => {
  it.each([
    ['https://buy.stripe.com/x', true],
    ['mailto:a@b.c', true],
    ['/contact', false],
  ])('%s → %s', (href, expected) => {
    expect(isExternalUrl(href)).toBe(expected)
  })
})

describe('shades', () => {
  it('genera 10 tonos con el color base en la posición 6', () => {
    const s = shades('#24406e')
    expect(s).toHaveLength(10)
    expect(s[6]).toBe('#24406e')
  })
})
