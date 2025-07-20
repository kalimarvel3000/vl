import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FoodOrderSection from '@/components/FoodOrderSection';
import SpecialDishesSection from '@/components/SpecialDishesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FoodOrderSection />
      <SpecialDishesSection />
      <Footer />
    </div>
  );
};

export default Index;
