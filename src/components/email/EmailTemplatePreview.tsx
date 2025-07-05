
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Eye, Copy, Download, Edit3 } from 'lucide-react';
import NovaFarmEmailTemplate from './NovaFarmEmailTemplate';

const EmailTemplatePreview = () => {
  const [formData, setFormData] = useState({
    recipientName: 'Mario Rossi',
    subject: 'Benvenuto in NovaFarm - La tua farmacia digitale',
    mainContent: `<p>Siamo entusiasti di averti come nuovo cliente di NovaFarm!</p>
    
    <p>Con NovaFarm, la gestione della tua farmacia diventa più semplice ed efficiente. Potrai:</p>
    
    <ul>
      <li>Gestire l'inventario in tempo reale</li>
      <li>Automatizzare gli ordini ai fornitori</li>
      <li>Migliorare l'esperienza dei tuoi clienti</li>
      <li>Accedere a report dettagliati e analytics</li>
    </ul>
    
    <p>Il nostro team di esperti è pronto ad aiutarti nel processo di configurazione iniziale.</p>`,
    ctaText: 'Inizia Ora',
    ctaLink: 'https://novafarm.com/dashboard',
    footerContent: 'Questa email è stata inviata perché hai richiesto informazioni sui nostri servizi.'
  });

  const [activeTab, setActiveTab] = useState<'preview' | 'edit'>('preview');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const copyToClipboard = () => {
    // In una implementazione reale, questo genererebbe l'HTML dell'email
    navigator.clipboard.writeText('HTML email template copied!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-[#078147]" />
            <h1 className="text-3xl font-bold text-gray-900">
              NovaFarm Email Template
            </h1>
          </div>
          <p className="text-gray-600">
            Preview e personalizza il template email professionale di NovaFarm
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Personalizza Template
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={activeTab === 'edit' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('edit')}
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      Modifica
                    </Button>
                    <Button
                      size="sm"
                      variant={activeTab === 'preview' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('preview')}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Destinatario</label>
                  <Input
                    value={formData.recipientName}
                    onChange={(e) => handleInputChange('recipientName', e.target.value)}
                    placeholder="Nome del destinatario"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Oggetto Email</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="Oggetto dell'email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Contenuto Principale</label>
                  <Textarea
                    value={formData.mainContent}
                    onChange={(e) => handleInputChange('mainContent', e.target.value)}
                    placeholder="Contenuto principale dell'email (HTML supportato)"
                    className="min-h-[200px] font-mono text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Testo CTA</label>
                    <Input
                      value={formData.ctaText}
                      onChange={(e) => handleInputChange('ctaText', e.target.value)}
                      placeholder="Testo del pulsante"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Link CTA</label>
                    <Input
                      value={formData.ctaLink}
                      onChange={(e) => handleInputChange('ctaLink', e.target.value)}
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Footer Personalizzato</label>
                  <Textarea
                    value={formData.footerContent}
                    onChange={(e) => handleInputChange('footerContent', e.target.value)}
                    placeholder="Contenuto footer aggiuntivo"
                    className="min-h-[80px]"
                  />
                </div>

                <div className="flex gap-2 pt-4">
                  <Button onClick={copyToClipboard} variant="outline" className="flex-1">
                    <Copy className="w-4 h-4 mr-2" />
                    Copia HTML
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Scarica
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Preview Email</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden bg-white">
                  <NovaFarmEmailTemplate
                    recipientName={formData.recipientName}
                    subject={formData.subject}
                    mainContent={formData.mainContent}
                    ctaText={formData.ctaText}
                    ctaLink={formData.ctaLink}
                    footerContent={formData.footerContent}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplatePreview;
