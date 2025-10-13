  const Products = [
    { id: 1, name: 'Product 1'},
    { id: 2, name: 'Product 2'},
    { id: 3, name: 'Product 3'},
  ];



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
