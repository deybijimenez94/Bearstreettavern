'use client';

import { RESTAURANT_INFO } from '@/constants/restaurant';

export default function AwardsBadges() {
  return (
    <section className="py-12 md:py-16 bg-white border-t-2 border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-3 font-bold text-charcoal">
              RECOGNIZED & AWARDED
            </h3>
            <p className="text-charcoal/60 text-sm">
              Trusted by locals and visitors alike
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* OpenTable 2024 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 mb-4 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                <div className="text-center">
                  <div className="text-3xl font-black text-red-700 mb-1">2024</div>
                  <div className="text-xs font-bold text-red-600 tracking-wider">DINERS'</div>
                  <div className="text-xs font-bold text-red-600 tracking-wider">CHOICE</div>
                </div>
              </div>
              <h4 className="font-bold text-lg text-charcoal mb-2">OpenTable</h4>
              <p className="text-sm text-charcoal/70 max-w-xs">
                Recognized for exceptional dining experiences
              </p>
              <a
                href={RESTAURANT_INFO.links.reservations}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs text-warm-brown hover:text-warm-brown/80 font-bold tracking-wider transition-colors"
              >
                BOOK ON OPENTABLE →
              </a>
            </div>

            {/* TripAdvisor */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 mb-4 bg-gradient-to-br from-green-50 to-emerald-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                <div className="text-center">
                  <div className="text-4xl mb-1">⭐</div>
                  <div className="text-2xl font-black text-green-700">
                    {RESTAURANT_INFO.social.tripadvisor.rating}
                  </div>
                  <div className="text-xs text-green-600 font-semibold">
                    {RESTAURANT_INFO.social.tripadvisor.reviewCount}+ reviews
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-lg text-charcoal mb-2">TripAdvisor</h4>
              <p className="text-sm text-charcoal/70 max-w-xs">
                Highly rated by travelers worldwide
              </p>
              <a
                href={RESTAURANT_INFO.social.tripadvisor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs text-warm-brown hover:text-warm-brown/80 font-bold tracking-wider transition-colors"
              >
                READ REVIEWS →
              </a>
            </div>

            {/* You Gotta Eat Here */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 mb-4 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                <div className="text-center px-4">
                  <div className="text-3xl mb-2">📺</div>
                  <div className="text-xs font-bold text-amber-800 tracking-tight leading-tight">
                    FEATURED ON TV
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-lg text-charcoal mb-2">You Gotta Eat Here</h4>
              <p className="text-sm text-charcoal/70 max-w-xs">
                Showcased on Food Network Canada
              </p>
              <div className="mt-4 inline-block text-xs text-charcoal/50 font-semibold tracking-wider">
                AS SEEN ON TV
              </div>
            </div>
          </div>

          {/* Additional Trust Signals */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center items-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-charcoal/70">
                  Banff Hospitality Collective
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-charcoal/70">
                  Three Bears Brewery Partner
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-charcoal/70">
                  Serving Banff Since 2011
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
