
const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-20"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent animate-fade-in">
            Breaking Through Digital Barriers
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We specialize in cybersecurity, penetration testing, and digital security solutions that protect your business from evolving threats.
          </p>
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="border border-primary text-primary bg-black/20 backdrop-blur-sm px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/20 transition-all hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
