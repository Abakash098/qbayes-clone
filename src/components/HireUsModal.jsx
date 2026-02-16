import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ContactSection from './ContactSection'; // Reusing your existing Contact Section

const HireUsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Simple state for the visual calendar
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM");

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl animate-fadeIn">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-gray-400 hover:text-red-500 transition-colors bg-white rounded-full p-2 shadow-sm"
        >
          <FaTimes size={24} />
        </button>

        <div className="p-6 md:p-12">
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            
            {/* --- LEFT COLUMN: FORM --- */}
            <div>
              <h2 className="text-3xl font-bold text-[#0b1c38] mb-2">Ready To Get Started?</h2>
              <p className="text-gray-500 mb-8">Share your goals, and we'll help you design the right digital path.</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name *" className="w-full bg-gray-50 p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-500 outline-none text-gray-800" />
                  <input type="text" placeholder="Last Name *" className="w-full bg-gray-50 p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-500 outline-none text-gray-800" />
                </div>
                <input type="email" placeholder="Email *" className="w-full bg-gray-50 p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-500 outline-none text-gray-800" />
                <input type="text" placeholder="Phone *" className="w-full bg-gray-50 p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-500 outline-none text-gray-800" />
                <textarea rows="4" placeholder="Message *" className="w-full bg-gray-50 p-4 rounded-xl border-none focus:ring-2 focus:ring-orange-500 outline-none resize-none text-gray-800"></textarea>
                
                <button className="w-full bg-[#0b1c38] text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg">
                  Submit Request
                </button>
              </form>
            </div>

            {/* --- RIGHT COLUMN: CALENDAR --- */}
            <div className="bg-white">
              <h2 className="text-3xl font-bold text-[#0b1c38] mb-2">Book A Schedule</h2>
              <p className="text-gray-500 mb-8">Select a Date and Time for the Meeting at Your Convenience</p>

              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                {/* Month Header */}
                <div className="flex justify-between items-center mb-6 px-2">
                  <button className="text-gray-400 hover:text-black"><FaChevronLeft /></button>
                  <h3 className="text-xl font-bold text-[#0b1c38]">February 2026</h3>
                  <button className="text-gray-400 hover:text-black"><FaChevronRight /></button>
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-2 text-center text-sm mb-6">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                    <div key={day} className="text-gray-400 font-bold mb-2">{day}</div>
                  ))}
                  
                  {/* Calendar Dates Logic (Simplified Visual) */}
                  {Array.from({ length: 3 }).map((_, i) => <div key={`empty-${i}`}></div>)} 
                  
                  {Array.from({ length: 28 }).map((_, i) => {
                    const day = i + 1;
                    const isSelected = day === selectedDate;
                    return (
                      <button 
                        key={day} 
                        onClick={() => setSelectedDate(day)}
                        className={`h-10 w-10 mx-auto rounded-full flex items-center justify-center transition-all font-medium
                          ${isSelected 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                            : 'text-gray-600 hover:bg-gray-200'
                          }`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>

                {/* Slots */}
                <h4 className="font-bold text-[#0b1c38] mb-3 text-sm uppercase tracking-wide">Available Slots</h4>
                <div className="flex flex-wrap gap-3">
                  {['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'].map(slot => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-4 py-2 rounded-lg text-sm font-bold border transition-all
                        ${selectedSlot === slot 
                          ? 'bg-blue-50 border-blue-500 text-blue-600' 
                          : 'bg-white border-gray-200 text-gray-500 hover:border-blue-300'
                        }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* --- BOTTOM SECTION: CONTACT INFO --- */}
          <div className="pt-8 border-t border-gray-100">
             <h3 className="text-center text-gray-400 text-sm uppercase tracking-widest mb-6">Or Contact Us Directly</h3>
             {/* This renders your existing contact cards inside the popup */}
             <div className="scale-90 origin-top">
                <ContactSection /> 
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HireUsModal;