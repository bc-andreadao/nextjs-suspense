import ProductData from "@/src/product-data";

export default async function Home() {
  const Products = await new Promise((resolve) =>
    setTimeout(() => resolve(ProductData), 5000)
  );

  return (
    <>
      <h1 className="text-3xl">Products</h1>
      <ul>
        {Products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
