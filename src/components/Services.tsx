import { Activity, Dumbbell, Heart, Video } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Coaching personnalisé',
    description: 'Programme d\'entraînement 100% sur-mesure avec suivi hebdomadaire en présentiel. Exercices adaptés à ton niveau, tes objectifs et tes contraintes.',
    features: ['Séances en 1-to-1', 'Programme évolutif', 'Suivi nutrition inclus']
  },
  {
    icon: Activity,
    title: 'Préparation physique',
    description: 'Optimise tes performances sportives avec un programme de préparation physique adapté à ta discipline. Prévention des blessures et amélioration technique.',
    features: ['Pour tous sports', 'Travail explosivité', 'Renforcement musculaire']
  },
  {
    icon: Heart,
    title: 'Remise en forme',
    description: 'Perte de poids durable, tonification et bien-être général. Approche globale combinant entraînement, nutrition et coaching mental pour des résultats qui durent.',
    features: ['Plan nutrition', 'Objectifs réalistes', 'Suivi motivation']
  },
  {
    icon: Video,
    title: 'Coaching en ligne',
    description: 'Programme personnalisé accessible partout. Vidéos d\'exercices, planification semaine par semaine et suivi à distance via application dédiée.',
    features: ['Flexible 24/7', 'Support WhatsApp', 'Moins cher']
  }
];

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Mes <span className="text-orange-500">services</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Des solutions adaptées à chaque objectif, chaque niveau, chaque mode de vie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Icon className="text-orange-500 w-8 h-8 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors"
                >
                  Réserver une séance
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Première séance découverte offerte !
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            Rencontrons-nous pour discuter de tes objectifs et définir ensemble le programme idéal
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105"
          >
            Réserve maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
