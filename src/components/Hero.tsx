import { ArrowRight, Dumbbell } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Dumbbell className="text-orange-500 w-16 h-16 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Atteins ton
            <br />
            <span className="text-orange-500">meilleur niveau</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Transforme ton corps et ton mental avec un accompagnement personnalisé et des résultats garantis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105 flex items-center gap-2"
            >
              Réserve ta séance découverte
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all"
            >
              Découvrir
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:border-orange-500 transition-all">
            <div className="text-4xl font-bold text-orange-500 mb-2">5+</div>
            <div className="text-white font-semibold">Années d'expérience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:border-orange-500 transition-all">
            <div className="text-4xl font-bold text-orange-500 mb-2">200+</div>
            <div className="text-white font-semibold">Clients transformés</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:border-orange-500 transition-all">
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-white font-semibold">Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
