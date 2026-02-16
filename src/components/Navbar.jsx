import React, { useState } from 'react';
import { 
  // Core Icons
  FaBars, FaTimes, FaChevronDown, FaPhoneAlt, FaEnvelope,
  // Solution Icons
  FaRunning, FaShareAlt, FaCar, FaCoins, FaUniversity, 
  FaHamburger, FaHome, FaGraduationCap, FaHeartbeat, FaBriefcase,
  // IT Services Icons
  FaHandshake, FaPaintBrush, FaLaptopCode, FaRocket, FaArrowUp, 
  FaPuzzlePiece, FaCheckCircle, FaTools, FaEye,
  // AI Services Icons (NEW)
  FaDatabase, FaFilter, FaCogs, FaChartPie, FaSearch, FaServer, FaBrain, FaNetworkWired
} from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

import InfoModal from './InfoModal';
// Note: We removed AIDropdown import because we are building a better one directly inside.

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', content: null });

  const openPopup = (title, content) => {
    setModalData({ title, content });
    setIsModalOpen(true);
  };

  // =========================================================================
  // 1. DATA FROM YOUR AI SCREENSHOT
  // =========================================================================
  const aiSolutionsList = [
    "Statistical Analysis, Inferencing, Regression",
    "Knowledge/Information Processing and Retrieval",
    "Forecasting/Prediction",
    "Intelligent Systems",
    "Machine/Deep Learning Solutions",
    "Smart Optimization",
    "Explainable AI, Sustainable AI, Responsible AI",
    "Other Advanced Analytics and Solutions"
  ];

  const aiServicesList = [
    { icon: FaHandshake, title: 'Consultancy', desc: 'Expert AI strategy & roadmap planning.' },
    { icon: FaDatabase, title: 'Data Collection', desc: 'Gathering high-quality raw data.' },
    { icon: FaFilter, title: 'Data Curation', desc: 'Cleaning and organizing datasets.' },
    { icon: FaCogs, title: 'Data Processing', desc: 'Transforming data for analysis.' },
    { icon: FaChartPie, title: 'Data Visualization', desc: 'Visual insights & dashboards.' },
    { icon: FaSearch, title: 'Data Analysis', desc: 'Interpretation & understanding patterns.' },
    { icon: FaServer, title: 'Database Design', desc: 'Development & maintenance of DBs.' },
    { icon: FaBrain, title: 'Artificial Intelligence', desc: 'Core AI model development.' }
  ];

  // =========================================================================
  // 2. DATA FROM YOUR IT SERVICES SCREENSHOT
  // =========================================================================
  const itSolutionsList = [
    "Inventory Management / ERP Systems",
    "Finance Management Systems",
    "Human Resource Management Systems (HRMS)",
    "Academic/Learning Management Systems (LMS)",
    "Daily Lifestyle Tracking/Health Systems",
    "Web Design & Development",
    "Online/Web based Systems",
    "App Development",
    "Custom Large/Small-scale IT Applications"
  ];

  const itServicesList = [
    { icon: FaHandshake, title: 'Consultancy', desc: 'Strategic IT guidance.' },
    { icon: FaPaintBrush, title: 'Design', desc: 'UI/UX & Architecture.' },
    { icon: FaLaptopCode, title: 'Development', desc: 'Web & Mobile Solutions.' },
    { icon: FaRocket, title: 'Deployment', desc: 'Cloud & On-Premise.' },
    { icon: FaArrowUp, title: 'Upgradation', desc: 'Modernizing Legacy Systems.' },
    { icon: FaPuzzlePiece, title: 'Integration', desc: 'API & IoT Connectivity.' },
    { icon: FaCheckCircle, title: 'Testing', desc: 'QA & Security.' },
    { icon: FaTools, title: 'Maintenance', desc: '24/7 Support & Fixes.' },
    { icon: FaEye, title: 'Monitoring', desc: 'Real-time Analytics.' }
  ];

  // =========================================================================
  // 3. DYNAMIC CONTENT GENERATOR (Works for both AI and IT)
  // =========================================================================
  const getPopupContent = (title, desc, solutionsList, isAI = false) => (
    <div className="space-y-8 text-gray-700">
      
      {/* Header Description */}
      <div>
        <p className={`text-lg leading-relaxed border-l-4 ${isAI ? 'border-purple-600 bg-purple-50' : 'border-blue-500 bg-blue-50'} p-4 rounded-r-lg`}>
          Our <span className={`font-bold ${isAI ? 'text-purple-700' : 'text-blue-700'}`}>{title}</span> services empower your business. {desc} 
          We specialize in delivering high-impact results tailored to your objectives.
        </p>
      </div>

      {/* The Solutions List */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          {isAI ? <FaBrain className="text-purple-500"/> : <FaLaptopCode className="text-orange-500"/>} 
          {isAI ? "AI Capabilities & Solutions" : "Available Products & Solutions"}
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {solutionsList.map((solution, idx) => (
            <div key={idx} className={`flex items-start gap-2 p-3 rounded-lg border border-gray-100 transition ${isAI ? 'hover:border-purple-200 hover:bg-purple-50' : 'hover:border-blue-200 hover:bg-blue-50'}`}>
              <div className={`mt-1 h-2 w-2 rounded-full shrink-0 ${isAI ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
              <span className="text-sm font-medium">{solution}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Desk / Contact */}
      <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold mb-1">📞 Solution Desk</h3>
          <p className="text-gray-300 text-sm">Connect with our {isAI ? 'AI Researchers' : 'IT Experts'} today.</p>
        </div>
        <div className="flex gap-4">
           <button className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition ${isAI ? 'bg-purple-600 hover:bg-purple-700' : 'bg-orange-500 hover:bg-orange-600'}`}>
             <FaPhoneAlt size={14}/> Schedule Call
           </button>
        </div>
      </div>

    </div>
  );

  // --- ABOUT CONTENT ---
  const aboutContent = (
    <div className="space-y-6 text-left text-gray-700">
      <p className="text-lg leading-relaxed">
        We are a startup that provides <span className="font-bold text-blue-600">Consultancy Services</span> for Software/Web and other IT Solutions along with Data Analytics and AI.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <h3 className="font-bold text-blue-800 mb-2">🤖 AI & Data Analytics</h3>
          <p className="text-sm">Information Retrieval, Forecasting, Machine Learning, and Responsible AI.</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
          <h3 className="font-bold text-orange-800 mb-2">⚡ Electronics & IoT</h3>
          <p className="text-sm">A hub for Electronics & IoT Solutions, integrating hardware with smart software.</p>
        </div>
      </div>
    </div>
  );

  const industries = [
    { icon: FaRunning, name: 'Sports', info: 'Advanced analytics for sports.' },
    { icon: FaShareAlt, name: 'Social Media', info: 'Scalable social platforms.' },
    { icon: FaCar, name: 'Ride Sharing', info: 'GPS & payment integration.' },
    { icon: FaCoins, name: 'Fintech', info: 'Secure financial tech.' },
    { icon: FaUniversity, name: 'BFSI', info: 'Banking & Insurance systems.' },
    { icon: FaHamburger, name: 'Food Delivery', info: 'Logistics & ordering apps.' },
    { icon: FaHome, name: 'Real Estate', info: 'Virtual tours & portals.' },
    { icon: FaGraduationCap, name: 'eLearning', info: 'Education platforms.' },
    { icon: FaHeartbeat, name: 'Healthcare', info: 'HIPAA-compliant apps.' },
    { icon: FaBriefcase, name: 'Job Portal', info: 'Smart talent matching.' }
  ];

  return (
    <>
      <nav className="absolute w-full h-[90px] flex justify-between items-center px-6 lg:px-12 bg-transparent text-white z-[100] font-sans">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <div className="bg-white px-4 py-2 rounded-lg shadow-xl border-2 border-gray-100 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img 
              src="/logo.jpeg" 
              alt="Bayes" 
              className="h-8 md:h-10 w-auto object-contain"
              onError={(e) => {
                 if(e.target.src.endsWith('.jpeg')){
                     e.target.src = "/logo.jpg";
                 }
              }}
            />
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden xl:flex items-center gap-8">
          
          {/* 1. EMPOWERING WITH AI (UPDATED!) */}
          <div className="relative group">
            <button className="bg-orange-500 px-6 py-2.5 rounded-full flex items-center gap-2 font-bold hover:scale-105 transition-all shadow-lg shadow-orange-500/30">
              Empowering With AI <FaChevronDown size={10}/>
            </button>
            <div className="absolute top-[50px] left-[-100px] w-[900px] bg-white text-gray-800 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-purple-600 p-8">
               <div className="grid grid-cols-3 gap-6">
                  {aiServicesList.map((service, index) => (
                    <div 
                      key={index}
                      onClick={() => openPopup(service.title, getPopupContent(service.title, service.desc, aiSolutionsList, true))}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-all cursor-pointer group/card hover:scale-105 border border-transparent hover:border-purple-100"
                    >
                      <div className="p-3 bg-gray-100 rounded-lg text-purple-600 group-hover/card:bg-white group-hover/card:text-purple-700 group-hover/card:shadow-md transition-all">
                        <service.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover/card:text-purple-700 transition-colors">{service.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{service.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
               <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                 <p className="text-xs text-purple-600 font-semibold uppercase tracking-widest">Data Analytics • Machine Learning • Intelligent Systems</p>
               </div>
            </div>
          </div>

          <ul className="flex items-center gap-8 text-[15px] font-bold tracking-wide">
            
            {/* 2. ABOUT DROPDOWN */}
            <li className="relative group cursor-pointer hover:text-orange-500 flex items-center gap-1 py-4">
              About <FaChevronDown size={10}/>
              <div className="absolute top-[70px] w-64 bg-white text-gray-800 shadow-2xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border-t-4 border-orange-500">
                <button onClick={() => openPopup("About Us", aboutContent)} className="w-full text-left px-6 py-3 hover:bg-gray-100 hover:text-orange-500 border-b border-gray-50 font-semibold transition-colors">About Us</button>
                {['Our Team', 'How We Work', 'Awards', 'Life @ Webskitters'].map(item => (
                  <button key={item} onClick={() => openPopup(item, <p className="p-8">Details about {item} go here.</p>)} className="w-full text-left px-6 py-3 hover:bg-gray-100 hover:text-orange-500 border-b border-gray-50 transition-colors">{item}</button>
                ))}
              </div>
            </li>

            {/* 3. SERVICES MEGA MENU */}
            <li className="relative group cursor-pointer hover:text-orange-500 flex items-center gap-1 py-4">
              Services <FaChevronDown size={10}/>
              <div className="absolute top-[70px] left-[-250px] w-[900px] bg-white text-gray-800 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-orange-500 p-8">
                 <div className="grid grid-cols-3 gap-6">
                    {itServicesList.map((service, index) => (
                      <div 
                        key={index}
                        onClick={() => openPopup(service.title, getPopupContent(service.title, service.desc, itSolutionsList, false))}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all cursor-pointer group/card hover:scale-105 border border-transparent hover:border-blue-100"
                      >
                        <div className="p-3 bg-gray-100 rounded-lg text-blue-600 group-hover/card:bg-white group-hover/card:text-orange-500 group-hover/card:shadow-md transition-all">
                          <service.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover/card:text-blue-700 transition-colors">{service.title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{service.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            </li>

            {/* 4. SOLUTIONS MEGA MENU */}
            <li className="relative group cursor-pointer hover:text-orange-500 flex items-center gap-1 py-4">
              Solutions <FaChevronDown size={10}/>
              <div className="absolute top-[70px] left-[-450px] w-[1000px] bg-white text-gray-800 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-orange-500 p-10 grid grid-cols-3 gap-8">
                {industries.map((ind, i) => (
                  <div key={i} onClick={() => openPopup(ind.name, ind.info)} className="flex items-center gap-4 hover:text-orange-500 transition cursor-pointer group/ind p-2 rounded-lg hover:bg-gray-50">
                    <div className="p-3 bg-blue-50 rounded-lg group-hover/ind:bg-orange-50 transition shadow-sm"><ind.icon className="text-blue-500 group-hover/ind:text-orange-500 text-xl"/></div>
                    <span className="font-semibold text-sm">{ind.name}</span>
                  </div>
                ))}
              </div>
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition-colors">Case Studies</li>
            <li className="hover:text-orange-500 cursor-pointer transition-colors">Blog</li>
          </ul>
        </div>

        {/* HIRE US */}
        <div className="hidden xl:block">
           <button className="border-2 border-white/30 bg-white/10 backdrop-blur-md px-10 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-white/20">
             Hire Us ↗
           </button>
        </div>

        {/* MOBILE TOGGLE */}
        <div onClick={() => setNav(true)} className="xl:hidden cursor-pointer p-2 z-[200]">
          <FaBars size={28}/>
        </div>
      </nav>

      {/* POPUP SYSTEM */}
      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalData.title}>
        <div className="p-8 md:p-12">
          {modalData.content}
        </div>
      </InfoModal>

      {/* MOBILE SIDEBAR */}
      <div 
        className={`fixed top-0 right-0 h-full w-full bg-[#0b1c38] z-[300] transition-transform duration-500 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'}`}
      >
          <div className="flex flex-col p-10 text-white font-bold gap-6 h-full">
            <div className="flex justify-end">
              <FaTimes onClick={() => setNav(false)} size={30} className="cursor-pointer hover:text-orange-500 transition"/>
            </div>
            
            <div className="bg-white px-4 py-2 rounded-lg w-fit shadow-lg">
               <img src="/bayes-logo.jpeg" alt="Bayes" className="h-8 w-auto" />
            </div>
            
            {['Home', 'About', 'Services', 'Solutions', 'Case Studies', 'Contact'].map((item) => (
              <div key={item} className="text-xl border-b border-white/10 pb-4 cursor-pointer hover:text-orange-500 transition">
                {item}
              </div>
            ))}
            
            <button className="bg-orange-500 py-4 rounded-xl mt-4 font-bold text-lg shadow-lg">
              Hire Us
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;