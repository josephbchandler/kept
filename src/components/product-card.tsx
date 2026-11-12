import Link from "next/link";
import type { Product } from "@/data/products";
import { brandName } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { ProductImage } from "./product-image";

export function ProductCard({ product, sizes }: { product: Product; sizes?: string }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block focus-visible:outline-none">
      <ProductImage
        product={product}
        sizes={sizes ?? "(min-width: 1280px) 320px, (min-width: 768px) 33vw, 50vw"}
        className="ring-accent/60 ring-offset-2 ring-offset-paper group-focus-visible:ring-2"
      />
      <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-medium tracking-[0.12em] text-muted uppercase">{brandName(product.brand)}</p>
          <h3 className="mt-1 text-[15px] leading-snug text-ink decoration-ink/30 underline-offset-4 group-hover:underline">
            {product.name}
          </h3>
        </div>
        <p className="shrink-0 text-[15px] text-ink tabular-nums sm:pt-[18px]">{formatPrice(product.priceUsd)}</p>
      </div>
    </Link>
  );
}
