import { describe, expect, it } from "vitest";
import { categories, products, type Product } from "@/data/products";
import {
  countByBrand,
  countByCategory,
  getBrandsWithCounts,
  getProduct,
  relatedProducts,
  sortNewestFirst,
} from "./catalog";

const make = (overrides: Partial<Product>): Product => ({
  id: "x",
  slug: "x",
  name: "X",
  brand: "fellow",
  category: "coffee",
  priceUsd: 10,
  description: "",
  imageUrl: "/images/x.jpg",
  staffPick: false,
  addedAt: "2026-01-01",
  ...overrides,
});

describe("countByCategory", () => {
  it("counts products per category and includes empty categories", () => {
    const counts = countByCategory([
      make({ slug: "a", category: "coffee" }),
      make({ slug: "b", category: "coffee" }),
      make({ slug: "c", category: "desk" }),
    ]);
    expect(counts.coffee).toBe(2);
    expect(counts.desk).toBe(1);
    expect(counts.books).toBe(0);
    expect(Object.keys(counts).sort()).toEqual(categories.map((c) => c.slug).sort());
  });

  it("adds up to the full catalog", () => {
    const total = Object.values(countByCategory(products)).reduce((a, b) => a + b, 0);
    expect(total).toBe(products.length);
  });
});

describe("countByBrand", () => {
  it("counts products per brand", () => {
    expect(countByBrand([make({ brand: "a" }), make({ brand: "a" }), make({ brand: "b" })])).toEqual({ a: 2, b: 1 });
  });

  it("matches the brand list counts", () => {
    const total = getBrandsWithCounts().reduce((sum, b) => sum + b.count, 0);
    expect(total).toBe(products.length);
  });
});

describe("sortNewestFirst", () => {
  it("orders by addedAt descending without mutating input", () => {
    const input = [make({ slug: "old", addedAt: "2026-01-01" }), make({ slug: "new", addedAt: "2026-06-01" })];
    expect(sortNewestFirst(input).map((p) => p.slug)).toEqual(["new", "old"]);
    expect(input[0].slug).toBe("old");
  });
});

describe("relatedProducts", () => {
  it("returns up to 4 others from the same category", () => {
    const product = getProduct("fellow-stagg-ekg-kettle")!;
    const related = relatedProducts(product, products);
    expect(related).toHaveLength(4);
    expect(related.every((p) => p.category === product.category)).toBe(true);
    expect(related.map((p) => p.slug)).not.toContain(product.slug);
  });
});
