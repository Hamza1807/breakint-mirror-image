
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Hamza Tufail",
      role: "Co Founder",
      bio: "Co-founder specializing in web development, full-stack applications, and modern web technologies with expertise in responsive design and user experience.",
      image: "/lovable-uploads/827306b2-1978-422e-9c7c-7041babd22cb.png"
    },
    {
      name: "Fahad Alsabbagh Alshirazi",
      role: "Founder",
      bio: "Founder and visionary leader driving innovation in cybersecurity solutions and business growth strategies.",
      image: "/lovable-uploads/9da4b594-3bb2-4956-bbce-0e9d414661f4.png"
    },
    {
      name: "Raafay Nouman",
      role: "Co Founder", 
      bio: "Co-founder specializing in threat intelligence, malware analysis, and digital forensics with expertise in incident response and security automation.",
      image: "/lovable-uploads/f6471ce3-3997-444d-b9c8-ed354d0e599e.png"
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our certified IT and cybersecurity experts bring years of combined experience to deliver exceptional digital solutions for businesses across Pakistan.
          </p>
        </header>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          {teamMembers.map((member, index) => (
            <article 
              key={index}
              className="text-center group"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/20 group-hover:border-primary/40 transition-all">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role} at SyrPaks IT Solutions`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <div className="text-primary font-medium mb-4">{member.role}</div>
              <p className="text-muted-foreground text-sm max-w-xs">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
