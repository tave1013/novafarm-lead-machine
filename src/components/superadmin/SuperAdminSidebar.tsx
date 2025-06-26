
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  UserPlus, 
  FileText, 
  Activity, 
  HeadphonesIcon, 
  Settings
} from 'lucide-react';
import { SuperAdminSection } from '@/pages/SuperAdmin';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from '@/components/ui/sidebar';

interface SuperAdminSidebarProps {
  activeSection: SuperAdminSection;
  onSectionChange: (section: SuperAdminSection) => void;
}

export const SuperAdminSidebar: React.FC<SuperAdminSidebarProps> = ({
  activeSection,
  onSectionChange
}) => {
  const { state } = useSidebar();

  const menuItems = [
    { id: 'dashboard' as SuperAdminSection, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users' as SuperAdminSection, label: 'Users', icon: Users },
    { id: 'payments' as SuperAdminSection, label: 'Payments', icon: CreditCard },
    { id: 'accounts' as SuperAdminSection, label: 'Accounts', icon: UserPlus },
    { id: 'invoices' as SuperAdminSection, label: 'Invoices', icon: FileText },
    { id: 'activity' as SuperAdminSection, label: 'Activity Logs', icon: Activity },
    { id: 'support' as SuperAdminSection, label: 'Support Tickets', icon: HeadphonesIcon },
    { id: 'settings' as SuperAdminSection, label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile trigger positioned outside sidebar */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <SidebarTrigger className="bg-white shadow-lg border" />
      </div>

      <Sidebar className="border-r-0" style={{ 
        '--sidebar-background': '#1B1B1F',
        '--sidebar-foreground': '#FFFFFF',
        '--sidebar-accent': '#1C9B7A',
        '--sidebar-accent-foreground': '#FFFFFF',
        '--sidebar-border': '#374151'
      } as React.CSSProperties}>
        <SidebarHeader className="p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#1C9B7A] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            {state === 'expanded' && (
              <div>
                <h1 className="text-xl font-bold text-[#1C9B7A]">NovaFarm</h1>
                <p className="text-sm text-gray-400 mt-1">Super Admin</p>
              </div>
            )}
          </div>
        </SidebarHeader>

        <SidebarContent className="p-4">
          {/* Desktop toggle positioned at top of content */}
          <div className="hidden md:block mb-4">
            <SidebarTrigger className="w-full justify-start bg-transparent hover:bg-gray-700 text-gray-300 hover:text-white border-0" />
          </div>

          <SidebarMenu className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.id)}
                    isActive={isActive}
                    tooltip={state === 'collapsed' ? item.label : undefined}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                      ${isActive 
                        ? 'bg-[#1C9B7A] text-white shadow-md' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </>
  );
};
