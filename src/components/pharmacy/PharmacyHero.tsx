import React from 'react';
import { Button } from '../ui/button';
import heroImage from '@/assets/pharmacy-hero.jpg';

const PharmacyHero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Welcome to <span className="text-primary">Farmacia Centrale</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Your health is our priority.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={scrollToServices}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Discover Our Services
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full">
          <div className="w-1 h-4 bg-white rounded-full animate-[slide-down_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default PharmacyHero;