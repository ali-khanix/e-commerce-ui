import ProductList from "@/components/ProductList";
import Image from "next/image";
import { connection } from "next/server";

export default async function Homepage() {
  await connection();
  return (
    <div className="">
      <div className="relative aspect-[3/1]">
        <Image
          src="/grand_seiko_banner.webp"
          alt="ساعت گرند سیکو"
          fill
          className="object-cover"
          priority
        />
      </div>
      <ProductList />
    </div>
  );
}
