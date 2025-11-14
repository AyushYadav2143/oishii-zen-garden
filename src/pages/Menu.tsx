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
      description: "Shot perfetto di caffè specialty",
      price: "€3",
      image: coffee1,
    },
    {
      id: "flat-white",
      name: "Flat White",
      description: "Espresso con latte vellutato e microfoam",
      price: "€4,50",
      image: coffee1,
    },
    {
      id: "iced-latte",
      name: "Iced Latte",
      description: "Latte freddo rinfrescante",
      price: "€4,50",
      image: coffee2,
    },
    {
      id: "espresso-tonic",
      name: "Espresso Tonic",
      description: "Espresso con acqua tonica e ghiaccio",
      price: "€6",
      image: coffee1,
    },
    {
      id: "cold-brew",
      name: "Cold Brew",
      description: "Caffè filtrato a freddo per 18 ore",
      price: "€5",
      image: coffee1,
    },
    {
      id: "moka-pump",
      name: "Moka Pump (per 2)",
      description: "Esperienza di caffè moka da condividere",
      price: "€15",
      image: coffee2,
    },
    {
      id: "filtro",
      name: "Filtro in Calice",
      description: "Caffè filtro servito in calice di cristallo soffiato",
      price: "da €5",
      image: coffee1,
    },
    {
      id: "omakase",
      name: "Menù Omakase",
      description: "Degustazione guidata di caffè specialty",
      price: "€12",
      image: coffee2,
    },
  ];

  const teaItems = [
    {
      id: "info",
      name: "Selezione Tè",
      description: "Chiedi al nostro staff per la selezione del giorno",
      price: "Varia",
    },
  ];

  const dessertItems = [
    {
      id: "cookies",
      name: "Cookies / Biscotti",
      description: "Biscotti artigianali preparati freschi ogni giorno",
      price: "Varia",
      image: dessert1,
    },
    {
      id: "torte",
      name: "Torte",
      description: "Selezione di torte fatte in casa",
      price: "Varia",
      image: dessert1,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 py-16 bg-background text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Il Nostro Menu
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Specialty Coffee di altissima qualità
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="px-6">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="coffee">Caffè</TabsTrigger>
              <TabsTrigger value="tea">Tè</TabsTrigger>
              <TabsTrigger value="desserts">Dolci</TabsTrigger>
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
