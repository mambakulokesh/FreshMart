import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Home, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  return (
    <>
      <header className="bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
            >
              <Home className="h-8 w-8" />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                FreshMart
              </span>
            </Link>

            {/* <nav className="hidden md:flex space-x-8">
              <Link
                to="/category/seafood"
                className="text-gray-300 hover:text-indigo-400 font-medium transition-colors relative group"
              >
                Sea Food
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/category/godavari-ruchulu"
                className="text-gray-300 hover:text-indigo-400 font-medium transition-colors relative group"
              >
                Godavari Ruchulu
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/category/dairy"
                className="text-gray-300 hover:text-indigo-400 font-medium transition-colors relative group"
              >
                Dairy Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav> */}

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
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
                    onClick={logout}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                    title="Logout"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                >
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </button>
              )}

              {/* <div className="relative">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-indigo-400 transition-colors">
                  <ShoppingCart className="h-6 w-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                      {totalItems}
                    </span>
                  )}
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
