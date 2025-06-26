
import React, { useState } from 'react';
import { Plus, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const SuperAdminAccounts: React.FC = () => {
  const { toast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    language: 'it',
    plan: 'standard',
    customDomain: '',
    contactPerson: '',
    phone: '',
    address: '',
    vatNumber: '',
    notes: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate account creation
    console.log('Creating account:', formData);
    
    toast({
      title: "Account Created Successfully",
      description: `Account for ${formData.businessName} has been created. Onboarding email sent to ${formData.email}`,
    });

    // Reset form
    setFormData({
      businessName: '',
      email: '',
      language: 'it',
      plan: 'standard',
      customDomain: '',
      contactPerson: '',
      phone: '',
      address: '',
      vatNumber: '',
      notes: ''
    });
    setIsCreating(false);
  };

  const handleCancel = () => {
    setIsCreating(false);
    setFormData({
      businessName: '',
      email: '',
      language: 'it',
      plan: 'standard',
      customDomain: '',
      contactPerson: '',
      phone: '',
      address: '',
      vatNumber: '',
      notes: ''
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Account Management</h1>
          <p className="text-gray-600 mt-1">Create and manage pharmacy accounts manually</p>
        </div>
        
        {!isCreating && (
          <Button 
            onClick={() => setIsCreating(true)}
            className="bg-[#1C9B7A] hover:bg-[#158a69] mt-4 sm:mt-0"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Account
          </Button>
        )}
      </div>

      {isCreating ? (
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Create New Pharmacy Account
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={handleCancel}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    placeholder="e.g., Farmacia Centrale Milano"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="admin@pharmacy.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Contact Person</Label>
                  <Input
                    id="contactPerson"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    placeholder="Dr. Mario Rossi"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+39 02 1234567"
                  />
                </div>
              </div>

              {/* Plan and Settings */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="plan">Subscription Plan *</Label>
                  <Select value={formData.plan} onValueChange={(value) => handleInputChange('plan', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic - €49/month</SelectItem>
                      <SelectItem value="standard">Standard - €99/month</SelectItem>
                      <SelectItem value="premium">Premium - €199/month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Default Language</Label>
                  <Select value={formData.language} onValueChange={(value) => handleInputChange('language', value)}>
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
                  <Label htmlFor="customDomain">Custom Domain</Label>
                  <Input
                    id="customDomain"
                    value={formData.customDomain}
                    onChange={(e) => handleInputChange('customDomain', e.target.value)}
                    placeholder="pharmacy.novafarm.it"
                  />
                </div>
              </div>

              {/* Business Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="address">Business Address</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Via Roma 123, 20100 Milano MI, Italy"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vatNumber">VAT Number / Partita IVA</Label>
                  <Input
                    id="vatNumber"
                    value={formData.vatNumber}
                    onChange={(e) => handleInputChange('vatNumber', e.target.value)}
                    placeholder="IT12345678901"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Internal Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Any additional notes about this account..."
                  rows={3}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit"
                  className="bg-[#1C9B7A] hover:bg-[#158a69] flex-1 sm:flex-none"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Create Account & Send Onboarding Email
                </Button>
                
                <Button 
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className="flex-1 sm:flex-none"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Creation</h3>
              <p className="text-gray-600 mb-4">
                Create new pharmacy accounts with automatic onboarding email delivery.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Automatic credentials generation</li>
                <li>• Custom domain setup</li>
                <li>• Plan assignment</li>
                <li>• Onboarding email with login details</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features Included</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Multi-language support</li>
                <li>✓ Custom domain configuration</li>
                <li>✓ Flexible plan assignment</li>
                <li>✓ Business information management</li>
                <li>✓ VAT/Tax ID tracking</li>
                <li>✓ Internal notes system</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Automation</h3>
              <p className="text-gray-600 mb-4">
                Once created, the system automatically:
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Generates secure login credentials</li>
                <li>• Sets up the pharmacy dashboard</li>
                <li>• Sends welcome email with access details</li>
                <li>• Configures billing and subscription</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
