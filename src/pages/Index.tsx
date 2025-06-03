
import Header from '../components/Header';
import PromoBanner from '../components/PromoBanner';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import WebsiteServicesSection from '../components/WebsiteServicesSection';
import OmnichannelSection from '../components/OmnichannelSection';
import ReliabilitySection from '../components/ReliabilitySection';
import PricingSection from '../components/PricingSection';
import GuaranteeSection from '../components/GuaranteeSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <PromoBanner />
      <Header />
      <div className="pt-32">
        <div className="animate-fade-in-up">
          <HeroSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <FeaturesSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <WebsiteServicesSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <OmnichannelSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <ReliabilitySection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <PricingSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <GuaranteeSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <TestimonialsSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <FinalCTASection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
