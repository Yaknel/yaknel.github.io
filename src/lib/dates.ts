const formatter = new Intl.DateTimeFormat('es', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Berlin',
})

/** "2026-11-29" → "domingo, 29 de noviembre de 2026" */
export function formatDate(isoDate: string): string {
  return formatter.format(new Date(`${isoDate}T12:00:00Z`))
}

/** Devuelve solo las fechas de hoy en adelante, ordenadas. */
export function upcomingDates(dates: readonly string[], today: Date = new Date()): string[] {
  const todayIso = today.toISOString().slice(0, 10)
  return dates.filter((d) => d >= todayIso).sort()
}
