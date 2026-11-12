import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { PageHeading } from "@/components/page-heading";
import { PriceFilteredProducts } from "@/components/price-filtered-products";
import { getCategories, getCategory, getProductsInCategory } from "@/lib/catalog";
import { pluralize } from "@/lib/format";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps<"/category/[slug]">): Promise<Metadata> {
  const category = getCategory((await params).slug);
  return category ? { title: category.name, description: category.description } : {};
}

export default async function CategoryPage({ params }: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsInCategory(category.slug);

  return (
    <Container>
      <PageHeading
        eyebrow="Category"
        title={category.name}
        description={category.description}
        meta={pluralize(items.length, "object")}
      />
      <div className="pt-10">
        <PriceFilteredProducts products={items} />
      </div>
    </Container>
  );
}
