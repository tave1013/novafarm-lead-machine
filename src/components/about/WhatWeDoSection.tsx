
import React from 'react';
import { 
  Calendar, 
  MessageSquare, 
  Globe, 
  Star, 
  MessageCircle, 
  BarChart3, 
  Clock, 
  Shield, 
  Users 
} from 'lucide-react';

const WhatWeDoSection = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-[#078147]" />,
      title: "Online Booking Calendar",
      description: "Let patients book services anytime, from any device."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#078147]" />,
      title: "Automated Reminders",
      description: "Reduce no-shows with SMS and email alerts."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#078147]" />,
      title: "Custom Pharmacy Web Page",
      description: "Show your services online with a modern, SEO-ready design."
    },
    {
      icon: <Star className="w-8 h-8 text-[#078147]" />,
      title: "Review Management",
      description: "Request and manage patient reviews to grow your reputation."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#078147]" />,
      title: "WhatsApp & QR Integration",
      description: "Enable bookings via WhatsApp or printed QR codes."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#078147]" />,
      title: "Reports & Analytics",
      description: "Track services, bookings and performance in real time."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#078147]" />,
      title: "Time-Saving Tools",
      description: "Reduce phone traffic and simplify appointment scheduling."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#078147]" />,
      title: "GDPR-Compliant Data",
      description: "Store customer data securely and in full compliance."
    },
    {
      icon: <Users className="w-8 h-8 text-[#078147]" />,
      title: "Team Collaboration",
      description: "Delegate tasks, manage users, and streamline your workflow."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            What NovaFarm Can Do for Your Pharmacy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smart features that save you time, increase appointments, and improve your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#f8f9f6] p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
