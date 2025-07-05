
import { Shield, Lock, Search, AlertTriangle, Smartphone, Palette, GraduationCap, Lightbulb, CheckCircle, Eye, TrendingUp, Globe, FileCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Web / Application Development",
      description: "We develop mobile, desktop and web applications utilizing software development best practices, innovations and frameworks by adopting modern application architectures. Our UI/UX design team has the skills and strategic expertise to deliver unique customer experience, thereby making your business a lot more competitive."
    },
    {
      icon: GraduationCap,
      title: "Professional Trainings",
      description: "We provide training services in Mobile, Web and Application Development, AWS, Cloud Computing, Software Defined Networks and Networks (CCNA, CCNP, CCIE)."
    },
    {
      icon: Lightbulb,
      title: "IT Consultancy",
      description: "We provide solutions in variety of software application domains to achieve competitive advantage and fulfil business goals of our valued customers."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Our Development processes are aligned with modern principles of software engineering, starting from Requirements Engineering to System Testings."
    },
    {
      icon: Eye,
      title: "OSINT",
      description: "Open Source Intelligence gathering and analysis to provide comprehensive insights and threat assessment for your organization's security needs."
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      description: "Strategic digital marketing solutions to enhance your brand visibility, engage target audiences, and drive business growth across multiple channels."
    },
    {
      icon: Globe,
      title: "SEO",
      description: "Search Engine Optimization services to improve your website's visibility, increase organic traffic, and enhance your online presence in search results."
    },
    {
      icon: FileCheck,
      title: "Cybersecurity Regulatory Compliance",
      description: "Comprehensive compliance solutions to help organizations meet cybersecurity regulations and industry standards, ensuring data protection and risk management requirements are fulfilled."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Services</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to protect your assets, grow your business, and ensure technological excellence across all domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
