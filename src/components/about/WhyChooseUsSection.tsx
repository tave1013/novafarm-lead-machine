
import React from 'react';
import { Check, Users, Zap, Shield, TrendingUp } from 'lucide-react';

const WhyChooseUsSection = () => {
  const values = [
    {
      icon: <Check className="w-8 h-8 text-[#078147]" />,
      title: "Built for Pharmacies",
      description: "Every feature is designed around your real needs."
    },
    {
      icon: <Users className="w-8 h-8 text-[#078147]" />,
      title: "Human Support, 7 Days a Week",
      description: "We're not just a platform — we're your team."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#078147]" />,
      title: "Fast & Easy Setup",
      description: "Go live in 48h, no tech skills needed."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#078147]" />,
      title: "Privacy & Compliance",
      description: "GDPR-compliant, secure infrastructure, 2FA enabled."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#078147]" />,
      title: "Grow Without Overwork",
      description: "Simplify tasks, reduce manual calls and focus on value."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Why pharmacies choose NovaFarm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#078147]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-black mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
