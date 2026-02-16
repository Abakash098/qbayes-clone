import React from 'react';

const GenAIConsulting = () => {
  return (
    <div className="w-full bg-white animate-fadeIn">
      <div className="relative bg-black py-24 px-6 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-l from-indigo-900 to-black opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Generative AI Consulting</h1> 
          <p className="text-xl text-gray-300 mb-8">
            Strategic guidance on how to leverage GenAI for content creation, product design, and automation.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenAIConsulting;