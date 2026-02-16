import React from 'react';

const Locations = () => {
  return (
    <div className="relative w-full bg-[#0b1c38] text-white py-24 border-y border-white/10 overflow-hidden">
      
      {/* Background World Map Pattern (Subtle) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'invert(1)'
        }}
      ></div>

      <div className="relative max-w-[1300px] mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* --- VISUAL MAP REPRESENTATION --- */}
<div className="w-full md:w-1/2 flex justify-center">
  <div className="relative w-full max-w-md aspect-video bg-[#112d5a] rounded-3xl border border-white/10 shadow-2xl p-4 overflow-hidden group">
    
    {/* Background Map Image */}
    <img 
      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
      alt="Kolkata Location Map" 
      className="w-full h-full object-cover rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
    />
    
    {/* FIXED PIN FOR KOLKATA, INDIA */}
    {/* Adjusting top and left to move the pin from Europe to India */}
    <div className="absolute top-[62%] left-[72%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
      <span className="relative flex h-6 w-6">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-6 w-6 bg-orange-500 border-2 border-white"></span>
      </span>
      <div className="mt-2 bg-white text-[#0b1c38] text-[10px] font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
        HQ Kolkata
      </div>
    </div>

  </div>
</div>

        {/* 2. Address Details */}
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h3 className="text-4xl font-bold mb-2">QBayes India</h3>
            <div className="h-1 w-32 bg-orange-500 rounded-full"></div>
          </div>

          <div className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div>
              <h4 className="font-bold text-[#4a90e2] mb-3 uppercase text-xs tracking-widest">Address</h4>
              <p className="text-lg text-gray-300">
                Jadavpur University Campus, Gate No. 3,<br/> 
                188, Raja S.C. Mallick Road,<br/>
                <span className="text-white">Kolkata - 700032, West Bengal, India</span>
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <p className="text-white font-bold flex gap-4"><span>📞</span> +91 9038389108</p>
              <p className="text-white font-bold flex gap-4"><span>✉️</span> connect2qbayes@gmail.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// CRITICAL: Ensure this export line is present!
export default Locations;