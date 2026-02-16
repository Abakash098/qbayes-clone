import React from 'react';

const AIIntegration = () => {
  return (
    <div className="w-full bg-white animate-fadeIn">
      <div className="relative bg-black py-24 px-6 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-black opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">AI Integration</h1> 
          <p className="text-xl text-gray-300 mb-8">
            Seamlessly embed artificial intelligence into your existing software ecosystem without disrupting your workflow.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105">
            Integrate Now
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Seamless Connectivity</h2>
        <p className="text-gray-600">
          We connect powerful AI models (like GPT-4, Claude, or Llama) directly into your CRM, ERP, or custom web apps using robust APIs.
        </p>
      </div>
    </div>
  );
};

export default AIIntegration;