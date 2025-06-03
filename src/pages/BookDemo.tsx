
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Check } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left 50% - Contact Form */}
            <div className="w-full">
              <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Book Your Free <span className="text-[#078147]">NovaFarm Demo</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Discover how NovaFarm can transform your pharmacy operations in just 30 minutes.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* First Name and Last Name - Side by Side */}
                    <div className="grid grid-cols-2 gap-4">
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
                        <FormItem>
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
                        <FormItem>
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
                        <FormItem>
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
                        <FormItem>
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
                      className="w-full bg-[#078147] hover:bg-[#066139] text-white py-3 text-lg font-semibold"
                    >
                      Book My Free Demo
                    </Button>
                  </form>
                </Form>

                {/* Reassuring Note */}
                <p className="text-sm text-gray-500 text-center mt-4">
                  We'll get back to you within 24 hours to schedule your personalized demo. No obligation – just clarity.
                </p>
              </div>
            </div>

            {/* Right 50% - Textual Content */}
            <div className="w-full bg-white p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Why book a demo with NovaFarm?
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                See firsthand how NovaFarm can streamline your pharmacy operations, boost customer engagement, and save you hours every week. Our personalized demo will show you exactly how our platform fits your specific needs.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#078147] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">Save hours with smart automations</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#078147] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">Boost appointment requests and client engagement</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#078147] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">Eliminate no-shows with automatic reminders</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#078147] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">Centralize messaging across SMS, email, and social</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#078147] rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">Monitor everything from one intuitive dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
