
import { Globe, MessageCircle, MapPin, Clock, Phone, Mail } from 'lucide-react';

export const ServicesPageMockup = () => (
  <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl mx-auto">
    <div className="mb-6">
      <div className="h-8 bg-gray-100 rounded mb-6 flex items-center px-3">
        <Globe className="w-4 h-4 text-gray-400 mr-2" />
        <span className="text-xs text-gray-400">farmacia-rossi.it/services</span>
      </div>
    </div>
    
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-black mb-3">Our Professional Services</h3>
        <p className="text-gray-600">Expert consultations and personalized care for your health needs</p>
      </div>
      
      {/* Service grid - top row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="border border-gray-200 rounded-lg p-4 text-center">
          <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">💊</span>
          </div>
          <div className="font-medium text-sm mb-1">Medication Review</div>
          <div className="text-xs text-gray-600 mb-3">Expert prescription advice</div>
          <button className="bg-[#078147] text-white px-3 py-1 rounded text-xs w-full">Book Now</button>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4 text-center">
          <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">🩺</span>
          </div>
          <div className="font-medium text-sm mb-1">Health Screening</div>
          <div className="text-xs text-gray-600 mb-3">Blood pressure monitoring</div>
          <button className="bg-[#078147] text-white px-3 py-1 rounded text-xs w-full">Book Now</button>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4 text-center">
          <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">💉</span>
          </div>
          <div className="font-medium text-sm mb-1">Vaccination</div>
          <div className="text-xs text-gray-600 mb-3">Flu shots & travel vaccines</div>
          <button className="bg-[#078147] text-white px-3 py-1 rounded text-xs w-full">Book Now</button>
        </div>
      </div>
      
      {/* Service grid - bottom row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="border border-gray-200 rounded-lg p-4 text-center">
          <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">🧪</span>
          </div>
          <div className="font-medium text-sm mb-1">Lab Tests</div>
          <div className="text-xs text-gray-600 mb-3">Quick health checks</div>
          <button className="bg-[#078147] text-white px-3 py-1 rounded text-xs w-full">Book Now</button>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4 text-center">
          <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">🏥</span>
          </div>
          <div className="font-medium text-sm mb-1">Consultations</div>
          <div className="text-xs text-gray-600 mb-3">Personal health advice</div>
          <button className="bg-[#078147] text-white px-3 py-1 rounded text-xs w-full">Book Now</button>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4 text-center">
          <div className="w-12 h-12 bg-[#078147]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">📋</span>
          </div>
          <div className="font-medium text-sm mb-1">Wellness Check</div>
          <div className="text-xs text-gray-600 mb-3">Complete health review</div>
          <button className="bg-[#078147] text-white px-3 py-1 rounded text-xs w-full">Book Now</button>
        </div>
      </div>
      
      {/* Featured service with image and text layout */}
      <div className="border border-[#078147]/20 rounded-lg p-6 bg-[#078147]/5">
        <div className="grid grid-cols-2 gap-6 items-center">
          <div>
            <h4 className="text-lg font-bold text-black mb-2">Specialized Consultations</h4>
            <p className="text-sm text-gray-600 mb-4">Get personalized advice from our expert pharmacists on medication management, drug interactions, and wellness planning.</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-[#078147] rounded-full"></div>
                <span className="text-xs text-gray-700">One-on-one consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-[#078147] rounded-full"></div>
                <span className="text-xs text-gray-700">Detailed health assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-[#078147] rounded-full"></div>
                <span className="text-xs text-gray-700">Personalized recommendations</span>
              </div>
            </div>
            <button className="bg-[#078147] text-white px-4 py-2 rounded-lg text-sm font-medium">
              Schedule Consultation
            </button>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="w-full h-32 bg-gradient-to-br from-[#078147]/10 to-[#078147]/5 rounded-lg flex items-center justify-center mb-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#078147] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl text-white">👩‍⚕️</span>
                </div>
                <div className="text-xs text-gray-600">Expert Pharmacist</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-black">Dr. Maria Rossi</div>
              <div className="text-xs text-gray-600">15+ years experience</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#078147]/5 p-4 rounded-lg text-center">
        <div className="text-sm text-[#078147] font-medium">
          📞 Book online or call (055) 123-4567
        </div>
        <div className="text-xs text-gray-600 mt-1">Available Mon-Fri 8:30-19:30, Sat 8:30-13:00</div>
      </div>
    </div>
  </div>
);
