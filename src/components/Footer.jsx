import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#040C1D] text-white py-16 px-6 border-t border-white/5 font-sans relative">
      <div className="max-w-[1300px] mx-auto">
        
        {/* --- Top Row: Logo and Socials --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            {/* The subtitle paragraph below the logo has been removed */}
            <h2 className="text-4xl font-black text-[#4A90E2] tracking-tight">QBayes</h2>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            {['f', 't', 'i', 'y', 'in'].map((social) => (
              <a 
                key={social} 
                href={`https://${social}.com`} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#4A90E2] hover:text-white text-slate-300 cursor-pointer transition-all duration-300"
              >
                <span className="text-sm font-bold uppercase">{social}</span>
              </a>
            ))}
          </div>
        </div>

        {/* --- Middle Row: Navigation Links --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          
          {/* Company Column */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><Link to="/" className="hover:text-[#4A90E2] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#4A90E2] transition-colors">About Us</Link></li>
              <li><Link to="/awards" className="hover:text-[#4A90E2] transition-colors">Awards</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><Link to="/services" className="hover:text-[#4A90E2] transition-colors">Solutions</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#4A90E2] transition-colors">Case Studies</Link></li>
              <li><Link to="/resources" className="hover:text-[#4A90E2] transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Life @ QBayes Column */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Life @ QBayes</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><Link to="/career" className="hover:text-[#4A90E2] transition-colors">Career</Link></li>
              <li><Link to="/csr" className="hover:text-[#4A90E2] transition-colors">CSR</Link></li>
              <li><Link to="/contact" className="hover:text-[#4A90E2] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Awards/Recognitions Column */}
          <div className="flex flex-col gap-6 pt-2">
            <div className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
               <span className="font-black text-xl tracking-tighter">FORBES</span>
            </div>
            <div className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
               <span className="font-black text-xl tracking-tighter">CRISIL</span>
            </div>
          </div>

        </div>
      </div>

      {/* --- Floating Chat Icon --- */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <div className="w-14 h-14 bg-[#FF7A00] rounded-full flex items-center justify-center shadow-lg shadow-[#FF7A00]/30 cursor-pointer hover:bg-[#E66E00] hover:scale-105 transition-all duration-300">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/>
          </svg>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;