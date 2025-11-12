import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Prêt à <span className="text-orange-500">commencer</span> ?
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Contacte-moi dès maintenant pour discuter de tes objectifs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Informations de contact</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Téléphone</h4>
                  <p className="text-gray-600">+33 6 12 34 56 78</p>
                  <p className="text-sm text-gray-500">Lun - Sam : 7h - 20h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Mail className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Email</h4>
                  <p className="text-gray-600">contact@coachpro.fr</p>
                  <p className="text-sm text-gray-500">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Adresse</h4>
                  <p className="text-gray-600">123 Avenue du Sport</p>
                  <p className="text-gray-600">75001 Paris, France</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
              <h4 className="font-bold mb-3 text-xl">Première séance offerte !</h4>
              <p className="mb-4">
                Profite d'une séance découverte gratuite pour tester mon approche et définir tes objectifs.
              </p>
              <p className="text-sm opacity-90">
                Sans engagement • Durée : 45 minutes • Bilan complet
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-6">Envoie un message</h3>

              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  placeholder="jean.dupont@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
                  placeholder="Parle-moi de tes objectifs, ton niveau actuel, tes disponibilités..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  'Message envoyé !'
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {isSubmitted && (
                <p className="mt-4 text-green-600 text-center font-semibold">
                  Merci ! Je te réponds sous 24h.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
