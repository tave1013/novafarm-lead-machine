
import { Globe, MessageCircle, MapPin, Clock, Phone, Mail } from 'lucide-react';

export const ServicesPageMockup = () => (
  <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
    <div className="mb-4">
      <div className="h-8 bg-gray-100 rounded mb-4 flex items-center px-3">
        <Globe className="w-4 h-4 text-gray-400 mr-2" />
        <span className="text-xs text-gray-400">farmacia-rossi.it/services</span>
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-black mb-2">Our Professional Services</h3>
        <p className="text-sm text-gray-600">Expert consultations and personalized care</p>
      </div>
      
      <div className="space-y-3">
        <div className="border border-gray-200 rounded-lg p-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#078147]/10 rounded-lg flex items-center justify-center">
              <span className="text-xs">💊</span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">Medication Consultation</div>
              <div className="text-xs text-gray-600">Expert advice on prescriptions</div>
            </div>
            <button className="bg-[#078147] text-white px-3 py-1 rounded text-xs">Book Now</button>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#078147]/10 rounded-lg flex items-center justify-center">
              <span className="text-xs">🩺</span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">Health Screening</div>
              <div className="text-xs text-gray-600">Blood pressure, weight monitoring</div>
            </div>
            <button className="bg-[#078147] text-white px-3 py-1 rounded text-xs">Book Now</button>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#078147]/10 rounded-lg flex items-center justify-center">
              <span className="text-xs">💉</span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">Vaccination Service</div>
              <div className="text-xs text-gray-600">Flu shots, travel vaccines</div>
            </div>
            <button className="bg-[#078147] text-white px-3 py-1 rounded text-xs">Book Now</button>
          </div>
        </div>
      </div>
      
      <div className="bg-[#078147]/5 p-3 rounded-lg mt-4">
        <div className="text-xs text-[#078147] font-medium text-center">
          Book online or call (055) 123-4567
        </div>
      </div>
    </div>
  </div>
);

export const ContactPageMockup = () => (
  <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-auto">
    <div className="mb-4">
      <div className="h-8 bg-gray-100 rounded mb-4 flex items-center px-3">
        <Globe className="w-4 h-4 text-gray-400 mr-2" />
        <span className="text-xs text-gray-400">farmacia-rossi.it/contact</span>
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-black mb-2">Contact Farmacia Rossi</h3>
        <p className="text-sm text-gray-600">Get in touch for consultations or questions</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="grid grid-cols-7 gap-1 mb-2">
          <div className="h-6 bg-[#078147] rounded"></div>
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="h-6 bg-gray-300 rounded"></div>
        </div>
        <div className="text-xs text-gray-600 text-center">Interactive Map</div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <MapPin className="w-4 h-4 text-[#078147]" />
          <div className="text-sm">
            <div className="font-medium">Via Roma 123, Florence</div>
            <div className="text-gray-600 text-xs">50100 Firenze, Italy</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Clock className="w-4 h-4 text-[#078147]" />
          <div className="text-sm">
            <div className="font-medium">Mon-Fri: 8:30-19:30</div>
            <div className="text-gray-600 text-xs">Sat: 8:30-13:00</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Phone className="w-4 h-4 text-[#078147]" />
          <div className="text-sm font-medium">(055) 123-4567</div>
        </div>
      </div>
      
      <div className="bg-[#078147]/5 p-3 rounded-lg">
        <div className="text-xs font-medium mb-2">Quick Contact Form</div>
        <div className="space-y-2">
          <div className="h-6 bg-white border border-gray-200 rounded px-2 flex items-center">
            <span className="text-xs text-gray-500">Your name...</span>
          </div>
          <div className="h-6 bg-white border border-gray-200 rounded px-2 flex items-center">
            <span className="text-xs text-gray-500">Email address...</span>
          </div>
          <button className="w-full bg-[#078147] text-white py-2 rounded text-xs font-medium">
            Send Message
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-2">
        <MessageCircle className="w-4 h-4 text-[#078147]" />
        <span className="text-xs text-[#078147] font-medium">Live Chat Available</span>
      </div>
    </div>
  </div>
);
