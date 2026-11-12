import { describe, expect, it } from "vitest";
import { formatDate, formatPrice, pluralize } from "./format";

describe("formatPrice", () => {
  it("drops cents for whole-dollar prices", () => {
    expect(formatPrice(37)).toBe("$37");
    expect(formatPrice(1895)).toBe("$1,895");
  });

  it("keeps cents when there are any", () => {
    expect(formatPrice(14.95)).toBe("$14.95");
    expect(formatPrice(449.99)).toBe("$449.99");
    expect(formatPrice(50.5)).toBe("$50.50");
  });

  it("handles floating point noise", () => {
    expect(formatPrice(0.1 + 0.2)).toBe("$0.30");
    expect(formatPrice(29.999999)).toBe("$30");
  });
});

describe("formatDate", () => {
  it("formats ISO dates without shifting the day", () => {
    expect(formatDate("2026-11-04")).toBe("Nov 4, 2026");
    expect(formatDate("2026-01-01")).toBe("Jan 1, 2026");
  });
});

describe("pluralize", () => {
  it("picks singular or plural", () => {
    expect(pluralize(1, "object")).toBe("1 object");
    expect(pluralize(7, "object")).toBe("7 objects");
    expect(pluralize(0, "result")).toBe("0 results");
  });
});
