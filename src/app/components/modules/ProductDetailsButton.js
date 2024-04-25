"use client";
import React, { useState } from "react";
import { addToCart, updateQuantity, removeFromCart } from "../../redux/slices/cartSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";

function ProductDetailsButton({ id, product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, product, quantity }));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <button
          onClick={handleDecrement}
          className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
        >
          -
        </button>
        <span className="text-gray-800 font-bold text-xl">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-md shadow-md hover:bg-blue-600 transition-colors mb-4"
      >
        <Link href="/cart">Add to Cart</Link>
      </button>
    </div>
  );
}

export default ProductDetailsButton;
