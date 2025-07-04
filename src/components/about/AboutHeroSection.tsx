
import React from 'react';

const AboutHeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-white via-gray-50 to-[#f8f9f6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 animate-fade-in">
          NovaFarm is more than a platform —{' '}
          <span className="text-[#078147]">it's your digital pharmacy team</span>.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          We help pharmacies grow, save time and offer a better patient experience with powerful, 
          easy-to-use digital tools — supported by real people who care about your success.
        </p>
        <button 
          className="bg-[#078147] text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-[#066139] transition-all transform hover:scale-105 hover:-translate-y-1 shadow-xl animate-fade-in" 
          style={{ animationDelay: '0.4s' }}
          onClick={() => window.location.href = '/book-demo'}
        >
          Book a Free Demo
        </button>
      </div>
    </section>
  );
};

export default AboutHeroSection;
