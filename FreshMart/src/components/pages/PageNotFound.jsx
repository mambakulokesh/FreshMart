import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-200 via-cyan-300 to-blue-400 px-4 py-8 overflow-hidden">
      <div className="relative max-w-md bg-white/90 backdrop-blur-xl border border-teal-200/50 rounded-3xl shadow-2xl p-8 text-center">
        {/* Background texture and wave effect */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-teal-500/20 to-transparent wave-animation"></div>

        {/* Animated Emojis */}
        <div className="absolute top-4 left-4 text-3xl animate-float">🐠</div>
        <div className="absolute top-8 right-4 text-3xl animate-pulse">🌊</div>
        <div className="absolute bottom-8 left-6 text-3xl animate-float delay-200">🧀</div>
        <div className="absolute bottom-4 right-6 text-3xl animate-pulse delay-400">🌿</div>

        {/* Content */}
        <h1 className="text-7xl sm:text-8xl font-bold text-teal-800 mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-teal-900 mb-3">
          Oops! Lost in the Ocean 🌊
        </h2>
        <p className="text-teal-700 mb-6 text-sm sm:text-base">
          The page you’re looking for has drifted away like a bottle in the sea. Let’s get you back to shore!
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium rounded-full hover:from-teal-700 hover:to-blue-700 transition transform hover:scale-105"
        >
          Back Home
        </Link>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .wave-animation {
          animation: wave 8s infinite linear;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(45, 212, 191, 0.3)" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,245.3C672,224,768,160,864,154.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') repeat-x;
          background-size: cover;
        }
        @keyframes wave {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 1440px;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default PageNotFound;