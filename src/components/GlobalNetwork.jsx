import React from 'react';

const GlobalNetwork = () => {
  const developmentCenters = ["Bengaluru", "Delhi", "Kolkata", "Mumbai"];
  const internationalOffices = [
    { country: "USA", cities: ["California", "Florida", "Delaware"] },
    { country: "UK", cities: ["Manchester", "London"] }
  ];

  // Specific map coordinates for the blinking dots
  const markers = [
    { name: "USA West", top: "45%", left: "12%" },
    { name: "USA East", top: "48%", left: "24%" },
    { name: "United Kingdom", top: "32%", left: "47%" },
    { name: "India Centers", top: "54%", left: "71%" },
  ];

  return (
    <section className="w-full py-24 bg-[#f8f9fa]">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-3">
            LOCATION
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Webskitters <span className="text-[#4a90e2]">Global Presence</span>
          </h2>
        </div>

        {/* The World Map Card */}
        <div className="bg-gradient-to-br from-[#0b1c38] to-[#1a3a6d] rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          
          {/* Floating Award Badge */}
          <div className="absolute top-10 left-10 w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-b from-red-600 to-blue-900 p-1 flex items-center justify-center text-center shadow-2xl border-4 border-white/20 z-30">
             <div className="text-[10px] md:text-xs font-bold leading-tight uppercase">
               Allica Bank <br /> Great British <br /> Entrepreneur <br />
               <span className="text-sm md:text-xl text-white block my-1">Awards</span>
               <span className="opacity-60 text-[8px]">Finalist 2025</span>
             </div>
          </div>

          {/* Map & Blinking Markers */}
          <div className="relative w-full h-[350px] md:h-[550px] mb-16 flex items-center justify-center">
            <img 
              src="https://www.transparentpng.com/download/world-map/uon3Y9-world-map-image.png" 
              alt="World Map Silhouette" 
              className="w-full h-full object-contain opacity-25 filter brightness-150 contrast-125"
            />
            
            {markers.map((marker, index) => (
              <div 
                key={index} 
                className="absolute flex items-center justify-center" 
                style={{ top: marker.top, left: marker.left }}
              >
                {/* Triple-layer pulse effect */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-8 h-8 bg-white rounded-full animate-ping opacity-20"></div>
                  <div className="absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
                  <div className="relative w-3 h-3 bg-white rounded-full border-2 border-blue-500 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Location Detail Grid */}
          <div className="grid md:grid-cols-2 gap-12 relative z-10 border-t border-white/10 pt-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                Development Centers
              </h3>
              <div className="flex flex-wrap gap-4">
                <span className="text-[#4a90e2] font-bold text-lg">India •</span>
                {developmentCenters.map(city => (
                  <button key={city} className="bg-white/5 hover:bg-white hover:text-[#0b1c38] px-6 py-2 rounded-full text-sm font-bold transition-all border border-white/10">
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#4a90e2] rounded-full"></span>
                International Offices
              </h3>
              <div className="space-y-6">
                {internationalOffices.map(group => (
                  <div key={group.country} className="flex flex-wrap gap-4 items-center">
                    <span className="text-[#4a90e2] font-bold w-14">{group.country} •</span>
                    {group.cities.map(city => (
                      <button key={city} className="bg-white/5 hover:bg-white hover:text-[#0b1c38] px-6 py-2 rounded-full text-sm font-bold transition-all border border-white/10">
                        {city}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;