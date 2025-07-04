
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutFinalCTASection = () => {
  const navigate = useNavigate();

  const handleBookDemo = () => {
    navigate('/book-demo');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f9f6] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 animate-fade-in">
          Let's bring your pharmacy online — the smart way.
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Book a personalized demo and see how NovaFarm can simplify your work and help you grow.
        </p>
        
        <button 
          onClick={handleBookDemo}
          className="bg-[#078147] text-white px-12 py-4 rounded-xl text-xl font-bold hover:bg-[#066139] transition-all transform hover:scale-105 hover:-translate-y-1 shadow-xl animate-fade-in" 
          style={{ animationDelay: '0.4s' }}
        >
          Book a Free Demo
        </button>
        
        <p className="mt-6 text-gray-500 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Join 500+ pharmacies already using NovaFarm
        </p>
      </div>
    </section>
  );
};

export default AboutFinalCTASection;
