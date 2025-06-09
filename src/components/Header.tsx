
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const navigate = useNavigate();

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    // TODO: Implement actual language switching logic when content is available
    console.log(`Language switched to: ${languageCode}`);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const scrollToSection = (sectionId: string) => {
    // If not on homepage, navigate to homepage first
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleFeaturesClick = () => {
    navigate('/features');
    setIsMenuOpen(false);
  };

  const handleBookDemo = () => {
    navigate('/book-demo');
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/')}
              className="text-xl sm:text-2xl font-bold text-black hover:text-[#078147] transition-colors"
            >
              NovaFarm
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-sm xl:text-base text-black hover:text-[#078147] transition-colors font-medium">
              Home
            </button>
            <button onClick={handleFeaturesClick} className="text-sm xl:text-base text-black hover:text-[#078147] transition-colors font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm xl:text-base text-black hover:text-[#078147] transition-colors font-medium">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm xl:text-base text-black hover:text-[#078147] transition-colors font-medium">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm xl:text-base text-black hover:text-[#078147] transition-colors font-medium">
              Contact
            </button>
          </nav>
          
          {/* Desktop Right Section with Language Switcher and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#078147] hover:bg-gray-50 rounded-md transition-colors">
                  <span className="text-base">{currentLang.flag}</span>
                  <span className="hidden xl:block">{currentLang.label}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40 bg-white border border-gray-200 shadow-lg">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex items-center space-x-3 px-3 py-2 cursor-pointer hover:bg-gray-50 ${
                      currentLanguage === lang.code ? 'bg-[#078147]/10 text-[#078147]' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <button 
              onClick={handleBookDemo}
              className="bg-[#078147] text-white px-4 xl:px-6 py-2 rounded-lg text-sm xl:text-base font-semibold hover:bg-[#066139] transition-colors animate-pulse-slow"
            >
              Book a Call
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-base text-black hover:text-[#078147] transition-colors text-left py-2 px-2 hover:bg-gray-50 rounded-md font-medium">
                Home
              </button>
              <button onClick={handleFeaturesClick} className="text-base text-black hover:text-[#078147] transition-colors text-left py-2 px-2 hover:bg-gray-50 rounded-md font-medium">
                Features
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-base text-black hover:text-[#078147] transition-colors text-left py-2 px-2 hover:bg-gray-50 rounded-md font-medium">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-base text-black hover:text-[#078147] transition-colors text-left py-2 px-2 hover:bg-gray-50 rounded-md font-medium">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-base text-black hover:text-[#078147] transition-colors text-left py-2 px-2 hover:bg-gray-50 rounded-md font-medium">
                Contact
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="pt-2 border-t border-gray-200">
                <div className="px-2 py-2">
                  <div className="text-sm font-medium text-gray-600 mb-2">Language</div>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-left transition-colors ${
                          currentLanguage === lang.code 
                            ? 'bg-[#078147] text-white' 
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-2">
                <button 
                  onClick={handleBookDemo}
                  className="w-full bg-[#078147] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#066139] transition-colors text-center animate-pulse-slow"
                >
                  Book a Call
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
