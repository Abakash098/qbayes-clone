import React, { useState } from 'react';

const ContactForm = () => {
    // Updated state to match the "Ready To Get Started" fields
    const [formData, setFormData] = useState({ 
        first_name: '', 
        last_name: '', 
        email: '', 
        phone: '', 
        message: '' 
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Request Submitted Successfully!");
                // Clear the form
                setFormData({ first_name: '', last_name: '', email: '', phone: '', message: '' }); 
            }
        } catch (error) {
            console.error("Error sending data:", error);
            alert("Failed to connect to server.");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input type="text" placeholder="First Name *" value={formData.first_name}
                    onChange={(e) => setFormData({...formData, first_name: e.target.value})} required />
                
                <input type="text" placeholder="Last Name *" value={formData.last_name}
                    onChange={(e) => setFormData({...formData, last_name: e.target.value})} required />
            </div>

            <input type="email" placeholder="Email *" value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})} required />

            <input type="text" placeholder="Phone *" value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})} required />

            <textarea placeholder="Message *" value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})} required />

            <button type="submit" style={{ cursor: 'pointer', padding: '10px', background: '#000', color: '#fff' }}>
                Submit Request
            </button>
        </form>
    );
};

export default ContactForm;