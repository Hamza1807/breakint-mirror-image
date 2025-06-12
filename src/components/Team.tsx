
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Security Officer",
      bio: "15+ years in cybersecurity with expertise in penetration testing and security architecture. CISSP certified.",
      image: "/lovable-uploads/620e769d-5237-4dcd-a92c-9868395bfe73.png"
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Penetration Tester",
      bio: "Certified Ethical Hacker with extensive experience in vulnerability assessment and incident response.",
      image: "/lovable-uploads/620e769d-5237-4dcd-a92c-9868395bfe73.png"
    },
    {
      name: "Dr. Emily Watson",
      role: "Security Researcher",
      bio: "PhD in Computer Science, specializing in advanced threat detection and AI-powered security solutions.",
      image: "/lovable-uploads/620e769d-5237-4dcd-a92c-9868395bfe73.png"
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

        <div className="flex justify-center items-center gap-8 flex-wrap">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/20 group-hover:border-primary/40 transition-all">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <div className="text-primary font-medium mb-4">{member.role}</div>
              <p className="text-muted-foreground text-sm mb-6 max-w-xs">{member.bio}</p>
              
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
