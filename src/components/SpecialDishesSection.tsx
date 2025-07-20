import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Crown, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SpecialDishesSection = () => {
  const { toast } = useToast();
  const [serves, setServes] = useState('1');
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);

  const riceDishes = [
    { id: 'bagara-rice', name: 'Bagara Rice', price: '₹120' },
    { id: 'chicken-biryani', name: 'Chicken Biryani', price: '₹180' },
    { id: 'mutton-biryani', name: 'Mutton Biryani', price: '₹220' },
    { id: 'veg-pulav', name: 'Veg Pulav', price: '₹100' }
  ];

  const curries = [
    { id: 'chicken-curry', name: 'Chicken Curry', price: '₹150' },
    { id: 'paneer-curry', name: 'Paneer Curry', price: '₹130' },
    { id: 'mutton-curry', name: 'Mutton Curry', price: '₹180' },
    { id: 'mushroom-curry', name: 'Mushroom Curry', price: '₹110' }
  ];

  const handleDishToggle = (dishId: string) => {
    setSelectedDishes(prev => 
      prev.includes(dishId) 
        ? prev.filter(id => id !== dishId)
        : [...prev, dishId]
    );
  };

  const handleSubmit = () => {
    if (selectedDishes.length === 0) {
      toast({
        title: "No dishes selected",
        description: "Please select at least one dish to order.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Special Order Placed!",
      description: `${selectedDishes.length} dish(es) ordered for ${serves} person(s)`,
    });
  };

  const calculateTotal = () => {
    const allDishes = [...riceDishes, ...curries];
    const total = selectedDishes.reduce((sum, dishId) => {
      const dish = allDishes.find(d => d.id === dishId);
      const price = dish ? parseInt(dish.price.replace('₹', '')) : 0;
      return sum + (price * parseInt(serves));
    }, 0);
    return total;
  };

  return (
    <section id="special-dishes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="mx-auto w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mb-6">
            <Crown className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Special Regional Dishes</h2>
          <p className="text-xl text-muted-foreground">Authentic flavors from across India, made with love</p>
        </div>

        <Card className="shadow-soft border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Order Special Dishes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Serves Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <Label className="text-lg font-semibold">Serves for:</Label>
              </div>
              <Select value={serves} onValueChange={setServes}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select number of people" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Person</SelectItem>
                  <SelectItem value="2">2 People</SelectItem>
                  <SelectItem value="3">3 People</SelectItem>
                  <SelectItem value="4">4 People</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Rice Dishes */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Rice Dishes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {riceDishes.map((dish) => (
                  <div key={dish.id} className="flex items-center space-x-3 p-4 rounded-lg bg-secondary">
                    <Checkbox
                      id={dish.id}
                      checked={selectedDishes.includes(dish.id)}
                      onCheckedChange={() => handleDishToggle(dish.id)}
                    />
                    <Label htmlFor={dish.id} className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <span>{dish.name}</span>
                        <span className="font-semibold text-primary">{dish.price}</span>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Curries */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Curries</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {curries.map((dish) => (
                  <div key={dish.id} className="flex items-center space-x-3 p-4 rounded-lg bg-secondary">
                    <Checkbox
                      id={dish.id}
                      checked={selectedDishes.includes(dish.id)}
                      onCheckedChange={() => handleDishToggle(dish.id)}
                    />
                    <Label htmlFor={dish.id} className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <span>{dish.name}</span>
                        <span className="font-semibold text-primary">{dish.price}</span>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            {selectedDishes.length > 0 && (
              <Card className="bg-warm-yellow/20 border-warm-yellow/30">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Selected Items:</span>
                    <span>{selectedDishes.length} dish(es)</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Serves:</span>
                    <span>{serves} person(s)</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-primary">₹{calculateTotal()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Button onClick={handleSubmit} variant="warm" size="lg" className="w-full">
              Order Special Dish
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SpecialDishesSection;