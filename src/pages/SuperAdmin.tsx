
import React, { useState } from 'react';
import { SuperAdminSidebar } from '@/components/superadmin/SuperAdminSidebar';
import { SuperAdminOverview } from '@/components/superadmin/SuperAdminOverview';
import { SuperAdminUsers } from '@/components/superadmin/SuperAdminUsers';
import { SuperAdminPayments } from '@/components/superadmin/SuperAdminPayments';
import { SuperAdminAccounts } from '@/components/superadmin/SuperAdminAccounts';
import { SuperAdminInvoices } from '@/components/superadmin/SuperAdminInvoices';
import { SuperAdminActivityLogs } from '@/components/superadmin/SuperAdminActivityLogs';
import { SuperAdminSupport } from '@/components/superadmin/SuperAdminSupport';
import { SuperAdminSettings } from '@/components/superadmin/SuperAdminSettings';

export type SuperAdminSection = 
  | 'dashboard' 
  | 'users' 
  | 'payments' 
  | 'accounts' 
  | 'invoices' 
  | 'activity' 
  | 'support' 
  | 'settings';

const SuperAdmin: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SuperAdminSection>('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <SuperAdminOverview onSectionChange={setActiveSection} />;
      case 'users':
        return <SuperAdminUsers />;
      case 'payments':
        return <SuperAdminPayments />;
      case 'accounts':
        return <SuperAdminAccounts />;
      case 'invoices':
        return <SuperAdminInvoices />;
      case 'activity':
        return <SuperAdminActivityLogs />;
      case 'support':
        return <SuperAdminSupport />;
      case 'settings':
        return <SuperAdminSettings />;
      default:
        return <SuperAdminOverview onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <SuperAdminSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="p-4 lg:p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
