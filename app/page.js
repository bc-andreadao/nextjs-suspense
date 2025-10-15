"use client";

import { useEffect, useState } from "react";
import { ProductList } from "@/vibes/soul/sections/product-list"


export default function Home() {
  const [products, setProducts] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("api/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .then(() => setLoading(false));
  }, []);

  return (
    <>
      <h1 className={"text-3xl m-8"}>Products</h1>
      {isLoading ? <p>Loading products...</p> : <ProductList products={products} />}
    </>
  )
}
