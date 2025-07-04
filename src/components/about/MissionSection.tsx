
import React from 'react';
import { Eye } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#078147]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Eye className="w-8 h-8 text-[#078147]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            We believe every pharmacy deserves powerful yet simple digital tools
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            <p>
              We built NovaFarm to give pharmacies access to the same smart, automated systems 
              used by other industries — without needing to be tech experts.
            </p>
            <p>
              Our platform is designed to be intuitive, quick to activate, and guided by real 
              people who understand your daily work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
