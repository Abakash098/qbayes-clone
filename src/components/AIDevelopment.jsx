import React from 'react';

const AIDevelopment = () => {
  return (
    <div className="w-full bg-white animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-black py-24 px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-black to-blue-800 opacity-90"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">AI Development</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Build powerful, custom AI applications that revolutionize workflows and unlock growth.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
             <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom AI Solutions</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-6">
               We develop bespoke AI software tailored to your specific business needs, from predictive analytics engines to intelligent automation tools.
             </p>
             <ul className="space-y-4">
               {['Neural Networks', 'Deep Learning', 'Computer Vision', 'Predictive Modeling'].map(item => (
                 <li key={item} className="flex items-center gap-3 font-medium text-gray-700">
                   <span className="w-2 h-2 bg-blue-500 rounded-full"></span> {item}
                 </li>
               ))}
             </ul>
          </div>
          <div className="h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="AI Development" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDevelopment;