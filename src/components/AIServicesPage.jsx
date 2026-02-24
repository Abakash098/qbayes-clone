import React, { useEffect, useState } from 'react';
import { 
  FaRobot, FaBrain, FaChartLine, FaCogs, FaCheckCircle, 
  FaArrowRight, FaIndustry, FaHospital, FaShoppingCart, FaLandmark,
  FaChevronDown, FaChevronUp
} from 'react-icons/fa';

import AISolutions from './AISolutions'; 
import ContactSection from './ContactSection';
import Clients from './Clients';       
import Stats from './Stats';           
import Testimonials from './Testimonials'; 

const AIServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);

  // --- Data for New Sections ---
  const processSteps = [
    { title: 'Discovery & Strategy', desc: 'We analyze your business needs and identify the highest-ROI AI opportunities.' },
    { title: 'Data Preparation', desc: 'Gathering, cleaning, and structuring your data to train accurate machine learning models.' },
    { title: 'Model Development', desc: 'Building and fine-tuning custom AI models using state-of-the-art algorithms.' },
    { title: 'Deployment & Scaling', desc: 'Integrating the AI seamlessly into your existing infrastructure and scaling for production.' },
  ];

  const industries = [
    { icon: FaHospital, name: 'Healthcare', desc: 'Predictive diagnostics and patient data analysis.' },
    { icon: FaLandmark, name: 'Finance', desc: 'Fraud detection, algorithmic trading, and risk assessment.' },
    { icon: FaShoppingCart, name: 'Retail & E-commerce', desc: 'Personalized recommendations and inventory forecasting.' },
    { icon: FaIndustry, name: 'Manufacturing', desc: 'Predictive maintenance and supply chain optimization.' },
  ];

  const faqs = [
    { q: "How long does it take to implement an AI solution?", a: "Timelines vary based on complexity and data readiness. A proof-of-concept can take 4-6 weeks, while enterprise deployment may take 3-6 months." },
    { q: "Do we need a massive amount of data to use AI?", a: "Not always. While deep learning requires large datasets, many machine learning models and fine-tuned LLMs can provide immense value with smaller, high-quality datasets." },
    { q: "How do you ensure data security and privacy?", a: "We adhere strictly to data protection regulations (like GDPR and HIPAA). We use encrypted pipelines and can deploy models on-premise or in your private cloud to ensure your data never leaves your control." },
    { q: "Can AI integrate with our existing legacy systems?", a: "Yes. We build custom APIs and middleware to ensure our AI solutions communicate seamlessly with your current software ecosystem." }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="pt-[90px] font-sans bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-300 font-semibold text-sm mb-6">
            <FaRobot /> Next-Generation AI Services
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Transform Your Enterprise with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Intelligent AI Solutions</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed">
            QBayes empowers businesses to automate workflows, uncover deep data insights, and build predictive models that drive measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold transition-all shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2">
              Discuss Your Project <FaArrowRight />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-500 hover:border-white text-white rounded-full font-bold transition-all">
              Explore Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF (Moved up to build immediate trust) */}
      <div className="border-b border-slate-100">
        <Clients />
      </div>

      {/* 3. CORE AI SOLUTIONS (Your existing component) */}
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Our Comprehensive <span className="text-purple-600">AI Capabilities</span></h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">From natural language processing to advanced computer vision, we build the tools you need to stay ahead of the curve.</p>
        </div>
        <AISolutions />
      </div>

      {/* 4. OUR PROCESS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">How We Build <span className="text-orange-500">Intelligent Systems</span></h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Our structured implementation methodology ensures risk-free deployment and maximum return on investment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-purple-100 -z-0 transform -translate-y-1/2"></div>
            
            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-md">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STATS (Your existing component) */}
      <div className="bg-purple-900 py-16 text-white">
        <Stats />
      </div>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">AI Built for <span className="text-purple-600">Your Industry</span></h2>
              <p className="text-slate-500 mt-4">We don't believe in one-size-fits-all. Our AI models are customized to solve the specific bottlenecks and challenges of your sector.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-50 hover:bg-purple-600 transition-colors duration-300 cursor-pointer border border-slate-100">
                <ind.icon className="text-4xl text-orange-500 group-hover:text-white mb-6 transition-colors" />
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">{ind.name}</h3>
                <p className="text-slate-500 text-sm group-hover:text-purple-100 transition-colors">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (Your existing component) */}
      <div className="bg-slate-50 py-16">
        <Testimonials />
      </div>

      {/* 8. FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Frequently Asked <span className="text-orange-500">Questions</span></h2>
            <p className="text-slate-500 mt-4">Everything you need to know about partnering with QBayes for your AI initiatives.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => toggleFaq(index)} 
                  className="w-full flex justify-between items-center p-6 bg-white hover:bg-slate-50 text-left"
                >
                  <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
                  {activeFaq === index ? <FaChevronUp className="text-purple-600 flex-shrink-0" /> : <FaChevronDown className="text-slate-400 flex-shrink-0" />}
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GLOBAL FOOTER / CONTACT (Your existing component) */}
      <ContactSection />
      
    </div>
  );
};

export default AIServicesPage;