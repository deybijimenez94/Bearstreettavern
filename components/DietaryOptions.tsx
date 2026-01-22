'use client';

import { DIETARY_OPTIONS } from '@/constants/restaurant';

export default function DietaryOptions() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-warm-brown text-white text-xs tracking-[0.3em] mb-6 font-bold">
              FOR EVERYONE
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6 font-black text-charcoal">
              DIETARY FRIENDLY
            </h2>
            <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
            <p className="text-charcoal text-xl font-medium max-w-2xl mx-auto">
              We believe everyone deserves great pizza
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Gluten-Free */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg text-center hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <span className="text-4xl">🌾</span>
              </div>
              <h3 className="font-display text-2xl tracking-wider mb-4 font-bold text-charcoal">
                GLUTEN-FREE
              </h3>
              <div className="space-y-3 text-charcoal/80">
                <p className="font-bold text-green-700">
                  GF crust available for any pizza
                </p>
                <p className="text-sm">
                  Extra charge: ${DIETARY_OPTIONS.glutenFree.extraCharge}
                </p>
                <p className="text-sm">
                  {DIETARY_OPTIONS.glutenFree.note}
                </p>
                {DIETARY_OPTIONS.glutenFree.celiacFriendly && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                      ✓ CELIAC FRIENDLY
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Vegan */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg text-center hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="font-display text-2xl tracking-wider mb-4 font-bold text-charcoal">
                VEGAN OPTIONS
              </h3>
              <div className="space-y-3 text-charcoal/80">
                <p className="font-bold text-emerald-700">
                  Vegan cheese & vegan meat available
                </p>
                <p className="text-sm">
                  Extra charge: ${DIETARY_OPTIONS.vegan.extraCharge}
                </p>
                <p className="text-sm">
                  {DIETARY_OPTIONS.vegan.note}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                  <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold mr-2">
                    🧀 VEGAN CHEESE
                  </span>
                  <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
                    🍖 VEGAN MEAT
                  </span>
                </div>
              </div>
            </div>

            {/* Vegetarian */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg text-center hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <span className="text-4xl">🥗</span>
              </div>
              <h3 className="font-display text-2xl tracking-wider mb-4 font-bold text-charcoal">
                VEGETARIAN
              </h3>
              <div className="space-y-3 text-charcoal/80">
                <p className="font-bold text-blue-700">
                  {DIETARY_OPTIONS.vegetarian.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium mb-3">Available pizzas:</p>
                  <div className="space-y-1">
                    {DIETARY_OPTIONS.vegetarian.pizzas.map((pizza, index) => (
                      <p key={index} className="text-xs">
                        • {pizza}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-black text-white p-8 rounded-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-warm-brown mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-display text-2xl tracking-wider font-bold">
                IMPORTANT INFORMATION
              </h3>
            </div>
            <div className="max-w-2xl mx-auto space-y-3 text-white/90">
              <p>
                <strong>Cross-contamination prevention:</strong> Our staff is trained in proper food handling procedures.
              </p>
              <p>
                <strong>Nut-free requests:</strong> Please inform your server of any allergies. We accommodate nut-free requests.
              </p>
              <p className="text-warm-brown font-bold mt-6">
                Please inform your server of any dietary restrictions or allergies when ordering.
              </p>
            </div>
          </div>

          {/* Dietary Badges Legend */}
          <div className="mt-12 bg-white border-2 border-gray-200 p-8 rounded-lg">
            <h3 className="font-display text-xl tracking-wider mb-6 font-bold text-center text-charcoal">
              LOOK FOR THESE BADGES ON OUR MENU
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                <span className="mr-2">🌾</span> GF Available
              </span>
              <span className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold">
                <span className="mr-2">🌱</span> Vegan Available
              </span>
              <span className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">
                <span className="mr-2">🌿</span> Vegetarian
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
