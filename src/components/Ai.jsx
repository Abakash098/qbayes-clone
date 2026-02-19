import React from 'react';
import { FaTrain, FaUniversity, FaCar, FaMotorcycle, FaGolfBall, FaLeaf, FaBuilding, FaShoppingBag } from 'react-icons/fa';

const Clients = () => {
  const clients = [
    { name: "Merlin Group", type: "text", color: "text-blue-600", icon: <FaBuilding /> },
    { name: "Ganesh Grains", type: "text", color: "text-green-600", icon: <FaLeaf /> },
    { name: "Indian Railways", type: "img", src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Indian_Railways_logo.svg/1200px-Indian_Railways_logo.svg.png" },
    { name: "KareIn", type: "text", color: "text-gray-800", icon: <FaBuilding /> },
    { name: "Narayana Group", type: "img", src: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Narayana_Health_logo.svg/1200px-Narayana_Health_logo.svg.png" },
    { name: "FGEAR", type: "text", color: "text-blue-500 font-black italic", textOnly: true },
    { name: "Mercedes-Benz", type: "img", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1024px-Mercedes-Logo.svg.png" },
    { name: "Yamaha", type: "img", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Yamaha_Motor_Logo_%28full%29.svg/2560px-Yamaha_Motor_Logo_%28full%29.svg.png" },
    { name: "AGARO", type: "text", color: "text-black font-bold tracking-widest", textOnly: true },
    { name: "Cot & Candy", type: "text", color: "text-pink-500 font-serif", textOnly: true },
    { name: "Dhanwantari", type: "img", src: "https://dhanwantari.com/assets/img/logo.png" }, // Using generic or text if this breaks, but trying real first
    { name: "USGA", type: "img", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/USGA_logo.svg/1200px-USGA_logo.svg.png" },
  ];

  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Clients We Have <span className="text-[#4a90e2]">Worked With</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Driving Digital Transformation for Global Leaders
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="h-32 bg-[#f3f7fa] rounded-xl flex items-center justify-center p-6 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-gray-100"
            >
              {client.type === 'img' ? (
                <img 
                  src={client.src} 
                  alt={client.name} 
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hide broken image
                    e.target.nextSibling.style.display = 'block'; // Show text fallback
                  }}
                />
              ) : (
                <div className={`flex items-center gap-2 text-xl md:text-2xl ${client.color} opacity-70 group-hover:opacity-100 transition-all`}>
                  {!client.textOnly && client.icon}
                  <span className={client.textOnly ? "" : "font-bold"}>{client.name}</span>
                </div>
              )}
              {/* Fallback Text (Hidden by default) */}
              <span className="hidden text-gray-400 font-bold">{client.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Clients;