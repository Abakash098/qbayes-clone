import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HireUsModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM");

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!isOpen) return null;

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"];
  const days = Array.from({ length: 14 }, (_, i) => 15 + i); // Feb 15 - Feb 28

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Sending date and slot as separate properties to match the backend
    const finalData = {
      ...formData,
      selected_date: selectedDate, 
      selected_slot: selectedSlot
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData)
      });

      if (response.ok) {
        alert(`✅ Success! Data saved for Feb ${selectedDate} at ${selectedSlot}`);
        setFormData({ first_name: '', last_name: '', email: '', phone: '', message: '' });
        onClose();
      } else {
        const errorData = await response.json();
        alert(`❌ Error: ${errorData.error}`);
      }
    } catch (error) {
      alert("❌ Server is not running. Did you start your backend server?");
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white rounded-3xl w-full max-w-6xl max-h-[95vh] overflow-y-auto shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 z-10 text-gray-400 hover:text-red-500 bg-gray-100 rounded-full p-2">
          <FaTimes size={20} />
        </button>

        <div className="p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT: FORM */}
            <div>
              <h2 className="text-3xl font-bold text-[#0b1c38] mb-2">Ready To Get Started?</h2>
              <p className="text-gray-500 mb-8">Fill the details to sync with your selected time.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name *" className="w-full bg-gray-50 p-4 rounded-xl outline-none" value={formData.first_name} onChange={(e) => setFormData({...formData, first_name: e.target.value})} required />
                  <input type="text" placeholder="Last Name *" className="w-full bg-gray-50 p-4 rounded-xl outline-none" value={formData.last_name} onChange={(e) => setFormData({...formData, last_name: e.target.value})} required />
                </div>
                <input type="email" placeholder="Email *" className="w-full bg-gray-50 p-4 rounded-xl outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                <input type="text" placeholder="Phone *" className="w-full bg-gray-50 p-4 rounded-xl outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
                <textarea rows="3" placeholder="Message *" className="w-full bg-gray-50 p-4 rounded-xl outline-none resize-none" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
                
                <button type="submit" className="w-full bg-[#0b1c38] text-white font-bold py-4 rounded-xl hover:bg-purple-600 transition-all shadow-lg">
                  Submit & Book Slot
                </button>
              </form>
            </div>

            {/* RIGHT: DATE BAR & SLOTS */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-[#0b1c38] mb-6">Select Date & Time</h2>
              
              <div className="flex gap-3 overflow-x-auto pb-4 mb-8 custom-scrollbar">
                {days.map(day => (
                  <button key={day} type="button" onClick={() => setSelectedDate(day)} className={`flex-shrink-0 w-14 h-20 rounded-2xl flex flex-col items-center justify-center transition-all ${selectedDate === day ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-200'}`}>
                    <span className="text-xs uppercase font-bold">Feb</span>
                    <span className="text-xl font-black">{day}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map(slot => (
                  <button key={slot} type="button" onClick={() => setSelectedSlot(slot)} className={`p-4 rounded-xl font-bold transition-all border-2 ${selectedSlot === slot ? 'bg-white border-purple-600 text-purple-600' : 'bg-white border-transparent text-gray-500 hover:border-gray-300'}`}>
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireUsModal;