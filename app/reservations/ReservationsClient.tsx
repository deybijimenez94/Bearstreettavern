'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ReservationsClient() {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Show modal automatically when page loads
    setShowModal(true);
  }, []);

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
    <>
      {/* Modal Overlay */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-gradient-to-r from-bg-secondary to-bg-primary border-4 border-accent-primary rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="reservation-modal-title"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-4 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-accent-primary rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow text-center md:text-left">
                  <h2 id="reservation-modal-title" className="font-display text-xl md:text-3xl tracking-tight mb-3 font-black text-white">
                    {t('reservations.notice.title')}
                  </h2>
                  <p className="text-text-secondary text-sm md:text-lg leading-relaxed mb-4">
                    {t('reservations.notice.text1')}
                  </p>
                  <p className="text-text-secondary text-sm md:text-lg leading-relaxed mb-4">
                    {t('reservations.notice.text2')}
                  </p>
                  <p className="text-sm text-text-muted mt-2">
                    <strong className="text-accent-primary">💡 Reserve ahead:</strong> Use the OpenTable button below or call us at{' '}
                    <a href="tel:4037622021" className="text-accent-primary hover:text-accent-secondary font-bold underline">
                      403.762.2021
                    </a>
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t-2 border-accent-primary/30">
                <div className="grid md:grid-cols-3 gap-4 text-center md:text-left">
                  <div>
                    <p className="text-sm text-text-secondary">
                      <span className="font-bold text-accent-primary">⭐ Pro Tip:</span> Book 2-3 days ahead during summer
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">
                      <span className="font-bold text-accent-primary">🍕 Daily Specials:</span> Available for dine-in reservations
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">
                      <span className="font-bold text-accent-primary">🐕 Pet-Friendly:</span> Mention when booking for patio
                    </p>
                  </div>
                </div>
              </div>

              {/* Close Button at bottom */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-accent-primary text-white hover:bg-accent-secondary px-8 py-3 font-bold text-sm tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 rounded-lg"
                >
                  {t('reservations.notice.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reservations Page Content */}
      <main ref={sectionRef} id="main-content" className="min-h-screen bg-bg-primary pt-24">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          {/* Header */}
          <div className={`text-center mb-12 ${isVisible ? 'scroll-reveal' : ''}`}>
            <div className="inline-block px-6 py-2 bg-accent-primary text-white text-xs tracking-[0.3em] mb-6 font-bold rounded-lg">
              {t('reservations.hero.tag')}
            </div>
            <h1 className="font-display text-3xl md:text-6xl tracking-tight mb-6 font-black text-white">
              {t('reservations.hero.title')}
            </h1>
            <div className="w-32 h-1 bg-accent-primary mx-auto mb-6"></div>
            <p className="text-text-secondary text-sm md:text-lg tracking-wide font-medium max-w-2xl mx-auto px-4">
              {t('reservations.hero.text')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            {/* OpenTable Integration */}
            <section className={`bg-bg-secondary text-white p-4 md:p-10 rounded-[3rem] text-center border border-border-subtle ${isVisible ? 'scroll-reveal scroll-reveal-delay-1' : ''}`}>
              <h2 className="font-display text-xl md:text-3xl tracking-tight mb-4 md:mb-6 font-black">
                {t('reservations.hero.subtitle')}
              </h2>
              <div className="w-24 h-1 bg-accent-primary mx-auto mb-6 md:mb-8"></div>
              <p className="text-text-secondary mb-6 md:mb-8 text-sm md:text-lg">
                Reserve your table instantly through OpenTable
              </p>
              <a
                href="https://www.opentable.com/r/bear-street-tavern-banff"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-primary text-white hover:bg-accent-secondary px-6 md:px-10 py-3 md:py-4 font-bold text-xs md:text-sm tracking-wider md:tracking-[0.3em] transition-all border-2 border-accent-primary hover:scale-105 rounded-lg"
              >
                {t('reservations.cta.button')}
              </a>
              <p className="text-text-muted text-xs md:text-sm mt-4 md:mt-6">
                Instant confirmation • Easy to modify • No fees
              </p>
            </section>

            {/* Contact Information */}
            <section className={`bg-black border border-border-subtle p-4 md:p-8 rounded-[3rem] ${isVisible ? 'scroll-reveal scroll-reveal-delay-2' : ''}`}>
              <h2 className="font-display text-lg md:text-2xl tracking-tight mb-6 font-bold text-center text-white">
                {t('reservations.contact.title')}
              </h2>
              <div className="text-center space-y-4">
                <div>
                  <p className="text-text-muted text-sm mb-2">{t('reservations.contact.phone')}</p>
                  <a
                    href="tel:4037622021"
                    className="text-xl font-bold text-white hover:text-text-secondary transition-colors tracking-wide"
                  >
                    403.762.2021
                  </a>
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-2">Email</p>
                  <a
                    href="mailto:info@bearstreettavern.ca"
                    className="text-base font-medium text-white hover:text-text-secondary transition-colors"
                  >
                    info@bearstreettavern.ca
                  </a>
                </div>
                <div className="pt-4">
                  <p className="text-text-muted text-sm mb-2">Address</p>
                  <p className="text-white font-medium">211 Bear Street</p>
                  <p className="text-white font-medium">Banff, AB T1L 1A1</p>
                </div>
              </div>
              <p className="text-text-muted text-xs md:text-sm mt-6 text-center">
                {t('reservations.contact.text')}
              </p>
            </section>

            {/* Daily Specials */}
            <section className={`${isVisible ? 'scroll-reveal scroll-reveal-delay-3' : ''}`}>
              <h2 className="font-display text-xl md:text-3xl tracking-tight mb-6 md:mb-8 text-center font-black text-white">
                DAILY SPECIALS
              </h2>
              <p className="text-center text-text-muted mb-6 md:mb-10 text-xs md:text-sm italic px-4">
                Excludes holidays and extended weekends • Select pizzas and calzones only
              </p>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Sunday */}
                <div className="bg-black border border-border-subtle p-4 md:p-6 rounded-[3rem] hover:border-accent-primary/30 hover:shadow-lg transition-all">
                  <h3 className="font-bold text-base md:text-lg tracking-wider mb-3 text-white">SUNDAY</h3>
                  <p className="text-text-secondary mb-4 text-sm">5:00 PM onwards</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent-primary mr-2">•</span>
                      <span className="text-text-secondary">$10 Steins</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-primary mr-2">•</span>
                      <span className="text-text-secondary">50% OFF Pizza</span>
                    </li>
                  </ul>
                  <p className="text-xs text-text-muted mt-4 italic">
                    Reserve through OpenTable above to enjoy this special
                  </p>
                </div>

                {/* Monday */}
                <div className="bg-black border border-border-subtle p-4 md:p-6 rounded-[3rem] hover:border-accent-primary/30 hover:shadow-lg transition-all">
                  <h3 className="font-bold text-base md:text-lg tracking-wider mb-3 text-white">MONDAY</h3>
                  <p className="text-text-secondary mb-4 text-sm">5:00 PM onwards</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent-primary mr-2">•</span>
                      <span className="text-text-secondary font-bold">50% OFF Pizza</span>
                    </li>
                  </ul>
                  <p className="text-xs text-text-muted mt-4 italic">
                    Reserve through OpenTable above to enjoy this special
                  </p>
                </div>

                {/* Tuesday */}
                <div className="bg-black border border-border-subtle p-4 md:p-6 rounded-[3rem] hover:border-accent-primary/30 hover:shadow-lg transition-all">
                  <h3 className="font-bold text-base md:text-lg tracking-wider mb-3 text-white">TUESDAY</h3>
                  <p className="text-text-secondary mb-4 text-sm">All day</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent-primary mr-2">•</span>
                      <span className="text-text-secondary">$12 Calzones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-primary mr-2">•</span>
                      <span className="text-text-secondary">$6 Margaritas</span>
                    </li>
                  </ul>
                  <p className="text-xs text-text-muted mt-4 italic">
                    Reserve through OpenTable above to enjoy this special
                  </p>
                </div>

                {/* Wednesday & Thursday */}
                <div className="bg-black border border-border-subtle p-4 md:p-6 rounded-[3rem] hover:border-accent-primary/30 hover:shadow-lg transition-all">
                  <h3 className="font-bold text-base md:text-lg tracking-wider mb-3 text-white">WEDNESDAY & THURSDAY</h3>
                  <p className="text-text-secondary mb-4 text-sm">All day</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent-primary mr-2">•</span>
                      <span className="text-text-secondary">$6 Margaritas</span>
                    </li>
                  </ul>
                  <p className="text-xs text-text-muted mt-4 italic">
                    Reserve through OpenTable above to enjoy this special
                  </p>
                </div>
              </div>
            </section>

            {/* Important Information */}
            <section className={`bg-bg-secondary text-white p-4 md:p-8 rounded-[3rem] border border-border-subtle ${isVisible ? 'scroll-reveal scroll-reveal-delay-4' : ''}`}>
              <h2 className="font-display text-lg md:text-2xl tracking-tight mb-6 font-bold text-center">
                {t('reservations.info.title')}
              </h2>
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="border-l-4 border-accent-primary/50 pl-4 md:pl-6">
                  <h3 className="font-bold mb-2 text-sm">
                    {t('reservations.info.recommended')}
                  </h3>
                  <p className="text-text-secondary text-xs md:text-sm">
                    {t('reservations.info.walkins')}
                  </p>
                </div>
                <div className="border-l-4 border-accent-primary/50 pl-4 md:pl-6">
                  <h3 className="font-bold mb-2 text-sm">
                    {t('reservations.info.large')}
                  </h3>
                  <p className="text-text-secondary text-xs md:text-sm">
                    {t('reservations.info.cancellation')}
                  </p>
                </div>
              </div>
            </section>

            {/* Back to Home */}
            <div className={`text-center pt-8 ${isVisible ? 'scroll-reveal' : ''}`}>
              <Link
                href="/"
                className="inline-block bg-white text-black hover:bg-black hover:text-white border border-black hover:border-white px-6 py-2 font-bold text-xs tracking-[0.2em] transition-all"
              >
                {t('reservations.backHome')}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
