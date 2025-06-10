
import React, { useState } from 'react';
import { Search, Calendar, Bot, Euro, Users, Wrench, CreditCard, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Getting Started
  {
    id: 'gs1',
    question: 'How do I create my first appointment booking page?',
    answer: 'Navigate to your Dashboard > Appointments > Create New Page. Choose your service type, set availability hours, and customize your booking form. Your page will be live immediately with a shareable link.',
    category: 'getting-started'
  },
  {
    id: 'gs2',
    question: 'What information do I need to set up my NovaFarm account?',
    answer: 'You\'ll need your business name, contact information, service types, and preferred time zones. For payments, you can add your payment processor details later in the Billing section.',
    category: 'getting-started'
  },
  {
    id: 'gs3',
    question: 'How long does it take to get started?',
    answer: 'Most users are up and running within 15 minutes. The basic setup includes creating your booking page, setting availability, and configuring notification preferences.',
    category: 'getting-started'
  },

  // Appointments & Calendar
  {
    id: 'ac1',
    question: 'How can I sync NovaFarm with my existing calendar?',
    answer: 'Go to Settings > Calendar Integration. You can connect Google Calendar, Outlook, or Apple Calendar. This ensures your availability is always accurate and prevents double bookings.',
    category: 'appointments'
  },
  {
    id: 'ac2',
    question: 'Can I set different availability for different services?',
    answer: 'Yes! Each service can have its own availability schedule. Go to Services > Edit Service > Availability to set specific hours, days, and buffer times for each offering.',
    category: 'appointments'
  },
  {
    id: 'ac3',
    question: 'How do I handle no-shows and cancellations?',
    answer: 'You can set cancellation policies in Settings > Policies. Options include cancellation deadlines, automatic rebooking, and no-show fees. Automated reminders help reduce no-shows significantly.',
    category: 'appointments'
  },

  // Automations & Reminders
  {
    id: 'ar1',
    question: 'How can I set up automated reminders before appointments?',
    answer: 'Go to Settings > Automations > Reminders. You can set multiple reminders (24h before, same-day, 1 hour before) via SMS, email, or WhatsApp. Each reminder can have custom messaging.',
    category: 'automations'
  },
  {
    id: 'ar2',
    question: 'Can I customize the reminder messages?',
    answer: 'Absolutely! You can personalize all automated messages with your branding, include appointment details, location info, and preparation instructions. Use merge tags to automatically include client names and appointment specifics.',
    category: 'automations'
  },
  {
    id: 'ar3',
    question: 'What automation features are available?',
    answer: 'NovaFarm offers booking confirmations, reminders, follow-up messages, feedback requests, rebooking suggestions, and more. All automations can be customized and scheduled based on your workflow.',
    category: 'automations'
  },

  // Online Payments
  {
    id: 'op1',
    question: 'Which payment methods are supported?',
    answer: 'We support all major credit cards, PayPal, bank transfers, and local payment methods. Integration with Stripe and PayPal ensures secure, PCI-compliant transactions.',
    category: 'payments'
  },
  {
    id: 'op2',
    question: 'Can I require deposits or upfront payments?',
    answer: 'Yes! You can set deposit amounts (fixed or percentage), require full payment upfront, or offer pay-later options. Configure this in Services > Payment Settings for each service type.',
    category: 'payments'
  },
  {
    id: 'op3',
    question: 'How do refunds work?',
    answer: 'Refunds can be processed directly from your Dashboard > Payments. You can issue full or partial refunds, and clients receive automatic notifications. Refund policies can be customized per service.',
    category: 'payments'
  },

  // User Accounts & Permissions
  {
    id: 'ua1',
    question: 'Can I add team members to my NovaFarm account?',
    answer: 'Yes! Go to Settings > Team to invite team members. You can set different permission levels: Admin (full access), Staff (appointments only), or Viewer (read-only access).',
    category: 'accounts'
  },
  {
    id: 'ua2',
    question: 'How do I manage client accounts and information?',
    answer: 'All client information is automatically stored in Contacts. You can view booking history, preferences, notes, and communication logs. Clients can also create accounts to manage their own bookings.',
    category: 'accounts'
  },

  // Technical Support
  {
    id: 'ts1',
    question: 'What should I do if my booking page isn\'t working?',
    answer: 'First, check your internet connection and try refreshing the page. If issues persist, contact our support team via the chat widget or email support@novafarm.com. Include your account details and a description of the problem.',
    category: 'technical'
  },
  {
    id: 'ts2',
    question: 'How do I backup my data?',
    answer: 'NovaFarm automatically backs up all your data daily. You can export your appointments, client lists, and reports anytime from Settings > Data Export. Premium plans include advanced backup options.',
    category: 'technical'
  },

  // Plans & Billing
  {
    id: 'pb1',
    question: 'What\'s the difference between Starter and Premium plans?',
    answer: 'Starter includes basic booking features for up to 100 appointments/month. Premium adds unlimited bookings, advanced automations, team management, custom branding, and priority support. See our Pricing page for full details.',
    category: 'billing'
  },
  {
    id: 'pb2',
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer: 'Yes! Plan changes take effect immediately. Upgrades are prorated, and downgrades apply at your next billing cycle. You can manage your subscription in Dashboard > Billing.',
    category: 'billing'
  },
  {
    id: 'pb3',
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for annual plans. Monthly subscriptions can be canceled anytime with no penalty. Contact support for refund requests or billing questions.',
    category: 'billing'
  }
];

