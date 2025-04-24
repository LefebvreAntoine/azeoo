import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Thomas Dubois",
      role: "Coach de fitness et nutrition",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "Depuis que j'ai commencé à utiliser AZEOO, j'ai augmenté ma clientèle de 30% tout en réduisant mon temps administratif. La plateforme est intuitive et mes clients adorent l'application personnalisée.",
      stars: 5
    },
    {
      name: "Sophie Moreau",
      role: "Coach sportive indépendante",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "AZEOO m'a permis de digitaliser complètement mon offre et de proposer un service premium à mes clients. Le suivi est simplifié et la fidélisation est au rendez-vous!",
      stars: 5
    },
    {
      name: "Jean-Philippe Martin",
      role: "Fondateur d'une salle de sport",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "Nous utilisons AZEOO pour l'ensemble de notre équipe de coachs. La simplicité d'utilisation et les fonctionnalités de suivi client sont exactement ce dont nous avions besoin.",
      stars: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Des coachs sportifs comme vous qui ont transformé leur activité grâce à AZEOO.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[#0B2545]">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Rejoignez plus de 500 coachs sportifs qui utilisent AZEOO quotidiennement
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;