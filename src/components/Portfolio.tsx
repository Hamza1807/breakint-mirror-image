
import { ExternalLink, Shield, Lock, Globe } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Financial Institution Security Audit",
      description: "Comprehensive security assessment for a major bank, identifying critical vulnerabilities and implementing robust protection measures.",
      category: "Financial Services",
      icon: Shield,
      results: "99% vulnerability reduction"
    },
    {
      title: "Healthcare Data Protection",
      description: "HIPAA compliance assessment and data encryption implementation for a healthcare network serving 100,000+ patients.",
      category: "Healthcare",
      icon: Lock,
      results: "Full HIPAA compliance"
    },
    {
      title: "E-commerce Platform Security",
      description: "End-to-end security implementation for a major e-commerce platform processing millions of transactions daily.",
      category: "E-commerce",
      icon: Globe,
      results: "Zero security incidents"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our successful cybersecurity implementations across various industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <project.icon className="w-12 h-12 text-primary" />
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <div className="text-sm text-primary font-medium mb-3">{project.category}</div>
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              
              <div className="border-t border-border pt-6">
                <div className="text-sm font-medium text-primary">Result: {project.results}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
