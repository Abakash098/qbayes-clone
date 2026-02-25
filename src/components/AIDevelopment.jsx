import React, { useState, useEffect } from 'react';
import { 
  FaBrain, FaCode, FaRocket, FaCheckCircle, 
  FaArrowRight, FaDatabase, FaLayerGroup, FaEnvelope, FaGlobe, FaCogs 
} from 'react-icons/fa';
import HireUsModal from './HireUsModal';

const AIDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to scroll to the booking/contact section automatically
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden selection:bg-purple-100">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-white pt-24 pb-16 px-6 text-center overflow-hidden">
        <div className="relative max-w-5xl mx-auto z-10">
          <div className="inline-block px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-600 font-bold text-[10px] md:text-xs mb-8 uppercase tracking-[0.2em] shadow-sm">
            🚀 Custom Neural Architectures
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter flex flex-wrap justify-center">
            <WordReveal text="Turning Data into" delayStart={0.2} />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 w-full">
              <WordReveal text="Predictive Power" delayStart={0.6} />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            We engineer high-performance machine learning models that automate complex reasoning and drive enterprise-scale ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToBooking}
              className="bg-purple-700 hover:bg-slate-900 text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-2xl shadow-purple-200 flex items-center justify-center gap-3 group"
            >
              Start AI Audit <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
               onClick={() => setIsModalOpen(true)}
               className="bg-white border-2 border-slate-100 hover:bg-slate-50 text-slate-900 font-bold py-5 px-10 rounded-2xl transition-all"
            >
              How We Work
            </button>
          </div>
        </div>
      </div>

      {/* 2. BRIDGE SECTION: THE CONNECTIVE LOGIC */}
      <div className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Rapid AI <br/>Deployment</h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">
                Don't let your data sit idle. Our team bridges the gap between raw data and actionable intelligence in as little as 4 weeks.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inquiries</p>
                    <p className="font-bold text-slate-900">info@qbayes.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <FaGlobe />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Availability</p>
                    <p className="font-bold text-slate-900">Global Operations 24/7</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={scrollToBooking}
                className="group flex items-center justify-between bg-slate-900 hover:bg-purple-700 text-white font-black py-5 px-8 rounded-2xl transition-all shadow-xl"
              >
                Connect With Our Engineers
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="hidden md:flex bg-[#0B0F1A] relative overflow-hidden flex-col justify-center p-16">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <FaBrain size={200} className="text-white" />
               </div>
               <div className="relative z-10">
                  <h3 className="text-white text-2xl font-black mb-4">The QBayes Standard</h3>
                  <div className="space-y-4">
                    {['Full IP Ownership', 'On-Premise Deployment', 'Encrypted Data Pipelines'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-400 font-medium">
                        <FaCheckCircle className="text-purple-500" /> {item}
                      </div>
                    ))}
                  </div>
               </div>
               <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl italic text-slate-400 text-sm">
                  "Our mission is to make advanced neural networks the heartbeat of every enterprise."
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CAPABILITIES GRID */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12">
           <div className="space-y-4">
              <FaDatabase className="text-4xl text-purple-600" />
              <h4 className="text-2xl font-black text-slate-900">MLOps & Data</h4>
              <p className="text-slate-500 font-medium leading-relaxed">Automated pipelines for data ingestion, versioning, and secure cloud storage.</p>
           </div>
           <div className="space-y-4">
              <FaCogs className="text-4xl text-indigo-600" />
              <h4 className="text-2xl font-black text-slate-900">Custom Training</h4>
              <p className="text-slate-500 font-medium leading-relaxed">Training proprietary LLMs and CNNs on your specific business niche.</p>
           </div>
           <div className="space-y-4">
              <FaLayerGroup className="text-4xl text-blue-600" />
              <h4 className="text-2xl font-black text-slate-900">Seamless API</h4>
              <p className="text-slate-500 font-medium leading-relaxed">Integrating AI agents directly into your existing dashboard or mobile app.</p>
           </div>
        </div>
      </div>

      {/* 4. THE FINAL CONNECTION POINT */}
      {/* This ID 'booking-section' is the target for the smooth scroll.
          The actual BookingSection component (with the form) is rendered 
          globally in App.jsx via PageLayout.
      */}
      <div id="booking-section" className="py-1 border-t border-slate-100">
         {/* The BookingSection will appear here via the global layout */}
      </div>

      <HireUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

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