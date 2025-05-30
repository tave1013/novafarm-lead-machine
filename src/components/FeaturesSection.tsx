
import { Calendar, MessageSquare, Star, BarChart3, Users, CreditCard } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-[#078147]" />,
      title: "24/7 Online Booking Calendar",
      description: "Let customers book appointments anytime, anywhere"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#078147]" />,
      title: "Automated Confirmations",
      description: "Smart follow-ups and reminders sent automatically"
    },
    {
      icon: <Star className="w-8 h-8 text-[#078147]" />,
      title: "Smart Review Requests",
      description: "Get more reviews after each successful visit"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#078147]" />,
      title: "Unified Dashboard",
      description: "Full control of your pharmacy operations in one place"
    },
    {
      icon: <Users className="w-8 h-8 text-[#078147]" />,
      title: "Single App for Staff",
      description: "One simple app for your entire team to use"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#078147]" />,
      title: "Online Payment Acceptance",
      description: "Accept payments before appointments seamlessly"
    }
  ];

  return (
    <section id="features" className="py-16 bg-[#f4f1ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#078147]" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Today's Appointments</div>
                    <div className="text-sm text-gray-600">12 scheduled</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { time: "09:00", name: "Maria Rossi", type: "Consultation" },
                    { time: "10:30", name: "Luca Bianchi", type: "Vaccine" },
                    { time: "14:00", name: "Anna Verdi", type: "Health Check" }
                  ].map((appointment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-sm font-medium text-[#078147]">{appointment.time}</div>
                        <div>
                          <div className="font-medium text-black">{appointment.name}</div>
                          <div className="text-sm text-gray-600">{appointment.type}</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-[#078147] rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Everything You Need to Simplify Your Pharmacy's Operations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-[#078147] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#066139] transition-colors">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
