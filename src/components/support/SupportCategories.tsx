
import React, { useState } from 'react';
import { 
  Calendar, 
  Settings, 
  MessageCircle, 
  Globe, 
  Mail, 
  Users, 
  CreditCard, 
  Cog,
  ChevronDown,
  ChevronUp,
  Video,
  FileText,
  List
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Tutorial {
  title: string;
  description: string;
  type: 'video' | 'pdf' | 'step-by-step';
  duration?: string;
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
        title: 'Setting Up Your First Calendar',
        description: 'Learn how to create and configure your appointment calendar',
        type: 'video',
        duration: '5 min'
      },
      {
        title: 'Managing Booking Settings',
        description: 'Configure availability, buffer times, and booking rules',
        type: 'step-by-step'
      },
      {
        title: 'Automated Reminders Setup',
        description: 'Set up SMS and email reminders for your clients',
        type: 'video',
        duration: '3 min'
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
        title: 'Creating Your First Automation',
        description: 'Build simple workflows to automate repetitive tasks',
        type: 'video',
        duration: '8 min'
      },
      {
        title: 'Advanced Trigger Conditions',
        description: 'Set up complex automation rules and conditions',
        type: 'step-by-step'
      },
      {
        title: 'Workflow Templates',
        description: 'Use pre-built templates for common automation scenarios',
        type: 'pdf'
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
        title: 'Connecting Social Media Accounts',
        description: 'Link your Instagram, Facebook, and WhatsApp accounts',
        type: 'video',
        duration: '6 min'
      },
      {
        title: 'Managing Conversations',
        description: 'Organize and respond to messages from all channels',
        type: 'step-by-step'
      },
      {
        title: 'Setting Up Auto-Replies',
        description: 'Create automatic responses for common questions',
        type: 'video',
        duration: '4 min'
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
        title: 'Building Your First Landing Page',
        description: 'Create a high-converting landing page from scratch',
        type: 'video',
        duration: '12 min'
      },
      {
        title: 'Funnel Design Best Practices',
        description: 'Optimize your funnels for maximum conversions',
        type: 'pdf'
      },
      {
        title: 'A/B Testing Your Pages',
        description: 'Test different versions to improve performance',
        type: 'step-by-step'
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
        title: 'Creating Email Campaigns',
        description: 'Design and send professional email campaigns',
        type: 'video',
        duration: '10 min'
      },
      {
        title: 'List Management & Segmentation',
        description: 'Organize your contacts and create targeted segments',
        type: 'step-by-step'
      },
      {
        title: 'Email Automation Sequences',
        description: 'Set up drip campaigns and automated follow-ups',
        type: 'video',
        duration: '15 min'
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
        title: 'Contact Organization System',
        description: 'Set up tags, custom fields, and contact categories',
        type: 'video',
        duration: '7 min'
      },
      {
        title: 'Sales Pipeline Management',
        description: 'Track leads through your sales process',
        type: 'step-by-step'
      },
      {
        title: 'Contact Import & Export',
        description: 'Bulk import contacts and export your data',
        type: 'pdf'
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
        title: 'Payment Gateway Setup',
        description: 'Connect Stripe, PayPal, and other payment providers',
        type: 'video',
        duration: '8 min'
      },
      {
        title: 'Creating Payment Links',
        description: 'Generate secure payment links for your services',
        type: 'step-by-step'
      },
      {
        title: 'Invoice Management',
        description: 'Send professional invoices and track payments',
        type: 'video',
        duration: '6 min'
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
        title: 'Profile & Branding Setup',
        description: 'Customize your account with logo and brand colors',
        type: 'step-by-step'
      },
      {
        title: 'Domain Configuration',
        description: 'Connect your custom domain to NovaFarm',
        type: 'video',
        duration: '5 min'
      },
      {
        title: 'Notification Preferences',
        description: 'Manage email and SMS notification settings',
        type: 'pdf'
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

export const SupportCategories: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryTitle: string) => {
    const newOpenCategories = new Set(openCategories);
    if (newOpenCategories.has(categoryTitle)) {
      newOpenCategories.delete(categoryTitle);
    } else {
      newOpenCategories.add(categoryTitle);
    }
    setOpenCategories(newOpenCategories);
  };

  return (
    <div id="support-content" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Help & Tutorials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a category below to access step-by-step guides, video tutorials, and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            const isOpen = openCategories.has(category.title);
            
            return (
              <Card key={category.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Collapsible open={isOpen} onOpenChange={() => toggleCategory(category.title)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-semibold text-black">
                              {category.title}
                            </CardTitle>
                          </div>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <CardDescription className="text-gray-600 mt-2">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {category.tutorials.map((tutorial, index) => (
                          <div
                            key={index}
                            className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium text-black text-sm">
                                {tutorial.title}
                              </h4>
                              <div className={getTypeBadge(tutorial.type)}>
                                {getTypeIcon(tutorial.type)}
                                <span className="capitalize">{tutorial.type}</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">
                              {tutorial.description}
                            </p>
                            {tutorial.duration && (
                              <p className="text-xs text-[#078147] font-medium">
                                {tutorial.duration}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
