import React, { useState } from 'react';
import { Users, DollarSign, FileText, TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { SuperAdminSection } from '@/pages/SuperAdmin';

type TimeFilter = 'last7' | 'last30' | 'last90' | 'prev30' | 'prev90' | 'custom';

interface SuperAdminOverviewProps {
  onSectionChange: (section: SuperAdminSection) => void;
}

const revenueData = [
  { month: 'Jan', revenue: 8420, users: 145 },
  { month: 'Feb', revenue: 9240, users: 167 },
  { month: 'Mar', revenue: 10180, users: 189 },
  { month: 'Apr', revenue: 11320, users: 201 },
  { month: 'May', revenue: 12150, users: 234 },
  { month: 'Jun', revenue: 13420, users: 267 }
];

export const SuperAdminOverview: React.FC<SuperAdminOverviewProps> = ({ onSectionChange }) => {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('last30');

  const kpiData = {
    totalUsers: { value: 1247, change: 12.4, trend: 'up' },
    activeUsers: { value: 892, change: 8.7, trend: 'up' },
    suspendedUsers: { value: 23, change: -15.2, trend: 'down' },
    mrr: { value: 13420, change: 14.3, trend: 'up' },
    totalRevenue: { value: 67240, change: 18.9, trend: 'up' },
    newSignups: { value: 87, change: -8.1, trend: 'down' }
  };

  const getTimeFilterLabel = (filter: TimeFilter) => {
    switch (filter) {
      case 'last7': return 'Last 7 days';
      case 'last30': return 'Last 30 days';
      case 'last90': return 'Last 90 days';
      case 'prev30': return 'Previous 30 days';
      case 'prev90': return 'Previous 90 days';
      case 'custom': return 'Custom range';
      default: return 'Last 30 days';
    }
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'create-user':
        onSectionChange('users');
        break;
      case 'generate-report':
        onSectionChange('activity');
        break;
      case 'payment-link':
        onSectionChange('payments');
        break;
      case 'view-analytics':
        onSectionChange('dashboard');
        break;
      default:
        break;
    }
  };

  const KPICard = ({ title, value, prefix = '', suffix = '', change, trend, icon: Icon }: any) => (
    <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
          <Icon className="w-5 h-5 text-[#1C9B7A]" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold text-gray-900">
            {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
          </div>
          <div className={`flex items-center text-sm font-medium ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend === 'up' ? (
              <TrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1" />
            )}
            {Math.abs(change)}%
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {trend === 'up' ? '+' : ''}{change}% from previous period
        </p>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Super Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor and manage your NovaFarm platform</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <Select value={timeFilter} onValueChange={(value) => setTimeFilter(value as TimeFilter)}>
            <SelectTrigger className="w-48">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7">Last 7 days</SelectItem>
              <SelectItem value="last30">Last 30 days</SelectItem>
              <SelectItem value="last90">Last 90 days</SelectItem>
              <SelectItem value="prev30">Previous 30 days</SelectItem>
              <SelectItem value="prev90">Previous 90 days</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KPICard
          title="Total Users"
          value={kpiData.totalUsers.value}
          change={kpiData.totalUsers.change}
          trend={kpiData.totalUsers.trend}
          icon={Users}
        />
        <KPICard
          title="Active Users"
          value={kpiData.activeUsers.value}
          change={kpiData.activeUsers.change}
          trend={kpiData.activeUsers.trend}
          icon={Users}
        />
        <KPICard
          title="Suspended Users"
          value={kpiData.suspendedUsers.value}
          change={kpiData.suspendedUsers.change}
          trend={kpiData.suspendedUsers.trend}
          icon={Users}
        />
        <KPICard
          title="Monthly Revenue (MRR)"
          value={kpiData.mrr.value}
          prefix="€"
          change={kpiData.mrr.change}
          trend={kpiData.mrr.trend}
          icon={DollarSign}
        />
        <KPICard
          title="Total Revenue"
          value={kpiData.totalRevenue.value}
          prefix="€"
          change={kpiData.totalRevenue.change}
          trend={kpiData.totalRevenue.trend}
          icon={DollarSign}
        />
        <KPICard
          title="New Signups"
          value={kpiData.newSignups.value}
          change={kpiData.newSignups.change}
          trend={kpiData.newSignups.trend}
          icon={TrendingUp}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Revenue Trend</CardTitle>
            <p className="text-sm text-gray-600">Monthly revenue over the last 6 months</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#1C9B7A" 
                  strokeWidth={3}
                  dot={{ fill: '#1C9B7A', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">User Growth</CardTitle>
            <p className="text-sm text-gray-600">User registrations by month</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="users" fill="#1C9B7A" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-white border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button 
              onClick={() => handleQuickAction('create-user')}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#1C9B7A] transition-all duration-200 text-left group"
            >
              <Users className="w-8 h-8 text-[#1C9B7A] mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900">Create User</h3>
              <p className="text-sm text-gray-600">Add new user account</p>
            </button>
            <button 
              onClick={() => handleQuickAction('generate-report')}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#1C9B7A] transition-all duration-200 text-left group"
            >
              <FileText className="w-8 h-8 text-[#1C9B7A] mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900">Generate Report</h3>
              <p className="text-sm text-gray-600">Export platform data</p>
            </button>
            <button 
              onClick={() => handleQuickAction('payment-link')}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#1C9B7A] transition-all duration-200 text-left group"
            >
              <DollarSign className="w-8 h-8 text-[#1C9B7A] mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900">Payment Link</h3>
              <p className="text-sm text-gray-600">Create payment link</p>
            </button>
            <button 
              onClick={() => handleQuickAction('view-analytics')}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#1C9B7A] transition-all duration-200 text-left group"
            >
              <TrendingUp className="w-8 h-8 text-[#1C9B7A] mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900">View Analytics</h3>
              <p className="text-sm text-gray-600">Detailed insights</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
