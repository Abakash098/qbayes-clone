import React, { useState } from 'react';
import { FaCheckCircle, FaArrowRight, FaPlay } from 'react-icons/fa';
import HireUsModal from './HireUsModal'; // Verify this path is correct for your project!

const AIChatbot = () => {
  // 1. State to control the popup visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    { title: "24/7 Support", text: "Automate customer service around the clock." },
    { title: "Natural Language", text: "Understand customer intent accurately." },
    { title: "Multi-Platform", text: "Works on Web, WhatsApp, and Mobile." },
    { title: "Cost Reduction", text: "Reduce support team workload by 70%." }
  ];

  return (
    <div className="w-full bg-white animate-fadeIn font-sans relative">
      
      {/* --- BRANDED HERO OPENING --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-bold text-sm mb-10 uppercase tracking-wider shadow-sm">
              🚀 Accelerating Digital Transformation
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter">
              Innovate with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
                Intelligence
              </span>
            </h1>
            
            <p className="text-slate-500 text-xl mb-12 leading-relaxed font-medium max-w-xl">
              Engage your customers 24/7 with intelligent, human-like conversational agents built to scale your support operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
               {/* 2. Added onClick event here */}
               <button 
                 onClick={() => setIsModalOpen(true)} 
                 className="bg-purple-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-purple-200 hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group cursor-pointer"
               >
                 Build Your Chatbot <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
               </button>
               
               <button className="border-2 border-slate-100 text-slate-800 px-10 py-5 rounded-full font-bold text-lg flex items-center gap-4 justify-center hover:bg-slate-50 transition-all">
                 <div className="w-10 h-10 bg-purple-700 text-white rounded-full flex items-center justify-center">
                   <FaPlay className="ml-1 text-[10px]"/>
                 </div>
                 Watch Demo
               </button>
            </div>
          </div>

          {/* Right Image visual */}
          <div className="relative group">
            <div className="relative rounded-[3.5rem] overflow-hidden border-[12px] border-slate-50 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Chatbot Interaction" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 border-2 border-purple-100 rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-100">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-4xl font-black text-slate-900 mb-6">Why Choose Our Chatbots?</h2>
             <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
               Our AI chatbots go beyond simple scripts. They learn from interactions, integrate with your CRM, and provide personalized experiences that drive sales.
             </p>
             <div className="space-y-4">
               {features.map((f, i) => (
                 <div key={i} className="flex items-start gap-5 p-6 rounded-[2rem] border border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all bg-white group">
                   <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 font-bold shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                     <FaCheckCircle size={20}/>
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-lg">{f.title}</h4>
                     <p className="text-slate-400 text-sm font-medium">{f.text}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
          
          <div className="relative h-[600px] bg-slate-50 rounded-[3rem] overflow-hidden shadow-inner border border-slate-100 p-8">
             <div className="w-full h-full bg-white rounded-[2rem] shadow-2xl flex flex-col p-6">
                <div className="flex items-center gap-3 border-b border-slate-50 pb-4 mb-4">
                   <div className="w-10 h-10 rounded-full bg-purple-700"></div>
                   <div>
                      <p className="font-bold text-sm">QBayes Assistant</p>
                      <p className="text-green-500 text-[10px] font-bold">Online</p>
                   </div>
                </div>
                <div className="flex-1 space-y-4">
                   <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">Hello! How can I help you today?</div>
                   <div className="bg-purple-700 text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] ml-auto text-sm shadow-lg">I'd like to automate my customer support.</div>
                   <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm">Perfect! I can help you build a 24/7 intelligent support bot.</div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 flex gap-2">
                   <div className="flex-1 bg-slate-50 rounded-full h-10"></div>
                   <div className="w-10 h-10 bg-purple-700 rounded-full"></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 3. The Modal Component rendered securely at the bottom */}
      <HireUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default AIChatbot;