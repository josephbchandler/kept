"use client";

import { useMemo } from "react";
import { PageHeading } from "@/components/page-heading";
import { ProductGrid } from "@/components/product-grid";
import { brands, products } from "@/data/products";
import { pluralize } from "@/lib/format";
import { searchProducts } from "@/lib/search";

/** Filters the catalog in the browser by product name or brand. */
export function SearchResults({ query }: { query: string }) {
  const results = useMemo(() => searchProducts(products, brands, query), [query]);
  const trimmed = query.trim();

  if (!trimmed) {
    return <PageHeading title="Search" description="Search by object name or brand." />;
  }

  return (
    <>
      <PageHeading eyebrow="Search" title={`“${trimmed}”`} meta={pluralize(results.length, "result")} />
      <div className="pt-10">{results.length > 0 ? <ProductGrid products={results} /> : <p className="text-lg text-muted">No results.</p>}</div>
    </>
  );
}
