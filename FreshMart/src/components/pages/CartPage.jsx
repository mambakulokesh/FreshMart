import React, { useState } from "react";
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; 

// Mock cart data (dairy products)
const initialCartItems = [
  {
    id: 1,
    name: "Organic Whole Milk",
    price: 4.99,
    quantity: 2,
    image: "https://via.placeholder.com/80x80?text=Milk",
  },
  {
    id: 2,
    name: "Cheddar Cheese Block",
    price: 6.49,
    quantity: 1,
    image: "https://via.placeholder.com/80x80?text=Cheese",
  },
  {
    id: 3,
    name: "Greek Yogurt",
    price: 3.29,
    quantity: 3,
    image: "https://via.placeholder.com/80x80?text=Yogurt",
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const navigate = useNavigate();
  const { user } = useAuth(); 

  // Update quantity
  const updateQuantity = (id, delta) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(0, item.quantity + delta) }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove items if quantity = 0
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total
  const total = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  // Handle checkout navigation
  const handleCheckout = () => {
    if (user) {
      navigate("/checkout"); // Proceed to checkout if logged in
    } else {
      navigate("/login"); // Redirect to login if not logged in
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 via-cyan-300 to-blue-400 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 relative">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-800 mb-8">
          Your Eco-Dairy Cart 🥛
        </h2>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-teal-700">Your cart is empty.</p>
            <button
              onClick={() => navigate("/shop")}
              className="mt-4 bg-teal-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-700 transition transform hover:scale-105"
            >
              Shop Now
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-teal-50 border border-teal-200 rounded-xl p-4 hover:bg-teal-100 transition"
              >
                {/* Item Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                {/* Item Details */}
                <div className="flex-1 ml-0 sm:ml-4 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-teal-900">
                    {item.name}
                  </h3>
                  <p className="text-teal-700">
                    ${item.price.toFixed(2)} / unit
                  </p>
                </div>
                {/* Quantity Controls */}
                <div className="flex items-center space-x-2 my-3 sm:my-0">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-2 bg-teal-100 rounded-full text-teal-700 hover:bg-teal-200 transition"
                  >
                    <MinusIcon className="h-5 w-5" />
                  </button>
                  <span className="text-lg font-medium text-teal-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-2 bg-teal-100 rounded-full text-teal-700 hover:bg-teal-200 transition"
                  >
                    <PlusIcon className="h-5 w-5" />
                  </button>
                </div>
                {/* Item Total */}
                <p className="text-lg font-semibold text-teal-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-0 sm:ml-4 mt-3 sm:mt-0 p-2 bg-red-100 rounded-full text-red-600 hover:bg-red-200 transition"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="border-t border-teal-200 pt-6 mt-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-teal-800">Total</h3>
                <p className="text-2xl font-bold text-teal-900">${total}</p>
              </div>
              <p className="text-sm text-teal-600 mt-2">
                🌿 Free eco-friendly shipping on orders over $50
              </p>
              <button
                onClick={handleCheckout}
                className="w-full mt-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold py-3 rounded-full hover:from-teal-700 hover:to-blue-700 transition transform hover:scale-105"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
