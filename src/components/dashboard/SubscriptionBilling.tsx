
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Plus, Calendar, DollarSign, AlertCircle, Trash2, Star } from 'lucide-react';
import { AddPaymentMethodModal } from './AddPaymentMethodModal';

interface PaymentMethod {
  id: string;
  type: string;
  card: {
    brand: string;
    last4: string;
    exp_month: number;
    exp_year: number;
  };
  billing_details: {
    name: string;
    address?: string;
  };
  created: string;
  isDefault?: boolean;
}

export const SubscriptionBilling: React.FC = () => {
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: 'pm_1234567890',
      type: 'card',
      card: {
        brand: 'visa',
        last4: '4242',
        exp_month: 12,
        exp_year: 2026
      },
      billing_details: {
        name: 'John Doe',
        address: '123 Main St, City, State 12345'
      },
      created: '2024-01-15T10:30:00Z',
      isDefault: true
    }
  ]);

  const handlePaymentMethodAdded = (newPaymentMethod: PaymentMethod) => {
    setPaymentMethods(prev => [...prev, newPaymentMethod]);
  };

  const handleRemovePaymentMethod = (id: string) => {
    setPaymentMethods(prev => prev.filter(pm => pm.id !== id));
  };

  const handleSetDefault = (id: string) => {
    setPaymentMethods(prev => 
      prev.map(pm => ({ ...pm, isDefault: pm.id === id }))
    );
  };

  const formatCardBrand = (brand: string) => {
    return brand.charAt(0).toUpperCase() + brand.slice(1);
  };

  return (
    <div className="space-y-6">
      {/* Current Subscription */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-[#27AE60]" />
            <span>Current Subscription</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div>
              <h3 className="font-semibold text-lg">Premium Plan</h3>
              <p className="text-gray-600">€149.00 / month</p>
            </div>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 w-fit">
              Active
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="text-sm text-gray-600">Next Billing Date</p>
              <p className="font-medium">February 15, 2025</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Billing Cycle</p>
              <p className="font-medium">Monthly</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-[#27AE60]" />
            <span>Payment Methods</span>
          </CardTitle>
          <Button 
            onClick={() => setShowAddPaymentModal(true)}
            className="bg-[#27AE60] hover:bg-[#229954] text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Payment Method
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentMethods.length === 0 ? (
            <div className="text-center py-8">
              <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No payment methods</h3>
              <p className="text-gray-600 mb-4">Add a payment method to manage your subscription billing.</p>
              <Button 
                onClick={() => setShowAddPaymentModal(true)}
                className="bg-[#27AE60] hover:bg-[#229954] text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Payment Method
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div 
                  key={method.id} 
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium">
                          {formatCardBrand(method.card.brand)} ending in {method.card.last4}
                        </p>
                        {method.isDefault && (
                          <Badge variant="secondary" className="flex items-center space-x-1">
                            <Star className="w-3 h-3" />
                            <span>Default</span>
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        Expires {method.card.exp_month.toString().padStart(2, '0')}/{method.card.exp_year}
                      </p>
                      <p className="text-sm text-gray-500">
                        {method.billing_details.name}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {!method.isDefault && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSetDefault(method.id)}
                      >
                        Set as Default
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemovePaymentMethod(method.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-[#27AE60]" />
            <span>Billing History</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: 'Jan 15, 2025', amount: '€149.00', status: 'Paid', invoice: 'INV-2025-001' },
              { date: 'Dec 15, 2024', amount: '€149.00', status: 'Paid', invoice: 'INV-2024-012' },
              { date: 'Nov 15, 2024', amount: '€149.00', status: 'Paid', invoice: 'INV-2024-011' },
            ].map((bill, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                <div>
                  <p className="font-medium">{bill.invoice}</p>
                  <p className="text-sm text-gray-600">{bill.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="font-medium">{bill.amount}</p>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    {bill.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Usage & Limits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-[#27AE60]" />
            <span>Usage & Limits</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">API Calls This Month</span>
                <span className="text-sm font-medium">2,847 / 10,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#27AE60] h-2 rounded-full" style={{ width: '28.47%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Storage Used</span>
                <span className="text-sm font-medium">15.2 GB / 100 GB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15.2%' }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Payment Method Modal */}
      <AddPaymentMethodModal
        open={showAddPaymentModal}
        onOpenChange={setShowAddPaymentModal}
        onPaymentMethodAdded={handlePaymentMethodAdded}
      />
    </div>
  );
};

