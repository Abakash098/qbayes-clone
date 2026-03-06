import React, { useState } from 'react';

const ContactForm = () => {
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
            // UPDATED: Points to your live Render backend
            const response = await fetch('https://qbayes-backend-1.onrender.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Success! Your request has been sent.');
                setFormData({ first_name: '', last_name: '', email: '', phone: '', message: '' }); 
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('Error sending request.');
            }
        } catch (error) {
            console.error("Error sending data:", error);
            setStatus('Failed to connect to server.');
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-xl">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Ready To Get Started?</h2>
            <p className="text-slate-500 mb-8">Share your goals, and we'll help you design the right digital path.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <input 
                        type="text" 
                        placeholder="First Name *" 
                        value={formData.first_name}
                        onChange={(e) => setFormData({...formData, first_name: e.target.value})} 
                        className="w-full p-4 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Last Name *" 
                        value={formData.last_name}
                        onChange={(e) => setFormData({...formData, last_name: e.target.value})} 
                        className="w-full p-4 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required 
                    />
                </div>

                <input 
                    type="email" 
                    placeholder="Email *" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    className="w-full p-4 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required 
                />

                <input 
                    type="tel" 
                    placeholder="Phone *" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                    className="w-full p-4 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required 
                />

                <textarea 
                    placeholder="Message *" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})} 
                    className="w-full p-4 bg-slate-50 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required 
                />

                <button 
                    type="submit" 
                    className="w-full bg-[#0a192f] text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors mt-2"
                >
                    {status === 'Sending...' ? 'Sending...' : 'Submit Request'}
                </button>
                
                {status && status !== 'Sending...' && (
                    <p className={`text-sm text-center mt-2 ${status.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
                        {status}
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;