
import React from 'react';
import { BarChart3, Users, CreditCard, Building, FileText, Activity, Headphones, Settings, Shield } from 'lucide-react';
import type { SuperAdminSection } from '@/pages/SuperAdmin';

interface SuperAdminSidebarProps {
  activeSection: SuperAdminSection;
  onSectionChange: (section: SuperAdminSection) => void;
}

const menuItems = [
  { id: 'dashboard' as SuperAdminSection, label: 'Dashboard', icon: BarChart3 },
  { id: 'users' as SuperAdminSection, label: 'Users', icon: Users },
  { id: 'roles' as SuperAdminSection, label: 'Team & Roles', icon: Shield },
  { id: 'payments' as SuperAdminSection, label: 'Payments', icon: CreditCard },
  { id: 'accounts' as SuperAdminSection, label: 'Accounts', icon: Building },
  { id: 'invoices' as SuperAdminSection, label: 'Invoices', icon: FileText },
  { id: 'activity' as SuperAdminSection, label: 'Activity Logs', icon: Activity },
  { id: 'support' as SuperAdminSection, label: 'Support', icon: Headphones },
  { id: 'settings' as SuperAdminSection, label: 'Settings', icon: Settings },
];

export const SuperAdminSidebar: React.FC<SuperAdminSidebarProps> = ({
  activeSection,
  onSectionChange
}) => {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-64 bg-white border-r border-gray-200 lg:block hidden">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#27AE60] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <div>
              <h1 className="font-bold text-gray-900">NovaFarm</h1>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onSectionChange(item.id)}
                    className={`
                      w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors
                      ${isActive 
                        ? 'bg-[#27AE60] text-white' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-medium text-sm">SA</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Super Admin</p>
              <p className="text-xs text-gray-500">admin@novafarm.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
