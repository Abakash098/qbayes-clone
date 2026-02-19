import React from 'react';
import { FaGamepad, FaArrowRight, FaDesktop, FaMobileAlt, FaCube, FaVrCardboard } from 'react-icons/fa';

const GameDevelopment = () => {
  const games = [
    { title: "PC & Console Games", desc: "High-fidelity graphics and complex mechanics built on Unreal Engine and Unity for hardcore gamers.", icon: FaDesktop },
    { title: "Mobile Gaming", desc: "Addictive, hyper-casual, and competitive multiplayer games optimized for iOS and Android devices.", icon: FaMobileAlt },
    { title: "AR & VR Experiences", desc: "Immersive virtual reality and augmented reality environments that push the boundaries of digital interaction.", icon: FaVrCardboard },
    { title: "3D Asset Creation", desc: "Stunning environment design, character modeling, and animation by our expert art team.", icon: FaCube }
  ];

  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      {/* Hero Section */}
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b7738?auto=format&fit=crop&q=80&w=1600" alt="Game Development" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%] lg:w-1/2">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
            Immersive <span className="text-orange-500">Game Design</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
            Whether you're aiming to build the next competitive 5v5 tactical shooter with high-tick-rate servers, or a massive open-world RPG, our engineers craft lag-free multiplayer experiences and stunning visual worlds.
          </p>
          <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit">
            Start Developing <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Gaming <span className="text-[#00c2ff]">Capabilities</span></h2>
          <p className="text-slate-500 font-medium text-lg max-w-3xl mx-auto">From concept art to final deployment, we provide full-cycle game development services.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] border border-blue-100 bg-blue-50/20 hover:bg-[#020b2d] hover:text-white transition-all duration-500 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 text-[#00c2ff] shadow-sm group-hover:scale-110 transition-transform">
                <game.icon size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">{game.title}</h4>
              <p className="text-sm leading-relaxed text-slate-500 group-hover:text-gray-300">{game.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDevelopment;