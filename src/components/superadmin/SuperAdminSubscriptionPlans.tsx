import React, { useState } from 'react';
import { Plus, Edit, Trash2, MoreVertical, DollarSign, Users, Calendar, Tag, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

interface SubscriptionPlan {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'inactive';
  type: 'monthly' | 'annual' | 'one-time' | 'free-trial';
  price: number;
  billingCycle: string;
  setupFee?: number;
  annualDiscount?: number;
  currency: string;
  includeVAT: boolean;
  autoRenewal: boolean;
  trialPeriod?: number;
  maxUsers?: number;
  tags: string[];
  activeSubscribers: number;
  createdAt: string;
}

const mockPlans: SubscriptionPlan[] = [
  {
    id: 1,
    name: 'NovaFarm Basic',
    description: 'Essential features for small pharmacies',
    status: 'active',
    type: 'monthly',
    price: 29.99,
    billingCycle: 'Every month',
    currency: 'EUR',
    includeVAT: true,
    autoRenewal: true,
    trialPeriod: 14,
    maxUsers: 5,
    tags: ['basic', 'starter'],
    activeSubscribers: 142,
    createdAt: '2024-01-10'
  },
  {
    id: 2,
    name: 'NovaFarm Premium',
    description: 'Advanced features for growing businesses',
    status: 'active',
    type: 'monthly',
    price: 79.99,
    billingCycle: 'Every month',
    annualDiscount: 20,
    currency: 'EUR',
    includeVAT: true,
    autoRenewal: true,
    trialPeriod: 30,
    maxUsers: 25,
    tags: ['premium', 'popular'],
    activeSubscribers: 89,
    createdAt: '2024-01-10'
  },
  {
    id: 3,
    name: 'NovaFarm Enterprise',
    description: 'Complete solution for large pharmacy chains',
    status: 'active',
    type: 'annual',
    price: 1999.99,
    billingCycle: 'Every year',
    setupFee: 500,
    currency: 'EUR',
    includeVAT: true,
    autoRenewal: true,
    tags: ['enterprise', 'custom'],
    activeSubscribers: 23,
    createdAt: '2024-01-10'
  }
];

export const SuperAdminSubscriptionPlans: React.FC = () => {
  const [plans, setPlans] = useState<SubscriptionPlan[]>(mockPlans);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<SubscriptionPlan | null>(null);
  const { toast } = useToast();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'active',
    type: 'monthly',
    price: '',
    billingCycle: 'Every month',
    setupFee: '',
    annualDiscount: '',
    currency: 'EUR',
    includeVAT: true,
    autoRenewal: true,
    trialPeriod: '',
    maxUsers: '',
    tags: ''
  });

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      status: 'active',
      type: 'monthly',
      price: '',
      billingCycle: 'Every month',
      setupFee: '',
      annualDiscount: '',
      currency: 'EUR',
      includeVAT: true,
      autoRenewal: true,
      trialPeriod: '',
      maxUsers: '',
      tags: ''
    });
  };

  const handleCreatePlan = () => {
    const newPlan: SubscriptionPlan = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      status: formData.status as 'active' | 'inactive',
      type: formData.type as any,
      price: parseFloat(formData.price),
      billingCycle: formData.billingCycle,
      setupFee: formData.setupFee ? parseFloat(formData.setupFee) : undefined,
      annualDiscount: formData.annualDiscount ? parseFloat(formData.annualDiscount) : undefined,
      currency: formData.currency,
      includeVAT: formData.includeVAT,
      autoRenewal: formData.autoRenewal,
      trialPeriod: formData.trialPeriod ? parseInt(formData.trialPeriod) : undefined,
      maxUsers: formData.maxUsers ? parseInt(formData.maxUsers) : undefined,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      activeSubscribers: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };

    setPlans([...plans, newPlan]);
    setIsCreateModalOpen(false);
    resetForm();
    toast({
      title: "Plan Created",
      description: `${newPlan.name} has been created successfully.`,
    });
  };

  const handleEditPlan = (plan: SubscriptionPlan) => {
    setEditingPlan(plan);
    setFormData({
      name: plan.name,
      description: plan.description,
      status: plan.status,
      type: plan.type,
      price: plan.price.toString(),
      billingCycle: plan.billingCycle,
      setupFee: plan.setupFee?.toString() || '',
      annualDiscount: plan.annualDiscount?.toString() || '',
      currency: plan.currency,
      includeVAT: plan.includeVAT,
      autoRenewal: plan.autoRenewal,
      trialPeriod: plan.trialPeriod?.toString() || '',
      maxUsers: plan.maxUsers?.toString() || '',
      tags: plan.tags.join(', ')
    });
    setIsCreateModalOpen(true);
  };

  const handleUpdatePlan = () => {
    if (!editingPlan) return;

    const updatedPlan: SubscriptionPlan = {
      ...editingPlan,
      name: formData.name,
      description: formData.description,
      status: formData.status as 'active' | 'inactive',
      type: formData.type as any,
      price: parseFloat(formData.price),
      billingCycle: formData.billingCycle,
      setupFee: formData.setupFee ? parseFloat(formData.setupFee) : undefined,
      annualDiscount: formData.annualDiscount ? parseFloat(formData.annualDiscount) : undefined,
      currency: formData.currency,
      includeVAT: formData.includeVAT,
      autoRenewal: formData.autoRenewal,
      trialPeriod: formData.trialPeriod ? parseInt(formData.trialPeriod) : undefined,
      maxUsers: formData.maxUsers ? parseInt(formData.maxUsers) : undefined,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };

    setPlans(plans.map(p => p.id === editingPlan.id ? updatedPlan : p));
    setIsCreateModalOpen(false);
    setEditingPlan(null);
    resetForm();
    toast({
      title: "Plan Updated",
      description: `${updatedPlan.name} has been updated successfully.`,
    });
  };

  const handleDeletePlan = (planId: number) => {
    setPlans(plans.filter(p => p.id !== planId));
    toast({
      title: "Plan Deleted",
      description: "Subscription plan has been deleted successfully.",
    });
  };

  const togglePlanStatus = (planId: number) => {
    setPlans(plans.map(p => 
      p.id === planId 
        ? { ...p, status: p.status === 'active' ? 'inactive' : 'active' as 'active' | 'inactive' }
        : p
    ));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'monthly': return 'bg-blue-100 text-blue-800';
      case 'annual': return 'bg-green-100 text-green-800';
      case 'one-time': return 'bg-purple-100 text-purple-800';
      case 'free-trial': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Subscription Plans</h1>
          <p className="text-gray-600 mt-1">Create and manage billing plans for your platform</p>
        </div>
        
        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#1C9B7A] hover:bg-[#16845C] text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create New Plan
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingPlan ? 'Edit Subscription Plan' : 'Create New Subscription Plan'}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* General Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">General Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Plan Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. NovaFarm Monthly"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.status === 'active'}
                      onCheckedChange={(checked) => setFormData({...formData, status: checked ? 'active' : 'inactive'})}
                    />
                    <Label>Plan Active</Label>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Short description of this plan"
                    rows={3}
                  />
                </div>
              </div>

              {/* Pricing Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Pricing Details</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="type">Plan Type *</Label>
                    <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="annual">Annual</SelectItem>
                        <SelectItem value="one-time">One-time</SelectItem>
                        <SelectItem value="free-trial">Free Trial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="price">Price (€) *</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      placeholder="29.99"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="billingCycle">Billing Cycle</Label>
                    <Select value={formData.billingCycle} onValueChange={(value) => setFormData({...formData, billingCycle: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Every month">Every month</SelectItem>
                        <SelectItem value="Every year">Every year</SelectItem>
                        <SelectItem value="Every 3 months">Every 3 months</SelectItem>
                        <SelectItem value="Custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="setupFee">Setup Fee (€)</Label>
                    <Input
                      id="setupFee"
                      type="number"
                      step="0.01"
                      value={formData.setupFee}
                      onChange={(e) => setFormData({...formData, setupFee: e.target.value})}
                      placeholder="0.00"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="annualDiscount">Annual Discount (%)</Label>
                  <Input
                    id="annualDiscount"
                    type="number"
                    value={formData.annualDiscount}
                    onChange={(e) => setFormData({...formData, annualDiscount: e.target.value})}
                    placeholder="20"
                  />
                </div>
              </div>

              {/* Payment Options */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Payment Options</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currency">Currency</Label>
                    <Select value={formData.currency} onValueChange={(value) => setFormData({...formData, currency: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="GBP">GBP (£)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.includeVAT}
                      onCheckedChange={(checked) => setFormData({...formData, includeVAT: checked})}
                    />
                    <Label>Include VAT (22%)</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.autoRenewal}
                      onCheckedChange={(checked) => setFormData({...formData, autoRenewal: checked})}
                    />
                    <Label>Enable Auto-Renewal</Label>
                  </div>
                </div>
              </div>

              {/* Advanced Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Advanced Settings</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="trialPeriod">Trial Period (days)</Label>
                    <Input
                      id="trialPeriod"
                      type="number"
                      value={formData.trialPeriod}
                      onChange={(e) => setFormData({...formData, trialPeriod: e.target.value})}
                      placeholder="14"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="maxUsers">Max Users Allowed</Label>
                    <Input
                      id="maxUsers"
                      type="number"
                      value={formData.maxUsers}
                      onChange={(e) => setFormData({...formData, maxUsers: e.target.value})}
                      placeholder="10"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="tags">Tags/Labels (comma separated)</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    placeholder="basic, popular, recommended"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-3 pt-4 border-t">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsCreateModalOpen(false);
                    setEditingPlan(null);
                    resetForm();
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={editingPlan ? handleUpdatePlan : handleCreatePlan}
                  className="bg-[#1C9B7A] hover:bg-[#16845C] text-white"
                  disabled={!formData.name || !formData.price}
                >
                  {editingPlan ? 'Update Plan' : 'Create Plan'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Plans</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{plans.length}</div>
            <p className="text-xs text-muted-foreground">
              {plans.filter(p => p.status === 'active').length} active
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {plans.reduce((sum, plan) => sum + plan.activeSubscribers, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all plans
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              €{plans
                .filter(p => p.type === 'monthly' && p.status === 'active')
                .reduce((sum, plan) => sum + (plan.price * plan.activeSubscribers), 0)
                .toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              From monthly plans
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Popular Plan</CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {plans.sort((a, b) => b.activeSubscribers - a.activeSubscribers)[0]?.name.split(' ')[1] || 'N/A'}
            </div>
            <p className="text-xs text-muted-foreground">
              Most subscribers
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Plans Table */}
      <Card>
        <CardHeader>
          <CardTitle>Subscription Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plan Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Subscribers</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{plan.name}</div>
                      <div className="text-sm text-gray-500">{plan.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getTypeColor(plan.type)}>
                      {plan.type.charAt(0).toUpperCase() + plan.type.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">€{plan.price}</div>
                    <div className="text-sm text-gray-500">{plan.billingCycle}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={plan.status === 'active' ? 'default' : 'secondary'}>
                      {plan.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-gray-400" />
                      {plan.activeSubscribers}
                    </div>
                  </TableCell>
                  <TableCell>{plan.createdAt}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEditPlan(plan)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Plan
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => togglePlanStatus(plan.id)}>
                          <Calendar className="mr-2 h-4 w-4" />
                          {plan.status === 'active' ? 'Deactivate' : 'Activate'}
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDeletePlan(plan.id)}
                          className="text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Plan
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};