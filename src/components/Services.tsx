
import { Smartphone, GraduationCap, Lightbulb, CheckCircle, Eye, TrendingUp, Globe, FileCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Custom Web & Application Development",
      description: "Professional web development services in Pakistan utilizing cutting-edge frameworks and modern application architectures. Our expert UI/UX design team delivers unique customer experiences, making your business more competitive in the digital marketplace."
    },
    {
      icon: GraduationCap,
      title: "Professional IT Training & Certification",
      description: "Comprehensive training programs in Mobile Development, Web Development, Application Development, AWS Cloud Computing, Software Defined Networks, and Cisco certifications (CCNA, CCNP, CCIE) to upskill your team."
    },
    {
      icon: Lightbulb,
      title: "Strategic IT Consultancy Services",
      description: "Expert IT consulting solutions across various software application domains to help Pakistani businesses achieve competitive advantage and fulfill their digital transformation goals with proven methodologies."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance & Testing",
      description: "Our development processes align with modern software engineering principles, from Requirements Engineering to comprehensive System Testing, ensuring bug-free, scalable, and high-performance applications."
    },
    {
      icon: Eye,
      title: "OSINT Intelligence Services",
      description: "Professional Open Source Intelligence gathering and analysis services providing comprehensive insights, threat assessment, and security intelligence for organizations across Pakistan and internationally."
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Brand Growth",
      description: "Strategic digital marketing solutions to enhance brand visibility, engage target audiences, and drive business growth across multiple channels including social media, content marketing, and paid advertising."
    },
    {
      icon: Globe,
      title: "SEO & Search Marketing",
      description: "Professional Search Engine Optimization services to improve website visibility, increase organic traffic, and enhance online presence in search results for Pakistani and international markets."
    },
    {
      icon: FileCheck,
      title: "Cybersecurity & Regulatory Compliance",
      description: "Comprehensive cybersecurity compliance solutions helping organizations meet industry regulations and standards, ensuring data protection, risk management, and security requirements are fulfilled."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our IT & Cybersecurity Services</h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Comprehensive digital solutions tailored to protect your assets, accelerate business growth, and ensure technological excellence across all domains. Serving businesses throughout Pakistan with world-class IT services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 group"
            >
              <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{service.title}</h3>
              <p className="text-card-foreground/70">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
