import { Check, Calendar, MessageSquare, Star, BarChart3, Users, CreditCard, Zap, Headphones, Globe, Database, Shield, QrCode, Building2, Stethoscope, Microscope } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingSection from '../components/PricingSection';

const Features = () => {
  const features = [
    {
      id: 'calendar',
      icon: <Calendar className="w-8 h-8 text-[#078147]" />,
      title: 'Smart Booking Calendar',
      description: 'Transform your appointment management with our intelligent 24/7 booking system. Your customers can book appointments anytime from any device, while you maintain complete control over your schedule and availability.',
      detailedDescription: 'Our smart calendar automatically syncs with your team\'s individual schedules, prevents double bookings, and allows you to set specific services for different time slots. The system intelligently manages buffer times between appointments and can handle complex scheduling scenarios like recurring appointments or group sessions.',
      benefits: [
        '24/7 online booking from any device',
        'Automatic sync with team schedules',
        'Service-specific time slot management',
        'Buffer time and break management',
        'Recurring appointment support',
        'Custom availability rules per staff member'
      ],
      mockup: (
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Book Appointment</h3>
            <Calendar className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
              <div key={idx} className="text-center text-xs text-gray-500 py-2">{day}</div>
            ))}
            {Array.from({length: 35}, (_, i) => (
              <div key={i} className={`text-center text-sm py-2 rounded ${
                i === 15 ? 'bg-[#078147] text-white' : 
                i === 22 ? 'bg-[#078147]/20 text-[#078147]' : 
                'text-gray-600 hover:bg-gray-100'
              }`}>
                {i + 1 <= 30 ? i + 1 : ''}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="bg-[#078147] text-white p-2 rounded text-sm">9:00 AM - Available</div>
            <div className="bg-gray-100 text-gray-500 p-2 rounded text-sm">10:30 AM - Booked</div>
            <div className="bg-[#078147] text-white p-2 rounded text-sm">2:00 PM - Available</div>
          </div>
        </div>
      ),
      imageLeft: true
    },
    {
      id: 'automation',
      icon: <Zap className="w-8 h-8 text-[#078147]" />,
      title: 'Automated Reminders & Follow-ups',
      description: 'Never worry about no-shows or follow-up communications again. Our intelligent automation system handles all your customer communications seamlessly.',
      detailedDescription: 'Set up automated workflows that send personalized reminders via SMS and email before appointments, and follow-up messages after visits. The system can be customized to send different types of messages based on the service type, customer preferences, and appointment status.',
      benefits: [
        'Automatic appointment reminders (24h & same day)',
        'Post-visit follow-up messages',
        'Customizable message templates',
        'Multi-channel delivery (SMS + Email)',
        'Smart timing based on customer preferences',
        'Reduce no-shows by up to 80%'
      ],
      mockup: (
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Automation Workflow</h3>
            <Zap className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div>
                <div className="text-sm font-medium">24h Reminder</div>
                <div className="text-xs text-gray-500">SMS + Email sent automatically</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div>
                <div className="text-sm font-medium">2h Reminder</div>
                <div className="text-xs text-gray-500">Final SMS reminder</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-[#078147] rounded-full"></div>
              <div>
                <div className="text-sm font-medium">Post-Visit Follow-up</div>
                <div className="text-xs text-gray-500">Thank you + review request</div>
              </div>
            </div>
          </div>
        </div>
      ),
      imageLeft: false
    },
    {
      id: 'qr-codes',
      icon: <QrCode className="w-8 h-8 text-[#078147]" />,
      title: 'QR Code Marketing Posters',
      description: 'Boost your in-store bookings with branded QR code posters that customers can scan to book appointments instantly. Perfect for promoting your services and tracking campaign effectiveness.',
      detailedDescription: 'We create custom QR code posters that link directly to your booking system. Display them in-store to promote specific services or seasonal campaigns. Each QR code is trackable, allowing you to see scan statistics and booking conversions. Posters are professionally designed to match your pharmacy\'s branding and can be updated for different promotions.',
      benefits: [
        'QR codes link to dedicated landing pages',
        'Ready-made templates, customized to your pharmacy',
        'View scan statistics and booking conversions',
        'Works perfectly for seasonal campaigns or events',
        'Professional poster design included',
        'Track ROI on marketing campaigns'
      ],
      mockup: (
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">QR Marketing</h3>
            <QrCode className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-4">
            <div className="bg-[#078147]/10 p-4 rounded-lg">
              <div className="w-16 h-16 bg-[#078147] rounded mx-auto mb-2 flex items-center justify-center">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <div className="text-center text-sm font-medium">Scan & Book</div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-gray-50 p-2 rounded text-center">
                <div className="font-bold text-[#078147]">247</div>
                <div>Scans</div>
              </div>
              <div className="bg-gray-50 p-2 rounded text-center">
                <div className="font-bold text-blue-600">89</div>
                <div>Bookings</div>
              </div>
              <div className="bg-gray-50 p-2 rounded text-center">
                <div className="font-bold text-yellow-600">36%</div>
                <div>Rate</div>
              </div>
            </div>
          </div>
        </div>
      ),
      imageLeft: true
    },
    {
      id: 'reviews',
      icon: <Star className="w-8 h-8 text-[#078147]" />,
      title: 'Review Request System',
      description: 'Automatically boost your online reputation by requesting Google reviews from satisfied customers. Our smart system knows the perfect timing to ask for feedback.',
      detailedDescription: 'The system automatically identifies satisfied customers based on appointment completion and sends personalized review requests at optimal times. You can customize templates, set delays, and track review acquisition rates to continuously improve your online presence.',
      benefits: [
        'Automatic Google review requests',
        'Smart timing based on customer behavior',
        'Customizable message templates',
        'Review tracking and analytics',
        'Reputation management dashboard',
        'Increase positive reviews by 300%'
      ],
      mockup: (
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Review Request</h3>
            <Star className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="bg-gradient-to-r from-[#078147]/10 to-[#078147]/5 p-4 rounded-lg mb-4">
            <div className="text-sm text-gray-600 mb-2">How was your experience?</div>
            <div className="flex space-x-1 mb-3">
              {[1,2,3,4,5].map(star => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <button className="bg-[#078147] text-white px-4 py-2 rounded text-sm w-full">
              Leave Google Review
            </button>
          </div>
          <div className="text-xs text-gray-500 text-center">
            Sent 24h after appointment completion
          </div>
        </div>
      ),
      imageLeft: false
    },
    {
      id: 'chat',
      icon: <MessageSquare className="w-8 h-8 text-[#078147]" />,
      title: 'Unified Messaging Inbox',
      description: 'Manage all your customer communications from Facebook, Instagram, Email, and SMS in one centralized, powerful inbox.',
      detailedDescription: 'Never miss a message again. Our unified inbox aggregates conversations from all your communication channels, allowing you to respond quickly and consistently. Tag conversations, assign them to team members, and maintain a complete history of all customer interactions.',
      benefits: [
        'Centralize FB, Instagram, Email & SMS',
        'Real-time notifications across all channels',
        'Tag and categorize conversations',
        'Assign chats to specific team members',
        'Complete conversation history',
        'Quick response templates'
      ],
      mockup: (
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Unified Inbox</h3>
            <MessageSquare className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">FB</div>
              <div className="flex-1">
                <div className="text-sm font-medium">Maria R.</div>
                <div className="text-xs text-gray-500">Ciao, vorrei prenotare...</div>
              </div>
              <div className="text-xs text-gray-400">2m</div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">IG</div>
              <div className="flex-1">
                <div className="text-sm font-medium">@carlo_farm</div>
                <div className="text-xs text-gray-500">Orari di apertura?</div>
              </div>
              <div className="text-xs text-gray-400">5m</div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">SMS</div>
              <div className="flex-1">
                <div className="text-sm font-medium">+39 123 456</div>
                <div className="text-xs text-gray-500">Grazie per il servizio!</div>
              </div>
              <div className="text-xs text-gray-400">1h</div>
            </div>
          </div>
        </div>
      ),
      imageLeft: true
    },
    {
      id: 'dashboard',
      icon: <BarChart3 className="w-8 h-8 text-[#078147]" />,
      title: 'Dashboard & Analytics',
      description: 'Get powerful insights into your pharmacy\'s performance with our comprehensive dashboard and reporting system.',
      detailedDescription: 'Track key performance indicators, monitor appointment trends, analyze customer behavior, and generate detailed reports. The dashboard provides real-time data visualization and helps you make informed decisions to grow your business.',
      benefits: [
        'Real-time KPI monitoring',
        'Appointment and revenue tracking',
        'Customer behavior analytics',
        'Monthly performance reports',
        'Custom date range filtering',
        'Export capabilities for accounting'
      ],
      mockup: (
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Dashboard</h3>
            <BarChart3 className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-[#078147]/10 p-3 rounded-lg">
              <div className="text-2xl font-bold text-[#078147]">847</div>
              <div className="text-xs text-gray-600">Appuntamenti</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">€12.4k</div>
              <div className="text-xs text-gray-600">Fatturato</div>
            </div>
          </div>
          <div className="h-24 bg-gradient-to-r from-[#078147]/20 to-[#078147]/5 rounded-lg flex items-end justify-between p-3">
            {[0.3, 0.7, 0.5, 0.9, 0.6, 0.8, 1].map((height, idx) => (
              <div key={idx} className="bg-[#078147] rounded-t" style={{height: `${height * 60}px`, width: '8px'}}></div>
            ))}
          </div>
        </div>
      ),
      imageLeft: false
    },
    {
      id: 'payments',
      icon: <CreditCard className="w-8 h-8 text-[#078147]" />,
      title: 'Online Payment Integration',
      description: 'Accept secure payments at booking time to reduce no-shows and improve your cash flow with our Stripe integration.',
      detailedDescription: 'Integrated payment processing allows customers to pay deposits or full amounts when booking appointments. This significantly reduces no-shows while improving your cash flow. The system supports various payment methods and provides detailed transaction reporting.',
      benefits: [
        'Secure Stripe payment integration',
        'Accept deposits or full payments',
        'Reduce no-shows by up to 90%',
        'Multiple payment methods supported',
        'Automatic payment confirmations',
        'Detailed transaction reporting'
      ],
      mockup: (
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Payment</h3>
            <CreditCard className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">Consultation - Dr. Smith</div>
              <div className="text-lg font-bold">€50.00</div>
            </div>
            <div className="space-y-2">
              <input className="w-full p-2 border rounded text-sm" placeholder="Card Number" value="**** **** **** 1234" readOnly />
              <div className="grid grid-cols-2 gap-2">
                <input className="p-2 border rounded text-sm" placeholder="MM/YY" value="12/25" readOnly />
                <input className="p-2 border rounded text-sm" placeholder="CVC" value="***" readOnly />
              </div>
            </div>
            <button className="w-full bg-[#078147] text-white py-3 rounded font-semibold">
              Pay €50.00
            </button>
          </div>
        </div>
      ),
      imageLeft: true
    },
    {
      id: 'team',
      icon: <Users className="w-8 h-8 text-[#078147]" />,
      title: 'Team & User Management',
      description: 'Efficiently manage your team with role-based access, individual schedules, and service assignments.',
      detailedDescription: 'Create accounts for all team members with customized permissions and roles. Assign specific services to individual staff members, manage their working hours, and track their performance. The system ensures proper access control while maintaining workflow efficiency.',
      benefits: [
        'Role-based access control (Admin, Operator, Viewer)',
        'Individual staff scheduling',
        'Service assignment per team member',
        'Performance tracking by operator',
        'Custom working hours management',
        'Team communication tools'
      ],
      mockup: (
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Team Management</h3>
            <Users className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <div className="w-10 h-10 bg-[#078147] rounded-full flex items-center justify-center text-white text-sm">DS</div>
              <div className="flex-1">
                <div className="text-sm font-medium">Dr. Smith</div>
                <div className="text-xs text-gray-500">Admin • Consultations</div>
              </div>
              <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</div>
            </div>
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">MJ</div>
              <div className="flex-1">
                <div className="text-sm font-medium">Maria Johnson</div>
                <div className="text-xs text-gray-500">Operator • Vaccinations</div>
              </div>
              <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</div>
            </div>
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">AB</div>
              <div className="flex-1">
                <div className="text-sm font-medium">Anna Brown</div>
                <div className="text-xs text-gray-500">Viewer • Reception</div>
              </div>
              <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Break</div>
            </div>
          </div>
        </div>
      ),
      imageLeft: false
    },
    {
      id: 'database',
      icon: <Database className="w-8 h-8 text-[#078147]" />,
      title: 'Client Database & Notes',
      description: 'Maintain comprehensive client profiles with appointment history, notes, and preferences for personalized service.',
      detailedDescription: 'Build detailed customer profiles that include contact information, appointment history, service preferences, and custom notes. This comprehensive database helps you provide personalized service and enables targeted marketing campaigns.',
      benefits: [
        'Comprehensive client profiles',
        'Appointment history tracking',
        'Custom notes and preferences',
        'Service history and recommendations',
        'Contact management and segmentation',
        'GDPR-compliant data handling'
      ],
      mockup: (
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Client Profile</h3>
            <Database className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">MR</div>
              <div>
                <div className="font-semibold">Maria Rossi</div>
                <div className="text-sm text-gray-500">maria.rossi@email.com</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-gray-500">Last Visit</div>
                <div className="font-medium">15 Mar 2024</div>
              </div>
              <div>
                <div className="text-gray-500">Total Visits</div>
                <div className="font-medium">23</div>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm font-medium mb-1">Notes</div>
              <div className="text-xs text-gray-600">Prefers morning appointments. Allergic to penicillin.</div>
            </div>
          </div>
        </div>
      ),
      imageLeft: true
    },
    {
      id: 'landing',
      icon: <Globe className="w-8 h-8 text-[#078147]" />,
      title: 'Professional Landing Pages',
      description: 'Get up to 3 custom landing pages designed specifically for your pharmacy, complete with hosting and maintenance.',
      detailedDescription: 'Professional, mobile-responsive landing pages that showcase your services and convert visitors into customers. Each page includes contact forms, integrated chat, location maps, and is optimized for search engines. Hosting, updates, and maintenance are all included.',
      benefits: [
        'Up to 3 custom landing pages',
        'Mobile-responsive design',
        'SEO-optimized content',
        'Integrated contact forms and chat',
        'Google Maps integration',
        'Hosting and maintenance included'
      ],
      mockup: (
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Landing Page</h3>
            <Globe className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-3">
            <div className="bg-[#078147] text-white p-3 rounded-lg text-center">
              <div className="text-lg font-bold">Farmacia Centrale</div>
              <div className="text-sm opacity-90">Il tuo benessere, la nostra missione</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-100 h-16 rounded flex items-center justify-center text-xs text-gray-500">Services</div>
              <div className="bg-gray-100 h-16 rounded flex items-center justify-center text-xs text-gray-500">About</div>
              <div className="bg-gray-100 h-16 rounded flex items-center justify-center text-xs text-gray-500">Contact</div>
            </div>
            <div className="bg-[#078147] text-white p-2 rounded text-center text-sm">
              Book Appointment
            </div>
            <div className="text-xs text-gray-500 text-center">
              Mobile optimized • SEO ready
            </div>
          </div>
        </div>
      ),
      imageLeft: false
    },
    {
      id: 'support',
      icon: <Headphones className="w-8 h-8 text-[#078147]" />,
      title: '7-Day Human Support',
      description: 'Get dedicated support when you need it with our human support team, comprehensive onboarding, and help resources.',
      detailedDescription: 'Our experienced support team is available 7 days a week via chat and email to help you with any questions or issues. We also provide comprehensive onboarding videos, detailed documentation, and a searchable help center.',
      benefits: [
        '7-day human support via chat and email',
        'Comprehensive onboarding videos',
        'Detailed help center and documentation',
        'Live assistance during setup',
        'Regular check-ins and optimization tips',
        'Priority support for Pro plan users'
      ],
      mockup: (
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Support Center</h3>
            <Headphones className="w-5 h-5 text-[#078147]" />
          </div>
          <div className="space-y-3">
            <div className="bg-[#078147]/10 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-sm font-medium">Support Team Online</div>
              </div>
              <div className="text-xs text-gray-600">Average response time: 2 minutes</div>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-50 p-2 rounded text-sm">📚 Getting Started Guide</div>
              <div className="bg-gray-50 p-2 rounded text-sm">🎥 Video Tutorials</div>
              <div className="bg-gray-50 p-2 rounded text-sm">💬 Live Chat Support</div>
              <div className="bg-gray-50 p-2 rounded text-sm">📧 Email Support</div>
            </div>
            <button className="w-full bg-[#078147] text-white py-2 rounded text-sm">
              Start Chat
            </button>
          </div>
        </div>
      ),
      imageLeft: true
    }
  ];

  const benefits = [
    {
      title: 'Save Time with Automation',
      description: 'Eliminate manual tasks and focus on what matters most - your customers.',
      icon: <Zap className="w-8 h-8 text-[#078147]" />
    },
    {
      title: 'Centralize Operations',
      description: 'Manage everything from one unified platform designed for pharmacies.',
      icon: <Database className="w-8 h-8 text-[#078147]" />
    },
    {
      title: 'Improve Customer Retention',
      description: 'Automated follow-ups and review requests keep customers coming back.',
      icon: <Star className="w-8 h-8 text-[#078147]" />
    },
    {
      title: 'Increase Revenue',
      description: 'Reduce no-shows and capture more bookings with online payments.',
      icon: <BarChart3 className="w-8 h-8 text-[#078147]" />
    },
    {
      title: 'Built for Pharmacies',
      description: 'Every feature is designed specifically for pharmacy and healthcare workflows.',
      icon: <Shield className="w-8 h-8 text-[#078147]" />
    },
    {
      title: 'Professional Support',
      description: 'Get help when you need it with our dedicated 7-day support team.',
      icon: <Headphones className="w-8 h-8 text-[#078147]" />
    }
  ];

  const targetUsers = [
    {
      icon: <Building2 className="w-8 h-8 text-[#078147]" />,
      title: "Local Pharmacies",
      description: "Independent pharmacies looking to modernize their appointment booking and client communication systems."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-[#078147]" />,
      title: "Para-pharmacies",
      description: "Health and wellness centers offering specialized services like consultations, beauty treatments, and health screenings."
    },
    {
      icon: <Users className="w-8 h-8 text-[#078147]" />,
      title: "Pharmacy Chains",
      description: "Multi-location pharmacy groups needing centralized management with individual branch customization."
    },
    {
      icon: <Microscope className="w-8 h-8 text-[#078147]" />,
      title: "Healthcare Consultants",
      description: "Independent healthcare professionals and labs offering appointment-based services to clients."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Intro Section */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
              Discover All the Power of NovaFarm
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Explore every feature that makes NovaFarm the complete solution for modern pharmacies. 
              From intelligent booking to automated workflows, discover how we simplify your operations.
            </p>
            
            {/* Dashboard Mockup */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border">
                <div className="bg-gray-50 px-6 py-4 border-b flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">NovaFarm Dashboard</div>
                </div>
                <div className="flex">
                  <div className="w-64 bg-[#078147] text-white p-6">
                    <div className="text-xl font-bold mb-6">NovaFarm</div>
                    <nav className="space-y-3">
                      <div className="flex items-center space-x-3 text-white/90 hover:text-white">
                        <Calendar className="w-5 h-5" />
                        <span>Calendar</span>
                      </div>
                      <div className="flex items-center space-x-3 text-white/90 hover:text-white">
                        <MessageSquare className="w-5 h-5" />
                        <span>Messages</span>
                      </div>
                      <div className="flex items-center space-x-3 text-white/90 hover:text-white">
                        <Users className="w-5 h-5" />
                        <span>Clients</span>
                      </div>
                      <div className="flex items-center space-x-3 text-white/90 hover:text-white">
                        <BarChart3 className="w-5 h-5" />
                        <span>Analytics</span>
                      </div>
                      <div className="flex items-center space-x-3 text-white/90 hover:text-white">
                        <Zap className="w-5 h-5" />
                        <span>Automations</span>
                      </div>
                    </nav>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-[#078147]/10 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-[#078147]">247</div>
                        <div className="text-sm text-gray-600">Appointments This Month</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">€8.4k</div>
                        <div className="text-sm text-gray-600">Revenue</div>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">4.8⭐</div>
                        <div className="text-sm text-gray-600">Average Rating</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-4">Today's Schedule</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded border-l-4 border-[#078147]">
                          <div>
                            <div className="font-medium">Maria Rossi</div>
                            <div className="text-sm text-gray-500">Consultation</div>
                          </div>
                          <div className="text-sm text-gray-500">09:00</div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded border-l-4 border-blue-500">
                          <div>
                            <div className="font-medium">Giuseppe Verdi</div>
                            <div className="text-sm text-gray-500">Vaccination</div>
                          </div>
                          <div className="text-sm text-gray-500">11:30</div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded border-l-4 border-yellow-500">
                          <div>
                            <div className="font-medium">Anna Bianchi</div>
                            <div className="text-sm text-gray-500">Check-up</div>
                          </div>
                          <div className="text-sm text-gray-500">14:00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Feature Sections */}
      {features.map((feature, index) => (
        <section key={feature.id} id={feature.id} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-[#f4f1ea]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${feature.imageLeft ? '' : 'lg:grid-flow-col-dense'}`}>
              {/* Mockup */}
              <div className={`mb-8 lg:mb-0 ${feature.imageLeft ? 'lg:order-1' : 'lg:order-2 lg:col-start-1'}`}>
                <div className="flex justify-center">
                  {feature.mockup}
                </div>
              </div>

              {/* Content */}
              <div className={feature.imageLeft ? 'lg:order-2' : 'lg:order-1 lg:col-start-2'}>
                <div className="flex items-center space-x-4 mb-6">
                  {feature.icon}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">{feature.title}</h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {feature.detailedDescription}
                </p>

                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-[#078147] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose NovaFarm?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built specifically for pharmacies, NovaFarm delivers real results that transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Perfect for Every Type of Pharmacy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              NovaFarm adapts to your specific needs, whether you're a single location or managing multiple branches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetUsers.map((audience, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[#078147]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                    {audience.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      {audience.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#078147] max-w-2xl mx-auto">
              <p className="text-gray-700 font-medium">
                <span className="text-[#078147] font-bold">Ready to get started?</span> Our team will help you customize NovaFarm to fit your pharmacy's unique workflow and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      <Footer />
    </div>
  );
};

export default Features;
