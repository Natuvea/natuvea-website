/** Shared site facts referenced by more than one page. */
export const company = {
  name: 'Natuvea Ltd',
  number: 'SC827506',
  email: 'info@natuvea.com',
  foundingDate: '2024-10-31',
  address: {
    street: 'Lingerton Lodge Castleton',
    locality: 'Lochgilphead',
    postcode: 'PA31 8RU',
    country: 'United Kingdom',
    countryCode: 'GB',
  },
};

/** Format a date the way the site writes them: "20 July 2026". */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** ISO date (YYYY-MM-DD) for sitemap lastmod values. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
