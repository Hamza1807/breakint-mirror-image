
import { Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Hamza Tufail",
      role: "Co-Founder & CTO",
      bio: "Co-founder specializing in web development, full-stack applications, and modern web technologies with expertise in responsive design and user experience optimization.",
      image: "/lovable-uploads/827306b2-1978-422e-9c7c-7041babd22cb.png",
      linkedin: "https://www.linkedin.com/in/hamza-tufail1708/"
    },
    {
      name: "Fahad Alsabbagh Alshirazi",
      role: "Founder & CEO",
      bio: "Founder and visionary leader driving innovation in cybersecurity solutions and business growth strategies with expertise in enterprise security architecture.",
      image: "/lovable-uploads/9da4b594-3bb2-4956-bbce-0e9d414661f4.png",
      linkedin: "https://www.linkedin.com/in/fahed-alsabbagh/"
    },
    {
      name: "Muhammad Raafay",
      role: "Co-Founder & Security Lead", 
      bio: "Co-founder specializing in threat intelligence, malware analysis, and digital forensics with expertise in incident response and cybersecurity automation solutions.",
      image: "/lovable-uploads/f6471ce3-3997-444d-b9c8-ed354d0e599e.png",
      linkedin: "https://www.linkedin.com/in/muhammad-raafay/"
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our certified IT and cybersecurity experts bring years of combined experience to deliver exceptional digital solutions for businesses across the US and international markets. Connect with our leadership team on LinkedIn.
          </p>
        </header>

        <div className="flex justify-center items-start gap-8 flex-wrap max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <article 
              key={index}
              className="text-center group max-w-sm"
              itemScope 
              itemType="https://schema.org/Person"
            >
              <div className="w-56 h-56 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/20 group-hover:border-primary/40 transition-all">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role} at SyrPaks IT Solutions`}
                  className="w-full h-full object-cover object-center"
                  itemProp="image"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2" itemProp="name">{member.name}</h3>
              <div className="text-primary font-medium mb-4" itemProp="jobTitle">{member.role}</div>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-4" itemProp="description">{member.bio}</p>
              
              <div className="flex justify-center">
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                  itemProp="sameAs"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-medium">Connect</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
