import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';

const ContactSection = () => {
  const stats = [
    { val: "800+", label: "In house Experts" },
    { val: "25+", label: "Awards Across the Globe" },
    { val: "1500+", label: "Customers Worldwide" },
    { val: "4500+", label: "5 Star Reviews" },
    { val: "MSME", label: "National MSME Award 2022", isBadge: true },
    { val: "15+", label: "Years in Service" }
  ];

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row">
      {/* --- LEFT SIDE: STATS & SOCIALS --- */}
      <div className="lg:w-1/2 bg-gradient-to-br from-[#1e60f2] to-[#4a90e2] p-12 md:p-20 text-white">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          Let's Build Something <br /> Extraordinary Together!
        </h2>
        <p className="text-blue-50 mb-16 max-w-lg opacity-90">
          Get a wide range of expert services from web development, software solutions, and digital strategies that drive measurable business growth.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-4xl font-bold mb-1">{stat.val}</span>
              <span className="text-sm opacity-80 uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Follow Us */}
        <div className="mb-12">
          <h4 className="text-xl font-bold mb-6">Follow Us:</h4>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all cursor-pointer">
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <h4 className="text-2xl font-bold mb-2">What's Next?</h4>
          <p className="text-blue-100 italic">Our Consultants will reply back to you within 7 hours or less</p>
        </div>
      </div>

      {/* --- RIGHT SIDE: FORM --- */}
      <div className="lg:w-1/2 bg-white p-12 md:p-20 flex flex-col justify-center">
        <h3 className="text-4xl font-bold text-gray-800 mb-2">Ready To Get Started?</h3>
        <p className="text-gray-500 mb-12">Share your goals, and we'll help you find the best path.</p>

        <form className="space-y-6">
          <input type="text" placeholder="Full Name*" className="w-full border-b-2 border-gray-100 py-4 outline-none focus:border-blue-500 transition-all" />
          <input type="email" placeholder="Email*" className="w-full border-b-2 border-gray-100 py-4 outline-none focus:border-blue-500 transition-all" />
          <input type="tel" placeholder="Phone*" className="w-full border-b-2 border-gray-100 py-4 outline-none focus:border-blue-500 transition-all" />
          <input type="text" placeholder="Website" className="w-full border-b-2 border-gray-100 py-4 outline-none focus:border-blue-500 transition-all" />
          <textarea placeholder="Message" rows="3" className="w-full border-b-2 border-gray-100 py-4 outline-none focus:border-blue-500 transition-all resize-none"></textarea>
          
          <button className="bg-[#4a90e2] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-blue-600 transition-all shadow-lg">
            Submit <FaArrowRight />
          </button>
        </form>

        <p className="mt-8 text-[10px] text-gray-400 leading-relaxed uppercase tracking-wider">
          *Disclaimer: By submitting this form, you agree to follow-up communication from Webskitters via email, based on your enquiry. We respect your privacy and can opt out of these communications anytime.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;