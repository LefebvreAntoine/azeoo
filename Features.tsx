import React from 'react';
import { Smartphone, Calendar, ClipboardCheck, Activity, MessageSquare, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="fonctionnalites" className="py-16 md:py-24 bg-gray-50 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Une App <span className="highlight">complète</span> pour les coachs sportifs
          </h2>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            AZEOO vous offre tous les outils nécessaires pour gérer votre activité et accompagner vos clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:order-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://cdn.prod.website-files.com/6475be3593db6c7cd7ab7ab1/6809f54b054960b66598d0f4_mockup%20azeoo%20ads%201%20(1).png" 
                alt="AZEOO App" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="lg:order-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Application mobile</h3>
                  <p className="text-dark/80">Votre logo, vos couleurs, votre interface, votre identité.</p>
                </div>
              </div>

               <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                  <ClipboardCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Entraînement et nutrition</h3>
                  <p className="text-dark/80">Coachez vos clients avec des programmes de sur-mesure</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Planification facile</h3>
                  <p className="text-dark/80">Gérez vos rendez-vous bilans et suivez vos clients en toute simplicité.</p>
                </div>
              </div>
              
             
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Analyse de progression</h3>
                  <p className="text-dark/80">Suivez les performances et l'évolution de vos clients.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Messagerie intégrée</h3>
                  <p className="text-dark/80">Communiquez facilement avec vos clients.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Monétisation</h3>
                  <p className="text-dark/80">Vendez des abonnements mensuels, des programmes et des cours VOD.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;