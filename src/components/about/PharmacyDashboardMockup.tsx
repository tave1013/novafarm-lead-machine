
import React from 'react';
import { Calendar, Phone, Users, Clock, CheckCircle, TrendingUp } from 'lucide-react';

const PharmacyDashboardMockup = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 max-w-lg mx-auto">
      <div className="mb-4">
        <div className="h-6 bg-gray-100 rounded mb-4 flex items-center px-3">
          <div className="w-3 h-3 bg-[#078147] rounded-full mr-2"></div>
          <span className="text-xs text-gray-400">NovaFarm Dashboard</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-black mb-2">Today's Overview</h3>
          <p className="text-gray-600 text-sm">Managing your pharmacy has never been easier</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-[#078147]/5 border border-[#078147]/20 rounded-lg p-3 text-center">
            <Calendar className="w-6 h-6 text-[#078147] mx-auto mb-1" />
            <div className="font-bold text-lg text-black">12</div>
            <div className="text-xs text-gray-600">Appointments</div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
            <Phone className="w-6 h-6 text-blue-600 mx-auto mb-1" />
            <div className="font-bold text-lg text-black">-67%</div>
            <div className="text-xs text-gray-600">Fewer Calls</div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
            <Users className="w-6 h-6 text-purple-600 mx-auto mb-1" />
            <div className="font-bold text-lg text-black">89</div>
            <div className="text-xs text-gray-600">Happy Patients</div>
          </div>
        </div>
        
        {/* Booking Calendar Preview */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-black">Today's Schedule</h4>
            <span className="text-xs text-[#078147] bg-[#078147]/10 px-2 py-1 rounded">Auto-managed</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-[#078147]/5 rounded">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#078147]" />
                <span className="text-sm font-medium">09:30</span>
                <span className="text-sm text-gray-600">Medication Review</span>
              </div>
              <CheckCircle className="w-4 h-4 text-[#078147]" />
            </div>
            
            <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">14:00</span>
                <span className="text-sm text-gray-600">Health Screening</span>
              </div>
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">Upcoming</span>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium">16:30</span>
                <span className="text-sm text-gray-600">Consultation</span>
              </div>
              <span className="text-xs text-gray-500">Available</span>
            </div>
          </div>
        </div>
        
        <div className="bg-[#078147]/5 p-3 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-[#078147]" />
            <span className="text-sm font-medium text-black">Efficiency up 45% this month</span>
          </div>
          <span className="text-xs text-[#078147]">View Report</span>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDashboardMockup;
