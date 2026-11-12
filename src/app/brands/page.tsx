import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeading } from "@/components/page-heading";
import { getBrandsWithCounts } from "@/lib/catalog";
import { pluralize } from "@/lib/format";

export const metadata: Metadata = { title: "Brands" };

export default function BrandsPage() {
  const brands = getBrandsWithCounts();

  return (
    <Container>
      <PageHeading title="Brands" description="The makers behind everything in the index." meta={pluralize(brands.length, "brand")} />
      <ul className="grid border-line md:grid-cols-2 md:gap-x-12">
        {brands.map((brand) => (
          <li key={brand.slug} className="border-b border-line">
            <Link href={`/brand/${brand.slug}`} className="group flex items-baseline justify-between gap-4 py-5">
              <span>
                <span className="font-serif text-2xl tracking-tight group-hover:text-accent sm:text-3xl">{brand.name}</span>
                <span className="ml-3 text-sm text-muted">{brand.country}</span>
              </span>
              <span className="shrink-0 text-sm text-muted tabular-nums">{pluralize(brand.count, "object")}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
