import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              L'App de Fitness <span className="highlight">tout-en-un</span> pour coach sportif
            </h1>
            <p className="text-lg md:text-xl text-dark/80 mb-8">
              Gagnez du temps, fidélisez vos clients et développez votre activité grâce à notre App spécialement conçue pour les coachs sportifs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://app.azeoo.com/register" 
                className="px-8 py-4 rounded-lg bg-primary text-white font-medium text-center hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                Démarrer mon essai gratuit
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="https://meetings.hubspot.com/azeoo/presentation" 
                className="px-8 py-4 rounded-lg bg-white text-dark border border-dark font-medium text-center hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Réserver un appel stratégique
              </a>
            </div>
            <p className="text-sm text-dark/60 mt-4">
              14 jours d'essai gratuit, sans carte bancaire.
            </p>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="bg-primary/5 rounded-xl p-3">
                <img 
                  src="https://cdn.prod.website-files.com/6475be3593db6c7cd7ab7ab1/680a08a053e4a81f8ce71c96_mockup%20azeoo%20ads%201%20(2).png" 
                  alt="Coach sportif utilisant AZEOO" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;