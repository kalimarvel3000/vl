import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { UtensilsCrossed, Coffee, Sun, Moon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import foodHero from '@/assets/food-hero.jpg';

const FoodOrderSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: '',
    hostelName: '',
    breakfast: 'idly',
    lunch: 'vankaya',
    dinner: 'potato'
  });

  const breakfastOptions = [
    { value: 'idly', label: 'Idly' },
    { value: 'puri', label: 'Puri' },
    { value: 'upma', label: 'Upma' },
    { value: 'mysore-bajji', label: 'Mysore Bajji' }
  ];

  const lunchOptions = [
    { value: 'vankaya', label: 'Vankaya (Brinjal Curry)' },
    { value: 'aratikaya', label: 'Aratikaya (Raw Banana)' },
    { value: 'dondakaya', label: 'Dondakaya (Ivy Gourd)' },
    { value: 'bendakaya', label: 'Bendakaya (Okra)' }
  ];

  const dinnerOptions = [
    { value: 'potato', label: 'Potato Curry' },
    { value: 'boondi', label: 'Boondi Curry' },
    { value: 'carrot', label: 'Carrot Curry' },
    { value: 'cabbage', label: 'Cabbage Curry' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.hostelName) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and hostel name.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Order Submitted!",
      description: `Meal order confirmed for ${formData.studentName} at ${formData.hostelName}`,
    });
  };

  return (
    <section id="food-order" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="mx-auto w-16 h-16 bg-warm-yellow rounded-full flex items-center justify-center mb-6">
            <UtensilsCrossed className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Pre-Order Your Meals</h2>
          <p className="text-xl text-muted-foreground">Fresh, homestyle meals delivered to your hostel</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Daily Meal Order</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Info */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student Name</Label>
                    <Input 
                      id="studentName"
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hostelName">Hostel Name</Label>
                    <Input 
                      id="hostelName"
                      value={formData.hostelName}
                      onChange={(e) => setFormData({...formData, hostelName: e.target.value})}
                      placeholder="Enter your hostel name"
                    />
                  </div>
                </div>

                {/* Breakfast */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-orange-soft" />
                    <Label className="text-lg font-semibold">Breakfast</Label>
                  </div>
                  <RadioGroup 
                    value={formData.breakfast} 
                    onValueChange={(value) => setFormData({...formData, breakfast: value})}
                    className="grid grid-cols-2 gap-4"
                  >
                    {breakfastOptions.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg bg-secondary">
                        <RadioGroupItem value={option.value} id={`breakfast-${option.value}`} />
                        <Label htmlFor={`breakfast-${option.value}`} className="cursor-pointer">{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Lunch */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-warm-yellow" />
                    <Label className="text-lg font-semibold">Lunch</Label>
                  </div>
                  <RadioGroup 
                    value={formData.lunch} 
                    onValueChange={(value) => setFormData({...formData, lunch: value})}
                    className="grid grid-cols-1 gap-3"
                  >
                    {lunchOptions.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg bg-secondary">
                        <RadioGroupItem value={option.value} id={`lunch-${option.value}`} />
                        <Label htmlFor={`lunch-${option.value}`} className="cursor-pointer">{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Dinner */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-sage-medium" />
                    <Label className="text-lg font-semibold">Dinner</Label>
                  </div>
                  <RadioGroup 
                    value={formData.dinner} 
                    onValueChange={(value) => setFormData({...formData, dinner: value})}
                    className="grid grid-cols-2 gap-4"
                  >
                    {dinnerOptions.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg bg-secondary">
                        <RadioGroupItem value={option.value} id={`dinner-${option.value}`} />
                        <Label htmlFor={`dinner-${option.value}`} className="cursor-pointer">{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Submit Meal Order
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Image */}
          <div className="space-y-6">
            <img 
              src={foodHero} 
              alt="Delicious traditional Indian meals"
              className="w-full rounded-2xl shadow-soft"
            />
            <Card className="p-6 bg-warm-yellow/20 border-0">
              <h3 className="text-xl font-semibold mb-2">Fresh & Healthy</h3>
              <p className="text-muted-foreground">
                All our meals are prepared fresh daily with nutritious ingredients, 
                ensuring you get the best homestyle food delivered right to your hostel.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodOrderSection;