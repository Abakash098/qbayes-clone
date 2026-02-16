import React from 'react';
import { 
  FaWordpress, FaReact, FaAngular, FaNodeJs, FaShopify, FaPython, FaPhp, FaLaravel, FaSquarespace, FaMagento, FaHubspot 
} from 'react-icons/fa';
import { SiWoo, SiWebflow, SiFlutter, SiKotlin, SiGo } from 'react-icons/si';

const Technologies = () => {
  const techs = [
    { icon: FaWordpress, name: "WordPress", color: "text-blue-600" },
    { icon: FaReact, name: "React", color: "text-cyan-400" },
    { icon: FaAngular, name: "Angular", color: "text-red-600" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
    { icon: SiWoo, name: "WooCommerce", color: "text-purple-600" },
    { icon: SiWebflow, name: "Webflow", color: "text-blue-500" },
    { icon: FaShopify, name: "Shopify", color: "text-green-500" },
    { icon: FaReact, name: "React Native", color: "text-cyan-500" },
    { icon: FaPhp, name: "PHP", color: "text-indigo-600" },
    { icon: FaSquarespace, name: "Squarespace", color: "text-black" },
    { icon: FaPython, name: "Python", color: "text-yellow-500" },
    { icon: FaMagento, name: "Magento", color: "text-orange-600" },
    { icon: SiGo, name: "GoHighLevel", color: "text-blue-400" }, 
    { icon: FaHubspot, name: "HubSpot", color: "text-orange-500" },
    { icon: FaLaravel, name: "Laravel", color: "text-red-500" },
    { icon: SiFlutter, name: "Flutter", color: "text-cyan-400" }
  ];

  return (
    <section className="py-24 bg-white font-sans relative overflow-hidden">
      
      {/* Background Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Header */}
        <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">TECHNOLOGY</h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16">
          Our Tech <span className="text-[#00c2ff]">Capabilities</span>
        </h2>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-10 justify-items-center">
          {techs.map((tech, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center gap-4 transition-transform hover:-translate-y-2 duration-300 cursor-pointer"
            >
              {/* Icon Circle */}
              <div className="w-24 h-24 bg-white rounded-full shadow-lg shadow-gray-200 flex items-center justify-center text-4xl border border-gray-100 group-hover:shadow-xl group-hover:border-blue-100 transition-all">
                <tech.icon className={`${tech.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              
              {/* Name */}
              <span className="font-bold text-gray-700 text-sm group-hover:text-blue-600 transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;