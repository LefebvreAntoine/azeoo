import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="h-8">
              <img 
                src="https://cdn.prod.website-files.com/6475be3593db6c7cd7ab7ab1/64d23f2c7e8199039410ecab_azeoo.png"
                alt="AZEOO"
                className="h-full w-auto"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benefices" className="text-dark hover:text-primary font-medium">
              Bénéfices
            </a>
            <a href="#fonctionnalites" className="text-dark hover:text-primary font-medium">
              Fonctionnalités
            </a>
            <a href="#tarifs" className="text-dark hover:text-primary font-medium">
              Tarifs
            </a>
            <a href="#faq" className="text-dark hover:text-primary font-medium">
              FAQ
            </a>
            <a 
              href="https://meetings.hubspot.com/azeoo/presentation" 
              className="ml-4 px-5 py-2 rounded-lg bg-white text-dark border border-dark hover:bg-gray-50 transition-colors"
            >
              Réserver un appel
            </a>
            <a 
              href="https://app.azeoo.com/register" 
              className="px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Essai gratuit
            </a>
          </nav>

          <button 
            className="md:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#benefices" 
              className="text-dark hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Bénéfices
            </a>
            <a 
              href="#fonctionnalites" 
              className="text-dark hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Fonctionnalités
            </a>
            <a 
              href="#tarifs" 
              className="text-dark hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </a>
            <a 
              href="#faq" 
              className="text-dark hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="https://meetings.hubspot.com/azeoo/presentation" 
              className="px-4 py-2 rounded-lg text-center bg-white text-dark border border-dark hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Réserver un appel
            </a>
            <a 
              href="https://app.azeoo.com/register" 
              className="px-4 py-2 rounded-lg text-center bg-primary text-white hover:bg-primary/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Essai gratuit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;