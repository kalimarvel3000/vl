import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, Building } from 'lucide-react';
import hostelHero from '@/assets/hostel-hero.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero pt-32 lg:pt-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 min-h-[80vh] items-center">
          
          {/* Left Side - Students */}
          <Card className="p-8 lg:p-12 bg-card/80 backdrop-blur-sm shadow-soft border-0 transform hover:scale-105 transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-sage-light rounded-full flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                Are you a student looking for a hostel?
              </h1>
              <p className="text-lg text-muted-foreground">
                Let us help you find comfort with ease.
              </p>
              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Start Enquiry
                </Button>
              </div>
            </div>
          </Card>

          {/* Right Side - Hostel Owners */}
          <Card className="p-8 lg:p-12 bg-card/80 backdrop-blur-sm shadow-soft border-0 transform hover:scale-105 transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-warm-yellow rounded-full flex items-center justify-center">
                <Building className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                Own a Hostel? Partner with Vihara Living
              </h1>
              <p className="text-lg text-muted-foreground">
                Join our network and simplify your food and facilities.
              </p>
              <div className="pt-4">
                <Button variant="warm" size="lg" className="w-full sm:w-auto">
                  Become a Partner
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Hero Image */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-soft">
          <img 
            src={hostelHero} 
            alt="Comfortable hostel living space"
            className="w-full h-64 lg:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;