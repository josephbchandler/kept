import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { PageHeading } from "@/components/page-heading";
import { ProductGrid } from "@/components/product-grid";
import { brands } from "@/data/products";
import { getBrand, getProductsByBrand } from "@/lib/catalog";
import { pluralize } from "@/lib/format";

export const dynamicParams = false;

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: PageProps<"/brand/[slug]">): Promise<Metadata> {
  const brand = getBrand((await params).slug);
  return brand ? { title: brand.name } : {};
}

export default async function BrandPage({ params }: PageProps<"/brand/[slug]">) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const items = getProductsByBrand(brand.slug);

  return (
    <Container>
      <PageHeading
        eyebrow={
          <Link href="/brands" className="hover:text-ink">
            Brands
          </Link>
        }
        title={brand.name}
        description={`Based in ${brand.country}.`}
        meta={
          <div className="flex flex-col gap-1 md:items-end">
            <span>{pluralize(items.length, "object")}</span>
            <a href={brand.url} target="_blank" rel="noopener noreferrer" className="text-ink underline-offset-4 hover:underline">
              {new URL(brand.url).hostname.replace(/^www\./, "")} ↗
            </a>
          </div>
        }
      />
      <div className="pt-10">
        <ProductGrid products={items} />
      </div>
    </Container>
  );
}
