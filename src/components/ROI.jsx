import React from 'react';
import { FaBolt, FaChartLine, FaRocket, FaArrowRight } from 'react-icons/fa';

const ROI = () => {
  const cards = [
    {
      id: 1,
      icon: <FaBolt />,
      title: "EFFICIENCY",
      headline: "Automating Processes",
      desc: "We help you cut repetitive tasks, streamline systems, and run operations effortlessly."
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: "GROWTH",
      headline: "Fortifying Business Performance",
      desc: "You can scale with confidence as we align the latest technology with your business goals."
    },
    {
      id: 3,
      icon: <FaRocket />,
      title: "INNOVATION",
      headline: "Crafting Future-Ready Solutions",
      desc: "Our specialized team builds intelligent systems that keep you ahead in an ever-evolving market."
    }
  ];

  return (
    <div className="w-full bg-[#f0f4f8] py-24">
      <div className="max-w-[1300px] mx-auto px-6 text-center">
        
        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">
          OUR INTELLIGENCE
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
          The ROI Of <span className="text-[#4a90e2]">Digital Transformation</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#4a90e2] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wide mb-6">
                <span className="text-lg">{card.icon}</span> {card.title}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#4a90e2] transition-colors">
                {card.headline}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <button className="bg-[#4a90e2] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30">
            Talk To Our Expert <FaArrowRight size={12} className="transform -rotate-45" />
            </button>
        </div>

      </div>
    </div>
  );
};

export default ROI;