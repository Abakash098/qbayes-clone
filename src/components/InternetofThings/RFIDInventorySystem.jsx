import React from 'react';
import { 
  FaTags, FaBarcode, FaHistory, FaCloud, FaWarehouse,
  FaCheckCircle, FaArrowRight, FaChartLine, FaBoxOpen 
} from 'react-icons/fa';

const RFIDInventorySystem = () => {

  const features = [
    {
      icon: FaTags,
      title: "Automated Asset Tracking",
      description: "Utilizes high-frequency RFID tags to simultaneously scan hundreds of items without requiring line-of-sight, ensuring 100% stock visibility."
    },
    {
      icon: FaBarcode,
      title: "Bulk Scan Capabilities",
      description: "Drastically reduces audit times by performing rapid bulk scans of entire pallets or shelves in seconds using handheld or fixed portal readers."
    },
    {
      icon: FaHistory,
      title: "Real-Time Movement Logs",
      description: "Maintains an immutable digital audit trail of every item's journey through the warehouse, from receiving to final dispatch."
    },
    {
      icon: FaCloud,
      title: "Centralized Data Sync",
      description: "Seamlessly integrates with existing ERP and WMS systems via secure cloud APIs to provide real-time inventory updates across all locations."
    }
  ];

  const techSpecs = [
    "High-Performance UHF Handheld and Fixed Portal Readers",
    "Support for both Passive and Active RFID Tag protocols",
    "Anti-collision algorithms for high-density scanning environments",
    "Encrypted data transmission (AES-256) for secure logging",
    "Ruggedized, IP65-rated hardware for industrial warehouse use",
    "Integrated reporting module with automated reorder point alerts"
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Supply Chain & Logistics IoT
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                RFID-Based <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  Inventory Control
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                Eliminate manual errors and achieve absolute stock visibility. Our automated RFID ecosystem streamlines warehouse operations and optimizes asset management in real-time.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <FaWarehouse className="text-emerald-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">100%</h4>
                    <p className="text-sm text-slate-500 font-medium">Stock Visibility</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <FaBoxOpen className="text-emerald-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Real-Time</h4>
                    <p className="text-sm text-slate-500 font-medium">Automated Control</p>
                  </div>
                </div>
              </div>

              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-3 group">
                Request Hardware Demo
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-200/40 to-emerald-100/40 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                  <img 
                    src="/rfid-inventory.png" 
                    alt="RFID Inventory Management Workflow" 
                    className="rounded-xl w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" }}
                  />
                  
                  {/* Floating Tech Tag */}
                  <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <FaTags className="text-emerald-500 text-xl" />
                    <div>
                      <p className="text-slate-900 font-bold leading-none">RFID Integration</p>
                      <p className="text-slate-500 text-xs mt-1">Smart Warehouse Ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 2. CORE CAPABILITIES GRID --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Optimized Asset Intelligence</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Replacing manual cycle counting with a continuous, automated stream of accurate inventory data to eliminate stockouts and surplus.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <feature.icon className="text-emerald-600 text-2xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. TECH SPECS & ROI SECTION --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[150px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Tech Specs */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Technical Specifications</h2>
              <p className="text-slate-400 mb-10 text-lg">Built with high-sensitivity RFID hardware designed for long-range detection and reliable performance in dense warehouse environments.</p>
              
              <ul className="space-y-4">
                {techSpecs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
                    <FaCheckCircle className="text-teal-400 flex-shrink-0 text-lg" />
                    <span className="text-slate-200 font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Value / ROI */}
            <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FaChartLine className="text-emerald-600" /> Operational ROI
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Reduce Labor Costs</h4>
                  <p className="text-slate-600 text-sm">Eliminates the thousands of man-hours spent on manual barcode scanning and inventory audits every year.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Achieve 99.9% Accuracy</h4>
                  <p className="text-slate-600 text-sm">Remove the human error associated with manual counting, ensuring your digital records perfectly match your physical stock.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Accelerate Fulfillment</h4>
                  <p className="text-slate-600 text-sm">Instantly locate misplaced items and verify shipping manifests with zero-contact scanning to improve delivery speed.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default RFIDInventorySystem;