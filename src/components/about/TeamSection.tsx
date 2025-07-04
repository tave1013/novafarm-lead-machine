
import React from 'react';
import { Heart, Users } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="py-16 bg-[#f8f9f6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-16 h-16 bg-[#078147]/10 rounded-lg flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-[#078147]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Behind NovaFarm, there's experience, care and strategy
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Our team brings together experts in pharmacy services, software and marketing.
              </p>
              <p>
                We've worked with real pharmacies for years — and we know that simplicity, 
                support and flexibility are key to success.
              </p>
              <p className="text-xl font-semibold text-[#078147]">
                NovaFarm is not a generic app. It's a dedicated system that grows with you.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-full h-80 bg-gradient-to-br from-[#078147]/10 to-[#078147]/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#078147]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-[#078147]" />
                  </div>
                  <p className="text-gray-500 text-lg">Professional Team</p>
                  <p className="text-gray-400 text-sm mt-2">Pharmacy & Tech Experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
