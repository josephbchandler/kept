import Link from "next/link";
import { getCategories } from "@/lib/catalog";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container className="flex flex-col gap-8 py-12 text-sm text-muted md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="font-serif text-2xl text-ink">
            Kept
          </Link>
          <p className="mt-2 leading-relaxed">An index of well-made everyday objects. Prices in USD.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {getCategories().map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className="hover:text-ink">
              {category.name}
            </Link>
          ))}
          <Link href="/brands" className="hover:text-ink">
            Brands
          </Link>
        </nav>
        <p className="md:text-right">Photography via Unsplash.</p>
      </Container>
    </footer>
  );
}
