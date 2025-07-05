import { Shield, Award, BookOpen, Users, Code, Lock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background rounded-b-[60px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Protecting What Matters Most
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With expertise spanning OSINT, marketing, software development, cybersecurity, SEO, and website development and maintenance, our team brings over a decade of experience delivering tailored, cutting-edge digital solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We believe in making technology accessible, effective, and aligned with your unique business goals—combining technical excellence with clear communication to protect, grow, and empower your organization.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Delivered Across IT & Security</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Monitoring Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center h-full">
                {/* Comprehensive Services Illustration */}
                <div className="flex-1 flex items-center justify-center mb-6">
                  <svg
                    width="240"
                    height="240"
                    viewBox="0 0 240 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-full h-auto"
                  >
                    {/* Central Hub */}
                    <circle 
                      cx="120" 
                      cy="120" 
                      r="30" 
                      fill="url(#hubGradient)" 
                      className="animate-pulse"
                    />
                    <text x="120" y="125" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">HUB</text>
                    
                    {/* OSINT - Top */}
                    <g className="animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                      <circle cx="120" cy="40" r="25" fill="#3b82f6"/>
                      <path d="M110 35 L120 30 L130 35 L125 40 L125 45 L115 45 L115 40 Z" fill="white"/>
                      <circle cx="120" cy="37" r="3" fill="#3b82f6"/>
                      <text x="120" y="55" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">OSINT</text>
                    </g>
                    
                    {/* Marketing - Top Right */}
                    <g className="animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.8s' }}>
                      <circle cx="180" cy="70" r="25" fill="#f59e0b"/>
                      <path d="M170 65 L175 60 L185 60 L190 65 L185 75 L175 75 Z" fill="white"/>
                      <circle cx="177" cy="67" r="2" fill="#f59e0b"/>
                      <text x="180" y="85" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">Marketing</text>
                    </g>
                    
                    {/* Software Dev - Right */}
                    <g className="animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.2s' }}>
                      <circle cx="200" cy="120" r="25" fill="#10b981"/>
                      <rect x="190" y="115" width="20" height="10" rx="2" fill="white"/>
                      <rect x="192" y="117" width="4" height="6" fill="#10b981"/>
                      <rect x="198" y="117" width="4" height="6" fill="#10b981"/>
                      <rect x="204" y="117" width="4" height="6" fill="#10b981"/>
                      <text x="200" y="140" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">Dev</text>
                    </g>
                    
                    {/* Cybersecurity - Bottom Right */}
                    <g className="animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }}>
                      <circle cx="180" cy="170" r="25" fill="#ef4444"/>
                      <path d="M175 160 L185 160 L188 165 L188 175 C188 178 185 180 180 180 C175 180 172 178 172 175 L172 165 Z" fill="white"/>
                      <circle cx="180" cy="163" r="2" fill="#ef4444"/>
                      <text x="180" y="190" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">Security</text>
                    </g>
                    
                    {/* SEO - Bottom */}
                    <g className="animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
                      <circle cx="120" cy="200" r="25" fill="#8b5cf6"/>
                      <path d="M110 195 L115 190 L125 190 L130 195 L125 200 L115 200 Z" fill="white"/>
                      <circle cx="118" cy="195" r="2" fill="#8b5cf6"/>
                      <path d="M122 192 L128 198" stroke="#8b5cf6" strokeWidth="2"/>
                      <text x="120" y="220" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">SEO</text>
                    </g>
                    
                    {/* Web Development - Left */}
                    <g className="animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '2.7s' }}>
                      <circle cx="40" cy="120" r="25" fill="#06b6d4"/>
                      <rect x="30" y="115" width="20" height="12" rx="2" fill="white"/>
                      <rect x="32" y="117" width="16" height="2" fill="#06b6d4"/>
                      <rect x="32" y="120" width="10" height="1" fill="#06b6d4"/>
                      <rect x="32" y="122" width="12" height="1" fill="#06b6d4"/>
                      <rect x="32" y="124" width="8" height="1" fill="#06b6d4"/>
                      <text x="40" y="140" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">Web Dev</text>
                    </g>
                    
                    {/* Connecting Lines with Animation */}
                    <g className="animate-pulse" style={{ animationDelay: '1s' }}>
                      <line x1="120" y1="120" x2="120" y2="65" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="3" strokeDasharray="8,4">
                        <animate attributeName="stroke-dashoffset" values="0;-12;0" dur="3s" repeatCount="indefinite"/>
                      </line>
                      <line x1="120" y1="120" x2="155" y2="85" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="3" strokeDasharray="8,4">
                        <animate attributeName="stroke-dashoffset" values="0;-12;0" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                      </line>
                      <line x1="120" y1="120" x2="175" y2="120" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="3" strokeDasharray="8,4">
                        <animate attributeName="stroke-dashoffset" values="0;-12;0" dur="3s" repeatCount="indefinite" begin="1s"/>
                      </line>
                      <line x1="120" y1="120" x2="155" y2="155" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="3" strokeDasharray="8,4">
                        <animate attributeName="stroke-dashoffset" values="0;-12;0" dur="3s" repeatCount="indefinite" begin="1.5s"/>
                      </line>
                      <line x1="120" y1="120" x2="120" y2="175" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="3" strokeDasharray="8,4">
                        <animate attributeName="stroke-dashoffset" values="0;-12;0" dur="3s" repeatCount="indefinite" begin="2s"/>
                      </line>
                      <line x1="120" y1="120" x2="65" y2="120" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="3" strokeDasharray="8,4">
                        <animate attributeName="stroke-dashoffset" values="0;-12;0" dur="3s" repeatCount="indefinite" begin="2.5s"/>
                      </line>
                    </g>
                    
                    {/* Orbiting Data Points */}
                    <g className="animate-spin" style={{ animationDuration: '20s' }}>
                      <circle cx="150" cy="60" r="3" fill="rgba(59, 130, 246, 0.6)"/>
                      <circle cx="90" cy="180" r="3" fill="rgba(16, 185, 129, 0.6)"/>
                    </g>
                    
                    <g className="animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                      <circle cx="60" cy="60" r="3" fill="rgba(245, 158, 11, 0.6)"/>
                      <circle cx="180" cy="180" r="3" fill="rgba(139, 92, 246, 0.6)"/>
                    </g>
                    
                    {/* Definitions */}
                    <defs>
                      <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6"/>
                        <stop offset="100%" stopColor="#1d4ed8"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Comprehensive Digital Solutions</h3>
                  <p className="text-muted-foreground">
                    From OSINT investigations to web development, we deliver end-to-end digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
