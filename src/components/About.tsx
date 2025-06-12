
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
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                {/* Animated Certification Illustration */}
                <div className="relative mb-6 mx-auto">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-full h-auto"
                  >
                    {/* Background Circle with Pulse Animation */}
                    <circle 
                      cx="100" 
                      cy="100" 
                      r="90" 
                      fill="rgba(59, 130, 246, 0.1)" 
                      className="animate-pulse"
                    />
                    
                    {/* Central Certificate/Shield */}
                    <g transform="translate(100, 100)">
                      <path
                        d="M-25 -35 L25 -35 L30 -25 L30 25 C30 35 15 45 0 45 C-15 45 -30 35 -30 25 L-30 -25 Z"
                        fill="url(#certGradient)"
                        className="animate-pulse"
                        style={{ animationDelay: '0.5s' }}
                      />
                      <circle cx="0" cy="-10" r="8" fill="white"/>
                      <path d="M-4 -10 L-1 -7 L4 -15" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </g>
                    
                    {/* Floating Certification Badges */}
                    <g className="animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '3s' }}>
                      <circle cx="50" cy="60" r="15" fill="#10b981"/>
                      <text x="50" y="65" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">CISSP</text>
                    </g>
                    
                    <g className="animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '2.8s' }}>
                      <circle cx="150" cy="70" r="15" fill="#f59e0b"/>
                      <text x="150" y="75" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">CEH</text>
                    </g>
                    
                    <g className="animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '3.2s' }}>
                      <circle cx="60" cy="140" r="15" fill="#ef4444"/>
                      <text x="60" y="145" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">OSCP</text>
                    </g>
                    
                    {/* Orbiting Security Icons */}
                    <g className="animate-spin" style={{ animationDuration: '15s' }}>
                      <g transform="translate(100, 40)">
                        <circle r="8" fill="#6366f1"/>
                        <path d="M-3 -3 L0 -6 L3 -3 L3 3 C3 5 1 6 0 6 C-1 6 -3 5 -3 3 Z" fill="white"/>
                      </g>
                    </g>
                    
                    <g className="animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                      <g transform="translate(160, 100)">
                        <circle r="8" fill="#8b5cf6"/>
                        <rect x="-3" y="-3" width="6" height="6" rx="1" fill="white"/>
                      </g>
                    </g>
                    
                    <g className="animate-spin" style={{ animationDuration: '18s' }}>
                      <g transform="translate(100, 160)">
                        <circle r="8" fill="#06b6d4"/>
                        <circle r="3" fill="white"/>
                      </g>
                    </g>
                    
                    <g className="animate-spin" style={{ animationDuration: '14s', animationDirection: 'reverse' }}>
                      <g transform="translate(40, 100)">
                        <circle r="8" fill="#84cc16"/>
                        <path d="M-2 -2 L2 -2 L2 2 L-2 2 Z" fill="white"/>
                        <path d="M-1 0 L1 0" stroke="#84cc16" strokeWidth="1"/>
                      </g>
                    </g>
                    
                    {/* Connecting Lines with Animation */}
                    <g className="animate-pulse" style={{ animationDelay: '1s' }}>
                      <line x1="100" y1="100" x2="50" y2="60" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite"/>
                      </line>
                      <line x1="100" y1="100" x2="150" y2="70" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                      </line>
                      <line x1="100" y1="100" x2="60" y2="140" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite" begin="1s"/>
                      </line>
                    </g>
                    
                    {/* Definitions */}
                    <defs>
                      <linearGradient id="certGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6"/>
                        <stop offset="100%" stopColor="#1d4ed8"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Certified Experts</h3>
                <p className="text-muted-foreground">
                  Our team holds industry-leading certifications including CISSP, CEH, and OSCP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
