
import { Smartphone, GraduationCap, Lightbulb, CheckCircle, Eye, TrendingUp, Globe, FileCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Web & Mobile Application Development",
      description: "Professional web and mobile application development using modern frameworks and best practices. Our UI/UX design team delivers exceptional user experiences that make your business competitive in Pakistan's digital market."
    },
    {
      icon: GraduationCap,
      title: "Professional IT Training Programs",
      description: "Comprehensive training services in Mobile & Web Development, AWS Cloud Computing, Software Defined Networks, and Cisco certifications (CCNA, CCNP, CCIE) for Pakistan's IT professionals."
    },
    {
      icon: Lightbulb,
      title: "Strategic IT Consultancy Services",
      description: "Expert IT consultancy solutions across various software domains to help Pakistani businesses achieve competitive advantages and fulfill their digital transformation goals."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance & Testing",
      description: "Our QA processes align with modern software engineering principles, from Requirements Engineering to comprehensive System Testing, ensuring reliable software delivery."
    },
    {
      icon: Eye,
      title: "OSINT Intelligence Services",
      description: "Professional Open Source Intelligence gathering and analysis services providing comprehensive threat assessment and security insights for organizations across Pakistan."
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Solutions",
      description: "Strategic digital marketing services to enhance brand visibility, engage target audiences, and drive business growth across multiple online channels in Pakistan's market."
    },
    {
      icon: Globe,
      title: "SEO & Online Visibility",
      description: "Professional Search Engine Optimization services to improve website rankings, increase organic traffic, and enhance online presence for Pakistani businesses."
    },
    {
      icon: FileCheck,
      title: "Cybersecurity & Compliance",
      description: "Comprehensive cybersecurity solutions and regulatory compliance services helping organizations meet security standards, data protection requirements, and risk management protocols."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Professional IT Services</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored for Pakistani businesses - from cybersecurity and web development to digital marketing and professional training programs.
          </p>
        </header>

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
