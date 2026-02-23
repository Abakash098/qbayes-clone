import React, { useState } from 'react'; // Added useState
import { FaBrain, FaArrowRight, FaDatabase, FaCogs, FaProjectDiagram, FaServer } from 'react-icons/fa';
import HireUsModal from './HireUsModal'; // Ensure this path points to your modal file

const LLMDevelopment = () => {
  // 1. State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { title: "Custom LLM Fine-Tuning", desc: "We train open-source models (like Llama 3 or Mistral) on your proprietary company data so the AI understands your specific industry jargon and business logic.", icon: FaCogs },
    { title: "RAG Architecture (Retrieval-Augmented Generation)", desc: "Eliminate AI hallucinations. We build systems that allow LLMs to securely search through your live databases and documents before answering.", icon: FaDatabase },
    { title: "Prompt Engineering & Evaluation", desc: "Optimize how your applications communicate with language models to ensure highly accurate, cost-effective, and contextual responses.", icon: FaProjectDiagram },
    { title: "Enterprise LLM Deployment", desc: "Securely host and deploy your custom AI models on private cloud infrastructure (AWS/GCP/Azure) to ensure your data never leaks.", icon: FaServer }
  ];

  return (
    <div className="w-full bg-white font-sans animate-fadeIn relative">
      {/* Hero Section */}
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600" alt="AI Neural Network" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%] lg:w-1/2">
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 font-bold text-sm mb-6 w-fit backdrop-blur-md">
            Next-Gen Language Models
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">LLM Solutions</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
            Harness the reasoning power of Large Language Models. We build, fine-tune, and deploy intelligent AI systems that understand, generate, and process human language at an enterprise scale.
          </p>
          
          {/* 2. Added onClick event to trigger the modal */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit shadow-lg shadow-purple-500/30 cursor-pointer"
          >
            Talk to an AI Engineer <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Capabilities Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our LLM <span className="text-purple-600">Capabilities</span></h2>
          <p className="text-slate-500 font-medium text-lg max-w-3xl mx-auto">From foundational model selection to secure private deployment, we engineer AI systems tailored to your workflows.</p>
        </div>
        
        {/* Visualizing LLM logic for the user */}
        
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-purple-50 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-6">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <srv.icon size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{srv.title}</h4>
                <p className="text-sm leading-relaxed text-slate-500">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The Modal Component rendered at the bottom */}
      <HireUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default LLMDevelopment;