
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import WebsiteServicesSection from '../components/WebsiteServicesSection';
import OmnichannelSection from '../components/OmnichannelSection';
import WhyChooseSection from '../components/WhyChooseSection';
import TargetAudienceSection from '../components/TargetAudienceSection';
import ReliabilitySection from '../components/ReliabilitySection';
import GuaranteeSection from '../components/GuaranteeSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTASection from '../components/FinalCTASection';

const Landing = () => {
  useEffect(() => {
    // Create and append the chat widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '68641dffbf6fcc6d3b4fd991');
    
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://widgets.leadconnectorhq.com/loader.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <WebsiteServicesSection />
      <OmnichannelSection />
      <WhyChooseSection />
      <TargetAudienceSection />
      <ReliabilitySection />
      <GuaranteeSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};

export default Landing;
