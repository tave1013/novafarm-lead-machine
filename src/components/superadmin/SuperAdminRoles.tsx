
import React, { useState } from 'react';
import { Users, Shield, Eye, Settings, UserPlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AdminUserTable } from './roles/AdminUserTable';
import { RoleManager } from './roles/RoleManager';
import { AddUserModal } from './roles/AddUserModal';
import { PermissionsModal } from './roles/PermissionsModal';
import { ConfirmActionModal } from './ConfirmActionModal';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  status: 'Active' | 'Suspended';
}

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
}

const mockUsers: AdminUser[] = [
  { id: '1', name: 'John Smith', email: 'john@novafarm.com', role: 'Super Admin', lastLogin: '2024-06-30 14:30', status: 'Active' },
  { id: '2', name: 'Sarah Johnson', email: 'sarah@novafarm.com', role: 'Support Staff', lastLogin: '2024-06-29 16:45', status: 'Active' },
  { id: '3', name: 'Mike Chen', email: 'mike@novafarm.com', role: 'Billing', lastLogin: '2024-06-28 09:15', status: 'Suspended' },
];

const mockRoles: Role[] = [
  { 
    id: '1', 
    name: 'Super Admin', 
    description: 'Full system access',
    permissions: ['users', 'payments', 'settings', 'analytics', 'billing']
  },
  { 
    id: '2', 
    name: 'Support Staff', 
    description: 'View clients, no payment actions',
    permissions: ['users', 'analytics']
  },
  { 
    id: '3', 
    name: 'Billing', 
    description: 'Manage invoices only',
    permissions: ['payments', 'billing']
  },
];

const allPermissions = [
  { id: 'users', label: 'User Management', icon: Users },
  { id: 'payments', label: 'Payment Processing', icon: Shield },
  { id: 'settings', label: 'System Settings', icon: Settings },
  { id: 'analytics', label: 'Analytics & Reports', icon: Eye },
  { id: 'billing', label: 'Billing & Invoices', icon: UserPlus },
];

export const SuperAdminRoles: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>(mockUsers);
  const [roles, setRoles] = useState<Role[]>(mockRoles);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isManagePermissionsOpen, setIsManagePermissionsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [confirmAction, setConfirmAction] = useState<{ isOpen: boolean; action: () => void; title: string; message: string } | null>(null);
  
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    password: ''
  });

  const handleAddUser = () => {
    const user: AdminUser = {
      id: Date.now().toString(),
      name: `${newUser.firstName} ${newUser.lastName}`,
      email: newUser.email,
      role: newUser.role,
      lastLogin: 'Never',
      status: 'Active'
    };
    setUsers([...users, user]);
    setNewUser({ firstName: '', lastName: '', email: '', role: '', password: '' });
    setIsAddUserOpen(false);
  };

  const handleSuspendUser = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'Active' ? 'Suspended' : 'Active' as 'Active' | 'Suspended' }
        : user
    ));
  };

  const handleDeleteUser = (userId: string) => {
    const user = users.find(u => u.id === userId);
    if (user) {
      setConfirmAction({
        isOpen: true,
        action: () => {
          setUsers(users.filter(u => u.id !== userId));
          setConfirmAction(null);
        },
        title: 'Delete Team Member',
        message: `Are you sure you want to delete ${user.name}? This action cannot be undone.`
      });
    }
  };

  const handleManagePermissions = (role: Role) => {
    setSelectedRole(role);
    setIsManagePermissionsOpen(true);
  };

  const handlePermissionToggle = (permissionId: string) => {
    if (!selectedRole) return;
    
    const updatedPermissions = selectedRole.permissions.includes(permissionId)
      ? selectedRole.permissions.filter(p => p !== permissionId)
      : [...selectedRole.permissions, permissionId];
    
    setSelectedRole({ ...selectedRole, permissions: updatedPermissions });
    setRoles(roles.map(role => 
      role.id === selectedRole.id 
        ? { ...role, permissions: updatedPermissions }
        : role
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Team Members & Access Control</h1>
          <p className="text-gray-600 mt-1">Manage internal team access and permissions</p>
        </div>
        
        <AddUserModal
          isOpen={isAddUserOpen}
          onOpenChange={setIsAddUserOpen}
          newUser={newUser}
          setNewUser={setNewUser}
          roles={roles}
          onAddUser={handleAddUser}
        />
      </div>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="users">Admin Users</TabsTrigger>
          <TabsTrigger value="roles">Role Manager</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-[#27AE60]" />
                Team Members ({users.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AdminUserTable
                users={users}
                onSuspendUser={handleSuspendUser}
                onDeleteUser={handleDeleteUser}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles">
          <RoleManager
            roles={roles}
            allPermissions={allPermissions}
            onManagePermissions={handleManagePermissions}
          />
        </TabsContent>
      </Tabs>

      <PermissionsModal
        isOpen={isManagePermissionsOpen}
        onOpenChange={setIsManagePermissionsOpen}
        selectedRole={selectedRole}
        allPermissions={allPermissions}
        onPermissionToggle={handlePermissionToggle}
      />

      {/* Confirmation Modal */}
      {confirmAction && (
        <ConfirmActionModal
          isOpen={confirmAction.isOpen}
          title={confirmAction.title}
          message={confirmAction.message}
          onConfirm={confirmAction.action}
          onCancel={() => setConfirmAction(null)}
          isDestructive={true}
          confirmButtonText="Delete"
        />
      )}
    </div>
  );
};
