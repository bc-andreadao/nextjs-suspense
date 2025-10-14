import Products from '@/src/product-data'

export default async function Home() {

  const Products2 = await new Promise((resolve) => setTimeout(() => resolve(Products), 5000))


  return (


    <>
      <h1 className="text-3xl">
        Products
      </h1>
      <ul>
        {Products2.map((product) => (
          <li key={product.id}>
            {product.name}
          </li>
        ))}
      </ul>
    </>
  );
}
