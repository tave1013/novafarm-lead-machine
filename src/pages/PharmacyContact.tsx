import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Pill, Calendar, Package, Clock, MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PharmacyContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacyAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.message || !formData.privacyAccepted) {
      toast({
        title: "Campi obbligatori mancanti",
        description: "Compila tutti i campi richiesti e accetta la privacy policy.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Messaggio inviato!",
      description: "Grazie per averci contattato! Ti risponderemo il prima possibile.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacyAccepted: false
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: MapPin, label: "Indirizzo", value: "Via Roma 123, Milano, MI 20121" },
    { icon: Phone, label: "Telefono", value: "+39 123 456 7890" },
    { icon: Mail, label: "Email", value: "farmacia@example.com" }
  ];

  const helpTopics = [
    { icon: Pill, text: "Chiedi informazioni su un prodotto o medicinale" },
    { icon: Calendar, text: "Richiedi informazioni su un servizio" },
    { icon: Package, text: "Verifica disponibilità di articoli" },
    { icon: Clock, text: "Consulta gli orari di apertura" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header Spacer */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column - Contact Form */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Invia un messaggio</h2>
                <p className="text-muted-foreground">Compila il modulo e ti contatteremo al più presto</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nome completo *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Il tuo nome e cognome"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="la-tua-email@esempio.com"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefono</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+39 123 456 7890"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Oggetto</Label>
                  <Select onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Seleziona l'oggetto della richiesta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Richiesta generale</SelectItem>
                      <SelectItem value="product">Informazioni prodotto</SelectItem>
                      <SelectItem value="booking">Informazioni prenotazione</SelectItem>
                      <SelectItem value="other">Altro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Messaggio *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Descrivi la tua richiesta in dettaglio..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyAccepted}
                    onCheckedChange={(checked) => handleInputChange("privacyAccepted", checked as boolean)}
                  />
                  <Label htmlFor="privacy" className="text-sm">
                    Accetto la{" "}
                    <a href="#" className="text-primary hover:underline">
                      privacy policy
                    </a>{" "}
                    *
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-medium"
                >
                  {isSubmitting ? "Invio in corso..." : "Invia messaggio"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Column - Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Come possiamo aiutarti?
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Scrivici per qualsiasi domanda, disponibilità di prodotti o richieste relative ai nostri servizi. 
                Ti ricontatteremo al più presto.
              </p>
            </div>

            {/* Help Topics */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Cosa possiamo fare per te:</h3>
              <div className="space-y-3">
                {helpTopics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-border/20">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <topic.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{topic.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Informazioni di contatto</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                        <info.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyContact;