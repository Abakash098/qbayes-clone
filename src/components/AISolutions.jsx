import React, { useState } from 'react';
import { 
  FaCheckCircle, FaRobot, FaBrain, FaEye, FaComments, FaChartLine, FaCogs, FaArrowRight, FaTimes, FaPlay 
} from 'react-icons/fa';

const AISolutions = () => {
  const [selectedService, setSelectedService] = useState(null);

  const aiServices = [
    {
      id: 1,
      title: "Generative AI & LLMs",
      icon: FaBrain,
      short: "Custom Large Language Models for content creation and code generation.",
      fullDescription: "We build and fine-tune Large Language Models (LLMs) like GPT and LLaMA to suit your specific enterprise needs. From automating content generation to creating intelligent coding assistants.",
      features: ["Custom Model Fine-tuning", "Automated Content Creation", "Semantic Search", "Code Generation"]
    },
    {
      id: 2,
      title: "Computer Vision",
      icon: FaEye,
      short: "Image recognition and video analytics for automated inspection.",
      fullDescription: "Our Computer Vision systems can 'see' and interpret the world. We implement advanced object detection, facial recognition, and automated quality control systems.",
      features: ["Facial Recognition", "Object Detection", "Quality Control Automation", "Medical Image Analysis"]
    },
    {
      id: 3,
      title: "Conversational AI",
      icon: FaComments,
      short: "Intelligent chatbots and virtual assistants for 24/7 support.",
      fullDescription: "Move beyond simple scripts. Our NLP-driven chatbots understand context, sentiment, and intent, providing human-like customer support around the clock.",
      features: ["Sentiment Analysis", "Multilingual Support", "Context Awareness", "Voice Integration"]
    },
    {
      id: 4,
      title: "Predictive Analytics",
      icon: FaChartLine,
      short: "Data-driven forecasting to anticipate market trends and risks.",
      fullDescription: "Leverage historical data to predict future outcomes. Our machine learning models help you anticipate market shifts and manage financial risks.",
      features: ["Trend Forecasting", "Risk Management", "Demand Planning", "Customer Churn Prediction"]
    },
    {
      id: 5,
      title: "Robotic Process Automation",
      icon: FaRobot,
      short: "Automating repetitive workflows to reduce human error.",
      fullDescription: "Combine AI with RPA to automate complex, high-volume tasks. From invoice processing to data entry, our bots handle the grunt work.",
      features: ["Workflow Automation", "Invoice Processing", "Data Entry Bots", "HR Onboarding"]
    },
    {
      id: 6,
      title: "Custom AI Development",
      icon: FaCogs,
      short: "Tailored algorithms designed for unique business challenges.",
      fullDescription: "Off-the-shelf solutions don't fit everyone. We design bespoke algorithms and neural networks specifically architecture to solve your most unique problems.",
      features: ["Neural Network Design", "Algorithm Optimization", "Edge AI Implementation", "Hybrid Cloud AI"]
    }
  ];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden font-sans">
      
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#7e22ce 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- BRANDED HEADER SECTION (Matches Screenshot Request) --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-purple-700 font-bold text-sm mb-8 uppercase tracking-wider shadow-sm">
              🚀 Accelerating Digital Transformation
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
              Innovate with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
                Intelligence
              </span>
            </h2>
            
            {/* Clean branding text */}
            <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
              QBayes empowers enterprises with cutting-edge AI, seamless IT solutions, and data-driven strategies to build a future-proof business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
               <button className="bg-purple-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-purple-800 transition-all flex items-center justify-center gap-2">
                 Get Started <FaArrowRight size={14}/>
               </button>
               <button className="border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold flex items-center gap-3 justify-center hover:bg-slate-50 transition-all">
                 <div className="w-8 h-8 bg-purple-700 text-white rounded-full flex items-center justify-center text-xs"><FaPlay className="ml-0.5"/></div>
                 Watch Video
               </button>
            </div>
          </div>

          {/* Visual Dashboard Image */}
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-slate-50 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Analytics Dashboard" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <p className="text-white font-bold text-xl">Powered by QBayes Engine</p>
                 <p className="text-purple-300 text-sm">Neural Processing Unit Active</p>
              </div>
            </div>
            {/* Floating Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* --- GRID OF CAPABILITIES --- */}
        <div className="text-center mb-16">
           <h3 className="text-3xl font-black text-slate-900 tracking-tight">Explore Our AI Capabilities</h3>
           <p className="text-slate-500 mt-2 font-medium">Select a technology domain to view detailed frameworks</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service) => (
            <div 
              key={service.id} 
              onClick={() => setSelectedService(service)}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all cursor-pointer group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{service.short}</p>
              <div className="flex items-center text-purple-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                Read Details <FaArrowRight className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {selectedService && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-white/20">
            <div className="bg-gradient-to-r from-purple-900 to-slate-900 p-8 relative">
               <button onClick={() => setSelectedService(null)} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"><FaTimes size={24} /></button>
               <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-purple-400 border border-white/20 backdrop-blur-md">
                    <selectedService.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                    <p className="text-purple-300 text-xs font-bold uppercase tracking-widest">Enterprise Specification</p>
                  </div>
               </div>
            </div>
            <div className="p-10">
               <h4 className="text-slate-900 font-bold mb-4 text-lg tracking-tight">Overview</h4>
               <p className="text-slate-600 mb-8 leading-relaxed font-medium">{selectedService.fullDescription}</p>
               
               <h4 className="text-slate-900 font-bold mb-4 text-lg tracking-tight">Core Components</h4>
               <div className="grid grid-cols-2 gap-4 mb-10">
                 {selectedService.features.map((f, i) => (
                   <div key={i} className="flex items-center gap-3 text-sm bg-purple-50/50 p-4 rounded-xl text-purple-900 border border-purple-100 font-semibold transition-all hover:bg-purple-100">
                     <FaCheckCircle className="text-purple-600 flex-shrink-0" /> {f}
                   </div>
                 ))}
               </div>
               <button onClick={() => setSelectedService(null)} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-purple-700 shadow-xl shadow-purple-100 transition-all flex items-center justify-center gap-2">
                 Close Specification
               </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-in-out; }
      `}</style>
    </section>
  );
};

export default AISolutions;