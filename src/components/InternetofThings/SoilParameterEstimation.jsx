import React from 'react';
import { 
  FaLeaf, FaVial, FaMicrochip, FaChartLine, FaCheckCircle, 
  FaArrowRight, FaDatabase, FaMobileAlt, FaSeedling 
} from 'react-icons/fa';

const SoilParameterEstimation = () => {

  const features = [
    {
      icon: FaVial,
      title: "Instant NPK Estimation",
      description: "Uses advanced spectral sensors to provide real-time estimations of Nitrogen (N), Phosphorus (P), and Potassium (K) without lab delays."
    },
    {
      icon: FaMicrochip,
      title: "AI-Driven Accuracy",
      description: "Leverages proprietary machine learning models to filter environmental noise and deliver fertility data with over 90% precision."
    },
    {
      icon: FaSeedling,
      title: "Crop-Specific Logic",
      description: "The system provides customized fertilizer recommendations based on the specific nutrient requirements of your target crop."
    },
    {
      icon: FaMobileAlt,
      title: "Digital Soil Mapping",
      description: "Syncs with our mobile ecosystem to generate digital heatmaps of your field's fertility, identifying specific zones that need attention."
    }
  ];

  const techSpecs = [
    "High-precision electrochemical and optical sensor array",
    "On-device Edge AI processing (No active internet required for sensing)",
    "Ruggedized IP65 housing for heavy field use",
    "Bluetooth & Wi-Fi mesh networking capabilities",
    "Rechargeable high-density battery (12+ hours of active use)",
    "Cloud-integrated dashboard for long-term soil health tracking"
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
                Precision Agriculture IoT
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                AI-Powered <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
                  Soil Estimation
                </span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                Instant fertility analysis for the modern field. Our portable hardware delivers real-time NPK and moisture data, allowing you to optimize inputs and maximize harvest ROI.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <FaChartLine className="text-emerald-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">90%+</h4>
                    <p className="text-sm text-slate-500 font-medium">AI Accuracy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <FaDatabase className="text-emerald-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Real-Time</h4>
                    <p className="text-sm text-slate-500 font-medium">Field Analysis</p>
                  </div>
                </div>
              </div>

              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-3 group">
                Request Specifications
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-green-200/40 to-emerald-100/40 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                  <img 
                    src="/soil-estimation.png" 
                    alt="AI Soil Fertility Sensor" 
                    className="rounded-xl w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800" }}
                  />
                  
                  {/* Floating Tech Tag */}
                  <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                    <FaLeaf className="text-emerald-500 text-xl" />
                    <div>
                      <p className="text-slate-900 font-bold leading-none">Smart Fertility</p>
                      <p className="text-slate-500 text-xs mt-1">NPK Analysis Ready</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Autonomous Soil Intelligence</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Eliminating the wait time of laboratory testing by bringing military-grade AI analysis directly to the dirt under your feet.</p>
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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[150px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Tech Specs */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Technical Specifications</h2>
              <p className="text-slate-400 mb-10 text-lg">A laboratory-grade analytical tool compressed into a rugged, portable field device designed for continuous agricultural deployment.</p>
              
              <ul className="space-y-4">
                {techSpecs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm">
                    <FaCheckCircle className="text-emerald-400 flex-shrink-0 text-lg" />
                    <span className="text-slate-200 font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Value / ROI */}
            <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FaChartLine className="text-emerald-600" /> Operational Value
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Optimize Fertilizer ROI</h4>
                  <p className="text-slate-600 text-sm">Stop over-applying nutrients where they aren't needed. Use precise data to apply only what is required for maximum growth.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Accelerate Decision Making</h4>
                  <p className="text-slate-600 text-sm">Waiting 2 weeks for lab results is outdated. Make immediate adjustments to your fertilization strategy based on today's soil reality.</p>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Enhance Soil Sustainability</h4>
                  <p className="text-slate-600 text-sm">Protect the long-term health of your land by preventing chemical runoff and maintaining a perfect pH and nutrient balance.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default SoilParameterEstimation;