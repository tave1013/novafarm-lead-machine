import React from 'react';
import { Card, CardContent } from '../ui/card';
import { 
  Stethoscope, 
  TestTube, 
  Heart, 
  Ear, 
  Calendar, 
  FileText,
  Users,
  Clock
} from 'lucide-react';

const PharmacyServices = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "Skin Analysis",
      description: "Professional dermatological consultations and personalized skincare recommendations."
    },
    {
      icon: <TestTube className="w-8 h-8 text-primary" />,
      title: "Rapid COVID-19 Tests",
      description: "Quick and reliable antigen tests with results available in 15 minutes."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Blood Pressure Check",
      description: "Regular monitoring and health assessments with our certified equipment."
    },
    {
      icon: <Ear className="w-8 h-8 text-primary" />,
      title: "Ear Piercing",
      description: "Safe and hygienic ear piercing service performed by trained professionals."
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Online CUP Bookings",
      description: "Book medical appointments directly through our integrated booking system."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Report Collection",
      description: "Convenient collection point for medical reports and test results."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Most Requested <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services designed to meet all your pharmacy and wellness needs in one convenient location.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-background border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Users className="w-6 h-6 text-primary" />
              <span className="text-muted-foreground">Expert healthcare professionals</span>
            </div>
            <div className="flex items-center justify-center space-x-3 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-muted-foreground">No appointment needed for most services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmacyServices;