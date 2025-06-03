
const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              The Smart Appointment System for
              <span className="text-[#078147]"> Modern Pharmacies</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              NovaFarm helps you automate bookings, improve customer service, and grow your pharmacy with ease.
            </p>
            <button className="bg-[#078147] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#066139] transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Book a Free Demo Call
            </button>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-[#078147]/10 to-[#f4f1ea] rounded-2xl p-8">
              {/* NovaFarm Dashboard Mockup */}
              <div className="bg-white rounded-xl shadow-2xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#078147] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">NF</span>
                    </div>
                    <div className="text-lg font-bold text-black">NovaFarm</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-[#f4f1ea] p-3 rounded-lg">
                    <div className="text-lg font-bold text-[#078147]">24</div>
                    <div className="text-xs text-gray-600">Today's Bookings</div>
                  </div>
                  <div className="bg-[#f4f1ea] p-3 rounded-lg">
                    <div className="text-lg font-bold text-[#078147]">156</div>
                    <div className="text-xs text-gray-600">This Month</div>
                  </div>
                  <div className="bg-[#f4f1ea] p-3 rounded-lg">
                    <div className="text-lg font-bold text-[#078147]">4.8★</div>
                    <div className="text-xs text-gray-600">Avg Rating</div>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Calendar Widget */}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-black mb-2">Today's Schedule</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">09:00 - Maria R.</span>
                        <span className="text-[#078147] bg-[#078147]/10 px-2 py-1 rounded">Confirmed</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">14:30 - Luca B.</span>
                        <span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Pending</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">16:00 - Anna S.</span>
                        <span className="text-[#078147] bg-[#078147]/10 px-2 py-1 rounded">Confirmed</span>
                      </div>
                    </div>
                  </div>

                  {/* Messages Widget */}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-black mb-2">Messages</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">FB</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-600">New message from Marco</div>
                          <div className="text-xs text-gray-500">2m ago</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">IG</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-600">Question about hours</div>
                          <div className="text-xs text-gray-500">5m ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Automation Preview */}
                <div className="mt-4 bg-[#078147]/5 p-3 rounded-lg border border-[#078147]/20">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-black">Automation Active</div>
                    <div className="w-2 h-2 bg-[#078147] rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Sending 24h reminders automatically</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
