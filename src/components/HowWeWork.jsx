import React from 'react';

const HowWeWork = () => {
  return (
    <div className="w-full bg-white animate-fadeIn">
      <div className="relative bg-black py-24 px-6 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900 to-black opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">How We Work</h1>
          <p className="text-xl text-gray-300 mb-8">Agile methodology meets creative innovation.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-4 text-center">
           {['Discovery', 'Design', 'Development', 'Launch'].map((step, i) => (
             <div key={i} className="p-8 border rounded-xl hover:shadow-lg transition">
               <h3 className="text-2xl font-bold text-orange-500 mb-2">0{i+1}</h3>
               <h4 className="font-bold text-xl">{step}</h4>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
export default HowWeWork;