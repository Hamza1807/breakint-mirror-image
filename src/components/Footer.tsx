
const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-bold text-primary">Syrpak Technologies</h2>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Leading technology company providing comprehensive solutions to help businesses grow and succeed in the digital world.
            </p>
          </div>
          
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Cybersecurity & Penetration Testing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">OSINT & Threat Intelligence</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Software & Website Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Digital Marketing & SEO</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 syrpak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
