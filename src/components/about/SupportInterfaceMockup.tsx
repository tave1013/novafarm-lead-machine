
import React from 'react';
import { MessageCircle, Headphones, Star, Shield, Clock, CheckCircle2 } from 'lucide-react';

const SupportInterfaceMockup = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 max-w-lg mx-auto">
      <div className="mb-4">
        <div className="h-6 bg-gray-100 rounded mb-4 flex items-center px-3">
          <div className="w-3 h-3 bg-[#078147] rounded-full mr-2 animate-pulse"></div>
          <span className="text-xs text-gray-400">NovaFarm Support Hub</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-black mb-2">Your Dedicated Support Team</h3>
          <p className="text-gray-600 text-sm">Real people, real solutions - 7 days a week</p>
        </div>
        
        {/* Support Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-[#078147]/5 border border-[#078147]/20 rounded-lg p-3 text-center">
            <Clock className="w-6 h-6 text-[#078147] mx-auto mb-1" />
            <div className="font-bold text-lg text-black">&lt;2h</div>
            <div className="text-xs text-gray-600">Response Time</div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
            <Star className="w-6 h-6 text-blue-600 mx-auto mb-1" />
            <div className="font-bold text-lg text-black">4.9</div>
            <div className="text-xs text-gray-600">Support Rating</div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
            <Shield className="w-6 h-6 text-purple-600 mx-auto mb-1" />
            <div className="font-bold text-lg text-black">24/7</div>
            <div className="text-xs text-gray-600">Availability</div>
          </div>
        </div>
        
        {/* Chat Interface */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#078147] rounded-full flex items-center justify-center">
                <span className="text-white text-sm">👩‍💻</span>
              </div>
              <div>
                <div className="font-medium text-sm">Sarah - Support Specialist</div>
                <div className="text-xs text-[#078147] flex items-center">
                  <div className="w-2 h-2 bg-[#078147] rounded-full mr-1"></div>
                  Online now
                </div>
              </div>
            </div>
            <MessageCircle className="w-5 h-5 text-[#078147]" />
          </div>
          
          <div className="space-y-3">
            <div className="bg-[#078147]/5 p-3 rounded-lg">
              <div className="text-sm text-black mb-1">Hi! I see you're setting up your booking calendar. Need help?</div>
              <div className="text-xs text-gray-500">Just now</div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg ml-4">
              <div className="text-sm text-black mb-1">Yes, I want to add vaccination slots</div>
              <div className="text-xs text-gray-500">Just now</div>
            </div>
            
            <div className="bg-[#078147]/5 p-3 rounded-lg">
              <div className="text-sm text-black mb-1">Perfect! I'll walk you through it step by step. Let me share your screen...</div>
              <div className="text-xs text-gray-500">Typing...</div>
            </div>
          </div>
        </div>
        
        {/* Onboarding Progress */}
        <div className="border border-[#078147]/20 rounded-lg p-4 bg-[#078147]/5">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-black">Your Onboarding Progress</h4>
            <span className="text-xs text-[#078147] font-medium">80% Complete</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#078147]" />
              <span className="text-sm text-gray-700">Account setup completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#078147]" />
              <span className="text-sm text-gray-700">Services configured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-[#078147] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#078147] rounded-full"></div>
              </div>
              <span className="text-sm text-[#078147] font-medium">Calendar integration - In Progress</span>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-[#078147]/20">
            <div className="flex items-center space-x-2">
              <Headphones className="w-4 h-4 text-[#078147]" />
              <span className="text-xs text-gray-600">Need help? Your specialist Sarah is available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportInterfaceMockup;
