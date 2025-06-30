
import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  status: 'Active' | 'Suspended';
}

interface AdminUserTableProps {
  users: AdminUser[];
  onSuspendUser: (userId: string) => void;
  onDeleteUser: (userId: string) => void;
  onEditUser?: (userId: string) => void;
}

export const AdminUserTable: React.FC<AdminUserTableProps> = ({
  users,
  onSuspendUser,
  onDeleteUser,
  onEditUser
}) => {
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Super Admin': return 'bg-red-100 text-red-800';
      case 'Support Staff': return 'bg-blue-100 text-blue-800';
      case 'Billing': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden sm:table-cell">Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="hidden md:table-cell">Last Login</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                <div>
                  <div>{user.name}</div>
                  <div className="text-sm text-gray-500 sm:hidden">{user.email}</div>
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">{user.email}</TableCell>
              <TableCell>
                <Badge className={getRoleColor(user.role)}>
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell text-sm text-gray-600">
                {user.lastLogin}
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={user.status === 'Active'}
                    onCheckedChange={() => onSuspendUser(user.id)}
                  />
                  <span className="text-sm">
                    {user.status}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => onEditUser?.(user.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => onDeleteUser(user.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
