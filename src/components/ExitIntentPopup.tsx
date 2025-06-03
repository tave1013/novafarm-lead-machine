
import React from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { useCountdownTimer } from '@/hooks/useCountdownTimer';

interface ExitIntentFormData {
  firstName: string;
  lastName: string;
  email: string;
  vatNumber: string;
  usagePlan: string;
  problemToSolve: string;
}

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isOpen, onClose }) => {
  const form = useForm<ExitIntentFormData>();
  const { formattedTime, isExpired } = useCountdownTimer(30);

  const onSubmit = (data: ExitIntentFormData) => {
    console.log('Exit intent form submitted:', data);
    // Handle form submission here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogOverlay className="bg-black/60" />
      <DialogContent className="max-w-5xl w-full max-h-[90vh] overflow-y-auto p-0 bg-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left Side - Headline, Text, and Timer */}
          <div className="bg-[#f4f1ea] p-8 lg:p-12 flex flex-col justify-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
                Wait! Don't miss your <span className="text-[#078147]">free demo!</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Discover how NovaFarm can save you hours every week, automate your pharmacy, and increase bookings — and right now, you can try it free during our limited-time promotion!
              </p>

              {/* Countdown Timer */}
              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-[#078147]">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    {isExpired ? 'Offer has expired' : 'Offer expires in:'}
                  </p>
                  <div className="text-3xl font-bold text-[#078147] font-mono">
                    {formattedTime}
                  </div>
                  {!isExpired && (
                    <div className="mt-3">
                      <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-[#078147] h-full transition-all duration-1000 ease-linear"
                          style={{ width: `${((30 * 60 - (30 * 60 - (parseInt(formattedTime.split(':')[0]) * 60 + parseInt(formattedTime.split(':')[1])))) / (30 * 60)) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-8 lg:p-12 bg-white">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm h-full">
              <h3 className="text-xl font-bold text-black mb-6">Book Your Free Demo Now</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  {/* First Name and Last Name - Side by Side */}
                  <div className="grid grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name="firstName"
                      rules={{ required: "First name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Mario" {...field} className="text-sm" />
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
                          <FormLabel className="text-sm">Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Rossi" {...field} className="text-sm" />
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
                        <FormLabel className="text-sm">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="mario.rossi@farmacia.it" type="email" {...field} className="text-sm" />
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
                        <FormLabel className="text-sm">Company VAT Number</FormLabel>
                        <FormControl>
                          <Input placeholder="IT12345678901" {...field} className="text-sm" />
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
                        <FormLabel className="text-sm">How do you plan to use NovaFarm?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="text-sm">
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
                        <FormLabel className="text-sm">What do you hope NovaFarm will help you solve?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="text-sm">
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
                    className="w-full bg-[#078147] hover:bg-[#066139] text-white py-3 text-base font-semibold mt-6"
                    disabled={isExpired}
                  >
                    {isExpired ? 'Offer Expired' : 'Book My Free Demo'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
