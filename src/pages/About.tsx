import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="px-6 py-16 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Where Japanese minimalism meets Scandinavian warmth
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-serif text-3xl font-semibold">
                A Dream Born from Two Cultures
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Oishii Café emerged from a simple vision: to create a space where
                the tranquility of Japanese tea ceremonies meets the cozy warmth
                of Scandinavian hygge. Founded in 2020, we've cultivated a haven
                where every detail—from the smooth wooden tables to the soft
                natural lighting—invites you to slow down and savor the moment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our name, "Oishii" (美味しい), means "delicious" in Japanese,
                reflecting our commitment to serving exceptional coffee, tea, and
                treats made with care and intention. Each cup tells a story of
                craftsmanship and dedication to quality.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg animate-scale-in">
              <img
                src={gallery1}
                alt="Café Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg animate-scale-in">
              <img
                src={gallery2}
                alt="Coffee Being Poured"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6 animate-fade-in">
              <h2 className="font-serif text-3xl font-semibold">
                Our Philosophy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Oishii, we believe that the best moments in life are often the
                simplest ones. A perfectly brewed cup of coffee. A quiet corner to
                read. A conversation with a friend. We've designed every aspect of
                our café to nurture these moments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We source our ingredients thoughtfully, work with local artisans,
                and maintain a sustainable approach to everything we do. Our space
                is more than a café—it's a community gathering place where
                creativity, connection, and calm converge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-serif text-2xl font-semibold text-primary">
                Quality
              </h3>
              <p className="text-muted-foreground">
                From bean to cup, we never compromise on the excellence of our
                ingredients and preparation.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-serif text-2xl font-semibold text-secondary">
                Serenity
              </h3>
              <p className="text-muted-foreground">
                Creating peaceful spaces where you can disconnect from the rush
                and reconnect with yourself.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-serif text-2xl font-semibold text-accent">
                Community
              </h3>
              <p className="text-muted-foreground">
                Building connections through shared experiences, warm hospitality,
                and genuine care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
