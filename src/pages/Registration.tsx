import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, User, Building, MapPin, CreditCard, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface CompanyInfo {
  companyName: string;
  vatNumber: string;
  taxCode: string;
  sdiCode: string;
  pecEmail: string;
}

interface AddressInfo {
  streetAddress: string;
  postalCode: string;
  city: string;
  province: string;
  country: string;
}

interface SelectedPlan {
  name: string;
  monthlyPrice: string;
  annualMonthlyPrice: string;
  setupFee: string;
  isAnnual: boolean;
  features: string[];
}

const Registration = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnnual, setIsAnnual] = useState(false);
  
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    companyName: '',
    vatNumber: '',
    taxCode: '',
    sdiCode: '',
    pecEmail: ''
  });

  const [addressInfo, setAddressInfo] = useState<AddressInfo>({
    streetAddress: '',
    postalCode: '',
    city: '',
    province: '',
    country: 'Italy'
  });

  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const italianProvinces = [
    'Agrigento', 'Alessandria', 'Ancona', 'Aosta', 'Arezzo', 'Ascoli Piceno', 'Asti', 
    'Avellino', 'Bari', 'Barletta-Andria-Trani', 'Belluno', 'Benevento', 'Bergamo', 
    'Biella', 'Bologna', 'Bolzano', 'Brescia', 'Brindisi', 'Cagliari', 'Caltanissetta',
    'Campobasso', 'Carbonia-Iglesias', 'Caserta', 'Catania', 'Catanzaro', 'Chieti',
    'Como', 'Cosenza', 'Cremona', 'Crotone', 'Cuneo', 'Enna', 'Fermo', 'Ferrara',
    'Firenze', 'Foggia', 'Forlì-Cesena', 'Frosinone', 'Genova', 'Gorizia', 'Grosseto',
    'Imperia', 'Isernia', 'La Spezia', 'L\'Aquila', 'Latina', 'Lecce', 'Lecco',
    'Livorno', 'Lodi', 'Lucca', 'Macerata', 'Mantova', 'Massa-Carrara', 'Matera',
    'Messina', 'Milano', 'Modena', 'Monza e della Brianza', 'Napoli', 'Novara',
    'Nuoro', 'Olbia-Tempio', 'Oristano', 'Padova', 'Palermo', 'Parma', 'Pavia',
    'Perugia', 'Pesaro e Urbino', 'Pescara', 'Piacenza', 'Pisa', 'Pistoia', 'Pordenone',
    'Potenza', 'Prato', 'Ragusa', 'Ravenna', 'Reggio Calabria', 'Reggio Emilia',
    'Rieti', 'Rimini', 'Roma', 'Rovigo', 'Salerno', 'Medio Campidano', 'Sassari',
    'Savona', 'Siena', 'Siracusa', 'Sondrio', 'Taranto', 'Teramo', 'Terni', 'Torino',
    'Ogliastra', 'Trapani', 'Trento', 'Treviso', 'Trieste', 'Udine', 'Varese',
    'Venezia', 'Verbano-Cusio-Ossola', 'Vercelli', 'Verona', 'Vibo Valentia',
    'Vicenza', 'Viterbo'
  ];

  const plans = [
    {
      name: "Starter",
      originalPrice: "€147",
      monthlyPrice: "€97",
      annualMonthlyPrice: "€80",
      period: isAnnual ? "+ VAT / month" : "/month + VAT",
      setupFee: "€500",
      yearlyDiscount: "Save 17%",
      features: [
        "Smart appointment calendar",
        "Automated follow-ups",
        "Review request system",
        "All-in-one app",
        "Email support",
        "1 basic landing page included",
        "Hosting, maintenance & updates included"
      ]
    },
    {
      name: "Pro",
      originalPrice: "€297",
      monthlyPrice: "€197",
      annualMonthlyPrice: "€164",
      period: isAnnual ? "+ VAT / month" : "/month + VAT",
      setupFee: "€1,000",
      yearlyDiscount: "Save 17%",
      badge: "Best Value",
      popular: true,
      features: [
        "Everything in Starter",
        "Full omnichannel messaging",
        "Accept payments before appointments",
        "Advanced analytics and reporting",
        "7/7 premium support",
        "Up to 3 landing pages included",
        "Hosting, maintenance & updates included"
      ]
    }
  ];

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Company Details', icon: Building },
    { number: 3, title: 'Address', icon: MapPin },
    { number: 4, title: 'Plan Selection', icon: CreditCard }
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!personalInfo.firstName) newErrors.firstName = 'First name is required';
        if (!personalInfo.lastName) newErrors.lastName = 'Last name is required';
        if (!personalInfo.email) newErrors.email = 'Email is required';
        if (!personalInfo.phone) newErrors.phone = 'Phone number is required';
        break;
      case 2:
        if (!companyInfo.companyName) newErrors.companyName = 'Company name is required';
        if (!companyInfo.vatNumber) newErrors.vatNumber = 'VAT number is required';
        if (companyInfo.vatNumber && !/^\d{11}$/.test(companyInfo.vatNumber)) {
          newErrors.vatNumber = 'VAT number must be 11 digits';
        }
        if (!companyInfo.sdiCode && !companyInfo.pecEmail) {
          newErrors.general = 'Either SDI Code or PEC Email is required';
        }
        break;
      case 3:
        if (!addressInfo.streetAddress) newErrors.streetAddress = 'Street address is required';
        if (!addressInfo.postalCode) newErrors.postalCode = 'Postal code is required';
        if (!addressInfo.city) newErrors.city = 'City is required';
        if (!addressInfo.province) newErrors.province = 'Province is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan({
      name: plan.name,
      monthlyPrice: plan.monthlyPrice,
      annualMonthlyPrice: plan.annualMonthlyPrice,
      setupFee: plan.setupFee,
      isAnnual,
      features: plan.features
    });
  };

  const handleProceedToPayment = () => {
    // Here you would typically call a Supabase function or API
    // For now, navigate to a success page
    navigate('/thank-you');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={personalInfo.firstName}
                  onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={personalInfo.lastName}
                  onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Personal Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={personalInfo.email}
                onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={personalInfo.phone}
                onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
          </div>
        );

      case 2:
        return (
          <TooltipProvider>
            <div className="space-y-6">
              {errors.general && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                  {errors.general}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Legal Business Name (Ragione Sociale) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={companyInfo.companyName}
                  onChange={(e) => setCompanyInfo({...companyInfo, companyName: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                />
                {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    VAT Number (Partita IVA) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={companyInfo.vatNumber}
                    onChange={(e) => setCompanyInfo({...companyInfo, vatNumber: e.target.value})}
                    maxLength={11}
                    placeholder="11 digits"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                  />
                  {errors.vatNumber && <p className="mt-1 text-sm text-red-600">{errors.vatNumber}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tax Code (Codice Fiscale)
                  </label>
                  <input
                    type="text"
                    value={companyInfo.taxCode}
                    onChange={(e) => setCompanyInfo({...companyInfo, taxCode: e.target.value})}
                    placeholder="Optional"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    SDI Code <span className="text-red-500">*</span>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 ml-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Either SDI Code or PEC email is required for electronic invoicing</p>
                      </TooltipContent>
                    </Tooltip>
                  </label>
                  <input
                    type="text"
                    value={companyInfo.sdiCode}
                    onChange={(e) => setCompanyInfo({...companyInfo, sdiCode: e.target.value})}
                    maxLength={7}
                    placeholder="7-character code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    PEC Email <span className="text-red-500">*</span>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 ml-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Either SDI Code or PEC email is required for electronic invoicing</p>
                      </TooltipContent>
                    </Tooltip>
                  </label>
                  <input
                    type="email"
                    value={companyInfo.pecEmail}
                    onChange={(e) => setCompanyInfo({...companyInfo, pecEmail: e.target.value})}
                    placeholder="pec@example.pec.it"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </TooltipProvider>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={addressInfo.streetAddress}
                onChange={(e) => setAddressInfo({...addressInfo, streetAddress: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
              />
              {errors.streetAddress && <p className="mt-1 text-sm text-red-600">{errors.streetAddress}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code (CAP) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={addressInfo.postalCode}
                  onChange={(e) => setAddressInfo({...addressInfo, postalCode: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                />
                {errors.postalCode && <p className="mt-1 text-sm text-red-600">{errors.postalCode}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={addressInfo.city}
                  onChange={(e) => setAddressInfo({...addressInfo, city: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Province <span className="text-red-500">*</span>
                </label>
                <select
                  value={addressInfo.province}
                  onChange={(e) => setAddressInfo({...addressInfo, province: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                >
                  <option value="">Select Province</option>
                  {italianProvinces.map((province) => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
                {errors.province && <p className="mt-1 text-sm text-red-600">{errors.province}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={addressInfo.country}
                  onChange={(e) => setAddressInfo({...addressInfo, country: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm ${!isAnnual ? 'text-black font-medium' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#078147] focus:ring-offset-2 ${
                  isAnnual ? 'bg-[#078147]' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-black font-medium' : 'text-gray-500'}`}>
                Annual
              </span>
            </div>
            <p className="text-center text-sm text-gray-500 mb-8">💡 Save 17% with annual billing</p>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative rounded-2xl p-6 lg:p-8 cursor-pointer transition-all ${
                    plan.popular ? 'bg-[#078147] text-white shadow-2xl transform scale-105' : 'bg-white border-2 border-gray-200 text-black hover:border-[#078147]'
                  } ${selectedPlan?.name === plan.name ? 'ring-4 ring-[#078147] ring-opacity-50' : ''}`}
                  onClick={() => handlePlanSelect(plan)}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  
                  {isAnnual && (
                    <div className="absolute -top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {plan.yearlyDiscount}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-3">
                      <div className="flex items-center justify-center space-x-2 mb-1">
                        {!isAnnual && (
                          <span className={`text-lg line-through ${plan.popular ? 'text-gray-300' : 'text-gray-400'}`}>
                            {plan.originalPrice}
                          </span>
                        )}
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                          PROMO
                        </span>
                      </div>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold">
                          {isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice}
                        </span>
                        <span className={`ml-1 text-base ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>{plan.period}</span>
                      </div>
                    </div>
                    <div className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-500'}`}>
                      Setup fee: {plan.setupFee} (one-time)
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-[#078147]'}`} />
                        <span className={`text-base leading-relaxed ${plan.popular ? 'text-white' : 'text-gray-600'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <input
                      type="radio"
                      checked={selectedPlan?.name === plan.name}
                      onChange={() => handlePlanSelect(plan)}
                      className="w-5 h-5"
                    />
                    <span className="ml-2 font-medium">Select this plan</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Plan Summary */}
            {selectedPlan && (
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">You've selected:</h4>
                <p className="text-green-700">
                  <strong>{selectedPlan.name}</strong> - {selectedPlan.isAnnual ? selectedPlan.annualMonthlyPrice : selectedPlan.monthlyPrice} 
                  {selectedPlan.isAnnual ? ' + VAT / month (billed annually)' : '/month + VAT'}
                </p>
                <p className="text-sm text-green-600 mt-1">Setup fee: {selectedPlan.setupFee} (one-time)</p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-8">
          {/* Desktop version */}
          <div className="hidden md:block">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;
                
                return (
                  <div key={step.number} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      isCompleted ? 'bg-[#078147] border-[#078147] text-white' :
                      isActive ? 'border-[#078147] text-[#078147]' : 'border-gray-300 text-gray-300'
                    }`}>
                      {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`h-1 w-20 mx-4 ${isCompleted ? 'bg-[#078147]' : 'bg-gray-300'}`} />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between">
              {steps.map((step) => (
                <span key={step.number} className={`text-sm font-medium ${
                  currentStep === step.number ? 'text-[#078147]' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile version */}
          <div className="md:hidden">
            <div className="text-center mb-4">
              <span className="text-sm text-gray-600">
                Step {currentStep} of {steps.length}
              </span>
            </div>
            <div className="flex items-center justify-center mb-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;
                
                if (isActive) {
                  return (
                    <div key={step.number} className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#078147] text-[#078147] bg-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="mt-2 text-sm font-medium text-[#078147] text-center max-w-[80px]">
                        {step.title}
                      </span>
                    </div>
                  );
                } else {
                  return (
                    <div key={step.number} className={`w-2 h-2 rounded-full mx-1 ${
                      isCompleted ? 'bg-[#078147]' : 'bg-gray-300'
                    }`} />
                  );
                }
              })}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-[#078147] h-1 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Step Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {currentStep === 1 && 'Your Personal Information'}
              {currentStep === 2 && 'Business Details for Invoicing'}
              {currentStep === 3 && 'Registered Office Address'}
              {currentStep === 4 && 'Choose Your NovaFarm Plan'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>

          {currentStep < 4 ? (
            <Button
              onClick={handleNext}
              className="flex items-center space-x-2 bg-[#078147] hover:bg-[#066139]"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleProceedToPayment}
              disabled={!selectedPlan}
              className="flex items-center space-x-2 bg-[#078147] hover:bg-[#066139]"
            >
              <span>Proceed to Payment</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;