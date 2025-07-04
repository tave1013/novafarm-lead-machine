
import React from 'react';
import { MessageCircle, Users, Award, CheckCircle2, User, Star } from 'lucide-react';

const TeamExperienceMockup = () => {
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
          <h3 className="text-lg font-bold text-black mb-2">Your Personal Success Team</h3>
          <p className="text-gray-600 text-sm">Pharmacy experts, tech specialists & dedicated support</p>
        </div>
        
        {/* Team Member Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#078147]/5 border border-[#078147]/20 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-[#078147] rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-medium text-sm">Sarah</div>
                <div className="text-xs text-[#078147]">Pharmacy Specialist</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">15+ years pharmacy experience</div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-medium text-sm">James</div>
                <div className="text-xs text-blue-600">Tech Support</div>
              </div>
            </div>
            <div className="text-xs text-gray-600">Integration & setup expert</div>
          </div>
        </div>
        
        {/* Success Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-green-50 rounded">
            <Star className="w-4 h-4 text-green-600 mx-auto mb-1" />
            <div className="font-bold text-sm text-black">4.9/5</div>
            <div className="text-xs text-gray-600">Support Rating</div>
          </div>
          
          <div className="text-center p-2 bg-purple-50 rounded">
            <Award className="w-4 h-4 text-purple-600 mx-auto mb-1" />
            <div className="font-bold text-sm text-black">98%</div>
            <div className="text-xs text-gray-600">Success Rate</div>
          </div>
          
          <div className="text-center p-2 bg-blue-50 rounded">
            <CheckCircle2 className="w-4 h-4 text-blue-600 mx-auto mb-1" />
            <div className="font-bold text-sm text-black">48h</div>
            <div className="text-xs text-gray-600">Setup Time</div>
          </div>
        </div>
        
        {/* Personal Touch Message */}
        <div className="bg-[#078147]/5 border border-[#078147]/20 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <MessageCircle className="w-4 h-4 text-[#078147]" />
            <span className="font-medium text-sm text-black">Personal Message</span>
          </div>
          <div className="text-xs text-gray-700 italic">
            "We're not just here to sell software. We're here to help your pharmacy thrive. Every question matters, every challenge is our priority."
          </div>
          <div className="text-xs text-[#078147] mt-2 font-medium">- The NovaFarm Team</div>
        </div>
      </div>
    </div>
  );
};

export default TeamExperienceMockup;
