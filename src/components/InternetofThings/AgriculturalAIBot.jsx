import React from 'react';
import { FaMicrochip, FaLeaf, FaRobot, FaDatabase } from 'react-icons/fa';

const AgriculturalAiBot = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-bold">IoT & AI Innovation</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
              Agricultural AI Bot: <br/>The Future of Farming
            </h1>
            <p className="text-slate-600 text-lg mb-8">
              A revolutionary autonomous hardware solution designed to monitor crop health, 
              detect diseases in real-time, and analyze soil parameters using advanced AI sensors.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <FaRobot className="text-green-500 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">81.8% Accuracy</h4>
                  <p className="text-sm text-slate-500">Disease detection precision</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMicrochip className="text-green-500 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Edge AI</h4>
                  <p className="text-sm text-slate-500">Real-time local processing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-green-500/10 absolute -inset-4 rounded-3xl -rotate-2"></div>
            <img 
              src="/agri-bot.png" // Updated to .png
              alt="Agricultural AI Bot" 
              className="relative rounded-2xl shadow-2xl w-full object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriculturalAiBot;