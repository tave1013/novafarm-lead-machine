
import { Check } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.starter'),
      originalPrice: "€147",
      monthlyPrice: "€97",
      annualMonthlyPrice: "€80",
      period: isAnnual ? t('pricing.monthAnnual') : t('pricing.month'),
      setupFee: "€500",
      yearlyDiscount: t('pricing.savePercent'),
      features: [
        t('pricing.feature1'),
        t('pricing.feature2'),
        t('pricing.feature3'),
        t('pricing.feature4'),
        t('pricing.feature5'),
        t('pricing.feature6'),
        t('pricing.feature7')
      ]
    },
    {
      name: t('pricing.pro'),
      originalPrice: "€297",
      monthlyPrice: "€197",
      annualMonthlyPrice: "€164",
      period: isAnnual ? t('pricing.monthAnnual') : t('pricing.month'),
      setupFee: "€1,000",
      yearlyDiscount: t('pricing.savePercent'),
      badge: t('pricing.bestValue'),
      popular: true,
      features: [
        t('pricing.feature8'),
        t('pricing.feature9'),
        t('pricing.feature10'),
        t('pricing.feature11'),
        t('pricing.feature12'),
        t('pricing.feature13'),
        t('pricing.feature7')
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-2">
            <span className={`text-sm ${!isAnnual ? 'text-black font-medium' : 'text-gray-500'}`}>
              {t('pricing.monthly')}
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#078147] focus:ring-offset-2 ${
                isAnnual ? 'bg-[#078147]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-black font-medium' : 'text-gray-500'}`}>
              {t('pricing.annual')}
            </span>
          </div>
          <p className="text-sm text-gray-500">{t('pricing.save')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-[#078147] text-white shadow-2xl transform scale-105' : 'bg-white border-2 border-gray-200 text-black'}`}>
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              {isAnnual && (
                <div className="absolute -top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {plan.yearlyDiscount}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-3">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    {!isAnnual && (
                      <span className={`text-lg line-through ${plan.popular ? 'text-gray-300' : 'text-gray-400'}`}>
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      {t('pricing.promo')}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">
                      {isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice}
                    </span>
                    <span className={`ml-1 ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>{plan.period}</span>
                  </div>
                </div>
                <div className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-500'}`}>
                  {t('pricing.setup')} {plan.setupFee} {t('pricing.oneTime')}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-white' : 'text-[#078147]'}`} />
                    <span className={plan.popular ? 'text-white' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-white text-[#078147] hover:bg-gray-100' 
                  : 'bg-[#078147] text-white hover:bg-[#066139]'
              }`}>
                {t('pricing.cta')}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">{t('pricing.custom')}</p>
          <button className="text-[#078147] font-semibold hover:underline">
            {t('pricing.enterprise')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
