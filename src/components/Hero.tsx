

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="container mx-auto px-6 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
            Breaking Through Digital Barriers
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We specialize in cybersecurity, penetration testing, and digital security solutions that protect your business from evolving threats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

