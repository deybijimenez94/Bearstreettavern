'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

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
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-warm-brown text-white text-xs tracking-[0.3em] mb-6 font-bold">
            {t('specials.hero.tag')}
          </div>
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-charcoal">
            {t('specials.hero.title')}
          </h1>
          <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-charcoal text-lg tracking-wide font-medium mb-4">
              {t('specials.hero.text1')}
            </p>
            <p className="text-charcoal/70 text-base tracking-wide">
              {t('specials.hero.text2')}
            </p>
          </div>
        </div>

        {/* Specials Grid - Elegant Horizontal Layout */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {specials.map((special, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
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
                <div className="p-6 bg-white">
                  {/* Day Header */}
                  <div className="text-center mb-4">
                    <h2 className="font-display text-3xl tracking-tight font-black text-charcoal mb-2">
                      {t(special.day)}
                    </h2>
                    <div className="w-12 h-1 bg-warm-brown mx-auto mb-3"></div>
                    <div className="inline-block px-4 py-1.5 bg-warm-brown/10 rounded-full">
                      <p className="text-xs text-warm-brown font-bold tracking-wider uppercase">
                        {t(special.time)}
                      </p>
                    </div>
                  </div>

                  {/* Deals */}
                  <div className="space-y-3 mt-5">
                    {special.deals.map((deal, i) => (
                      <div
                        key={i}
                        className="bg-black text-white px-4 py-3.5 font-bold text-center text-sm tracking-[0.15em] rounded-md hover:bg-charcoal transition-colors"
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

        {/* Important Notice */}
        <div className="max-w-4xl mx-auto bg-black text-white p-10 rounded-lg text-center mb-16">
          <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-4 font-bold">
            {t('specials.info.title')}
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <ul className="text-white/90 text-left max-w-2xl mx-auto space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>{t('specials.info.dineIn')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>{t('specials.info.holidays')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>{t('specials.info.select')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>{t('specials.info.sundayMonday')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>{t('specials.info.tuesdayThursday')}</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="bg-gray-50 border-2 border-gray-200 p-12 rounded-lg">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-black text-charcoal">
              {t('specials.cta.title')}
            </h2>
            <div className="w-24 h-1 bg-warm-brown mx-auto mb-6"></div>
            <p className="text-charcoal/70 text-lg mb-8">
              {t('specials.cta.text')}
            </p>
            <Link
              href="/reservations"
              className="inline-block bg-black text-white hover:bg-black/80 px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-black hover:scale-105"
            >
              {t('specials.cta.bookNow')}
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-black text-white hover:bg-black/80 px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-black"
          >
            {t('specials.cta.backHome')}
          </Link>
        </div>
      </div>
    </main>
  );
}
