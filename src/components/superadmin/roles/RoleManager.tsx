
import React from 'react';
import { Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

interface RoleManagerProps {
  roles: Role[];
  allPermissions: Permission[];
  onManagePermissions: (role: Role) => void;
}

export const RoleManager: React.FC<RoleManagerProps> = ({
  roles,
  allPermissions,
  onManagePermissions
}) => {
  return (
    <div className="grid gap-6">
      {roles.map((role) => (
        <Card key={role.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">{role.name}</CardTitle>
                <p className="text-sm text-gray-600">{role.description}</p>
              </div>
              <Button 
                variant="outline"
                onClick={() => onManagePermissions(role)}
              >
                <Settings className="w-4 h-4 mr-2" />
                Manage Permissions
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {role.permissions.map((permission) => {
                const perm = allPermissions.find(p => p.id === permission);
                return perm ? (
                  <Badge key={permission} variant="secondary" className="bg-[#27AE60]/10 text-[#27AE60]">
                    <perm.icon className="w-3 h-3 mr-1" />
                    {perm.label}
                  </Badge>
                ) : null;
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
