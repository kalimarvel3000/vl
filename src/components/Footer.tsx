import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Hostels by Area', href: '#hostels' },
    { name: 'Pre-Order Food', href: '#food-order' },
  ];

  const services = [
    { name: 'Health Connect', href: '#health' },
    { name: 'Career Connect', href: '#career' },
    { name: 'Sports Connect', href: '#sports' },
    { name: 'Gym Access', href: '#gym' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/054da182-c68e-473e-a9cb-7f9d57d9dc79.png" 
              alt="Vihara Living"
              className="h-20 w-auto lg:h-24 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 leading-relaxed">
              Making student life comfortable and convenient by connecting 
              students with quality hostels and essential services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    123 Student Street<br />
                    Hyderabad, Telangana 500001<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="tel:+919876543210" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a 
                  href="mailto:contact@viharaliving.com" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  contact@viharaliving.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    Mon - Fri: 9:00 AM - 8:00 PM<br />
                    Sat - Sun: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Vihara Living. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;