
import React from 'react';
import { Target } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#078147]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-[#078147]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Our Mission
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              We want to help pharmacies work better — not harder.
            </p>
            <p>
              NovaFarm simplifies booking management, saves you time, improves patient experience 
              and elevates your digital image.
            </p>
            <p className="text-xl font-semibold text-[#078147]">
              Simple. Reliable. Tailored for your pharmacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
