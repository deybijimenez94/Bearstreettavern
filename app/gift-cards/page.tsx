import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gift Cards | Bear Street Tavern | Perfect Gift for Pizza Lovers',
  description: 'Give the gift of Banff\'s Best Pizza! Purchase Bear Street Tavern gift cards for friends and family. Valid at all Banff Hospitality Collective restaurants.',
};

export default function GiftCardsPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-warm-brown text-white text-xs tracking-[0.3em] mb-6 font-bold">
            GIVE THE GIFT OF GREAT FOOD
          </div>
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-charcoal">
            GIFT CARDS
          </h1>
          <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
          <p className="text-charcoal/70 text-xl tracking-wide font-medium max-w-2xl mx-auto">
            The Perfect Gift for Pizza Lovers
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-black text-charcoal">
                GIVE THE GIFT OF GREAT FOOD
              </h2>
              <p className="text-black/80 text-lg mb-6 leading-relaxed">
                Share the experience of Banff's Best Pizza with friends and family. Our gift cards are perfect for any occasion and can be used at Bear Street Tavern.
              </p>
              <p className="text-black/80 text-lg mb-8 leading-relaxed">
                Part of the <strong>Banff Hospitality Collective</strong>, our gift cards give recipients access to award-winning dining in the heart of the Rockies.
              </p>
              <a
                href="https://bearsttavern.xdineapp.com/#giftshop/49/chooseCard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white hover:bg-black/80 px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-black hover:scale-105"
              >
                PURCHASE GIFT CARD
              </a>
            </div>
            <div className="bg-linear-to-br from-black to-gray-800 p-12 rounded-lg text-white text-center">
              <div className="text-6xl mb-6">🎁</div>
              <h3 className="font-display text-2xl tracking-wider mb-4 font-bold">
                BEAR STREET TAVERN
              </h3>
              <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
              <p className="text-white/80 text-lg mb-2">Gift Card</p>
              <p className="text-4xl font-black mb-6">$XX.XX</p>
              <p className="text-white/60 text-sm">
                Available in any denomination
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="font-bold text-xl tracking-wider mb-3 text-charcoal">EASY TO USE</h3>
              <p className="text-black/70">
                Simply present your gift card when paying for your meal at Bear Street Tavern
              </p>
            </div>
            <div className="text-center bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="font-bold text-xl tracking-wider mb-3 text-charcoal">ANY AMOUNT</h3>
              <p className="text-black/70">
                Choose any denomination that fits your budget - perfect for any occasion
              </p>
            </div>
            <div className="text-center bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="font-bold text-xl tracking-wider mb-3 text-charcoal">NO EXPIRY</h3>
              <p className="text-black/70">
                Our gift cards never expire, so recipients can enjoy their meal whenever they like
              </p>
            </div>
          </section>

          {/* Purchase Options */}
          <section className="bg-black text-white p-12 rounded-lg">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-8 font-black text-center">
              HOW TO PURCHASE
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="border-2 border-white/20 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-4 tracking-wider text-white">ONLINE</h3>
                <p className="text-white/80 mb-6">
                  Purchase instantly through our online gift shop powered by XDineApp
                </p>
                <a
                  href="https://bearsttavern.xdineapp.com/#giftshop/49/chooseCard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black hover:bg-white/90 px-8 py-3 font-bold text-sm tracking-wider transition-all"
                >
                  BUY ONLINE
                </a>
              </div>
              <div className="border-2 border-white/20 p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-4 tracking-wider text-white">IN PERSON</h3>
                <p className="text-white/80 mb-6">
                  Visit us at 211 Bear Street, Banff to purchase a physical gift card
                </p>
                <p className="text-white/60 text-sm">
                  Call us: <a href="tel:4037622021" className="text-white hover:text-white/80">403.762.2021</a>
                </p>
              </div>
            </div>
          </section>

          {/* Perfect For */}
          <section>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-10 font-black text-center text-charcoal">
              PERFECT FOR ANY OCCASION
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎂</div>
                <p className="font-bold text-charcoal">Birthdays</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎄</div>
                <p className="font-bold text-charcoal">Holidays</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💝</div>
                <p className="font-bold text-charcoal">Thank You</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎊</div>
                <p className="font-bold text-charcoal">Celebrations</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 border-2 border-gray-200 p-10 rounded-lg text-center">
            <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-6 font-bold text-charcoal">
              QUESTIONS ABOUT GIFT CARDS?
            </h2>
            <p className="text-black/70 mb-6">
              Our team is happy to help with any questions about purchasing or using gift cards
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-black/60 text-sm mb-1">Phone</p>
                <a
                  href="tel:4037622021"
                  className="text-xl font-bold text-black hover:text-black/70 transition-colors"
                >
                  403.762.2021
                </a>
              </div>
              <div>
                <p className="text-black/60 text-sm mb-1">Email</p>
                <a
                  href="mailto:megan@banffcollective.com"
                  className="text-lg font-medium text-black hover:text-black/70 transition-colors"
                >
                  megan@banffcollective.com
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-black text-white p-12 rounded-lg">
            <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-6 font-black">
              READY TO GIVE?
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Purchase a Bear Street Tavern gift card today and share the experience of Banff's Best Pizza
            </p>
            <a
              href="https://bearsttavern.xdineapp.com/#giftshop/49/chooseCard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black hover:bg-white/90 px-12 py-5 font-bold text-sm tracking-[0.3em] transition-all border-2 border-white hover:scale-105 mb-6"
            >
              PURCHASE NOW
            </a>
            <p className="text-white/60 text-sm">
              Powered by XDineApp • Secure checkout
            </p>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Link
              href="/"
              className="inline-block bg-black text-white hover:bg-black/80 px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-black"
            >
              BACK TO HOME
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
