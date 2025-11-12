import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie L.',
    age: 32,
    result: 'Perte de 15kg en 6 mois',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    text: 'Alex a complètement transformé ma vie. Non seulement j\'ai perdu du poids, mais j\'ai surtout retrouvé confiance en moi. Son approche bienveillante et professionnelle fait toute la différence.',
    rating: 5
  },
  {
    name: 'Thomas B.',
    age: 28,
    result: 'Préparation marathon réussie',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    text: 'Grâce au programme de préparation physique, j\'ai battu mon record personnel au marathon. L\'expertise d\'Alex en préparation sportive est impressionnante. Je recommande à 100%.',
    rating: 5
  },
  {
    name: 'Sophie M.',
    age: 45,
    result: 'Remise en forme complète',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    text: 'Après des années d\'inactivité, je me sens plus en forme que jamais. Alex a su adapter chaque séance à mes capacités tout en me challengeant. Les résultats sont spectaculaires !',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ils ont <span className="text-orange-500">transformé leur vie</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            La réussite de mes clients est ma plus grande fierté
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-orange-500"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.age} ans</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-orange-500 fill-orange-500 w-5 h-5" />
                ))}
              </div>

              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3 mb-4">
                <p className="text-orange-500 font-bold text-sm">{testimonial.result}</p>
              </div>

              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-4">
            Rejoins les centaines de personnes qui ont atteint leurs objectifs
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105"
          >
            C'est ton tour maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
