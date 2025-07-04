
import React from 'react';
import { Users } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#078147]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-[#078147]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            The people behind NovaFarm
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Team Photo Placeholder</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              We're a team with experience in pharmacy, software, and service.
            </p>
            <p>
              We created NovaFarm to bring modern tools to an industry that deserves more.
            </p>
            <p className="text-xl font-semibold text-[#078147]">
              We believe in practical solutions — built by people, for people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
