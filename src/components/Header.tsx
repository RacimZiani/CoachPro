import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-orange-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            COACH<span className="text-orange-500">PRO</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-white hover:text-orange-500 transition-colors font-medium">
              Accueil
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-500 transition-colors font-medium">
              À propos
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-orange-500 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-orange-500 transition-colors font-medium">
              Témoignages
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-orange-500 transition-colors font-medium">
              Galerie
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-orange-500 transition-colors font-medium">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all hover:scale-105"
            >
              Réserve ta séance
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('accueil')} className="block text-white hover:text-orange-500 transition-colors font-medium">
              Accueil
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-white hover:text-orange-500 transition-colors font-medium">
              À propos
            </button>
            <button onClick={() => scrollToSection('services')} className="block text-white hover:text-orange-500 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block text-white hover:text-orange-500 transition-colors font-medium">
              Témoignages
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block text-white hover:text-orange-500 transition-colors font-medium">
              Galerie
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-orange-500 transition-colors font-medium">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all"
            >
              Réserve ta séance
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
