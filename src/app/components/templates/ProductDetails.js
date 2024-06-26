"use client";
import React, { useEffect, useState } from "react";
import ProductDetailsButton from "../modules/ProductDetailsButton";
import Image from "next/image";
import fetchProductDetails from "../FetchProductDetails";

function ProductDetails({ id }) {
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    async function getProductDetails() {
      const productDetails = await fetchProductDetails(id);
      setProduct(productDetails);
    }

    getProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-24">
        <div className="w-full md:w-2/3 m-auto">
          <Image
            src={product.image}
            alt={product.title}
            className="w-1/2 h-1/2 m-auto md:h-3/4 md:w-3/4 object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full m-auto p-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex items-center mb-4 ">
            <span className="text-gray-800 font-bold text-xl mr-2">
              ${product.price}
            </span>
            <span className="bg-green-500 text-white px-2 py-1 text-sm rounded-md">
              {product.category}
            </span>
          </div>
          <div className="flex items-center mb-5">
            {product.rating && ( // Check if product.rating exists
              <span className="text-sm text-gray-800 mr-2">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </span>
            )}
            <div className="flex items-center ">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 fill-current ${
                    index < (product.rating ? product.rating.rate : 0) // Check if product.rating exists before accessing rate
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 1l2.56 5.72 6.44.66-4.68 4.41 1.39 6.55-6.12-3.94-6.12 3.94 1.39-6.55-4.68-4.41 6.44-.66z" />
                </svg>
              ))}
            </div>
          </div>
          <ProductDetailsButton id={id} product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
