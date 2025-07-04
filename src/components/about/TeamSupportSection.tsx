
import React from 'react';
import SupportInterfaceMockup from './SupportInterfaceMockup';

const TeamSupportSection = () => {
  return (
    <section className="py-16 bg-[#f8f9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Not just software. A team at your side.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                With NovaFarm, you don't just get a tool — you get strategy, support, 
                and a dedicated team.
              </p>
              <p>
                From onboarding to daily use, we're here to help your pharmacy succeed 
                with hands-on guidance and 7-day support.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <SupportInterfaceMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSupportSection;
