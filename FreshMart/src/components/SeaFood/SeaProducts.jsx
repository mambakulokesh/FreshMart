import React, { useState } from "react";
import { Search, Grid, List, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SeaProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([100, 3000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Chicken Pizza",
      restaurant: "The Registration Fee",
      price: 24.0,
      rating: 4.5,
      image:
        "https://www.ex-coders.com/php-template/fresheat/assets/img/food-items/item1_3.png",
    },
    {
      id: 2,
      name: "Egg And Cucumber",
      restaurant: "The Registration Fee",
      price: 28.0,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 3,
      name: "Chicken Fried Rice",
      restaurant: "The Registration Fee",
      price: 100.99,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 4,
      name: "Chicken Leg Piece",
      restaurant: "The Registration Fee",
      price: 20.99,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 5,
      name: "Chicken Pizza",
      restaurant: "The Registration Fee",
      price: 24.0,
      rating: 4.5,
      image:
        "https://www.ex-coders.com/php-template/fresheat/assets/img/food-items/item1_3.png",
    },
    {
      id: 6,
      name: "Egg And Cucumber",
      restaurant: "The Registration Fee",
      price: 28.0,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 7,
      name: "Chicken Fried Rice",
      restaurant: "The Registration Fee",
      price: 100.99,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 8,
      name: "Chicken Leg Piece",
      restaurant: "The Registration Fee",
      price: 20.99,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 9,
      name: "Chicken Pizza",
      restaurant: "The Registration Fee",
      price: 24.0,
      rating: 4.5,
      image:
        "https://www.ex-coders.com/php-template/fresheat/assets/img/food-items/item1_3.png",
    },
    {
      id: 10,
      name: "Egg And Cucumber",
      restaurant: "The Registration Fee",
      price: 28.0,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 11,
      name: "Chicken Fried Rice",
      restaurant: "The Registration Fee",
      price: 100.99,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 12,
      name: "Chicken Leg Piece",
      restaurant: "The Registration Fee",
      price: 20.99,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop&crop=center",
    },
  ];

  const sidebarItems = [
    {
      name: "Run With Beef Rice",
      price: "$24",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=50&h=50&fit=crop",
    },
    {
      name: "Fried Fried Combo",
      price: "$18",
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=50&h=50&fit=crop",
    },
    {
      name: "Shrimp Salad",
      price: "$14",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=50&h=50&fit=crop",
    },
    {
      name: "Chinese Pasta",
      price: "$22",
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=50&h=50&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative h-96 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
        {/* Background Food Items */}
        <div className="absolute inset-0">
          <img
            src="https://t4.ftcdn.net/jpg/02/92/20/37/240_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center text-white z-10 relative px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">SHOP</h1>
          <div className="flex items-center justify-center space-x-3 text-base md:text-lg">
            <span className="text-gray-300">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-red-400 font-semibold">Shop</span>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row p-4 gap-4">
        {/* Left Sidebar */}
        <div className="w-full lg:w-80 bg-white p-4 md:p-6 shadow-lg rounded-lg">
          {/* Search Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Search</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Search</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="text-red-500" />
                <span className="text-gray-600">Chinese</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="text-red-500" />
                <span className="text-gray-600">Cocktail</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="text-red-500" />
                <span className="text-gray-600">Spicy</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="text-red-500" />
                <span className="text-gray-600">Uncategorized</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="text-red-500" />
                <span className="text-gray-600">Vegan</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="text-red-500" />
                <span className="text-gray-600">Non-Veg</span>
              </div>
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Filter By Price
            </h3>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="range"
                  min="100"
                  max="3000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Price: $100 — $3000</span>
              </div>
              <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors">
                FILTER
              </button>
            </div>
          </div>

          {/* Popular Items */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Filter By Price
            </h3>
            <div className="space-y-4">
              {sidebarItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 text-sm">
                      {item.name}
                    </h4>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(item.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-red-500 font-semibold text-sm">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="text-gray-600 text-sm md:text-base">
              Showing 1 - 12 of 36 Results
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <select className="border text-gray-500 border-gray-300 rounded px-3 py-2 text-sm w-full sm:w-auto">
                <option>Default Sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
              <div className="flex border border-gray-300 rounded">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-red-500 text-white"
                      : "text-gray-600"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-red-500 text-white"
                      : "text-gray-600"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center p-6 border border-gray-100"
              >
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full border-4 border-dashed border-red-300 p-3 bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {product.name}
                  </h3>
                  <div className="flex justify-center items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">
                    {product.restaurant}
                  </p>
                  <div className="text-red-500 font-bold text-2xl mb-4">
                    ${product.price.toFixed(2)}
                  </div>
                  <button 
                    onClick={() => navigate("/seafood/seafood-product-view")} 
                    className="bg-pink-100 text-red-500 px-6 py-3 rounded-full text-sm font-semibold hover:bg-pink-200 transition-colors w-full flex items-center justify-center space-x-2"
                  >
                    <span>ORDER NOW</span>
                    <span>🛒</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-1 md:space-x-2 flex-wrap gap-2">
            <button className="px-2 py-1.5 md:px-3 md:py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
              ←
            </button>
            <button className="px-2 py-1.5 md:px-3 md:py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
              1
            </button>
            <button className="px-2 py-1.5 md:px-3 md:py-2 bg-red-500 text-white rounded text-sm">
              2
            </button>
            <button className="px-2 py-1.5 md:px-3 md:py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
              3
            </button>
            <button className="px-2 py-1.5 md:px-3 md:py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
              ...
            </button>
            <button className="px-2 py-1.5 md:px-3 md:py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeaProducts;
