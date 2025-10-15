import { Suspense } from "react";

import { ProductList } from "@/vibes/soul/sections/product-list";

import defaultProducts from "@/src/product-data";

async function fetchProductList() {
  const products = await new Promise((resolve) =>
    setTimeout(() => resolve(defaultProducts), 3000)
  );

  return <ProductList products={products} />;
}

export default function Home() {
  return (
    <>
      <h1 className="text-3xl m-8">Products</h1>
      <Suspense fallback={<div>Loading products...</div>}>
        {fetchProductList()}
      </Suspense>
    </>
  );
}
