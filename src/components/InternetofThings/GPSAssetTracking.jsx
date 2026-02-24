import React, { useEffect } from 'react';
import { 
  FaSatellite, FaMapMarkedAlt, FaHistory, FaCloudUploadAlt, 
  FaGlobeAmericas, FaRoute, FaChartLine, FaCheckCircle, FaArrowRight 
} from 'react-icons/fa';

const GPSAssetTracking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: FaMapMarkedAlt,
      title: "Live Location Updates",
      description: "Monitor your high-value assets in real-time with pinpoint GPS accuracy, delivered directly to your centralized dashboard."
    },
    {
      icon: FaHistory,
      title: "Detailed Movement History",
      description: "Access comprehensive logs of past routes, transit speeds, and stop durations to enable precise logistical auditing."
    },
    {
      icon: FaSatellite,
      title: "Multi-Satellite Support",
      description: "Utilizes Galileo, IRNSS, and GLONASS networks concurrently to ensure unbreakable connections even in remote regions."
    },
    {
      icon: FaCloudUploadAlt,
      title: "Encrypted Cloud Sync",
      description: "Seamlessly and securely transmits telemetry data from tracking hardware to isolated servers for instant multi-device access."
    }
  ];

  const techSpecs = [
    "Multi-Constellation GNSS Receiver (GPS, GLONASS, Galileo)",
    "LTE-M / NB-IoT Cellular fallback modules",
    "Military-grade AES-256 data encryption protocols",
    "Extended high-capacity battery life (up to 5 years)",
    "IP67 Ruggedized, dust and water-resistant casing",
    "Automated Geofencing with instant breach alerts"
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Global Logistics IoT
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Global GPS <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                  Asset Tracking
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                Achieve complete operational visibility. Manage, secure, and monitor the movement of high-value items across geographies with our precision tracking ecosystem.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-indigo-100 flex items-center justify-center flex-shrink-0">
                    <FaGlobeAmericas className="text-indigo-600 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Global</h4>
                    <p className="text-sm text-slate-500 font-medium">Satellite coverage</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-indigo-100 flex items-center justify-center flex-shrink-0">
                    <FaRoute className="text-indigo-600 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Real-Time</h4>
                    <p className="text-sm text-slate-500 font-medium">Location updates</p>
                  </div>
                </div>
              </div>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-3 group">
                Request Hardware Demo
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-200/40 to-indigo-100/40 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                  <img 
                    src="/gps-tracking.png" 
                    alt="GPS Asset Tracking System" 
                    className="rounded-xl w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1586071473132-5a41d9990b4c?auto=format&fit=crop&q=80&w=800" }}
                  />
                  
                  {/* Floating Tech Tag */}
                  <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <FaSatellite className="text-indigo-600 text-xl" />
                    <div>
                      <p className="text-slate-900 font-bold leading-none">Live Tracking</p>
                      <p className="text-slate-500 text-xs mt-1">Active connection</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Logistical Intelligence</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Replacing guesswork with absolute certainty. Know exactly where your assets are, at all times, anywhere in the world.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                  <feature.icon className="text-indigo-600 text-2xl group-hover:text-white transition-colors duration-300" />
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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[150px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Tech Specs */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Hardware & Software Specifications</h2>
              <p className="text-slate-400 mb-10 text-lg">Industrial-grade trackers designed for "deploy and forget" longevity, communicating securely through military-grade encryption.</p>
              
              <ul className="space-y-4">
                {techSpecs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
                    <FaCheckCircle className="text-blue-400 flex-shrink-0 text-lg" />
                    <span className="text-slate-200 font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Value / ROI */}
            <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FaChartLine className="text-indigo-600" /> Business Value
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Prevent Theft & Loss</h4>
                  <p className="text-slate-600 text-sm">Instant geofence breach alerts allow for rapid recovery of stolen assets before they leave the vicinity.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Optimize Fleet Routing</h4>
                  <p className="text-slate-600 text-sm">Analyze historical movement data to identify bottlenecks, idle times, and inefficient routes to save on fuel and labor.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Improve Client Trust</h4>
                  <p className="text-slate-600 text-sm">Provide your end-customers with live tracking links, reducing support calls and increasing transparency.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default GPSAssetTracking;