const categories = [
  { id: 'getting-started', name: 'Getting Started', icon: HelpCircle, color: 'bg-blue-500' },
  { id: 'appointments', name: 'Appointments & Calendar', icon: Calendar, color: 'bg-[#078147]' },
  { id: 'automations', name: 'Automations & Reminders', icon: Bot, color: 'bg-purple-500' },
  { id: 'payments', name: 'Online Payments', icon: Euro, color: 'bg-orange-500' },
  { id: 'accounts', name: 'User Accounts & Permissions', icon: Users, color: 'bg-indigo-500' },
  { id: 'technical', name: 'Technical Support', icon: Wrench, color: 'bg-red-500' },
  { id: 'billing', name: 'Plans & Billing', icon: CreditCard, color: 'bg-yellow-500' }
];

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.trim() === '') {
      setFilteredFAQs(faqData);
    } else {
      const filtered = faqData.filter(
        faq =>
          faq.question.toLowerCase().includes(value.toLowerCase()) ||
          faq.answer.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredFAQs(filtered);
    }
  };

  const getFAQsByCategory = (categoryId: string) => {
    return filteredFAQs.filter(faq => faq.category === categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Help Center
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about NovaFarm's features, setup, and best practices.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for a topic or question..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-[#078147] focus:border-transparent text-gray-900"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {searchTerm ? (
          /* Search Results */
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-black mb-2">
                Search Results
              </h2>
              <p className="text-gray-600">
                {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchTerm}"
              </p>
            </div>
            
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="bg-white rounded-lg shadow-sm border"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="font-semibold text-black pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-2">No results found</div>
                <p className="text-gray-500">Try searching with different keywords or browse categories below.</p>
              </div>
            )}
          </div>
        ) : (
          /* Category View */
          <div className="space-y-8">
            {categories.map((category) => {
              const categoryFAQs = getFAQsByCategory(category.id);
              const Icon = category.icon;
              
              if (categoryFAQs.length === 0) return null;
              
              return (
                <div key={category.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                  {/* Category Header */}
                  <div className="px-6 py-4 bg-gray-50 border-b">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-black">{category.name}</h2>
                      <span className="text-sm text-gray-500">({categoryFAQs.length} questions)</span>
                    </div>
                  </div>
                  
                  {/* Category FAQs */}
                  <Accordion type="single" collapsible>
                    {categoryFAQs.map((faq) => (
                      <AccordionItem 
                        key={faq.id} 
                        value={faq.id}
                        className="border-b last:border-b-0"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                          <span className="font-semibold text-black pr-4">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        )}

        {/* Contact Support Section */}
        <div className="mt-12 bg-[#078147]/5 border border-[#078147]/20 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-black mb-2">
            Still need help?
          </h3>
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-[#078147] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#066139] transition-colors">
              Contact Support
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
