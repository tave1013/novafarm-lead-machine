
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
}

interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
}

interface AddUserModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  newUser: NewUser;
  setNewUser: (user: NewUser) => void;
  roles: Role[];
  onAddUser: () => void;
}

export const AddUserModal: React.FC<AddUserModalProps> = ({
  isOpen,
  onOpenChange,
  newUser,
  setNewUser,
  roles,
  onAddUser
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-[#27AE60] hover:bg-[#1e8449] mt-4 sm:mt-0">
          <Plus className="w-4 h-4 mr-2" />
          Add New Admin
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Team Member</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={newUser.firstName}
                onChange={(e) => setNewUser({...newUser, firstName: e.target.value})}
                placeholder="John"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={newUser.lastName}
                onChange={(e) => setNewUser({...newUser, lastName: e.target.value})}
                placeholder="Smith"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              placeholder="john@novafarm.com"
            />
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <Select value={newUser.role} onValueChange={(value) => setNewUser({...newUser, role: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map(role => (
                  <SelectItem key={role.id} value={role.name}>{role.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={newUser.password}
              onChange={(e) => setNewUser({...newUser, password: e.target.value})}
              placeholder="Enter temporary password"
            />
          </div>
          <Button 
            onClick={onAddUser}
            className="w-full bg-[#27AE60] hover:bg-[#1e8449]"
            disabled={!newUser.firstName || !newUser.lastName || !newUser.email || !newUser.role}
          >
            Send Access Invitation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
