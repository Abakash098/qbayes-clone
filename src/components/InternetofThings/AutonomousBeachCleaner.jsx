import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRobot, FaCamera, FaRecycle, FaSignal, FaWater, FaTrash } from 'react-icons/fa';

const AutonomousBeachCleaner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <FaCamera className="text-blue-600" />,
      title: "CV-Based Waste Detection",
      desc: "Uses Computer Vision to identify waste in real-time without human intervention."
    },
    {
      icon: <FaRecycle className="text-green-600" />,
      title: "Waste Segregation",
      desc: "Features dual-shovels to separate biodegradable and non-biodegradable waste."
    },
    {
      icon: <FaSignal className="text-purple-600" />,
      title: "IoT Data Logging",
      desc: "Monitors bin levels and location updates via a centralized cloud dashboard."
    },
    {
      icon: <FaTrash className="text-orange-600" />,
      title: "Auto-Cleaning",
      desc: "Built-in vibration system to clear sand and dust from collected debris."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Autonomous <span className="text-blue-600">Beach Cleaner</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Our IoT-based robotic system offers a real-time solution for coastal waste management. 
            By leveraging autonomous navigation and precision segregation, we ensure cleaner beaches 
            while optimizing the recycling chain.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Technical Specs
            </button>
          </div>
        </div>
        <div data-aos="zoom-in" className="relative">
          <img 
            src="/beach-cleaner.png" 
            alt="Beach Cleaner Robot" 
            className="rounded-2xl shadow-2xl w-full object-cover"
            onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Beach+Cleaner+Robot" }}
          />
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 underline decoration-blue-500 decoration-4 underline-offset-8">
            Advanced Capabilities
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-xl transition duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-slate-800">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousBeachCleaner;