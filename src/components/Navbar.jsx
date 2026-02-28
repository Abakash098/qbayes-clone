import React, { useState, useEffect } from 'react';
import { 
  FaBars, FaTimes, FaChevronDown, FaArrowRight, FaPlus, FaMinus,
  FaHandshake, FaPaintBrush, FaLaptopCode, FaRocket, FaArrowUp, 
  FaNetworkWired, FaCode, FaMobileAlt, FaBrain, FaDatabase,
  FaRunning, FaShareAlt, FaCar, FaCoins, FaUniversity, FaMotorcycle, FaCut,
  FaHome, FaHandPointer, FaCogs, FaGraduationCap, FaUsers, FaHeartbeat, FaBox,
  FaStore, FaCalendarAlt, FaPlane, FaHeart, FaHandHoldingHeart, FaBriefcase, FaMicrochip, FaFlask, FaBuilding
} from 'react-icons/fa';

import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import InfoModal from './InfoModal';
import HireUsModal from './HireUsModal'; 

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState(null);
  const [activeWebDev, setActiveWebDev] = useState('PHP Framework');

  const aiDropdownOptions = [
    { id: 'sol', label: 'AI Services & Solutions', path: '/ai-services', title: 'AI Services & Solutions', desc: 'Transform your business with cutting-edge AI.', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600' },
    { id: 'dev', label: 'AI Development', path: '/ai-development', title: 'Custom AI Development', desc: 'Build scalable AI models.', image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=600' },
    { id: 'con', label: 'AI Consulting', path: '/ai-consulting', title: 'Strategic AI Consulting', desc: 'Expert guidance to navigate the AI landscape.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600' },
    { id: 'chat', label: 'AI Chatbot Development', path: '/ai-chatbot', title: 'Intelligent Chatbots', desc: 'Enhance customer engagement with NLP.', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=600' }
  ];

  const iotDropdownOptions = [
    { id: 'iot-5', label: 'Soil Parameter Estimation', path: '/soil-parameter-estimation', title: 'Soil Fertility Analysis', desc: 'AI-powered accuracy for instant NPK estimation in the field.', image: '/soil-estimation.png' },
    { id: 'iot-6', label: 'Solar Agri Dashboard', path: '/solar-agri-dashboard', title: 'Solar-Powered Dashboard', desc: 'Continuous off-grid monitoring of temperature, humidity, and soil.', image: '/agri-dashboard.png' },
    { id: 'iot-7', label: 'Patient Monitoring', path: '/patient-monitoring', title: 'Centralized Patient Vitals', desc: '24/7 logging of heart rate, SpO2, and temperature with alerts.', image: '/patient-monitor.png' },
    { id: 'iot-8', label: 'RFID Inventory System', path: '/rfid-inventory-system', title: 'RFID Warehouse Control', desc: 'Automates asset tracking and stock control to reduce manual errors.', image: '/rfid-inventory.png' },
    { id: 'iot-9', label: 'GPS Asset Tracking', path: '/GPS-Asset-Tracking', title: 'Global Asset Visibility', desc: 'Satellite networking for live location updates and movement history.', image: '/gps-tracking.png' }
  ];

  const researchServices = [
    "Consultancy",
    "Pursuit of problem statement through Innovation and Novelty in Investigation",
    "Transparent, Interpretable & Responsible Reporting of Findings",
    "Ethical Compliance",
    "Knowledge Incubation",
    "Concept Development",
    "Research Skill Development"
  ];

  const researchOutcomes = [
    "Research Documentations",
    "Patents",
    "Software/Web based Intelligent Systems",
    "Statistical/Empirical Reports",
    "AI & Deep Learning based Systems",
    "Other Research and Advanced Analytics"
  ];

  const researchDomains = [
    "Image Processing/Computer Vision",
    "Natural Language Processing/LLMs",
    "Time Series Analysis",
    "Remote Sensing",
    "Education Technology",
    "Population Analysis",
    "Medical Technologies",
    "Knowledge & Information Distillation",
    "Sustainable/Renewable Technologies"
  ];

  const [activeAIItem, setActiveAIItem] = useState(aiDropdownOptions[0]);
  const [activeIoTItem, setActiveIoTItem] = useState(iotDropdownOptions[0]);

  const aboutLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/our-team' }, 
    { name: 'How We Work', path: '/how-we-work' } 
  ];

  const webDevSections = [
    { name: 'PHP Framework', items: ['Zend Framework', 'Cake PHP', 'Laravel'] },
    { name: 'MEAN Stack', items: ['MongoDB', 'Express', 'Angular', 'Node.js'] },
    { name: 'MERN Stack', items: ['MongoDB', 'Express', 'React', 'Node.js'] },
    { name: 'Open Source Technology', items: [] },
    { name: 'E-Commerce', items: ['Magento', 'Shopify', 'WooCommerce'] },
    { name: 'WordPress', items: [] },
    { name: 'CMS', items: [] }
  ];

  const solutionsList = [
    { name: 'Sports', icon: FaRunning, path: '/solutions/sports' },
    { name: 'Social Media', icon: FaShareAlt, path: '/solutions/social-media' },
    { name: 'Ride Sharing', icon: FaCar, path: '/solutions/ride-sharing' },
    { name: 'Fintech', icon: FaCoins, path: '/solutions/fintech' },
    { name: 'BFSI', icon: FaUniversity, path: '/solutions/bfsi' },
    { name: 'Food Delivery', icon: FaMotorcycle, path: '/solutions/food-delivery' },
    { name: 'Salon/Spa Booking App', icon: FaCut, path: '/solutions/salon-spa' },
    { name: 'Real Estate', icon: FaHome, path: '/solutions/real-estate' },
    { name: 'Online Ordering App', icon: FaHandPointer, path: '/solutions/online-ordering' },
    { name: 'On-Demand Service Delivery', icon: FaCogs, path: '/solutions/on-demand' },
    { name: 'eLearning', icon: FaGraduationCap, path: '/solutions/elearning' },
    { name: 'Crowdfunding', icon: FaUsers, path: '/solutions/crowdfunding' },
    { name: 'Fitness App', icon: FaHeartbeat, path: '/solutions/fitness' },
    { name: 'Logistics & Distribution', icon: FaBox, path: '/solutions/logistics' },
    { name: 'Multivendor Marketplace', icon: FaStore, path: '/solutions/marketplace' },
    { name: 'Travel Booking Engine', icon: FaCalendarAlt, path: '/solutions/travel-engine' },
    { name: 'Travel & Tourism App', icon: FaPlane, path: '/solutions/travel-tourism' },
    { name: 'Dating', icon: FaHeart, path: '/solutions/dating' },
    { name: 'Healthcare', icon: FaHandHoldingHeart, path: '/solutions/healthcare' },
    { name: 'Job Portal', icon: FaBriefcase, path: '/solutions/job-portal' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
      setNav(false);
      window.scrollTo(0, 0); 
    }
  };

  const toggleMobileSection = (section) => {
    setActiveMobileSection(activeMobileSection === section ? null : section);
  };

  const isSticky = scrolled || location.pathname !== "/";

  return (
    <>
      <nav className={`fixed w-full h-[90px] flex items-center justify-between px-6 lg:px-12 z-[100] font-sans transition-all duration-300 
        ${isSticky ? 'bg-white shadow-md' : 'bg-transparent'} text-slate-900`}> 
        
        <div onClick={() => setNav(true)} className="xl:hidden cursor-pointer p-2 z-[200]">
          <FaBars size={28} className="text-slate-900" />
        </div>

        <Link to="/" className="flex items-center xl:order-first order-last">
          <img src="/logo.png" alt="Bayes" className="h-12 md:h-16 w-auto object-contain" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden xl:flex items-center gap-4 2xl:gap-6">
          
          {/* AI DROPDOWN */}
          <div className="relative group">
            <button className="bg-purple-500 text-white px-4 2xl:px-5 py-2.5 rounded-full flex items-center gap-2 font-bold shadow-lg text-[13px] 2xl:text-sm transition-transform hover:scale-105">
              Empowering With AI <FaChevronDown size={10}/>
            </button>
            <div className="absolute top-[50px] left-0 w-[850px] bg-white text-slate-800 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-purple-500 flex overflow-hidden z-50">
               <div className="w-1/3 bg-slate-50 py-6 max-h-[450px] overflow-y-auto custom-scrollbar">
                  {aiDropdownOptions.map((item) => (
                    <div key={item.id} onMouseEnter={() => setActiveAIItem(item)} onClick={() => handleNavigation(item.path)} className={`px-8 py-5 cursor-pointer text-base font-bold flex justify-between items-center transition-all ${activeAIItem.id === item.id ? 'bg-white text-purple-600 border-l-4 border-purple-500 shadow-sm' : 'text-slate-600 hover:text-purple-500 border-l-4 border-transparent'}`}>
                      {item.label}
                      {activeAIItem.id === item.id && <FaArrowRight size={12}/>}
                    </div>
                  ))}
               </div>
               <div className="w-2/3 p-10 bg-white">
                  <div className="h-full flex flex-col animate-fadeIn">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{activeAIItem.title}</h3>
                      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 shadow-md"><img src={activeAIItem.image} alt="" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div></div>
                      <p className="text-slate-500 text-sm mb-6">{activeAIItem.desc}</p>
                      <button onClick={() => handleNavigation(activeAIItem.path)} className="text-purple-600 font-bold text-sm flex items-center gap-2 hover:underline">View Full Page <FaArrowRight/></button>
                  </div>
               </div>
            </div>
          </div>

          {/* IOT MEGA MENU */}
          <div className="relative group">
            <button className="bg-purple-600 text-white px-4 2xl:px-5 py-2.5 rounded-full flex items-center gap-2 font-bold shadow-lg text-[13px] 2xl:text-sm transition-transform hover:scale-105">
              Internet of Things <FaChevronDown size={10}/>
            </button>
            <div className="absolute top-[50px] left-[-100px] w-[850px] bg-white text-slate-800 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-purple-600 flex overflow-hidden z-50">
               <div className="w-1/3 bg-purple-50 py-6 max-h-[450px] overflow-y-auto custom-scrollbar">
                  {iotDropdownOptions.map((item) => (
                    <div key={item.id} onMouseEnter={() => setActiveIoTItem(item)} onClick={() => handleNavigation(item.path)} className={`px-8 py-3.5 cursor-pointer text-sm font-bold flex justify-between items-center transition-all ${activeIoTItem.id === item.id ? 'bg-white text-purple-600 border-l-4 border-purple-600 shadow-sm' : 'text-slate-600 hover:text-purple-600 border-l-4 border-transparent'}`}>
                      {item.label}
                      {activeIoTItem.id === item.id && <FaArrowRight size={12}/>}
                    </div>
                  ))}
               </div>
               <div className="w-2/3 p-10 bg-white flex flex-col justify-center">
                  <div className="h-full flex flex-col animate-fadeIn">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{activeIoTItem.title}</h3>
                      <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4 shadow-md border border-slate-100 bg-white flex items-center justify-center">
                        <img src={activeIoTItem.image} alt={activeIoTItem.title} className="w-full h-full object-contain p-4 transition-opacity duration-300" />
                      </div>
                      <p className="text-slate-500 text-sm mb-6 leading-relaxed">{activeIoTItem.desc}</p>
                      <button onClick={() => handleNavigation(activeIoTItem.path)} className="mt-auto text-purple-600 font-bold text-sm flex items-center gap-2 hover:underline">View IoT Hardware <FaArrowRight/></button>
                  </div>
               </div>
            </div>
          </div>

          {/* RESEARCH & INNOVATION MEGA MENU */}
          <div className="relative group">
            <button className="bg-purple-700 text-white px-4 2xl:px-5 py-2.5 rounded-full flex items-center gap-2 font-bold shadow-lg text-[13px] 2xl:text-sm transition-transform hover:scale-105">
              Research & Innovation <FaChevronDown size={10}/>
            </button>
            <div className="absolute top-[50px] left-[-200px] w-[1000px] bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-purple-700 overflow-hidden z-50 flex flex-col">
               <div className="bg-purple-50 p-6 border-b border-purple-100">
                 <h2 className="text-2xl font-bold text-purple-900 text-center">Research and Innovation</h2>
                 <p className="text-center text-purple-600 text-sm mt-1 font-medium">Driving the future of technology through advanced research and analysis</p>
               </div>
               <div className="p-8 grid grid-cols-3 gap-8 bg-white max-h-[450px] overflow-y-auto custom-scrollbar">
                 <div>
                   <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-2">
                     <FaFlask className="text-purple-600 text-lg"/>
                     <h3 className="text-lg font-bold text-slate-900">Services</h3>
                   </div>
                   <ul className="space-y-4">
                     {researchServices.map((item, idx) => (
                       <li key={idx} onClick={() => handleNavigation('/research-services')} className="group flex items-start gap-3 cursor-pointer text-sm text-slate-600 font-medium leading-relaxed hover:text-purple-700 transition-colors">
                         <FaArrowRight className="text-purple-300 mt-1 flex-shrink-0 group-hover:text-purple-600 transition-colors text-[10px]"/>
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
                 <div className="border-l border-r border-slate-100 px-6">
                   <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-2">
                     <FaMicrochip className="text-purple-600 text-lg"/>
                     <h3 className="text-lg font-bold text-slate-900">Solutions & Outcomes</h3>
                   </div>
                   <ul className="space-y-4">
                     {researchOutcomes.map((item, idx) => (
                       <li key={idx} onClick={() => handleNavigation('/research-outcomes')} className="group flex items-start gap-3 cursor-pointer text-sm text-slate-600 font-medium leading-relaxed hover:text-purple-700 transition-colors">
                         <FaArrowRight className="text-purple-300 mt-1 flex-shrink-0 group-hover:text-purple-600 transition-colors text-[10px]"/>
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-2">
                     <FaBrain className="text-purple-600 text-lg"/>
                     <h3 className="text-lg font-bold text-slate-900">Domains Covered</h3>
                   </div>
                   <ul className="space-y-4">
                     {researchDomains.map((item, idx) => (
                       <li key={idx} onClick={() => handleNavigation('/research-domains')} className="group flex items-start gap-3 cursor-pointer text-sm text-slate-600 font-medium leading-relaxed hover:text-purple-700 transition-colors">
                         <FaArrowRight className="text-purple-300 mt-1 flex-shrink-0 group-hover:text-purple-600 transition-colors text-[10px]"/>
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
            </div>
          </div>

          <ul className="flex items-center gap-4 2xl:gap-6 text-[13px] 2xl:text-[14px] font-bold tracking-wide text-slate-900">
            <li onClick={() => handleNavigation('/')} className="hover:text-purple-600 cursor-pointer py-4">Home</li>
            
            {/* CLEANED UP ABOUT US MENU */}
            <li className="relative group cursor-pointer hover:text-purple-600 flex items-center gap-1 py-4">
              About <FaChevronDown size={10}/>
              <div className="absolute top-[50px] left-0 w-[220px] bg-white text-slate-800 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-purple-500 overflow-hidden z-50">
                <div className="flex flex-col py-2">
                   {aboutLinks.map(link => (
                     <button key={link.name} onClick={() => handleNavigation(link.path)} className="w-full text-left px-6 py-4 hover:bg-purple-50 hover:text-purple-700 border-l-4 border-transparent hover:border-purple-500 font-bold transition-all text-[14px]">
                       {link.name}
                     </button>
                   ))}
                </div>
              </div>
            </li>

            <li className="relative group cursor-pointer hover:text-purple-600 flex items-center gap-1 py-4">
              <span onClick={() => handleNavigation('/services')}>Services</span> <FaChevronDown size={10}/>
              <div className="absolute top-[50px] right-[-100px] w-[1000px] bg-white text-gray-800 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-purple-500 p-8 flex cursor-default z-50 max-h-[450px] overflow-y-auto custom-scrollbar">
                <div className="w-1/3 pr-6 space-y-8">
                  <div>
                    <h4 onClick={() => handleNavigation('/ui-ux-design')} className="flex items-center gap-3 font-bold text-lg text-slate-900 mb-4 cursor-pointer hover:text-purple-600"><FaLaptopCode className="text-purple-500"/> UI/UX Design</h4>
                    <ul className="space-y-2 pl-8 text-sm text-slate-500 font-medium">
                      <li onClick={() => handleNavigation('/ui-ux-design')} className="hover:text-purple-600 cursor-pointer flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"></span> UX Prototyping</li>
                    </ul>
                  </div>
                </div>

                <div className="w-1/3 px-6 border-l border-r border-slate-100">
                   <h4 onClick={() => handleNavigation('/web-development')} className="flex items-center gap-3 font-bold text-lg text-slate-900 mb-6 cursor-pointer hover:text-purple-600"><FaCode className="text-purple-500"/> Web Development</h4>
                   <div className="space-y-2">
                     {webDevSections.map((sec) => (
                       <div key={sec.name} className="border-b border-slate-50 pb-2">
                         <div className="flex justify-between items-center py-2 cursor-pointer font-bold text-slate-800 hover:text-purple-600" onClick={() => setActiveWebDev(activeWebDev === sec.name ? '' : sec.name)}>
                           <span onClick={(e) => { e.stopPropagation(); handleNavigation('/web-development'); }}>{sec.name}</span>
                           {activeWebDev === sec.name ? <FaMinus size={10} className="text-slate-400"/> : <FaPlus size={10} className="text-slate-400"/>}
                         </div>
                         {activeWebDev === sec.name && sec.items.length > 0 && (
                           <ul className="pl-4 py-2 space-y-2 text-sm text-slate-500 font-medium animate-fadeIn">
                             {sec.items.map(item => (
                               <li key={item} onClick={() => handleNavigation('/web-development')} className="hover:text-purple-600 cursor-pointer flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"></span> {item}</li>
                             ))}
                           </ul>
                         )}
                       </div>
                     ))}
                   </div>
                </div>

                <div className="w-1/3 pl-6 space-y-8">
                  <div>
                    <h4 onClick={() => handleNavigation('/mobile-app-development')} className="flex items-center gap-3 font-bold text-lg text-slate-900 mb-4 cursor-pointer hover:text-purple-600"><FaMobileAlt className="text-purple-500"/> Mobile App Development</h4>
                    <ul className="space-y-2 pl-8 text-sm text-slate-500 font-medium">
                      {['Hybrid', 'Swift', 'React Native', 'Kotlin', 'Flutter', 'Java', 'Native App Development', 'Objective-C'].map(item => (
                        <li key={item} onClick={() => handleNavigation('/mobile-app-development')} className="hover:text-purple-600 cursor-pointer flex items-center gap-2"><span className="w-1 h-1 bg-purple-400 rounded-full"></span> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="relative group cursor-pointer hover:text-purple-600 flex items-center gap-1 py-4">
              <span onClick={() => handleNavigation('/services')}>Solutions</span> <FaChevronDown size={10}/>
              <div className="absolute top-[50px] right-[-50px] w-[900px] bg-white text-gray-800 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-purple-500 p-10 cursor-default z-50 max-h-[450px] overflow-y-auto custom-scrollbar">
                <div className="grid grid-rows-7 grid-flow-col gap-x-8 gap-y-6">
                  {solutionsList.map((solution, index) => (
                    <div key={index} onClick={() => handleNavigation(solution.path)} className="flex items-center gap-4 group/sol cursor-pointer">
                       <solution.icon className="text-purple-500 text-[22px] group-hover/sol:text-purple-600 transition-colors" />
                       <span className="font-bold text-[15px] text-slate-800 group-hover/sol:text-purple-600 transition-colors">{solution.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <button onClick={() => setIsHireModalOpen(true)} className="bg-slate-900 text-white px-8 py-2.5 rounded-full font-bold hover:bg-purple-700 transition-all shadow-lg text-sm">Hire Us ↗</button>
        </div>
      </nav>

      <HireUsModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />

      {/* MOBILE SIDEBAR */}
      <div className={`fixed top-0 left-0 h-full w-full bg-white z-[300] transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
          <div className="flex flex-col p-6 text-slate-900 font-bold h-full min-h-screen">
            <div className="flex justify-between items-center mb-10">
              <FaTimes onClick={() => setNav(false)} size={30} className="text-purple-600 cursor-pointer" />
              <img src="/logo.png" alt="Bayes" className="h-12 w-auto" />
            </div>
            <div className="space-y-6 pb-20">
              <button onClick={() => handleNavigation('/')} className="w-full text-left text-xl py-3 border-b border-purple-50 text-purple-600 transition-colors">Home</button>
              
              <button onClick={() => toggleMobileSection('ai')} className="w-full flex justify-between items-center text-xl py-3 border-b border-purple-50 text-purple-600">AI Solutions <FaChevronDown size={14}/></button>
              {activeMobileSection === 'ai' && (
                <div className="bg-purple-50 rounded-lg p-2 space-y-1 max-h-[40vh] overflow-y-auto custom-scrollbar">
                  {aiDropdownOptions.map(item => (
                    <div key={item.id} onClick={() => handleNavigation(item.path)} className="p-4 text-base font-medium text-purple-800 hover:bg-white rounded-md cursor-pointer">{item.label}</div>
                  ))}
                </div>
              )}

              <button onClick={() => toggleMobileSection('iot')} className="w-full flex justify-between items-center text-xl py-3 border-b border-purple-50 text-purple-600">Internet of Things <FaChevronDown size={14}/></button>
              {activeMobileSection === 'iot' && (
                <div className="bg-purple-50 rounded-lg p-2 space-y-1 max-h-[40vh] overflow-y-auto custom-scrollbar">
                  {iotDropdownOptions.map(item => (
                    <div key={item.id} onClick={() => handleNavigation(item.path)} className="p-3 text-sm font-normal text-purple-800 hover:bg-white rounded-md cursor-pointer">{item.label}</div>
                  ))}
                </div>
              )}

              <button onClick={() => toggleMobileSection('research')} className="w-full flex justify-between items-center text-xl py-3 border-b border-purple-50 text-purple-700">Research & Innovation <FaChevronDown size={14}/></button>
              {activeMobileSection === 'research' && (
                <div className="bg-purple-50 rounded-lg p-3 space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
                  <div>
                    <h3 className="font-bold text-purple-900 border-b border-purple-200 pb-2 mb-2">Services</h3>
                    {researchServices.map((item, idx) => (
                      <div key={idx} onClick={() => handleNavigation('/research-services')} className="p-2 text-sm font-medium text-slate-600 hover:text-purple-700 hover:bg-white rounded-md cursor-pointer leading-tight">{item}</div>
                    ))}
                  </div>

                  <div>
                    <h3 className="font-bold text-purple-900 border-b border-purple-200 pb-2 mb-2">Outcomes & Solutions</h3>
                    {researchOutcomes.map((item, idx) => (
                      <div key={idx} onClick={() => handleNavigation('/research-outcomes')} className="p-2 text-sm font-medium text-slate-600 hover:text-purple-700 hover:bg-white rounded-md cursor-pointer leading-tight">{item}</div>
                    ))}
                  </div>

                  <div>
                    <h3 className="font-bold text-purple-900 border-b border-purple-200 pb-2 mb-2">Domains</h3>
                    {researchDomains.map((item, idx) => (
                      <div key={idx} onClick={() => handleNavigation('/research-domains')} className="p-2 text-sm font-medium text-slate-600 hover:text-purple-700 hover:bg-white rounded-md cursor-pointer leading-tight">{item}</div>
                    ))}
                  </div>
                </div>
              )}

              {/* CLEANED UP ABOUT US IN MOBILE MENU */}
              <button onClick={() => toggleMobileSection('about')} className="w-full flex justify-between items-center text-xl py-3 border-b border-purple-50 text-purple-600">About <FaChevronDown size={14}/></button>
              {activeMobileSection === 'about' && (
                <div className="bg-purple-50 rounded-lg p-2 space-y-1 max-h-[40vh] overflow-y-auto custom-scrollbar">
                    {aboutLinks.map(link => (
                      <button key={link.name} onClick={() => handleNavigation(link.path)} className="w-full text-left p-4 text-base font-medium text-purple-800 hover:bg-white rounded-md transition-colors">{link.name}</button>
                    ))}
                </div>
              )}

              <button onClick={() => toggleMobileSection('services')} className="w-full flex justify-between items-center text-xl py-3 border-b border-purple-50 text-purple-600">Services <FaChevronDown size={14}/></button>
              {activeMobileSection === 'services' && (
                <div className="bg-slate-50 rounded-lg p-4 space-y-4 max-h-[40vh] overflow-y-auto custom-scrollbar">
                  <p onClick={() => handleNavigation('/ui-ux-design')} className="text-sm font-normal text-slate-700 hover:text-purple-900 cursor-pointer">UI/UX Design</p>
                  <p onClick={() => handleNavigation('/web-development')} className="text-sm font-normal text-slate-700 hover:text-purple-900 cursor-pointer">Web Development</p>
                  <p onClick={() => handleNavigation('/mobile-app-development')} className="text-sm font-normal text-slate-700 hover:text-purple-900 cursor-pointer">Mobile App Development</p>
                </div>
              )}

              <button onClick={() => toggleMobileSection('solutions')} className="w-full flex justify-between items-center text-xl py-3 border-b border-purple-50 text-purple-600">Solutions <FaChevronDown size={14}/></button>
              {activeMobileSection === 'solutions' && (
                <div className="bg-slate-50 rounded-lg p-2 space-y-1 max-h-80 overflow-y-auto custom-scrollbar">
                  {solutionsList.map((sol, index) => (
                    <button key={index} onClick={() => handleNavigation(sol.path)} className="w-full flex items-center gap-3 text-left p-3 text-sm font-normal text-slate-800 hover:bg-white rounded-md border-b border-slate-100/50 last:border-0">
                      <sol.icon className="text-purple-600 text-lg flex-shrink-0" /> {sol.name}
                    </button>
                  ))}
                </div>
              )}

            </div>
            <button onClick={() => {setNav(false); setIsHireModalOpen(true);}} className="w-full bg-purple-600 text-white py-4 rounded-xl shadow-lg shadow-purple-200 text-xl font-bold mt-auto mb-6">Hire Us</button>
          </div>
      </div>
      <style>{`.custom-scrollbar::-webkit-scrollbar { width: 4px; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #d8b4fe; border-radius: 10px; }`}</style>
    </>
  );
};

export default Navbar;