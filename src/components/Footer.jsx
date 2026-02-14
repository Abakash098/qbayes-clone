import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0b1c38] text-white pt-16 pb-12">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Brand Section */}
        <div className="mb-16 border-b border-white/5 pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col">
            <h1 className="text-4xl font-black italic text-[#4a90e2] tracking-tighter">
              Web<span className="text-white">skitters</span>
            </h1>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
              A National Award Winning Company
            </span>
          </div>
          
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4a90e2] transition-all cursor-pointer">
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li className="text-white font-bold mb-6 text-base">Company</li>
            <li className="hover:text-white cursor-pointer transition-colors">Home</li>
            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-white cursor-pointer transition-colors">Awards</li>
          </ul>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li className="text-white font-bold mb-6 text-base">Services</li>
            <li className="hover:text-white cursor-pointer transition-colors">Solutions</li>
            <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
            <li className="hover:text-white cursor-pointer transition-colors">Resources</li>
          </ul>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li className="text-white font-bold mb-6 text-base">Life @ Webskitters</li>
            <li className="hover:text-white cursor-pointer transition-colors">Career</li>
            <li className="hover:text-white cursor-pointer transition-colors">CSR</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
          </ul>
          <div className="flex flex-col items-start gap-6">
            <img src="https://via.placeholder.com/120x45/ffffff/000000?text=Forbes" alt="Forbes" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://via.placeholder.com/120x45/ffffff/000000?text=CRISIL" alt="CRISIL" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] border-t border-white/5 pt-10 gap-4">
          <p>© Copyright 2026 Webskitters. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">T&C</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;