import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, MapPin, UtensilsCrossed, Heart, Briefcase, Trophy, Dumbbell, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Hostels by Area', href: '#hostels', icon: MapPin },
    { name: 'Pre-Order Food', href: '#food-order', icon: UtensilsCrossed },
    { name: 'Health Connect', href: '#health', icon: Heart },
    { name: 'Career Connect', href: '#career', icon: Briefcase },
    { name: 'Sports Connect', href: '#sports', icon: Trophy },
    { name: 'Gym Access', href: '#gym', icon: Dumbbell },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 lg:h-36">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/054da182-c68e-473e-a9cb-7f9d57d9dc79.png" 
              alt="Vihara Living - Feel the Comfort, Taste the Difference"
              className="h-24 w-auto lg:h-32"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </button>
              ))}
              <Button variant="hero" size="sm" className="ml-4">
                <LogIn className="w-4 h-4" />
                Sign In
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center gap-2"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </button>
            ))}
            <div className="pt-2">
              <Button variant="hero" size="sm" className="w-full">
                <LogIn className="w-4 h-4" />
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;