
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Settings, 
  CreditCard, 
  FileText, 
  HelpCircle, 
  LogOut,
  ExternalLink
} from 'lucide-react';
import { DashboardSection } from '../../pages/Dashboard';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from '@/components/ui/sidebar';

interface DashboardSidebarProps {
  activeSection: DashboardSection;
  onSectionChange: (section: DashboardSection) => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  activeSection,
  onSectionChange
}) => {
  const navigate = useNavigate();
  const { state } = useSidebar();

  const menuItems = [
    { id: 'overview' as DashboardSection, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'account' as DashboardSection, label: 'Account Settings', icon: Settings },
    { id: 'subscription' as DashboardSection, label: 'Subscription', icon: CreditCard },
    { id: 'invoices' as DashboardSection, label: 'Invoices', icon: FileText },
    { id: 'support' as DashboardSection, label: 'Support', icon: HelpCircle },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const handleMenuClick = (section: DashboardSection) => {
    onSectionChange(section);
  };

  const handleEnterPlatform = () => {
    window.open('#', '_blank');
  };

  return (
    <>
      {/* Mobile trigger positioned outside sidebar */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <SidebarTrigger className="bg-white shadow-lg border" />
      </div>

      <Sidebar className="border-r" style={{ 
        '--sidebar-background': '#FFFFFF',
        '--sidebar-foreground': '#1B1B1F',
        '--sidebar-accent': '#078147',
        '--sidebar-accent-foreground': '#FFFFFF',
        '--sidebar-border': '#E5E7EB'
      } as React.CSSProperties}>
        <SidebarHeader className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#078147] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            {state === 'expanded' && (
              <div>
                <h1 className="text-xl font-bold text-[#078147]">NovaFarm</h1>
                <p className="text-sm text-gray-600 mt-1">Dashboard</p>
              </div>
            )}
          </div>
        </SidebarHeader>

        <SidebarContent className="p-4">
          {/* Desktop toggle positioned at top of content */}
          <div className="hidden lg:block mb-4">
            <SidebarTrigger className="w-full justify-start bg-transparent hover:bg-gray-100 text-gray-700 border-0" />
          </div>

          <SidebarMenu className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => handleMenuClick(item.id)}
                    isActive={isActive}
                    tooltip={state === 'collapsed' ? item.label : undefined}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                      ${isActive 
                        ? 'bg-[#078147] text-white shadow-md' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}

            {/* Enter Platform Button */}
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={handleEnterPlatform}
                tooltip={state === 'collapsed' ? 'Enter the Platform' : undefined}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 border-t mt-4 pt-4"
              >
                <ExternalLink className="w-5 h-5 shrink-0" />
                <span className="font-medium">Enter the Platform</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="p-4">
          <SidebarMenuButton
            onClick={handleLogout}
            tooltip={state === 'collapsed' ? 'Logout' : undefined}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span className="font-medium">Logout</span>
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>
    </>
  );
};
