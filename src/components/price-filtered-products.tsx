"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { PRICE_RANGES, filterByPriceRange, type PriceRangeId } from "@/lib/price-ranges";
import { ProductGrid } from "./product-grid";

/** Product grid with price range chips above it. One range at a time; clicking the active chip clears it. */
export function PriceFilteredProducts({ products }: { products: Product[] }) {
  const [activeRange, setActiveRange] = useState<PriceRangeId | null>(null);
  const visible = activeRange ? filterByPriceRange(products, activeRange) : products;

  return (
    <div>
      <div role="group" aria-label="Filter by price" className="flex flex-wrap items-center gap-2">
        {PRICE_RANGES.map((range) => {
          const active = range.id === activeRange;
          return (
            <button
              key={range.id}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveRange(active ? null : range.id)}
              className={`h-8 rounded-full border px-3.5 text-sm transition-colors ${
                active
                  ? "border-accent bg-accent text-white hover:bg-accent-dark"
                  : "border-line text-muted hover:border-ink/30 hover:text-ink"
              }`}
            >
              {range.label}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <div className="pt-8">
          <ProductGrid products={visible} />
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-line bg-card/40 px-6 py-14 text-center">
          <p className="font-serif text-2xl tracking-tight sm:text-3xl">No objects in this price range.</p>
          <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
            Try another range, or clear the filter to see everything.
          </p>
          <button
            type="button"
            onClick={() => setActiveRange(null)}
            className="mt-6 inline-flex h-11 items-center rounded-full border border-ink/20 px-6 text-sm text-ink transition-colors hover:border-ink/40 hover:bg-paper"
          >
            Clear filter
          </button>
        </div>
      )}
    </div>
  );
}
