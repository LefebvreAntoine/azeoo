import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark py-4 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} AZEOO. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://azeoo.com/mentions-legales" 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mentions légales
            </a>
            <a 
              href="https://azeoo.com/confidentialite" 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Politique de confidentialité
            </a>
            <a 
              href="https://azeoo.com/conditions-generales-utilisation-professionnel" 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;