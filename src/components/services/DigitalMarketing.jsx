import React from 'react';
import { 
  FaArrowRight, FaSearch, FaShareAlt, FaStar, FaEnvelopeOpenText, 
  FaMousePointer, FaRegNewspaper, FaChartLine
} from 'react-icons/fa';

const DigitalMarketing = () => {
  const services = [
    { title: "SEO", icon: FaSearch, desc: "Hire a digital marketing consultant to enhance your website's visibility, drive organic traffic, and generate quality leads. We provide tailored strategic digital transformation with a practical approach to meet your goals." },
    { title: "SMM", icon: FaShareAlt, desc: "Our Social Media Marketing solutions boost your brand visibility and engagement across platforms. We apply innovative strategies to each social channel, helping your business thrive online with results-driven social media tactics.", isHighlighted: true },
    { title: "ORM", icon: FaStar, desc: "Our Online Reputation Management (ORM) services protect and enhance your brand's image. We emphasize positive aspects of your business, ensuring a trustworthy online presence." },
    { title: "Email Marketing", icon: FaEnvelopeOpenText, desc: "We help craft personalized campaigns that create curiosity and drive optimal outcomes. Additionally, we develop engaging, targeted emails to help your business retain customers." },
    { title: "PPC", icon: FaMousePointer, desc: "Pay-per-click (PPC) services focus on maximizing ROI by driving relevant traffic to your site. Our experts create tailored campaigns that increase visibility and deliver measurable results." },
    { title: "Content Marketing", icon: FaRegNewspaper, desc: "Our digital marketing team creates customized, strategic plans to enhance the brand's presence. We provide standard content that can effectively resonate with your audience." }
  ];

  return (
    <div className="w-full bg-white font-sans animate-fadeIn pt-[90px]">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-[#020b2d] py-32 px-6 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600" 
            alt="Digital Marketing Experts" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b2d] via-[#020b2d]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:w-[60%] lg:w-1/2">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
            Hire <span className="text-orange-500">Digital Marketing</span> Experts
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
            Transform Your Online Presence With Our Dedicated Digital Marketing Experts. We Specialize In Crafting Data-Driven Strategies To Boost Your Brand Visibility, Engagement, And Conversions, Ensuring Sustainable Growth Across All Digital Platforms. Let Us Drive Your Success!
          </p>
          <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 w-fit shadow-lg shadow-cyan-500/30">
            Consult Our Experts <FaArrowRight />
          </button>
        </div>
      </div>

      {/* 2. SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 pr-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Digital Marketing <br/>
              <span className="text-[#00c2ff]">Services</span>
            </h2>
            <p className="text-slate-500 leading-relaxed font-medium text-lg">
              How do you engage your target customer at the right time with the help of the right platform? Rely on our experts to expand your niche market by creating a strong online presence and value. Achieve top brand recognition with our consistent strategic processes.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
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

      {/* 3. APPROACH SECTION */}
      <div className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
          <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white px-8 py-3 rounded-full font-bold text-sm mb-8 shadow-md transition-colors flex items-center gap-2 mx-auto">
            Share Your Requirement ↗
          </button>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Our Approach To <span className="text-[#00c2ff]">Digital Marketing Services</span>
          </h2>
          <p className="text-slate-500 font-medium leading-relaxed text-lg max-w-3xl mx-auto">
            Our digital marketing workflow ensures a seamless and efficient system. Our responsive approach empowers our clients to achieve their objectives and deliver high-quality products and services.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Digital Marketing Dashboard" className="w-full h-auto object-cover"/>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-8 left-8 w-12 h-12 bg-[#00c2ff] text-white font-black rounded-full flex items-center justify-center z-10 text-xl shadow-md">05</div>
              <div className="pl-20">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Optimize & Analyze</h4>
                <p className="text-slate-500 text-base leading-relaxed">
                  We ensure that our clients receive top-notch outcomes. We analyze implemented strategies to see detailed performance, helping you generate new strategies for digital presence and balance strategies delivering better results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CTA BANNER */}
      <div className="bg-[#020b2d] py-20 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-900/20 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
           <div className="md:w-1/2">
             <div className="relative w-full max-w-sm mx-auto shadow-2xl rounded-2xl overflow-hidden border border-white/10">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Data Analytics" className="w-full h-auto opacity-80" />
               <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay"></div>
             </div>
           </div>
           <div className="md:w-1/2 text-white">
             <h2 className="text-4xl md:text-5xl font-black mb-6">Let's Discuss <span className="text-[#00c2ff]">Your Project</span></h2>
             <p className="text-gray-300 text-lg leading-relaxed mb-8">
               We start by knowing your business, target audience, and vision. After a detailed discussion, our experts will bring strategic insights to create a roadmap for you. They will provide information on how they will proceed to make your products / services stand out from the rest.
             </p>
             <button className="bg-[#00c2ff] hover:bg-[#00a0d6] text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-cyan-500/30 flex items-center gap-2">
               Share Your Requirement <FaArrowRight />
             </button>
           </div>
        </div>
      </div>

    </div>
  );
};

export default DigitalMarketing;