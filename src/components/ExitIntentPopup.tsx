
import React from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { useLanguage } from '../contexts/LanguageContext';

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
  const { t } = useLanguage();

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
          {/* Left Side - Headline, Text, and Benefits */}
          <div className="bg-[#f4f1ea] p-8 lg:p-12 flex flex-col justify-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
                {t('exitIntent.title')} <span className="text-[#078147]">{t('exitIntent.titleHighlight')}</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('exitIntent.description')}
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#078147] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{t('exitIntent.benefit1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#078147] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{t('exitIntent.benefit2')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#078147] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{t('exitIntent.benefit3')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-6 lg:p-12 bg-white flex items-center">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm w-full">
              <h3 className="text-xl font-bold text-black mb-6">{t('exitIntent.formTitle')}</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  {/* First Name and Last Name - Side by Side */}
                  <div className="grid grid-cols-2 gap-3">
                    <FormField
                      control={form.control}
                      name="firstName"
                      rules={{ required: t('exitIntent.firstNameRequired') }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">{t('exitIntent.firstName')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('exitIntent.firstNamePlaceholder')} {...field} className="text-sm" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      rules={{ required: t('exitIntent.lastNameRequired') }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">{t('exitIntent.lastName')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('exitIntent.lastNamePlaceholder')} {...field} className="text-sm" />
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
                      required: t('exitIntent.emailRequired'),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t('exitIntent.emailInvalid')
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">{t('exitIntent.email')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('exitIntent.emailPlaceholder')} type="email" {...field} className="text-sm" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* VAT Number */}
                  <FormField
                    control={form.control}
                    name="vatNumber"
                    rules={{ required: t('exitIntent.vatRequired') }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">{t('exitIntent.vatNumber')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('exitIntent.vatPlaceholder')} {...field} className="text-sm" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Usage Plan Dropdown */}
                  <FormField
                    control={form.control}
                    name="usagePlan"
                    rules={{ required: t('exitIntent.usageRequired') }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">{t('exitIntent.usagePlan')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="text-sm">
                              <SelectValue placeholder={t('exitIntent.selectOption')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="appointment-booking">{t('exitIntent.usageOption1')}</SelectItem>
                            <SelectItem value="marketing-reviews">{t('exitIntent.usageOption2')}</SelectItem>
                            <SelectItem value="centralize-operations">{t('exitIntent.usageOption3')}</SelectItem>
                            <SelectItem value="not-sure">{t('exitIntent.usageOption4')}</SelectItem>
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
                    rules={{ required: t('exitIntent.problemRequired') }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">{t('exitIntent.problemToSolve')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="text-sm">
                              <SelectValue placeholder={t('exitIntent.selectOption')} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="reduce-phone-calls">{t('exitIntent.problemOption1')}</SelectItem>
                            <SelectItem value="more-reviews">{t('exitIntent.problemOption2')}</SelectItem>
                            <SelectItem value="automate-followups">{t('exitIntent.problemOption3')}</SelectItem>
                            <SelectItem value="team-communication">{t('exitIntent.problemOption4')}</SelectItem>
                            <SelectItem value="other">{t('exitIntent.problemOption5')}</SelectItem>
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
                  >
                    {t('exitIntent.cta')}
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
