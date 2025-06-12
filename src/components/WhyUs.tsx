
import { CheckCircle, Users, Zap, Award, TrendingUp, RotateCcw, Target, Lightbulb, Clock, Building } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Over 500 successful security assessments with 99.9% client satisfaction rate."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with industry-leading credentials and real-world experience."
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "24/7 monitoring and immediate incident response to protect your business."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning cybersecurity solutions trusted by Fortune 500 companies."
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "We help you to achieve your business goals and expand your business by utilizing the best techniques of ICT and R&D."
    },
    {
      icon: RotateCcw,
      title: "Unlimited Revisions",
      description: "Our mission is to meet the required needs of our customers. We focus on quality of service and customer satisfaction."
    },
    {
      icon: Target,
      title: "Supreme Perfection",
      description: "We develop quality products which are bugs free, easy to scale and proficient in performance."
    },
    {
      icon: Lightbulb,
      title: "Smart Experience",
      description: "Having outclass user interface and experience, our products are eye-catching, simple and easy to use."
    },
    {
      icon: Clock,
      title: "Strict Deadlines",
      description: "To complete a project on time, we define strict deadlines. For that we divide our project in several modules."
    },
    {
      icon: Building,
      title: "Reputed Company",
      description: "Dedication, hard working, motivation and customer satisfaction is key to success. We have achieved a good reputation."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose syrpak?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver unparalleled cybersecurity expertise with a commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
