
const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-20 bg-gradient-to-br from-primary to-primary/80"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent animate-fade-in">
            Breaking Through Digital Barriers
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We specialize in cybersecurity, penetration testing, and digital security solutions that protect your business from evolving threats.
          </p>
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="border-2 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/20 transition-all hover:scale-105 hover:border-primary-foreground/50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
