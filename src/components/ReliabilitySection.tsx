
import { MessageCircle, Shield, BookOpen, Users } from 'lucide-react';

const ReliabilitySection = () => {
  return (
    <section className="py-16 bg-[#f4f1ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#078147]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#078147]" />
                </div>
                <h3 className="text-xl font-bold text-black">99.9% Uptime</h3>
                <p className="text-gray-600">Reliable cloud infrastructure</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#078147]">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#078147]">500+</div>
                  <div className="text-sm text-gray-600">Happy Pharmacies</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#078147] rounded-full"></div>
                  <span className="text-sm text-gray-600">Secure data encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#078147] rounded-full"></div>
                  <span className="text-sm text-gray-600">GDPR compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#078147] rounded-full"></div>
                  <span className="text-sm text-gray-600">Regular backups</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Your Trusted Digital Assistant
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#078147]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">7-day Support</h3>
                  <p className="text-gray-600">Get help via chat and email whenever you need it</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#078147]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Stable & Secure</h3>
                  <p className="text-gray-600">Cloud infrastructure you can trust</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#078147]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Easy Onboarding</h3>
                  <p className="text-gray-600">Initial setup and video tutorials included</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#078147]" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Scalable Solution</h3>
                  <p className="text-gray-600">From solo pharmacists to large teams</p>
                </div>
              </div>
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

export default ReliabilitySection;
