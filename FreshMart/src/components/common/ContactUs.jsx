import React from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-16 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-16 right-24 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-16 left-24 w-18 h-18 bg-pink-300/15 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-12 right-16 w-14 h-14 bg-blue-300/20 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-24 left-1/3 w-12 h-12 bg-green-300/15 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-1/3 w-10 h-10 bg-orange-300/20 rounded-full animate-bounce delay-1000"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-pink-100 bg-clip-text text-transparent drop-shadow-2xl">
            GET IN TOUCH
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4 text-blue-100">We'd love to hear from you</p>
          <div className="flex items-center justify-center space-x-3 text-lg font-medium">
            <span className="text-blue-200">Home</span>
            <span className="text-pink-300">•</span>
            <span className="text-pink-300 font-semibold">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Multiple ways to connect with our team. Choose what works best for you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Phone Number */}
            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Call Us</h3>
              <p className="text-blue-600 font-semibold mb-1">+123 (456) 7890</p>
              <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM</p>
            </div>

            {/* Email Address */}
            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-yellow-100">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Email Us</h3>
              <p className="text-orange-600 font-semibold mb-1">hello@freshmart.com</p>
              <p className="text-gray-500 text-sm">24/7 Support</p>
            </div>

            {/* Our Address */}
            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-red-100">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Visit Us</h3>
              <p className="text-pink-600 font-semibold mb-1">123 Fresh Street</p>
              <p className="text-gray-500 text-sm">New York, NY 10001</p>
            </div>

            {/* Opening Time */}
            <div className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Store Hours</h3>
              <p className="text-emerald-600 font-semibold mb-1">Mon-Fri 9AM-8PM</p>
              <p className="text-gray-500 text-sm">Sat-Sun 10AM-6PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
                <p className="text-indigo-100">We'll get back to you within 24 hours</p>
              </div>
              
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        {...register('fullName', { required: 'Full name is required' })}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 text-gray-800 font-medium"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                          <span className="w-4 h-4 text-red-500">⚠</span>
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Email Address *</label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Please enter a valid email address'
                          }
                        })}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 text-gray-800 font-medium"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                          <span className="w-4 h-4 text-red-500">⚠</span>
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        {...register('phone')}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 text-gray-800 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Subject</label>
                      <input
                        type="text"
                        placeholder="What's this about?"
                        {...register('subject')}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 text-gray-800 font-medium"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Message *</label>
                    <textarea
                      placeholder="Tell us more about your inquiry..."
                      {...register('message', { required: 'Please enter your message' })}
                      rows="6"
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-300 text-gray-800 font-medium resize-none"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                        <span className="w-4 h-4 text-red-500">⚠</span>
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      {...register('terms', { required: 'Please accept our terms to continue' })}
                      className="mt-1 w-5 h-5 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500" 
                    />
                    <label htmlFor="terms" className="text-gray-600 font-medium leading-relaxed">
                      I agree to the <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">Terms of Service</span> and <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">Privacy Policy</span>
                    </label>
                  </div>
                  {errors.terms && (
                    <p className="text-red-500 text-sm font-medium flex items-center gap-1">
                      <span className="w-4 h-4 text-red-500">⚠</span>
                      {errors.terms.message}
                    </p>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center space-x-3 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Our Store</h2>
          <p className="text-xl text-gray-600">Visit us at our flagship location in the heart of the city</p>
        </div>
        <div className="h-96 bg-gray-200 relative overflow-hidden rounded-t-3xl shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959872076!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="hover:grayscale-0 grayscale transition-all duration-500"
          ></iframe>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-indigo-600" />
              <div>
                <p className="font-bold text-gray-800">FreshMart Store</p>
                <p className="text-sm text-gray-600">123 Fresh Street, NY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;