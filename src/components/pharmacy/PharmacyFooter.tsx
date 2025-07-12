import React from 'react';
import { Heart, Clock, MapPin, Phone, Mail } from 'lucide-react';

const PharmacyFooter = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Book Appointment", href: "#booking" },
    { name: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pharmacy Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Farmacia Centrale</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Your trusted healthcare partner for over 30 years. Dedicated to providing exceptional 
              pharmaceutical care and wellness services to our community in Milano.
            </p>
            <div className="flex items-center space-x-2 text-background/80">
              <Heart className="w-5 h-5 text-primary" />
              <span>Your health is our priority</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/80 hover:text-primary transition-colors hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">Via Roma 123<br />20121 Milano, Italy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">+39 02 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">info@farmaciacentrale.it</span>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="py-6 border-t border-background/20">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <h4 className="text-lg font-semibold">Opening Hours</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-background/80">
            <div>
              <span className="font-medium text-background">Monday - Friday:</span>
              <br />8:30 AM - 7:30 PM
            </div>
            <div>
              <span className="font-medium text-background">Saturday:</span>
              <br />9:00 AM - 1:00 PM
            </div>
            <div>
              <span className="font-medium text-background">Sunday:</span>
              <br />Closed
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-background/80">
              © {currentYear} Farmacia Centrale. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-background/80 hover:text-primary transition-colors hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Powered by NovaFarm */}
            <div className="text-sm text-background/60">
              Powered by <span className="text-primary font-semibold">NovaFarm</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PharmacyFooter;