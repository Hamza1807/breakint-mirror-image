
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'why-us', 'portfolio', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            syrpak
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className={`transition-colors ${
                isActive('home') 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`transition-colors ${
                isActive('about') 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              About
            </a>
            <a 
              href="#services" 
              className={`transition-colors ${
                isActive('services') 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Services
            </a>
            <a 
              href="#why-us" 
              className={`transition-colors ${
                isActive('why-us') 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Why Us
            </a>
            <a 
              href="#portfolio" 
              className={`transition-colors ${
                isActive('portfolio') 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Portfolio
            </a>
            <a 
              href="#team" 
              className={`transition-colors ${
                isActive('team') 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Team
            </a>
            <a 
              href="#contact" 
              className={`transition-colors ${
                isActive('contact') 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
            </a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className={`transition-colors ${
                  isActive('home') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`transition-colors ${
                  isActive('about') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                About
              </a>
              <a 
                href="#services" 
                className={`transition-colors ${
                  isActive('services') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Services
              </a>
              <a 
                href="#why-us" 
                className={`transition-colors ${
                  isActive('why-us') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Why Us
              </a>
              <a 
                href="#portfolio" 
                className={`transition-colors ${
                  isActive('portfolio') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Portfolio
              </a>
              <a 
                href="#team" 
                className={`transition-colors ${
                  isActive('team') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Team
              </a>
              <a 
                href="#contact" 
                className={`transition-colors ${
                  isActive('contact') 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
