import type { Product } from "@/data/products";
import { formatPrice } from "./format";

export type PriceRangeId = "under-50" | "50-250" | "250-1000" | "1000-plus";

export type PriceRange = {
  id: PriceRangeId;
  /** Chip label, e.g. "$50–$250" or "$1,000+". */
  label: string;
  /** Inclusive lower bound in USD. */
  min: number;
  /** Exclusive upper bound in USD, or `null` for the open-ended range. */
  max: number | null;
};

/** Price buckets shown above product grids. Each range starts at `min` and stops just below `max`,
 * so the bands never overlap and together cover every price. */
export const PRICE_RANGES: PriceRange[] = [
  { id: "under-50", label: `Under ${formatPrice(50)}`, min: 0, max: 50 },
  { id: "50-250", label: `${formatPrice(50)}–${formatPrice(250)}`, min: 50, max: 250 },
  { id: "250-1000", label: `${formatPrice(250)}–${formatPrice(1000)}`, min: 250, max: 1000 },
  { id: "1000-plus", label: `${formatPrice(1000)}+`, min: 1000, max: null },
];

export function getPriceRange(id: PriceRangeId): PriceRange {
  const range = PRICE_RANGES.find((candidate) => candidate.id === id);
  if (!range) throw new Error(`Unknown price range: ${id}`);
  return range;
}

/** Products inside the range: `min` inclusive, `max` exclusive (open-ended for the last range). */
export function filterByPriceRange(items: Product[], id: PriceRangeId): Product[] {
  const { min, max } = getPriceRange(id);
  return items.filter((item) => item.priceUsd >= min && (max === null || item.priceUsd < max));
}
