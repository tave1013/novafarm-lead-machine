
import { Calendar, MessageSquare, Star, BarChart3, Users, CreditCard, Zap, Headphones } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Online Booking Calendar",
      description: "Let your customers book appointments 24/7 from any device, automatically syncing with your team's schedule.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      benefits: [
        "24/7 availability",
        "Works from desktop or mobile", 
        "Sync with your team's agenda"
      ],
      icon: <Calendar className="w-6 h-6 text-[#078147]" />,
      imageLeft: true
    },
    {
      id: 2,
      title: "Smart Automations",
      description: "Set-it-and-forget-it workflows that handle appointment reminders and follow-ups automatically.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      benefits: [
        "Appointment reminders sent automatically (24h before & same day)",
        "Follow-up messages after the visit",
        "Set-it-and-forget-it workflows"
      ],
      icon: <Zap className="w-6 h-6 text-[#078147]" />,
      imageLeft: false
    },
    {
      id: 3,
      title: "Review Request System",
      description: "Automatically boost your online reputation by requesting Google reviews from satisfied customers.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      benefits: [
        "Automatically ask for Google reviews",
        "Customizable templates",
        "Boost reputation effortlessly"
      ],
      icon: <Star className="w-6 h-6 text-[#078147]" />,
      imageLeft: true
    },
    {
      id: 4,
      title: "Centralized Chat",
      description: "Manage all your customer communications from Facebook, Instagram, Email & SMS in one unified inbox.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      benefits: [
        "Manage FB, IG, Email & SMS from one inbox",
        "Tag & assign conversations",
        "Notifications in real-time"
      ],
      icon: <MessageSquare className="w-6 h-6 text-[#078147]" />,
      imageLeft: false
    },
    {
      id: 5,
      title: "Unified Dashboard & App",
      description: "Everything your team needs in one simple, intuitive interface with custom roles and permissions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      benefits: [
        "Everything in one place",
        "Easy for all team members",
        "Roles and permissions"
      ],
      icon: <Users className="w-6 h-6 text-[#078147]" />,
      imageLeft: true
    },
    {
      id: 6,
      title: "Online Payment Integration",
      description: "Accept secure payments at booking time to reduce no-shows and improve cash flow.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      benefits: [
        "Let users pre-pay at booking",
        "Reduce no-shows",
        "Secure Stripe integration"
      ],
      icon: <CreditCard className="w-6 h-6 text-[#078147]" />,
      imageLeft: false
    },
    {
      id: 7,
      title: "Advanced Analytics & Reporting",
      description: "Track your pharmacy's performance with detailed insights, KPIs, and monthly reports.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      benefits: [
        "View KPIs and trends",
        "Monthly performance reports",
        "Track leads and conversions"
      ],
      icon: <BarChart3 className="w-6 h-6 text-[#078147]" />,
      imageLeft: true
    },
    {
      id: 8,
      title: "7-Day Human Support",
      description: "Get help when you need it with our dedicated support team, onboarding videos, and help center.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      benefits: [
        "Chat and email support",
        "Live assistance when needed",
        "Onboarding videos & help center"
      ],
      icon: <Headphones className="w-6 h-6 text-[#078147]" />,
      imageLeft: false
    }
  ];

  return (
    <section id="features" className="py-16 bg-[#f4f1ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Everything You Need to Simplify Your Pharmacy's Operations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed specifically for modern pharmacies and para-pharmacies
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className={`mb-8 lg:mb-0 ${feature.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={feature.imageLeft ? 'lg:order-2' : 'lg:order-1'}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black">{feature.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3 mb-8">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#078147] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-[#078147] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#066139] transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <button className="bg-[#078147] text-white px-12 py-4 rounded-xl text-xl font-bold hover:bg-[#066139] transition-all transform hover:scale-105 hover:-translate-y-1 shadow-xl">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
