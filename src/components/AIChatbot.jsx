import React from 'react';

const AIChatbot = () => {
  const pageTitle = "AI Chatbot Development";
  const pageDesc = "Engage your customers 24/7 with intelligent, human-like conversational agents.";
  const features = [
    { title: "24/7 Support", text: "Automate customer service around the clock." },
    { title: "Natural Language", text: "Understand customer intent accurately." },
    { title: "Multi-Platform", text: "Works on Web, WhatsApp, and Mobile." },
    { title: "Cost Reduction", text: "Reduce support team workload by 70%." }
  ];

  return (
    <div className="w-full bg-white animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-black py-24 px-6 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-80"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{pageTitle}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">{pageDesc}</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-lg shadow-orange-500/30">
            Build Your Chatbot
          </button>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div>
             <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Chatbots?</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">
               Our AI chatbots go beyond simple scripts. They learn from interactions, integrate with your CRM, and provide personalized experiences that drive sales.
             </p>
             <div className="grid grid-cols-1 gap-6">
               {features.map((f, i) => (
                 <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                   <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold shrink-0">✓</div>
                   <div>
                     <h4 className="font-bold text-gray-900">{f.title}</h4>
                     <p className="text-sm text-gray-500">{f.text}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="h-[500px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="AI Chatbot" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIChatbot; 
