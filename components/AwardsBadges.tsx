'use client';

import { RESTAURANT_INFO } from '@/constants/restaurant';

export default function AwardsBadges() {
  const awards = [
    {
      icon: (
        <div className="text-center">
          <div className="text-xl font-black text-red-400 mb-1">2024</div>
          <div className="text-[9px] font-bold text-red-300 tracking-wider">DINERS'</div>
          <div className="text-[9px] font-bold text-red-300 tracking-wider">CHOICE</div>
        </div>
      ),
      gradient: 'from-red-900/40 to-red-800/40',
      border: 'border-red-700/30',
      shadow: 'shadow-red-900/20 group-hover:shadow-red-900/30',
      title: 'OpenTable',
      description: 'Exceptional dining experiences'
    },
    {
      icon: (
        <div className="text-center">
          <div className="text-2xl mb-1">⭐</div>
          <div className="text-lg font-black text-green-400">
            {RESTAURANT_INFO.social.tripadvisor.rating}
          </div>
          <div className="text-[9px] text-green-300 font-semibold">
            {RESTAURANT_INFO.social.tripadvisor.reviewCount}+
          </div>
        </div>
      ),
      gradient: 'from-green-900/40 to-emerald-800/40',
      border: 'border-green-700/30',
      shadow: 'shadow-green-900/20 group-hover:shadow-green-900/30',
      title: 'TripAdvisor',
      description: 'Highly rated by travelers'
    },
    {
      icon: (
        <div className="text-center px-2">
          <div className="text-xl mb-1">📺</div>
          <div className="text-[9px] font-bold text-amber-300 tracking-tight leading-tight">
            FEATURED<br/>ON TV
          </div>
        </div>
      ),
      gradient: 'from-amber-900/40 to-amber-800/40',
      border: 'border-amber-700/30',
      shadow: 'shadow-amber-900/20 group-hover:shadow-amber-900/30',
      title: 'You Gotta Eat Here',
      description: 'Food Network Canada'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-bg-secondary border-t-2 border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-3 font-bold text-white">
              RECOGNIZED & AWARDED
            </h3>
            <p className="text-text-muted text-sm">
              Trusted by locals and visitors alike
            </p>
          </div>

          {/* Desktop: Static Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className={`relative w-20 h-20 bg-gradient-to-br ${award.gradient} backdrop-blur-sm border ${award.border} rounded-full flex items-center justify-center shadow-lg ${award.shadow} transition-all mb-4`}>
                  {award.icon}
                </div>
                <h4 className="font-bold text-lg text-white mb-1">{award.title}</h4>
                <p className="text-sm text-text-secondary max-w-xs">
                  {award.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: Auto-scrolling Carousel */}
          <div className="md:hidden relative w-full overflow-hidden mb-8">
            <div className="flex w-max animate-marquee-slow">
              {[...Array(3)].map((_, duplicateIndex) => (
                awards.map((award, awardIndex) => (
                  <div key={`${duplicateIndex}-${awardIndex}`} className="w-[280px] mx-4 flex-shrink-0">
                    <div className="flex flex-col items-center text-center group">
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${award.gradient} backdrop-blur-sm border ${award.border} rounded-full flex items-center justify-center shadow-lg ${award.shadow} transition-all mb-4`}>
                        {award.icon}
                      </div>
                      <h4 className="font-bold text-lg text-white mb-1">{award.title}</h4>
                      <p className="text-sm text-text-secondary max-w-xs px-4">
                        {award.description}
                      </p>
                    </div>
                  </div>
                ))
              ))}
            </div>
          </div>

          {/* Additional Trust Signals */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center items-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-secondary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-text-secondary">
                  Banff Hospitality Collective
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-secondary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-text-secondary">
                  Three Bears Brewery Partner
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-secondary" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-text-secondary">
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
