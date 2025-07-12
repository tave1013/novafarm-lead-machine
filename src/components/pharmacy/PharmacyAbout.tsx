import React from 'react';
import { Button } from '../ui/button';
import consultationImage from '@/assets/pharmacy-consultation.jpg';

const PharmacyAbout = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="mb-12 lg:mb-0 animate-fade-in">
            <div className="relative">
              <img
                src={consultationImage}
                alt="Professional consultation at Farmacia Centrale"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Experience. Trust. <span className="text-primary">Dedication.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                At Farmacia Centrale, we've been serving our community for over 30 years with unwavering commitment to your health and wellbeing. Our experienced team of pharmacists and healthcare professionals is dedicated to providing personalized care and expert advice.
              </p>
              <p>
                We believe in the power of human connection and taking the time to understand each patient's unique needs. From traditional pharmacy services to modern health consultations, we're here to support you every step of the way.
              </p>
              <p>
                Our state-of-the-art facility combines the warmth of traditional Italian pharmacy culture with cutting-edge technology to ensure you receive the best possible care.
              </p>
            </div>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmacyAbout;