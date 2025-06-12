
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
                className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 font-semibold px-8 py-3 shadow-lg transition-all duration-300 transform hover:shadow-xl rounded-full"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-white hover:bg-blue-600 hover:text-white hover:scale-105 font-semibold px-8 py-3 shadow-lg transition-all duration-300 transform hover:shadow-xl rounded-full"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right side - Animated SVG Illustration */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <svg
                width="500"
                height="400"
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full h-auto"
              >
                {/* Background Circle */}
                <circle
                  cx="250"
                  cy="200"
                  r="180"
                  fill="rgba(255,255,255,0.1)"
                  className="animate-pulse"
                />
                
                {/* Laptop Base */}
                <rect
                  x="150"
                  y="220"
                  width="200"
                  height="120"
                  rx="10"
                  fill="#1e293b"
                  className="drop-shadow-lg"
                />
                
                {/* Laptop Screen */}
                <rect
                  x="170"
                  y="150"
                  width="160"
                  height="100"
                  rx="5"
                  fill="#0f172a"
                  className="drop-shadow-lg"
                />
                
                {/* Screen Content - Code Lines */}
                <rect x="180" y="160" width="80" height="3" fill="#22c55e" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <rect x="180" y="170" width="120" height="3" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
                <rect x="180" y="180" width="60" height="3" fill="#f59e0b" className="animate-pulse" style={{ animationDelay: '1.1s' }} />
                <rect x="180" y="190" width="100" height="3" fill="#ef4444" className="animate-pulse" style={{ animationDelay: '1.4s' }} />
                <rect x="180" y="200" width="80" height="3" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: '1.7s' }} />
                
                {/* Security Shield */}
                <g transform="translate(350, 100)">
                  <path
                    d="M0 20 L20 0 L40 20 L40 60 C40 70 30 80 20 80 C10 80 0 70 0 60 Z"
                    fill="#22c55e"
                    className="drop-shadow-lg animate-pulse"
                    style={{ animationDelay: '2s' }}
                  />
                  <path
                    d="M10 35 L18 42 L30 25"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: '2.5s' }}
                  />
                </g>
                
                {/* Floating Data Particles */}
                <circle cx="100" cy="100" r="3" fill="#60a5fa" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
                <circle cx="120" cy="80" r="2" fill="#34d399" className="animate-bounce" style={{ animationDelay: '0.7s' }} />
                <circle cx="380" cy="250" r="4" fill="#fbbf24" className="animate-bounce" style={{ animationDelay: '1.2s' }} />
                <circle cx="400" cy="270" r="2" fill="#f87171" className="animate-bounce" style={{ animationDelay: '1.8s' }} />
                
                {/* Network Connections */}
                <g className="animate-pulse" style={{ animationDelay: '3s' }}>
                  <line x1="250" y1="150" x2="350" y2="120" stroke="#60a5fa" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="250" y1="200" x2="100" y2="100" stroke="#34d399" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="250" y1="250" x2="380" y2="250" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5,5" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
