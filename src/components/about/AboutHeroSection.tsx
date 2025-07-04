
import React from 'react';

const AboutHeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-white via-gray-50 to-[#f8f9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 animate-fade-in">
            More than just software.{' '}
            <span className="text-[#078147]">A team by your side</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We help pharmacies grow, simplify service management, and offer a better experience 
            to every customer — with real human support behind every click.
          </p>
          <button 
            className="bg-[#078147] text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-[#066139] transition-all transform hover:scale-105 hover:-translate-y-1 shadow-xl animate-fade-in" 
            style={{ animationDelay: '0.4s' }}
            onClick={() => window.location.href = '/book-demo'}
          >
            Book a Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
