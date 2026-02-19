import React from 'react';
import { FaFlask, FaLightbulb, FaGlobeAmericas, FaCheck, FaMicrochip } from 'react-icons/fa';

const ResearchInnovation = () => {
  const data = [
    {
      title: "R&D Services",
      icon: FaFlask,
      accent: "from-purple-500 to-indigo-600",
      description: "Advanced consultancy and methodical exploration of complex problem statements.",
      items: [
        "Innovation-led Problem Solving",
        "Full-cycle Investigation & Implementation",
        "Methodology Philosophy Enhancement",
        "Responsible & Ethical Compliance",
        "Research Skill & Concept Incubation"
      ]
    },
    {
      title: "Inventions",
      icon: FaLightbulb,
      accent: "from-blue-500 to-cyan-500",
      description: "Converting abstract theories into high-impact, tangible digital intelligence.",
      items: [
        "IP & Patent Documentation",
        "Web-based Intelligent Systems",
        "Empirical Statistical Reporting",
        "Deep Learning Architectures",
        "Advanced Analytics R&D Solutions"
      ]
    },
    {
      title: "Specialized Domains",
      icon: FaMicrochip,
      accent: "from-fuchsia-500 to-pink-600",
      description: "Pushing boundaries across critical modern technological frontiers.",
      items: [
        "Computer Vision & NLP/LLMs",
        "Time Series & Remote Sensing",
        "Med-Tech & Ed-Tech Innovation",
        "Sustainable Green Technologies",
        "Population & Information Analysis"
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">
      
      {/* --- TECH BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      {/* Soft Ambient Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] opacity-40 -z-10 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-40 -z-10 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-[0.2em] rounded-md mb-4">
              Scientific Excellence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Research & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
                Innovation Hub
              </span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed border-l-2 border-purple-100 pl-6">
            Bridging the gap between academic theory and real-world industrial intelligence.
          </p>
        </div>

        {/* --- INTERACTIVE GRID --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((col, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(126,34,206,0.1)] transition-all duration-500 hover:-translate-y-3"
            >
              {/* Icon Header */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${col.accent} flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                <col.icon size={28} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {col.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-8 leading-relaxed group-hover:text-slate-600 transition-colors">
                {col.description}
              </p>

              {/* Enhanced List */}
              <ul className="space-y-4 pt-6 border-t border-slate-50">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-semibold group/item">
                    <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center group-hover/item:bg-purple-600 transition-colors">
                      <FaCheck className="text-purple-600 group-hover/item:text-white transition-colors" size={8} />
                    </div>
                    <span className="group-hover/item:text-purple-700 transition-colors cursor-default">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative Corner Element */}
              <div className="absolute top-4 right-8 text-slate-50 font-black text-6xl pointer-events-none select-none">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResearchInnovation;