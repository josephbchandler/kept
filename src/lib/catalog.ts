import {
  brands,
  categories,
  products,
  type Brand,
  type Category,
  type CategorySlug,
  type Product,
} from "@/data/products";

/** Returns a copy sorted by `addedAt`, newest first. */
export function sortNewestFirst(items: Product[]): Product[] {
  return [...items].sort((a, b) => b.addedAt.localeCompare(a.addedAt));
}

/** Number of products in each category (categories with no products count 0). */
export function countByCategory(items: Product[]): Record<CategorySlug, number> {
  const counts = Object.fromEntries(categories.map((c) => [c.slug, 0])) as Record<CategorySlug, number>;
  for (const item of items) counts[item.category] += 1;
  return counts;
}

/** Number of products for each brand slug. */
export function countByBrand(items: Product[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const item of items) counts[item.brand] = (counts[item.brand] ?? 0) + 1;
  return counts;
}

/**
 * Up to `limit` other products from the same category, newest first.
 */
export function relatedProducts(product: Product, items: Product[], limit = 4): Product[] {
  return sortNewestFirst(
    items.filter((p) => p.category === product.category && p.slug !== product.slug),
  ).slice(0, limit);
}

// Convenience lookups against the bundled catalog.

export function getAllProducts(): Product[] {
  return sortNewestFirst(products);
}

export function getStaffPicks(): Product[] {
  return sortNewestFirst(products.filter((p) => p.staffPick));
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategories(): Category[] {
  return categories;
}

export function getProductsInCategory(slug: string): Product[] {
  return sortNewestFirst(products.filter((p) => p.category === slug));
}

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

/** Brands sorted A–Z, each with its product count. */
export function getBrandsWithCounts(): (Brand & { count: number })[] {
  const counts = countByBrand(products);
  return [...brands]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((brand) => ({ ...brand, count: counts[brand.slug] ?? 0 }));
}

export function getProductsByBrand(slug: string): Product[] {
  return sortNewestFirst(products.filter((p) => p.brand === slug));
}

/** Brand lookup that always returns a name, for display. */
export function brandName(slug: string): string {
  return getBrand(slug)?.name ?? slug;
}
