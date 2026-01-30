'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OrderOnlinePage() {
  const { t } = useLanguage();
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <AnimatedSection animationType="fade-up">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-black border border-white/20 text-white text-xs tracking-[0.3em] mb-6 font-bold">
              {t('orderOnline.hero.subtitle')}
            </div>
            <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-white">
              {t('orderOnline.hero.title')}
            </h1>
            <div className="w-32 h-1 bg-accent-primary mx-auto mb-6"></div>
            <p className="text-text-secondary text-xl tracking-wide font-medium max-w-2xl mx-auto">
              {t('orderOnline.hero.text')}
            </p>
          </div>
        </AnimatedSection>

        {/* How It Works */}
        <AnimatedSection animationType="fade-up" delay={1}>
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-12 font-black text-center text-white">
              {t('orderOnline.how.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-primary text-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-4xl font-black">1</span>
                </div>
                <h3 className="font-display text-2xl tracking-tight mb-3 font-bold text-white">
                  {t('orderOnline.step1.title')}
                </h3>
                <p className="text-text-secondary">
                  {t('orderOnline.step1.text')}
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-primary text-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-4xl font-black">2</span>
                </div>
                <h3 className="font-display text-2xl tracking-tight mb-3 font-bold text-white">
                  {t('orderOnline.step2.title')}
                </h3>
                <p className="text-text-secondary">
                  {t('orderOnline.step2.text')}
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-primary text-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-4xl font-black">3</span>
                </div>
                <h3 className="font-display text-2xl tracking-tight mb-3 font-bold text-white">
                  {t('orderOnline.step3.title')}
                </h3>
                <p className="text-text-secondary">
                  {t('orderOnline.step3.text')}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animationType="fade-up" delay={2}>
          <div className="max-w-4xl mx-auto mb-16 bg-black border border-white/20 text-white p-12 rounded-lg text-center">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 font-black">
              {t('orderOnline.ready.title')}
            </h2>
            <div className="w-24 h-1 bg-accent-primary mx-auto mb-8"></div>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {t('orderOnline.ready.text')}
            </p>
            <a
              href="https://bearsttavern.xdineapp.com/#home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-primary text-black hover:bg-accent-secondary px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border border-accent-primary hover:scale-105"
            >
              {t('orderOnline.ready.button')}
            </a>
            <p className="text-white/60 text-sm mt-6">
              {t('orderOnline.good.payment')} • {t('orderOnline.good.pickup')}
            </p>
          </div>
        </AnimatedSection>

        {/* Popular Items */}
        <AnimatedSection animationType="fade-up" delay={3}>
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-12 font-black text-center text-white">
              {t('orderOnline.popular.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pizza */}
              <div className="bg-bg-secondary border border-white/10 rounded-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-48 bg-accent-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🍕</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-tight mb-2 font-bold text-white">
                    OVEN-BAKED PIZZAS
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    24-hour fermented dough, organic San Marzano sauce, fresh toppings
                  </p>
                  <p className="text-accent-primary font-bold">From $23.50</p>
                </div>
              </div>

              {/* Wings */}
              <div className="bg-bg-secondary border border-white/10 rounded-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-48 bg-accent-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🍗</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-tight mb-2 font-bold text-white">
                    BAKED WINGS
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Cast iron roasted with your choice of seasonings
                  </p>
                  <p className="text-accent-primary font-bold">$23.50</p>
                </div>
              </div>

              {/* Salads */}
              <div className="bg-bg-secondary border border-white/10 rounded-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-48 bg-accent-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🥗</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-tight mb-2 font-bold text-white">
                    FRESH SALADS
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Caesar, Winter Salad, Tavern Chop, and more
                  </p>
                  <p className="text-accent-primary font-bold">From $19.00</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection animationType="fade-up">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-bg-secondary border border-white/10 p-8 rounded-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-bold text-xl tracking-wider mb-3 text-white">SKIP THE LINE</h3>
                <p className="text-text-secondary">
                  Order ahead and your food will be ready when you arrive. No waiting, just grab and go!
                </p>
              </div>

              <div className="bg-bg-secondary border border-white/10 p-8 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold text-xl tracking-wider mb-3 text-white">CUSTOMIZE EVERYTHING</h3>
                <p className="text-text-secondary">
                  Add extra toppings, special instructions, dietary requirements. Make it exactly how you want it.
                </p>
              </div>

              <div className="bg-bg-secondary border border-white/10 p-8 rounded-lg">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="font-bold text-xl tracking-wider mb-3 text-white">SECURE PAYMENT</h3>
                <p className="text-text-secondary">
                  Pay safely online with credit card, Apple Pay, or Google Pay. Contactless and convenient.
                </p>
              </div>

              <div className="bg-bg-secondary border border-white/10 p-8 rounded-lg">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-bold text-xl tracking-wider mb-3 text-white">ORDER ANYTIME</h3>
                <p className="text-text-secondary">
                  Place your order 24/7 from any device. Schedule pickup for whenever works for you.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Important Info */}
        <AnimatedSection animationType="fade-up">
          <div className="max-w-4xl mx-auto mb-16 bg-bg-secondary border border-white/10 p-10 rounded-lg">
            <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-6 font-bold text-center text-white">
              {t('orderOnline.good.title')}
            </h2>
            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="flex items-start">
                <span className="text-accent-primary mr-3 text-xl">•</span>
                <p className="text-text-secondary">
                  <strong className="text-white">Pickup Location:</strong> 211 Bear Street, Banff, AB T1L 1A1
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-accent-primary mr-3 text-xl">•</span>
                <p className="text-text-secondary">
                  <strong className="text-white">Pickup Hours:</strong> Daily 11:30AM - 9PM
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-accent-primary mr-3 text-xl">•</span>
                <p className="text-text-secondary">
                  <strong className="text-white">Preparation Time:</strong> Most orders ready in 20-30 minutes
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-accent-primary mr-3 text-xl">•</span>
                <p className="text-text-secondary">
                  <strong className="text-white">Daily Specials:</strong> Dine-in only (not available for takeout)
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Or Visit Us */}
        <AnimatedSection animationType="fade-up">
          <div className="text-center mb-12">
            <p className="text-text-secondary mb-4">Prefer to dine in?</p>
            <Link
              href="/reservations"
              className="inline-block bg-accent-primary text-black hover:bg-accent-secondary px-8 py-3 font-bold text-xs tracking-wider transition-all"
            >
              BOOK A TABLE
            </Link>
          </div>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Link
              href="/"
              className="inline-block bg-white text-black hover:bg-black hover:text-white border border-black hover:border-white px-6 py-2 font-bold text-xs tracking-[0.2em] transition-all"
            >
              {t('orderOnline.cta.back')}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
