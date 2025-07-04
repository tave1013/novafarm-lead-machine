
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutFinalCTASection = () => {
  const navigate = useNavigate();

  const handleBookDemo = () => {
    navigate('/book-demo');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#078147] to-[#066139] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
          See how NovaFarm can help your pharmacy today.
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Book a free live demo — we'll show you how it works, no obligations.
        </p>
        
        <button 
          onClick={handleBookDemo}
          className="bg-white text-[#078147] px-12 py-4 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-xl animate-fade-in" 
          style={{ animationDelay: '0.4s' }}
        >
          Book a Free Demo
        </button>
        
        <p className="mt-6 text-gray-200 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Join 500+ pharmacies already using NovaFarm
        </p>
      </div>
    </section>
  );
};

export default AboutFinalCTASection;
