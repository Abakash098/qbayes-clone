import React from 'react';

const LifeAtWebskitters = () => {
  return (
    <div className="w-full bg-white animate-fadeIn">
      <div className="relative bg-black py-24 px-6 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900 to-black opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Life @ Webskitters</h1>
          <p className="text-xl text-gray-300 mb-8">Fun, growth, and a culture of learning.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Gallery Placeholders */}
        {[1,2,3,4].map(i => (
          <div key={i} className="h-48 bg-gray-200 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};
export default LifeAtWebskitters;