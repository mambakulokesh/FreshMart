import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, ArrowLeft } from "lucide-react";

function ProductViewPage() {
  const navigate = useNavigate();

  // Static product data
  const product = {
    id: 1,
    name: "Wild-Caught Atlantic Salmon",
    price: 1299.99,
    description:
      "Premium Atlantic salmon, sustainably caught and flash-frozen to preserve freshness. Rich in omega-3 fatty acids and perfect for grilling, baking, or sushi. Each fillet is hand-cut and vacuum-sealed for your convenience.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  };

  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
    // In a real app, you would call `addToCart(product)` from your context
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-teal-800 to-blue-900 text-white pt-24 pb-12 px-4 sm:px-6 md:px-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 mb-6 text-cyan-200 hover:text-white transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Shop</span>
      </button>

      {/* Product View Card */}
      <div className="max-w-4xl mx-auto bg-teal-800/50 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm border border-teal-600/30">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2 p-6 flex items-center justify-center bg-teal-900/30">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Product Details */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-cyan-100">
              {product.name}
            </h1>
            <p className="text-lg sm:text-xl text-teal-200 mb-4">
              ₹{product.price.toFixed(2)}
            </p>
            <p className="text-sm sm:text-base text-cyan-200 mb-6">
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={() => navigate("/order")}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-teal-800/30 rounded-xl border border-teal-600/30">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-cyan-100">
          Why Choose {product.name}?
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-cyan-200">
          <li>Freshly caught and sustainably sourced</li>
          <li>Rich in protein and omega-3 fatty acids</li>
          <li>Perfect for grilling, baking, or frying</li>
          <li>Delivered to your doorstep in eco-friendly packaging</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductViewPage;
