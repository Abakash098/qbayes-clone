import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Locations = () => {
  return (
    <div className="w-full bg-[#0b1c38] text-white py-24 border-t border-white/5">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* UK Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-4">United Kingdom</h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-[#4a90e2] mb-2 uppercase text-xs tracking-widest">London</h4>
              <p className="text-sm opacity-80 flex gap-3"><FaMapMarkerAlt className="mt-1 text-orange-500" /> Unit 212, East London Works, London, E1 1DU</p>
            </div>
            <div>
              <h4 className="font-bold text-[#4a90e2] mb-2 uppercase text-xs tracking-widest">Manchester</h4>
              <p className="text-sm opacity-80 flex gap-3"><FaMapMarkerAlt className="mt-1 text-orange-500" /> 23 New Cross Street, Salford M5 5EU</p>
            </div>
            <div className="text-sm space-y-2 pt-4 border-t border-white/5">
              <p className="flex items-center gap-3"><FaPhoneAlt className="text-orange-500" /> +442036331877</p>
              <p className="flex items-center gap-3"><FaEnvelope className="text-orange-500" /> sales@webskitters.uk</p>
            </div>
          </div>
        </div>

        {/* USA - West/East */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-4">USA</h3>
          <div>
            <h4 className="font-bold text-[#4a90e2] mb-2 uppercase text-xs tracking-widest">California</h4>
            <p className="text-sm opacity-80 flex gap-3"><FaMapMarkerAlt className="mt-1 text-orange-500" /> 5441 Farina Lane, Fremont, CA 94538</p>
          </div>
          <div className="text-sm space-y-2 pt-4 border-t border-white/5">
            <p className="flex items-center gap-3"><FaEnvelope className="text-orange-500" /> sales@webskitters.com</p>
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-orange-500" /> +1 (909) 324-3251</p>
          </div>
        </div>

        {/* USA - South */}
        <div className="space-y-8 lg:pt-14">
          <div>
            <h4 className="font-bold text-[#4a90e2] mb-2 uppercase text-xs tracking-widest">Florida</h4>
            <p className="text-sm opacity-80 flex gap-3"><FaMapMarkerAlt className="mt-1 text-orange-500" /> 7950 NW 53rd Street Unit 337, Miami, FL 33166</p>
          </div>
          <div>
            <h4 className="font-bold text-[#4a90e2] mb-2 uppercase text-xs tracking-widest">Delaware</h4>
            <p className="text-sm opacity-80 flex gap-3"><FaMapMarkerAlt className="mt-1 text-orange-500" /> 2803 Philadelphia Pike B 4021, Claymont, DE 19703</p>
          </div>
        </div>

        {/* India Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-white/10 pb-4">India</h3>
          <div>
            <h4 className="font-bold text-[#4a90e2] mb-2 uppercase text-xs tracking-widest">Kolkata</h4>
            <p className="text-sm opacity-80 flex gap-3"><FaMapMarkerAlt className="mt-1 text-orange-500" /> Eco Intelligent Park, Unit No- 7th Floor, Salt Lake Sector-5, Kolkata</p>
          </div>
          <div className="text-sm space-y-2 pt-4 border-t border-white/5">
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-orange-500" /> 1800 419 7917</p>
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-orange-500" /> +91 3346014753</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Locations;