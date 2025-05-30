
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
            <div className="bg-gradient-to-br from-[#078147]/10 to-[#f4f1ea] rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-xl shadow-2xl p-6 hover:shadow-3xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-gray-600">NovaFarm Dashboard</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-[#078147]/20 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-[#078147]/10 p-3 rounded-lg hover:bg-[#078147]/20 transition-colors">
                      <div className="h-2 bg-[#078147] rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                      <div className="h-2 bg-gray-300 rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile mockup */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 w-32 transform hover:scale-110 transition-transform duration-300">
                <div className="bg-[#078147] h-2 rounded mb-2"></div>
                <div className="space-y-1">
                  <div className="h-1 bg-gray-200 rounded"></div>
                  <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-1 bg-gray-200 rounded w-1/2"></div>
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
