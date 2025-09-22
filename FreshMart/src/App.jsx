import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginPage from "./components/pages/Login";
import PageNotFound from "./components/pages/PageNotFound";
import SeaHeader from "./components/SeaFood/SeaHeader";
import Cart from "./components/pages/CartPage";
import Footer from "./components/pages/footer";
import Checkout from "./components/pages/Checkout";
import About from "./components/SeaFood/About";
import Profile from "./components/pages/Profile";
import SeaProducts from "./components/SeaFood/SeaProducts";
import ContactUs from "./components/common/ContactUs";

import ProductViewPage from "./components/SeaFood/ProductViewPage";


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <Routes>
              <Route path="/" element={<><Header /><Home /></>} />
              <Route path="/login" element={<LoginPage />} />

              <Route path="/seafood" element={<><SeaHeader />  <Footer /></> } />
              <Route path="/seafood/about" element={<About />} />
              <Route path="/all-sea-products" element={<SeaProducts />} />
              <Route path="/seafood/contact-us" element={<ContactUs />} />
              <Route path="/seafood/seafood-product-view" element={<ProductViewPage />} />

              {/* <Route path="/seafood/:id" element={<ProductViewPage />} /> */}

              <Route path="/product" element={<ProductViewPage />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="/profile" element={<Profile />} />
              
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<div className="text-center text-white mt-20">Orders Page - Coming Soon!</div>} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
           
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
