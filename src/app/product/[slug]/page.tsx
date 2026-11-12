import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ProductGrid } from "@/components/product-grid";
import { ProductImage } from "@/components/product-image";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/data/products";
import { getBrand, getCategory, getProduct, relatedProducts } from "@/lib/catalog";
import { formatDate, formatPrice } from "@/lib/format";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/product/[slug]">): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product ? { title: product.name, description: product.description } : {};
}

export default async function ProductPage({ params }: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const brand = getBrand(product.brand);
  const category = getCategory(product.category);
  const related = relatedProducts(product, products);

  return (
    <Container>
      <nav aria-label="Breadcrumb" className="pt-8 text-sm text-muted">
        <Link href="/" className="hover:text-ink">
          Browse
        </Link>
        <span className="mx-2 text-line">/</span>
        {category && (
          <Link href={`/category/${category.slug}`} className="hover:text-ink">
            {category.name}
          </Link>
        )}
      </nav>

      <article className="grid gap-10 pt-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-14 lg:gap-20">
        <ProductImage product={product} sizes="(min-width: 768px) 55vw, 100vw" preload className="md:sticky md:top-24 md:self-start" />

        <div className="md:pt-6">
          {brand && (
            <Link
              href={`/brand/${brand.slug}`}
              className="text-xs font-medium tracking-[0.14em] text-muted uppercase underline-offset-4 hover:text-ink hover:underline"
            >
              {brand.name}
            </Link>
          )}
          <h1 className="mt-3 font-serif text-5xl leading-[1.02] tracking-tight lg:text-6xl">{product.name}</h1>
          <p className="mt-5 text-2xl tabular-nums">{formatPrice(product.priceUsd)}</p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{product.description}</p>

          <a
            href={brand?.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-[15px] font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Visit store
            <svg viewBox="0 0 16 16" fill="none" aria-hidden className="size-4">
              <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <dl className="mt-12 grid max-w-md grid-cols-[auto_1fr] gap-x-8 gap-y-3 border-t border-line pt-6 text-sm">
            <dt className="text-muted">Maker</dt>
            <dd>{brand ? <Link href={`/brand/${brand.slug}`} className="hover:underline">{brand.name}</Link> : product.brand}</dd>
            {brand && (
              <>
                <dt className="text-muted">Based in</dt>
                <dd>{brand.country}</dd>
              </>
            )}
            <dt className="text-muted">Category</dt>
            <dd>{category && <Link href={`/category/${category.slug}`} className="hover:underline">{category.name}</Link>}</dd>
            <dt className="text-muted">Added</dt>
            <dd>{formatDate(product.addedAt)}</dd>
          </dl>
        </div>
      </article>

      {related.length > 0 && category && (
        <section className="pt-24" aria-labelledby="related">
          <div id="related">
            <SectionHeading title={`More in ${category.name}`} href={`/category/${category.slug}`} linkLabel="View all" />
          </div>
          <ProductGrid products={related} />
        </section>
      )}
    </Container>
  );
}
