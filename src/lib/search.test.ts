import { describe, expect, it } from "vitest";
import { brands, products } from "@/data/products";
import { normalize, searchProducts } from "./search";

const slugs = (query: string) => searchProducts(products, brands, query).map((p) => p.slug);

describe("normalize", () => {
  it("lowercases, trims and strips accents", () => {
    expect(normalize("  Lars Müller ")).toBe("lars muller");
  });
});

describe("searchProducts", () => {
  it("matches product names case-insensitively", () => {
    expect(slugs("AERON")).toEqual(["aeron-chair"]);
  });

  it("matches brand names", () => {
    const results = slugs("fellow");
    expect(results.length).toBe(products.filter((p) => p.brand === "fellow").length);
    expect(results).toContain("fellow-stagg-ekg-kettle");
  });

  it("requires every word to match name or brand", () => {
    expect(slugs("lamy 2000")).toEqual(["lamy-2000-fountain-pen"]);
    expect(slugs("fountain pen")).toHaveLength(2);
    expect(slugs("sony kettle")).toEqual([]);
  });

  it("ignores accents in brand names", () => {
    expect(slugs("muller").length).toBeGreaterThan(0);
  });

  it("returns nothing for an empty or whitespace query", () => {
    expect(slugs("")).toEqual([]);
    expect(slugs("   ")).toEqual([]);
  });

  it("returns nothing when there is no match", () => {
    expect(slugs("zzzz")).toEqual([]);
  });

  it("does not search descriptions", () => {
    // "Florence" appears only in the Linea Micra description.
    expect(slugs("florence")).toEqual([]);
  });
});
