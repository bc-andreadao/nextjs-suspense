import { Suspense } from "react";

import { ProductList } from "@/vibes/soul/sections/product-list";

import defaultProducts from "@/src/product-data";

async function Products({ delay }) {
  const products = await new Promise((resolve) =>
    setTimeout(() => resolve(defaultProducts), delay)
  );

  return <ProductList products={products} />;
}

function Fallback() {
  return <div className="m-16">Loading products...</div>;
}

export default function Home() {
  return (
    <>
      <h1 className="text-3xl m-8">Products</h1>
      <Suspense fallback={<Fallback />}>
        <Products delay={2000} />
        <Suspense fallback={<Fallback />}>
          <Products delay={5000} />
        </Suspense>
      </Suspense>
    </>
  );
}
