
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Video, FileText, List, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';

// Sample tutorial content - in a real app, this would come from a CMS or API
const tutorialContent: { [key: string]: any } = {
  'setup-calendar': {
    title: 'How to set up your first calendar',
    type: 'video' as const,
    duration: '5 min',
    category: 'Appointments & Calendars',
    categorySlug: 'appointments-and-calendars',
    content: [
      {
        type: 'intro',
        text: 'Setting up your first calendar in NovaFarm is quick and easy. Follow these steps to get started with appointment booking.'
      },
      {
        type: 'step',
        number: 1,
        title: 'Access Calendar Settings',
        content: 'Navigate to the Calendar section in your NovaFarm dashboard and click on "Add New Calendar".'
      },
      {
        type: 'step',
        number: 2,
        title: 'Basic Information',
        content: 'Enter your calendar name, description, and select the time zone for your appointments.'
      },
      {
        type: 'step',
        number: 3,
        title: 'Set Availability',
        content: 'Configure your working hours and days when you want to accept appointments.'
      },
      {
        type: 'step',
        number: 4,
        title: 'Appointment Duration',
        content: 'Set the default duration for appointments and any buffer time between bookings.'
      },
      {
        type: 'step',
        number: 5,
        title: 'Save and Test',
        content: 'Save your calendar settings and test the booking process to ensure everything works correctly.'
      }
    ]
  },
  'create-campaign': {
    title: 'How to create an email campaign',
    type: 'video' as const,
    duration: '10 min',
    category: 'Email Marketing',
    categorySlug: 'email-marketing',
    content: [
      {
        type: 'intro',
        text: 'Creating effective email campaigns in NovaFarm helps you reach your audience and drive conversions. This guide walks you through the entire process.'
      },
      {
        type: 'step',
        number: 1,
        title: 'Choose Campaign Type',
        content: 'Select whether you want to create a one-time broadcast or set up an automated email sequence.'
      },
      {
        type: 'step',
        number: 2,
        title: 'Design Your Email',
        content: 'Use our drag-and-drop editor to create visually appealing emails that match your brand.'
      },
      {
        type: 'step',
        number: 3,
        title: 'Select Recipients',
        content: 'Choose your target audience from your contact lists or create custom segments.'
      },
      {
        type: 'step',
        number: 4,
        title: 'Schedule or Send',
        content: 'Either send your campaign immediately or schedule it for optimal delivery times.'
      }
    ]
  }
};

const getTypeIcon = (type: 'video' | 'pdf' | 'step-by-step') => {
  switch (type) {
    case 'video':
      return <Video className="w-5 h-5" />;
    case 'pdf':
      return <FileText className="w-5 h-5" />;
    case 'step-by-step':
      return <List className="w-5 h-5" />;
  }
};

export const TutorialPage: React.FC = () => {
  const { categorySlug, tutorialSlug } = useParams();
  const navigate = useNavigate();

  // Get tutorial content based on slug
  const tutorial = tutorialContent[tutorialSlug || ''];

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20 px-6">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-2xl font-bold text-black mb-4">Tutorial Not Found</h1>
            <p className="text-gray-600 mb-8">The requested tutorial could not be found.</p>
            <Button onClick={() => navigate('/support')} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Support Center
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button 
            onClick={() => navigate(`/support/${categorySlug}`)} 
            variant="ghost" 
            className="mb-8 text-gray-600 hover:text-[#078147]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {tutorial.category}
          </Button>

          {/* Tutorial Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {getTypeIcon(tutorial.type)}
                <span className="capitalize">{tutorial.type.replace('-', ' ')}</span>
              </div>
              {tutorial.duration && (
                <div className="flex items-center space-x-1 text-[#078147] text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  <span>{tutorial.duration}</span>
                </div>
              )}
            </div>
            <h1 className="text-4xl font-bold text-black mb-4">{tutorial.title}</h1>
          </div>

          {/* Tutorial Content */}
          <div className="space-y-6">
            {tutorial.content.map((section: any, index: number) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  {section.type === 'intro' && (
                    <p className="text-lg text-gray-700 leading-relaxed">{section.text}</p>
                  )}
                  
                  {section.type === 'step' && (
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-[#078147] text-white rounded-full flex items-center justify-center font-semibold">
                          {section.number}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">{section.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{section.content}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Button 
              onClick={() => navigate(`/support/${categorySlug}`)} 
              variant="outline"
              className="hover:bg-[#078147] hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {tutorial.category}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
