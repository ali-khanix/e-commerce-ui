import ProductList from "@/components/ProductList";
import Image from "next/image";

async function Homepage({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const cateogry = (await searchParams).category;
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
      <ProductList category={cateogry} params="homepage" />
    </div>
  );
}

export default Homepage;
