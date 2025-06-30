
import React, { useState } from 'react';
import { Save, RotateCcw, Building, Euro, CreditCard, FileText, MessageSquare, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useToast } from '@/hooks/use-toast';

interface SystemSettings {
  companyInfo: {
    companyName: string;
    vatNumber: string;
    registeredAddress: string;
    supportEmail: string;
  };
  pricing: {
    standardMonthly: number;
    standardSetup: number;
    premiumMonthly: number;
    premiumSetup: number;
    currency: string;
    showSetupFee: boolean;
  };
  payment: {
    stripeLiveKey: string;
    stripeWebhookSecret: string;
  };
  invoice: {
    defaultDueDays: number;
    footerNotes: string;
  };
  contact: {
    ctaText: string;
  };
}

const initialSettings: SystemSettings = {
  companyInfo: {
    companyName: 'NovaFarm Solutions',
    vatNumber: 'IT12345678901',
    registeredAddress: 'Via Roma 123, 00100 Roma, Italy',
    supportEmail: 'support@novafarm.com'
  },
  pricing: {
    standardMonthly: 99,
    standardSetup: 199,
    premiumMonthly: 149,
    premiumSetup: 249,
    currency: 'EUR',
    showSetupFee: true
  },
  payment: {
    stripeLiveKey: 'pk_live_••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••',
    stripeWebhookSecret: 'whsec_••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••'
  },
  invoice: {
    defaultDueDays: 7,
    footerNotes: 'Payment terms: Net 7 days. Late payments may incur additional fees.'
  },
  contact: {
    ctaText: 'Ready to transform your business? Contact us today for a personalized consultation.'
  }
};

