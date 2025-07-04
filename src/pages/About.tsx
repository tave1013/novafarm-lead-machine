
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHeroSection from '../components/about/AboutHeroSection';
import MissionSection from '../components/about/MissionSection';
import WhyNovaFarmSection from '../components/about/WhyNovaFarmSection';
import WhatWeDoSection from '../components/about/WhatWeDoSection';
import WhyChooseUsSection from '../components/about/WhyChooseUsSection';
import TeamSection from '../components/about/TeamSection';
import AboutFinalCTASection from '../components/about/AboutFinalCTASection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHeroSection />
      <MissionSection />
      <WhyNovaFarmSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <TeamSection />
      <AboutFinalCTASection />
      <Footer />
    </div>
  );
};

export default About;
