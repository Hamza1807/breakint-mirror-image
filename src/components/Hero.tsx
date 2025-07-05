
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-b-[300px]">
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
              We specialize in software development, cybersecurity, website development and maintenance, OSINT, marketing and SEO a wide range of IT solutions to meet the evolving needs of modern businesses.
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
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-full"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right side - Advanced Animated SVG Illustration */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <svg
                width="600"
                height="500"
                viewBox="0 0 600 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full h-auto"
              >
                {/* Animated Background Grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                  </pattern>
                  <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="#34d399" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.8"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                <rect width="600" height="500" fill="url(#grid)" opacity="0.3"/>
                
                {/* Central Hub */}
                <g transform="translate(300, 250)">
                  <circle 
                    r="60" 
                    fill="url(#glowGradient)" 
                    filter="url(#glow)"
                    className="animate-pulse"
                  />
                  <circle 
                    r="40" 
                    fill="rgba(255,255,255,0.9)" 
                    className="animate-pulse"
                    style={{ animationDelay: '0.5s' }}
                  />
                  <circle 
                    r="20" 
                    fill="#1e293b"
                  />
                  
                  {/* Rotating Ring */}
                  <g className="animate-spin" style={{ animationDuration: '10s' }}>
                    <circle r="80" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="10,5"/>
                    <circle cx="80" cy="0" r="4" fill="#60a5fa"/>
                    <circle cx="-80" cy="0" r="4" fill="#34d399"/>
                    <circle cx="0" cy="80" r="4" fill="#f59e0b"/>
                    <circle cx="0" cy="-80" r="4" fill="#ef4444"/>
                  </g>
                </g>
                
                {/* Security Nodes */}
                <g transform="translate(150, 150)">
                  <circle r="25" fill="rgba(34, 197, 94, 0.2)" className="animate-pulse" style={{ animationDelay: '1s' }}/>
                  <path
                    d="M-10 -5 L0 -15 L10 -5 L10 10 C10 15 5 20 0 20 C-5 20 -10 15 -10 10 Z"
                    fill="#22c55e"
                    filter="url(#glow)"
                  />
                  <path d="M-5 0 L-2 3 L5 -5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </g>
                
                <g transform="translate(450, 150)">
                  <circle r="25" fill="rgba(239, 68, 68, 0.2)" className="animate-pulse" style={{ animationDelay: '1.5s' }}/>
                  <rect x="-8" y="-8" width="16" height="16" rx="2" fill="#ef4444" filter="url(#glow)"/>
                  <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </g>
                
                <g transform="translate(150, 350)">
                  <circle r="25" fill="rgba(59, 130, 246, 0.2)" className="animate-pulse" style={{ animationDelay: '2s' }}/>
                  <circle r="12" fill="#3b82f6" filter="url(#glow)"/>
                  <circle r="6" fill="white"/>
                  <circle r="2" fill="#3b82f6"/>
                </g>
                
                <g transform="translate(450, 350)">
                  <circle r="25" fill="rgba(168, 85, 247, 0.2)" className="animate-pulse" style={{ animationDelay: '2.5s' }}/>
                  <rect x="-10" y="-6" width="20" height="12" rx="6" fill="#a855f7" filter="url(#glow)"/>
                  <circle cx="6" cy="0" r="2" fill="white"/>
                </g>
                
                {/* Animated Connections */}
                <g className="animate-pulse" style={{ animationDelay: '3s' }}>
                  <line x1="300" y1="250" x2="150" y2="150" stroke="url(#glowGradient)" strokeWidth="3" strokeDasharray="10,5">
                    <animate attributeName="stroke-dashoffset" values="0;-15;0" dur="2s" repeatCount="indefinite"/>
                  </line>
                  <line x1="300" y1="250" x2="450" y2="150" stroke="url(#glowGradient)" strokeWidth="3" strokeDasharray="10,5">
                    <animate attributeName="stroke-dashoffset" values="0;-15;0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                  </line>
                  <line x1="300" y1="250" x2="150" y2="350" stroke="url(#glowGradient)" strokeWidth="3" strokeDasharray="10,5">
                    <animate attributeName="stroke-dashoffset" values="0;-15;0" dur="2s" repeatCount="indefinite" begin="1s"/>
                  </line>
                  <line x1="300" y1="250" x2="450" y2="350" stroke="url(#glowGradient)" strokeWidth="3" strokeDasharray="10,5">
                    <animate attributeName="stroke-dashoffset" values="0;-15;0" dur="2s" repeatCount="indefinite" begin="1.5s"/>
                  </line>
                </g>
                
                {/* Floating Data Particles */}
                <g className="animate-bounce" style={{ animationDelay: '0.2s' }}>
                  <circle cx="100" cy="100" r="3" fill="#60a5fa">
                    <animate attributeName="cy" values="100;80;100" dur="3s" repeatCount="indefinite"/>
                  </circle>
                </g>
                <g className="animate-bounce" style={{ animationDelay: '0.7s' }}>
                  <rect x="500" y="120" width="6" height="6" rx="1" fill="#34d399">
                    <animate attributeName="y" values="120;100;120" dur="2.5s" repeatCount="indefinite"/>
                  </rect>
                </g>
                <g className="animate-bounce" style={{ animationDelay: '1.2s' }}>
                  <polygon points="80,400 86,388 92,400 86,412" fill="#fbbf24">
                    <animate attributeName="transform" values="translate(0,0);translate(0,-20);translate(0,0)" dur="4s" repeatCount="indefinite"/>
                  </polygon>
                </g>
                <g className="animate-bounce" style={{ animationDelay: '1.8s' }}>
                  <circle cx="520" cy="380" r="4" fill="#f87171">
                    <animate attributeName="cy" values="380;360;380" dur="2.8s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* Scanning Line Effect */}
                <line x1="0" y1="250" x2="600" y2="250" stroke="#00ff88" strokeWidth="2" opacity="0.6">
                  <animate attributeName="y1" values="0;500;0" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="y2" values="0;500;0" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/>
                </line>
                
                {/* Binary Rain Effect */}
                <g opacity="0.3">
                  <text x="50" y="50" fill="#22c55e" fontSize="12" fontFamily="monospace" className="animate-pulse">
                    01001001
                    <animateTransform attributeName="transform" type="translate" values="0,0;0,500;0,0" dur="6s" repeatCount="indefinite"/>
                  </text>
                  <text x="200" y="30" fill="#3b82f6" fontSize="12" fontFamily="monospace" className="animate-pulse" style={{ animationDelay: '2s' }}>
                    11010110
                    <animateTransform attributeName="transform" type="translate" values="0,0;0,500;0,0" dur="8s" repeatCount="indefinite" begin="1s"/>
                  </text>
                  <text x="400" y="80" fill="#a855f7" fontSize="12" fontFamily="monospace" className="animate-pulse" style={{ animationDelay: '4s' }}>
                    10111001
                    <animateTransform attributeName="transform" type="translate" values="0,0;0,500;0,0" dur="7s" repeatCount="indefinite" begin="2s"/>
                  </text>
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
