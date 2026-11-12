import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { brands, categories, CATEGORY_SLUGS, products } from "./products";

const unique = (values: string[]) => new Set(values).size === values.length;

describe("catalog data", () => {
  it("has unique product ids and slugs", () => {
    expect(unique(products.map((p) => p.id))).toBe(true);
    expect(unique(products.map((p) => p.slug))).toBe(true);
  });

  it("has unique brand and category slugs", () => {
    expect(unique(brands.map((b) => b.slug))).toBe(true);
    expect(categories.map((c) => c.slug)).toEqual([...CATEGORY_SLUGS]);
  });

  it("uses URL-safe slugs", () => {
    for (const slug of [...products, ...brands].map((x) => x.slug)) {
      expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("only references known brands and categories", () => {
    const brandSlugs = new Set(brands.map((b) => b.slug));
    const categorySlugs = new Set<string>(CATEGORY_SLUGS);
    for (const p of products) {
      expect(brandSlugs, `${p.slug} brand`).toContain(p.brand);
      expect(categorySlugs, `${p.slug} category`).toContain(p.category);
    }
  });

  it("has at least one product per brand and per category", () => {
    for (const b of brands) expect(products.some((p) => p.brand === b.slug), b.slug).toBe(true);
    for (const c of categories) expect(products.some((p) => p.category === c.slug), c.slug).toBe(true);
  });

  it("has positive prices and valid ISO dates", () => {
    for (const p of products) {
      expect(p.priceUsd, p.slug).toBeGreaterThan(0);
      expect(p.addedAt, p.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Number.isNaN(Date.parse(p.addedAt)), p.slug).toBe(false);
    }
  });

  it("has a non-empty description and an image file for every product", () => {
    for (const p of products) {
      expect(p.description.length, p.slug).toBeGreaterThan(20);
      expect(p.imageUrl, p.slug).toMatch(/^\/images\//);
      expect(existsSync(join(process.cwd(), "public", p.imageUrl)), p.imageUrl).toBe(true);
    }
  });

  it("has at least one staff pick", () => {
    expect(products.some((p) => p.staffPick)).toBe(true);
  });
});
