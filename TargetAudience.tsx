import React from 'react';
import { User, Users, Building } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audienceTypes = [
    {
      icon: <User className="w-10 h-10 text-dark" />,
      title: "Coach indépendant",
      description: "Vous êtes coach sportif ? Faites passer votre activité au niveau supérieur avec une App tout-en-un qui vous fait gagner du temps et des clients."
    },
    {
      icon: <Users className="w-10 h-10 text-dark" />,
      title: "Petite équipe",
      description: "Vous gérez une petite équipe de coachs et vous avez besoin d'un outil centralisé pour coordonner vos activités et offrir une expérience client cohérente."
    },
    {
      icon: <Building className="w-10 h-10 text-dark" />,
      title: "Structure corporative",
      description: "Vous dirigez une structure plus importante et recherchez une solution personnalisable et évolutive pour l'ensemble de vos équipes."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            AZEOO est fait pour vous 
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Notre plateforme s'adapte à votre activité, quelle que soit sa taille.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audienceTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-6 flex justify-center">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0B2545] mb-3 text-center">
                {type.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {type.description}
              </p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;