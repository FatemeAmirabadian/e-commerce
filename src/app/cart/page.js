"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../redux/slices/cartSlice";
import { LuTrash2 } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

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
              className="max-w-md md:max-w-2xl mx-auto rounded overflow-hidden shadow-lg p-1"
            >
              <div className="h-80 md:h-full p-4 flex">
                <div className="w-1/2 m-auto p-5">
                  <Image
                    src={item.product.image}
                    alt="Product"
                    width={500}
                    height={500}
                  />
                </div>

                {/* title - price - button */}
                <div className="w-1/2 pl-1 lg:pl-10 ml-2 my-auto">
                  <Link href={`/products/productDetails/${item.id}`}>
                    <h2 className="text-md md:text-lg font-semibold">
                      {item.product.title}
                    </h2>
                  </Link>
                  <div className="pt-4 lg:pt-16">
                    <p className="font-bold text-gray-600 text-md md:text-xl">
                      Price: ${item.product.price}
                    </p>
                    <div className="flex content-center mt-2">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="bg-gray-200 text-gray-800 p-3 sm:p-2 rounded mr-1"
                      >
                        -
                      </button>
                      <p className="flex items-center justify-center border border-gray-300 rounded p-3 text-center">
                        {item.quantity}
                      </p>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="bg-gray-200 text-gray-800 p-3 sm:p-2 rounded ml-1"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="bg-red-500 text-white text-xl p-2 sm:p-2 rounded ml-2"
                      >
                        <LuTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="max-w-md md:max-w-2xl shadow-lg mx-auto rounded p-5 mt-10 md:flex justify-between items-center text-center">
            <h2 className="text-xl font-bold mb-3 md:mb-0">
              TotalPrice ${total.toFixed(2)}
            </h2>
            <div className="flex items-center justify-center">
              <button
                onClick={handleClearCart}
                className="flex items-center bg-red-500 font-bold text-white py-2 rounded-md px-2 mr-2"
              >
                Clear All
                <LuTrash2 className="ml-1" />
              </button>
              <button
                onClick={handleClearCart}
                className="bg-green-500 font-bold text-white py-2 rounded-md px-2"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
