/**
 * Builds an ISO-like local timestamp without silently converting the business time to UTC.
 * The backend remains the source of truth for America/Mexico_City business rules.
 */
export function localDateTime(date: string, time: string): string {
  return `${date}T${time}:00`;
}
