import React, { useEffect } from 'react';
import { 
  FaLightbulb, FaChartPie, FaShieldAlt, FaHandshake, 
  FaCheckCircle, FaArrowRight, FaMapMarkedAlt, FaUserTie 
} from 'react-icons/fa';

const AIConsulting = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- HELPER: Word Reveal Animation ---
  const WordReveal = ({ text, delayStart = 0, className = "" }) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className={`inline-block opacity-0 animate-reveal ${className}`}
        style={{ animationDelay: `${delayStart + (index * 0.1)}s`, marginRight: '0.25em' }}
      >
        {word}
      </span>
    ));
  };

  const services = [
    { 
      title: "AI Feasibility Study", 
      text: "We analyze your current data and tech stack to see if AI can truly solve your problems.",
      icon: FaLightbulb 
    },
    { 
      title: "Strategy & Roadmap", 
      text: "Creating a step-by-step 12-month plan to implement AI across your organization.",
      icon: FaMapMarkedAlt 
    },
    { 
      title: "ROI Analysis", 
      text: "Calculating exactly how much money and time AI will save your business.",
      icon: FaChartPie 
    },
    { 
      title: "Ethical AI Governance", 
      text: "Ensuring your AI models are unbiased, secure, and follow global regulations.",
      icon: FaShieldAlt 
    }
  ];

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-white py-28 px-6 text-center overflow-hidden">
        {/* Violet Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[130px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="relative max-w-5xl mx-auto z-10">
          <div className="inline-block px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-purple-700 font-bold text-sm mb-8 uppercase tracking-widest shadow-sm">
            💡 Strategic Intelligence
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-black mb-8 leading-tight flex flex-wrap justify-center">
            <WordReveal text="Strategic" delayStart={0.2} />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 w-full">
              <WordReveal text="AI Consulting" delayStart={0.5} />
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
            Stop guessing. Start growing. We provide the expert roadmap your business needs to navigate the complex world of Artificial Intelligence.
          </p>
          
          <button className="bg-slate-900 hover:bg-purple-700 text-white font-bold py-5 px-12 rounded-full transition-all hover:scale-105 shadow-2xl">
            Book A Strategic Audit
          </button>
        </div>
      </div>

      {/* --- STRATEGIC ROADMAP SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Interactive Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-purple-100 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-all"></div>
            <div className="relative h-[600px] bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                 alt="AI Strategy Session" 
                 className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-purple-100 max-w-xs">
                  <div className="text-4xl font-black text-purple-600 mb-2">40%</div>
                  <p className="text-slate-800 font-bold text-sm">Average Increase in Operational Efficiency Post-Consultation</p>
               </div>
            </div>
          </div>

          {/* Right: Feature List */}
          <div>
             <h2 className="text-4xl font-black text-black mb-6">Expert Guidance For Your <span className="text-purple-600">AI Transition</span></h2>
             <p className="text-slate-600 text-lg mb-10 leading-relaxed">
               Navigating AI isn't just about the technology—it's about the business value. Our consultants help you avoid expensive mistakes and focus on high-impact wins.
             </p>
             
             <div className="grid grid-cols-1 gap-6">
                {services.map((s, i) => (
                  <div key={i} className="flex items-start gap-6 p-6 rounded-3xl hover:bg-purple-50 border border-transparent hover:border-purple-100 transition-all group">
                    <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">
                      <s.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black mb-1">{s.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* --- CONSULTING FLOW (Diagram Integration) --- */}
      <div className="bg-slate-50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-black mb-4">Our Consulting Framework</h2>
            <p className="text-slate-500 mb-12">How we transform your business into an AI-first organization.</p>
            
            
            
            <div className="grid md:grid-cols-4 gap-8 mt-12">
               {[
                 { step: "Phase 1", title: "Discovery", desc: "Identifying bottlenecks." },
                 { step: "Phase 2", title: "Assessment", desc: "Evaluating data readiness." },
                 { step: "Phase 3", title: "Strategy", desc: "Defining the tech stack." },
                 { step: "Phase 4", title: "Scaling", desc: "Enterprise-wide rollout." },
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <div className="text-purple-600 font-black mb-2">{item.step}</div>
                    <h5 className="font-bold text-black text-lg mb-2">{item.title}</h5>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                 </div>
               ))}
            </div>
        </div>
      </div>

      <style>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-reveal {
          animation: reveal 0.8s cubic-bezier(0.2, 0.65, 0.3, 0.9) forwards;
        }
      `}</style>
    </div>
  );
};

export default AIConsulting;