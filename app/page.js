import { ProductList } from "@/vibes/soul/sections/product-list";

import defaultProducts from "@/src/product-data";

export default async function Home() {
  console.log("Rendering...");

  return (
    <>
      <h1 className="text-3xl m-8">Products</h1>
      <ProductList products={defaultProducts} />
    </>
  );
}
