'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const galleryImages = [
  // Drinks (14 images)
  { src: '/images/Drinks/Drink1.jpg', alt: 'Craft Beer Selection', category: 'drinks' },
  { src: '/images/Drinks/Drink2.jpg', alt: 'Signature Cocktails', category: 'drinks' },
  { src: '/images/Drinks/Drink3.jpg', alt: 'Beer Selection', category: 'drinks' },
  { src: '/images/Drinks/Drink4.jpg', alt: 'Drinks at Bar', category: 'drinks' },
  { src: '/images/Drinks/Drink5.jpg', alt: 'Beverage Selection', category: 'drinks' },
  { src: '/images/Drinks/Drink6.jpg', alt: 'Bar Drinks', category: 'drinks' },
  { src: '/images/Drinks/Drink7.jpg', alt: 'Cocktail Presentation', category: 'drinks' },
  { src: '/images/Drinks/Drink8.jpg', alt: 'Craft Beverages', category: 'drinks' },
  { src: '/images/Drinks/Drink9.jpg', alt: 'Bar Scene', category: 'drinks' },
  { src: '/images/Drinks/Drink10.jpg', alt: 'Drinks Menu', category: 'drinks' },
  { src: '/images/Drinks/Drink11.jpg', alt: 'Beer Tasting', category: 'drinks' },
  { src: '/images/Drinks/Drink12.jpg', alt: 'Beverage Service', category: 'drinks' },
  { src: '/images/Drinks/Drink13.jpg', alt: 'Drink Specials', category: 'drinks' },
  { src: '/images/Drinks/Drink14.jpg', alt: 'Bar Selection', category: 'drinks' },

  // Food (9 images)
  { src: '/images/Food/Food1.jpg', alt: 'Signature Pizza', category: 'food' },
  { src: '/images/Food/Food2.jpg', alt: 'Delicious Food', category: 'food' },
  { src: '/images/Food/Food3.jpg', alt: 'Pizza Special', category: 'food' },
  { src: '/images/Food/Food4.jpg', alt: 'Food Presentation', category: 'food' },
  { src: '/images/Food/Food5.jpg', alt: 'Tavern Food', category: 'food' },
  { src: '/images/Food/Food6.jpg', alt: 'Menu Item', category: 'food' },
  { src: '/images/Food/Food7.jpg', alt: 'Specialty Dish', category: 'food' },
  { src: '/images/Food/Food8.jpg', alt: 'Culinary Creation', category: 'food' },
  { src: '/images/Food/Food9.jpg', alt: 'Fresh Ingredients', category: 'food' },

  // Pets (12 images)
  { src: '/images/Pets/Pet1.jpg', alt: 'Dog-Friendly Patio', category: 'pets' },
  { src: '/images/Pets/Pet2.jpg', alt: 'Pets Welcome', category: 'pets' },
  { src: '/images/Pets/Pet3.jpg', alt: 'Pet-Friendly Dining', category: 'pets' },
  { src: '/images/Pets/Pet4.jpg', alt: 'Dogs at Tavern', category: 'pets' },
  { src: '/images/Pets/Pet5.jpg', alt: 'Furry Friends', category: 'pets' },
  { src: '/images/Pets/Pet6.jpg', alt: 'Pet Experience', category: 'pets' },
  { src: '/images/Pets/Pet7.jpg', alt: 'Dog-Friendly Space', category: 'pets' },
  { src: '/images/Pets/Pet8.jpg', alt: 'Pets on Patio', category: 'pets' },
  { src: '/images/Pets/Pet9.jpg', alt: 'Four-Legged Guests', category: 'pets' },
  { src: '/images/Pets/Pet10.jpg', alt: 'Pet-Friendly Atmosphere', category: 'pets' },
  { src: '/images/Pets/Pet11.jpg', alt: 'Dogs Enjoying', category: 'pets' },
  { src: '/images/Pets/Pet12.jpg', alt: 'Pet Companions', category: 'pets' },

  // Interior (4 images)
  { src: '/images/Interior/Inside1.jpg', alt: 'Interior Atmosphere', category: 'interior' },
  { src: '/images/Interior/Inside2.jpg', alt: 'Tavern Interior', category: 'interior' },
  { src: '/images/Interior/Inside3.jpg', alt: 'Inside the Tavern', category: 'interior' },
  { src: '/images/Interior/Inside4.jpg', alt: 'Interior Design', category: 'interior' },

  // Patio (6 images)
  { src: '/images/Patio/Patio1.jpg', alt: 'Patio Dining', category: 'patio' },
  { src: '/images/Patio/Patio2.jpg', alt: 'Outdoor Seating', category: 'patio' },
  { src: '/images/Patio/Patio3.jpg', alt: 'Patio Experience', category: 'patio' },
  { src: '/images/Patio/Patio4.jpg', alt: 'Outdoor Dining', category: 'patio' },
  { src: '/images/Patio/Patio5.jpg', alt: 'Patio Atmosphere', category: 'patio' },
  { src: '/images/Patio/Patio6.jpg', alt: 'Al Fresco Dining', category: 'patio' },
];

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Shuffle function using Fisher-Yates algorithm
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Memoize shuffled images to prevent re-shuffling on every render
  const shuffledImages = useMemo(() => shuffleArray(galleryImages), []);

  const filteredImages = filter === 'all'
    ? shuffledImages
    : galleryImages.filter(img => img.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <main ref={sectionRef} className="min-h-screen bg-bg-primary pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? 'scroll-reveal' : ''}`}>
          <div className="inline-block px-6 py-2 bg-accent-primary text-white text-xs tracking-[0.3em] mb-6 font-bold rounded-lg">
            VISUAL EXPERIENCE
          </div>
          <h1 className="font-display text-4xl md:text-6xl tracking-tight mb-6 font-black text-white">
            GALLERY
          </h1>
          <div className="w-32 h-1 bg-accent-primary mx-auto mb-6"></div>
          <p className="text-text-secondary text-base md:text-lg tracking-wide font-medium max-w-2xl mx-auto">
            A Glimpse Into The Bear Street Tavern Experience
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex justify-center gap-4 mb-12 flex-wrap ${isVisible ? 'scroll-reveal scroll-reveal-delay-1' : ''}`}>
          {['all', 'food', 'drinks', 'pets', 'interior', 'patio'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 font-bold text-sm tracking-wider transition-all border-2 rounded-lg ${
                filter === category
                  ? 'bg-accent-primary text-white border-accent-primary'
                  : 'bg-black text-white border-border-subtle hover:border-accent-primary/50'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mobile: Horizontal Scroll Gallery */}
        <div className={`md:hidden mb-16 ${isVisible ? 'scroll-reveal scroll-reveal-delay-2' : ''}`}>
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-4 pb-4">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image.src)}
                  className="relative w-48 h-48 flex-shrink-0 overflow-hidden cursor-pointer bg-bg-secondary rounded-[3rem] shadow-lg active:scale-95 transition-transform"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-text-muted mt-2">
            Swipe para ver más →
          </p>
        </div>

        {/* Desktop: Gallery Grid */}
        <div className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 ${isVisible ? 'scroll-reveal scroll-reveal-delay-2' : ''}`}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="group relative aspect-square overflow-hidden cursor-pointer bg-bg-secondary rounded-[3rem] shadow-lg hover:shadow-2xl hover:border hover:border-accent-primary/30 transition-all"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m0 0v6m0-6h6m-6 0H4"></path>
                  </svg>
                  <p className="text-sm tracking-wider font-bold">VIEW</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-accent-primary transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="relative max-w-6xl w-full h-[80vh]">
              <Image
                src={selectedImage}
                alt="Gallery Image"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-[3rem]"
              />
            </div>
          </div>
        )}

        {/* Instagram CTA */}
        <div className={`bg-bg-secondary text-white p-8 rounded-[3rem] text-center border border-border-subtle ${isVisible ? 'scroll-reveal scroll-reveal-delay-3' : ''}`}>
          <h2 className="font-display text-2xl md:text-4xl tracking-tight mb-6 font-black">
            SHARE YOUR MOMENTS
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto mb-8"></div>
          <p className="text-text-secondary text-base mb-8 max-w-2xl mx-auto">
            Tag us @bearstreettavern in your photos and we'll feature them here!
          </p>
          <a
            href="https://instagram.com/bearstreettavern"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-primary text-white hover:bg-accent-secondary px-8 py-3 font-bold text-sm tracking-[0.3em] transition-all border-2 border-accent-primary hover:scale-105 rounded-lg"
          >
            FOLLOW US ON INSTAGRAM
          </a>
        </div>

        {/* Back to Home */}
        <div className={`text-center mt-16 ${isVisible ? 'scroll-reveal' : ''}`}>
          <Link
            href="/"
            className="inline-block bg-accent-primary text-white hover:bg-accent-secondary px-8 py-3 font-bold text-sm tracking-[0.3em] transition-all border-2 border-accent-primary rounded-lg"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
