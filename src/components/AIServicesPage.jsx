import React, { useEffect, useState } from 'react';
import { 
  FaRobot, FaBrain, FaChartLine, FaCheckCircle, 
  FaArrowRight, FaIndustry, FaHospital, FaShoppingCart, FaLandmark,
  FaChevronDown, FaChevronUp, FaNetworkWired, FaLock, FaMicrochip, FaDatabase, FaServer
} from 'react-icons/fa';

import AISolutions from './AISolutions'; 
import Clients from './Clients';       
import Stats from './Stats';           
import Testimonials from './Testimonials'; 

const AIServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);

  const techStack = [
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "AWS AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
  ];

  const processSteps = [
    { title: 'Discovery & ROI Mapping', desc: 'We identify high-impact AI use cases by analyzing your operational bottlenecks and data availability.' },
    { title: 'Data Engineering', desc: 'Secure aggregation and cleaning of structured/unstructured data for reliable model training.' },
    { title: 'Neural Architecture', desc: 'Building custom neural networks and fine-tuning LLMs specifically for your domain language.' },
    { title: 'Integration & MLOps', desc: 'Seamless API deployment with continuous monitoring to prevent model drift over time.' },
  ];

  const industries = [
    { icon: FaHospital, name: 'Healthcare', desc: 'Medical imaging AI, patient risk stratification, and automated clinical documentation.' },
    { icon: FaLandmark, name: 'FinTech', desc: 'Real-time fraud prevention, algorithmic credit scoring, and automated compliance.' },
    { icon: FaShoppingCart, name: 'E-commerce', desc: 'Hyper-personalized search engines, churn prediction, and dynamic pricing models.' },
    { icon: FaIndustry, name: 'Logistics', desc: 'Route optimization, predictive fleet maintenance, and warehouse automation.' },
  ];

  const faqs = [
    { q: "How do you handle IP ownership of the AI models?", a: "Once the project is complete, you retain full ownership of the custom models and trained weights developed specifically for your business." },
    { q: "Can the AI work with our sensitive on-premise data?", a: "Absolutely. We offer air-gapped deployment options where the AI operates entirely within your private infrastructure without external internet access." },
    { q: "How do you mitigate AI hallucinations or errors?", a: "We implement RAG (Retrieval-Augmented Generation) and strict validation layers to ensure the AI only provides answers based on your verified data source." },
    { q: "What is the typical ROI timeline?", a: "Most clients see operational efficiency gains within 3 months, with full investment recovery typically occurring between 8-14 months post-deployment." }
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative bg-[#0B0F1A] text-white pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-indigo-600/10 rounded-full blur-[140px]"></div>
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"></div>
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-8">
                <FaMicrochip className="animate-pulse" />
                Enterprise-Grade Artificial Intelligence
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1] tracking-tighter">
                Scale Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                  Cognitive Edge
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-400 mb-12 leading-relaxed max-w-xl font-medium">
                We design, build, and deploy custom AI architectures that turn complex data into decisive competitive advantages.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <button className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-indigo-600/20 flex items-center justify-center gap-3 group">
                  Build Your Solution 
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0B0F1A] bg-slate-800 flex items-center justify-center text-[10px] font-bold">AI</div>
                    ))}
                    <div className="pl-6 flex flex-col justify-center">
                        <span className="text-white font-bold text-sm leading-none">500+</span>
                        <span className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Models Deployed</span>
                    </div>
                </div>
              </div>
            </div>

            {/* Tech Visual Element */}
            <div className="relative group perspective-1000 hidden lg:block">
               <div className="relative bg-gradient-to-br from-indigo-500/10 to-transparent p-1 rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden">
                  <div className="bg-[#0B0F1A]/80 backdrop-blur-xl rounded-[2.8rem] p-10">
                     <div className="flex justify-between items-center mb-10">
                        <FaBrain className="text-indigo-400 text-5xl" />
                        <div className="text-right">
                           <p className="text-indigo-400 font-bold text-xs uppercase tracking-widest">System Status</p>
                           <p className="text-green-400 font-black">OPTIMIZED</p>
                        </div>
                     </div>
                     <div className="space-y-6">
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                           <div className="h-full w-[85%] bg-indigo-500 animate-pulse"></div>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                           <div className="h-full w-[60%] bg-cyan-400 animate-pulse delay-75"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-10">
                           <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                              <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Processing</p>
                              <p className="text-xl font-bold">1.2 TB/s</p>
                           </div>
                           <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                              <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">Latency</p>
                              <p className="text-xl font-bold">14ms</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. TECH STACK STRIP --- */}
      <div className="py-12 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Powering Innovation with State-of-the-Art Tech</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-40">
            {techStack.map(tech => (
              <img key={tech.name} src={tech.icon} alt={tech.name} className="h-8 md:h-10" />
            ))}
          </div>
        </div>
      </div>

      {/* --- 3. SOLUTIONS COMPONENT --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              AI Built to <span className="text-indigo-600">Solve.</span>
            </h2>
            <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg font-medium">
              We move beyond the hype to deliver practical, enterprise-grade AI that integrates into your current tech stack.
            </p>
          </div>
          <AISolutions />
        </div>
      </section>

      {/* --- 4. METHODOLOGY --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
            <h2 className="text-4xl font-black leading-tight tracking-tight">
              A Structured Path <br/>
              to <span className="text-indigo-400">AI Intelligence</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              Implementing AI requires more than just code. We follow a rigorous 4-step deployment framework to ensure data integrity and measurable ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="text-7xl font-black text-white/5 absolute -top-8 -left-2 transition-all group-hover:text-indigo-500/10">0{index + 1}</div>
                <div className="relative pt-6">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{step.title}</h3>
                  <div className="w-12 h-1 bg-indigo-600 mb-6 group-hover:w-full transition-all duration-500"></div>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-indigo-900">
        <Stats />
      </div>

      {/* --- 5. INDUSTRIES --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Domain Expertise</h2>
            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, index) => (
              <div key={index} className="p-10 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <ind.icon className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{ind.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* --- 6. FAQ --- */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12">Deployment FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50/50 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)} 
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  <div className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`}>
                    <FaChevronDown />
                  </div>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium border-t border-slate-200/50 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AIServicesPage;