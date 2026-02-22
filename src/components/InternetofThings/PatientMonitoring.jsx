import React, { useEffect } from 'react';

const PatientMonitoring = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] text-white pt-[120px] pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Visuals */}
        <div className="relative group" data-aos="fade-right">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-red-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#112240] rounded-2xl overflow-hidden border border-slate-700 p-4">
            <img 
              src="/patient-monitor-diagram.png" 
              alt="Centralized Patient Monitoring System" 
              className="w-full h-auto object-contain rounded-lg"
            />
            <div className="absolute top-6 right-6 bg-red-500/80 text-white text-xs px-3 py-1 rounded-full font-bold tracking-widest animate-pulse">
              24/7 MONITORING
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8" data-aos="fade-left">
          <div className="inline-block px-4 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-bold tracking-widest uppercase">
            Product 08
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              Centralized <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-300">Patient Monitoring System</span>
            </h1>
            <p className="text-xl text-gray-300">
              Proactive healthcare through real-time vital tracking and automated alerts.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <VitalBadge label="Heart Rate" />
            <VitalBadge label="SpO2 Levels" />
            <VitalBadge label="Blood Pressure" />
            <VitalBadge label="Temperature" />
            <VitalBadge label="Respiratory Rate" />
            <VitalBadge label="Diaper Wetness" />
          </div>

          <div className="space-y-6">
            <Feature 
              title="Real-Time Dashboard" 
              desc="Centralized RPM visualization for medical staff to monitor multiple patients simultaneously from a single station." 
            />
            <Feature 
              title="Body Sensor Network" 
              desc="Low-power wearable sensors that transmit data via local switches to secure remote monitoring servers." 
            />
            <Feature 
              title="Instant Alerts" 
              desc="Automated notification system that triggers immediate alerts to remote staff when vitals cross safety thresholds." 
            />
          </div>

          <div className="pt-6">
            <button className="bg-gradient-to-r from-rose-600 to-red-500 hover:from-rose-500 hover:to-red-400 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-rose-500/20">
              Technical Specifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const VitalBadge = ({ label }) => (
  <div className="flex items-center gap-2 bg-slate-800/50 border border-rose-500/20 p-2 rounded-lg">
    <div className="w-2 h-2 rounded-full bg-rose-500"></div>
    <span className="text-sm font-medium text-gray-300">{label}</span>
  </div>
);

const Feature = ({ title, desc }) => (
  <div className="flex gap-4 group">
    <div className="flex-shrink-0 w-1 bg-gradient-to-b from-rose-500 to-transparent rounded-full h-8 group-hover:h-full transition-all"></div>
    <div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

export default PatientMonitoring; 