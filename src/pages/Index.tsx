
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
      <div className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <WebsiteServicesSection />
        <OmnichannelSection />
        <ReliabilitySection />
        <PricingSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <FinalCTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
