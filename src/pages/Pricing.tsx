
import PricingSection from '../components/PricingSection';
import FinalCTASection from '../components/FinalCTASection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Title + Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Choose the Plan That Fits Your Pharmacy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Simple pricing, powerful features. Switch anytime.
          </p>
        </div>
      </section>

      {/* Pricing Plans Section - Exact copy from homepage */}
      <PricingSection />

      {/* Final CTA Section - Exact copy from homepage */}
      <FinalCTASection />
      
      <Footer />
    </div>
  );
};

export default Pricing;
