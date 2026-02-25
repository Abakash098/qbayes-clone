import React, { useState } from 'react';

const BookingSection = () => {
  const [formData, setFormData] = useState({ 
    first_name: '', 
    last_name: '', 
    email: '', 
    phone: '', 
    message: '' 
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      /**
       * IMPORTANT FOR LIVE DEPLOYMENT:
       * Replace 'https://your-backend-service.onrender.com' with your actual live backend URL.
       * Do not use 'http://localhost:5000' for the Netlify version.
       */
      const LIVE_BACKEND_URL = 'https://your-backend-service.onrender.com/api/contact';

      const response = await fetch(LIVE_BACKEND_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        // Confirms successful delivery to info@qbayes.com
        setStatus('Success! Your request has been sent to info@qbayes.com.');
        setFormData({ first_name: '', last_name: '', email: '', phone: '', message: '' }); 
        setTimeout(() => setStatus(''), 6000);
      } else {
        setStatus(result.error || 'Error sending request. Please check your backend.');
      }
    } catch (error) {
      console.error("Connection Error:", error);
      setStatus('Failed to connect to the server. Check if the live backend is awake.');
    }
  };

  return (
    <section id="booking-section" className="py-24 bg-gradient-to-b from-white to-slate-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Let's Talk: Discovery & <span className="text-blue-600">Alignment Meeting</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Get all your questions answered by our business development team. 
            Direct inquiries are sent to <span className="font-semibold text-slate-700 underline decoration-blue-500/30">info@qbayes.com</span>.
          </p>
        </div>

        {/* --- CENTERED CONTACT FORM (Demand 21 & 22) --- */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-500/10 border border-slate-100 relative">
            
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Ready To Get Started?</h3>
            <p className="text-slate-500 mb-8">Share your goals, and we'll help you design the right digital path.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="First Name *" 
                  value={formData.first_name}
                  onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                  className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none border border-transparent focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all" 
                  required
                />
                <input 
                  type="text" 
                  placeholder="Last Name *" 
                  value={formData.last_name}
                  onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                  className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none border border-transparent focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all" 
                  required
                />
              </div>
              
              <input 
                type="email" 
                placeholder="Email Address *" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none border border-transparent focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all" 
                required
              />
              
              <input 
                type="tel" 
                placeholder="Phone Number *" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none border border-transparent focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all" 
                required
              />
              
              <textarea 
                placeholder="Tell us about your project or goals *" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="4" 
                className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none border border-transparent focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all resize-none"
                required
              ></textarea>
              
              <button 
                type="submit" 
                disabled={status === 'Sending...'}
                className={`w-full text-white font-bold py-5 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 
                  ${status === 'Sending...' ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-slate-800 active:scale-[0.98]'}`}
              >
                {status === 'Sending...' ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing Request...
                  </span>
                ) : (
                  <>Submit Request</>
                )}
              </button>

              {status && status !== 'Sending...' && (
                <div className={`mt-4 p-4 rounded-xl text-center text-sm font-bold animate-fadeIn ${status.includes('Success') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;