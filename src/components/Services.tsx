
import { Smartphone, GraduationCap, Lightbulb, CheckCircle, Eye, TrendingUp, Globe, FileCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Web & Mobile Application Development",
      description: "Professional web and mobile application development using modern frameworks and best practices. Our UI/UX design team delivers exceptional user experiences that make your business competitive in today's digital market.",
      keywords: "web development, mobile app development, UI/UX design, React, React Native"
    },
    {
      icon: GraduationCap,
      title: "Professional IT Training Programs",
      description: "Comprehensive training services in Mobile & Web Development, AWS Cloud Computing, Software Defined Networks, and Cisco certifications (CCNA, CCNP, CCIE) for IT professionals globally.",
      keywords: "IT training, AWS certification, Cisco CCNA, CCNP, CCIE, cloud computing training"
    },
    {
      icon: Lightbulb,
      title: "Strategic IT Consultancy Services",
      description: "Expert IT consultancy solutions across various software domains to help businesses achieve competitive advantages and fulfill their digital transformation goals.",
      keywords: "IT consulting, digital transformation, enterprise solutions, technology strategy"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance & Testing",
      description: "Our QA processes align with modern software engineering principles, from Requirements Engineering to comprehensive System Testing, ensuring reliable software delivery.",
      keywords: "quality assurance, software testing, QA automation, system testing, test engineering"
    },
    {
      icon: Eye,
      title: "OSINT Intelligence Services",
      description: "Professional Open Source Intelligence gathering and analysis services providing comprehensive threat assessment and security insights for organizations worldwide.",
      keywords: "OSINT, open source intelligence, threat intelligence, cyber intelligence, security analysis"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Solutions",
      description: "Strategic digital marketing services to enhance brand visibility, engage target audiences, and drive business growth across multiple online channels in competitive markets.",
      keywords: "digital marketing, SEO, social media marketing, content marketing, online advertising"
    },
    {
      icon: Globe,
      title: "SEO & Online Visibility",
      description: "Professional Search Engine Optimization services to improve website rankings, increase organic traffic, and enhance online presence for businesses globally.",
      keywords: "SEO services, search engine optimization, Google ranking, organic traffic, local SEO"
    },
    {
      icon: FileCheck,
      title: "Cybersecurity & Compliance",
      description: "Comprehensive cybersecurity solutions and regulatory compliance services helping organizations meet security standards, data protection requirements, and risk management protocols.",
      keywords: "cybersecurity, compliance, data protection, security audit, risk assessment, GDPR, HIPAA"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Professional IT Services</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored for businesses worldwide - from cybersecurity and web development to digital marketing and professional training programs delivered by US-headquartered experts.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" itemScope itemType="https://schema.org/ItemList">
          {services.map((service, index) => (
            <article 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 group"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
                <meta itemProp="name" content="SyrPaks Pvt Ltd" />
              </div>
              <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-xl font-semibold mb-4 text-card-foreground" itemProp="name">{service.title}</h2>
              <p className="text-card-foreground/70" itemProp="description">{service.description}</p>
              <meta itemProp="serviceType" content={service.title} />
              <meta itemProp="areaServed" content="Global" />
              <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <meta itemProp="priceRange" content="$$" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
