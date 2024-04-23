'use client'
import { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="border-b border-gray-200 py-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-gray-600">Price: ${item.price}</p>
                </div>
                <div className="flex items-center">
                  <label className="mr-2">Quantity:</label>
                  <input
                    type="number"
                    className="border border-gray-300 rounded-md px-2 py-1 text-sm w-16"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                  <button
                    className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="mt-4 text-xl font-bold">Total: ${totalPrice}</h3>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md text-sm">Checkout</button>
    </div>
  );
};

export default CartPage;
