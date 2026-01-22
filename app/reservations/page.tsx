import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservations | Bear Street Tavern | Book Your Table in Banff',
  description: 'Reserve your table at Bear Street Tavern in Banff. Book online through OpenTable for our award-winning oven-baked pizzas, craft beers, and dog-friendly patio. Daily specials available!',
  openGraph: {
    title: 'Reservations | Bear Street Tavern',
    description: 'Book a table at our Banff location and enjoy award-winning pizza and craft drinks.',
    url: 'https://bearstreettavern.ca/reservations',
    type: 'website',
    images: [
      {
        url: '/images/Interior/Inside1.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior Dining - Reservations',
      },
    ],
  },
};

export default function ReservationsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-linear-to-b from-gray-50 to-white pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-warm-brown text-white text-xs tracking-[0.3em] mb-6 font-bold">
            SECURE YOUR TABLE
          </div>
          <h1 className="font-display text-4xl md:text-8xl tracking-tight mb-6 font-black text-charcoal">
            RESERVATIONS
          </h1>
          <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
          <p className="text-charcoal/70 text-base md:text-xl tracking-wide font-medium max-w-2xl mx-auto px-4">
            Book Your Table at Banff's Best Pizza
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* OpenTable Integration */}
          <section className="bg-black text-white p-6 md:p-12 rounded-lg text-center">
            <h2 className="font-display text-2xl md:text-4xl tracking-tight mb-4 md:mb-6 font-black">
              BOOK ONLINE NOW
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6 md:mb-8"></div>
            <p className="text-white/80 mb-6 md:mb-8 text-base md:text-lg">
              Reserve your table instantly through OpenTable
            </p>
            <a
              href="https://www.opentable.com/r/bear-street-tavern-banff"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black hover:bg-white/90 px-6 md:px-12 py-3 md:py-4 font-bold text-xs md:text-sm tracking-wider md:tracking-[0.3em] transition-all border-2 border-white hover:scale-105"
            >
              RESERVE ON OPENTABLE
            </a>
            <p className="text-white/60 text-xs md:text-sm mt-4 md:mt-6">
              Instant confirmation • Easy to modify • No fees
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 border-2 border-gray-200 p-6 md:p-10 rounded-lg">
            <h2 className="font-display text-xl md:text-3xl tracking-tight mb-6 font-bold text-center text-charcoal">
              PREFER TO CALL?
            </h2>
            <div className="text-center space-y-4">
              <div>
                <p className="text-black/60 text-sm mb-2">Phone</p>
                <a
                  href="tel:4037622021"
                  className="text-2xl font-bold text-black hover:text-black/70 transition-colors tracking-wide"
                >
                  403.762.2021
                </a>
              </div>
              <div>
                <p className="text-black/60 text-sm mb-2">Email</p>
                <a
                  href="mailto:info@bearstreettavern.ca"
                  className="text-lg font-medium text-black hover:text-black/70 transition-colors"
                >
                  info@bearstreettavern.ca
                </a>
              </div>
              <div className="pt-4">
                <p className="text-black/60 text-sm mb-2">Address</p>
                <p className="text-black font-medium">211 Bear Street</p>
                <p className="text-black font-medium">Banff, AB T1L 1A1</p>
              </div>
            </div>
          </section>

          {/* Daily Specials */}
          <section>
            <h2 className="font-display text-2xl md:text-4xl tracking-tight mb-6 md:mb-8 text-center font-black text-charcoal">
              DAILY SPECIALS
            </h2>
            <p className="text-center text-black/60 mb-6 md:mb-10 text-xs md:text-sm italic px-4">
              Excludes holidays and extended weekends • Select pizzas and calzones only
            </p>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Sunday */}
              <div className="bg-gray-50 border-2 border-gray-200 p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg md:text-xl tracking-wider mb-3 text-charcoal">SUNDAY</h3>
                <p className="text-black/70 mb-4 text-sm">5:00 PM onwards</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-black/80">$10 Steins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-black/80">50% OFF Pizza</span>
                  </li>
                </ul>
                <p className="text-xs text-charcoal/60 mt-4 italic">
                  Reserve through OpenTable above to enjoy this special
                </p>
              </div>

              {/* Monday */}
              <div className="bg-gray-50 border-2 border-gray-200 p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg md:text-xl tracking-wider mb-3 text-charcoal">MONDAY</h3>
                <p className="text-black/70 mb-4 text-sm">5:00 PM onwards</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-black/80 font-bold">50% OFF Pizza</span>
                  </li>
                </ul>
                <p className="text-xs text-charcoal/60 mt-4 italic">
                  Reserve through OpenTable above to enjoy this special
                </p>
              </div>

              {/* Tuesday */}
              <div className="bg-gray-50 border-2 border-gray-200 p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg md:text-xl tracking-wider mb-3 text-charcoal">TUESDAY</h3>
                <p className="text-black/70 mb-4 text-sm">All day</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-black/80">$12 Calzones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-black/80">$6 Margaritas</span>
                  </li>
                </ul>
                <p className="text-xs text-charcoal/60 mt-4 italic">
                  Reserve through OpenTable above to enjoy this special
                </p>
              </div>

              {/* Wednesday & Thursday */}
              <div className="bg-gray-50 border-2 border-gray-200 p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg md:text-xl tracking-wider mb-3 text-charcoal">WEDNESDAY & THURSDAY</h3>
                <p className="text-black/70 mb-4 text-sm">All day</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-black/80">$6 Margaritas</span>
                  </li>
                </ul>
                <p className="text-xs text-charcoal/60 mt-4 italic">
                  Reserve through OpenTable above to enjoy this special
                </p>
              </div>
            </div>
          </section>

          {/* Important Information */}
          <section className="bg-black text-white p-6 md:p-10 rounded-lg">
            <h2 className="font-display text-xl md:text-3xl tracking-tight mb-6 font-bold text-center">
              IMPORTANT INFORMATION
            </h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="border-l-4 border-white/30 pl-4 md:pl-6">
                <h3 className="font-bold mb-2 text-sm md:text-base">Group Size Policy</h3>
                <p className="text-white/80 text-sm md:text-base">
                  We do not accept large group events of 17 or more guests. For group bookings, please contact other Banff Hospitality Collective venues.
                </p>
              </div>
              <div className="border-l-4 border-white/30 pl-4 md:pl-6">
                <h3 className="font-bold mb-2 text-sm md:text-base">Dog-Friendly Patio</h3>
                <p className="text-white/80 text-sm md:text-base">
                  Our year-round heated patio with fire tables welcomes your furry friends! We offer a special canine menu and dog-friendly beer. Please note: the patio is not enclosed and is subject to the elements.
                </p>
              </div>
              <div className="border-l-4 border-white/30 pl-4 md:pl-6">
                <h3 className="font-bold mb-2 text-sm md:text-base">Special Event Policies</h3>
                <p className="text-white/80 text-sm md:text-base">
                  Daily specials exclude holidays and extended weekends. Selected pizzas and calzones only.
                </p>
              </div>
            </div>
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
