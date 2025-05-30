
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "€97",
      period: "/month + VAT",
      features: [
        "Smart appointment calendar",
        "Automated follow-ups",
        "Review request system",
        "All-in-one app",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "€197",
      period: "/month + VAT",
      badge: "Best Value",
      popular: true,
      features: [
        "Everything in Starter",
        "Full omnichannel messaging",
        "Accept payments before appointments",
        "Advanced analytics and reporting",
        "7/7 premium support"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Simple Plans. Powerful Results.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your pharmacy's needs and start growing today.
          </p>
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
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`ml-1 ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>{plan.period}</span>
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
                Book a Call
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution for your pharmacy network?</p>
          <button className="text-[#078147] font-semibold hover:underline">
            Contact us for enterprise pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