export const SuperAdminSystemSettings: React.FC = () => {
  const [settings, setSettings] = useState<SystemSettings>(initialSettings);
  const [openSections, setOpenSections] = useState<string[]>(['company']);
  const [showStripeKeys, setShowStripeKeys] = useState(false);
  const { toast } = useToast();

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleSave = () => {
    // Simulate save operation
    setTimeout(() => {
      toast({
        title: "Settings Saved",
        description: "All changes have been saved successfully.",
      });
    }, 500);
  };

  const handleReset = () => {
    setSettings(initialSettings);
    toast({
      title: "Settings Reset",
      description: "All settings have been reset to default values.",
    });
  };

  const updateSettings = (section: keyof SystemSettings, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const SectionCard = ({ 
    id, 
    title, 
    icon: Icon, 
    children, 
    defaultOpen = false 
  }: { 
    id: string; 
    title: string; 
    icon: React.ComponentType<any>; 
    children: React.ReactNode;
    defaultOpen?: boolean;
  }) => (
    <Card>
      <Collapsible 
        open={openSections.includes(id)} 
        onOpenChange={() => toggleSection(id)}
      >
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Icon className="w-5 h-5 mr-2 text-[#27AE60]" />
                {title}
              </div>
              <Button variant="ghost" size="sm">
                {openSections.includes(id) ? '−' : '+'}
              </Button>
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0">
            {children}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">System & Billing Settings</h1>
          <p className="text-gray-600 mt-1">Configure global platform parameters</p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset to Default
          </Button>
          <Button onClick={handleSave} className="bg-[#27AE60] hover:bg-[#1e8449]">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Company Info */}
        <SectionCard id="company" title="Company Information" icon={Building} defaultOpen>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={settings.companyInfo.companyName}
                onChange={(e) => updateSettings('companyInfo', 'companyName', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="vatNumber">VAT Number</Label>
              <Input
                id="vatNumber"
                value={settings.companyInfo.vatNumber}
                onChange={(e) => updateSettings('companyInfo', 'vatNumber', e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="registeredAddress">Registered Address</Label>
              <Textarea
                id="registeredAddress"
                value={settings.companyInfo.registeredAddress}
                onChange={(e) => updateSettings('companyInfo', 'registeredAddress', e.target.value)}
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="supportEmail">Support Email</Label>
              <Input
                id="supportEmail"
                type="email"
                value={settings.companyInfo.supportEmail}
                onChange={(e) => updateSettings('companyInfo', 'supportEmail', e.target.value)}
              />
            </div>
          </div>
        </SectionCard>

        {/* Pricing Settings */}
        <SectionCard id="pricing" title="Pricing Settings" icon={Euro}>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>Show Setup Fee</Label>
                <p className="text-sm text-gray-600">Display setup fee at checkout</p>
              </div>
              <Switch
                checked={settings.pricing.showSetupFee}
                onCheckedChange={(checked) => updateSettings('pricing', 'showSetupFee', checked)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="currency">Currency</Label>
                <Select 
                  value={settings.pricing.currency} 
                  onValueChange={(value) => updateSettings('pricing', 'currency', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EUR">EUR (€)</SelectItem>
                    <SelectItem value="USD">USD ($)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4 bg-gray-50">
                <h3 className="font-semibold mb-4">Standard Plan</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="standardMonthly">Monthly Price</Label>
                    <div className="relative">
                      <Input
                        id="standardMonthly"
                        type="number"
                        value={settings.pricing.standardMonthly}
                        onChange={(e) => updateSettings('pricing', 'standardMonthly', parseFloat(e.target.value))}
                        className="pl-8"
                      />
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">VAT included, recurring monthly</p>
                  </div>
                  <div>
                    <Label htmlFor="standardSetup">Setup Fee</Label>
                    <div className="relative">
                      <Input
                        id="standardSetup"
                        type="number"
                        value={settings.pricing.standardSetup}
                        onChange={(e) => updateSettings('pricing', 'standardSetup', parseFloat(e.target.value))}
                        className="pl-8"
                      />
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">One-time fee at signup</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gray-50">
                <h3 className="font-semibold mb-4">Premium Plan</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="premiumMonthly">Monthly Price</Label>
                    <div className="relative">
                      <Input
                        id="premiumMonthly"
                        type="number"
                        value={settings.pricing.premiumMonthly}
                        onChange={(e) => updateSettings('pricing', 'premiumMonthly', parseFloat(e.target.value))}
                        className="pl-8"
                      />
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">VAT included, recurring monthly</p>
                  </div>
                  <div>
                    <Label htmlFor="premiumSetup">Setup Fee</Label>
                    <div className="relative">
                      <Input
                        id="premiumSetup"
                        type="number"
                        value={settings.pricing.premiumSetup}
                        onChange={(e) => updateSettings('pricing', 'premiumSetup', parseFloat(e.target.value))}
                        className="pl-8"
                      />
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">One-time fee at signup</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </SectionCard>

        {/* Payment Settings */}
        <SectionCard id="payment" title="Payment Settings" icon={CreditCard}>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label>Show Stripe Keys</Label>
                <p className="text-sm text-gray-600">Toggle visibility of sensitive keys</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowStripeKeys(!showStripeKeys)}
              >
                {showStripeKeys ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <Label htmlFor="stripeLiveKey">Stripe Live Key</Label>
                <Input
                  id="stripeLiveKey"
                  type={showStripeKeys ? "text" : "password"}
                  value={settings.payment.stripeLiveKey}
                  onChange={(e) => updateSettings('payment', 'stripeLiveKey', e.target.value)}
                  readOnly
                />
                <p className="text-xs text-gray-600 mt-1">Your Stripe publishable key for live transactions</p>
              </div>
              <div>
                <Label htmlFor="stripeWebhookSecret">Stripe Webhook Secret</Label>
                <Input
                  id="stripeWebhookSecret"
                  type={showStripeKeys ? "text" : "password"}
                  value={settings.payment.stripeWebhookSecret}
                  onChange={(e) => updateSettings('payment', 'stripeWebhookSecret', e.target.value)}
                  readOnly
                />
                <p className="text-xs text-gray-600 mt-1">Secret key for webhook signature verification</p>
              </div>
            </div>

            <Button variant="outline" className="w-full sm:w-auto">
              <CreditCard className="w-4 h-4 mr-2" />
              Update Stripe Configuration
            </Button>
          </div>
        </SectionCard>

        {/* Invoice Settings */}
        <SectionCard id="invoice" title="Invoice Settings" icon={FileText}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="defaultDueDays">Default Due Date</Label>
              <div className="relative">
                <Input
                  id="defaultDueDays"
                  type="number"
                  value={settings.invoice.defaultDueDays}
                  onChange={(e) => updateSettings('invoice', 'defaultDueDays', parseInt(e.target.value))}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">days</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Payment due period for new invoices</p>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="footerNotes">Footer Notes</Label>
              <Textarea
                id="footerNotes"
                value={settings.invoice.footerNotes}
                onChange={(e) => updateSettings('invoice', 'footerNotes', e.target.value)}
                rows={3}
                placeholder="Legal information, payment terms, etc."
              />
              <p className="text-xs text-gray-600 mt-1">Legal info and payment terms shown on invoices</p>
            </div>
          </div>
        </SectionCard>

        {/* Contact Page Settings */}
        <SectionCard id="contact" title="Contact Page Settings" icon={MessageSquare}>
          <div>
            <Label htmlFor="ctaText">Call-to-Action Text</Label>
            <Textarea
              id="ctaText"
              value={settings.contact.ctaText}
              onChange={(e) => updateSettings('contact', 'ctaText', e.target.value)}
              rows={3}
              placeholder="Text shown in contact popups and CTAs"
            />
            <p className="text-xs text-gray-600 mt-1">Custom text displayed in contact forms and popups</p>
          </div>
        </SectionCard>
      </div>
    </div>
  );
};
