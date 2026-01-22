import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Online | Bear Street Tavern | Takeout & Pickup',
  description: 'Order online from Bear Street Tavern for pickup. Enjoy our oven-baked pizzas, craft beers, and tavern classics from the comfort of your home. Fast, easy online ordering!',
  alternates: { canonical: '/order-online' },
  openGraph: {
    title: 'Order Online | Bear Street Tavern',
    description: 'Place your pickup order for pizzas, tavern classics, salads and more in Banff. Secure checkout.',
    url: 'https://bearstreettavern.ca/order-online',
    type: 'website',
  },
};

export default function OrderOnlinePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-warm-brown text-white text-xs tracking-[0.3em] mb-6 font-bold">
            QUICK & EASY
          </div>
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-charcoal">
            ORDER ONLINE
          </h1>
          <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
          <p className="text-charcoal/70 text-xl tracking-wide font-medium max-w-2xl mx-auto">
            Skip the wait. Order ahead and pick up your favorites!
          </p>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-12 font-black text-center text-charcoal">
            HOW IT WORKS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-brown text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-4xl font-black">1</span>
              </div>
              <h3 className="font-display text-2xl tracking-tight mb-3 font-bold text-charcoal">
                CHOOSE YOUR FOOD
              </h3>
              <p className="text-charcoal/70">
                Browse our full menu of pizzas, appetizers, salads, and drinks. Customize to your preference.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-brown text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-4xl font-black">2</span>
              </div>
              <h3 className="font-display text-2xl tracking-tight mb-3 font-bold text-charcoal">
                PLACE YOUR ORDER
              </h3>
              <p className="text-charcoal/70">
                Select your pickup time and pay securely online. We'll start preparing your order.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-brown text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-4xl font-black">3</span>
              </div>
              <h3 className="font-display text-2xl tracking-tight mb-3 font-bold text-charcoal">
                PICK UP & ENJOY
              </h3>
              <p className="text-charcoal/70">
                Come to the restaurant at your selected time. Your order will be ready and waiting!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-black text-white p-12 rounded-lg text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 font-black">
            READY TO ORDER?
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Place your order now through our online ordering system. All your favorites, just a few clicks away.
          </p>
          <a
            href="https://bearsttavern.xdineapp.com/#home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black hover:bg-warm-brown hover:text-white px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-white hover:scale-105"
          >
            START YOUR ORDER
          </a>
          <p className="text-white/60 text-sm mt-6">
            Secure payment • Choose pickup time • Real-time updates
          </p>
        </div>

        {/* Popular Items */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-12 font-black text-center text-charcoal">
            POPULAR FAVORITES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pizza */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-48 bg-warm-brown/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🍕</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-tight mb-2 font-bold text-charcoal">
                  OVEN-BAKED PIZZAS
                </h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  24-hour fermented dough, organic San Marzano sauce, fresh toppings
                </p>
                <p className="text-warm-brown font-bold">From $23.50</p>
              </div>
            </div>

            {/* Wings */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-48 bg-warm-brown/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🍗</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-tight mb-2 font-bold text-charcoal">
                  BAKED WINGS
                </h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  Cast iron roasted with your choice of seasonings
                </p>
                <p className="text-warm-brown font-bold">$23.50</p>
              </div>
            </div>

            {/* Salads */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-48 bg-warm-brown/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🥗</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-tight mb-2 font-bold text-charcoal">
                  FRESH SALADS
                </h3>
                <p className="text-charcoal/70 text-sm mb-4">
                  Caesar, Winter Salad, Tavern Chop, and more
                </p>
                <p className="text-warm-brown font-bold">From $19.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-xl tracking-wider mb-3 text-charcoal">SKIP THE LINE</h3>
              <p className="text-charcoal/70">
                Order ahead and your food will be ready when you arrive. No waiting, just grab and go!
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-xl tracking-wider mb-3 text-charcoal">CUSTOMIZE EVERYTHING</h3>
              <p className="text-charcoal/70">
                Add extra toppings, special instructions, dietary requirements. Make it exactly how you want it.
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-bold text-xl tracking-wider mb-3 text-charcoal">SECURE PAYMENT</h3>
              <p className="text-charcoal/70">
                Pay safely online with credit card, Apple Pay, or Google Pay. Contactless and convenient.
              </p>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-xl tracking-wider mb-3 text-charcoal">ORDER ANYTIME</h3>
              <p className="text-charcoal/70">
                Place your order 24/7 from any device. Schedule pickup for whenever works for you.
              </p>
            </div>
          </div>
        </div>

        {/* Important Info */}
        <div className="max-w-4xl mx-auto mb-16 bg-warm-brown/10 border-2 border-warm-brown/30 p-10 rounded-lg">
          <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-6 font-bold text-center text-charcoal">
            GOOD TO KNOW
          </h2>
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="flex items-start">
              <span className="text-warm-brown mr-3 text-xl">•</span>
              <p className="text-charcoal/80">
                <strong>Pickup Location:</strong> 211 Bear Street, Banff, AB T1L 1A1
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-warm-brown mr-3 text-xl">•</span>
              <p className="text-charcoal/80">
                <strong>Pickup Hours:</strong> Daily 11:30AM - 9PM
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-warm-brown mr-3 text-xl">•</span>
              <p className="text-charcoal/80">
                <strong>Preparation Time:</strong> Most orders ready in 20-30 minutes
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-warm-brown mr-3 text-xl">•</span>
              <p className="text-charcoal/80">
                <strong>Daily Specials:</strong> Dine-in only (not available for takeout)
              </p>
            </div>
          </div>
        </div>

        {/* Or Visit Us */}
        <div className="text-center">
          <p className="text-charcoal/60 mb-4">Prefer to dine in?</p>
          <Link
            href="/reservations"
            className="inline-block bg-black text-white hover:bg-charcoal px-8 py-3 font-bold text-xs tracking-wider transition-all"
          >
            BOOK A TABLE
          </Link>
        </div>
      </div>
    </main>
  );
}
