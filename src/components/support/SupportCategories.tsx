
import React from 'react';
import { 
  Calendar, 
  Settings, 
  MessageCircle, 
  Globe, 
  Mail, 
  Users, 
  CreditCard, 
  Cog,
  Video,
  FileText,
  List,
  ExternalLink
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Tutorial {
  title: string;
  description: string;
  type: 'video' | 'pdf' | 'step-by-step';
  duration?: string;
  link: string;
}

interface Category {
  icon: React.ElementType;
  title: string;
  description: string;
  tutorials: Tutorial[];
  color: string;
}

const categories: Category[] = [
  {
    icon: Calendar,
    title: 'Appointments & Calendars',
    description: 'Set up your calendar, manage bookings, send reminders',
    color: 'bg-blue-50 text-blue-600',
    tutorials: [
      {
        title: 'How to set up your first calendar',
        description: 'Create and configure your appointment calendar',
        type: 'video',
        duration: '5 min',
        link: '/support/appointments/setup-calendar'
      },
      {
        title: 'How to manage booking settings',
        description: 'Configure availability and booking rules',
        type: 'step-by-step',
        link: '/support/appointments/booking-settings'
      },
      {
        title: 'How to set up automated reminders',
        description: 'Configure SMS and email reminders',
        type: 'video',
        duration: '3 min',
        link: '/support/appointments/reminders'
      },
      {
        title: 'How to handle cancellations',
        description: 'Manage appointment cancellations and rescheduling',
        type: 'step-by-step',
        link: '/support/appointments/cancellations'
      }
    ]
  },
  {
    icon: Settings,
    title: 'Automations & Workflows',
    description: 'Trigger messages, build automated flows, save time',
    color: 'bg-purple-50 text-purple-600',
    tutorials: [
      {
        title: 'How to create your first automation',
        description: 'Build simple workflows to automate tasks',
        type: 'video',
        duration: '8 min',
        link: '/support/automations/first-automation'
      },
      {
        title: 'How to set up trigger conditions',
        description: 'Configure complex automation rules',
        type: 'step-by-step',
        link: '/support/automations/trigger-conditions'
      },
      {
        title: 'How to use workflow templates',
        description: 'Pre-built templates for common scenarios',
        type: 'pdf',
        link: '/support/automations/workflow-templates'
      },
      {
        title: 'How to test your automations',
        description: 'Debug and optimize your workflows',
        type: 'step-by-step',
        link: '/support/automations/testing'
      }
    ]
  },
  {
    icon: MessageCircle,
    title: 'Chat & Unified Inbox',
    description: 'Reply to Instagram, WhatsApp, Facebook, and more',
    color: 'bg-green-50 text-green-600',
    tutorials: [
      {
        title: 'How to connect social media accounts',
        description: 'Link Instagram, Facebook, and WhatsApp',
        type: 'video',
        duration: '6 min',
        link: '/support/chat/connect-accounts'
      },
      {
        title: 'How to manage conversations',
        description: 'Organize and respond to messages',
        type: 'step-by-step',
        link: '/support/chat/manage-conversations'
      },
      {
        title: 'How to set up auto-replies',
        description: 'Create automatic responses',
        type: 'video',
        duration: '4 min',
        link: '/support/chat/auto-replies'
      },
      {
        title: 'How to use chat templates',
        description: 'Save time with message templates',
        type: 'step-by-step',
        link: '/support/chat/templates'
      }
    ]
  },
  {
    icon: Globe,
    title: 'Landing Pages & Funnels',
    description: 'Build pages that convert with our drag & drop builder',
    color: 'bg-orange-50 text-orange-600',
    tutorials: [
      {
        title: 'How to create a landing page',
        description: 'Build high-converting pages from scratch',
        type: 'video',
        duration: '12 min',
        link: '/support/landing-pages/create-page'
      },
      {
        title: 'How to add a form',
        description: 'Capture leads with custom forms',
        type: 'step-by-step',
        link: '/support/landing-pages/add-form'
      },
      {
        title: 'How to connect thank-you pages',
        description: 'Set up post-conversion experiences',
        type: 'step-by-step',
        link: '/support/landing-pages/thank-you-pages'
      },
      {
        title: 'How to A/B test your pages',
        description: 'Optimize for maximum conversions',
        type: 'pdf',
        link: '/support/landing-pages/ab-testing'
      }
    ]
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Send broadcasts, manage lists, automate emails',
    color: 'bg-red-50 text-red-600',
    tutorials: [
      {
        title: 'How to create an email campaign',
        description: 'Design and send professional campaigns',
        type: 'video',
        duration: '10 min',
        link: '/support/email/create-campaign'
      },
      {
        title: 'How to schedule a newsletter',
        description: 'Plan and schedule regular newsletters',
        type: 'step-by-step',
        link: '/support/email/schedule-newsletter'
      },
      {
        title: 'How to view email stats',
        description: 'Track opens, clicks, and conversions',
        type: 'step-by-step',
        link: '/support/email/view-stats'
      },
      {
        title: 'How to set up email automation',
        description: 'Create drip campaigns and follow-ups',
        type: 'video',
        duration: '15 min',
        link: '/support/email/automation'
      }
    ]
  },
  {
    icon: Users,
    title: 'CRM & Contact Management',
    description: 'Track leads, use tags, manage pipelines',
    color: 'bg-indigo-50 text-indigo-600',
    tutorials: [
      {
        title: 'How to organize contacts',
        description: 'Set up tags and custom fields',
        type: 'video',
        duration: '7 min',
        link: '/support/crm/organize-contacts'
      },
      {
        title: 'How to manage sales pipelines',
        description: 'Track leads through your sales process',
        type: 'step-by-step',
        link: '/support/crm/sales-pipelines'
      },
      {
        title: 'How to import contacts',
        description: 'Bulk import and export contact data',
        type: 'pdf',
        link: '/support/crm/import-contacts'
      },
      {
        title: 'How to segment your audience',
        description: 'Create targeted contact groups',
        type: 'step-by-step',
        link: '/support/crm/segment-audience'
      }
    ]
  },
  {
    icon: CreditCard,
    title: 'Online Payments',
    description: 'Collect payments, send offers, track invoices',
    color: 'bg-yellow-50 text-yellow-600',
    tutorials: [
      {
        title: 'How to set up payment gateways',
        description: 'Connect Stripe, PayPal, and others',
        type: 'video',
        duration: '8 min',
        link: '/support/payments/setup-gateways'
      },
      {
        title: 'How to create payment links',
        description: 'Generate secure payment links',
        type: 'step-by-step',
        link: '/support/payments/payment-links'
      },
      {
        title: 'How to send invoices',
        description: 'Create and send professional invoices',
        type: 'video',
        duration: '6 min',
        link: '/support/payments/send-invoices'
      },
      {
        title: 'How to track payments',
        description: 'Monitor payment status and history',
        type: 'step-by-step',
        link: '/support/payments/track-payments'
      }
    ]
  },
  {
    icon: Cog,
    title: 'Account Settings',
    description: 'Set your logo, domain, time zone, notifications',
    color: 'bg-gray-50 text-gray-600',
    tutorials: [
      {
        title: 'How to customize your profile',
        description: 'Set up logo and brand colors',
        type: 'step-by-step',
        link: '/support/settings/customize-profile'
      },
      {
        title: 'How to connect your domain',
        description: 'Use your custom domain with NovaFarm',
        type: 'video',
        duration: '5 min',
        link: '/support/settings/connect-domain'
      },
      {
        title: 'How to manage notifications',
        description: 'Configure email and SMS settings',
        type: 'pdf',
        link: '/support/settings/notifications'
      },
      {
        title: 'How to set up team access',
        description: 'Add team members and set permissions',
        type: 'step-by-step',
        link: '/support/settings/team-access'
      }
    ]
  }
];

const getTypeIcon = (type: Tutorial['type']) => {
  switch (type) {
    case 'video':
      return <Video className="w-3 h-3" />;
    case 'pdf':
      return <FileText className="w-3 h-3" />;
    case 'step-by-step':
      return <List className="w-3 h-3" />;
  }
};

const getTypeBadge = (type: Tutorial['type']) => {
  const baseClasses = "inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium";
  switch (type) {
    case 'video':
      return `${baseClasses} bg-red-100 text-red-700`;
    case 'pdf':
      return `${baseClasses} bg-blue-100 text-blue-700`;
    case 'step-by-step':
      return `${baseClasses} bg-green-100 text-green-700`;
  }
};

export const SupportCategories: React.FC = () => {
  return (
    <div id="support-content" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Help & Tutorials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a category below to access step-by-step guides, video tutorials, and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            
            return (
              <Card key={category.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-fit">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-black">
                        {category.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {category.tutorials.map((tutorial, index) => (
                      <a
                        key={index}
                        href={tutorial.link}
                        className="flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group cursor-pointer"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-black text-sm group-hover:text-[#078147] transition-colors">
                              {tutorial.title}
                            </h4>
                            <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-[#078147] transition-colors" />
                          </div>
                          <p className="text-xs text-gray-600 mb-2">
                            {tutorial.description}
                          </p>
                          <div className="flex items-center justify-between">
                            {tutorial.duration && (
                              <p className="text-xs text-[#078147] font-medium">
                                {tutorial.duration}
                              </p>
                            )}
                            <div className={getTypeBadge(tutorial.type)}>
                              {getTypeIcon(tutorial.type)}
                              <span className="capitalize">{tutorial.type.replace('-', ' ')}</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
