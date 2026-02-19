import React from 'react';
import { FaSearch, FaMapSigns, FaCode, FaRocket, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      icon: FaSearch,
      title: "Discovery & Audit",
      description: "We start by deeply understanding your business, target audience, and existing infrastructure. We identify bottlenecks and areas where AI and IT solutions can drive the most ROI."
    },
    {
      id: 2,
      icon: FaMapSigns,
      title: "Strategic Roadmap",
      description: "Our experts bring strategic insights to create a comprehensive project roadmap. We define the architecture, select the right AI models, and set clear milestones."
    },
    {
      id: 3,
      icon: FaCode,
      title: "Agile Development",
      description: "We follow an agile, iterative methodology. Our specialized teams build, train, and test your custom software or AI models with continuous feedback loops."
    },
    {
      id: 4,
      icon: FaRocket,
      title: "Deployment & Scaling",
      description: "We ensure seamless integration into your existing systems with zero disruption. Post-launch, we provide 24/7 monitoring and scalable optimization."
    }
  ];

  return (
    <div className="w-full bg-white font-sans animate-fadeIn">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-slate-900 py-24 px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-purple-300 font-bold text-xs uppercase tracking-wider mb-8 backdrop-blur-md">
             ⚙️ Our Methodology
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            How We Deliver <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Excellence
            </span>
          </h1> 
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            A transparent, agile, and research-driven approach to turning complex business challenges into scalable digital ecosystems.
          </p>
        </div>
      </div>

      {/* --- TIMELINE SECTION --- */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Our Proven Process</h2>
          <p className="text-slate-500 font-medium text-lg">From conceptualization to deployment, we ensure transparency at every step.</p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col md:flex-row items-start gap-8 bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl hover:border-purple-200 transition-all group relative overflow-hidden">
              
              {/* Step Number Background */}
              <div className="absolute -right-6 -top-10 text-[150px] font-black text-slate-200/50 z-0 pointer-events-none group-hover:text-purple-100/50 transition-colors">
                {step.id}
              </div>

              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-purple-600 border border-slate-100 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <step.icon size={32} />
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  Step {step.id}: {step.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-bold text-sm cursor-pointer group-hover:translate-x-2 transition-transform">
                  Explore Deliverables <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HowWeWork;