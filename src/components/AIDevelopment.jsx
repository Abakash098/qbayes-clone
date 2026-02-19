import React, { useEffect } from 'react';
import { 
  FaBrain, FaCogs, FaCode, FaRocket, FaShieldAlt, 
  FaChartBar, FaCheckCircle, FaArrowRight, FaDatabase, FaLayerGroup 
} from 'react-icons/fa';

const AIDevelopment = () => {
  
  // Force scroll to top on load
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

  const steps = [
    { title: "Consultation", desc: "Understanding your data and business goals.", icon: FaChartBar },
    { title: "Data Engineering", desc: "Cleaning and structuring your data for AI training.", icon: FaDatabase },
    { title: "Model Building", desc: "Developing custom neural networks and algorithms.", icon: FaCode },
    { title: "Deployment", desc: "Seamlessly integrating AI into your existing ecosystem.", icon: FaRocket },
  ];

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION (With Word Reveal & White/Violet Theme) */}
      <div className="relative bg-white py-24 px-6 text-center overflow-hidden border-b border-gray-100">
        {/* Violet Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[120px] opacity-40 translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative max-w-5xl mx-auto z-10">
          <div className="inline-block px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-bold text-sm mb-8 uppercase tracking-widest shadow-sm">
            🚀 Bespoke AI Engineering
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-black mb-8 leading-tight flex flex-wrap justify-center">
            <WordReveal text="Architecting The Future" delayStart={0.2} />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 w-full">
              <WordReveal text="With Custom AI" delayStart={0.6} />
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
            We build powerful, custom AI applications that revolutionize workflows, automate complex decision-making, and unlock exponential growth.
          </p>
          
          <button className="bg-slate-900 hover:bg-purple-700 text-white font-bold py-5 px-12 rounded-full transition-all hover:scale-105 shadow-xl shadow-purple-100">
            Start Your AI Project
          </button>
        </div>
      </div>

      {/* 2. CORE CAPABILITIES (Grid Cards) */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-black mb-4">Core AI Capabilities</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Neural Networks", desc: "Custom-built deep learning models for complex pattern recognition.", icon: FaBrain },
            { title: "System Automation", desc: "Intelligent bots that handle high-volume operational tasks.", icon: FaCogs },
            { title: "Predictive Engines", desc: "Forecast market shifts and user behavior with high precision.", icon: FaChartBar },
          ].map((item, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] border border-gray-100 bg-white shadow-lg hover:shadow-2xl hover:border-purple-200 transition-all group">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <item.icon size={30} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. DEVELOPMENT PROCESS (Step-by-Step) */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Our Development Lifecycle</h2>
            <p className="text-purple-300">How we turn your vision into a production-ready AI agent.</p>
          </div>

          

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                  <step.icon size={28} className="text-purple-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">0{idx + 1}. {step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. WHY CHOOSE US (White & Violet Comparison) */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-black mb-8 leading-tight">
              Why Partner With <br/>
              <span className="text-purple-600">QBayes For AI?</span>
            </h2>
            <div className="space-y-6">
              {[
                "We use Responsible AI frameworks for ethical data use.",
                "Custom-built models—not just wrappers around ChatGPT.",
                "End-to-end integration with your current IT stack.",
                "24/7 Monitoring to prevent model drift and errors."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                  <FaCheckCircle className="text-purple-600 text-xl" />
                  <span className="font-bold text-slate-800">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800" 
                alt="AI Development Team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- ANIMATION STYLES --- */}
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

export default AIDevelopment;