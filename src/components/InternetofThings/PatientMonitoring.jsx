import React from 'react';
import { 
  FaHeartbeat, FaLungs, FaThermometerHalf, FaTint, 
  FaDesktop, FaWifi, FaBell, FaCheckCircle, FaChartLine, FaArrowRight, FaStethoscope 
} from 'react-icons/fa';

const PatientMonitoring = () => {

  const features = [
    {
      icon: FaDesktop,
      title: "Real-Time Central Dashboard",
      description: "A centralized Remote Patient Monitoring (RPM) visualization hub allowing staff to monitor multiple patients from a single station."
    },
    {
      icon: FaWifi,
      title: "Body Sensor Network (BSN)",
      description: "Utilizes low-power wearable sensors that continuously log and transmit biometric data to secure local edge switches."
    },
    {
      icon: FaBell,
      title: "Automated Critical Alerts",
      description: "Smart notification system that instantly triggers visual and auditory alerts when patient vitals cross predefined safety thresholds."
    },
    {
      icon: FaChartLine,
      title: "Historical Trend Analysis",
      description: "Logs continuous patient data over time, allowing doctors to review historical trends and make accurate diagnostic decisions."
    }
  ];

  const techSpecs = [
    "Non-invasive wearable BSN (Body Sensor Network) architecture",
    "Continuous tracking: Heart Rate, SpO2, BP, Temp, Resp. Rate",
    "Encrypted Local Area Network (LAN) data transmission",
    "High-availability centralized server integration",
    "Customizable alarm parameters per patient profile",
    "Automated 'Diaper Wetness' sensory alerts for infant care"
  ];

  return (
    <div className="bg-white font-sans overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-rose-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
                Healthcare IoT
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Centralized Patient <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-500">
                  Monitoring System
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                Enable proactive healthcare through real-time vital tracking. Our IoT network continuously monitors patient health, instantly alerting medical staff to critical changes.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-rose-100 flex items-center justify-center flex-shrink-0">
                    <FaHeartbeat className="text-rose-600 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">24/7</h4>
                    <p className="text-sm text-slate-500 font-medium">Vital Tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-rose-100 flex items-center justify-center flex-shrink-0">
                    <FaBell className="text-rose-600 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Instant</h4>
                    <p className="text-sm text-slate-500 font-medium">Critical Alerts</p>
                  </div>
                </div>
              </div>

              <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-rose-600/30 transition-all flex items-center gap-3 group">
                Request Hardware Demo
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-red-200/40 to-rose-100/40 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                  <img 
                    src="/patient-monitor-diagram.png" 
                    alt="Centralized Patient Monitoring Dashboard" 
                    className="rounded-xl w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" }}
                  />
                  
                  {/* Floating Tech Tag */}
                  <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <FaStethoscope className="text-rose-600 text-xl" />
                    <div>
                      <p className="text-slate-900 font-bold leading-none">Clinical Grade</p>
                      <p className="text-slate-500 text-xs mt-1">Remote Patient Monitoring</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Comprehensive Biometric Coverage</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Replacing manual, periodic check-ups with a continuous stream of actionable health data to improve patient outcomes.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors duration-300">
                  <feature.icon className="text-rose-600 text-2xl group-hover:text-white transition-colors duration-300" />
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600 rounded-full blur-[150px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Tech Specs */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Hardware & Network Specifications</h2>
              <p className="text-slate-400 mb-10 text-lg">Designed for hospital wards and ICUs, utilizing secure local networks to ensure patient data remains private and latency-free.</p>
              
              <ul className="space-y-4">
                {techSpecs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
                    <FaCheckCircle className="text-rose-400 flex-shrink-0 text-lg" />
                    <span className="text-slate-200 font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Value / ROI */}
            <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FaChartLine className="text-rose-600" /> Clinical Value
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Reduce Emergency Events</h4>
                  <p className="text-slate-600 text-sm">Automated alerts catch deteriorating vitals (like dropping SpO2) before they escalate into critical emergencies.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Optimize Nursing Staff</h4>
                  <p className="text-slate-600 text-sm">Frees nurses from manual vital-checking rounds, allowing them to focus time and energy on direct patient care.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Improve Patient Comfort</h4>
                  <p className="text-slate-600 text-sm">Non-invasive wearables allow patients to rest without the constant interruption of manual blood pressure cuffs or thermometers.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PatientMonitoring;