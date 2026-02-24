import React from 'react';
import { 
  FaSearch, FaMapSigns, FaCode, FaRocket, FaArrowRight, 
  FaSync, FaShieldAlt, FaUsers, FaChartPie, FaLightbulb 
} from 'react-icons/fa';

const HowWeWork = () => {
  const steps = [
    {
      id: "01",
      icon: FaSearch,
      title: "Discovery & Audit",
      description: "We start by deeply understanding your business DNA. Our team performs a comprehensive audit of your existing infrastructure and target audience to identify high-ROI AI opportunities.",
      details: ["Stakeholder Interviews", "Technical Debt Audit", "Competitor AI Benchmarking"]
    },
    {
      id: "02",
      icon: FaMapSigns,
      title: "Strategic Roadmap",
      description: "Transparency begins here. We define the project architecture, select the optimal tech stack, and set granular milestones with fixed timelines.",
      details: ["UI/UX Wireframing", "Architecture Design", "Resource Allocation"]
    },
    {
      id: "03",
      icon: FaCode,
      title: "Agile Development",
      description: "Our specialized teams work in 2-week sprints. You receive continuous updates through a feedback loop that ensures the product evolves with your needs.",
      details: ["Bi-weekly Demos", "Unit & Integration Testing", "Code Quality Reviews"]
    },
    {
      id: "04",
      icon: FaRocket,
      title: "Deployment & Scaling",
      description: "We handle the heavy lifting of integration. Post-launch, we provide proactive monitoring and optimization to ensure your systems scale effortlessly.",
      details: ["Zero-Downtime Migration", "24/7 SLA Support", "Performance Tuning"]
    }
  ];

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-32 px-6 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-900 to-orange-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-orange-400 font-bold text-xs uppercase tracking-widest mb-8 backdrop-blur-md">
             The QBayes Methodology
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Engineered for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
              Reliability
            </span>
          </h1> 
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            We bridge the gap between complex AI theory and practical business execution through a transparent, iterative, and research-backed process.
          </p>
        </div>
      </section>

      {/* --- THE PROCESS SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Our Proven Framework</h2>
          <p className="text-slate-500 font-medium">Four stages designed to eliminate risk and maximize performance.</p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 transform -translate-x-1/2"></div>

          <div className="space-y-24 lg:space-y-40">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Block */}
                <div className="lg:w-1/2 w-full">
                  <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:border-purple-100 transition-all group">
                    <span className="text-6xl font-black text-slate-100 group-hover:text-purple-50 transition-colors block mb-4">{step.id}</span>
                    <div className="flex items-center gap-4 mb-6">
                       <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl">
                          <step.icon size={28} />
                       </div>
                       <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-500 text-lg leading-relaxed mb-8">{step.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Pulse Point */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 bg-white border-4 border-purple-600 rounded-full z-20 flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Empty Spacer for Layout */}
                <div className="lg:w-1/2 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COLLABORATION PRINCIPLES --- */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Built on <span className="text-purple-600">Core Principles</span></h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                Our working relationship isn't just about code; it's about a partnership built on integrity and global environmental responsibility.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: FaSync, title: "Agile Feedback", desc: "No black-box development. You are involved in every sprint demo." },
                  { icon: FaShieldAlt, title: "Data Security", desc: "Enterprise-grade encryption and compliance at every layer." },
                  { icon: FaLightbulb, title: "Novelty in Innovation", desc: "We don't just follow trends; we investigate and develop theory-enhanced solutions." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 text-orange-500"><item.icon size={22}/></div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-purple-600 h-64 rounded-3xl p-8 text-white flex flex-col justify-end">
                  <FaUsers size={40} className="mb-4 text-purple-200" />
                  <p className="font-bold text-xl leading-tight">Client-First Mentality</p>
               </div>
               <div className="bg-slate-900 h-64 rounded-3xl p-8 text-white mt-12 flex flex-col justify-end">
                  <FaChartPie size={40} className="mb-4 text-orange-400" />
                  <p className="font-bold text-xl leading-tight">Data Driven Results</p>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HowWeWork;