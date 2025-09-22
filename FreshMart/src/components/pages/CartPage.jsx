import React, { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; 

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "Black Oven Pepperoni",
    price: 18,
    quantity: 1,
    image: "https://www.ex-coders.com/php-template/fresheat/assets/img/dishes/dishes3_1.png",
  },
  {
    id: 2,
    name: "Chicken Nut Pizza",
    price: 18,
    quantity: 1,
    image: "https://www.ex-coders.com/php-template/fresheat/assets/img/dishes/dishes3_2.png",
  },
  {
    id: 3,
    name: "Daal Loaded Vegan",
    price: 18,
    quantity: 1,
    image: "https://www.ex-coders.com/php-template/fresheat/assets/img/dishes/dishes3_3.png",
  },
  {
    id: 4,
    name: "Chicken Leg Piece",
    price: 18,
    quantity: 1,
    image: "https://www.ex-coders.com/php-template/fresheat/assets/img/dishes/dishes3_4.png",
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth(); 

  const updateQuantity = (id, delta) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, item.quantity + delta) }
              : item
          )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  const handleCheckout = () => {
    if (user) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="relative text-white py-16 shadow-2xl overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://t4.ftcdn.net/jpg/02/92/20/37/240_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg"
            alt="Food Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">CART LIST</h1>
          <div className="flex items-center justify-center space-x-2 text-lg font-medium">
            <span>Home</span>
            <span>/</span>
            <span className="text-yellow-300 font-bold">Cart List</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-700">Your cart is empty.</p>
            <button
              onClick={() => navigate("/shop")}
              className="mt-4 bg-red-600 text-white font-semibold py-2 px-6 rounded hover:bg-red-700 transition"
            >
              Shop Now
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items Table */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-red-600 text-white p-4">
                  <h2 className="text-lg font-semibold flex items-center">
                    <span className="mr-2">🛒</span>
                    Shopping cart updated!
                  </h2>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Menu Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Menu Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remove</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-full"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">${item.price}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 text-gray-500 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-8 text-gray-500 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 border text-gray-500 border-gray-300 rounded flex items-center justify-center hover:bg-gray-100"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">${item.price * item.quantity}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="p-4 bg-gray-50 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded"
                    />
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                      Apply Coupon
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                      Update cart
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="lg:col-span-1 text-gray-700">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Cart Totals</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Cart Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Shipping and Handling</h4>
                    <div className="space-y-2 text-sm">
                      <label className="flex items-center">
                        <input type="radio" name="shipping" className="mr-2" defaultChecked />
                        Free Shipping
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="shipping" className="mr-2" />
                        Flat rate
                      </label>
                      <p className="text-blue-600 cursor-pointer">Calculate shipping rates for other locations during checkout</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Order Total</span>
                      <span>${total}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition font-semibold"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
