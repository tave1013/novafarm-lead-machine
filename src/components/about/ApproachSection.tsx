
import React from 'react';
import TeamExperienceMockup from './TeamExperienceMockup';

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
            <TeamExperienceMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
