import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import coffee1 from "@/assets/coffee-1.jpg";
import coffee2 from "@/assets/coffee-2.jpg";
import dessert1 from "@/assets/dessert-1.jpg";

const Menu = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const coffeeItems = [
    {
      id: "espresso",
      name: "Espresso",
      description: "Rich, bold shot of perfectly extracted coffee",
      price: "$3.50",
      image: coffee1,
    },
    {
      id: "latte",
      name: "Café Latte",
      description: "Smooth espresso with steamed milk and delicate foam",
      price: "$4.50",
      image: coffee1,
    },
    {
      id: "cappuccino",
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and foam",
      price: "$4.50",
      image: coffee1,
    },
    {
      id: "matcha",
      name: "Matcha Latte",
      description: "Premium ceremonial grade matcha with your choice of milk",
      price: "$5.50",
      image: coffee2,
    },
    {
      id: "pour-over",
      name: "Pour Over",
      description: "Single-origin coffee carefully brewed to order",
      price: "$5.00",
      image: coffee1,
    },
    {
      id: "cold-brew",
      name: "Cold Brew",
      description: "Smooth, refreshing coffee steeped for 18 hours",
      price: "$4.75",
      image: coffee1,
    },
  ];

  const teaItems = [
    {
      id: "sencha",
      name: "Sencha Green Tea",
      description: "Classic Japanese green tea with a fresh, grassy flavor",
      price: "$4.00",
    },
    {
      id: "hojicha",
      name: "Hojicha",
      description: "Roasted green tea with a warm, nutty aroma",
      price: "$4.25",
    },
    {
      id: "earl-grey",
      name: "Earl Grey",
      description: "Black tea infused with bergamot oil",
      price: "$3.75",
    },
    {
      id: "chamomile",
      name: "Chamomile",
      description: "Calming herbal tea perfect for relaxation",
      price: "$3.50",
    },
  ];

  const dessertItems = [
    {
      id: "croissant",
      name: "Butter Croissant",
      description: "Flaky, buttery French pastry baked fresh daily",
      price: "$3.75",
      image: dessert1,
    },
    {
      id: "mochi",
      name: "Matcha Mochi",
      description: "Soft, chewy rice cake filled with sweet red bean paste",
      price: "$4.50",
      image: dessert1,
    },
    {
      id: "cardamom-bun",
      name: "Cardamom Bun",
      description: "Scandinavian sweet roll with aromatic cardamom",
      price: "$4.25",
      image: dessert1,
    },
    {
      id: "cheesecake",
      name: "Yuzu Cheesecake",
      description: "Light, citrusy Japanese-inspired cheesecake",
      price: "$6.00",
      image: dessert1,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 py-16 bg-background text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Thoughtfully crafted drinks and treats for every moment
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="px-6">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="coffee">Coffee</TabsTrigger>
              <TabsTrigger value="tea">Tea</TabsTrigger>
              <TabsTrigger value="desserts">Desserts</TabsTrigger>
            </TabsList>

            <TabsContent value="coffee" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coffeeItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:shadow-xl"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className={`w-full h-full object-cover transition-transform duration-500 ${
                            hoveredItem === item.id ? "scale-110" : "scale-100"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                      </div>
                    )}
                    <div className="p-6 space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-xl font-semibold">
                          {item.name}
                        </h3>
                        <span className="text-lg font-medium text-primary">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tea" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teaItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-semibold">
                        {item.name}
                      </h3>
                      <span className="text-lg font-medium text-primary">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="desserts" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dessertItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:shadow-xl"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className={`w-full h-full object-cover transition-transform duration-500 ${
                            hoveredItem === item.id ? "scale-110" : "scale-100"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                      </div>
                    )}
                    <div className="p-6 space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-xl font-semibold">
                          {item.name}
                        </h3>
                        <span className="text-lg font-medium text-primary">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Menu;
