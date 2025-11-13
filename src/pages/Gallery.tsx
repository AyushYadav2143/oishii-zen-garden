import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import coffee1 from "@/assets/coffee-1.jpg";
import coffee2 from "@/assets/coffee-2.jpg";
import dessert1 from "@/assets/dessert-1.jpg";
import heroImage from "@/assets/hero-cafe.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: heroImage, alt: "Café Interior", category: "Interior" },
    { src: gallery1, alt: "Cozy Corner", category: "Interior" },
    { src: gallery2, alt: "Coffee Moment", category: "Moments" },
    { src: coffee1, alt: "Latte Art", category: "Drinks" },
    { src: coffee2, alt: "Matcha Latte", category: "Drinks" },
    { src: dessert1, alt: "Pastries", category: "Food" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-6 py-16 bg-background text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            A visual journey through our cozy spaces and delicious offerings
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-background/90 rounded-full text-sm font-medium mb-2">
                      {image.category}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-background">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-2xl shadow-2xl animate-scale-in"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
