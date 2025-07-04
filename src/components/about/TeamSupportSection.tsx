
import React from 'react';
import { Headphones } from 'lucide-react';

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
            <div className="bg-white rounded-2xl p-8 shadow-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#078147]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-10 h-10 text-[#078147]" />
                </div>
                <p className="text-gray-500 text-lg">24/7 Human Support</p>
                <p className="text-gray-400 text-sm mt-2">Real People, Real Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSupportSection;
