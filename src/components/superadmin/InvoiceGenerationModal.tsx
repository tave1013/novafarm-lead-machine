import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CalendarDays, Plus, Trash2, FileText, Send, Download, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface InvoiceGenerationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  vatRate: number;
  total: number;
}

interface ClientInfo {
  // Referent Details
  firstName: string;
  lastName: string;
  personalEmail: string;
  phone: string;
  
  // Company Tax Information
  businessName: string;
  vatNumber: string;
  taxCode: string;
  sdiCode: string;
  pecEmail: string;
  
  // Registered Office Address
  streetAddress: string;
  zipCode: string;
  city: string;
  province: string;
  country: string;
}

const InvoiceGenerationModal: React.FC<InvoiceGenerationModalProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    // Referent Details
    firstName: '',
    lastName: '',
    personalEmail: '',
    phone: '',
    
    // Company Tax Information
    businessName: '',
    vatNumber: '',
    taxCode: '',
    sdiCode: '',
    pecEmail: '',
    
    // Registered Office Address
    streetAddress: '',
    zipCode: '',
    city: '',
    province: '',
    country: 'Italy'
  });

  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNumber: `INV-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
    invoiceDate: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    reference: '',
    currency: 'EUR'
  });

  const [lineItems, setLineItems] = useState<LineItem[]>([
    {
      id: '1',
      description: '',
      quantity: 1,
      unitPrice: 0,
      vatRate: 22,
      total: 0
    }
  ]);

  const [summary, setSummary] = useState({
    subtotal: 0,
    totalVat: 0,
    totalDue: 0,
    amountPaid: 0,
    balanceDue: 0
  });

  const [sendEmail, setSendEmail] = useState(false);

  const italianProvinces = [
    { code: 'AG', name: 'Agrigento' },
    { code: 'AL', name: 'Alessandria' },
    { code: 'AN', name: 'Ancona' },
    { code: 'AO', name: 'Aosta' },
    { code: 'AR', name: 'Arezzo' },
    { code: 'AP', name: 'Ascoli Piceno' },
    { code: 'AT', name: 'Asti' },
    { code: 'AV', name: 'Avellino' },
    { code: 'BA', name: 'Bari' },
    { code: 'BT', name: 'Barletta-Andria-Trani' },
    { code: 'BL', name: 'Belluno' },
    { code: 'BN', name: 'Benevento' },
    { code: 'BG', name: 'Bergamo' },
    { code: 'BI', name: 'Biella' },
    { code: 'BO', name: 'Bologna' },
    { code: 'BZ', name: 'Bolzano' },
    { code: 'BS', name: 'Brescia' },
    { code: 'BR', name: 'Brindisi' },
    { code: 'CA', name: 'Cagliari' },
    { code: 'CL', name: 'Caltanissetta' },
    { code: 'CB', name: 'Campobasso' },
    { code: 'CS', name: 'Cosenza' },
    { code: 'CT', name: 'Catania' },
    { code: 'CZ', name: 'Catanzaro' },
    { code: 'CH', name: 'Chieti' },
    { code: 'CO', name: 'Como' },
    { code: 'CR', name: 'Cremona' },
    { code: 'KR', name: 'Crotone' },
    { code: 'CN', name: 'Cuneo' },
    { code: 'EN', name: 'Enna' },
    { code: 'FM', name: 'Fermo' },
    { code: 'FE', name: 'Ferrara' },
    { code: 'FI', name: 'Firenze' },
    { code: 'FG', name: 'Foggia' },
    { code: 'FC', name: 'Forlì-Cesena' },
    { code: 'FR', name: 'Frosinone' },
    { code: 'GE', name: 'Genova' },
    { code: 'GO', name: 'Gorizia' },
    { code: 'GR', name: 'Grosseto' },
    { code: 'IM', name: 'Imperia' },
    { code: 'IS', name: 'Isernia' },
    { code: 'AQ', name: 'L\'Aquila' },
    { code: 'SP', name: 'La Spezia' },
    { code: 'LT', name: 'Latina' },
    { code: 'LE', name: 'Lecce' },
    { code: 'LC', name: 'Lecco' },
    { code: 'LI', name: 'Livorno' },
    { code: 'LO', name: 'Lodi' },
    { code: 'LU', name: 'Lucca' },
    { code: 'MC', name: 'Macerata' },
    { code: 'MN', name: 'Mantova' },
    { code: 'MS', name: 'Massa-Carrara' },
    { code: 'MT', name: 'Matera' },
    { code: 'ME', name: 'Messina' },
    { code: 'MI', name: 'Milano' },
    { code: 'MO', name: 'Modena' },
    { code: 'MB', name: 'Monza e Brianza' },
    { code: 'NA', name: 'Napoli' },
    { code: 'NO', name: 'Novara' },
    { code: 'NU', name: 'Nuoro' },
    { code: 'OR', name: 'Oristano' },
    { code: 'PD', name: 'Padova' },
    { code: 'PA', name: 'Palermo' },
    { code: 'PR', name: 'Parma' },
    { code: 'PV', name: 'Pavia' },
    { code: 'PG', name: 'Perugia' },
    { code: 'PU', name: 'Pesaro e Urbino' },
    { code: 'PE', name: 'Pescara' },
    { code: 'PC', name: 'Piacenza' },
    { code: 'PI', name: 'Pisa' },
    { code: 'PT', name: 'Pistoia' },
    { code: 'PN', name: 'Pordenone' },
    { code: 'PZ', name: 'Potenza' },
    { code: 'PO', name: 'Prato' },
    { code: 'RG', name: 'Ragusa' },
    { code: 'RA', name: 'Ravenna' },
    { code: 'RC', name: 'Reggio Calabria' },
    { code: 'RE', name: 'Reggio Emilia' },
    { code: 'RI', name: 'Rieti' },
    { code: 'RN', name: 'Rimini' },
    { code: 'RM', name: 'Roma' },
    { code: 'RO', name: 'Rovigo' },
    { code: 'SA', name: 'Salerno' },
    { code: 'SS', name: 'Sassari' },
    { code: 'SV', name: 'Savona' },
    { code: 'SI', name: 'Siena' },
    { code: 'SR', name: 'Siracusa' },
    { code: 'SO', name: 'Sondrio' },
    { code: 'SU', name: 'Sud Sardegna' },
    { code: 'TA', name: 'Taranto' },
    { code: 'TE', name: 'Teramo' },
    { code: 'TR', name: 'Terni' },
    { code: 'TO', name: 'Torino' },
    { code: 'TP', name: 'Trapani' },
    { code: 'TN', name: 'Trento' },
    { code: 'TV', name: 'Treviso' },
    { code: 'TS', name: 'Trieste' },
    { code: 'UD', name: 'Udine' },
    { code: 'VA', name: 'Varese' },
    { code: 'VE', name: 'Venezia' },
    { code: 'VB', name: 'Verbano-Cusio-Ossola' },
    { code: 'VC', name: 'Vercelli' },
    { code: 'VR', name: 'Verona' },
    { code: 'VV', name: 'Vibo Valentia' },
    { code: 'VI', name: 'Vicenza' },
    { code: 'VT', name: 'Viterbo' }
  ];

  const validateVAT = (vat: string) => {
    return /^\d{11}$/.test(vat);
  };

  const validatePEC = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateSDI = (sdi: string) => {
    return /^[A-Z0-9]{7}$/.test(sdi.toUpperCase());
  };

  const addLineItem = () => {
    const newItem: LineItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      unitPrice: 0,
      vatRate: 22,
      total: 0
    };
    setLineItems([...lineItems, newItem]);
  };

  const removeLineItem = (id: string) => {
    if (lineItems.length > 1) {
      setLineItems(lineItems.filter(item => item.id !== id));
    }
  };

  const updateLineItem = (id: string, field: keyof LineItem, value: any) => {
    setLineItems(lineItems.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'unitPrice' || field === 'vatRate') {
          updatedItem.total = updatedItem.quantity * updatedItem.unitPrice;
        }
        return updatedItem;
      }
      return item;
    }));
  };

  const calculateSummary = () => {
    const subtotal = lineItems.reduce((sum, item) => sum + item.total, 0);
    const totalVat = lineItems.reduce((sum, item) => sum + (item.total * item.vatRate / 100), 0);
    const totalDue = subtotal + totalVat;
    const balanceDue = totalDue - summary.amountPaid;

    setSummary({
      subtotal,
      totalVat,
      totalDue,
      amountPaid: summary.amountPaid,
      balanceDue
    });
  };

  React.useEffect(() => {
    calculateSummary();
  }, [lineItems, summary.amountPaid]);

  const handlePreviewPDF = () => {
    toast({
      title: "PDF Preview",
      description: "Opening invoice preview...",
    });
  };

  const handleGenerateInvoice = () => {
    toast({
      title: "Invoice Generated",
      description: `Invoice ${invoiceDetails.invoiceNumber} has been saved successfully.`,
    });
    if (sendEmail) {
      toast({
        title: "Email Sent",
        description: `Invoice sent to ${clientInfo.personalEmail || clientInfo.pecEmail}`,
      });
    }
    onClose();
  };

  const handleSendEmailChange = (checked: boolean) => {
    setSendEmail(checked);
  };

  return (
    <TooltipProvider>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Generate Invoice</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Referent Details */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Referent Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="firstName"
                      value={clientInfo.firstName}
                      onChange={(e) => setClientInfo({...clientInfo, firstName: e.target.value})}
                      placeholder="John"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="lastName"
                      value={clientInfo.lastName}
                      onChange={(e) => setClientInfo({...clientInfo, lastName: e.target.value})}
                      placeholder="Doe"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="personalEmail">Personal Email <span className="text-red-500">*</span></Label>
                    <Input
                      id="personalEmail"
                      type="email"
                      value={clientInfo.personalEmail}
                      onChange={(e) => setClientInfo({...clientInfo, personalEmail: e.target.value})}
                      placeholder="john.doe@example.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={clientInfo.phone}
                      onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                      placeholder="+39 123 456 7890"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Tax Information */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Company Tax Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Legal Business Name (Ragione Sociale) <span className="text-red-500">*</span></Label>
                  <Input
                    id="businessName"
                    value={clientInfo.businessName}
                    onChange={(e) => setClientInfo({...clientInfo, businessName: e.target.value})}
                    placeholder="Example Pharmacy SRL"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="vatNumber">VAT Number (Partita IVA) <span className="text-red-500">*</span></Label>
                    <Input
                      id="vatNumber"
                      value={clientInfo.vatNumber}
                      onChange={(e) => setClientInfo({...clientInfo, vatNumber: e.target.value})}
                      placeholder="IT12345678901"
                      maxLength={11}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="taxCode">Tax Code (Codice Fiscale) (optional)</Label>
                    <Input
                      id="taxCode"
                      value={clientInfo.taxCode}
                      onChange={(e) => setClientInfo({...clientInfo, taxCode: e.target.value})}
                      placeholder="RSSMRA85M01H501Z"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center">
                      SDI Code (Codice SDI) <span className="text-red-500">*</span>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 ml-1 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">At least one of SDI Code or PEC email is required for electronic invoicing in Italy.</p>
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                    <Input
                      id="sdiCode"
                      value={clientInfo.sdiCode}
                      onChange={(e) => setClientInfo({...clientInfo, sdiCode: e.target.value.toUpperCase()})}
                      placeholder="ABC1234"
                      maxLength={7}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center">
                      PEC Email <span className="text-red-500">*</span>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-4 h-4 ml-1 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">At least one of SDI Code or PEC email is required for electronic invoicing in Italy.</p>
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                    <Input
                      id="pecEmail"
                      type="email"
                      value={clientInfo.pecEmail}
                      onChange={(e) => setClientInfo({...clientInfo, pecEmail: e.target.value})}
                      placeholder="pec@example.pec.it"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registered Office Address */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Registered Office Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="streetAddress">Street Address <span className="text-red-500">*</span></Label>
                  <Input
                    id="streetAddress"
                    value={clientInfo.streetAddress}
                    onChange={(e) => setClientInfo({...clientInfo, streetAddress: e.target.value})}
                    placeholder="Via Roma 123"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Postal Code (CAP) <span className="text-red-500">*</span></Label>
                    <Input
                      id="zipCode"
                      value={clientInfo.zipCode}
                      onChange={(e) => setClientInfo({...clientInfo, zipCode: e.target.value})}
                      placeholder="20121"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
                    <Input
                      id="city"
                      value={clientInfo.city}
                      onChange={(e) => setClientInfo({...clientInfo, city: e.target.value})}
                      placeholder="Milano"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="province">Province <span className="text-red-500">*</span></Label>
                    <Select 
                      value={clientInfo.province} 
                      onValueChange={(value) => setClientInfo({...clientInfo, province: value})}
                    >
                      <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent">
                        <SelectValue placeholder="Select province" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {italianProvinces.map((province) => (
                          <SelectItem key={province.code} value={province.code}>
                            {province.code} - {province.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country <span className="text-red-500">*</span></Label>
                  <Select 
                    value={clientInfo.country} 
                    onValueChange={(value) => setClientInfo({...clientInfo, country: value})}
                  >
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Italy">Italy</SelectItem>
                      <SelectItem value="France">France</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                      <SelectItem value="Spain">Spain</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

          {/* Invoice Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">Invoice Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="invoiceNumber">Invoice Number</Label>
                  <Input
                    id="invoiceNumber"
                    value={invoiceDetails.invoiceNumber}
                    onChange={(e) => setInvoiceDetails({...invoiceDetails, invoiceNumber: e.target.value})}
                    className="bg-gray-50"
                  />
                </div>
                <div>
                  <Label htmlFor="invoiceDate">Invoice Date</Label>
                  <Input
                    id="invoiceDate"
                    type="date"
                    value={invoiceDetails.invoiceDate}
                    onChange={(e) => setInvoiceDetails({...invoiceDetails, invoiceDate: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={invoiceDetails.dueDate}
                    onChange={(e) => setInvoiceDetails({...invoiceDetails, dueDate: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="reference">Causale / Reference</Label>
                  <Input
                    id="reference"
                    value={invoiceDetails.reference}
                    onChange={(e) => setInvoiceDetails({...invoiceDetails, reference: e.target.value})}
                    placeholder="Enter reference or description"
                  />
                </div>
                <div>
                  <Label htmlFor="currency">Currency</Label>
                  <Select value={invoiceDetails.currency} onValueChange={(value) => setInvoiceDetails({...invoiceDetails, currency: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Line Items */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-800">Line Items</CardTitle>
              <Button onClick={addLineItem} size="sm" className="bg-[#078147] hover:bg-[#066139]">
                <Plus className="w-4 h-4 mr-1" />
                Add Item
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lineItems.map((item, index) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 border rounded-lg">
                    <div className="md:col-span-2">
                      <Label htmlFor={`description-${item.id}`}>Description</Label>
                      <Input
                        id={`description-${item.id}`}
                        value={item.description}
                        onChange={(e) => updateLineItem(item.id, 'description', e.target.value)}
                        placeholder="Item description"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`quantity-${item.id}`}>Quantity</Label>
                      <Input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateLineItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`unitPrice-${item.id}`}>Unit Price</Label>
                      <Input
                        id={`unitPrice-${item.id}`}
                        type="number"
                        step="0.01"
                        min="0"
                        value={item.unitPrice}
                        onChange={(e) => updateLineItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`vatRate-${item.id}`}>VAT (%)</Label>
                      <Select 
                        value={item.vatRate.toString()} 
                        onValueChange={(value) => updateLineItem(item.id, 'vatRate', parseFloat(value))}
                      >
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
                    <div className="flex items-end justify-between">
                      <div>
                        <Label>Total</Label>
                        <div className="text-lg font-medium">€{item.total.toFixed(2)}</div>
                      </div>
                      {lineItems.length > 1 && (
                        <Button
                          onClick={() => removeLineItem(item.id)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-w-md ml-auto">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>€{summary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total VAT:</span>
                  <span>€{summary.totalVat.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Due:</span>
                  <span>€{summary.totalDue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <Label htmlFor="amountPaid">Amount Paid:</Label>
                  <Input
                    id="amountPaid"
                    type="number"
                    step="0.01"
                    min="0"
                    className="w-32"
                    value={summary.amountPaid}
                    onChange={(e) => setSummary({...summary, amountPaid: parseFloat(e.target.value) || 0})}
                  />
                </div>
                <div className="flex justify-between font-medium text-lg">
                  <span>Balance Due:</span>
                  <span className={summary.balanceDue > 0 ? "text-red-600" : "text-green-600"}>
                    €{summary.balanceDue.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sendEmail"
                    checked={sendEmail}
                    onCheckedChange={handleSendEmailChange}
                  />
                  <Label htmlFor="sendEmail">Send invoice via email to client</Label>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={handlePreviewPDF}
                    variant="outline"
                    className="flex items-center"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Preview PDF
                  </Button>
                  
                  <Button
                    onClick={handleGenerateInvoice}
                    className="bg-[#078147] hover:bg-[#066139] flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Generate & Save Invoice
                  </Button>
                  
                  <Button
                    onClick={onClose}
                    variant="outline"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
    </TooltipProvider>
  );
};

export default InvoiceGenerationModal;
