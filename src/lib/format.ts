const wholeDollars = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const withCents = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** Formats a USD price: whole amounts drop the cents ("$1,895"), others keep them ("$14.95"). */
export function formatPrice(priceUsd: number): string {
  const cents = Math.round(priceUsd * 100);
  return cents % 100 === 0 ? wholeDollars.format(cents / 100) : withCents.format(cents / 100);
}

/** Formats an ISO date (YYYY-MM-DD) as e.g. "Nov 4, 2026", independent of the server time zone. */
export function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate.slice(0, 10)}T00:00:00Z`));
}

/** "1 object" / "7 objects" */
export function pluralize(count: number, singular: string, plural = `${singular}s`): string {
  return `${count} ${count === 1 ? singular : plural}`;
}
