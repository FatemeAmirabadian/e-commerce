'use client'
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../redux/slices/cartSlice";
import { LuTrash2 } from "react-icons/lu";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) =>
    state.cart.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    )
  );
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      quantity = 1;
    }
    dispatch(
      updateQuantity({
        id: itemId,
        quantity: quantity,
        price: cartItems.find((item) => item.id === itemId).product.price,
      })
    );
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p className="font-bold text-xl text-center pt-40">
          Your cart is empty!
        </p>
      ) : (
        <div className="py-28">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="max-w-2xl mx-auto rounded overflow-hidden shadow-lg p-1"
            >
              <div className="h-96 p-4 flex">
                <img
                  className="w-2/4 h-2/4 m-auto"
                  src={item.product.image}
                  alt="Product"
                />

                {/* title - price - button */}
                <div className=" pl-1 lg:pl-10 ml-1 my-auto">
                  <h2 className="text-md md:text-lg font-semibold">
                    {item.product.title}
                  </h2>
                  <div className="pt-4 lg:pt-16">
                    <p className="font-bold text-gray-600 text-md md:text-xl">
                      Price: ${item.product.price}
                    </p>
                    <div className="flex content-center mt-2">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md mr-1"
                      >
                        -
                      </button>
                      <p className="border border-gray-300 rounded-md px-2 py-1 w-12 text-center">
                        {item.quantity}
                      </p>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md ml-1"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="bg-red-500 text-white text-xl px-3 py-1 rounded-md ml-1"
                      >
                        <LuTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="max-w-xl mx-auto rounded px-5 mt-5 flex justify-between content-center text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Total: ${total.toFixed(2)}
            </h2>
            <div className="my-auto">
              <button
                onClick={handleClearCart}
                className="bg-gray-200 font-bold text-gray-800 py-2 rounded-md px-2"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
