import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full bg-white animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-black py-24 px-6 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-blue-900 opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 mb-8">
            We are a National Award Winning Company delivering digital excellence for over 15 years.
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded with a vision to transform the digital landscape, Webskitters has grown from a small team to a global agency. We believe in innovation, integrity, and delivering results that matter.
        </p>
      </div>
    </div>
  );
};
export default AboutUs;