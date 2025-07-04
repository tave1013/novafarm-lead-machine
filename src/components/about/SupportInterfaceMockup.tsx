
import React from 'react';
import { MessageCircle, Headphones, Star, Shield, Clock, CheckCircle2, Phone, Users } from 'lucide-react';

const SupportInterfaceMockup = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="h-6 bg-gray-100 rounded mb-4 flex items-center px-3">
          <div className="w-3 h-3 bg-[#078147] rounded-full mr-2 animate-pulse"></div>
          <span className="text-xs text-gray-400">NovaFarm Support Center</span>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-black mb-2">Your Dedicated Support Team</h3>
          <p className="text-gray-600 text-sm">Real people, real solutions - available when you need us</p>
        </div>
        
        {/* Support Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-[#078147]/5 border border-[#078147]/20 rounded-lg p-4 text-center">
            <Clock className="w-6 h-6 text-[#078147] mx-auto mb-2" />
            <div className="font-bold text-lg text-black">&lt;2h</div>
            <div className="text-xs text-gray-600">Response</div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <Star className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="font-bold text-lg text-black">4.9/5</div>
            <div className="text-xs text-gray-600">Rating</div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <Shield className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="font-bold text-lg text-black">24/7</div>
            <div className="text-xs text-gray-600">Available</div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="font-bold text-lg text-black">500+</div>
            <div className="text-xs text-gray-600">Happy Clients</div>
          </div>
        </div>
        
        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Live Chat */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#078147] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-medium text-sm">Live Chat</div>
                  <div className="text-xs text-[#078147] flex items-center">
                    <div className="w-2 h-2 bg-[#078147] rounded-full mr-1"></div>
                    Sarah online
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="bg-[#078147]/5 p-2 rounded text-xs">
                Hi! Need help with your booking setup?
              </div>
              <div className="bg-gray-50 p-2 rounded text-xs ml-4">
                Yes, integration questions
              </div>
            </div>
          </div>
          
          {/* Phone Support */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-medium text-sm">Phone Support</div>
                  <div className="text-xs text-blue-600">Available now</div>
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 mb-2">
              Direct line to our pharmacy specialists
            </div>
            <div className="bg-blue-50 p-2 rounded text-xs font-medium text-blue-700">
              +44 20 7946 0958
            </div>
          </div>
        </div>
        
        {/* Onboarding Progress */}
        <div className="border border-[#078147]/20 rounded-lg p-4 bg-[#078147]/5">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-black flex items-center">
              <Headphones className="w-4 h-4 mr-2 text-[#078147]" />
              Onboarding Progress
            </h4>
            <span className="text-xs text-[#078147] font-medium">85% Complete</span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <CheckCircle2 className="w-4 h-4 text-[#078147]" />
              <span className="text-gray-700">Setup</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle2 className="w-4 h-4 text-[#078147]" />
              <span className="text-gray-700">Training</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 border-2 border-[#078147] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#078147] rounded-full"></div>
              </div>
              <span className="text-[#078147] font-medium">Go Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportInterfaceMockup;
