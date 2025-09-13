import React, { useState } from "react";
import { ShoppingBag, CreditCard, Truck, MapPin, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-teal-800 to-blue-900 text-white flex flex-col items-center justify-center p-4 text-center">
        <div className="animate-bounce mb-6">
          <CheckCircle className="h-20 w-20 text-green-400 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-cyan-100">🎉 Order Confirmed! 🎉</h1>
        <p className="text-lg text-cyan-200 mb-8 max-w-md">
          Your seafood delights are on the way! You'll receive a confirmation email shortly.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-teal-800 to-blue-900 text-white pt-20 pb-12 px-4 sm:px-6 md:px-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 mb-8 text-cyan-200 hover:text-white transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Cart</span>
      </button>

      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-2 text-center text-cyan-100 flex items-center justify-center space-x-3">
          <ShoppingBag className="h-8 w-8" />
          <span>Checkout <span className="animate-pulse">🐟</span></span>
        </h1>
        <p className="text-center text-cyan-200 mb-10">
          Almost there! Fill in your details to complete your order.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Delivery Details */}
          <div className="bg-teal-800/40 p-6 rounded-xl border border-teal-600/30 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-6 text-cyan-100 flex items-center space-x-2">
              <Truck className="h-6 w-6" />
              <span>Delivery Details</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-cyan-200 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-200 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-200 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                  placeholder="123 Ocean View"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-cyan-200 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                    placeholder="Mumbai"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cyan-200 mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                    placeholder="Maharashtra"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cyan-200 mb-1">ZIP</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                    placeholder="400001"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary & Payment */}
          <div className="bg-teal-800/40 p-6 rounded-xl border border-teal-600/30 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-6 text-cyan-100 flex items-center space-x-2">
              <CreditCard className="h-6 w-6" />
              <span>Payment <span className="animate-pulse">💳</span></span>
            </h2>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-cyan-100 mb-3">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-cyan-200">Wild-Caught Salmon (2kg)</span>
                  <span className="text-cyan-100">₹1299.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-200">Jumbo Prawns (1kg)</span>
                  <span className="text-cyan-100">₹899.99</span>
                </div>
                <div className="flex justify-between font-bold mt-3 pt-3 border-t border-teal-600/30">
                  <span className="text-cyan-100">Total</span>
                  <span className="text-cyan-100">₹2199.98</span>
                </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-cyan-200 mb-1">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-cyan-200 mb-1">Expiry</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cyan-200 mb-1">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                    placeholder="123"
                  />
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? "bg-teal-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">🌀</span>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="h-5 w-5" />
                    <span>Pay ₹2199.98</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-pulse {
          display: inline-block;
          animation: pulse 2s infinite;
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
    </div>
  );
}

export default Checkout;
