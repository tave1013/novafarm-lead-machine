
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Check, Star } from 'lucide-react';
import Header from '@/components/Header';
import PromoBanner from '@/components/PromoBanner';

interface BookDemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  vatNumber: string;
  usagePlan: string;
  problemToSolve: string;
}

const BookDemo = () => {
  const form = useForm<BookDemoFormData>();

  const onSubmit = (data: BookDemoFormData) => {
    console.log('Demo booking form submitted:', data);
    // Handle form submission here
  };

  const testimonials = [
    {
      name: "Marco R.",
      role: "Pharmacy Owner",
      content: "NovaFarm transformed our appointment system. No more calls, just results.",
      rating: 5
    },
    {
      name: "Silvia T.",
      role: "Pharmacist",
      content: "The review follow-ups helped us get over 50 new Google reviews in 2 months.",
      rating: 5
    },
    {
      name: "Giuseppe M.",
      role: "Para-pharmacy Manager",
      content: "Finally, a system that actually works for our team. Simple and effective.",
      rating: 5
    },
    {
      name: "Francesca L.",
      role: "Pharmacy Director",
      content: "Customer satisfaction increased by 40% since we started using NovaFarm.",
      rating: 5
    }
  ];

  const benefits = [
    "Save hours with full automation",
    "Gain total control over appointments", 
    "Reduce no-shows and missed bookings",
    "Centralize all communication in one place",
    "Boost your pharmacy's professionalism"
  ];

  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <Header />
      
      <div className="pt-48 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-12 items-start">
            {/* Left Side - Form (3 columns) */}
            <div className="lg:col-span-3 mb-8 lg:mb-0 animate-fade-in-up">
              <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 animate-fade-in-up">
                  Book Your Free <span className="text-[#078147]">NovaFarm Demo</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  Discover how NovaFarm can transform your pharmacy operations in just 30 minutes.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* First Name and Last Name - Side by Side */}
                    <div className="grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <FormField
                        control={form.control}
                        name="firstName"
                        rules={{ required: "First name is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Mario" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        rules={{ required: "Last name is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Rossi" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      rules={{ 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      }}
                      render={({ field }) => (
                        <FormItem className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="mario.rossi@farmacia.it" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* VAT Number */}
                    <FormField
                      control={form.control}
                      name="vatNumber"
                      rules={{ required: "VAT Number is required" }}
                      render={({ field }) => (
                        <FormItem className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                          <FormLabel>Company VAT Number</FormLabel>
                          <FormControl>
                            <Input placeholder="IT12345678901" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Usage Plan Dropdown */}
                    <FormField
                      control={form.control}
                      name="usagePlan"
                      rules={{ required: "Please select how you plan to use NovaFarm" }}
                      render={({ field }) => (
                        <FormItem className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                          <FormLabel>How do you plan to use NovaFarm?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="appointment-booking">For appointment booking only</SelectItem>
                              <SelectItem value="marketing-reviews">For marketing and reviews</SelectItem>
                              <SelectItem value="centralize-operations">To centralize all pharmacy operations</SelectItem>
                              <SelectItem value="not-sure">Not sure yet</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Problem to Solve Dropdown */}
                    <FormField
                      control={form.control}
                      name="problemToSolve"
                      rules={{ required: "Please select what problem you're hoping to solve" }}
                      render={({ field }) => (
                        <FormItem className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                          <FormLabel>What problem are you hoping NovaFarm will solve?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="reduce-phone-calls">Reduce phone calls for appointments</SelectItem>
                              <SelectItem value="more-reviews">Get more customer reviews</SelectItem>
                              <SelectItem value="automate-followups">Automate follow-ups and reminders</SelectItem>
                              <SelectItem value="team-communication">Simplify team communication</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      className="w-full bg-[#078147] hover:bg-[#066139] text-white py-3 text-lg font-semibold animate-fade-in-up"
                      style={{ animationDelay: '0.7s' }}
                    >
                      Book My Free Demo
                    </Button>
                  </form>
                </Form>

                {/* Reassuring Note */}
                <p className="text-sm text-gray-500 text-center mt-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  We'll get back to you within 24 hours to schedule your personalized demo. No obligation – just clarity.
                </p>
              </div>
            </div>

            {/* Right Side - Content (2 columns) */}
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-lg p-8 h-full min-h-[600px] flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-black mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  Discover the Power of NovaFarm
                </h2>
                <p className="text-lg text-gray-700 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  See how NovaFarm can revolutionize your pharmacy operations with our comprehensive platform designed specifically for modern pharmacies.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 animate-fade-in-up"
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      <div className="w-6 h-6 bg-[#078147] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Join hundreds of satisfied pharmacy owners who trust NovaFarm
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDemo;
