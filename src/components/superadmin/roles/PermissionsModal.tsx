
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
}

interface Permission {
  id: string;
  label: string;
  icon: any;
}

interface PermissionsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedRole: Role | null;
  allPermissions: Permission[];
  onPermissionToggle: (permissionId: string) => void;
}

export const PermissionsModal: React.FC<PermissionsModalProps> = ({
  isOpen,
  onOpenChange,
  selectedRole,
  allPermissions,
  onPermissionToggle
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Manage Permissions - {selectedRole?.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {allPermissions.map((permission) => (
            <div key={permission.id} className="flex items-center space-x-3">
              <Checkbox
                id={permission.id}
                checked={selectedRole?.permissions.includes(permission.id)}
                onCheckedChange={() => onPermissionToggle(permission.id)}
              />
              <div className="flex items-center space-x-2">
                <permission.icon className="w-4 h-4 text-gray-600" />
                <Label htmlFor={permission.id}>{permission.label}</Label>
              </div>
            </div>
          ))}
          <Button 
            onClick={() => onOpenChange(false)}
            className="w-full bg-[#27AE60] hover:bg-[#1e8449]"
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
