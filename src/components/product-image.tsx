import Image from "next/image";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
  sizes: string;
  preload?: boolean;
  className?: string;
};

/** Product photo on a soft card, 4:5. */
export function ProductImage({ product, sizes, preload = false, className = "" }: Props) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-card ${className}`}>
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}
