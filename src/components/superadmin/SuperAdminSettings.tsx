
import React, { useState } from 'react';
import { Shield, Globe, Palette, Bell, Database, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const SuperAdminSettings: React.FC = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    twoFactorEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
    maintenanceMode: false,
    autoBackups: true,
    platformName: 'NovaFarm',
    supportEmail: 'support@novafarm.com',
    maxUsers: '1000',
    sessionTimeout: '30',
    apiRateLimit: '1000',
    defaultLanguage: 'it',
    allowRegistration: true,
    requireEmailVerification: true
  });

  const handleSettingChange = (key: string, value: boolean | string) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveSettings = () => {
    console.log('Saving settings:', settings);
    toast({
      title: "Settings Saved",
      description: "Platform settings have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Platform Settings</h1>
          <p className="text-gray-600 mt-1">Configure system-wide settings and preferences</p>
        </div>
        <Button onClick={handleSaveSettings} className="bg-[#1C9B7A] hover:bg-[#158a69] mt-4 sm:mt-0">
          Save All Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security Settings */}
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#1C9B7A]" />
              <CardTitle className="text-lg font-semibold text-gray-900">Security Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium text-gray-900">Two-Factor Authentication</Label>
                <p className="text-sm text-gray-600">Enable 2FA for admin account</p>
              </div>
              <Switch
                checked={settings.twoFactorEnabled}
                onCheckedChange={(checked) => handleSettingChange('twoFactorEnabled', checked)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
              <Input
                id="sessionTimeout"
                value={settings.sessionTimeout}
                onChange={(e) => handleSettingChange('sessionTimeout', e.target.value)}
                type="number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apiRateLimit">API Rate Limit (requests/hour)</Label>
              <Input
                id="apiRateLimit"
                value={settings.apiRateLimit}
                onChange={(e) => handleSettingChange('apiRateLimit', e.target.value)}
                type="number"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium text-gray-900">Require Email Verification</Label>
                <p className="text-sm text-gray-600">New users must verify email</p>
              </div>
              <Switch
                checked={settings.requireEmailVerification}
                onCheckedChange={(checked) => handleSettingChange('requireEmailVerification', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Platform Configuration */}
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#1C9B7A]" />
              <CardTitle className="text-lg font-semibold text-gray-900">Platform Configuration</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="platformName">Platform Name</Label>
              <Input
                id="platformName"
                value={settings.platformName}
                onChange={(e) => handleSettingChange('platformName', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="supportEmail">Support Email</Label>
              <Input
                id="supportEmail"
                type="email"
                value={settings.supportEmail}
                onChange={(e) => handleSettingChange('supportEmail', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="defaultLanguage">Default Language</Label>
              <Select value={settings.defaultLanguage} onValueChange={(value) => handleSettingChange('defaultLanguage', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">Italian</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxUsers">Maximum Users</Label>
              <Input
                id="maxUsers"
                type="number"
                value={settings.maxUsers}
                onChange={(e) => handleSettingChange('maxUsers', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-[#1C9B7A]" />
              <CardTitle className="text-lg font-semibold text-gray-900">Notification Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium text-gray-900">Email Notifications</Label>
                <p className="text-sm text-gray-600">Receive admin notifications via email</p>
              </div>
              <Switch
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium text-gray-900">SMS Notifications</Label>
                <p className="text-sm text-gray-600">Receive critical alerts via SMS</p>
              </div>
              <Switch
                checked={settings.smsNotifications}
                onCheckedChange={(checked) => handleSettingChange('smsNotifications', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium text-gray-900">Allow User Registration</Label>
                <p className="text-sm text-gray-600">Enable public registration</p>
              </div>
              <Switch
                checked={settings.allowRegistration}
                onCheckedChange={(checked) => handleSettingChange('allowRegistration', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-[#1C9B7A]" />
              <CardTitle className="text-lg font-semibold text-gray-900">System Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium text-gray-900">Maintenance Mode</Label>
                <p className="text-sm text-gray-600">Put platform in maintenance mode</p>
              </div>
              <Switch
                checked={settings.maintenanceMode}
                onCheckedChange={(checked) => handleSettingChange('maintenanceMode', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium text-gray-900">Automatic Backups</Label>
                <p className="text-sm text-gray-600">Enable daily database backups</p>
              </div>
              <Switch
                checked={settings.autoBackups}
                onCheckedChange={(checked) => handleSettingChange('autoBackups', checked)}
              />
            </div>

            <div className="pt-4">
              <Button variant="outline" className="w-full">
                <Database className="w-4 h-4 mr-2" />
                Create Manual Backup
              </Button>
            </div>

            <div className="pt-2">
              <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                <Lock className="w-4 h-4 mr-2" />
                Clear All Caches
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Branding Settings */}
      <Card className="bg-white border border-gray-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-[#1C9B7A]" />
            <CardTitle className="text-lg font-semibold text-gray-900">Platform Branding</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="logoUrl">Logo URL</Label>
              <Input
                id="logoUrl"
                placeholder="https://example.com/logo.png"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="faviconUrl">Favicon URL</Label>
              <Input
                id="faviconUrl"
                placeholder="https://example.com/favicon.ico"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="welcomeMessage">Welcome Message</Label>
            <Textarea
              id="welcomeMessage"
              placeholder="Welcome to NovaFarm - Your complete pharmacy management solution"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primaryColor">Primary Color</Label>
              <Input
                id="primaryColor"
                type="color"
                defaultValue="#1C9B7A"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="secondaryColor">Secondary Color</Label>
              <Input
                id="secondaryColor"
                type="color"
                defaultValue="#F3EEE9"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accentColor">Accent Color</Label>
              <Input
                id="accentColor"
                type="color"
                defaultValue="#8E8E93"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
