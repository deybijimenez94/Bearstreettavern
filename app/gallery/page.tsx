'use client';

import { useState, useMemo } from 'react';
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

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

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

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-warm-brown text-white text-xs tracking-[0.3em] mb-6 font-bold">
            VISUAL EXPERIENCE
          </div>
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-charcoal">
            GALLERY
          </h1>
          <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
          <p className="text-charcoal/70 text-xl tracking-wide font-medium max-w-2xl mx-auto">
            A Glimpse Into The Bear Street Tavern Experience
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'food', 'drinks', 'pets', 'interior', 'patio'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 font-bold text-sm tracking-wider transition-all border-2 ${
                filter === category
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black/20 hover:border-black'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="group relative aspect-square overflow-hidden cursor-pointer bg-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all"
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
              className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors"
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
                className="rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Instagram CTA */}
        <div className="bg-black text-white p-12 rounded-lg text-center">
          <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-6 font-black">
            SHARE YOUR MOMENTS
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Tag us @bearstreettavern in your photos and we'll feature them here!
          </p>
          <a
            href="https://instagram.com/bearstreettavern"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black hover:bg-white/90 px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-white hover:scale-105"
          >
            FOLLOW US ON INSTAGRAM
          </a>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-block bg-black text-white hover:bg-black/80 px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-black"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
