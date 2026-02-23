import React, { useState, useEffect } from 'react';
import { 
  FaBrain, FaCogs, FaCode, FaRocket, FaShieldAlt, 
  FaChartBar, FaCheckCircle, FaArrowRight, FaDatabase, FaLayerGroup, FaEnvelope, FaPhoneAlt 
} from 'react-icons/fa';
import HireUsModal from './HireUsModal'; // Import the modal you built

const AIDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-white py-24 px-6 text-center overflow-hidden border-b border-gray-100">
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
            We build powerful, custom AI applications that revolutionize workflows and automate decision-making.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-900 hover:bg-purple-700 text-white font-bold py-5 px-12 rounded-full transition-all hover:scale-105 shadow-xl"
          >
            Start Your AI Project
          </button>
        </div>
      </div>

      {/* 2. HELP US / CONTACT SECTION (New Portion) */}
      <div className="bg-purple-50 py-20 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-purple-100">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-4xl font-black text-slate-900 mb-6">Let Us Help You <br/>Scale with AI</h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Need help deciding which model fits your data? Our engineers are ready to audit your current stack and suggest a custom AI roadmap.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    <FaEnvelope />
                  </div>
                  <span className="font-bold">support@qbayes.com</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    <FaPhoneAlt />
                  </div>
                  <span className="font-bold">+1 (555) 000-AI-READY</span>
                </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center justify-between bg-purple-600 hover:bg-slate-900 text-white font-black py-4 px-8 rounded-2xl transition-all"
              >
                Book a Free Discovery Call
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="hidden md:block bg-gradient-to-br from-purple-600 to-blue-700 relative overflow-hidden">
               {/* Decorative AI Graphics */}
               <div className="absolute inset-0 opacity-20">
                 <FaLayerGroup className="text-white text-[20rem] absolute -bottom-20 -right-20" />
               </div>
               <div className="h-full flex items-center justify-center p-20 text-white text-center italic">
                 "Our mission is to make advanced neural networks accessible for every enterprise."
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* CORE CAPABILITIES & PROCESS REMAIN HERE... */}

      {/* THE MODAL */}
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