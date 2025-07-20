import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Heart, Briefcase, Trophy, Dumbbell, Shield, Clock, Star } from 'lucide-react';

const AboutSection = () => {
  const services = [
    {
      id: 'hostels',
      title: 'Hostels by Area',
      description: 'Find comfortable accommodations in your preferred location',
      icon: MapPin,
      color: 'sage-light'
    },
    {
      id: 'health',
      title: 'Health Connect',
      description: 'Access to healthcare services and wellness programs',
      icon: Heart,
      color: 'warm-yellow'
    },
    {
      id: 'career',
      title: 'Career Connect',
      description: 'Job placement assistance and career guidance',
      icon: Briefcase,
      color: 'orange-soft'
    },
    {
      id: 'sports',
      title: 'Sports Connect',
      description: 'Sports facilities and recreational activities',
      icon: Trophy,
      color: 'sage-medium'
    },
    {
      id: 'gym',
      title: 'Gym Access',
      description: 'Modern fitness facilities and equipment',
      icon: Dumbbell,
      color: 'warm-yellow'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All our partner hostels maintain high safety standards'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your needs'
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'Regular quality checks ensure the best experience'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Vihara Living</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're dedicated to making student life comfortable and convenient by connecting 
            students with quality hostels and essential services all in one platform.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="shadow-card border-0 hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className={`mx-auto w-16 h-16 bg-${service.color} rounded-full flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="bg-cream-light rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Vihara Living?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;