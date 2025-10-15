import { ProductList } from "@/vibes/soul/sections/product-list";

import defaultProducts from "@/src/product-data";

export default async function Home() {
  const products = await new Promise((resolve) =>
    setTimeout(() => resolve(defaultProducts), 3000)
  );

  return (
    <div className="">
      <h1 className="text-3xl m-8">Products</h1>
      <ProductList products={products} />
    </div>
  );
}
