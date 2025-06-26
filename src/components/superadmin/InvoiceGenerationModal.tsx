
import React, { useState } from 'react';
import { X, Plus, Trash2, FileText, Send, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  vatRate: number;
}

interface InvoiceGenerationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvoiceGenerationModal: React.FC<InvoiceGenerationModalProps> = ({
  isOpen,
  onClose
}) => {
  const { toast } = useToast();
  const [selectedClient, setSelectedClient] = useState('');
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: `INV-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
    invoiceDate: new Date(),
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    causale: '',
    currency: 'EUR',
    amountPaid: 0
  });
  
  const [clientInfo, setClientInfo] = useState({
    businessName: '',
    vatNumber: '',
    billingEmail: '',
    street: '',
    city: '',
    zipCode: '',
    province: '',
    country: 'IT'
  });

  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: '1', description: '', quantity: 1, unitPrice: 0, vatRate: 22 }
  ]);
  
  const [sendEmail, setSendEmail] = useState(true);

  // Mock client data
  const mockClients = [
    { id: '1', name: 'Farmacia Centrale Milano', vatNumber: 'IT12345678901', email: 'admin@farmaciacentrale.it' },
    { id: '2', name: 'Parafarmacia Benessere', vatNumber: 'IT98765432109', email: 'info@parafarmaciabenessere.it' },
    { id: '3', name: 'Farmacia San Marco', vatNumber: 'IT11223344556', email: 'contact@sanmarco.it' }
  ];

  const handleClientSelect = (clientId: string) => {
    const client = mockClients.find(c => c.id === clientId);
    if (client) {
      setSelectedClient(clientId);
      setClientInfo({
        businessName: client.name,
        vatNumber: client.vatNumber,
        billingEmail: client.email,
        street: 'Via Roma 123',
        city: 'Milano',
        zipCode: '20100',
        province: 'MI',
        country: 'IT'
      });
    }
  };

  const addLineItem = () => {
    const newItem: LineItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      unitPrice: 0,
      vatRate: 22
    };
    setLineItems([...lineItems, newItem]);
  };

  const removeLineItem = (id: string) => {
    if (lineItems.length > 1) {
      setLineItems(lineItems.filter(item => item.id !== id));
    }
  };

  const updateLineItem = (id: string, field: keyof LineItem, value: string | number) => {
    setLineItems(lineItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const calculateLineTotal = (item: LineItem) => {
    const subtotal = item.quantity * item.unitPrice;
    const vatAmount = subtotal * (item.vatRate / 100);
    return subtotal + vatAmount;
  };

  const calculateSummary = () => {
    const subtotal = lineItems.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
    const totalVat = lineItems.reduce((sum, item) => {
      const lineSubtotal = item.quantity * item.unitPrice;
      return sum + (lineSubtotal * (item.vatRate / 100));
    }, 0);
    const totalDue = subtotal + totalVat;
    const balanceDue = totalDue - invoiceData.amountPaid;
    
    return { subtotal, totalVat, totalDue, balanceDue };
  };

  const handleGenerateInvoice = () => {
    if (!selectedClient || !clientInfo.businessName) {
      toast({
        title: "Error",
        description: "Please select a client first.",
        variant: "destructive"
      });
      return;
    }

    const summary = calculateSummary();
    
    toast({
      title: "Invoice Generated Successfully",
      description: `Invoice ${invoiceData.invoiceNumber} for €${summary.totalDue.toFixed(2)} has been created. ${sendEmail ? 'Email sent to client.' : ''}`,
    });

    onClose();
  };

  const handlePreviewPDF = () => {
    toast({
      title: "PDF Preview",
      description: "Opening PDF preview in new window...",
    });
  };

  const summary = calculateSummary();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center">
            <FileText className="w-6 h-6 mr-2 text-[#1C9B7A]" />
            Generate New Invoice
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Client Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-900">Client Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client">Select Client *</Label>
                  <Select value={selectedClient} onValueChange={handleClientSelect}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a client..." />
                    </SelectTrigger>
                    <SelectContent>
                      {mockClients.map((client) => (
                        <SelectItem key={client.id} value={client.id}>
                          {client.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="vatNumber">VAT Number</Label>
                  <Input
                    id="vatNumber"
                    value={clientInfo.vatNumber}
                    onChange={(e) => setClientInfo({...clientInfo, vatNumber: e.target.value})}
                    placeholder="IT12345678901"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    value={clientInfo.businessName}
                    onChange={(e) => setClientInfo({...clientInfo, businessName: e.target.value})}
                    placeholder="Business name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="billingEmail">Billing Email</Label>
                  <Input
                    id="billingEmail"
                    type="email"
                    value={clientInfo.billingEmail}
                    onChange={(e) => setClientInfo({...clientInfo, billingEmail: e.target.value})}
                    placeholder="billing@client.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="street">Street</Label>
                  <Input
                    id="street"
                    value={clientInfo.street}
                    onChange={(e) => setClientInfo({...clientInfo, street: e.target.value})}
                    placeholder="Via Roma 123"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={clientInfo.city}
                    onChange={(e) => setClientInfo({...clientInfo, city: e.target.value})}
                    placeholder="Milano"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    value={clientInfo.zipCode}
                    onChange={(e) => setClientInfo({...clientInfo, zipCode: e.target.value})}
                    placeholder="20100"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="province">Province</Label>
                  <Input
                    id="province"
                    value={clientInfo.province}
                    onChange={(e) => setClientInfo({...clientInfo, province: e.target.value})}
                    placeholder="MI"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Invoice Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-900">Invoice Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="invoiceNumber">Invoice Number</Label>
                  <Input
                    id="invoiceNumber"
                    value={invoiceData.invoiceNumber}
                    onChange={(e) => setInvoiceData({...invoiceData, invoiceNumber: e.target.value})}
                    className="bg-gray-50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Invoice Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(invoiceData.invoiceDate, 'PPP')}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={invoiceData.invoiceDate}
                        onSelect={(date) => date && setInvoiceData({...invoiceData, invoiceDate: date})}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Due Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(invoiceData.dueDate, 'PPP')}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={invoiceData.dueDate}
                        onSelect={(date) => date && setInvoiceData({...invoiceData, dueDate: date})}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select value={invoiceData.currency} onValueChange={(value) => setInvoiceData({...invoiceData, currency: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="causale">Reference / Causale</Label>
                <Textarea
                  id="causale"
                  value={invoiceData.causale}
                  onChange={(e) => setInvoiceData({...invoiceData, causale: e.target.value})}
                  placeholder="Brief description of the service or reason for invoice..."
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Line Items */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg text-gray-900">Line Items</CardTitle>
              <Button onClick={addLineItem} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Line Item
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lineItems.map((item, index) => (
                  <div key={item.id} className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 border rounded-lg">
                    <div className="lg:col-span-4 space-y-2">
                      <Label>Description</Label>
                      <Input
                        value={item.description}
                        onChange={(e) => updateLineItem(item.id, 'description', e.target.value)}
                        placeholder="Service description..."
                      />
                    </div>
                    
                    <div className="lg:col-span-2 space-y-2">
                      <Label>Quantity</Label>
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateLineItem(item.id, 'quantity', parseFloat(e.target.value) || 1)}
                      />
                    </div>
                    
                    <div className="lg:col-span-2 space-y-2">
                      <Label>Unit Price (€)</Label>
                      <Input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.unitPrice}
                        onChange={(e) => updateLineItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    
                    <div className="lg:col-span-2 space-y-2">
                      <Label>VAT (%)</Label>
                      <Select value={item.vatRate.toString()} onValueChange={(value) => updateLineItem(item.id, 'vatRate', parseFloat(value))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">0%</SelectItem>
                          <SelectItem value="4">4%</SelectItem>
                          <SelectItem value="10">10%</SelectItem>
                          <SelectItem value="22">22%</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="lg:col-span-1 space-y-2">
                      <Label>Total</Label>
                      <div className="h-10 flex items-center font-medium">
                        €{calculateLineTotal(item).toFixed(2)}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1 space-y-2">
                      <Label className="invisible">Actions</Label>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeLineItem(item.id)}
                        disabled={lineItems.length === 1}
                        className="h-10 w-full text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-900">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="amountPaid">Amount Paid (Optional)</Label>
                  <Input
                    id="amountPaid"
                    type="number"
                    min="0"
                    step="0.01"
                    value={invoiceData.amountPaid}
                    onChange={(e) => setInvoiceData({...invoiceData, amountPaid: parseFloat(e.target.value) || 0})}
                    placeholder="0.00"
                  />
                </div>
                
                <div className="space-y-3 text-right">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span>€{summary.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total VAT:</span>
                    <span>€{summary.totalVat.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Total Due:</span>
                    <span>€{summary.totalDue.toFixed(2)}</span>
                  </div>
                  {invoiceData.amountPaid > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Balance Due:</span>
                      <span>€{summary.balanceDue.toFixed(2)}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sendEmail"
                    checked={sendEmail}
                    onCheckedChange={setSendEmail}
                  />
                  <Label htmlFor="sendEmail" className="text-sm">
                    Send invoice via email to client
                  </Label>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={handlePreviewPDF}>
                    <Eye className="w-4 h-4 mr-2" />
                    Preview PDF
                  </Button>
                  
                  <Button onClick={onClose} variant="outline">
                    Cancel
                  </Button>
                  
                  <Button onClick={handleGenerateInvoice} className="bg-[#1C9B7A] hover:bg-[#158a69]">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate & Save Invoice
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};
