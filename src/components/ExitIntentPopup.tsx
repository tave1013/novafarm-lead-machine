
import React from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

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

  const onSubmit = (data: ExitIntentFormData) => {
    console.log('Exit intent form submitted:', data);
    // Handle form submission here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogOverlay className="bg-black/60" />
      <DialogContent className="max-w-2xl w-[95%] max-h-[90vh] overflow-y-auto p-0 bg-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </button>

        <div className="p-8 lg:p-12 text-center">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              Wait! Don't leave without discovering NovaFarm!
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
              Book your free demo now and see how NovaFarm can save you time, automate your workflow, and boost your pharmacy's growth.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8 shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* First Name and Last Name - Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    rules={{ required: "First name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Mario" {...field} className="text-sm h-12" />
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
                        <FormLabel className="text-sm font-medium">Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Rossi" {...field} className="text-sm h-12" />
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
                      <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="mario.rossi@farmacia.it" type="email" {...field} className="text-sm h-12" />
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
                      <FormLabel className="text-sm font-medium">Company VAT Number</FormLabel>
                      <FormControl>
                        <Input placeholder="IT12345678901" {...field} className="text-sm h-12" />
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
                      <FormLabel className="text-sm font-medium">How do you plan to use NovaFarm?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="text-sm h-12">
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
                      <FormLabel className="text-sm font-medium">What do you hope NovaFarm will help you solve?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="text-sm h-12">
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
                  className="w-full bg-[#078147] hover:bg-[#066139] text-white py-4 text-lg font-semibold mt-8 h-14"
                >
                  Book My Free Demo
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
