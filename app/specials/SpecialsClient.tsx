'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';

export default function SpecialsClient() {
  const { t } = useLanguage();

  const specials = [
    {
      src: '/images/especiales/Sunday.jpg',
      alt: 'Sunday Special',
      day: 'specials.sunday',
      time: 'specials.time.evening',
      deals: ['specials.deal.steins', 'specials.deal.hiBalls']
    },
    {
      src: '/images/especiales/Monday.jpg',
      alt: 'Monday Special',
      day: 'specials.monday',
      time: 'specials.time.evening',
      deals: ['specials.deal.pizzaOff']
    },
    {
      src: '/images/especiales/Tuesday.jpg',
      alt: 'Tuesday Special',
      day: 'specials.tuesday',
      time: 'specials.time.allDay',
      deals: ['specials.deal.calzones', 'specials.deal.hiBalls']
    },
    {
      src: '/images/especiales/Wednesday+Thursday.jpg',
      alt: 'Wednesday & Thursday Special',
      day: 'specials.wednesday',
      time: 'specials.time.allDay',
      deals: ['specials.deal.margaritas']
    }
  ];

  return (
    <main className="min-h-screen bg-bg-primary pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <AnimatedSection animationType="fade-up">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-black border border-white/20 text-white text-xs tracking-[0.3em] mb-6 font-bold">
              {t('specials.hero.tag')}
            </div>
            <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-white">
              {t('specials.hero.title')}
            </h1>
            <div className="w-32 h-1 bg-accent-primary mx-auto mb-6"></div>
            <div className="max-w-3xl mx-auto">
              <p className="text-white text-lg tracking-wide font-medium mb-4">
                {t('specials.hero.text1')}
              </p>
              <p className="text-text-secondary text-base tracking-wide">
                {t('specials.hero.text2')}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Specials Grid - Elegant Horizontal Layout */}
        <AnimatedSection animationType="fade-up" delay={1}>
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {specials.map((special, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 bg-bg-secondary border border-white/10"
                >
                  {/* Image Section - Full visibility, no overlays */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={special.src}
                      alt={special.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Section - Clean separation */}
                  <div className="p-6 bg-bg-secondary">
                    {/* Day Header */}
                    <div className="text-center mb-4">
                      <h2 className="font-display text-3xl tracking-tight font-black text-white mb-2">
                        {t(special.day)}
                      </h2>
                      <div className="w-12 h-1 bg-accent-primary mx-auto mb-3"></div>
                      <div className="inline-block px-4 py-1.5 bg-accent-primary/20 border border-accent-primary/30 rounded-full">
                        <p className="text-xs text-accent-primary font-bold tracking-wider uppercase">
                          {t(special.time)}
                        </p>
                      </div>
                    </div>

                    {/* Deals */}
                    <div className="space-y-3 mt-5">
                      {special.deals.map((deal, i) => (
                        <div
                          key={i}
                          className="bg-black border border-white/20 text-white px-4 py-3.5 font-bold text-center text-sm tracking-[0.15em] rounded-md hover:bg-accent-primary hover:text-black hover:border-accent-primary transition-colors"
                        >
                          {t(deal)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Important Notice */}
        <AnimatedSection animationType="fade-up" delay={2}>
          <div className="max-w-4xl mx-auto bg-black border border-white/20 text-white p-10 rounded-lg text-center mb-16">
            <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4 font-bold">
              {t('specials.info.title')}
            </h2>
            <div className="w-24 h-1 bg-accent-primary mx-auto mb-6"></div>
            <ul className="text-white/90 text-left max-w-2xl mx-auto space-y-3">
              <li className="flex items-start">
                <span className="text-accent-primary mr-3">•</span>
                <span>{t('specials.info.dineIn')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-primary mr-3">•</span>
                <span>{t('specials.info.holidays')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-primary mr-3">•</span>
                <span>{t('specials.info.select')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-primary mr-3">•</span>
                <span>{t('specials.info.sundayMonday')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-primary mr-3">•</span>
                <span>{t('specials.info.tuesdayThursday')}</span>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fade-up" delay={3}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="bg-bg-secondary border border-white/10 p-12 rounded-lg">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-black text-white">
                {t('specials.cta.title')}
              </h2>
              <div className="w-24 h-1 bg-accent-primary mx-auto mb-6"></div>
              <p className="text-text-secondary text-lg mb-8">
                {t('specials.cta.text')}
              </p>
              <Link
                href="/reservations"
                className="inline-block bg-accent-primary text-black hover:bg-accent-secondary px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border border-accent-primary hover:scale-105"
              >
                {t('specials.cta.bookNow')}
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Back to Home */}
        <AnimatedSection animationType="fade-up">
          <div className="text-center">
            <Link
              href="/"
              className="inline-block bg-white text-black hover:bg-black hover:text-white border border-black hover:border-white px-6 py-2 font-bold text-xs tracking-[0.2em] transition-all"
            >
              ← {t('specials.cta.backHome')}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
