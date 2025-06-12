
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in">
              We provide
              <span className="block underline decoration-4 decoration-blue-300">solutions</span>
              for your business!
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We specialize in cybersecurity, penetration testing, and digital security solutions that protect your business from evolving threats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={() => scrollToSection('about')}
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-400 hover:scale-105 font-semibold px-8 py-3 shadow-lg transition-all duration-300 transform hover:shadow-xl rounded-full"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 font-semibold px-8 py-3 shadow-lg transition-all duration-300 transform hover:shadow-xl rounded-full bg-transparent"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right side - Tech/Business Illustration */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
              alt="Professional working on laptop - cybersecurity solutions" 
              className="max-w-full h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
