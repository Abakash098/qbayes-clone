import React, { useEffect } from 'react';

const RFIDInventorySystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] text-white pt-[120px] pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Technical Diagram */}
        <div className="relative group" data-aos="fade-right">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#112240] rounded-2xl overflow-hidden border border-slate-700 p-8">
            <img 
              src="/rfid-inventory.png" 
              alt="RFID Inventory Management Workflow" 
              className="w-full h-auto object-contain rounded-lg"
            />
            <div className="absolute top-6 right-6 bg-emerald-500/80 text-white text-xs px-3 py-1 rounded-full font-bold tracking-widest">
              AUTOMATED CONTROL
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8" data-aos="fade-left">
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-widest uppercase">
            Product 09
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              RFID-Based <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Inventory Management</span>
            </h1>
            <p className="text-xl text-gray-300">
              Eliminate manual errors and achieve 100% stock visibility with automated tracking.
            </p>
          </div>

          <div className="space-y-6">
            <InventoryFeature 
              title="Automated Asset Tracking" 
              desc="Simultaneously scan multiple items using high-frequency RFID tags, instantly updating stock counts without line-of-sight requirements." 
            />
            <InventoryFeature 
              title="Real-Time Warehouse Visibility" 
              desc="Streamline warehouse operations with a live view of inventory levels, locations, and movement history." 
            />
            <InventoryFeature 
              title="Reporting & Analytics" 
              desc="Centralized dashboard access with an integrated reporting module to identify stock trends and optimize reorder points." 
            />
          </div>

          <div className="pt-6">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-emerald-500/20">
              Get Technical Sheet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InventoryFeature = ({ title, desc }) => (
  <div className="flex gap-4 group">
    <div className="flex-shrink-0 w-1 bg-gradient-to-b from-emerald-500 to-transparent rounded-full h-8 group-hover:h-full transition-all"></div>
    <div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

export default RFIDInventorySystem;