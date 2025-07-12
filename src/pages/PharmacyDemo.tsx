import React from 'react';
import PharmacyHeader from '../components/pharmacy/PharmacyHeader';
import PharmacyHero from '../components/pharmacy/PharmacyHero';
import PharmacyAbout from '../components/pharmacy/PharmacyAbout';
import PharmacyServices from '../components/pharmacy/PharmacyServices';
import PharmacyBooking from '../components/pharmacy/PharmacyBooking';
import PharmacyTestimonials from '../components/pharmacy/PharmacyTestimonials';
import PharmacyContact from '../components/pharmacy/PharmacyContact';
import PharmacyFooter from '../components/pharmacy/PharmacyFooter';

const PharmacyDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      <PharmacyHeader />
      <PharmacyHero />
      <PharmacyAbout />
      <PharmacyServices />
      <PharmacyBooking />
      <PharmacyTestimonials />
      <PharmacyContact />
      <PharmacyFooter />
    </div>
  );
};

export default PharmacyDemo;