
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Security Officer",
      bio: "15+ years in cybersecurity with expertise in penetration testing and security architecture. CISSP certified.",
      image: "/placeholder.svg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Penetration Tester",
      bio: "Certified Ethical Hacker with extensive experience in vulnerability assessment and incident response.",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Emily Watson",
      role: "Security Researcher",
      bio: "PhD in Computer Science, specializing in advanced threat detection and AI-powered security solutions.",
      image: "/placeholder.svg"
    },
    {
      name: "David Kim",
      role: "Security Consultant",
      bio: "Former government cybersecurity specialist with expertise in compliance and risk management.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our certified cybersecurity experts bring decades of combined experience to protect your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all text-center group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-muted rounded-full"></div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <div className="text-primary font-medium mb-4">{member.role}</div>
              <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>
              
              <div className="flex justify-center space-x-4">
                <button className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                  <Linkedin className="w-4 h-4 text-primary" />
                </button>
                <button className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
