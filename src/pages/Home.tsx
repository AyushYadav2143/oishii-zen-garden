import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Coffee, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe.jpg";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 transition-transform duration-100"
        >
          <img
            src={heroImage}
            alt="Oishii Café Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
              Savor Calm.
              <br />
              Taste Happiness.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the perfect blend of Japanese and Scandinavian café culture
              in a serene, welcoming atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                >
                  Explore Our Menu
                </Button>
              </Link>
              <Link to="/visit">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-2"
                >
                  Visit Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-drift" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">
                Artisanal Coffee
              </h3>
              <p className="text-muted-foreground">
                Carefully sourced beans, expertly roasted and brewed to perfection
                for your daily ritual.
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">
                Natural Ingredients
              </h3>
              <p className="text-muted-foreground">
                Fresh, organic ingredients crafted into delightful pastries and
                wholesome meals.
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">
                Serene Atmosphere
              </h3>
              <p className="text-muted-foreground">
                A peaceful sanctuary designed for slow mornings, quiet afternoons,
                and meaningful conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Your Daily Escape Awaits
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for a moment of tranquility. Whether you're starting your day
            or taking a peaceful break, Oishii Café is here to welcome you.
          </p>
          <Link to="/about">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8"
            >
              Our Story
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
