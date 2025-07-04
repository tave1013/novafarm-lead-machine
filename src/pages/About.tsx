
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHeroSection from '../components/about/AboutHeroSection';
import SmarterWaySection from '../components/about/SmarterWaySection';
import TeamSupportSection from '../components/about/TeamSupportSection';
import WhatWeDoSection from '../components/about/WhatWeDoSection';
import WhyChooseUsSection from '../components/about/WhyChooseUsSection';
import ApproachSection from '../components/about/ApproachSection';
import AboutFinalCTASection from '../components/about/AboutFinalCTASection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHeroSection />
      <SmarterWaySection />
      <TeamSupportSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <ApproachSection />
      <AboutFinalCTASection />
      <Footer />
    </div>
  );
};

export default About;
