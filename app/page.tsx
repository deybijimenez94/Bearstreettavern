'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import AwardsBadges from '@/components/AwardsBadges';
import InteractiveMenu from '@/components/InteractiveMenu';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pizzaSlide, setPizzaSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const specialsImages = [
    { src: '/images/Especiales/Monday.jpg', alt: 'Monday Special' },
    { src: '/images/Especiales/Sunday.jpg', alt: 'Sunday Special' },
    { src: '/images/Especiales/Tuesday.jpg', alt: 'Tuesday Special' },
    { src: '/images/Especiales/Wednesday+Thursday.jpg', alt: 'Wednesday & Thursday Special' }
  ];

  const pizzas = [
    { img: '/images/Food/Food1.jpg', name: 'home.pizzas.godfather', desc: 'home.pizzas.godfatherDesc', price: '$24.99', badge: 'home.pizzas.awardWinning' },
    { img: '/images/Food/BigBird.jpg', name: 'home.pizzas.bigBird', desc: 'home.pizzas.bigBirdDesc', price: '$23.99', badge: 'home.pizzas.popular' },
    { img: '/images/Food/Margarita.jpg', name: 'home.pizzas.margarita', desc: 'home.pizzas.margaritaDesc', price: '$19.99', badge: 'home.pizzas.vegetarian' }
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
    <main id="main-content" className="min-h-screen bg-black">
      {/* Hero Section - Full Screen with Minimal Design */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/2019_BearStreetTavern_ScenicDining_PaulZizka.jpg"
                      alt="Bear Street Tavern Interior"
                      fill
                      sizes="100vw"
                      style={{ objectFit: 'cover' }}
                      quality={85}
                      className="opacity-30"
                      priority
                    />
                    {/* Overlay with black/40 to transparent gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Main Headline */}
          <p className="text-white/70 text-sm md:text-base tracking-[0.3em] mb-6 animate-fade-in font-medium">
            {t('home.hero.location')}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 md:mb-6 tracking-[0.1em] md:tracking-[0.15em] animate-fade-in-up font-black">
            {t('home.hero.bearStreet')}
          </h1>
          <div className="w-24 md:w-32 h-0.5 bg-white/70 mx-auto mb-4 md:mb-6 animate-fade-in animation-delay-200"></div>
          <h2 className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-white/95 mb-8 md:mb-12 animate-fade-in-up animation-delay-200 font-medium">
            {t('home.hero.tavern')}
          </h2>

          {/* Badge */}
          <div className="inline-block mb-8 md:mb-10 animate-fade-in animation-delay-400">
            <div className="border-2 border-white/50 px-4 md:px-8 py-2 md:py-3 bg-white/5 backdrop-blur-sm">
              <p className="text-white font-bold text-xs tracking-[0.25em] md:tracking-[0.35em]">
                {t('home.hero.badge')}
              </p>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="animate-fade-in animation-delay-600">
            <Link
              href="/reservations"
              className="inline-block bg-white/10 md:bg-white text-white md:text-black hover:bg-white/20 md:hover:bg-white/90 backdrop-blur-sm px-8 md:px-12 py-4 md:py-5 font-bold text-sm md:text-base tracking-[0.25em] transition-all border-2 border-white hover:scale-105 hover:shadow-2xl"
            >
              BOOK NOW
            </Link>
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
      <AnimatedSection>
        <section className="py-12 md:py-24 bg-black relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-8 md:mb-20">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-white mb-3 md:mb-6 tracking-tight font-black">
                {t('home.pizzas.title')}
              </h2>
              <p className="text-white/60 text-sm tracking-wide font-medium">{t('home.pizzas.subtitle')}</p>
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
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={80}
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 text-xs tracking-wider font-bold">{t(pizza.badge)}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl md:text-2xl text-white mb-3 tracking-wider">{t(pizza.name)}</h3>
                    <div className="w-16 h-0.5 bg-white/30 mb-4"></div>
                    <p className="text-white/60 mb-6 tracking-wide leading-relaxed text-sm">
                      {t(pizza.desc)}
                    </p>
                    <p className="text-white font-bold text-lg tracking-wider">{pizza.price}</p>
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
                            sizes="100vw"
                            quality={80}
                            style={{ objectFit: 'cover' }}
                          />
                          <div className="absolute inset-0 bg-black/30"></div>
                          <div className="absolute top-3 left-3">
                            <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 text-xs tracking-wider font-bold">{t(pizza.badge)}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-display text-lg text-white mb-2 tracking-wider">{t(pizza.name)}</h3>
                          <div className="w-12 h-0.5 bg-white/30 mb-3"></div>
                          <p className="text-white/60 mb-4 tracking-wide text-xs leading-relaxed">
                            {t(pizza.desc)}
                          </p>
                          <p className="text-white font-bold text-base tracking-wider">{pizza.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-4" role="group" aria-label="Pizza carousel navigation">
                {pizzas.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPizzaSlide(idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowLeft' && idx > 0) setPizzaSlide(idx - 1);
                      if (e.key === 'ArrowRight' && idx < pizzas.length - 1) setPizzaSlide(idx + 1);
                    }}
                    className={`p-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${
                      idx === pizzaSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                    aria-label={`Go to pizza ${idx + 1}`}
                    aria-current={idx === pizzaSlide ? 'true' : 'false'}
                  >
                    <span className={`block rounded-full ${idx === pizzaSlide ? 'w-4 h-2' : 'w-2 h-2'}`} />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* Interactive Menu - Deployed on Same Page */}
      <InteractiveMenu />

      {/* Highlights Section */}
      <AnimatedSection>
        <section className="py-12 md:py-24 bg-bg-primary relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 md:mb-6 font-black text-white">
                {t('home.highlights.title')}
              </h2>
              <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
            </div>

            {/* Desktop: Grid - Mobile: Carousel */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Highlight 1 - Pet Friendly */}
              <AnimatedSection animationType="fade-left">
                <div className="group relative overflow-hidden border border-border-subtle hover:border-accent-primary/30 transition-all">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="/images/Pets/Pet1.jpg"
                      alt="Dog-friendly patio"
                      fill
                      quality={80}
                      loading="lazy"
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
                  </div>
                  <div className="bg-black p-8 text-center">
                    <h3 className="font-display text-2xl tracking-tight mb-3 font-bold text-white">
                      {t('home.highlights.petFriendly')}
                    </h3>
                    <div className="w-16 h-1 bg-accent-primary mx-auto mb-5"></div>
                    <p className="text-text-secondary leading-relaxed text-sm">
                      {t('home.highlights.petFriendlyDesc')}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Highlight 2 - Craft Beers */}
              <AnimatedSection>
                <div className="group relative overflow-hidden border border-border-subtle hover:border-accent-primary/30 transition-all">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src="/images/Drinks/Drink7.jpg"
                      alt="Craft Beers"
                      fill
                      quality={80}
                      loading="lazy"
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
                  </div>
                  <div className="bg-black p-8 text-center">
                    <h3 className="font-display text-2xl tracking-tight mb-3 font-bold text-white">
                      {t('home.highlights.craftBeers')}
                    </h3>
                    <div className="w-16 h-1 bg-accent-primary mx-auto mb-5"></div>
                    <p className="text-text-secondary leading-relaxed text-sm">
                      {t('home.highlights.craftBeersDesc')}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Highlight 3 - Crazy Specials */}
              <AnimatedSection animationType="fade-right">
                <div className="group relative overflow-hidden border border-border-subtle hover:border-accent-primary/30 transition-all">
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
                          sizes="(max-width: 768px) 100vw, 33vw"
                          quality={80}
                          loading="lazy"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
                  </div>
                  <div className="bg-black p-6 text-center">
                    <h3 className="font-display text-2xl tracking-tight mb-3 font-bold text-white">
                      {t('home.highlights.crazySpecials')}
                    </h3>
                    <div className="w-16 h-1 bg-accent-primary mx-auto mb-4"></div>
                    <p className="text-text-secondary leading-relaxed text-sm mb-4">
                      {t('home.highlights.crazySpecialsDesc')}
                    </p>
                    <Link
                      href="/specials"
                      className="inline-block bg-accent-primary text-black hover:bg-accent-secondary px-6 py-2 font-bold text-xs tracking-wider transition-all"
                    >
                      {t('home.highlights.viewSpecials')}
                    </Link>
                    <div className="flex justify-center gap-2 mt-3">
                      {specialsImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            index === currentSlide ? 'bg-accent-primary w-6' : 'bg-white/30'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
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
                              { img: '/images/Pets/Pet1.jpg', title: 'home.highlights.petFriendly', desc: 'home.highlights.petFriendlyDesc' },
                              { img: '/images/Drinks/Drink1.jpg', title: 'home.highlights.craftBeers', desc: 'home.highlights.craftBeersDesc' },
                              { img: '/images/Especiales/Monday.jpg', title: 'home.highlights.crazySpecials', desc: 'home.highlights.crazySpecialsDesc' }
                            ].map((item, index) => (
                              <div key={index} className="w-full flex-shrink-0 px-2">
                                <div className="bg-black border border-border-subtle overflow-hidden">
                                  <div className="relative h-64">
                                    <Image
                                      src={item.img}
                                      alt={item.title}
                                      fill
                                      sizes="100vw"
                                      quality={80}
                                      loading="lazy"
                                      style={{ objectFit: 'cover' }}
                                    />
                                    <div className="absolute inset-0 bg-black/60"></div>
                                  </div>
                                  <div className="p-6 text-center">
                                    <h3 className="font-display text-lg tracking-tight mb-2 font-bold text-white">
                                      {t(item.title)}
                                    </h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">{t(item.desc)}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>              <div className="flex justify-center gap-2 mt-4">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-accent-primary w-8' : 'bg-white/30'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Instagram Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-black relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 tracking-tight font-black">
                {t('home.instagram.title')}
              </h2>
              <p className="text-white/60 text-xs md:text-sm lg:text-base tracking-wide font-medium">{t('home.instagram.subtitle')}</p>
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
                        sizes="300px"
                        quality={75}
                        loading="lazy"
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
                className="inline-block bg-white/10 md:bg-white text-white md:text-black hover:bg-white/20 md:hover:bg-white/90 backdrop-blur-sm px-12 py-5 font-bold text-sm tracking-[0.3em] transition-all border-2 border-white"
              >
                {t('home.instagram.followUs')}
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-bg-secondary relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 md:mb-6 font-black text-white">
                  {t('home.about.title')}
                </h2>
                <div className="w-24 h-1 bg-accent-primary mx-auto mb-6"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <AnimatedSection animationType="fade-right">
                  <div>
                    <p className="text-text-secondary text-base leading-relaxed mb-4">
                      {t('home.about.text1')}
                    </p>
                    <p className="text-text-secondary text-base leading-relaxed">
                      {t('home.about.text2')}
                    </p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animationType="fade-left">
                  <div>
                    <p className="text-text-secondary text-base leading-relaxed mb-4">
                      {t('home.about.text3')}
                    </p>
                    <p className="text-text-secondary text-base leading-relaxed">
                      {t('home.about.text4')}
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              <div className="text-center">
                <Link
                  href="/about"
                  className="inline-block bg-accent-primary text-black hover:bg-accent-secondary px-10 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-accent-primary"
                >
                  {t('home.about.learnMore')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-white relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 md:mb-6 font-black text-black">
                WHAT OUR GUESTS SAY
              </h2>
              <div className="w-24 h-1 bg-accent-primary mx-auto mb-6"></div>
              <p className="text-gray-700 text-base md:text-lg font-medium">
                Real reviews from TripAdvisor
              </p>
            </div>

            <div className="relative w-full overflow-hidden marquee-container">
              <div className="flex w-max animate-marquee">
                {[...Array(2)].map((_, i) => (
                  [
                    { id: 1, author: "TravelBug2023", location: "Toronto, Canada", stars: 5, content: "Best pizza in Banff! The Godfather pizza was incredible - truffle oil, prosciutto, amazing flavors. Staff were super friendly. Dog-friendly patio is a huge plus!" },
                    { id: 2, author: "MountainLover88", location: "Seattle, USA", stars: 5, content: "Came here based on the 'You Gotta Eat Here' episode and it lived up to the hype! Great atmosphere, fantastic beer selection from Three Bears Brewery. Will definitely return!" },
                    { id: 3, author: "FoodieAdventures", location: "Vancouver, Canada", stars: 5, content: "The Big Bird pizza is outstanding - maple syrup on pizza works surprisingly well! Service was excellent, portions are generous. One of our favorite meals in Banff." },
                    { id: 4, author: "BanffVisitor2024", location: "Calgary, Canada", stars: 5, content: "Perfect spot after a day of skiing. Love that they have gluten-free and vegan options. The heated patio is beautiful year-round. Highly recommend!" },
                    { id: 5, author: "PizzaEnthusiast", location: "London, UK", stars: 5, content: "As pizza lovers traveling through Canada, this place blew us away. Fresh ingredients, creative combinations, and the crust is perfection. Don't miss it!" },
                    { id: 6, author: "LocalExplorer", location: "Canmore, Canada", stars: 5, content: "Monday Madness is the best deal! Half price personal pizzas that taste amazing. Great local vibe, friendly staff. Our go-to spot in Banff." },
                    { id: 7, author: "HappyTraveler", location: "Denver, USA", stars: 5, content: "Stumbled upon this gem and so glad we did! The Caesar salad and Bison pizza were phenomenal. Dog-friendly patio made it perfect for our pup too!" },
                    { id: 8, author: "CanadianFoodie", location: "Edmonton, Canada", stars: 5, content: "Been coming here for years and it never disappoints. Consistent quality, great atmosphere, and the staff actually remember regulars. Banff institution!" }
                  ].map((testimonial) => (
                    <div key={`${i}-${testimonial.id}`} className="w-[400px] mx-4 flex-shrink-0">
                      <div className="bg-white border-2 border-gray-200 p-10 rounded-lg hover:border-accent-primary transition-all relative h-full shadow-lg">
                        <div className="absolute top-4 left-4 text-6xl text-black/5">"</div>
                        <div className="flex mb-6 justify-center">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <span key={i} className="text-accent-primary text-2xl">★</span>
                          ))}
                        </div>
                        <p className="text-gray-800 italic mb-8 text-center leading-relaxed">"{testimonial.content}"</p>
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-lg bg-accent-primary text-black flex items-center justify-center text-xl mb-3 font-bold">
                            {testimonial.author.substring(0, 2).toUpperCase()}
                          </div>
                          <p className="font-bold text-black">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.location}</p>
                          <p className="text-xs text-gray-400 mt-2">via TripAdvisor</p>
                        </div>
                      </div>
                    </div>
                  ))
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Awards and Badges */}
      <AnimatedSection>
        <AwardsBadges />
        <div className="text-center py-16">
          <Link
              href="/reservations"
              className="inline-block bg-white/10 md:bg-white text-white md:text-black hover:bg-white/20 md:hover:bg-white/90 backdrop-blur-sm px-10 md:px-16 py-4 md:py-6 font-bold text-sm md:text-lg tracking-[0.2em] md:tracking-[0.3em] transition-all border-2 border-white hover:scale-105"
          >
              {t('home.cta.bookTable')}
          </Link>
        </div>
      </AnimatedSection>

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