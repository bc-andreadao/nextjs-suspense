import { ProductList } from "@/vibes/soul/sections/product-list";

import defaultProducts from "@/src/product-data";

export default async function Home() {
  const products = await new Promise((resolve) =>
    setTimeout(() => resolve(defaultProducts), 5000)
  );

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-4">
      <h1 className="text-3xl text-center mb-8">Products</h1>
      <ProductList products={products} />
    </div>
  );
}
