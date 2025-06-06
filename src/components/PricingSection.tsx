import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for getting started and exploring the basics.',
      features: [
        'Basic Booking Calendar',
        'Up to 5 Staff Members',
        'Limited Reporting',
        'Community Support'
      ],
      cta: 'Get Started',
      mostPopular: false
    },
    {
      name: 'Pro',
      price: '€49 / month',
      description: 'Essential tools for growing pharmacies.',
      features: [
        'Everything in Starter, plus:',
        'Unlimited Staff Members',
        'Automated Reminders',
        'Review Request System',
        'Priority Support'
      ],
      cta: 'Start Free Trial',
      mostPopular: true
    },
    {
      name: 'Premium',
      price: '€99 / month',
      description: 'Advanced features for established pharmacies.',
      features: [
        'Everything in Pro, plus:',
        'Unified Messaging Inbox',
        'Online Payment Integration',
        'Advanced Analytics',
        'Dedicated Account Manager'
      ],
      cta: 'Start Free Trial',
      mostPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 pt-8">
          {/* Rating Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#078147]/10 text-[#078147] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>⭐ 4.9/5 from 200+ reviews</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Simple Plans. Powerful Results.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Choose the plan that fits your pharmacy's needs and start growing today.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 ${plan.mostPopular ? 'border-4 border-[#078147]' : 'border border-gray-200 hover:shadow-2xl transition-shadow'}`}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 right-0 bg-[#078147] text-white px-4 py-2 rounded-tr-2xl rounded-bl-xl text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-black mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-black mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-[#078147]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-[#078147] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#066139] transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="mt-16 text-center bg-[#f4f1ea] rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Enterprise Solutions
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Custom solutions for pharmacy chains and large organizations. Volume discounts, 
            dedicated support, and tailored integrations available.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-[#078147] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#066139] transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Contact us for enterprise pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
