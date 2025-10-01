"use client";

import Link from "next/link";
import { ProductType } from "./types";
import Image from "next/image";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[product.colors[0]]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
