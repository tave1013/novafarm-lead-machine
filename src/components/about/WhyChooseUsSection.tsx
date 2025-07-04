
import React from 'react';
import { Puzzle, Handshake, Zap, Shield } from 'lucide-react';

const WhyChooseUsSection = () => {
  const values = [
    {
      icon: <Puzzle className="w-8 h-8 text-[#078147]" />,
      title: "Tailored for Pharmacies",
      description: "Designed specifically around the real needs of pharmacies."
    },
    {
      icon: <Handshake className="w-8 h-8 text-[#078147]" />,
      title: "Real Human Support",
      description: "7/7 support by real people who understand your needs."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#078147]" />,
      title: "Fast Activation",
      description: "Get your system up and running in 48 hours, no tech skills needed."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#078147]" />,
      title: "Secure & Compliant",
      description: "GDPR compliant, 2FA, safe cloud storage — always protected."
    }
  ];

  return (
    <section className="py-16 bg-[#f4f1ea]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Why pharmacies choose NovaFarm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="w-16 h-16 bg-[#078147]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
