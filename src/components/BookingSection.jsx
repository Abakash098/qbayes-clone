import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BookingSection = () => {
  // Simple calendar state
  const [currentMonth, setCurrentMonth] = useState('February 2026');
  
  // Fake calendar days generator
  const renderCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 28; i++) {
      days.push(
        <div 
          key={i} 
          className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-medium cursor-pointer hover:bg-blue-100 transition-colors
            ${i === 15 ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-600'}
          `}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <section id="booking-section" className="py-24 bg-gradient-to-b from-white to-blue-50 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Let's Talk: Discovery & <span className="text-[#00c2ff]">Alignment Meeting</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Get all your questions answered by our business development team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* --- LEFT SIDE: FORM --- */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Ready To Get Started?</h3>
            <p className="text-gray-500 mb-8">Share your goals, and we'll help you design the right digital path.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="First Name *" className="w-full bg-gray-50 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-200 transition" />
                <input type="text" placeholder="Last Name *" className="w-full bg-gray-50 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-200 transition" />
              </div>
              <input type="email" placeholder="Email *" className="w-full bg-gray-50 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-200 transition" />
              <input type="tel" placeholder="Phone *" className="w-full bg-gray-50 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-200 transition" />
              <textarea placeholder="Message *" rows="4" className="w-full bg-gray-50 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-200 transition"></textarea>
              
              <button type="button" className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition shadow-lg">
                Submit Request
              </button>
            </form>
          </div>

          {/* --- RIGHT SIDE: CALENDAR --- */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col">
             <h3 className="text-3xl font-bold text-gray-900 mb-2">Book A Schedule</h3>
             <p className="text-gray-500 mb-8">Select a Date and Time for the Meeting at Your Convenience</p>
             
             {/* Calendar UI */}
             <div className="bg-[#f8faff] p-8 rounded-2xl flex-1">
                
                {/* Month Header */}
                <div className="flex justify-between items-center mb-8">
                  <button className="p-2 hover:bg-gray-200 rounded-full transition"><FaChevronLeft className="text-gray-600"/></button>
                  <h4 className="text-xl font-bold text-gray-800">{currentMonth}</h4>
                  <button className="p-2 hover:bg-gray-200 rounded-full transition"><FaChevronRight className="text-gray-600"/></button>
                </div>

                {/* Days Header */}
                <div className="grid grid-cols-7 text-center mb-4 text-gray-400 text-sm font-semibold">
                  <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-y-4 justify-items-center">
                  {renderCalendarDays()}
                </div>

                {/* Time Slots (Mock) */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                   <h5 className="text-sm font-bold text-gray-700 mb-4">Available Slots</h5>
                   <div className="flex flex-wrap gap-3">
                     {['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'].map(time => (
                       <button key={time} className="px-4 py-2 bg-white border border-blue-200 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-600 hover:text-white transition">
                         {time}
                       </button>
                     ))}
                   </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;