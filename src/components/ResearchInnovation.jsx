import React from 'react';
import { FaFlask, FaLightbulb, FaGlobeAmericas, FaCheck } from 'react-icons/fa';

const ResearchInnovation = () => {
  const data = [
    {
      title: "Services",
      icon: FaFlask,
      description: "Comprehensive research support and consultancy.",
      items: [
        "Consultancy",
        "Pursuit of problem statements through Innovation and Novelty",
        "Investigation, Design, Development & Implementation",
        "Theory/Philosophy Enhancement of Methodology",
        "Transparent, Interpretable & Responsible Reporting",
        "Ethical Compliance",
        "Knowledge Incubation",
        "Concept Development",
        "Research Skill Development"
      ]
    },
    {
      title: "Inventions & Outcomes",
      icon: FaLightbulb,
      description: "Tangible solutions derived from deep research.",
      items: [
        "Research Documentations",
        "Patents",
        "Software/Web based Intelligent Systems",
        "Statistical/Empirical Reports",
        "AI/Machine/Deep Learning based Systems",
        "Other R&D Advanced Analytics & Solutions"
      ]
    },
    {
      title: "Domains Covered",
      icon: FaGlobeAmericas,
      description: "Cutting-edge fields we specialize in.",
      items: [
        "Image Processing / Computer Vision",
        "Natural Language Processing (NLP) / LLMs",
        "Time Series Analysis",
        "Remote Sensing",
        "Education Technology",
        "Population Analysis",
        "Medical Technologies",
        "Knowledge/Information Analysis",
        "Environmental & Sustainable Technologies"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white font-sans relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-900 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-900 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h4 className="text-purple-400 font-bold tracking-widest uppercase mb-4">R&D Wing</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Research And <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Innovation</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We bridge the gap between theoretical research and practical application, delivering inventions and outcomes that drive the future.
          </p>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((col, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Column Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gray-700 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-lg">
                  <col.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{col.title}</h3>
                </div>
              </div>

              {/* List Items */}
              <ul className="space-y-4">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                    <FaCheck className="text-purple-500 mt-1 shrink-0" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResearchInnovation;