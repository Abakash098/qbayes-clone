import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// FIX: Using FaDesktop (Correct naming) and other relevant icons
import { FaDesktop, FaTint, FaFish, FaMicrochip, FaChartLine } from 'react-icons/fa';

const AquisherWaterMonitor = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const specs = [
    { icon: <FaTint className="text-blue-500" />, title: "Water Quality", desc: "Real-time monitoring of TDS, Oxygen, and pH levels." },
    { icon: <FaFish className="text-orange-500" />, title: "Fish Suitability", desc: "AI predicts the best environment for specific fish species." },
    { icon: <FaChartLine className="text-green-500" />, title: "Predictive Analytics", desc: "Forecasting water health to prevent disease outbreaks." },
    { icon: <FaMicrochip className="text-purple-500" />, title: "IoT Integration", desc: "Seamless sensor connectivity with 24/7 data logging." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Aquisher: Smart <span className="text-blue-600">Water Monitoring</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            A comprehensive IoT solution for sustainable fish cultivation. Aquisher uses advanced sensors 
            to ensure optimal aquatic environments, boosting yield and reducing mortality rates.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            View Live Dashboard
          </button>
        </div>
        <div data-aos="zoom-in" className="relative">
          <img 
            src="/aquisher.png" 
            alt="Aquisher System" 
            className="rounded-2xl shadow-2xl w-full object-cover"
            onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Aquisher+System" }}
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {specs.map((spec, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="p-6 border border-slate-100 rounded-xl hover:shadow-lg transition">
                <div className="text-3xl mb-4">{spec.icon}</div>
                <h3 className="font-bold mb-2">{spec.title}</h3>
                <p className="text-sm text-slate-500">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AquisherWaterMonitor;