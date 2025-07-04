
import React from 'react';
import { 
  Calendar, 
  MessageSquare, 
  Globe, 
  Star, 
  MessageCircle, 
  BarChart3, 
  Clock, 
  Inbox, 
  Headphones 
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
      title: "Automated SMS & Email Reminders",
      description: "Reduce no-shows and keep patients informed automatically."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#078147]" />,
      title: "Custom Pharmacy Web Page",
      description: "Show your services online with a clean and professional design."
    },
    {
      icon: <Star className="w-8 h-8 text-[#078147]" />,
      title: "Review Request System",
      description: "Collect more reviews and build trust with your patients."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#078147]" />,
      title: "WhatsApp + QR Integration",
      description: "Receive bookings and questions directly via WhatsApp or QR."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#078147]" />,
      title: "Real-Time Reporting & Stats",
      description: "Monitor bookings, trends and service performance in one place."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#078147]" />,
      title: "Saves Time & Reduces Phone Calls",
      description: "Eliminate manual scheduling and constant phone interruptions."
    },
    {
      icon: <Inbox className="w-8 h-8 text-[#078147]" />,
      title: "Centralized Customer Inbox",
      description: "Manage all conversations (web, WhatsApp, email) from one place."
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#078147]" />,
      title: "Ongoing Support & Human Guidance",
      description: "We help you configure and optimize your system — you're never alone."
    }
  ];

  return (
    <section className="py-16 bg-[#f8f9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            What NovaFarm can do for your pharmacy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Not just software — a smart solution that saves time, reduces stress, 
            and helps you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#078147]/10 rounded-lg flex items-center justify-center mb-4">
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
