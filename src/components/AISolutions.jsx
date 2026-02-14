import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AISolutions = () => {
  return (
    <div className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Images (Matching the visual in your photo) */}
        <div className="relative">
          {/* Main Large Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
              alt="AI Robot Handshake" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating '20+ Successful Projects' Card */}
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce">
            <p className="text-blue-600 font-bold text-xl">20+</p>
            <p className="text-gray-600 text-sm font-medium">Successful Projects</p>
          </div>

          {/* Floating 'Happy Customers' Card */}
          <div className="absolute -top-6 -left-6 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-2">
            <div className="flex text-yellow-400">★ ★ ★ ★ ★</div>
            <p className="text-xs font-bold text-gray-700">Happy Customers</p>
          </div>
        </div>

        {/* Right Side: Text Content (Exact text from your image) */}
        <div className="flex flex-col">
          <h3 className="text-orange-500 font-bold tracking-widest uppercase mb-4">Let's Talk AI</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Future-Proof Your <br />
            Business With <span className="text-blue-600">Our <br /> Intelligent AI Tech</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Take advantage of our complete range of AI services, built to drive tangible business impact. 
            Our robust AI systems are designed using industry best practices to streamline your 
            business operations, strengthen customer loyalty, and create opportunities in untapped markets.
          </p>

          {/* List items with Check Icons */}
          <ul className="space-y-4 mb-10">
            {['AI service solutions', 'AI development', 'AI chatbot development', 'Generative AI consulting'].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 text-gray-800 font-semibold uppercase text-sm tracking-wide">
                <FaCheckCircle className="text-orange-500 text-xl" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="bg-blue-600 text-white w-fit px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg flex items-center group">
            Explore AI Tech With Us
            <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default AISolutions;