import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: "seafood",
      title: "Sea Food",
      image:
        "https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg?auto=compress&cs=tinysrgb&w=800",
      path: "/seafood",
    },
    {
      id: "godavari-ruchulu",
      title: "Godavari Ruchulu",
      image:
        "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800",
      path: "/godavari-ruchulu",
    },
    {
      id: "dairy",
      title: "Dairy Products",
      image:
        "https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&w=800",
      path: "/dairy",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-3 overflow-hidden">
      {categories.map((category) => (
        <div
          key={category.id}
          className="relative group flex items-center justify-center h-[33.33vh] md:h-full overflow-hidden"
        >
          {/* Background image */}
          <img
            src={category.image}
            alt={category.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
          {/* Centered Content */}
          <div className="relative z-10 text-center text-white px-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-widest uppercase">
              {category.title}
            </h2>
            <Link
              to={"/login"}
              className="inline-block px-6 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full hover:from-teal-700 hover:to-blue-700 transition transform hover:scale-105"
            >
              Explore &rarr;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
