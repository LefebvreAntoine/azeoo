import React from 'react';
import { Clock, Users, Zap, BarChart } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
     {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Gérez tous vos clients",
      description: "Une App unique pour suivre tous vos clients, leurs programmes et leur progression."
    }, 
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Programmes personnalisables",
      description: "Créez des programmes 100% adaptés aux besoins spécifiques de chacun de vos clients."
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: "Suivez les résultats",
      description: "Analysez la progression et les performances de vos clients avec des outils avancés."
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Gagnez du temps",
      description: "Consacrez votre temps à vos clients et à leur accompagnement personnalisé."
    }
  ];

  return (
    <section id="benefices" className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Pourquoi choisir <span className="highlight">AZEOO </span>?
          </h2>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            AZEOO est l'App tout-en-un qui vous aide à gérer votre business de coaching sportif efficacement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-dark mb-3">{benefit.title}</h3>
              <p className="text-dark/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;