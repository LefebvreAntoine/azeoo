import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Combien de temps dure l'essai gratuit ?",
      answer: "L'essai gratuit dure 14 jours et vous donne accès à toutes les fonctionnalités de la plateforme. Aucune carte bancaire n'est requise pour commencer votre essai."
    },
    {
      question: "Puis-je personnaliser l'application mobile aux couleurs de ma marque ?",
      answer: "Oui, avec l’offre Customized, vous avez votre propre app aux couleurs, logo et nom de votre marque, disponible sur l’App Store et Google Play. Vous pouvez aussi ajouter des fonctionnalités sur-mesure selon vos besoins."
    },
    {
      question: "Comment une App de coaching peut-il booster mes revenus ?",
      answer: "En intégrant une fonctionnalité de coaching à votre offre, vous pouvez créer des programmes premium ou des abonnements qui génèrent des revenus récurrents. Les sessions en direct, par exemple, peuvent être proposées comme des cours exclusifs payants. De plus, l'optimisation de l'engagement client grâce aux fonctionnalités du logiciel peut conduire à des taux de fidélisation plus élevés, ce qui se traduit par des revenus stables et une croissance à long terme. "
    },
     {
      question: "Qu’est-ce qu’AZEOO offre par rapport aux autres applications ?",
      answer: "AZEOO est une application tout-en-un complet : réservation, coaching sportif et nutritionnel, monétisation de services, outils d’engagement et de fidélisation client. Découvrez pourquoi AZEOO est la meilleure solution pour vous."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tout ce que vous devez savoir pour commencer avec AZEOO.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border-b border-gray-200 pb-4 last:border-0"
            >
              <button 
                className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-[#0B2545]">
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#45B7B8]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#45B7B8]" />
                )}
              </button>
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="py-2 text-gray-700">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Faq;