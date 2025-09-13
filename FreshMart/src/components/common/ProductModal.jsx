import React, { useState } from 'react';
import Modal from 'react-modal';
import { X, Star, ShoppingCart, Heart, Plus, Minus, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { successAlert } from '../../utils/CommonFunctions';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const {
    name = "Chicken Pizza",
    price = 69,
    description = "Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.",
    image = "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=500&fit=crop&crop=center"
  } = product || {};

  const handleQuantityChange = (action) => {
    if (action === 'increase' && quantity < 10) setQuantity(quantity + 1);
    if (action === 'decrease' && quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const cartItem = { ...product, quantity };
    addToCart(cartItem);
    successAlert('Added to Cart!', `${quantity} ${name} added to your cart`);
  };

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      overflow: 'visible'
    },
    content: {
      inset: 'auto',
      border: 'none',
      background: '#fff',
      borderRadius: '16px',
      padding: '0',
      maxWidth: '1000px',
      width: '95%',
      maxHeight: '90vh',
      overflow: 'visible',
      position: 'relative'
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles} ariaHideApp={false}>
      <div className="relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20 bg-gray-800 hover:bg-gray-900 text-white rounded-full p-3"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left - Product Image */}
          <div className="flex-1 bg-gray-100 flex justify-center items-center p-12">
            <div className="relative">
              <div className="border-2 border-dashed border-red-400 rounded-full p-6">
                <img src={image} alt={name} className="w-72 h-72 object-cover rounded-full" />
              </div>
            </div>
          </div>

          {/* Right - Product Details */}
          <div className="flex-1 p-8 flex flex-col justify-between">
            {/* Title and Price */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
              <span className="text-3xl font-bold text-gray-800">${price}</span>
            </div>

            {/* Reviews */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-500 text-sm">(2 customer reviews)</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

            {/* Quantity */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="font-medium text-gray-700">Quantity</span>
              <div className="flex items-center border rounded">
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                  disabled={quantity >= 10}
                >
                  <Plus size={16} />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-16 text-center py-2 text-gray-800 font-medium border-x"
                />
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-medium flex items-center gap-2"
              >
                Add to Cart
                <ShoppingCart size={18} />
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium flex items-center gap-2">
                ADD TO wishlist
                <Heart size={18} />
              </button>
            </div>

            {/* Share Buttons */}
            <div>
              <span className="font-medium text-gray-800 mb-4 block">Share With Friends</span>
              <div className="flex gap-3">
                <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors">
                  <Youtube size={20} />
                </button>
                <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-colors">
                  <Instagram size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
