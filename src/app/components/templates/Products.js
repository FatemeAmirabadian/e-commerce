import React from "react";
import ProductsCard from "../modules/ProductsCard";
import Link from "next/link";

async function Products() {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });
  const products = await res.json();

  return (
    <div className="text-center flex flex-wrap justify-center">
      {products.map((product) => (
        <Link href={`/products/productDetails/${product.id}`}>
          <div key={product.id} className="p-4 mx-auto my-2">
            <ProductsCard {...product} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;
