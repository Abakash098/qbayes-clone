import React, { useState } from 'react';
import { 
  FaBars, FaTimes, FaChevronDown, FaLaptopCode, FaMobileAlt, FaBrain, FaPencilRuler, 
  FaBullhorn, FaGamepad, FaWifi, FaPlus, FaMinus, FaRunning, FaShareAlt, FaCar, 
  FaCoins, FaUniversity, FaHamburger, FaCut, FaHome, FaShoppingBasket, FaHandHoldingHeart,
  FaGraduationCap, FaDonate, FaDumbbell, FaTruck, FaStore, FaTicketAlt, FaPlane, 
  FaHeart, FaHeartbeat, FaBriefcase 
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="absolute w-full h-[90px] flex justify-between items-center px-4 lg:px-10 bg-transparent text-white z-[100] font-sans">
      
      {/* --- 1. LOGO --- */}
      <div className="flex flex-col cursor-pointer">
        <h1 className="text-2xl md:text-3xl font-bold italic tracking-tighter">
          <span className="text-blue-400">Web</span>skitters
        </h1>
        <span className="text-[10px] text-gray-300 tracking-widest uppercase hidden md:block">
          A National Award Winning Company
        </span>
      </div>

      {/* --- 2. DESKTOP MENU --- */}
      <ul className="hidden xl:flex items-center space-x-6 text-[15px] font-medium">
        
        {/* --- A. EMPOWERING WITH AI --- */}
        <li className="relative group">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105">
            Empowering With AI <FaChevronDown size={10} />
          </button>
          <div className="absolute top-[60px] left-0 w-[600px] bg-white text-gray-800 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-orange-500 p-6 grid grid-cols-2 gap-6">
            <ul className="space-y-3 border-r border-gray-100 pr-4">
              {['AI Services & Solutions', 'AI Development', 'AI Consulting', 'AI Chatbot Development'].map((item, index) => (
                <li key={index} className="flex justify-between items-center hover:text-orange-500 cursor-pointer p-2 rounded hover:bg-orange-50 transition">{item}</li>
              ))}
            </ul>
            <div className="bg-gray-50 rounded-xl p-3">
              <h4 className="font-bold text-lg mb-2">AI Development</h4>
              <div className="rounded-lg overflow-hidden h-[100px] mb-3 bg-blue-900/20"></div>
              <p className="text-xs text-gray-600">Build powerful, custom AI applications...</p>
            </div>
          </div>
        </li>

        {/* --- B. ABOUT MENU --- */}
        <li className="relative group h-full flex items-center cursor-pointer hover:text-orange-500">
           <span className="flex items-center gap-1">About <FaChevronDown size={10}/></span>
           <div className="absolute top-[60px] left-0 w-[220px] bg-white text-gray-800 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-orange-500 py-2">
              {['About Us', 'Our Team', 'How We Work', 'Awards', 'Life @ Webskitters'].map(item => (
                <div key={item} className="px-6 py-3 hover:bg-gray-100 hover:text-orange-500 transition text-sm font-semibold border-b border-gray-50 last:border-0">
                  {item}
                </div>
              ))}
           </div>
        </li>

        {/* --- C. SERVICES MEGA MENU (From Previous Step) --- */}
        <li className="relative group h-full flex items-center cursor-pointer hover:text-orange-500">
          <span className="flex items-center gap-1">Services <FaChevronDown size={10}/></span>
          <div className="absolute top-[60px] left-[-200px] w-[1000px] bg-white text-gray-800 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-orange-500 p-8 grid grid-cols-3 gap-8 text-sm">
            <div className="space-y-6">
              <div><h3 className="flex items-center gap-2 font-bold text-base mb-2"><FaPencilRuler className="text-blue-400"/> UI/UX Design</h3><p className="pl-6 text-xs text-gray-500 hover:text-orange-500">• UX Prototyping</p></div>
              <div><h3 className="flex items-center gap-2 font-bold text-base mb-2"><FaBullhorn className="text-blue-400"/> Digital Marketing</h3><ul className="pl-6 space-y-1 text-gray-500 text-xs">{['SEO', 'SMM', 'PPC', 'ORM'].map(i=><li key={i} className="hover:text-orange-500">• {i}</li>)}</ul></div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
               <h3 className="flex items-center gap-2 font-bold text-lg mb-4"><FaLaptopCode className="text-blue-400"/> Web Development</h3>
               <div className="font-bold text-gray-800 mb-2">PHP Framework</div>
               <ul className="pl-4 space-y-1 text-xs text-gray-500 border-l-2 ml-1 mb-4">{['Zend', 'Cake PHP', 'Laravel'].map(i=><li key={i}>• {i}</li>)}</ul>
               {['MEAN Stack', 'MERN Stack', 'Wordpress'].map(i=><div key={i} className="flex justify-between py-2 border-b text-xs font-bold text-gray-700">{i} <FaPlus size={8}/></div>)}
            </div>
            <div className="space-y-6">
               <div><h3 className="flex items-center gap-2 font-bold text-base mb-2"><FaMobileAlt className="text-blue-400"/> Mobile App</h3><ul className="pl-6 text-xs text-gray-500 space-y-1">{['Swift', 'React Native', 'Flutter', 'Kotlin'].map(i=><li key={i} className="hover:text-orange-500">• {i}</li>)}</ul></div>
            </div>
          </div>
        </li>

        {/* --- D. SOLUTIONS MEGA MENU --- */}
        <li className="relative group h-full flex items-center cursor-pointer hover:text-orange-500">
           <span className="flex items-center gap-1">Solutions <FaChevronDown size={10}/></span>
           
           <div className="absolute top-[60px] left-[-400px] w-[1100px] bg-white text-gray-800 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-orange-500 p-10 grid grid-cols-3 gap-10">
              
              {/* Column 1 */}
              <div className="space-y-5">
                 {[
                   { icon: FaRunning, text: 'Sports' },
                   { icon: FaShareAlt, text: 'Social Media' },
                   { icon: FaCar, text: 'Ride Sharing' },
                   { icon: FaCoins, text: 'Fintech' },
                   { icon: FaUniversity, text: 'BFSI' },
                   { icon: FaHamburger, text: 'Food Delivery' },
                   { icon: FaCut, text: 'Salon/Spa Booking App' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition group/item">
                      <item.icon className="text-blue-300 text-xl group-hover/item:text-orange-500"/>
                      <span className="font-medium">{item.text}</span>
                   </div>
                 ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-5">
                 {[
                   { icon: FaHome, text: 'Real Estate' },
                   { icon: FaShoppingBasket, text: 'Online Ordering App' },
                   { icon: FaHandHoldingHeart, text: 'On-Demand Service' },
                   { icon: FaGraduationCap, text: 'eLearning' },
                   { icon: FaDonate, text: 'Crowdfunding' },
                   { icon: FaDumbbell, text: 'Fitness App' },
                   { icon: FaTruck, text: 'Logistics & Distribution' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition group/item">
                      <item.icon className="text-blue-300 text-xl group-hover/item:text-orange-500"/>
                      <span className="font-medium">{item.text}</span>
                   </div>
                 ))}
              </div>

              {/* Column 3 */}
              <div className="space-y-5">
                 {[
                   { icon: FaStore, text: 'Multivendor Marketplace' },
                   { icon: FaTicketAlt, text: 'Travel Booking Engine' },
                   { icon: FaPlane, text: 'Travel & Tourism App' },
                   { icon: FaHeart, text: 'Dating' },
                   { icon: FaHeartbeat, text: 'Healthcare' },
                   { icon: FaBriefcase, text: 'Job Portal' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition group/item">
                      <item.icon className="text-blue-300 text-xl group-hover/item:text-orange-500"/>
                      <span className="font-medium">{item.text}</span>
                   </div>
                 ))}
              </div>

           </div>
        </li>

        <li className="hover:text-orange-500 cursor-pointer">Case Studies</li>
        <li className="hover:text-orange-500 cursor-pointer">Blog</li>
      </ul>

      {/* --- 3. HIRE US BUTTON --- */}
      <div className="hidden xl:flex">
         <button className="border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-2.5 rounded-full font-bold hover:bg-white hover:text-black transition duration-300 text-sm tracking-wide">
            Hire Us ↗
         </button>
      </div>

      {/* --- 4. MOBILE HAMBURGER --- */}
      <div onClick={handleNav} className="xl:hidden z-10 cursor-pointer p-2">
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* --- 5. MOBILE SIDEBAR --- */}
      <div className={nav ? 'fixed right-0 top-0 w-[85%] h-full bg-[#0b1c38] z-50 shadow-2xl transition-all duration-500 overflow-y-auto' : 'fixed right-[-100%] transition-all duration-500'}>
        <div className="flex flex-col p-8 pt-24 space-y-6">
          <button className="bg-orange-500 text-white w-full py-3 rounded-lg font-bold">Empowering With AI</button>
          {['Home', 'About Us', 'Services', 'Solutions', 'Case Studies', 'Contact'].map(item => (
            <div key={item} className="border-b border-gray-700 pb-2 text-lg font-bold text-white">{item}</div>
          ))}
          <button className="border border-white text-white w-full py-3 rounded-lg font-bold mt-4">Hire Us</button>
        </div>
      </div>

    </div>
  );
};

export default Navbar;