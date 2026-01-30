'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GiftCardsPage() {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen bg-bg-primary pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <AnimatedSection animationType="fade-up">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-black border border-white/20 text-white text-xs tracking-[0.3em] mb-6 font-bold">
              {t('giftCards.hero.subtitle')}
            </div>
            <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-white">
              {t('giftCards.hero.title')}
            </h1>
            <div className="w-32 h-1 bg-accent-primary mx-auto mb-6"></div>
            <p className="text-text-secondary text-xl tracking-wide font-medium max-w-2xl mx-auto">
              {t('giftCards.hero.text')}
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Hero Section */}
          <AnimatedSection animationType="fade-up" delay={1}>
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-black text-white">
                  {t('giftCards.why.text')}
                </h2>
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                  {t('giftCards.why.desc')}
                </p>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  Part of the <strong className="text-white">Banff Hospitality Collective</strong>, our gift cards give recipients access to award-winning dining in the heart of the Rockies.
                </p>
                <a
                  href="https://bearsttavern.xdineapp.com/#giftshop/49/chooseCard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent-primary text-black hover:bg-accent-secondary px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border border-accent-primary hover:scale-105"
                >
                  {t('giftCards.cta.buy')}
                </a>
              </div>
              <div className="bg-black border border-white/20 p-12 rounded-lg text-white text-center">
                <div className="text-6xl mb-6">🎁</div>
                <h3 className="font-display text-2xl tracking-wider mb-4 font-bold">
                  BEAR STREET TAVERN
                </h3>
                <div className="w-24 h-1 bg-accent-primary mx-auto mb-6"></div>
                <p className="text-text-secondary text-lg mb-2">Gift Card</p>
                <p className="text-4xl font-black mb-6">$XX.XX</p>
                <p className="text-text-muted text-sm">
                  Available in any denomination
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* Features */}
          <AnimatedSection animationType="fade-up" delay={2}>
            <section className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-bg-secondary border border-white/10 p-8 rounded-lg">
                <div className="text-5xl mb-4">💳</div>
                <h3 className="font-bold text-xl tracking-wider mb-3 text-white">{t('giftCards.easy.title')}</h3>
                <p className="text-text-secondary">
                  {t('giftCards.easy.desc')}
                </p>
              </div>
              <div className="text-center bg-bg-secondary border border-white/10 p-8 rounded-lg">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="font-bold text-xl tracking-wider mb-3 text-white">{t('giftCards.amount.title')}</h3>
                <p className="text-text-secondary">
                  {t('giftCards.amount.desc')}
                </p>
              </div>
              <div className="text-center bg-bg-secondary border border-white/10 p-8 rounded-lg">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="font-bold text-xl tracking-wider mb-3 text-white">{t('giftCards.expiry.title')}</h3>
                <p className="text-text-secondary">
                  {t('giftCards.expiry.desc')}
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* Purchase Options */}
          <AnimatedSection animationType="fade-up" delay={3}>
            <section className="bg-black border border-white/20 text-white p-12 rounded-lg">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-8 font-black text-center">
                {t('giftCards.how.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="border border-white/20 p-8 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 tracking-wider text-white">{t('giftCards.online.title')}</h3>
                  <p className="text-white/80 mb-6">
                    {t('giftCards.online.text')}
                  </p>
                  <a
                    href="https://bearsttavern.xdineapp.com/#giftshop/49/chooseCard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent-primary text-black hover:bg-accent-secondary px-8 py-3 font-bold text-sm tracking-wider transition-all"
                  >
                    {t('giftCards.online.button')}
                  </a>
                </div>
                <div className="border border-white/20 p-8 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 tracking-wider text-white">{t('giftCards.person.title')}</h3>
                  <p className="text-white/80 mb-6">
                    {t('giftCards.person.text')}
                  </p>
                  <p className="text-white/60 text-sm">
                    Call us: <a href="tel:4037622021" className="text-accent-primary hover:text-accent-secondary">403.762.2021</a>
                  </p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Perfect For */}
          <AnimatedSection animationType="fade-up">
            <section>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-10 font-black text-center text-white">
                PERFECT FOR ANY OCCASION
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎂</div>
                  <p className="font-bold text-white">Birthdays</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎄</div>
                  <p className="font-bold text-white">Holidays</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💝</div>
                  <p className="font-bold text-white">Thank You</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎊</div>
                  <p className="font-bold text-white">Celebrations</p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Contact Information */}
          <AnimatedSection animationType="fade-up">
            <section className="bg-bg-secondary border border-white/10 p-10 rounded-lg text-center">
              <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-6 font-bold text-white">
                {t('giftCards.questions.title')}
              </h2>
              <p className="text-text-secondary mb-6">
                {t('giftCards.questions.text')}
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-text-muted text-sm mb-1">Phone</p>
                  <a
                    href="tel:4037622021"
                    className="text-xl font-bold text-white hover:text-accent-primary transition-colors"
                  >
                    403.762.2021
                  </a>
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-1">Email</p>
                  <a
                    href="mailto:megan@banffcollective.com"
                    className="text-lg font-medium text-white hover:text-accent-primary transition-colors"
                  >
                    megan@banffcollective.com
                  </a>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection animationType="fade-up">
            <section className="text-center bg-black border border-white/20 text-white p-12 rounded-lg">
              <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-6 font-black">
                {t('giftCards.cta.title')}
              </h2>
              <div className="w-24 h-1 bg-accent-primary mx-auto mb-8"></div>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Purchase a Bear Street Tavern gift card today and share the experience of Banff's Best Pizza
              </p>
              <a
                href="https://bearsttavern.xdineapp.com/#giftshop/49/chooseCard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-primary text-black hover:bg-accent-secondary px-12 py-5 font-bold text-sm tracking-[0.3em] transition-all border border-accent-primary hover:scale-105 mb-6"
              >
                {t('giftCards.cta.buy')}
              </a>
              <p className="text-white/60 text-sm">
                Powered by XDineApp • Secure checkout
              </p>
            </section>
          </AnimatedSection>

          {/* Back to Home */}
          <AnimatedSection animationType="fade-up">
            <div className="text-center pt-8">
              <Link
                href="/"
                className="inline-block bg-white text-black hover:bg-black hover:text-white border border-black hover:border-white px-6 py-2 font-bold text-xs tracking-[0.2em] transition-all"
              >
                ← {t('giftCards.cta.back')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
