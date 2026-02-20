import React from 'react';
import { 
  FaNetworkWired, FaArrowRight, FaHome, FaIndustry, 
  FaLock, FaMicrochip
} from 'react-icons/fa';

const IoTDevelopment = () => {
  const services = [
    { title: "Smart Home Automation", desc: "Build connected ecosystems for consumer devices, enabling seamless control over lighting, security, and climate.", icon: FaHome },
    { title: "Industrial IoT (IIoT)", desc: "Optimize manufacturing pipelines with real-time sensor data, predictive maintenance, and automated logistics.", icon: FaIndustry },
    { title: "Embedded Systems", desc: "Custom firmware and micro-controller programming to bring your proprietary hardware to life.", icon: FaMicrochip },
    { title: "IoT Security & Architecture", desc: "Military-grade encryption and secure cloud architecture to protect your network of connected devices.", icon: FaLock }
  ];

  // MASSIVE PROJECT LIST EXTRACTED FROM YOUR SLIDES
  const projects = [
    {
      id: "01",
      title: "Agricultural Monitoring System (AI Bot)",
      image: "/agri-bot.png", // Add your image to the public folder and name it this
      features: [
        { label: "High Detection Accuracy", text: "Achieves 81.8% precision in identifying crop diseases and weeds using advanced AI models." },
        { label: "Instant Weed Analysis", text: "Utilizes real-time image processing algorithms for rapid weed classification and assessment." },
        { label: "Autonomous Field Operations", text: "Fully autonomous navigation and monitoring system—no manual effort required." },
        { label: "Intelligent Spray Mechanism", text: "Targeted and automated spraying system that significantly reduces chemical usage." }
      ]
    },
    {
      id: "02",
      title: "An IoT Based Real-Time Autonomous Beach Cleaner",
      image: "/beach-cleaner.png",
      features: [
        { label: "Autonomous Intelligence", text: "High-resolution camera and on-board processor identify and classify waste in real-time." },
        { label: "Precision Waste Segregation", text: "Intelligently classifies waste into biodegradable and non-biodegradable using dual dedicated shovels." },
        { label: "Enhanced Recycling Efficiency", text: "Integrated vibrators remove sand and dust from collected waste, streamlining recycling." },
        { label: "Remote Monitoring", text: "Transmission unit provides real-time updates on container fill levels and operational uptime." }
      ]
    },
    {
      id: "03",
      title: "Aquisher: IoT Water Monitoring for Fish Cultivation",
      image: "/aquisher.png", 
      features: [
        { label: "Comprehensive Water Analysis", text: "Monitors critical parameters including temperature, TDS, dissolved oxygen, turbidity, and pH levels." },
        { label: "Intelligent Fish Suitability", text: "Analyzes real-time water data to predict which fish species are best suited for specific aqua-farming conditions." },
        { label: "Optimized Power Efficiency", text: "Compares current parameters with baseline data, transmitting only significant changes to save battery." },
        { label: "Flexible Monitoring", text: "Local display for instant access, plus remote cloud transmission for anywhere-access." }
      ]
    },
    {
      id: "04",
      title: "Portable Real-Time Haze and Rain Removal Device",
      image: "/haze-removal.png",
      features: [
        { label: "Real-Time Haze & Rain Removal", text: "Experience immediate and significant improvements in video clarity during adverse weather conditions." },
        { label: "Enhanced Visual Clarity", text: "Drastically improves video quality for accurate detection and informed decision-making for surveillance." },
        { label: "Integrated System Design", text: "Compact system featuring a camera, processing unit, vision processing unit, and display." },
        { label: "Portable Deployment", text: "Designed for on-the-go use with low power consumption and a 12V battery for diverse environments." }
      ]
    },
    {
      id: "05",
      title: "System And Method For Soil Parameter Estimation",
      image: "/soil-estimation.png",
      features: [
        { label: "Affordable Soil Analysis", text: "Low-cost, precise soil fertility estimation, replacing expensive lab tests with field-ready portability." },
        { label: "Simple Sensor Tech", text: "Uses reliable, cost-effective resistive and capacitive sensors to deliver instant results." },
        { label: "AI-Powered Accuracy", text: "Machine learning precisely estimates NPK (Nitrogen, Phosphorus, Potassium) and other fertility levels." },
        { label: "Eco-Friendly Farming", text: "Optimize fertilizer use to ensure ideal application, preventing soil degradation and environmental impact." }
      ]
    },
    {
      id: "06",
      title: "Solar-Powered Agricultural Dashboard",
      image: "/agri-dashboard.png",
      features: [
        { label: "IoT-Based Architecture", text: "Agriculture system that monitors temperature, humidity, and soil nutrients (NPK) using Wi-Fi/LoRa." },
        { label: "Sustainable Power", text: "Completely solar-powered with a reliable battery backup for continuous off-grid operation." },
        { label: "Centralized Dashboard", text: "Sends real-time telemetry data to a centralized cloud dashboard for deep analysis and reporting." }
      ]
    },
    {
      id: "08",
      title: "Centralized Patient Monitoring System",
      image: "/patient-monitor.png",
      features: [
        { label: "Comprehensive Vitals", text: "A centralized system tracking heart rate, SpO2, BP, temperature, respiratory rate, and diaper wetness." },
        { label: "24/7 Logging", text: "Ensures round-the-clock vitals logging with automated alerts." },
        { label: "Proactive Care Dashboard", text: "Real-time visualization allows remote medical staff to monitor multiple patients from a single station." }
      ]
    },
    {
      id: "09",
      title: "RFID Based Inventory Management System",
      image: "/rfid-inventory.png",
      features: [
        { label: "Automated Tracking", text: "Automates asset tracking and stock control to reduce manual errors." },
        { label: "Real-Time Visibility", text: "Provides instant visibility into inventory levels to streamline warehouse operations." },
        { label: "Centralized Reporting", text: "Features a reporting module and centralized dashboard access to enhance overall efficiency." }
      ]
    },
    {
      id: "10",
      title: "GPS Enabled Asset Tracking System",
      image: "/gps-tracking.png",
      features: [
        { label: "Live Location Updates", text: "GPS-based tracking system for high-value assets with live location and movement history." },
        { label: "Global Visibility", text: "Offers complete management of items across different geographies utilizing satellite networking." }
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      
      {/* Hero Section */}
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600" alt="IoT" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-900/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
            Connected <span className="text-purple-400">IoT Solutions</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium max-w-2xl">
            Bridge the gap between physical hardware and digital intelligence. We design, build, and deploy scalable Internet of Things architectures for the modern world.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit shadow-xl shadow-purple-500/20">
            Consult IoT Experts <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our IoT <span className="text-purple-600">Expertise</span></h2>
          <p className="text-slate-500 font-medium text-lg max-w-3xl mx-auto">From sensors to the cloud, we provide end-to-end engineering for connected ecosystems.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-purple-50 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-6">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <srv.icon size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{srv.title}</h4>
                <p className="text-sm leading-relaxed text-slate-500">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FEATURED IoT PROJECTS LIST --- */}
      <div className="bg-slate-50 py-24 px-6 border-t border-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Innovation in <span className="text-purple-600">Action</span></h2>
            <p className="text-slate-500 font-medium text-lg">A showcase of our proprietary IoT hardware and software implementations.</p>
          </div>

          <div className="space-y-32">
            {projects.map((project, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Area */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute -top-12 -left-8 text-[10rem] md:text-[14rem] font-black text-purple-100/60 z-0 leading-none select-none">
                    {project.id}
                  </div>
                  <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl bg-white aspect-video flex items-center justify-center">
                    {/* Make sure you save your cropped images into the public folder matching these src names! */}
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain p-4" />
                  </div>
                </div>

                {/* Text Content Area */}
                <div className="w-full lg:w-1/2 relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                    {project.title}
                  </h3>
                  <div className="space-y-6">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="mt-1 w-2 h-2 rounded-full bg-purple-600 shrink-0"></div>
                        <div>
                          <p className="font-bold text-slate-900 mb-1">{feature.label}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{feature.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default IoTDevelopment;