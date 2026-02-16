import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AIDropdown = () => {
  // 1. FULL DATA ARRAY (Restored all 7 items)
  const menuItems = [
    {
      id: 1,
      label: "AI Services & Solutions",
      path: "/ai-services",
      title: "AI Services & Solutions",
      desc: "Transform your business with cutting-edge artificial intelligence solutions tailored to solve your unique operational challenges today.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      label: "AI Development",
      path: "/ai-development",
      title: "AI Development",
      desc: "Build powerful, custom AI applications that revolutionize workflows, automate processes, and unlock unprecedented growth for your business.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      label: "AI Consulting",
      path: "/ai-consulting",
      title: "AI Consulting",
      desc: "Expert guidance to navigate your AI journey, identify opportunities, and implement strategies that deliver measurable results.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      label: "AI Chatbot Development",
      path: "/ai-chatbot",
      title: "AI Chatbot Development",
      desc: "Create intelligent conversational assistants that engage customers 24/7, boost satisfaction, and dramatically reduce your support costs.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      label: "Generative AI Development",
      path: "/gen-ai-dev",
      title: "Generative AI Development",
      desc: "Harness creative AI to generate content, designs, and solutions that captivate audiences and accelerate your innovation pipeline.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      label: "AI Integration",
      path: "/ai-integration",
      title: "AI Integration",
      desc: "Seamlessly embed AI into your existing systems, amplifying capabilities while maintaining workflow continuity.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      label: "Generative AI Consulting",
      path: "/gen-ai-consulting",
      title: "Generative AI Consulting",
      desc: "Discover how generative AI can revolutionize your content creation, product development, and customer experiences with expert guidance.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const [activeItem, setActiveItem] = useState(menuItems[0]);

  return (
    // Added max-h (max height) and overflow-hidden to prevent layout breaking
    <div className="w-[900px] h-[500px] bg-white rounded-xl shadow-2xl flex border border-gray-100 overflow-hidden relative z-50">
      
      {/* LEFT SIDE: Menu List (Scrollable if too long) */}
      <div className="w-1/3 bg-gray-50 flex flex-col overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => (
          <Link 
            to={item.path}
            key={item.id}
            onMouseEnter={() => setActiveItem(item)}
            className={`
              cursor-pointer px-6 py-4 flex items-center justify-between transition-all duration-200 border-b border-gray-100
              ${activeItem.id === item.id 
                ? 'bg-white text-orange-500 border-l-4 border-l-orange-500 shadow-sm' 
                : 'text-gray-600 hover:text-orange-500 hover:bg-white border-l-4 border-l-transparent'}
            `}
          >
            <div className="flex items-center gap-3">
              <span className="text-[14px] font-medium">{item.label}</span>
            </div>
            
            {/* Arrow shows when active */}
            {activeItem.id === item.id && (
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            )}
          </Link>
        ))}
      </div>

      {/* RIGHT SIDE: Content Display */}
      <div className="w-2/3 p-8 bg-white flex flex-col justify-center relative">
        {/* Background Decorative Blob for "Advanced" feel */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 z-10">{activeItem.title}</h3>
        
        <Link to={activeItem.path} className="group overflow-hidden rounded-xl mb-6 shadow-md border border-gray-100 relative h-56 z-10">
          <img 
            src={activeItem.image} 
            alt={activeItem.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </Link>

        <p className="text-gray-600 text-[15px] leading-relaxed mb-6 z-10">
          {activeItem.desc}
        </p>

        <Link to={activeItem.path} className="inline-flex items-center text-orange-600 font-bold text-[14px] hover:underline gap-2 z-10">
          Explore Solution 
          <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </Link>
      </div>
    </div>
  );
};

export default AIDropdown;