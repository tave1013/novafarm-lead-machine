
import React from 'react';
import { Heart } from 'lucide-react';

const ApproachSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Real Experience. Human Touch.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Our team includes professionals from pharmacy, tech and digital strategy.
              </p>
              <p>
                We've worked with dozens of pharmacies and built NovaFarm to be intuitive, 
                effective, and scalable — with real-world challenges in mind.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-[#078147]/10 to-[#078147]/5 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#078147]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-[#078147]" />
                </div>
                <p className="text-gray-500 text-lg">Professional Experience</p>
                <p className="text-gray-400 text-sm mt-2">Pharmacy & Tech Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
