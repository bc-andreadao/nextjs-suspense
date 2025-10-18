import { Suspense } from "react";

import { ProductList } from "@/vibes/soul/sections/product-list";

import defaultProducts from "@/src/product-data";

async function fetchProductList(delay) {
  const products = await new Promise((resolve) =>
    setTimeout(() => resolve(defaultProducts), delay)
  );

  return <ProductList products={products} />;
}

export default function Home() {
  return (
    <>
      <h1 className="text-3xl m-8">Products</h1>
      <Suspense fallback={<div>Loading products...</div>}>
        {fetchProductList(2000)}
      </Suspense>

      <Suspense fallback={<div>Loading products...</div>}>
        {fetchProductList(5000)}
      </Suspense>
    </>
  );
}
