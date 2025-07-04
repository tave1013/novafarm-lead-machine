
import React from 'react';
import { Zap } from 'lucide-react';
import PharmacyDashboardMockup from './PharmacyDashboardMockup';

const SmarterWaySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <PharmacyDashboardMockup />
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-[#078147] mr-3 flex-shrink-0" />
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                A smarter, simpler way to manage your pharmacy
              </h2>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                NovaFarm was born from real conversations with pharmacy professionals.
              </p>
              <p>
                We've built a system that works with you, not against you — reducing phone calls, 
                automating repetitive tasks, and making life easier for your staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmarterWaySection;
