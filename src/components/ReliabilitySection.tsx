
import { MessageCircle, Shield, BookOpen, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ReliabilitySection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-[#f4f1ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#078147]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#078147]" />
                </div>
                <h3 className="text-xl font-bold text-black">{t('reliability.uptime')}</h3>
                <p className="text-gray-600">{t('reliability.uptimeDesc')}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#078147]">{t('reliability.support24')}</div>
                  <div className="text-sm text-gray-600">{t('reliability.supportDesc')}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#078147]">{t('reliability.pharmacies')}</div>
                  <div className="text-sm text-gray-600">{t('reliability.pharmaciesDesc')}</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#078147] rounded-full"></div>
                  <span className="text-sm text-gray-600">{t('reliability.encryption')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#078147] rounded-full"></div>
                  <span className="text-sm text-gray-600">{t('reliability.gdpr')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#078147] rounded-full"></div>
                  <span className="text-sm text-gray-600">{t('reliability.backups')}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t('reliability.title')}
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#078147]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">{t('reliability.supportWeek')}</h3>
                  <p className="text-gray-600">{t('reliability.supportWeekDesc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#078147]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">{t('reliability.secure')}</h3>
                  <p className="text-gray-600">{t('reliability.secureDesc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#078147]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">{t('reliability.onboarding')}</h3>
                  <p className="text-gray-600">{t('reliability.onboardingDesc')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#078147]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">{t('reliability.scalable')}</h3>
                  <p className="text-gray-600">{t('reliability.scalableDesc')}</p>
                </div>
              </div>
            </div>
            <button className="bg-[#078147] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#066139] transition-colors">
              {t('reliability.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliabilitySection;
