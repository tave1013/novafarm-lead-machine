
import { Globe, MessageCircle, Server, Wrench } from 'lucide-react';
import { ServicesPageMockup, ContactPageMockup } from './WebsiteMockups';

const WebsiteServicesSection = () => {
  const features = [
    "Up to 3 custom-built landing pages",
    "Contact form for lead acquisition", 
    "Integrated live chat",
    "Hosting, maintenance, and updates included",
    "Can be linked to your existing website"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Professional Web Pages to Showcase Your Pharmacy's Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We design up to 3 tailor-made web pages for your pharmacy, built to highlight your services, 
            consultations, and contact options – all optimized to generate more leads and simplify online bookings.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-16">
          {/* Mockups */}
          <div className="mb-8 lg:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-center">
                <ServicesPageMockup />
              </div>
              <div className="flex justify-center">
                <ContactPageMockup />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-[#078147]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-black">Custom Web Pages</h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Professional, conversion-optimized pages that work seamlessly with your existing website 
              or as standalone landing pages for your pharmacy services.
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-black mb-4">Each package includes:</h4>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#078147] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#078147]/5 p-4 rounded-lg mb-6">
              <div className="flex items-center space-x-3">
                <Wrench className="w-5 h-5 text-[#078147]" />
                <div>
                  <div className="font-semibold text-black">Already have a website?</div>
                  <div className="text-sm text-gray-600">No problem – these pages can be linked directly to it</div>
                </div>
              </div>
            </div>

            <button className="bg-[#078147] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#066139] transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
              See Web Page Examples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteServicesSection;
