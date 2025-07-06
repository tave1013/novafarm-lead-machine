
import React from 'react';
import { ArrowDown } from 'lucide-react';

export const SupportHero: React.FC = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('support-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#078147]/5 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Need help with NovaFarm?
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Browse our step-by-step tutorials or chat with us for immediate support.
        </p>
        <button
          onClick={scrollToContent}
          className="inline-flex items-center space-x-2 bg-[#078147] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#066139] transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <span>Explore Guides</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
