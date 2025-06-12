
import { Shield, Lock, Search, AlertTriangle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before attackers do."
    },
    {
      icon: Lock,
      title: "Security Audits",
      description: "In-depth analysis of your security infrastructure and compliance requirements."
    },
    {
      icon: Search,
      title: "Vulnerability Assessment",
      description: "Systematic evaluation of security weaknesses in your systems and networks."
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response and recovery services for security breaches and cyber attacks."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Services</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your digital assets and ensure business continuity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 group"
            >
              <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">{service.title}</h3>
              <p className="text-card-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
