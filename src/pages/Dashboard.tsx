
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar';
import { DashboardOverview } from '../components/dashboard/DashboardOverview';
import { AccountSettings } from '../components/dashboard/AccountSettings';
import { SubscriptionBilling } from '../components/dashboard/SubscriptionBilling';
import { Invoices } from '../components/dashboard/Invoices';
import { Support } from '../components/dashboard/Support';

export type DashboardSection = 'overview' | 'account' | 'subscription' | 'invoices' | 'support';

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<DashboardSection>('overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <DashboardOverview />;
      case 'account':
        return <AccountSettings />;
      case 'subscription':
        return <SubscriptionBilling />;
      case 'invoices':
        return <Invoices />;
      case 'support':
        return <Support />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex w-full">
        <DashboardSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        
        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
