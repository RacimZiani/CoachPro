import { Image as ImageIcon } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    alt: 'Entraînement en salle',
    label: 'Musculation'
  },
  {
    url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    alt: 'Cours collectif',
    label: 'Cardio training'
  },
  {
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    alt: 'Coaching personnalisé',
    label: 'Coaching 1-to-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
    alt: 'Nutrition sportive',
    label: 'Nutrition'
  },
  {
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
    alt: 'Training en extérieur',
    label: 'Outdoor training'
  },
  {
    url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    alt: 'Stretching et récupération',
    label: 'Récupération'
  }
];

const transformations = [
  {
    before: 'https://images.unsplash.com/photo-1583454155184-870a1f63aecc?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1583454155184-870a1f63aecc?w=400&q=80',
    duration: '3 mois',
    type: 'Perte de poids'
  },
  {
    before: 'https://images.unsplash.com/photo-1583454155184-870a1f63aecc?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1583454155184-870a1f63aecc?w=400&q=80',
    duration: '6 mois',
    type: 'Prise de masse'
  },
  {
    before: 'https://images.unsplash.com/photo-1583454155184-870a1f63aecc?w=400&q=80',
    after: 'https://images.unsplash.com/photo-1583454155184-870a1f63aecc?w=400&q=80',
    duration: '4 mois',
    type: 'Tonification'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            <span className="text-orange-500">Galerie</span> & résultats
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Un aperçu de nos séances et des transformations de nos clients
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Nos séances</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-sm">{image.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Transformations <span className="text-orange-500">avant/après</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {transformations.map((transformation, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2 text-center">AVANT</p>
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                      <ImageIcon className="text-gray-400 w-12 h-12" />
                      <p className="absolute bottom-2 left-0 right-0 text-center text-xs text-white bg-black/50 py-1">Confidential</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2 text-center">APRÈS</p>
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                      <ImageIcon className="text-gray-400 w-12 h-12" />
                      <p className="absolute bottom-2 left-0 right-0 text-center text-xs text-white bg-black/50 py-1">Confidential</p>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-100 rounded-lg p-3 text-center">
                  <p className="font-bold text-orange-500">{transformation.duration}</p>
                  <p className="text-sm text-gray-700">{transformation.type}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            Photos avant/après confidentielles - Respect de la vie privée de nos clients
          </p>
        </div>
      </div>
    </section>
  );
}
