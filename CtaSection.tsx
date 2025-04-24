import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-r from-primary to-primary/80">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre activité de coaching ?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines de coachs qui ont révolutionné leur façon de travailler et amélioré l'expérience de leurs clients grâce à AZEOO.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://app.azeoo.com/register" 
              className="px-8 py-4 rounded-lg bg-white text-primary font-medium text-center hover:bg-white/90 transition-colors flex items-center justify-center"
            >
              Démarrer l'essai gratuit
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a 
              href="https://meetings.hubspot.com/azeoo/presentation" 
              className="px-8 py-4 rounded-lg bg-transparent text-white border border-white font-medium text-center hover:bg-white/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver un appel stratégique
            </a>
          </div>
          <p className="text-sm text-white/80 mt-4">
            14 jours d'essai gratuit, sans carte bancaire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;