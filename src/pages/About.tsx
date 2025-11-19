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
                La storia di Oishii
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Oishii Coffee è un progetto nato dalla creatività e passione di Chiara, una ragazza di 32 anni. Dopo la sua laurea a Milano in "Fashion Stylist" decide di esplorare il mondo attraverso il programma Au Pair svolto negli Stati Uniti, a Londra e per ultimo a Tokyo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Proprio mentre viveva a Tokyo, il suo passatempo preferito nei momenti di relax, era quello di passeggiare tra le vie Giapponesi alla scoperta delle caffetterie più "Fancy" della città. Fino al 2019 Chiara non aveva mai bevuto caffè perché non riusciva a farsi piacere i sentori amari e bruciati comunemente riscontrati nelle caffetterie italiane così mentre i suoi occhi apprezzavano l'interior designing dei Coffee Shop si fece incuriosire dal rito della preparazione del caffè filtro di cui i Giapponesi ne sono maestri.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Rimase così sorpresa dalla delicatezza unica di quella bevanda che quando tornò in Italia, parallelamente al suo lavoro nella moda, decise di iniziare ad esplodere e studiare più a fondo quel mondo del caffè così diverso dal nostro comune immaginario.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Questo mondo si chiama Specialty Coffee e quando Chiara un giorno ebbe "l'illuminazione", decise che la passione per il caffè di qualità era diventata così grande che decise di cambiare vita e lavoro. Con il locale in Via dell'Arsenale 41 nel cuore di Torino, fu amore a prima vista ed è proprio che dal 21 Ottobre 2025 nasce Oishii Coffee.
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
                La filosofia di Oishii
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Oishii Coffee è una sala degustazione di Specialty Coffee che propone una materia prima di altissima qualità estratta con diverse tecniche e ricette.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Accoglie la clientela dall'orario della colazione fino a tardo pomeriggio per una merenda alternativa. All'interno della caffetteria si possono scegliere tra diverse monorigini che spaziano dalla terra africana dell'Etiopia, il Kenya e il Rwanda fino alle terre dell'America Latina come la Colombia, il Perù, la Costa Rica e molte altre.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                L'obiettivo di Chiara è quello che l'ha poi spinta anche alla scelta unica del suo logo: diffondere il mondo del caffè filtro nella cultura Torinese che è stata appunto la bevanda che ha scoperto durante la permanenza in Giappone. Questa bevanda ha la capacità di far emozionare, una bevanda che ricorda quasi un tè caldo ma pur sempre estratto con chicchi di caffè selezionati. Chiara ha deciso di elevare l'esperienza nel suo locale presentando questa bevanda in un calice di vino di cristallo soffiato a bocca proprio perché il mondo del caffè e il mondo del vino parlano una lingua molto simile.
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
