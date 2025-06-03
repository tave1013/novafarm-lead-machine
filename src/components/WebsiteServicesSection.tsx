
import { Globe, MessageCircle, Server, Wrench } from 'lucide-react';
import { ServicesPageMockup } from './WebsiteMockups';
import { useLanguage } from '../contexts/LanguageContext';

const WebsiteServicesSection = () => {
  const { t } = useLanguage();

  const features = [
    t('website.feature1'),
    t('website.feature2'),
    t('website.feature3'),
    t('website.feature4'),
    t('website.feature5')
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {t('website.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('website.subtitle')}
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-16">
          {/* Mockup */}
          <div className="mb-8 lg:mb-0 flex justify-center">
            <ServicesPageMockup />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-[#078147]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-black">{t('website.heading')}</h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('website.description')}
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-black mb-4">{t('website.includes')}</h4>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#078147] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#078147]/5 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Wrench className="w-5 h-5 text-[#078147]" />
                <div>
                  <div className="font-semibold text-black">{t('website.existing')}</div>
                  <div className="text-sm text-gray-600">{t('website.existingDesc')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteServicesSection;
