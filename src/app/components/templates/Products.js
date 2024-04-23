'use client'
import React, { useState, useEffect } from "react";
import ProductsCard from "../modules/ProductsCard";
import Link from "next/link";
import GetProductsData from '../modules/GetProductsData'

function Products({searchTerm}) {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    GetProductsData().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);


  return (
    <div>
      <div className="text-center flex flex-wrap justify-center">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/products/productDetails/${product.id}`}>
            <div className="p-4 mx-auto my-2">
              <ProductsCard {...product} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
