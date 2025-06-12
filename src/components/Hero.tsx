
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-fade-in">
            Breaking Through Digital Barriers
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We specialize in cybersecurity, penetration testing, and digital security solutions that protect your business from evolving threats.
          </p>
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
