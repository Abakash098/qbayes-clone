import React from 'react';
import { FaWater, FaFish, Fadesktop } from 'react-icons/fa';

const AquisherWaterMonitor = () => {
  return (
    <div className="pt-32 pb-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div data-aos="fade-right">
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold">
              Smart Aqua-Farming
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
              Aquisher: IoT Water <br />
              <span className="text-blue-600">Environment Monitor</span>
            </h1>
            <p className="text-slate-600 text-lg mb-8">
              An advanced IoT-based system for fish cultivation that continuously monitors critical water parameters to ensure optimal conditions for aquatic life.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaWater className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Comprehensive Water Analysis</h4>
                  <p className="text-slate-600">
                    Continuously monitors temperature, Total Dissolved Solids (TDS), dissolved oxygen, turbidity, and pH levels.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaFish className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Intelligent Fish Prediction</h4>
                  <p className="text-slate-600">
                    Analyzes real-time data to predict the best-suited fish species for your farming conditions, maximizing yield.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Fadesktop className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Flexible Monitoring</h4>
                  <p className="text-slate-600">
                    Includes a built-in local display for instant, on-site access to key metrics and predictions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative" data-aos="fade-left">
            <div className="bg-blue-500/10 absolute -inset-4 rounded-3xl -rotate-2"></div>
            <img
              src="/aquisher.png"
              alt="Aquisher Water Monitor"
              className="relative rounded-2xl shadow-2xl w-full object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AquisherWaterMonitor;