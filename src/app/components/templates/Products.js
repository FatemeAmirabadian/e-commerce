"use client";
import React, { useState, useEffect } from "react";
import ProductsCard from "../modules/ProductsCard";
import Link from "next/link";

function Products({ searchTerm }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://crm-pi-ten.vercel.app/api/product", {
          method: "GET",
          cache: "no-store",
          headers: { "Content-Type": "application/json" },
        });
        // if (!res.ok) {
        //   throw new Error("Failed to fetch products");
        // }
        const products = await res.json();
        setFilteredProducts(products.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, filteredProducts]);

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
