import { Award, Heart, Target, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              À propos de <span className="text-orange-500">ton coach</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                  alt="Coach sportif"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Ans d'expérience</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-black mb-6">
                Une passion devenue mission
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Je suis Alex Martin, coach sportif diplômé d'État passionné par la transformation physique et mentale. Mon parcours dans le sport de haut niveau m'a enseigné l'importance de la discipline, de la persévérance et de l'accompagnement personnalisé.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ma philosophie est simple : chaque personne est unique et mérite un programme adapté à ses objectifs, son niveau et son rythme de vie. Je ne vends pas de miracle, je crée des résultats durables basés sur la science, l'expérience et l'engagement mutuel.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Target className="text-orange-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Approche personnalisée</h4>
                    <p className="text-gray-600 text-sm">Programmes sur-mesure adaptés à tes objectifs spécifiques</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <TrendingUp className="text-orange-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Résultats mesurables</h4>
                    <p className="text-gray-600 text-sm">Suivi régulier et ajustements pour garantir ta progression</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Heart className="text-orange-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Motivation continue</h4>
                    <p className="text-gray-600 text-sm">Support et encouragement à chaque étape de ton parcours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Award className="text-orange-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">Expertise certifiée</h4>
                    <p className="text-gray-600 text-sm">Diplôme d'État et formations continues en nutrition et coaching</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
