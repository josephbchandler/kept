import Link from "next/link";
import { Suspense } from "react";
import { getCategories } from "@/lib/catalog";
import { Container } from "./container";
import { SearchBox, SearchBoxFallback } from "./search-box";

export function SiteHeader() {
  const categories = getCategories();

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center gap-6">
          <Link href="/" className="group flex items-baseline gap-1.5" aria-label="Kept, home">
            <span className="font-serif text-[1.9rem] leading-none tracking-tight">Kept</span>
            <span className="size-1.5 rounded-full bg-accent transition-transform group-hover:scale-125" />
          </Link>

          <nav aria-label="Categories" className="hidden items-center gap-5 text-sm text-muted lg:flex">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="transition-colors hover:text-ink">
                {category.name}
              </Link>
            ))}
            <span className="h-4 w-px bg-line" aria-hidden />
            <Link href="/brands" className="transition-colors hover:text-ink">
              Brands
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <Link href="/brands" className="text-sm text-muted transition-colors hover:text-ink lg:hidden">
              Brands
            </Link>
            <div className="hidden w-64 sm:block">
              <Suspense fallback={<SearchBoxFallback />}>
                <SearchBox />
              </Suspense>
            </div>
          </div>
        </div>

        <div className="pb-3 sm:hidden">
          <Suspense fallback={<SearchBoxFallback />}>
            <SearchBox />
          </Suspense>
        </div>
      </Container>

      <nav
        aria-label="Categories"
        className="flex gap-2 overflow-x-auto border-t border-line/60 px-5 py-2.5 text-sm [scrollbar-width:none] sm:px-8 lg:hidden"
      >
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="shrink-0 rounded-full border border-line px-3 py-1 text-muted transition-colors hover:border-ink/30 hover:text-ink"
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
