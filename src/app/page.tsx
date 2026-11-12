import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PriceFilteredProducts } from "@/components/price-filtered-products";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/data/products";
import { countByCategory, getAllProducts, getBrandsWithCounts, getCategories, getProductsInCategory, getStaffPicks } from "@/lib/catalog";
import { pluralize } from "@/lib/format";

export default function HomePage() {
  const categories = getCategories();
  const counts = countByCategory(products);
  const staffPicks = getStaffPicks();
  const allProducts = getAllProducts();
  const brandCount = getBrandsWithCounts().length;

  return (
    <Container>
      <section className="grid gap-8 pt-14 pb-14 sm:pt-20 md:grid-cols-[1fr_auto] md:items-end md:pb-20">
        <h1 className="max-w-4xl font-serif text-[3.4rem] leading-[0.98] tracking-tight sm:text-7xl lg:text-[6.25rem]">
          Things worth keeping<span className="text-accent">.</span>
        </h1>
        <div className="max-w-xs text-[15px] leading-relaxed text-muted md:pb-3">
          <p>An index of everyday objects chosen for how they are made, how they age and how often you reach for them.</p>
          <p className="mt-4 text-sm text-ink">
            {pluralize(allProducts.length, "object")} · {pluralize(brandCount, "maker")} · {pluralize(categories.length, "category", "categories")}
          </p>
        </div>
      </section>

      <section aria-labelledby="categories-heading">
        <h2 id="categories-heading" className="sr-only">
          Categories
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-6">
          {categories.map((category) => {
            const cover = getProductsInCategory(category.slug).find((p) => p.staffPick) ?? getProductsInCategory(category.slug)[0];
            return (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl bg-card p-4 xl:aspect-[3/4]"
                >
                  {cover && (
                    <Image
                      src={cover.imageUrl}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 220px, (min-width: 640px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="relative flex items-end justify-between gap-2 text-white">
                    <span className="font-serif text-2xl leading-none sm:text-3xl">{category.name}</span>
                    <span className="text-xs text-white/80 tabular-nums">{counts[category.slug]}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {staffPicks.length > 0 && (
        <section className="pt-20" aria-labelledby="staff-picks">
          <div id="staff-picks">
            <SectionHeading title="Staff picks" />
          </div>
          <ul className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {staffPicks.map((product) => (
              <li key={product.id} className="w-[72%] shrink-0 snap-start sm:w-auto">
                <ProductCard product={product} sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 72vw" />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="pt-20" aria-labelledby="everything">
        <div id="everything">
          <SectionHeading title="Recently added" href="/brands" linkLabel="Browse by brand" />
        </div>
        <PriceFilteredProducts products={allProducts} />
      </section>
    </Container>
  );
}
