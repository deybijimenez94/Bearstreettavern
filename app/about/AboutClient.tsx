'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutClient() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <main className="min-h-screen bg-bg-primary pt-24">
      {/* Hero Section with Background */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/2019_BearStreetTavern_ScenicDining_PaulZizka.jpg"
            alt="Bear Street Tavern Interior"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            quality={100}
            className="opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-bg-primary"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto scroll-reveal">
          <div className="inline-block px-6 py-2 bg-accent-primary text-black text-xs tracking-[0.3em] mb-6 font-bold">
            {t('about.hero.tag')}
          </div>
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-white">
            {t('about.hero.title')}
          </h1>
          <div className="w-32 h-1 bg-accent-primary mx-auto mb-6"></div>
          <p className="text-white text-xl tracking-wide font-medium">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section ref={sectionRef} className="py-16 md:py-24 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className={isVisible ? 'scroll-reveal' : ''}>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 font-black text-white">
                  {t('about.welcome.title')}
                </h2>
                <div className="w-24 h-1 bg-accent-primary mb-6"></div>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  {t('about.welcome.text1')}
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  {t('about.welcome.text2')}
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {t('about.welcome.text3')}
                </p>
              </div>
              <div className={`relative h-[400px] rounded-lg overflow-hidden border border-border-subtle ${isVisible ? 'scroll-reveal scroll-reveal-delay-1' : ''}`}>
                <Image
                  src="/images/Patio/Patio3.jpg"
                  alt="Bear Street Tavern Patio"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 font-black text-white">
              {t('about.awards.title')}
            </h2>
            <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {/* You Gotta Eat Here */}
            <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-lg text-center hover:border-accent-primary/30 transition-all">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-bg-secondary">
                <Image
                  src="/images/AWARDS & RECOGNITION/YOU GOTTA EAT HERE.jpg"
                  alt="You Gotta Eat Here"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                />
              </div>
              <h3 className="font-display text-xl tracking-wider mb-3 font-bold text-white">
                {t('about.awards.youGottaEat')}
              </h3>
              <p className="text-text-secondary">
                {t('about.awards.youGottaEatDesc')}
              </p>
            </div>

            {/* Best Pizza */}
            <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-lg text-center hover:border-accent-primary/30 transition-all">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-bg-secondary">
                <Image
                  src="/images/AWARDS & RECOGNITION/RESTAURANT GURU 2019.jpg"
                  alt="Restaurant Guru 2019"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                />
              </div>
              <h3 className="font-display text-xl tracking-wider mb-3 font-bold text-white">
                {t('about.awards.restaurantGuru')}
              </h3>
              <p className="text-text-secondary">
                {t('about.awards.restaurantGuruDesc')}
              </p>
            </div>

            {/* OpenTable */}
            <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-lg text-center hover:border-accent-primary/30 transition-all">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-bg-secondary">
                <Image
                  src="/images/AWARDS & RECOGNITION/OPENTABLE 2024.jpg"
                  alt="OpenTable 2024"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                />
              </div>
              <h3 className="font-display text-xl tracking-wider mb-3 font-bold text-white">
                {t('about.awards.openTable')}
              </h3>
              <p className="text-text-secondary">
                {t('about.awards.openTableDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 font-black text-white">
              {t('about.special.title')}
            </h2>
            <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Pet Friendly */}
              <div className="flex items-start space-x-6">
                <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-accent-primary aspect-square">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/Pets/Pet1.jpg"
                      alt="Pet Friendly"
                      fill
                      sizes="80px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider mb-3 font-bold text-white">
                    {t('about.special.petFriendly')}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {t('about.special.petFriendlyDesc')}
                  </p>
                </div>
              </div>

              {/* Craft Beer */}
              <div className="flex items-start space-x-6">
                <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-accent-primary aspect-square">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/Drinks/Drink8.jpg"
                      alt="Three Bears Brewery"
                      fill
                      sizes="80px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider mb-3 font-bold text-white">
                    {t('about.special.brewery')}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {t('about.special.breweryDesc')}
                  </p>
                </div>
              </div>

              {/* Family Welcome */}
              <div className="flex items-start space-x-6">
                <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-accent-primary aspect-square">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/Patio/Patio4.jpg"
                      alt="Family Friendly"
                      fill
                      sizes="80px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider mb-3 font-bold text-white">
                    {t('about.special.familyFriendly')}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {t('about.special.familyFriendlyDesc')}
                  </p>
                </div>
              </div>

              {/* Quality */}
              <div className="flex items-start space-x-6">
                <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-accent-primary aspect-square">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/Food/Food10.jpg"
                      alt="Quality Ingredients"
                      fill
                      sizes="80px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider mb-3 font-bold text-white">
                    {t('about.special.quality')}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {t('about.special.qualityDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="w-24 h-1 bg-accent-primary mx-auto mb-8"></div>
            <p className="text-text-secondary text-xl leading-relaxed mb-6">
              {t('about.philosophy.text1')}
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              {t('about.philosophy.text2')}
            </p>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 font-black text-white">
                {t('about.visit.title')}
              </h2>
              <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Location */}
              <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-primary rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl tracking-wider font-bold text-white">
                    {t('about.visit.locationTitle')}
                  </h3>
                </div>
                <p className="text-white font-bold mb-1">{t('about.visit.address1')}</p>
                <p className="text-text-secondary mb-1">{t('about.visit.address2')}</p>
                <p className="text-text-secondary mb-4">{t('about.visit.address3')}</p>
                <p className="text-text-muted text-sm">
                  {t('about.visit.locationDesc')}
                </p>
              </div>
              {/* Hours */}
              <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-primary rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl tracking-wider font-bold text-white">
                    {t('about.visit.hoursTitle')}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-border-subtle pb-2">
                    <span className="font-bold text-white">{t('about.visit.hoursDay')}</span>
                    <span className="text-text-secondary">{t('about.visit.hoursTime')}</span>
                  </div>
                  <p className="text-text-muted text-sm mt-4">
                    <strong className="text-white">{t('about.visit.hoursNote')}</strong><br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8 font-black text-white">
              {t('about.cta.title')}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/reservations"
                className="bg-accent-primary text-black hover:bg-accent-secondary px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all hover:scale-105"
              >
                {t('about.cta.bookTable')}
              </Link>
              <Link
                href="/order-online"
                className="bg-transparent border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-black px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all hover:scale-105"
              >
                {t('about.cta.orderOnline')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-bg-secondary">
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-white text-black hover:bg-black hover:text-white border border-black hover:border-white px-6 py-2 font-bold text-xs tracking-[0.2em] transition-all"
          >
            ← {t('about.cta.backHome')}
          </Link>
        </div>
      </section>
    </main>
  );
}
