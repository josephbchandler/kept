import type { Brand, Product } from "@/data/products";

/** Lowercases, trims and strips accents so "muller" matches "Müller". */
export function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Filters products by name or brand name. Every word in the query must appear
 * in either the product name or its brand's name. An empty query returns [].
 */
export function searchProducts(products: Product[], brands: Brand[], query: string): Product[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];

  const brandNames = new Map(brands.map((b) => [b.slug, normalize(b.name)]));

  return products.filter((product) => {
    const haystack = `${normalize(product.name)} ${brandNames.get(product.brand) ?? ""}`;
    return terms.every((term) => haystack.includes(term));
  });
}
