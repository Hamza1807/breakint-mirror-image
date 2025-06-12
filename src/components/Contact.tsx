
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-vibrant-teal/10 to-vibrant-green/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-green">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to secure your digital infrastructure? Contact our team for a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-vibrant-blue/20 to-vibrant-purple/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-vibrant-blue" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">security@syrpak.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-vibrant-green/20 to-vibrant-teal/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-vibrant-green" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-vibrant-orange/20 to-vibrant-yellow/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-vibrant-orange" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-muted-foreground">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-vibrant-purple/10 to-vibrant-pink/10 p-8 rounded-xl border border-border backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-vibrant-blue focus:border-transparent bg-background/50 backdrop-blur-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-vibrant-blue focus:border-transparent bg-background/50 backdrop-blur-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-vibrant-blue focus:border-transparent bg-background/50 backdrop-blur-sm"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-vibrant-blue focus:border-transparent bg-background/50 backdrop-blur-sm"
                  placeholder="Tell us about your security needs..."
                />
              </div>
              
              <button className="w-full bg-gradient-to-r from-vibrant-blue to-vibrant-purple text-white py-3 rounded-lg font-semibold hover:from-vibrant-purple hover:to-vibrant-pink transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
