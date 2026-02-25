import React, { useState } from 'react';
import { FaCheckCircle, FaArrowRight, FaPlay, FaRobot, FaMicrochip, FaShieldAlt } from 'react-icons/fa';
import HireUsModal from './HireUsModal';

const AIChatbot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Expanded technical feature set for Demand 21 credibility
  const features = [
    { 
      title: "Advanced NLP Processing", 
      text: "Utilizing Natural Language Processing to understand customer intent, sentiment, and context for human-like replies.",
      icon: <FaMicrochip />
    },
    { 
      title: "Omnichannel Integration", 
      text: "Deploy once and connect across Web, WhatsApp, Instagram, and Mobile apps with a unified knowledge base.",
      icon: <FaRobot />
    },
    { 
      title: "Enterprise-Grade Security", 
      text: "End-to-end encryption and GDPR compliance to ensure your customer data remains private and secure.",
      icon: <FaShieldAlt />
    },
    { 
      title: "Instant Lead Generation", 
      text: "Automatically capture and sync lead data directly to info@qbayes.com and your existing CRM systems.",
      icon: <FaCheckCircle />
    }
  ];

  return (
    <div className="w-full bg-white animate-fadeIn font-sans relative selection:bg-purple-100">
      
      {/* --- BRANDED HERO SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-purple-700 font-bold text-xs md:text-sm mb-6 uppercase tracking-widest shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Next-Gen AI Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-[1] tracking-tighter">
              Conversational <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-500 to-blue-600">
                Intelligence
              </span>
            </h1>
            
            <p className="text-slate-500 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              QBayes builds custom AI Chatbots that automate **70% of support queries**, allowing your team to focus on high-value growth while providing 24/7 engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="bg-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-200 hover:bg-slate-900 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
              >
                Get Started <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
              </button>
              
              <button className="border-2 border-slate-100 text-slate-800 px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 justify-center hover:bg-slate-50 transition-all">
                <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center">
                  <FaPlay className="ml-1 text-[8px]"/>
                </div>
                View Case Studies
              </button>
            </div>

            <div className="mt-10 pt-10 border-t border-slate-100 flex items-center gap-6">
               <div>
                  <p className="text-2xl font-black text-slate-900">99%</p>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Uptime</p>
               </div>
               <div className="w-px h-10 bg-slate-200"></div>
               <div>
                  <p className="text-2xl font-black text-slate-900">2.5s</p>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Avg Response</p>
               </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="order-1 lg:order-2 relative group">
            <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-[8px] md:border-[16px] border-slate-50 shadow-2xl transition-all duration-700 group-hover:shadow-purple-200/50">
              <img 
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Chatbot Interaction" 
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- DEEP INFORMATION SECTION --- */}
      <div className="bg-slate-50/50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Interactive Chat Mockup */}
            <div className="relative group perspective-1000">
              <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-200 p-4 h-[550px] flex flex-col transform transition-all group-hover:rotate-y-2">
                <div className="flex items-center justify-between border-b border-slate-100 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-700 to-blue-500 shadow-lg"></div>
                    <div>
                      <p className="font-bold text-sm text-slate-900">QBayes AI Agent</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        <p className="text-slate-400 text-[10px] font-bold tracking-widest">REAL-TIME</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  <div className="flex gap-3">
                    <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none text-slate-700 text-sm font-medium shadow-sm">
                      Hello! I can help you automate your customer support. Shall we start?
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="bg-purple-700 text-white p-4 rounded-2xl rounded-tr-none text-sm font-medium shadow-lg shadow-purple-200">
                      Yes! How do you handle leads?
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none text-slate-700 text-sm font-medium shadow-sm leading-relaxed">
                      I capture lead details and send them instantly to <span className="text-purple-700 font-bold">info@qbayes.com</span> via secure SMTP.
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-slate-100">
                   <div className="w-full bg-slate-50 rounded-full px-6 py-3 text-slate-300 text-sm border border-slate-100">Type a message...</div>
                </div>
              </div>
            </div>

            {/* Features Info Grid */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Enterprise AI <br/>Tailored for Your Goals
              </h2>
              <p className="text-slate-500 text-lg mb-10 font-medium">
                Our chatbots aren't just buttons. They are trained on your business data to act as a primary member of your support and sales departments.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="group p-6 rounded-3xl border border-transparent hover:border-purple-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <div className="text-purple-600 mb-4 text-2xl group-hover:scale-110 transition-transform">{f.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2">{f.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <HireUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AIChatbot;