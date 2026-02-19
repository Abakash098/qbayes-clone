import React from 'react';
import { 
  FaArrowRight, FaPenNib, FaPencilRuler, FaChartBar, 
  FaUserCheck, FaLaptopCode, FaObjectGroup, FaSitemap, 
  FaMobileAlt, FaUniversalAccess, FaCommentDots, FaSyncAlt, FaPalette, FaMousePointer
} from 'react-icons/fa';

const UIUXDesign = () => {
  const serviceTeam = [
    { title: "Graphic Designing", desc: "Breathe life into your brand with our graphic design service. From logos to brochures, web stores to social pieces, we craft visually compelling elements.", icon: FaPenNib },
    { title: "Developing Wireframe", desc: "Allow the experts to lay the foundation for exceptional user experiences with our detailed wireframes. The blueprints outline the structure and functionality.", icon: FaPencilRuler },
    { title: "Extensive Testing and Analysis", desc: "Every digital product is rigorously tested and analyzed for optimal performance and user satisfaction. We identify and resolve issues early.", icon: FaChartBar },
    { title: "Optimized Experience for Users", desc: "Combining user-centered design principles with cutting-edge technology, we create highly functional and easy-to-navigate interfaces.", icon: FaUserCheck },
    { title: "Front-end Architecture and Design", desc: "Our expert developers translate stunning designs into seamless, responsive, and cross-browser compatible interfaces.", icon: FaLaptopCode },
    { title: "UI Concept Creation", desc: "We transform your vision into tangible designs through a collaborative concept creation process. We explore various design directions.", icon: FaObjectGroup, isHighlighted: true }
  ];

  const coreElements = [
    { name: "User-Centric Strategy", icon: FaSitemap },
    { name: "Intuitive Navigation", icon: FaMousePointer },
    { name: "Visual Consistency", icon: FaObjectGroup },
    { name: "Information Architecture", icon: FaMobileAlt },
    { name: "Seamless Interactivity", icon: FaLaptopCode },
    { name: "Accessibility Compliance", icon: FaUniversalAccess },
    { name: "Mobile Responsiveness", icon: FaMobileAlt },
    { name: "Clear Feedback & States", icon: FaCommentDots },
    { name: "Usability Testing & Iteration", icon: FaSyncAlt },
    { name: "Aesthetic & Brand Harmony", icon: FaPalette }
  ];

  return (
    <div className="w-full bg-white font-sans animate-fadeIn">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-[#020b2d] pt-32 pb-24 px-6 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1600" 
            alt="UI/UX Wireframing" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%] lg:w-1/2">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
            Hire UI/UX <br/>
            <span className="text-orange-500">Design Services</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
            Elevate Your Digital Presence With Our Top-Tier UI/UX Design Services. Our Designer Can Craft Interactive And Visually Stunning Layouts, Captivating Users And Driving Results. We Don't Just Build Interfaces; We Create Experiences To Capture The Ideal Audience.
          </p>
          <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit shadow-lg shadow-cyan-500/30">
            Consult Our Experts <FaArrowRight />
          </button>
        </div>
      </div>

      {/* 2. SERVICE TEAM GRID */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 pr-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Hire UI/UX Design <br/>
              <span className="text-[#00c2ff]">Service Team</span>
            </h2>
            <p className="text-slate-500 leading-relaxed font-medium text-lg">
              Explore our comprehensive UI/UX design services tailored to elevate your digital products. From initial concept to pixel-perfect execution, we cover every aspect of the design process. The team ensures a seamless and engaging user experience across all platforms.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {serviceTeam.map((service, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-3xl border transition-all duration-300 ${
                  service.isHighlighted 
                    ? 'bg-[#020b2d] text-white border-transparent shadow-2xl scale-[1.02]' 
                    : 'bg-white border-blue-100 text-slate-900 shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${
                  service.isHighlighted ? 'bg-white/10 border-white/20 text-[#00c2ff]' : 'bg-blue-50 border-blue-100 text-[#00c2ff]'
                }`}>
                  <service.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className={`text-sm leading-relaxed ${service.isHighlighted ? 'text-gray-300' : 'text-slate-500'}`}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. OUR APPROACH SECTION */}
      <div className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
          <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white px-8 py-3 rounded-full font-bold text-sm mb-8 shadow-md transition-colors flex items-center gap-2 mx-auto">
            Share Your Requirement ↗
          </button>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Our Approach To UI UX <span className="text-[#00c2ff]">Design Services</span>
          </h2>
          <p className="text-slate-500 font-medium leading-relaxed text-lg">
            Our streamlined UI/UX development flow is designed for seamless collaboration and exceptional outcomes. We prioritize transparency and iterative progress using an agile methodology, ensuring we meet and exceed your objectives.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Design Team Collaboration" className="w-full h-auto object-cover"/>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-8 left-8 w-12 h-12 bg-[#00c2ff] text-white font-black rounded-full flex items-center justify-center z-10 text-xl shadow-md">04</div>
              <div className="pl-20">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Front-end and Back-end Design</h4>
                <p className="text-slate-500 text-base leading-relaxed">
                  Our expert designers create your website's visual interface and underlying functionality, creating a seamless and engaging user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CORE ELEMENTS GRID */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Core Elements Of Our <span className="text-[#00c2ff]">UI UX Design Services</span>
        </h2>
        <p className="text-slate-500 font-medium max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          Our UI/UX design approach combines creativity, usability, and strategy to create experiences that truly resonate with users. We focus on a user-centered approach, ensuring designs are intuitive and tailored to real user needs.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {coreElements.map((el, i) => (
            <div key={i} className="bg-blue-50/30 border border-blue-100 hover:border-[#00c2ff]/40 p-8 rounded-[2rem] flex flex-col items-center justify-center gap-5 hover:-translate-y-2 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#00c2ff] shadow-sm border border-blue-50">
                <el.icon size={28} />
              </div>
              <h4 className="font-bold text-slate-800 text-[15px] leading-tight">{el.name}</h4>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white font-bold py-5 px-12 text-lg rounded-full transition-all shadow-lg shadow-cyan-500/30">
            Discuss Your UI/UX Needs
          </button>
        </div>
      </div>

    </div>
  );
};

export default UIUXDesign;