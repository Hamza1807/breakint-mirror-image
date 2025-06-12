import { Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background rounded-b-[60px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Protecting What Matters Most
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With expertise spanning OSINT, marketing, software development, cybersecurity, SEO, and website development and maintenance, our team brings over a decade of experience delivering tailored, cutting-edge digital solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We believe in making technology accessible, effective, and aligned with your unique business goals—combining technical excellence with clear communication to protect, grow, and empower your organization.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Delivered Across IT & Security</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Monitoring Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Certified Experts</h3>
                <p className="text-muted-foreground">
                  Our team holds industry-leading certifications including CISSP, CEH, and OSCP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
