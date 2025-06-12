
import { CheckCircle, Users, Zap, Award } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Over 500 successful security assessments with 99.9% client satisfaction rate.",
      gradient: "from-vibrant-green to-vibrant-teal",
      iconColor: "text-vibrant-green"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with industry-leading credentials and real-world experience.",
      gradient: "from-vibrant-blue to-vibrant-purple",
      iconColor: "text-vibrant-blue"
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "24/7 monitoring and immediate incident response to protect your business.",
      gradient: "from-vibrant-yellow to-vibrant-orange",
      iconColor: "text-vibrant-yellow"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning cybersecurity solutions trusted by Fortune 500 companies.",
      gradient: "from-vibrant-pink to-vibrant-red",
      iconColor: "text-vibrant-pink"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-vibrant-orange/10 to-vibrant-yellow/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-orange">Why Choose syrpak?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver unparalleled cybersecurity expertise with a commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${reason.gradient}/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:${reason.gradient}/30 transition-all`}>
                <reason.icon className={`w-8 h-8 ${reason.iconColor}`} />
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
