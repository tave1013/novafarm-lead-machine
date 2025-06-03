
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    // If not on homepage, navigate to homepage first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleBookDemo = () => {
    navigate('/book-demo');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/')}
              className="text-2xl font-bold text-black hover:text-[#078147] transition-colors"
            >
              NovaFarm
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-black hover:text-[#078147] transition-colors">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('features')} className="text-black hover:text-[#078147] transition-colors">
              {t('nav.features')}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-black hover:text-[#078147] transition-colors">
              {t('nav.pricing')}
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-black hover:text-[#078147] transition-colors">
              {t('nav.testimonials')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-black hover:text-[#078147] transition-colors">
              {t('nav.contact')}
            </button>
          </nav>
          
          {/* Desktop CTA Button and Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <button 
              onClick={handleBookDemo}
              className="bg-[#078147] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#066139] transition-colors animate-pulse-slow"
            >
              {t('nav.bookDemo')}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-black hover:text-[#078147] transition-colors text-left">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('features')} className="text-black hover:text-[#078147] transition-colors text-left">
                {t('nav.features')}
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-black hover:text-[#078147] transition-colors text-left">
                {t('nav.pricing')}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-black hover:text-[#078147] transition-colors text-left">
                {t('nav.testimonials')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-black hover:text-[#078147] transition-colors text-left">
                {t('nav.contact')}
              </button>
              <button 
                onClick={handleBookDemo}
                className="bg-[#078147] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#066139] transition-colors text-left animate-pulse-slow"
              >
                {t('nav.bookDemo')}
              </button>
              <LanguageSelector isMobile={true} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
