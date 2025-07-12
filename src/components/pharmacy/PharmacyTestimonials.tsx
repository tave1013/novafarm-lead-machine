import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

const PharmacyTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Rossi",
      rating: 5,
      text: "Farmacia Centrale has been my trusted pharmacy for over 10 years. The staff is incredibly knowledgeable and always takes the time to answer my questions. The online booking system makes scheduling appointments so convenient!",
      service: "Skin Analysis"
    },
    {
      name: "Giuseppe Bianchi",
      rating: 5,
      text: "Excellent service and professional staff. I had my COVID test done here and the process was quick and efficient. The pharmacists are truly experts in their field and provide personalized advice.",
      service: "COVID-19 Testing"
    },
    {
      name: "Anna Verdi",
      rating: 5,
      text: "The best pharmacy in Milan! They offer so many services under one roof. From blood pressure monitoring to ear piercing, everything is done with the highest standards of care and hygiene.",
      service: "Blood Pressure Check"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our valued customers who trust us with their health and wellness needs.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-background border-border shadow-xl animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-primary font-medium">
                    {testimonials[currentTestimonial].service}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-border hover:bg-muted"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? 'bg-primary'
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-border hover:bg-muted"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30+</div>
            <div className="text-muted-foreground">Years of Experience</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmacyTestimonials;