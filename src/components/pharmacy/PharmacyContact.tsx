import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock,
  Navigation
} from 'lucide-react';

const PharmacyContact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Address",
      content: "Via Roma 123, 20121 Milano, Italy",
      action: "Get Directions"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      content: "+39 02 1234 5678",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "info@farmaciacentrale.it",
      action: "Send Email"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "WhatsApp",
      content: "+39 346 123 4567",
      action: "Chat with Us"
    }
  ];

  const hours = [
    { day: "Monday - Friday", time: "8:30 AM - 7:30 PM" },
    { day: "Saturday", time: "9:00 AM - 1:00 PM" },
    { day: "Sunday", time: "Closed" }
  ];

  const handleContactClick = (type: string, content: string) => {
    switch (type) {
      case "Get Directions":
        window.open(`https://maps.google.com/?q=${encodeURIComponent(content)}`, '_blank');
        break;
      case "Call Now":
        window.open(`tel:${content.replace(/\s/g, '')}`, '_blank');
        break;
      case "Send Email":
        window.open(`mailto:${content}`, '_blank');
        break;
      case "Chat with Us":
        window.open(`https://wa.me/${content.replace(/[^\d]/g, '')}`, '_blank');
        break;
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us, call us, or message us. We're here to help with all your health and wellness needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {info.content}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleContactClick(info.action, info.content)}
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Hours */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="h-full bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-4">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium text-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                
                {/* Emergency notice */}
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-foreground font-medium">
                    Emergency? Call our 24/7 hotline:
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    +39 02 EMERGENCY
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Card className="bg-background border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="h-64 md:h-80 bg-muted/30 flex items-center justify-center relative">
                <div className="text-center">
                  <Navigation className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Find Us on the Map
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Located in the heart of Milano, easily accessible by public transport
                  </p>
                  <Button
                    onClick={() => handleContactClick("Get Directions", "Via Roma 123, 20121 Milano, Italy")}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Open in Google Maps
                  </Button>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PharmacyContact;