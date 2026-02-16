import React from 'react';
import { FaBolt, FaChartLine, FaRocket, FaArrowRight } from 'react-icons/fa';

const ROISection = () => {
  const cards = [
    {
      id: 1,
      icon: FaBolt,
      title: "Automating Processes",
      desc: "We help you cut repetitive tasks, streamline systems, and run operations effortlessly.",
      label: "EFFICIENCY",
      color: "text-cyan-500",
      bg: "bg-cyan-50"
    },
    {
      id: 2,
      icon: FaChartLine,
      title: "Fortifying Business Performance",
      desc: "You can scale with confidence as we align the latest technology with your business goals.",
      label: "GROWTH",
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      id: 3,
      icon: FaRocket,
      title: "Crafting Future-Ready Solutions",
      desc: "Our specialized teams design intelligent systems that keep you ahead in an ever-evolving market.",
      label: "INNOVATION",
      color: "text-sky-500",
      bg: "bg-sky-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 font-sans relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 rounded-full blur-3xl -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Header */}
        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">OUR INTELLIGENCE</h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16">
          The ROI Of <span className="text-[#00c2ff]">Digital Transformation</span>
        </h2>

        {/* 3-Column Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white p-10 rounded-3xl shadow-xl shadow-blue-100 border border-white hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center"
            >
              {/* Badge/Icon Pill */}
              <div className={`mb-6 px-6 py-2 rounded-full ${card.bg} ${card.color} font-bold text-sm flex items-center gap-2 uppercase tracking-wide`}>
                <card.icon /> {card.label}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-lg">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-400/30 transition-all flex items-center gap-2 mx-auto group">
          Talk To Our Expert 
          <FaArrowRight className="transform group-hover:-rotate-45 transition-transform duration-300" />
        </button>

      </div>
    </section>
  );
};

export default ROISection;