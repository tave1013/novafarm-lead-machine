
import React from 'react';
import { Handshake } from 'lucide-react';
import TeamExperienceMockup from './TeamExperienceMockup';

const ApproachSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Handshake className="w-8 h-8 text-[#078147] mr-3 flex-shrink-0" />
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Real Experience. Human Touch.
              </h2>
            </div>
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
            <TeamExperienceMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
