
import React from 'react';
import { Check, Users, Settings, Shield } from 'lucide-react';

const WhyChooseUsSection = () => {
  const values = [
    {
      icon: <Check className="w-8 h-8 text-[#078147]" />,
      title: "Built for Pharmacies",
      description: "All features designed with pharmacy workflows in mind."
    },
    {
      icon: <Users className="w-8 h-8 text-[#078147]" />,
      title: "Human Support, 7 Days a Week",
      description: "Real people helping you, not just a chatbot."
    },
    {
      icon: <Settings className="w-8 h-8 text-[#078147]" />,
      title: "Quick Setup",
      description: "Launch in 48 hours — no technical skills required."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#078147]" />,
      title: "Secure & Compliant",
      description: "End-to-end encryption, 2FA, GDPR-ready."
    }
  ];

  return (
    <section className="py-16 bg-[#f8f9f6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Why Pharmacies Choose NovaFarm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white text-center p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
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
