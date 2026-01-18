'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pizzaSlide, setPizzaSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const specialsImages = [
    { src: '/images/especiales/Monday.jpg', alt: 'Monday Special' },
    { src: '/images/especiales/Sunday.jpg', alt: 'Sunday Special' },
    { src: '/images/especiales/Tuesday.jpg', alt: 'Tuesday Special' },
    { src: '/images/especiales/Wednesday+Thursday.jpg', alt: 'Wednesday & Thursday Special' }
  ];

  const pizzas = [
    { img: '/images/Food/Food1.jpg', name: 'THE GODFATHER', desc: 'Italian sausage, prosciutto, confit garlic, truffle oil', price: '$24.99', badge: 'AWARD-WINNING' },
    { img: '/images/Food/BigBird.jpg', name: 'BIG BIRD', desc: 'Spinach, bacon, red onion, goat cheese, pesto chicken', price: '$23.99', badge: 'POPULAR' },
    { img: '/images/Food/Food3.jpg', name: 'MARGARITA', desc: 'Italian sauce, four cheese, fresh basil, sea salt', price: '$19.99', badge: 'VEGETARIAN' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Touch handlers for pizza carousel
  const handlePizzaTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handlePizzaTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handlePizzaTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left - next slide
      setPizzaSlide((prev) => (prev + 1) % pizzas.length);
    }
    if (touchStart - touchEnd < -75) {
      // Swiped right - previous slide
      setPizzaSlide((prev) => (prev - 1 + pizzas.length) % pizzas.length);
    }
  };

  // Touch handlers for highlights carousel
  const handleHighlightsTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleHighlightsTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleHighlightsTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left - next slide
      setCurrentSlide((prev) => (prev + 1) % 3);
    }
    if (touchStart - touchEnd < -75) {
      // Swiped right - previous slide
      setCurrentSlide((prev) => (prev - 1 + 3) % 3);
    }
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section - Full Screen with Minimal Design */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/2019_BearStreetTavern_ScenicDining_PaulZizka.jpg"
            alt="Bear Street Tavern Interior"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            className="opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Main Headline */}
          <p className="text-white/70 text-sm md:text-base tracking-[0.3em] mb-6 animate-fade-in font-medium">
            BANFF, ALBERTA
          </p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-4 md:mb-6 tracking-[0.1em] md:tracking-[0.15em] animate-fade-in-up font-black">
            BEAR STREET
          </h1>
          <div className="w-24 md:w-32 h-0.5 bg-white/70 mx-auto mb-4 md:mb-6 animate-fade-in animation-delay-200"></div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-6xl text-white/95 mb-8 md:mb-12 animate-fade-in-up animation-delay-200 font-light tracking-widest">
            TAVERN
          </h2>

          {/* Badge */}
          <div className="inline-block mb-16 md:mb-20 animate-fade-in animation-delay-400">
            <div className="border-2 border-white/50 px-6 md:px-10 py-3 md:py-4 bg-white/5 backdrop-blur-sm">
              <p className="text-white font-bold text-xs md:text-sm tracking-[0.25em] md:tracking-[0.35em]">
                AS SEEN ON "YOU GOTTA EAT HERE"
              </p>
            </div>
          </div>

        </div>
        {/* Angled transition to white - moved up to avoid covering text */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ zIndex: 1, transform: 'translateY(1px)' }}>
          <svg className="w-full h-20 md:h-28" preserveAspectRatio="none" viewBox="0 0 1440 100" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100L1440 100L1440 0C960 60 480 60 0 0L0 100Z" />
          </svg>
        </div>
      </section>

      {/* Featured Pizzas Section */}
      <section className="py-12 md:py-24 bg-black relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-20">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-3 md:mb-6 tracking-tight font-black">
              SIGNATURE PIZZAS
            </h2>
            <p className="text-white/60 text-sm md:text-base tracking-wide font-medium">Oven-Baked Perfection</p>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {pizzas.map((pizza, idx) => (
              <div key={idx} className="group border border-white/10 hover:border-white/30 transition-all bg-black overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={pizza.img}
                    alt={pizza.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 text-xs tracking-wider font-bold">{pizza.badge}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-3 tracking-wider">{pizza.name}</h3>
                  <div className="w-16 h-0.5 bg-white/30 mb-4"></div>
                  <p className="text-white/60 mb-6 tracking-wide leading-relaxed text-sm">
                    {pizza.desc}
                  </p>
                  <p className="text-white font-bold text-xl tracking-wider">{pizza.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden mb-8">
            <div
              className="relative overflow-hidden"
              onTouchStart={handlePizzaTouchStart}
              onTouchMove={handlePizzaTouchMove}
              onTouchEnd={handlePizzaTouchEnd}
            >
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${pizzaSlide * 100}%)` }}>
                {pizzas.map((pizza, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2">
                    <div className="border border-white/20 bg-black rounded-lg overflow-hidden">
                      <div className="relative h-80">
                        <Image
                          src={pizza.img}
                          alt={pizza.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 text-xs tracking-wider font-bold">{pizza.badge}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-xl text-white mb-2 tracking-wider">{pizza.name}</h3>
                        <div className="w-12 h-0.5 bg-white/30 mb-3"></div>
                        <p className="text-white/60 mb-4 tracking-wide text-xs leading-relaxed">
                          {pizza.desc}
                        </p>
                        <p className="text-white font-bold text-lg tracking-wider">{pizza.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {pizzas.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPizzaSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === pizzaSlide ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to pizza ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-block bg-white text-black hover:bg-white/90 px-10 md:px-12 py-4 md:py-5 font-bold text-sm tracking-[0.3em] transition-all border-2 border-white"
            >
              FULL MENU
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 md:mb-6 font-black text-charcoal">
              WHAT MAKES US SPECIAL
            </h2>
            <div className="w-24 h-1 bg-warm-brown mx-auto"></div>
          </div>

          {/* Desktop: Grid - Mobile: Carousel */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Highlight 1 - Pet Friendly */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/Pets/Pet1.jpg"
                  alt="Dog-friendly patio"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-white p-8 text-center">
                <h3 className="font-display text-2xl tracking-tight mb-3 font-bold text-charcoal">
                  100% PET-FRIENDLY
                </h3>
                <div className="w-16 h-1 bg-warm-brown mx-auto mb-5"></div>
                <p className="text-black/80 leading-relaxed text-sm">
                  Year-round heated patio with cozy firepits. We have a <strong>special menu for dogs and dog-friendly beer</strong> so your furry friends can enjoy the experience too!
                </p>
              </div>
            </div>

            {/* Highlight 2 - Craft Beers */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/Drinks/Drink1.jpg"
                  alt="Craft Beers"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-white p-8 text-center">
                <h3 className="font-display text-2xl tracking-tight mb-3 font-bold text-charcoal">
                  CRAFT BEERS & DRINKS
                </h3>
                <div className="w-16 h-1 bg-warm-brown mx-auto mb-5"></div>
                <p className="text-black/80 leading-relaxed text-sm">
                  Featuring <strong>exclusive brews from Three Bears Brewery</strong> and a full selection of craft beers, cocktails, and beverages to complement your meal.
                </p>
              </div>
            </div>

            {/* Highlight 3 - Especiales */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-80 overflow-hidden">
                {specialsImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
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
              <div className="bg-white p-8 text-center">
                <h3 className="font-display text-2xl tracking-tight mb-3 font-bold text-charcoal">
                  ESPECIALES DE LOCURA
                </h3>
                <div className="w-16 h-1 bg-warm-brown mx-auto mb-5"></div>
                <p className="text-black/80 leading-relaxed text-sm mb-6">
                  <strong className="text-2xl block mb-2 text-warm-brown">50% OFF</strong>
                  Select pizzas every Sunday and Monday from 5pm
                </p>
                <Link
                  href="/specials"
                  className="inline-block bg-black text-white hover:bg-black/90 px-8 py-3 font-bold text-xs tracking-wider transition-all rounded"
                >
                  VIEW SPECIALS
                </Link>
                <div className="flex justify-center gap-2 mt-5">
                  {specialsImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? 'bg-warm-brown w-8' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Compact Carousel */}
          <div className="md:hidden">
            <div
              className="relative overflow-hidden"
              onTouchStart={handleHighlightsTouchStart}
              onTouchMove={handleHighlightsTouchMove}
              onTouchEnd={handleHighlightsTouchEnd}
            >
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {[
                  { img: '/images/Pets/Pet1.jpg', title: '100% PET-FRIENDLY', desc: 'Year-round heated patio with special menu for dogs!' },
                  { img: '/images/Drinks/Drink1.jpg', title: 'CRAFT BEERS & DRINKS', desc: 'Exclusive brews from Three Bears Brewery' },
                  { img: '/images/especiales/Monday.jpg', title: 'ESPECIALES DE LOCURA', desc: '50% OFF select pizzas Sun & Mon from 5pm' }
                ].map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative h-64">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="font-display text-lg tracking-tight mb-2 font-bold text-charcoal">
                          {item.title}
                        </h3>
                        <p className="text-black/70 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-warm-brown w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 md:py-24 bg-black relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 tracking-tight font-black">
              SHARE YOUR MOMENTS
            </h2>
            <p className="text-white/60 text-xs md:text-sm lg:text-base tracking-wide font-medium">Tag us @bearstreettavern in your photos</p>
          </div>

          {/* Marquee Gallery */}
          <div className="relative w-full overflow-hidden mb-12 marquee-container">
            <div className="flex w-max animate-marquee">
              {[...Array(2)].map((_, duplicateIndex) => (
                [
                  // Pets
                  { src: '/images/Pets/Pet1.jpg', alt: 'Dog-Friendly Patio' },
                  { src: '/images/Pets/Pet2.jpg', alt: 'Pets Welcome' },
                  { src: '/images/Pets/Pet3.jpg', alt: 'Pet-Friendly Dining' },
                  { src: '/images/Pets/Pet4.jpg', alt: 'Dogs at Tavern' },
                  { src: '/images/Pets/Pet5.jpg', alt: 'Furry Friends' },
                  { src: '/images/Pets/Pet6.jpg', alt: 'Pet Experience' },

                  // Interior
                  { src: '/images/Interior/Inside1.jpg', alt: 'Interior Atmosphere' },
                  { src: '/images/Interior/Inside2.jpg', alt: 'Tavern Interior' },
                  { src: '/images/Interior/Inside3.jpg', alt: 'Inside the Tavern' },
                  { src: '/images/Interior/Inside4.jpg', alt: 'Interior Design' },

                  // Patio
                  { src: '/images/Patio/Patio1.jpg', alt: 'Patio Dining' },
                  { src: '/images/Patio/Patio2.jpg', alt: 'Outdoor Seating' },
                  { src: '/images/Patio/Patio3.jpg', alt: 'Patio Experience' },
                  { src: '/images/Patio/Patio4.jpg', alt: 'Outdoor Dining' }
                ].map((image, imageIndex) => (
                  <Link
                    key={`${duplicateIndex}-${imageIndex}`}
                    href="/gallery"
                    className="w-[300px] h-[300px] mx-3 flex-shrink-0 relative overflow-hidden border border-white/10 hover:border-white/30 transition-all group cursor-pointer"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-125 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-5xl font-light">+</span>
                    </div>
                  </Link>
                ))
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://instagram.com/bearstreettavern"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black hover:bg-white/90 px-12 py-5 font-bold text-sm tracking-[0.3em] transition-all border-2 border-white"
            >
              FOLLOW US
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 md:mb-6 font-black text-charcoal">
                OUR STORY
              </h2>
              <div className="w-24 h-1 bg-warm-brown mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-black text-base leading-relaxed mb-4">
                  Nestled in the heart of Banff on Bear Street, we're proud to serve what locals and visitors alike call <span className="font-bold">"Banff's Best Pizza"</span> — featured on the hit TV show <span className="font-bold">"You Gotta Eat Here."</span>
                </p>
                <p className="text-black text-base leading-relaxed">
                  Our tavern combines premium oven-baked pizzas, <span className="font-bold">craft beers from Three Bears Brewery</span>, and genuine mountain hospitality in a welcoming atmosphere.
                </p>
              </div>
              <div>
                <p className="text-black text-base leading-relaxed mb-4">
                  <span className="font-bold">We're proudly pet-friendly!</span> Bring your furry friends to our year-round heated patio with cozy firepits. We even have a <span className="font-bold">special menu for dogs and dog-friendly beer</span> so your four-legged companions can enjoy the experience too.
                </p>
                <p className="text-black text-base leading-relaxed">
                  Part of the renowned <span className="font-bold">Banff Hospitality Collective</span>, we're committed to quality, community, and creating memories that last in the heart of the Rockies.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/about"
                className="inline-block bg-black text-white hover:bg-black/80 px-10 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-black"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 md:mb-6 font-black text-charcoal">
              WHAT OUR GUESTS SAY
            </h2>
            <div className="w-24 h-1 bg-warm-brown mx-auto mb-6"></div>
            <p className="text-charcoal/70 text-base md:text-lg font-medium">
              Real experiences from real people
            </p>
          </div>

          <div className="relative w-full overflow-hidden marquee-container">
            <div className="flex w-max animate-marquee">
              {[...Array(2)].map((_, i) => (
                [
                  { id: 1, author: "Sarah M.", location: "Calgary, AB", stars: 5, content: "Best pizza we've had in Canada! The Godfather is absolutely incredible. A must-visit in Banff!" },
                  { id: 2, author: "Mike & Lisa T.", location: "Vancouver, BC", stars: 5, content: "Love that we can bring our dogs! The patio is beautiful and the firepits make it perfect." },
                  { id: 3, author: "Jennifer K.", location: "Toronto, ON", stars: 5, content: "Now we understand why it was on 'You Gotta Eat Here'! Amazing food, generous portions." },
                  { id: 4, author: "David R.", location: "Edmonton, AB", stars: 5, content: "The Big Bird pizza is a game changer. BBQ sauce on a pizza? Genius! Great atmosphere too." },
                  { id: 5, author: "Emily C.", location: "Golden, BC", stars: 5, content: "Came for the dog-friendly patio, stayed for the amazing pizza and local craft beer. 10/10 service!" },
                  { id: 6, author: "Mark F.", location: "New York, NY", stars: 5, content: "As a tourist, this place felt like a local secret. Cozy, friendly, and the pizza was out of this world." },
                  { id: 7, author: "Chloe W.", location: "Canmore, AB", stars: 5, content: "Monday Madness is the best deal in town. Half price pizzas that are this good? Unbeatable." },
                  { id: 8, author: "Ben S.", location: "London, UK", stars: 5, content: "We were told this was the place to go in Banff, and it did not disappoint. The hype is real." }
                ].map((testimonial) => (
                  <div key={`${i}-${testimonial.id}`} className="w-[400px] mx-4 flex-shrink-0">
                    <div className="bg-gray-50 border-2 border-gray-200 p-10 rounded-lg shadow-sm hover:shadow-xl transition-shadow relative h-full">
                      <div className="absolute top-4 left-4 text-6xl text-black/5">"</div>
                      <div className="flex mb-6 justify-center">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <span key={i} className="text-black text-2xl">★</span>
                        ))}
                      </div>
                      <p className="text-black italic mb-8 text-center leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-xl mb-3 font-bold">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <p className="font-bold text-black">{testimonial.author}</p>
                        <p className="text-sm text-black/60">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-8 md:mb-12 tracking-tight font-black">
              READY TO DINE?
            </h2>
            <Link
              href="/reservations"
              className="inline-block bg-white text-black hover:bg-white/90 px-10 md:px-16 py-4 md:py-6 font-bold text-sm md:text-lg tracking-[0.2em] md:tracking-[0.3em] transition-all border-2 border-white hover:scale-105 mb-12 md:mb-16"
            >
              BOOK YOUR TABLE
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
              <div>
                <p className="text-white/40 text-xs tracking-[0.3em] mb-2">LOCATION</p>
                <p className="tracking-wide">211 BEAR STREET</p>
                <p className="tracking-wide">BANFF, AB</p>
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-[0.3em] mb-2">PHONE</p>
                <p className="tracking-wide">403.762.2021</p>
              </div>
              <div>
                <p className="text-white/40 text-xs tracking-[0.3em] mb-2">HOURS</p>
                <p className="tracking-wide">MON-SUN: 12PM - 9PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-white text-black hover:bg-white/90 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all z-40 border-2 border-white hover:scale-110"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </main>
  );
}
