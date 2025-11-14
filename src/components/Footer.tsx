import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Opening Hours
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
              <p>Saturday - Sunday: 8:00 AM - 8:00 PM</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/oishii_specialtycoffee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="mailto:oishiispecialtycoffee@gmail.com"
                className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>© 2024 Oishii Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
