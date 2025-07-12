import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const PharmacyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Farmacia Centrale</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Book
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('booking')}
              className="bg-primary hover:bg-primary/90"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Book
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection('booking')}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default PharmacyHeader;