import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, ArrowLeft, Star, User, Heart, Share2, Facebook, Twitter, Instagram, MessageCircle, Minus, Plus } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { triggerAlert } from "../../utils/CommonFunctions";

function ProductViewPage() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");
  const [rating, setRating] = useState(0);

  // Static product data
  const product = {
    id: 1,
    name: "Chicken Pizza",
    price: 69,
    description:
      "Delicious chicken pizza with fresh ingredients. Made with premium chicken, mozzarella cheese, and our signature sauce on a crispy crust. Perfect for sharing with family and friends.",
    image: "https://www.ex-coders.com/php-template/fresheat/assets/img/dishes/dishes3_1.png",
    reviews: [
      {
        id: 1,
        name: "Manjid Hasan",
        date: "March 16, 2024 at 2:32 pm",
        rating: 4,
        comment: "Really good food. All chicken pieces were good in taste, excellent in taste and flavor in between other dishes and vegetables. Perfect good flavor with us and efficient happy gifts and we loved it food wise. Looks Super in simply delivery."
      },
      {
        id: 2,
        name: "Daniel Adam",
        date: "March 16, 2024 at 2:32 pm",
        rating: 4,
        comment: "Really good food. All chicken pieces were good in taste, excellent in taste and flavor in between other dishes and vegetables. Perfect good flavor with us and efficient happy gifts and we loved it food wise. Looks Super in simply delivery."
      }
    ]
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    triggerAlert.success("success", `${quantity} x ${product.name} added to cart!`);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    alert("Review submitted successfully!");
    setReviewName("");
    setReviewEmail("");
    setReviewMessage("");
    setRating(0);
  };

  const renderStars = (rating, interactive = false, onStarClick = null) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
        onClick={interactive ? () => onStarClick(index + 1) : undefined}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="relative text-white py-16 shadow-2xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://t4.ftcdn.net/jpg/02/92/20/37/240_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg"
            alt="Food Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-lg">SHOP DETAILS</h1>
          <div className="flex items-center justify-center space-x-2 text-lg font-medium">
            <span>Home</span>
            <span>/</span>
            <span className="text-yellow-300 font-bold">Shop Details</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 max-w-6xl mx-auto border border-orange-100">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-80 h-80 object-cover rounded-full shadow-lg"
              />
            </div>
            
            {/* Product Info */}
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-slate-800 mb-2">{product.name}</h2>
              <p className="text-orange-700 font-semibold text-lg">A vegetarian delight</p>
              <div className="text-5xl font-black text-red-700 mb-4">${product.price}</div>
              
              <p className="text-slate-700 leading-relaxed text-lg">
                {product.description}
              </p>
              
              {/* Quantity */}
              <div className="flex items-center space-x-4">
                <span className="font-bold text-slate-800 text-lg">Quantity:</span>
                <div className="flex items-center border-2 border-orange-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-800 hover:bg-orange-100 font-bold text-lg transition-colors flex items-center justify-center"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 py-2 text-gray-800 border-x-2 border-orange-300 font-bold text-lg bg-orange-50">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-800 hover:bg-orange-100 font-bold text-lg transition-colors flex items-center justify-center"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 font-bold text-lg shadow-lg flex items-center space-x-2"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Add To Cart</span>
                </button>
                <button
                  onClick={() => navigate("/order")}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 font-bold text-lg shadow-lg flex items-center space-x-2"
                >
                  <Heart className="h-5 w-5" />
                  <span>Order Now</span>
                </button>
              </div>
              
              {/* Share */}
              <div className="flex items-center space-x-2">
                <Share2 className="h-5 w-5 text-slate-600" />
                <span className="font-bold text-slate-800 text-lg">Share with friends:</span>
                <div className="flex space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
                    <Facebook className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
                    <Twitter className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 max-w-6xl mx-auto border border-orange-100">
          <h3 className="text-3xl font-extrabold mb-6 text-slate-800 border-b-2 border-orange-200 pb-2">Product Description</h3>
          <p className="text-slate-700 leading-relaxed mb-6 text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </p>
          <p className="text-slate-700 leading-relaxed text-lg">
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        
        {/* Reviews Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 max-w-6xl mx-auto border border-orange-100">
          <h3 className="text-3xl font-extrabold mb-8 text-slate-800 border-b-2 border-orange-200 pb-2">{product.reviews.length.toString().padStart(2, '0')} Reviews</h3>
          
          {product.reviews.map((review) => (
            <div key={review.id} className="border-b pb-6 mb-6 last:border-b-0">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <User className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-slate-800 text-lg">{review.name}</h4>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-sm text-orange-600 mb-3 font-medium">{review.date}</p>
                  <p className="text-slate-700 leading-relaxed">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Add Review Form */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 max-w-6xl mx-auto border-2 border-orange-200">
          <h3 className="text-3xl font-extrabold mb-6 text-slate-800 border-b-2 border-orange-300 pb-2">Add A Review</h3>
          <p className="text-slate-700 mb-6 text-lg">Your email address will not be published. Required fields are marked *</p>
          
          <form onSubmit={handleSubmitReview} className="space-y-6">
            <div>
              <label className="block text-lg font-bold mb-3 text-slate-800">Rate this product *</label>
              <div className="flex space-x-1">
                {renderStars(rating, true, setRating)}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-lg font-bold mb-2 text-slate-800">Your Name *</label>
                <input
                  type="text"
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  className="w-full p-4 border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-bold mb-2 text-slate-800">Your Email *</label>
                <input
                  type="email"
                  value={reviewEmail}
                  onChange={(e) => setReviewEmail(e.target.value)}
                  className="w-full p-4 border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-lg font-bold mb-2 text-slate-800">Write A Message *</label>
              <textarea
                value={reviewMessage}
                onChange={(e) => setReviewMessage(e.target.value)}
                rows={6}
                className="w-full p-4 border-2 border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
                required
              ></textarea>
            </div>
            
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="save-info" className="rounded" />
              <label htmlFor="save-info" className="text-base text-slate-700 font-medium">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>
            
            <button
              type="submit"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 font-bold text-lg shadow-xl"
            >
              Post A Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductViewPage;