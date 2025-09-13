import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Youtube, ChevronRight, ArrowRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Top Contact Bar */}
      <div className="bg-orange-500 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center text-white">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Address</h4>
                <p className="text-sm opacity-90">4648 Rocky Road Philadelphia</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Send Email</h4>
                <p className="text-sm opacity-90">info@example.com</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Call Emergency</h4>
                <p className="text-sm opacity-90">+88 0123 654 99</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <h3 className="text-xl font-bold text-white">FRESHEAT</h3>
              <span className="ml-2 text-orange-500">🍽️</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-blue-600 rounded flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-blue-700 rounded flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-blue-800 rounded flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-red-600 rounded flex items-center justify-center transition-colors duration-300">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500"></div>
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Our Gallery', 'Our Blogs', 'FAQ\'s', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center">
                    <ChevronRight className="w-3 h-3 mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Our Menu
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500"></div>
            </h3>
            <ul className="space-y-3">
              {['Burger King', 'Pizza king', 'Fresh Food', 'Vegetable', 'Desserts'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center">
                    <ChevronRight className="w-3 h-3 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500"></div>
            </h3>
            <div className="space-y-4 text-sm">
              <p className="text-slate-400">
                <span className="text-white font-medium">Monday – Friday:</span> 8am – 4pm
              </p>
              <p className="text-slate-400">
                <span className="text-white font-medium">Saturday:</span> 8am – 12am
              </p>
              <div className="mt-6">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 p-3 bg-slate-700 border border-slate-600 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 text-sm"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-r-lg transition-colors duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-start">
                  <input type="checkbox" id="agree" className="mt-1 mr-2 accent-orange-500" />
                  <label htmlFor="agree" className="text-slate-400 text-xs">
                    I agree to the <span className="text-white underline">Privacy Policy</span>.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-white text-sm">
              © All Copyright 2025 by FreshEat
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors duration-300 border border-white/30 px-3 py-1 rounded">
                Terms & Condition
              </a>
              <a href="#" className="text-white hover:text-gray-200 text-sm transition-colors duration-300 border border-white/30 px-3 py-1 rounded">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;