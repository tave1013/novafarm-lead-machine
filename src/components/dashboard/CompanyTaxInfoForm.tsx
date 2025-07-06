
import React, { useState } from 'react';
import { Save, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CompanyTaxInfoData {
  companyName: string;
  vatNumber: string;
  taxCode: string;
  sdiCode: string;
  pecEmail: string;
}

interface CompanyTaxInfoFormProps {
  data: CompanyTaxInfoData;
  onSave: (data: CompanyTaxInfoData) => void;
  isLoading: boolean;
}

export const CompanyTaxInfoForm: React.FC<CompanyTaxInfoFormProps> = ({
  data,
  onSave,
  isLoading
}) => {
  const [formData, setFormData] = useState(data);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateVAT = (vat: string) => {
    return /^\d{11}$/.test(vat);
  };

  const validatePEC = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateSDI = (sdi: string) => {
    return /^[A-Z0-9]{7}$/.test(sdi.toUpperCase());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Real-time validation
    const newErrors = { ...errors };
    
    if (name === 'vatNumber' && value && !validateVAT(value)) {
      newErrors.vatNumber = 'VAT number must be 11 digits';
    } else if (name === 'vatNumber') {
      delete newErrors.vatNumber;
    }

    if (name === 'pecEmail' && value && !validatePEC(value)) {
      newErrors.pecEmail = 'Please enter a valid email address';
    } else if (name === 'pecEmail') {
      delete newErrors.pecEmail;
    }

    if (name === 'sdiCode' && value && !validateSDI(value)) {
      newErrors.sdiCode = 'SDI code must be 7 alphanumeric characters';
    } else if (name === 'sdiCode') {
      delete newErrors.sdiCode;
    }

    setErrors(newErrors);
  };

  const handleSave = () => {
    // Validate required fields and at least one of SDI/PEC
    const newErrors: Record<string, string> = {};
    
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.vatNumber) newErrors.vatNumber = 'VAT number is required';
    if (formData.vatNumber && !validateVAT(formData.vatNumber)) {
      newErrors.vatNumber = 'VAT number must be 11 digits';
    }
    
    if (!formData.sdiCode && !formData.pecEmail) {
      newErrors.general = 'Either SDI Code or PEC Email is required for electronic invoicing';
    }

    if (formData.pecEmail && !validatePEC(formData.pecEmail)) {
      newErrors.pecEmail = 'Please enter a valid email address';
    }

    if (formData.sdiCode && !validateSDI(formData.sdiCode)) {
      newErrors.sdiCode = 'SDI code must be 7 alphanumeric characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSave({
      ...formData,
      sdiCode: formData.sdiCode.toUpperCase()
    });
  };

  return (
    <TooltipProvider>
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-bold text-black mb-6">Company Tax Information</h2>
        
        {errors.general && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
            {errors.general}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ragione Sociale / Nome Legale <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company Name / Legal Entity Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
            />
            {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Partita IVA <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="vatNumber"
                value={formData.vatNumber}
                onChange={handleInputChange}
                placeholder="11 digits"
                maxLength={11}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
              />
              {errors.vatNumber && <p className="mt-1 text-sm text-red-600">{errors.vatNumber}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Codice Fiscale (se diverso dalla P.IVA)
              </label>
              <input
                type="text"
                name="taxCode"
                value={formData.taxCode}
                onChange={handleInputChange}
                placeholder="Tax Code (optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                Codice SDI
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-4 h-4 ml-1 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">At least one of SDI Code or PEC email is required for electronic invoicing in Italy.</p>
                  </TooltipContent>
                </Tooltip>
              </label>
              <input
                type="text"
                name="sdiCode"
                value={formData.sdiCode}
                onChange={handleInputChange}
                placeholder="7-character code"
                maxLength={7}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
              />
              {errors.sdiCode && <p className="mt-1 text-sm text-red-600">{errors.sdiCode}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                Email PEC
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-4 h-4 ml-1 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">At least one of SDI Code or PEC email is required for electronic invoicing in Italy.</p>
                  </TooltipContent>
                </Tooltip>
              </label>
              <input
                type="email"
                name="pecEmail"
                value={formData.pecEmail}
                onChange={handleInputChange}
                placeholder="pec@example.pec.it"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#078147] focus:border-transparent"
              />
              {errors.pecEmail && <p className="mt-1 text-sm text-red-600">{errors.pecEmail}</p>}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="flex items-center space-x-2 bg-[#078147] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#066139] transition-colors disabled:opacity-50"
          >
            <Save className="w-5 h-5" />
            <span>{isLoading ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>
      </div>
    </TooltipProvider>
  );
};
