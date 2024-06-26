'use client'
import React, { useState, useEffect } from "react";
import ProductsCard from "../modules/ProductsCard";
import Link from "next/link";
import fetchProducts from "../FetchProducts";

function Products({ searchTerm }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsData = await fetchProducts();
      setProducts(productsData);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div>
      <div className="text-center flex flex-wrap justify-center mt-16 mb-5">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/productDetails/${product.id}`}
          >
            <div className="p-4 mx-auto my-3">
              <ProductsCard {...product} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
