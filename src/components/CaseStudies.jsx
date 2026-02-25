import React, { useEffect } from 'react';
import { FaArrowRight, FaChartLine } from 'react-icons/fa';

const caseStudiesData = [
  {
    id: 1,
    title: "Dynamic AI Marketing Campaign for a Global Waste Management Firm",
    desc: "QBayes' Strategic predictive models delivered massive wins in lead growth and cost reduction.",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    logoText: "EnviroCorp",
    stats: [
      { value: "45%", label: "Increase in Leads" },
      { value: "35%", label: "Lead Quality" },
      { value: "28%", label: "Conversion Rate" }
    ]
  },
  {
    id: 2,
    title: "High-Performance Generative AI Strategy for Luxury Fashion",
    desc: "QBayes' Dynamic computer vision services for a UK-Based brand delivered strong ROI growth.",
    // FIXED: Using a working high-quality fashion link
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    logoText: "AURA LUXE",
    stats: [
      { value: "30%", label: "ROAS Increase" },
      { value: "22%", label: "Reduced CPS" },
      { value: "27%", label: "Sales Volume" }
    ]
  },
  {
    id: 3,
    title: "Revolutionizing Healthcare Through NLP Transformation",
    desc: "QBayes transformed patient triage through strategic LLM integration and data engineering.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    logoText: "MHISA Health",
    stats: [
      { value: "200%", label: "Processing Speed" },
      { value: "45%", label: "Patient Engagement" },
      { value: "76%", label: "Data Accuracy" }
    ]
  },
  {
    id: 4,
    title: "Predictive Supply Chain Models for Automotive Giants",
    desc: "Experience excellence in inventory management with high-end IoT and Machine Learning.",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    logoText: "AutoMotion",
    stats: [
      { value: "233%", label: "Logistics Efficiency" },
      { value: "42%", label: "Reduced Waste" },
      { value: "16%", label: "Profit Margin" }
    ]
  }
];

const CaseStudies = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll to your global booking/contact section for info@qbayes.com leads
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans bg-slate-50 selection:bg-blue-200">
      
      {/* --- ENTERPRISE HERO SECTION --- */}
      <section className="relative bg-[#0A0F1C] text-white overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-[#0A0F1C] to-purple-900/30 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
              <FaChartLine className="animate-pulse" /> Proven Track Record
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              Case <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                Studies
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-medium">
              Explore how QBayes engineers technical solutions to solve complex operational bottlenecks for global enterprises.
            </p>
            
            <button 
              onClick={scrollToBooking}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-2xl shadow-blue-600/20 flex items-center justify-center gap-3 group w-full sm:w-auto"
            >
              Consult Our Engineers 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="w-full lg:w-1/2 relative hidden md:block">
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
                alt="Data Analysis" 
                className="w-full h-[500px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CASE STUDIES GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudiesData.map((study) => (
            <div key={study.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-500">
              
              <div className="relative h-80 overflow-hidden">
                <img src={study.img} alt={study.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-2xl shadow-lg font-black text-white tracking-widest uppercase">
                  {study.logoText}
                </div>
              </div>

              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-500 mb-8 flex-1 font-medium leading-relaxed">{study.desc}</p>
                
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 mb-8">
                  <div className="grid grid-cols-3 gap-4 divide-x divide-slate-200">
                    {study.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center px-2">
                        <span className="text-blue-600 font-black text-2xl tracking-tighter">{stat.value}</span>
                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mt-1">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <button className="text-slate-900 font-black flex items-center gap-3 hover:text-blue-600 transition-colors group/btn">
                    Read Technical Breakdown
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-colors">
                       <FaArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-[#0A0F1C] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-2/3">
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter">
                    Ready to build your <br/> success story?
                 </h2>
                 <p className="text-slate-400 text-lg md:text-xl font-medium max-w-xl">
                    Our engineering team is ready to design your architectural path.
                 </p>
              </div>
              <button 
                onClick={scrollToBooking}
                className="bg-blue-600 hover:bg-blue-500 text-white font-black py-6 px-10 rounded-2xl transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 group"
              >
                Start Your Project <FaArrowRight />
              </button>
           </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudies;