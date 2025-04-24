import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Essential",
      subtitle: "sans engagement",
      description: "L'offre initiale pour débuter sur AZEOO.",
      price: "71€",
      period: "/mois HT",
      features: [
        "Limité à 50 clients",
        "Coaching",
        "Nutrition",
        "Marketing"
      ],
      cta: {
        text: "Commencer",
        href: "https://app.azeoo.com/register"
      }
    },
    {
      name: "Professional",
      subtitle: "sans engagement",
      description: "Toute l'offre Essential boostée pour un accompagnement optimale.",
      price: "143€",
      period: "/mois HT",
      features: [
        "Clients illimités",
        "Questionnaires",
        "Réservation",
        "Connecteurs"
      ],
      cta: {
        text: "Commencer",
        href: "https://app.azeoo.com/register"
      },
     
    },
    {
      name: "Customized",
      subtitle: "engagement 24 mois",
      description: "Votre propre Application contenant toute l'offre Professional.",
      price: "299€",
      period: "/mois HT",
      features: [
        "Votre propre App",
        "Personnalisation complète",
        "Google Play & Apple Store",
        "Vos propres fonctionnalités"
      ],
      cta: {
        text: "Modéliser mon app",
        href: "https://form.typeform.com/to/r98s9MP7?typeform-source=azeoo.com"
      }
    }
  ];

  return (
    <section id="tarifs" className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Choisissez l'offre adaptée à vos besoins
          </h2>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Tous nos plans incluent un essai gratuit de 14 jours, sans carte bancaire.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white p-8 rounded-xl ${
                plan.highlight 
                  ? 'bg-primary text-white shadow-xl scale-105 my-4' 
                  : 'border border-gray-100 shadow-sm'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-1 rounded-full text-sm font-medium">
                  Recommandé
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-1">
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? 'text-white/80' : 'opacity-80'}`}>
                  {plan.subtitle}
                </p>
              </div>

              <p className={`text-lg mb-6 ${plan.highlight ? 'text-white' : ''}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`ml-1 ${plan.highlight ? 'text-white/90' : ''}`}>{plan.period}</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className={`font-semibold mb-4 ${plan.highlight ? 'text-white' : ''}`}>
                  Ce qui est inclus
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className={`w-5 h-5 mr-2 ${
                        plan.highlight ? 'text-white' : 'text-primary'
                      }`} />
                      <span className={plan.highlight ? 'text-white' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={plan.cta.href}
                className={`block w-full py-3 px-6 rounded-lg text-center font-medium transition-colors ${
                  plan.highlight
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                {plan.cta.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;