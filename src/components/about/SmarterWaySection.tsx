
import React from 'react';

const SmarterWaySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-[#078147]/10 to-[#078147]/5 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#078147]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-[#078147]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">Digital Pharmacy Management</p>
                <p className="text-gray-400 text-sm mt-2">Modern Tools for Modern Pharmacies</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              A smarter, simpler way to manage your pharmacy
            </h2>
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
