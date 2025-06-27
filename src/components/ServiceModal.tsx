
import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, title, content }) => {
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-w-[95vw] bg-white rounded-lg shadow-xl border-0 p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogTitle className="text-2xl font-bold text-black leading-tight pr-8">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="px-6 pb-6">
          <div className="space-y-4">
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {content}
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <p className="text-gray-700 mb-3">
                Want to know more or book your appointment?{' '}
                <button
                  onClick={handleContactClick}
                  className="text-[#27AE60] font-medium hover:underline transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#27AE60] focus:ring-offset-2 rounded"
                >
                  Contact us
                </button>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
