
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTASection from '../components/FinalCTASection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Pricing Plans Section - Direct start without intro */}
      <PricingSection />

      {/* Testimonials Section - Build trust after pricing */}
      <TestimonialsSection />

      {/* Final CTA Section - Exact copy from homepage */}
      <FinalCTASection />
      
      <Footer />
    </div>
  );
};

export default Pricing;
