
import React from 'react';

const AboutHeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 animate-fade-in">
            More than a platform.{' '}
            <span className="text-[#078147]">Your digital partner</span>{' '}
            in the pharmacy.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We help modern pharmacies manage appointments and services, with simplicity, 
            professionalism and human support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
