import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const PharmacyBooking = () => {
  const handleBookingClick = () => {
    // In a real implementation, this would open a booking form or redirect to booking system
    alert('Booking system would open here. This is a demo.');
  };

  const steps = [
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Choose Service",
      description: "Select from our range of professional services"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Pick Date & Time",
      description: "Choose your preferred appointment slot"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Confirm Online",
      description: "Receive instant confirmation via email"
    }
  ];

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Book a Service in <span className="text-primary">Seconds</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your service, pick a date, and confirm online. It's that simple.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative bg-background border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={handleBookingClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-12 py-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Book Your Appointment Now
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Available 24/7 • Instant confirmation • No waiting time
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "24/7 Online Booking",
            "Instant Confirmation",
            "SMS Reminders",
            "Easy Rescheduling"
          ].map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-4 bg-muted/30 rounded-lg animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PharmacyBooking;