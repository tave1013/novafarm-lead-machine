
import { Calendar, MessageCircle, Star, BarChart3, Users, CreditCard, Zap, Headphones, Clock, Bell } from 'lucide-react';

export const BookingCalendarMockup = () => (
  <div className="flex space-x-4 max-w-2xl mx-auto">
    {/* Main Calendar Interface */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">November 2024</h3>
        <Calendar className="w-5 h-5 text-[#078147]" />
      </div>
      <div className="grid grid-cols-7 gap-1 mb-4 text-xs text-gray-500">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
          <div key={day} className="text-center p-1">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 35 }, (_, i) => {
          const day = i - 4;
          const isToday = day === 15;
          const hasAppointment = [12, 15, 18, 22].includes(day);
          return (
            <div key={i} className={`
              text-center p-2 text-xs rounded
              ${day <= 0 ? 'text-gray-300' : 'text-gray-700'}
              ${isToday ? 'bg-[#078147] text-white' : ''}
              ${hasAppointment && !isToday ? 'bg-[#078147]/10 text-[#078147] font-medium' : ''}
            `}>
              {day > 0 ? day : ''}
            </div>
          );
        })}
      </div>
    </div>

    {/* Appointment List */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Today's Schedule</h3>
        <Clock className="w-5 h-5 text-[#078147]" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-[#078147]/5 rounded-lg border-l-4 border-[#078147]">
          <div className="flex-1">
            <div className="font-medium text-sm">09:00 - Maria Rossi</div>
            <div className="text-xs text-gray-600">Consultation</div>
          </div>
          <span className="text-xs text-[#078147] font-medium">Confirmed</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <div className="font-medium text-sm">11:30 - Luca Bianchi</div>
            <div className="text-xs text-gray-600">Check-up</div>
          </div>
          <span className="text-xs text-gray-500">Pending</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-[#078147]/5 rounded-lg">
          <div className="flex-1">
            <div className="font-medium text-sm">14:30 - Anna Verdi</div>
            <div className="text-xs text-gray-600">Prescription</div>
          </div>
          <span className="text-xs text-[#078147] font-medium">Confirmed</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <div className="font-medium text-sm">16:00 - Marco Ferrari</div>
            <div className="text-xs text-gray-600">Consultation</div>
          </div>
          <span className="text-xs text-gray-500">Available</span>
        </div>
      </div>
    </div>
  </div>
);

export const AutomationMockup = () => (
  <div className="flex space-x-4 max-w-2xl mx-auto">
    {/* Automation Settings */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Automation Setup</h3>
        <Zap className="w-5 h-5 text-[#078147]" />
      </div>
      <div className="space-y-4">
        <div className="p-3 bg-[#078147]/5 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Appointment Reminders</span>
            <div className="w-8 h-4 bg-[#078147] rounded-full"></div>
          </div>
          <div className="text-xs text-gray-600 mt-1">Send SMS 24h before + email 2h before</div>
        </div>
        <div className="p-3 bg-[#078147]/5 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Follow-up Reviews</span>
            <div className="w-8 h-4 bg-[#078147] rounded-full"></div>
          </div>
          <div className="text-xs text-gray-600 mt-1">Request review 24h after visit</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Birthday Wishes</span>
            <div className="w-8 h-4 bg-gray-300 rounded-full"></div>
          </div>
          <div className="text-xs text-gray-600 mt-1">Send personalized birthday messages</div>
        </div>
      </div>
    </div>

    {/* Workflow Visual */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Workflow Preview</h3>
        <Bell className="w-5 h-5 text-[#078147]" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#078147] rounded-full flex items-center justify-center text-white text-xs">1</div>
          <div className="flex-1">
            <div className="text-sm font-medium">Booking Confirmed</div>
            <div className="text-xs text-gray-500">Trigger activated</div>
          </div>
        </div>
        <div className="ml-4 border-l-2 border-[#078147]/20 pl-4 py-2">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center">📱</div>
            <div className="flex-1">
              <div className="text-sm">SMS Sent (24h before)</div>
              <div className="text-xs text-gray-500">"Hi Maria, reminder for tomorrow 09:00"</div>
            </div>
          </div>
        </div>
        <div className="ml-4 border-l-2 border-[#078147]/20 pl-4 py-2">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-purple-500 rounded text-white text-xs flex items-center justify-center">✉️</div>
            <div className="flex-1">
              <div className="text-sm">Email Sent (2h before)</div>
              <div className="text-xs text-gray-500">"Your appointment is in 2 hours"</div>
            </div>
          </div>
        </div>
        <div className="ml-4 border-l-2 border-[#078147]/20 pl-4 py-2">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-yellow-500 rounded text-white text-xs flex items-center justify-center">⭐</div>
            <div className="flex-1">
              <div className="text-sm">Review Request (24h after)</div>
              <div className="text-xs text-gray-500">"How was your visit? Leave a review"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ReviewSystemMockup = () => (
  <div className="flex space-x-4 max-w-2xl mx-auto">
    {/* Review Request Interface */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Review Request</h3>
        <Star className="w-5 h-5 text-[#078147]" />
      </div>
      <div className="bg-gradient-to-br from-[#078147]/10 to-[#078147]/5 rounded-lg p-4 mb-4">
        <div className="text-center">
          <div className="text-lg font-medium mb-2">How was your visit?</div>
          <div className="flex justify-center space-x-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <button className="bg-[#078147] text-white px-4 py-2 rounded-lg text-sm font-medium mb-2">
            Leave Google Review
          </button>
          <div className="text-xs text-gray-600">Takes less than 30 seconds</div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-sm text-gray-600">Or share your experience:</div>
        <div className="flex justify-center space-x-2 mt-2">
          <button className="w-8 h-8 bg-blue-500 rounded text-white text-xs">f</button>
          <button className="w-8 h-8 bg-pink-500 rounded text-white text-xs">ig</button>
        </div>
      </div>
    </div>

    {/* Review Analytics */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Review Analytics</h3>
        <BarChart3 className="w-5 h-5 text-[#078147]" />
      </div>
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-[#078147]">4.8</div>
          <div className="flex justify-center space-x-1 mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-xs text-gray-600">Based on 127 reviews</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span>5 stars</span>
            <div className="flex-1 mx-2 bg-gray-200 rounded h-2">
              <div className="bg-[#078147] h-2 rounded" style={{ width: '85%' }}></div>
            </div>
            <span>85%</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span>4 stars</span>
            <div className="flex-1 mx-2 bg-gray-200 rounded h-2">
              <div className="bg-[#078147] h-2 rounded" style={{ width: '12%' }}></div>
            </div>
            <span>12%</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span>3 stars</span>
            <div className="flex-1 mx-2 bg-gray-200 rounded h-2">
              <div className="bg-gray-400 h-2 rounded" style={{ width: '3%' }}></div>
            </div>
            <span>3%</span>
          </div>
        </div>
        <div className="bg-[#078147]/5 p-3 rounded-lg">
          <div className="text-sm font-medium text-[#078147]">+15 new reviews this month</div>
          <div className="text-xs text-gray-600">23% increase from last month</div>
        </div>
      </div>
    </div>
  </div>
);

export const ChatInboxMockup = () => (
  <div className="flex space-x-4 max-w-2xl mx-auto">
    {/* Chat List */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Unified Inbox</h3>
        <MessageCircle className="w-5 h-5 text-[#078147]" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-[#078147]/5 rounded-lg border-l-4 border-[#078147]">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            FB
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">Marco_85</span>
              <span className="text-xs text-gray-500">2m ago</span>
            </div>
            <p className="text-sm text-gray-600">Is the pharmacy open today?</p>
          </div>
          <div className="w-2 h-2 bg-[#078147] rounded-full"></div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            IG
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">anna_wellness</span>
              <span className="text-xs text-gray-500">5m ago</span>
            </div>
            <p className="text-sm text-gray-600">Do you have supplements in stock?</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            @
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">l.bianchi@email.com</span>
              <span className="text-xs text-gray-500">1h ago</span>
            </div>
            <p className="text-sm text-gray-600">Thank you for the consultation!</p>
          </div>
        </div>
      </div>
    </div>

    {/* Active Conversation */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4 pb-3 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            FB
          </div>
          <div>
            <div className="font-medium text-sm">Marco_85</div>
            <div className="text-xs text-gray-500">Active now</div>
          </div>
        </div>
      </div>
      <div className="space-y-3 mb-4">
        <div className="flex">
          <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
            <div className="text-sm">Is the pharmacy open today?</div>
            <div className="text-xs text-gray-500 mt-1">2:34 PM</div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#078147] text-white p-3 rounded-lg max-w-xs">
            <div className="text-sm">Yes, we're open until 7 PM today. How can I help you?</div>
            <div className="text-xs text-green-200 mt-1">2:35 PM</div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
            <div className="text-sm">Great! Do you have blood pressure monitors available?</div>
            <div className="text-xs text-gray-500 mt-1">2:36 PM</div>
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg text-sm"
        />
        <button className="bg-[#078147] text-white px-4 py-2 rounded-lg text-sm">Send</button>
      </div>
    </div>
  </div>
);

export const DashboardMockup = () => (
  <div className="flex space-x-4 max-w-2xl mx-auto">
    {/* Main Dashboard */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">NovaFarm Dashboard</h3>
        <Users className="w-5 h-5 text-[#078147]" />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-[#078147]/10 p-3 rounded-lg">
          <div className="text-2xl font-bold text-[#078147]">24</div>
          <div className="text-xs text-gray-600">Today's Appointments</div>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <div className="text-2xl font-bold text-gray-700">156</div>
          <div className="text-xs text-gray-600">This Month</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">€2,840</div>
          <div className="text-xs text-gray-600">Revenue (Month)</div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-green-600">4.8</div>
          <div className="text-xs text-gray-600">Avg Rating</div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="text-xs text-gray-600 font-medium">Recent Activity</div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span className="text-xs">New booking - Maria R.</span>
            <span className="text-xs text-[#078147]">Just now</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span className="text-xs">Review received - 5 stars</span>
            <span className="text-xs text-gray-500">5m ago</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <span className="text-xs">Payment received - €45</span>
            <span className="text-xs text-gray-500">12m ago</span>
          </div>
        </div>
      </div>
    </div>

    {/* Team Management */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Team Access</h3>
        <Users className="w-5 h-5 text-[#078147]" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-[#078147]/5 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#078147] rounded-full flex items-center justify-center text-white text-xs font-bold">
              DR
            </div>
            <div>
              <div className="font-medium text-sm">Dr. Maria Rossi</div>
              <div className="text-xs text-gray-600">Owner & Admin</div>
            </div>
          </div>
          <div className="text-xs text-[#078147]">Online</div>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              LB
            </div>
            <div>
              <div className="font-medium text-sm">Luca Bianchi</div>
              <div className="text-xs text-gray-600">Pharmacist</div>
            </div>
          </div>
          <div className="text-xs text-gray-500">Offline</div>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              AV
            </div>
            <div>
              <div className="font-medium text-sm">Anna Verdi</div>
              <div className="text-xs text-gray-600">Assistant</div>
            </div>
          </div>
          <div className="text-xs text-[#078147]">Online</div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="text-xs text-gray-600 font-medium">Permissions</div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Calendar Access</span>
            <span className="text-[#078147]">All Staff</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Payment Processing</span>
            <span className="text-[#078147]">Admin Only</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Customer Data</span>
            <span className="text-[#078147]">Pharmacists</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const PaymentMockup = () => (
  <div className="flex space-x-4 max-w-2xl mx-auto">
    {/* Payment Form */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Secure Payment</h3>
        <CreditCard className="w-5 h-5 text-[#078147]" />
      </div>
      <div className="space-y-4">
        <div className="bg-[#078147]/5 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Consultation Fee</span>
            <span className="text-lg font-bold text-[#078147]">€45.00</span>
          </div>
          <div className="text-xs text-gray-600">Dr. Rossi - Nov 15, 2024 at 14:30</div>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-600">Cardholder Name</label>
            <div className="mt-1 p-2 bg-gray-50 rounded text-sm">Marco Bianchi</div>
          </div>
          <div>
            <label className="text-xs text-gray-600">Card Number</label>
            <div className="mt-1 p-2 bg-gray-50 rounded text-sm">•••• •••• •••• 4242</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-600">Expiry</label>
              <div className="mt-1 p-2 bg-gray-50 rounded text-sm">12/26</div>
            </div>
            <div>
              <label className="text-xs text-gray-600">CVC</label>
              <div className="mt-1 p-2 bg-gray-50 rounded text-sm">•••</div>
            </div>
          </div>
        </div>
        <button className="w-full bg-[#078147] text-white py-3 rounded-lg font-medium">
          Confirm Payment €45.00
        </button>
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
          <span>🔒 Secured by Stripe</span>
        </div>
      </div>
    </div>

    {/* Payment Success & Booking Confirmation */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Booking Confirmed</h3>
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">✅</span>
          </div>
          <div className="text-lg font-medium text-gray-800">Payment Successful!</div>
          <div className="text-sm text-gray-600">Your appointment is confirmed</div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Date & Time</span>
            <span className="text-sm font-medium">Nov 15, 2024 - 14:30</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Doctor</span>
            <span className="text-sm font-medium">Dr. Maria Rossi</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Service</span>
            <span className="text-sm font-medium">Consultation</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Payment</span>
            <span className="text-sm font-medium text-[#078147]">€45.00 ✓</span>
          </div>
        </div>

        <div className="bg-[#078147]/5 p-3 rounded-lg">
          <div className="text-sm font-medium text-[#078147] mb-1">What's next?</div>
          <div className="text-xs text-gray-600 space-y-1">
            <div>• SMS reminder 24h before</div>
            <div>• Email reminder 2h before</div>
            <div>• Calendar event added</div>
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded text-sm">Add to Calendar</button>
          <button className="flex-1 bg-[#078147] text-white py-2 rounded text-sm">View Details</button>
        </div>
      </div>
    </div>
  </div>
);

export const AnalyticsMockup = () => (
  <div className="flex space-x-4 max-w-2xl mx-auto">
    {/* Analytics Overview */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Analytics Dashboard</h3>
        <BarChart3 className="w-5 h-5 text-[#078147]" />
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-lg font-bold text-[#078147]">234</div>
            <div className="text-xs text-gray-600">Total Bookings</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-[#078147]">98%</div>
            <div className="text-xs text-gray-600">Show Rate</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-[#078147]">4.8</div>
            <div className="text-xs text-gray-600">Avg Rating</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-xs text-gray-600 font-medium">Monthly Trends</div>
          <div className="bg-gray-50 p-3 rounded">
            <div className="flex items-end space-x-1 h-16">
              {[40, 60, 45, 80, 65, 90, 85, 95].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-[#078147] rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="text-xs text-gray-500 mt-2">Bookings per week</div>
          </div>
        </div>
        <div className="bg-[#078147]/5 p-3 rounded-lg">
          <div className="text-sm font-medium text-[#078147]">+23% increase this month</div>
          <div className="text-xs text-gray-600">Compared to last month</div>
        </div>
      </div>
    </div>

    {/* Detailed Reports */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Monthly Report</h3>
        <div className="text-xs bg-[#078147] text-white px-2 py-1 rounded">November 2024</div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-lg font-bold text-blue-600">€2,840</div>
            <div className="text-xs text-gray-600">Revenue</div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-lg font-bold text-green-600">127</div>
            <div className="text-xs text-gray-600">New Patients</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-xs text-gray-600 font-medium">Top Services</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Consultations</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded h-2">
                  <div className="bg-[#078147] h-2 rounded" style={{ width: '75%' }}></div>
                </div>
                <span className="text-xs text-gray-600">156</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Check-ups</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded h-2">
                  <div className="bg-blue-500 h-2 rounded" style={{ width: '45%' }}></div>
                </div>
                <span className="text-xs text-gray-600">89</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Prescriptions</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 bg-gray-200 rounded h-2">
                  <div className="bg-purple-500 h-2 rounded" style={{ width: '30%' }}></div>
                </div>
                <span className="text-xs text-gray-600">67</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-3 rounded-lg">
          <div className="text-sm font-medium text-yellow-700">Peak Hours</div>
          <div className="text-xs text-gray-600 mt-1">
            9:00-11:00 AM & 2:00-4:00 PM
          </div>
        </div>
        
        <button className="w-full bg-[#078147] text-white py-2 rounded-lg text-sm font-medium">
          Download Full Report
        </button>
      </div>
    </div>
  </div>
);

export const SupportMockup = () => (
  <div className="flex space-x-4 max-w-2xl mx-auto">
    {/* Live Chat Support */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Support Center</h3>
        <Headphones className="w-5 h-5 text-[#078147]" />
      </div>
      <div className="space-y-4">
        <div className="bg-[#078147]/5 p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#078147] rounded-full flex items-center justify-center text-white font-medium">
              NS
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">NovaFarm Support</div>
              <div className="text-xs text-gray-600">Usually responds in 5 minutes</div>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm">Hi! How can I help you today?</div>
            <div className="text-xs text-gray-500 mt-1">Support Agent - 2m ago</div>
          </div>
          <div className="bg-[#078147]/10 p-3 rounded-lg ml-8">
            <div className="text-sm">I need help setting up automated reminders</div>
            <div className="text-xs text-gray-500 mt-1">You - 1m ago</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm">I'd be happy to help! Let me walk you through the automation setup...</div>
            <div className="text-xs text-gray-500 mt-1">Support Agent - Just now</div>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-[#078147] text-white px-4 py-2 rounded-lg text-sm font-medium">
            Continue Chat
          </button>
        </div>
      </div>
    </div>

    {/* Help Resources */}
    <div className="bg-white rounded-xl shadow-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Help Resources</h3>
        <div className="text-xs bg-[#078147] text-white px-2 py-1 rounded">24/7 Available</div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <button className="p-3 bg-gray-50 rounded-lg text-center">
            <div className="text-lg mb-1">📹</div>
            <div className="text-xs font-medium">Video Tutorials</div>
          </button>
          <button className="p-3 bg-gray-50 rounded-lg text-center">
            <div className="text-lg mb-1">📚</div>
            <div className="text-xs font-medium">Help Center</div>
          </button>
          <button className="p-3 bg-gray-50 rounded-lg text-center">
            <div className="text-lg mb-1">🎯</div>
            <div className="text-xs font-medium">Quick Setup</div>
          </button>
          <button className="p-3 bg-gray-50 rounded-lg text-center">
            <div className="text-lg mb-1">💬</div>
            <div className="text-xs font-medium">Community</div>
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="text-xs text-gray-600 font-medium">Popular Articles</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-xs">Setting up your first automation</span>
              <span className="text-xs text-[#078147]">5 min read</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-xs">Configuring payment settings</span>
              <span className="text-xs text-[#078147]">3 min read</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-xs">Managing team permissions</span>
              <span className="text-xs text-[#078147]">4 min read</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-sm font-medium text-blue-700">Onboarding Call</div>
          <div className="text-xs text-gray-600 mt-1">
            Schedule a free 30-min setup call with our team
          </div>
          <button className="mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
);
