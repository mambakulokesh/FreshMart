import React from "react";
import { Fish, Leaf, Users, Sailboat, Award, Heart, MapPin } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-teal-800 to-blue-900 text-white pt-20 pb-12 px-4 sm:px-6 md:px-12">
      {/* Hero Section */}
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-cyan-100 flex items-center justify-center space-x-4">
          <Fish className="h-10 w-10 text-teal-300" />
          <span>About Sea Delights <span className="animate-pulse">🌊</span></span>
        </h1>
        <p className="text-lg sm:text-xl text-cyan-200 max-w-3xl mx-auto">
          We bring the ocean’s finest to your table. Fresh, sustainable, and delivered with care.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="max-w-4xl mx-auto mb-20 bg-teal-800/30 p-8 rounded-xl border border-teal-600/30 backdrop-blur-sm animate-slide-up">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-cyan-100 flex items-center space-x-2">
          <Sailboat className="h-8 w-8 text-teal-300" />
          <span>Our Story</span>
        </h2>
        <p className="text-base sm:text-lg text-cyan-200 mb-4">
          Founded in 2015 by a group of passionate fishermen and culinary experts, Sea Delights was born from a simple idea: to provide the freshest, most sustainable seafood directly from the ocean to your kitchen. We started as a small coastal market and have grown into a trusted name for seafood lovers across the country.
        </p>
        <p className="text-base sm:text-lg text-cyan-200">
          Our journey is guided by a commitment to quality, sustainability, and community. We work closely with local fishermen to ensure fair practices and support coastal economies.
        </p>
      </section>

      {/* Mission & Values Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-teal-800/30 p-8 rounded-xl border border-teal-600/30 backdrop-blur-sm animate-slide-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-cyan-100 flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-300" />
              <span>Our Mission</span>
            </h2>
            <p className="text-base sm:text-lg text-cyan-200">
              To deliver the freshest, most sustainable seafood while promoting responsible fishing practices and supporting coastal communities.
            </p>
          </div>
          <div className="bg-teal-800/30 p-8 rounded-xl border border-teal-600/30 backdrop-blur-sm animate-slide-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-cyan-100 flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-300" />
              <span>Our Values</span>
            </h2>
            <ul className="space-y-3 text-base sm:text-lg text-cyan-200">
              <li className="flex items-center space-x-2">
                <span className="text-teal-300">🐟</span>
                <span>Freshness you can taste</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-300">♻️</span>
                <span>Sustainability at heart</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-300">🌍</span>
                <span>Supporting local communities</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-cyan-100 flex items-center justify-center space-x-2">
          <Users className="h-8 w-8 text-teal-300" />
          <span>Meet Our Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Rajesh Kumar", role: "Founder & CEO", bio: "A fisherman turned entrepreneur, Rajesh leads our mission with passion and vision.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Priya Patel", role: "Head of Sustainability", bio: "Priya ensures our practices are eco-friendly and our seafood is responsibly sourced.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "Amit Shah", role: "Operations Manager", bio: "Amit oversees our supply chain, ensuring freshness from ocean to doorstep.", image: "https://randomuser.me/api/portraits/men/66.jpg" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-teal-800/30 p-6 rounded-xl border border-teal-600/30 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-teal-400"
              />
              <h3 className="text-xl font-bold text-center text-cyan-100 mb-1">{member.name}</h3>
              <p className="text-center text-teal-300 mb-3">{member.role}</p>
              <p className="text-sm text-cyan-200 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="max-w-4xl mx-auto mb-20 bg-teal-800/30 p-8 rounded-xl border border-teal-600/30 backdrop-blur-sm text-center animate-slide-up">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-cyan-100 flex items-center justify-center space-x-2">
          <MapPin className="h-8 w-8 text-teal-300" />
          <span>Our Home</span>
        </h2>
        <p className="text-base sm:text-lg text-cyan-200 mb-4">
          We’re proud to call the vibrant coastal city of <strong>Kochi, Kerala</strong> our home. Our headquarters and main processing facility are located here, where the Arabian Sea meets the backwaters.
        </p>
        <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.835576713454!2d76.25949241467643!3d9.931232892982375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5f4d6e1b0d%3A0x7d6f1f3a8b1d6f7a!2sFort%20Kochi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Awards Section */}
      <section className="max-w-4xl mx-auto mb-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-cyan-100 flex items-center justify-center space-x-2">
          <Award className="h-8 w-8 text-yellow-300" />
          <span>Our Achievements</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { year: "2018", title: "Best Sustainable Seafood", description: "Awarded for our commitment to eco-friendly fishing practices." },
            { year: "2020", title: "Top Seafood Supplier", description: "Recognized as the leading supplier in South India." },
            { year: "2023", title: "Customer Choice Award", description: "Voted best seafood delivery service by our customers." },
          ].map((award, index) => (
            <div
              key={index}
              className="bg-teal-800/30 p-6 rounded-xl border border-teal-600/30 backdrop-blur-sm transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <Award className="h-10 w-10 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold text-center text-cyan-100 mb-2">{award.year}</h3>
              <h4 className="text-lg font-semibold text-center text-teal-300 mb-3">{award.title}</h4>
              <p className="text-sm text-cyan-200 text-center">{award.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-20 animate-fade-in">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-cyan-100">
          Ready to Taste the Ocean? <span className="animate-pulse">🌊</span>
        </h2>
        <button
          onClick={() => window.location.href = "/shop"}
          className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Shop Now
        </button>
      </section>

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
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        .animate-pulse {
          display: inline-block;
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default About;
