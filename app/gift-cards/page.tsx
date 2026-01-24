'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export default function GiftCardsPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <AnimatedSection animationType="fade-up">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-black border border-white/20 text-white text-xs tracking-[0.3em] mb-6 font-bold">
              GIVE THE GIFT OF GREAT FOOD
            </div>
            <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-white">
              GIFT CARDS
            </h1>
            <div className="w-32 h-1 bg-accent-primary mx-auto mb-6"></div>
            <p className="text-text-secondary text-xl tracking-wide font-medium max-w-2xl mx-auto">
              The Perfect Gift for Pizza Lovers
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Hero Section */}
          <AnimatedSection animationType="fade-up" delay={1}>
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-black text-white">
                  GIVE THE GIFT OF GREAT FOOD
                </h2>
                <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                  Share the experience of Banff's Best Pizza with friends and family. Our gift cards are perfect for any occasion and can be used at Bear Street Tavern.
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
                  PURCHASE GIFT CARD
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
                <h3 className="font-bold text-xl tracking-wider mb-3 text-white">EASY TO USE</h3>
                <p className="text-text-secondary">
                  Simply present your gift card when paying for your meal at Bear Street Tavern
                </p>
              </div>
              <div className="text-center bg-bg-secondary border border-white/10 p-8 rounded-lg">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="font-bold text-xl tracking-wider mb-3 text-white">ANY AMOUNT</h3>
                <p className="text-text-secondary">
                  Choose any denomination that fits your budget - perfect for any occasion
                </p>
              </div>
              <div className="text-center bg-bg-secondary border border-white/10 p-8 rounded-lg">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="font-bold text-xl tracking-wider mb-3 text-white">NO EXPIRY</h3>
                <p className="text-text-secondary">
                  Our gift cards never expire, so recipients can enjoy their meal whenever they like
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* Purchase Options */}
          <AnimatedSection animationType="fade-up" delay={3}>
            <section className="bg-black border border-white/20 text-white p-12 rounded-lg">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-8 font-black text-center">
                HOW TO PURCHASE
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="border border-white/20 p-8 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 tracking-wider text-white">ONLINE</h3>
                  <p className="text-white/80 mb-6">
                    Purchase instantly through our online gift shop powered by XDineApp
                  </p>
                  <a
                    href="https://bearsttavern.xdineapp.com/#giftshop/49/chooseCard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent-primary text-black hover:bg-accent-secondary px-8 py-3 font-bold text-sm tracking-wider transition-all"
                  >
                    BUY ONLINE
                  </a>
                </div>
                <div className="border border-white/20 p-8 rounded-lg">
                  <h3 className="font-bold text-xl mb-4 tracking-wider text-white">IN PERSON</h3>
                  <p className="text-white/80 mb-6">
                    Visit us at 211 Bear Street, Banff to purchase a physical gift card
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
                QUESTIONS ABOUT GIFT CARDS?
              </h2>
              <p className="text-text-secondary mb-6">
                Our team is happy to help with any questions about purchasing or using gift cards
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
                READY TO GIVE?
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
                PURCHASE NOW
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
                ← BACK TO HOME
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
