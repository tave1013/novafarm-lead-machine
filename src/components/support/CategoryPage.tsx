
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

// Using the same categories data from SupportCategories
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
  List
} from 'lucide-react';

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
        link: '/support/appointments-and-calendars/setup-calendar'
      },
      {
        title: 'How to manage booking settings',
        description: 'Configure availability and booking rules',
        type: 'step-by-step',
        link: '/support/appointments-and-calendars/booking-settings'
      },
      {
        title: 'How to set up automated reminders',
        description: 'Configure SMS and email reminders',
        type: 'video',
        duration: '3 min',
        link: '/support/appointments-and-calendars/reminders'
      },
      {
        title: 'How to handle cancellations',
        description: 'Manage appointment cancellations and rescheduling',
        type: 'step-by-step',
        link: '/support/appointments-and-calendars/cancellations'
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
        link: '/support/automations-and-workflows/first-automation'
      },
      {
        title: 'How to set up trigger conditions',
        description: 'Configure complex automation rules',
        type: 'step-by-step',
        link: '/support/automations-and-workflows/trigger-conditions'
      },
      {
        title: 'How to use workflow templates',
        description: 'Pre-built templates for common scenarios',
        type: 'pdf',
        link: '/support/automations-and-workflows/workflow-templates'
      },
      {
        title: 'How to test your automations',
        description: 'Debug and optimize your workflows',
        type: 'step-by-step',
        link: '/support/automations-and-workflows/testing'
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
        link: '/support/chat-and-unified-inbox/connect-accounts'
      },
      {
        title: 'How to manage conversations',
        description: 'Organize and respond to messages',
        type: 'step-by-step',
        link: '/support/chat-and-unified-inbox/manage-conversations'
      },
      {
        title: 'How to set up auto-replies',
        description: 'Create automatic responses',
        type: 'video',
        duration: '4 min',
        link: '/support/chat-and-unified-inbox/auto-replies'
      },
      {
        title: 'How to use chat templates',
        description: 'Save time with message templates',
        type: 'step-by-step',
        link: '/support/chat-and-unified-inbox/templates'
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
        link: '/support/landing-pages-and-funnels/create-page'
      },
      {
        title: 'How to add a form',
        description: 'Capture leads with custom forms',
        type: 'step-by-step',
        link: '/support/landing-pages-and-funnels/add-form'
      },
      {
        title: 'How to connect thank-you pages',
        description: 'Set up post-conversion experiences',
        type: 'step-by-step',
        link: '/support/landing-pages-and-funnels/thank-you-pages'
      },
      {
        title: 'How to A/B test your pages',
        description: 'Optimize for maximum conversions',
        type: 'pdf',
        link: '/support/landing-pages-and-funnels/ab-testing'
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
        link: '/support/email-marketing/create-campaign'
      },
      {
        title: 'How to schedule a newsletter',
        description: 'Plan and schedule regular newsletters',
        type: 'step-by-step',
        link: '/support/email-marketing/schedule-newsletter'
      },
      {
        title: 'How to view email stats',
        description: 'Track opens, clicks, and conversions',
        type: 'step-by-step',
        link: '/support/email-marketing/view-stats'
      },
      {
        title: 'How to set up email automation',
        description: 'Create drip campaigns and follow-ups',
        type: 'video',
        duration: '15 min',
        link: '/support/email-marketing/automation'
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
        link: '/support/crm-and-contact-management/organize-contacts'
      },
      {
        title: 'How to manage sales pipelines',
        description: 'Track leads through your sales process',
        type: 'step-by-step',
        link: '/support/crm-and-contact-management/sales-pipelines'
      },
      {
        title: 'How to import contacts',
        description: 'Bulk import and export contact data',
        type: 'pdf',
        link: '/support/crm-and-contact-management/import-contacts'
      },
      {
        title: 'How to segment your audience',
        description: 'Create targeted contact groups',
        type: 'step-by-step',
        link: '/support/crm-and-contact-management/segment-audience'
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
        link: '/support/online-payments/setup-gateways'
      },
      {
        title: 'How to create payment links',
        description: 'Generate secure payment links',
        type: 'step-by-step',
        link: '/support/online-payments/payment-links'
      },
      {
        title: 'How to send invoices',
        description: 'Create and send professional invoices',
        type: 'video',
        duration: '6 min',
        link: '/support/online-payments/send-invoices'
      },
      {
        title: 'How to track payments',
        description: 'Monitor payment status and history',
        type: 'step-by-step',
        link: '/support/online-payments/track-payments'
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
        link: '/support/account-settings/customize-profile'
      },
      {
        title: 'How to connect your domain',
        description: 'Use your custom domain with NovaFarm',
        type: 'video',
        duration: '5 min',
        link: '/support/account-settings/connect-domain'
      },
      {
        title: 'How to manage notifications',
        description: 'Configure email and SMS settings',
        type: 'pdf',
        link: '/support/account-settings/notifications'
      },
      {
        title: 'How to set up team access',
        description: 'Add team members and set permissions',
        type: 'step-by-step',
        link: '/support/account-settings/team-access'
      }
    ]
  }
];

const getTypeIcon = (type: Tutorial['type']) => {
  switch (type) {
    case 'video':
      return <Video className="w-4 h-4" />;
    case 'pdf':
      return <FileText className="w-4 h-4" />;
    case 'step-by-step':
      return <List className="w-4 h-4" />;
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

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  // Find the category based on the slug
  const category = categories.find(cat => 
    cat.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and') === categorySlug
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20 px-6">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-2xl font-bold text-black mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-8">The requested support category could not be found.</p>
            <Button onClick={() => navigate('/support')} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Support Center
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button 
            onClick={() => navigate('/support')} 
            variant="ghost" 
            className="mb-8 text-gray-600 hover:text-[#078147]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Support Center
          </Button>

          {/* Category Header */}
          <div className="text-center mb-12">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${category.color} mx-auto mb-4`}>
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-black mb-4">{category.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
          </div>

          {/* Tutorials List */}
          <div className="space-y-4">
            {category.tutorials.map((tutorial, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                <CardContent className="p-6">
                  <a
                    href={tutorial.link}
                    className="flex items-start justify-between group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={getTypeBadge(tutorial.type)}>
                          {getTypeIcon(tutorial.type)}
                          <span className="capitalize">{tutorial.type.replace('-', ' ')}</span>
                        </div>
                        {tutorial.duration && (
                          <span className="text-sm text-[#078147] font-medium">
                            {tutorial.duration}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-black group-hover:text-[#078147] transition-colors mb-2">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-600">{tutorial.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#078147] transition-colors ml-4 flex-shrink-0" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
