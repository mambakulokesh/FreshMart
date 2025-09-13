import React, { useState } from "react";
import {
  Menu,
  X,
  Play,
  ShoppingBag,
  User,
  LogOut,
  Fish,
  Star,
  MapPin,
  Heart,
  ShoppingCart,
  Eye,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";
import Seaproducts from "../../data/Products";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductModal from "../common/ProductModal";

function SeaHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { addToCart, getTotalItems } = useCart();
  const { user, logout } = useAuth();
  const totalItems = getTotalItems();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const popularFoodItems = [
    {
      id: 1,
      name: "Chicken Pizza",
      description: "Delicious chicken pizza with fresh toppings",
      price: 26.99,
      image:
        "https://www.ex-coders.com/php-template/fresheat/assets/img/food-items/item1_3.png",
    },
    {
      id: 2,
      name: "Egg and Cucumber",
      description: "Fresh and healthy combination",
      price: 28.0,
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 3,
      name: "Chicken Fried Rice",
      description: "Savory fried rice with tender chicken",
      price: 100.99,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 4,
      name: "Chicken Leg Piece",
      description: "Juicy and flavorful chicken leg",
      price: 20.99,
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 5,
      name: "Fish Curry",
      description: "Spicy and aromatic fish curry",
      price: 32.99,
      image:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=300&fit=crop&crop=center",
    },
    {
      id: 6,
      name: "Grilled Salmon",
      description: "Premium grilled salmon fillet",
      price: 45.99,
      image:
        "https://www.ex-coders.com/php-template/fresheat/assets/img/food-items/item1_2.png",
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="relative">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-700 text-white shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 md:px-8 md:py-4">
          {/* Left Nav */}
          <nav className="hidden md:flex space-x-4 sm:space-x-6 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            <Link
              to="/"
              className="hover:text-cyan-200 transition duration-200 ease-in-out transform hover:scale-105"
            >
              HOME
            </Link>
            <Link
              to="/seafood/about"
              className="hover:text-cyan-200 transition duration-200 ease-in-out transform hover:scale-105"
            >
              ABOUT
            </Link>
            <Link
              to="/shop"
              className="hover:text-cyan-200 border-l pl-2 sm:pl-4 border-white/50 transition duration-200 ease-in-out transform hover:scale-105"
            >
              SHOP NOW
            </Link>
          </nav>

          {/* Logo Center */}
          <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-widest text-cyan-100 drop-shadow-xl animate-pulse">
            🌊 SEA FOOD 🐟
          </h1>

          {/* Right Nav */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 sm:space-x-3 hover:bg-teal-700/30 p-1 rounded-lg transition-colors"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-indigo-400"
                  />
                  <span className="text-white font-medium hidden sm:block text-xs sm:text-sm">
                    {user.name}
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
                <div className="relative">
                  <Link
                    to="/cart"
                    className="flex items-center space-x-1 text-gray-300 hover:text-indigo-400 transition-colors"
                  >
                    <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                        {totalItems}
                      </span>
                    )}
                  </Link>
                </div>
              </>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 transform hover:scale-105"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 sm:h-8 sm:w-8" />
            ) : (
              <Menu className="h-6 w-6 sm:h-8 sm:w-8" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-teal-600/95 border-t border-teal-700 shadow-md animate-slide-down overflow-hidden max-h-screen">
            <nav className="flex flex-col space-y-2 sm:space-y-3 p-4 sm:p-6 text-white font-semibold uppercase">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-200 transition py-1.5"
              >
                Home
              </Link>
              <Link
                to="/seafood/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-200 transition py-1.5"
              >
                About
              </Link>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-200 transition py-1.5"
              >
                Shop Now
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-200 transition py-1.5"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Sea Background Image with Black Opacity */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Sea Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>



        {/* Hero Content - Centered */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 md:px-12">
          <div className="mb-6 animate-slide-down" style={{animationDelay: '0.2s'}}>
            <span className="text-orange-400 text-2xl sm:text-3xl font-script italic animate-glow">Signature</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-6 tracking-wider animate-scale-in" style={{animationDelay: '0.4s'}}>
            SEA<span className="text-orange-400 animate-pulse-orange">F</span>OODS
          </h1>
          
          <div className="max-w-2xl animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-slate-300 text-lg leading-relaxed">
              Every dish is not just prepared it's a crafted with a savor the a utmost precision and a deep understanding of flavor Every dish is not just prepared it's a crafted with a savor
            </p>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-8 left-0 right-0 flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 animate-slide-up" style={{animationDelay: '1s'}}>
            <div className="flex items-center text-white mb-4 sm:mb-0">
              <MapPin className="w-4 h-4 mr-2 text-orange-400 animate-bounce" />
              <span className="text-sm">Rd. Santa Ana, Illinois 85486, United States</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-white/10 hover:bg-orange-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-white text-xs">←</span>
                </button>
                <span className="text-white px-3 py-1 bg-orange-400 rounded-full text-sm animate-pulse">2</span>
                <button className="w-8 h-8 bg-white/10 hover:bg-orange-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-white text-xs">→</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-3 ml-8">
                <span className="text-white text-sm">Follow Us:</span>
                <div className="flex space-x-2">
                  <a href="#" className="w-6 h-6 bg-white/10 hover:bg-orange-400 rounded flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce" style={{animationDelay: '0.1s'}}>
                    <span className="text-white text-xs">f</span>
                  </a>
                  <a href="#" className="w-6 h-6 bg-white/10 hover:bg-orange-400 rounded flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce" style={{animationDelay: '0.2s'}}>
                    <span className="text-white text-xs">t</span>
                  </a>
                  <a href="#" className="w-6 h-6 bg-white/10 hover:bg-orange-400 rounded flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce" style={{animationDelay: '0.3s'}}>
                    <span className="text-white text-xs">in</span>
                  </a>
                  <a href="#" className="w-6 h-6 bg-white/10 hover:bg-orange-400 rounded flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce" style={{animationDelay: '0.4s'}}>
                    <span className="text-white text-xs">ig</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transform rotate-6"></div>
                <div className="relative bg-white rounded-full p-8 shadow-2xl">
                  <img
                    src="https://www.ex-coders.com/php-template/fresheat/assets/img/about/aboutThumb1_1.png"
                    alt="Fresh Seafood Platter"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/titleIcon.svg" alt="Icon" className="w-4 h-4" />
                </div>
                <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">About Us</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <img src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/titleIcon.svg" alt="Icon" className="w-4 h-4" />
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
                We Ensure Healthy & High-Quality Foods
              </h2>
              
              <p className="text-gray-600 leading-relaxed">
                It is a long established fact that a reader will be distracted Lorem the readable content of a page when looking at layout the point Lorem established fact that it is a long established
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-500 text-xl">🍳</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Super Quality Food</h3>
                    <p className="text-gray-600 text-sm">Served our Testy Food & good food by friendly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-500 text-xl">👨‍🍳</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Qualified Chef</h3>
                    <p className="text-gray-600 text-sm">Served our Testy Food & good food by friendly</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center space-x-2">
                <span>ABOUT US</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Food Items Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <img src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/titleIcon.svg" alt="Icon" className="w-6 h-6 mr-2" />
              <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">BEST FOOD</span>
              <img src="https://www.ex-coders.com/php-template/fresheat/assets/img/icon/titleIcon.svg" alt="Icon" className="w-6 h-6 ml-2" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Popular Food Items
            </h2>
          </div>

          {/* Food Items Swiper */}
          <div className="mb-12 max-w-4xl mx-auto">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="food-items-swiper"
            >
              {popularFoodItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="text-center">
                    <div className="relative mb-4">
                      <div className="w-32 h-42 mx-auto rounded-full border-4 border-dotted border-red-300 p-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">The Registration Fee</p>
                    <p className="text-red-500 font-bold">${item.price}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Promotional Banners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-orange-400 text-sm font-semibold">30% OFF DEAL</span>
                <h3 className="text-xl font-bold mt-2 mb-3">FRESH SALMON</h3>
                <p className="text-gray-300 text-sm mb-4">Limits Time Offer</p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold text-sm transition-colors">
                  ORDER NOW →
                </button>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2">
                <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=200&h=150&fit=crop" alt="Salmon" className="w-full h-full object-cover opacity-30" />
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-orange-400 text-sm font-semibold">DELICIOUS FOOD</span>
                <h3 className="text-xl font-bold mt-2 mb-3">GRILLED PRAWNS</h3>
                <p className="text-gray-300 text-sm mb-4">Limits Time Offer</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold text-sm transition-colors">
                  ORDER NOW →
                </button>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2">
                <img src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=200&h=150&fit=crop" alt="Prawns" className="w-full h-full object-cover opacity-30" />
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-orange-400 text-sm font-semibold">30% OFF DEAL</span>
                <h3 className="text-xl font-bold mt-2 mb-3">LOBSTER SPECIAL</h3>
                <p className="text-gray-300 text-sm mb-4">Limits Time Offer</p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-semibold text-sm transition-colors">
                  ORDER NOW →
                </button>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2">
                <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=150&fit=crop" alt="Lobster" className="w-full h-full object-cover opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sea Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Section Title and Icons */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Fish className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mr-4 animate-swim" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                Explore Our Sea Products
              </h2>
              <Star className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 ml-4 animate-float" />
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 text-orange-500 mr-3" />
              <p className="text-lg text-gray-600">
                Fresh from Ocean to Your Table
              </p>
              <MapPin className="w-6 h-6 text-orange-500 ml-3" />
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
            {Seaproducts.slice(0, 5).map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden p-6 min-h-[320px] transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative flex justify-center mb-4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-center text-center">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-300 transition-colors duration-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-center mt-auto">
                    <span className="text-red-600 font-bold text-xl group-hover:text-cyan-300 transition-colors duration-300">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Vertical Hover Action Icons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                    <Heart className="w-4 h-4 text-red-500 hover:text-white" />
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <ShoppingCart className="w-4 h-4 text-green-500 hover:text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(product);
                    }}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Eye className="w-4 h-4 text-blue-500 hover:text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              VIEW ALL ITEMS
            </button>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🍔</span>
                </div>
                <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Work Process</span>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🍔</span>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
                Delicious Food And Quick Delivery Together
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Set Your Location</h3>
                    <p className="text-gray-600 text-sm">It's The Perfect Dining Experience Where A Every Dish Is Crafted</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🍽️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Select Food</h3>
                    <p className="text-gray-600 text-sm">It's The Perfect Dining Experience Where A Every Dish Is Crafted</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">💳</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Pay Cash Or Online</h3>
                    <p className="text-gray-600 text-sm">It's The Perfect Dining Experience Where A Every Dish Is Crafted</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - 3D Phone Illustration */}
            <div className="relative flex justify-center">
              <div className="relative">
                <img
                  src="https://www.ex-coders.com/php-template/fresheat/assets/img/wcu/wcuThumb1_1.png"
                  alt="Delivery Process"
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes swim {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(5px) rotate(2deg); }
          75% { transform: translateX(-5px) rotate(-2deg); }
        }
        .animate-swim {
          animation: swim 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes gradient-shift {
          0%, 100% { background: linear-gradient(135deg, #0f172a, #1e3a8a, #1e293b); }
          50% { background: linear-gradient(135deg, #1e293b, #0f172a, #1e3a8a); }
        }
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }
        @keyframes wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-wave {
          animation: wave 15s linear infinite;
        }
        .bg-wave-pattern {
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(59, 130, 246, 0.1) 2px,
            rgba(59, 130, 246, 0.1) 4px
          );
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-8deg); }
        }
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
        @keyframes particle-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(100px, -50px) scale(1.5); opacity: 1; }
        }
        .animate-particle-1 {
          animation: particle-1 8s ease-in-out infinite;
        }
        @keyframes particle-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-80px, 60px) scale(2); opacity: 1; }
        }
        .animate-particle-2 {
          animation: particle-2 6s ease-in-out infinite;
        }
        @keyframes particle-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(60px, -80px) scale(1.2); opacity: 1; }
        }
        .animate-particle-3 {
          animation: particle-3 7s ease-in-out infinite;
        }
        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 1s ease-out forwards;
        }
        @keyframes zoom-in {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoom-in {
          animation: zoom-in 1s ease-out forwards;
        }
        @keyframes slide-up {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px rgba(251, 146, 60, 0.5); }
          50% { text-shadow: 0 0 20px rgba(251, 146, 60, 0.8), 0 0 30px rgba(251, 146, 60, 0.6); }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        @keyframes pulse-orange {
          0%, 100% { color: #fb923c; }
          50% { color: #f97316; text-shadow: 0 0 10px rgba(249, 115, 22, 0.7); }
        }
        .animate-pulse-orange {
          animation: pulse-orange 2s ease-in-out infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .popular-food-swiper {
          padding: 0 1rem;
          overflow: hidden;
        }
        .popular-food-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: stretch;
        }
        @media (max-width: 640px) {
          .popular-food-swiper {
            padding: 0 0.5rem;
          }
        }
        @keyframes swim-continue {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(5px) rotate(2deg); }
          75% { transform: translateX(-5px) rotate(-2deg); }
        }
        .animate-swim {
          animation: swim 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .popular-food-swiper {
          padding: 0 1rem;
          overflow: hidden;
        }
        .popular-food-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: stretch;
        }
        @media (max-width: 640px) {
          .popular-food-swiper {
            padding: 0 0.5rem;
          }
        }

      `}</style>
    </div>
  );
}

export default SeaHeader;
