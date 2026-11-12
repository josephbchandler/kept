import { describe, expect, it } from "vitest";
import { products, type Product } from "@/data/products";
import { PRICE_RANGES, filterByPriceRange, getPriceRange } from "./price-ranges";

const make = (priceUsd: number, slug = "x"): Product => ({
  id: slug,
  slug,
  name: "X",
  brand: "fellow",
  category: "coffee",
  priceUsd,
  description: "",
  imageUrl: "/images/x.jpg",
  staffPick: false,
  addedAt: "2026-01-01",
});

describe("PRICE_RANGES", () => {
  it("labels the four buckets", () => {
    expect(PRICE_RANGES.map((range) => range.label)).toEqual(["Under $50", "$50–$250", "$250–$1,000", "$1,000+"]);
  });
});

describe("filterByPriceRange", () => {
  it("puts each boundary price in exactly one range", () => {
    const items = [make(49.99, "a"), make(50, "b"), make(250, "c"), make(1000, "d")];
    expect(filterByPriceRange(items, "under-50").map((p) => p.slug)).toEqual(["a"]);
    expect(filterByPriceRange(items, "50-250").map((p) => p.slug)).toEqual(["b"]);
    expect(filterByPriceRange(items, "250-1000").map((p) => p.slug)).toEqual(["c"]);
    expect(filterByPriceRange(items, "1000-plus").map((p) => p.slug)).toEqual(["d"]);
  });

  it("covers the whole catalog across the ranges", () => {
    const counted = PRICE_RANGES.map((range) => filterByPriceRange(products, range.id).length);
    expect(counted.reduce((sum, count) => sum + count, 0)).toBe(products.length);
  });

  it("keeps the input order and does not mutate it", () => {
    const items = [make(200, "a"), make(20, "b")];
    expect(filterByPriceRange(items, "under-50").map((p) => p.slug)).toEqual(["b"]);
    expect(items).toHaveLength(2);
  });

  it("rejects an unknown range", () => {
    expect(() => getPriceRange("nope" as never)).toThrow();
  });
});
