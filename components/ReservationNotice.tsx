'use client';

import Link from 'next/link';

export default function ReservationNotice() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-amber-50 to-orange-50 border-y-4 border-warm-brown">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-warm-brown rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-3 font-black text-charcoal">
                ⚠️ RESERVATIONS STRONGLY RECOMMENDED
              </h3>
              <p className="text-charcoal text-base md:text-lg leading-relaxed mb-4">
                <strong className="text-warm-brown">We're a popular spot!</strong> Walk-in wait times can exceed <span className="font-bold text-red-700">2+ hours</span> during peak season (June-September) and weekends.
                <span className="block mt-2">
                  Book ahead to guarantee your table and skip the wait.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="/reservations"
                  className="inline-block bg-warm-brown text-white hover:bg-warm-brown/90 px-8 py-3 font-bold text-sm tracking-wider transition-all border-2 border-warm-brown hover:scale-105 shadow-md"
                >
                  📅 BOOK YOUR TABLE NOW
                </Link>
                <a
                  href="tel:4037622021"
                  className="inline-block bg-white text-charcoal hover:bg-gray-50 px-8 py-3 font-bold text-sm tracking-wider transition-all border-2 border-charcoal"
                >
                  📞 CALL TO RESERVE
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t-2 border-warm-brown/30">
            <div className="grid md:grid-cols-3 gap-4 text-center md:text-left">
              <div>
                <p className="text-sm text-charcoal/80">
                  <span className="font-bold text-warm-brown">⭐ Pro Tip:</span> Book 2-3 days ahead during summer
                </p>
              </div>
              <div>
                <p className="text-sm text-charcoal/80">
                  <span className="font-bold text-warm-brown">🍕 Daily Specials:</span> Available for dine-in reservations
                </p>
              </div>
              <div>
                <p className="text-sm text-charcoal/80">
                  <span className="font-bold text-warm-brown">🐕 Pet-Friendly:</span> Mention when booking for patio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
