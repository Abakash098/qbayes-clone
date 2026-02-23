import React, { useState, useEffect } from 'react'; // Added useState
import { 
  FaLightbulb, FaChartPie, FaShieldAlt, FaHandshake, 
  FaCheckCircle, FaArrowRight, FaMapMarkedAlt, FaUserTie 
} from 'react-icons/fa';
import HireUsModal from './HireUsModal'; // Adjust path if needed based on your folder structure

const AIConsulting = () => {
  // 1. State to handle modal visibility
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
          
          {/* 2. Added onClick to trigger modal */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-slate-900 hover:bg-purple-700 text-white font-bold py-5 px-12 rounded-full transition-all hover:scale-105 shadow-2xl"
          >
            Book A Strategic Audit
          </button>
        </div>
      </div>

      {/* --- STRATEGIC ROADMAP & FLOW SECTIONS REMAIN SAME --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* ... (Rest of your existing content) */}
      </div>

      {/* 3. The Modal Component */}
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

export default AIConsulting;