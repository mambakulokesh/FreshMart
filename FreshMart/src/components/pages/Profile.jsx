import React, { useState } from "react";
import { User, Mail, Phone, MapPin, ShoppingBag, Heart, Settings, LogOut, ChevronDown, ChevronUp } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("orders");

  // Mock data for orders and favorites
  const orders = [
    { id: 1, date: "2025-09-01", items: ["Wild-Caught Salmon", "Jumbo Prawns"], total: 2199.98, status: "Delivered" },
    { id: 2, date: "2025-08-15", items: ["Atlantic Cod", "Lobster Tail"], total: 3499.97, status: "Delivered" },
  ];

  const favorites = [
    { id: 1, name: "Wild-Caught Salmon", image: "https://via.placeholder.com/80x80?text=Salmon" },
    { id: 2, name: "Jumbo Prawns", image: "https://via.placeholder.com/80x80?text=Prawns" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-teal-800 to-blue-900 text-white pt-20 pb-12 px-4 sm:px-6 md:px-12">
      {/* Profile Header */}
      <div className="max-w-4xl mx-auto bg-teal-800/40 p-6 sm:p-8 rounded-xl border border-teal-600/30 backdrop-blur-sm animate-fade-in">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <img
            src={user?.avatar || "https://via.placeholder.com/120x120?text=User"}
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-teal-400"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-cyan-100 flex items-center space-x-2">
              <User className="h-6 w-6 text-teal-300" />
              <span>{user?.name || "Guest"}</span>
            </h1>
            <p className="text-cyan-200 mt-1 flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{user?.email || "example@email.com"}</span>
            </p>
            <p className="text-cyan-200 flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{user?.phone || "+123 456 7890"}</span>
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-6 flex items-center space-x-2 bg-red-600/30 hover:bg-red-600/50 text-red-200 hover:text-white py-2 px-4 rounded-lg transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </button>
      </div>

      {/* Profile Navigation */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => setActiveSection("orders")}
            className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-colors ${
              activeSection === "orders"
                ? "bg-teal-600 text-white"
                : "bg-teal-800/30 text-cyan-200 hover:bg-teal-700/30"
            }`}
          >
            <ShoppingBag className="h-5 w-5" />
            <span>My Orders</span>
          </button>
          <button
            onClick={() => setActiveSection("favorites")}
            className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-colors ${
              activeSection === "favorites"
                ? "bg-teal-600 text-white"
                : "bg-teal-800/30 text-cyan-200 hover:bg-teal-700/30"
            }`}
          >
            <Heart className="h-5 w-5" />
            <span>Favorites</span>
          </button>
          <button
            onClick={() => setActiveSection("settings")}
            className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-colors ${
              activeSection === "settings"
                ? "bg-teal-600 text-white"
                : "bg-teal-800/30 text-cyan-200 hover:bg-teal-700/30"
            }`}
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto mt-8 bg-teal-800/30 p-6 sm:p-8 rounded-xl border border-teal-600/30 backdrop-blur-sm animate-slide-up">
        {activeSection === "orders" && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-cyan-100 flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6" />
              <span>My Orders</span>
            </h2>
            {orders.length === 0 ? (
              <p className="text-cyan-200">No orders yet.</p>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-teal-700/30 p-4 rounded-lg border border-teal-600/30"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-cyan-100 font-medium">Order #{order.id}</p>
                        <p className="text-cyan-200 text-sm">{order.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        order.status === "Delivered"
                          ? "bg-green-600/30 text-green-200"
                          : "bg-yellow-600/30 text-yellow-200"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-cyan-100 font-medium mb-2">Items:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-cyan-200">
                        {order.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-cyan-100 font-medium">Total:</p>
                      <p className="text-cyan-100 font-bold">₹{order.total.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeSection === "favorites" && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-cyan-100 flex items-center space-x-2">
              <Heart className="h-6 w-6" />
              <span>My Favorites</span>
            </h2>
            {favorites.length === 0 ? (
              <p className="text-cyan-200">No favorites yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((favorite) => (
                  <div
                    key={favorite.id}
                    className="bg-teal-700/30 p-4 rounded-lg border border-teal-600/30 text-center"
                  >
                    <img
                      src={favorite.image}
                      alt={favorite.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="text-cyan-100 font-medium">{favorite.name}</h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeSection === "settings" && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-cyan-100 flex items-center space-x-2">
              <Settings className="h-6 w-6" />
              <span>Account Settings</span>
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-cyan-200 mb-1">Name</label>
                <input
                  type="text"
                  defaultValue={user?.name || ""}
                  className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-200 mb-1">Email</label>
                <input
                  type="email"
                  defaultValue={user?.email || ""}
                  className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-200 mb-1">Phone</label>
                <input
                  type="tel"
                  defaultValue={user?.phone || ""}
                  className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-200 mb-1">Address</label>
                <textarea
                  defaultValue={user?.address || ""}
                  className="w-full p-3 rounded-lg bg-teal-900/50 border border-teal-600/30 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-300"
                  rows="3"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Profile;
