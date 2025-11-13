import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Visit = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 py-16 bg-background text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Visit Us
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            We'd love to welcome you to our peaceful corner
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    Via dell'Arsenale 41
                    <br />
                    Turin, Italy
                    <br />
                    10121
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Monday: Closed
                    <br />
                    Tuesday - Saturday: 8:00 AM - 6:00 PM
                    <br />
                    Sunday: 8:30 AM - 4:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Phone
                  </h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Email
                  </h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:hello@oishiicafe.com"
                      className="hover:text-primary transition-colors"
                    >
                      hello@oishiicafe.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-96 bg-muted/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.087176668669!2d7.686856!3d45.068836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d71e1c3f763%3A0x2e4e5b7e0d4b4e0e!2sVia%20dell%27Arsenale%2C%2041%2C%2010121%20Torino%20TO%2C%20Italy!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Oishii Café Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visit;
