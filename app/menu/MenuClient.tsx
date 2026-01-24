'use client';

import Link from 'next/link';
import InteractiveMenu from '@/components/InteractiveMenu';
import AnimatedSection from '@/components/AnimatedSection';

export default function MenuClient() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <AnimatedSection animationType="fade-up">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-black border border-white/20 text-white text-xs tracking-[0.3em] mb-6 font-bold">
              BANFF'S BEST PIZZA
            </div>
            <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-white">
              MENU
            </h1>
            <div className="w-32 h-1 bg-accent-primary mx-auto mb-6"></div>
            <p className="text-text-secondary text-lg tracking-wide font-medium max-w-3xl mx-auto">
              Oven-Baked Pizzas • Tavern Classics • Craft Beers • Signature Cocktails • Handhelds • Salads
            </p>
          </div>
        </AnimatedSection>

        {/* Interactive Menu - Same as Homepage */}
        <InteractiveMenu />

        {/* Back to Home - Standardized Design */}
        <AnimatedSection animationType="fade-up">
          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-block bg-white text-black hover:bg-black hover:text-white border border-black hover:border-white px-6 py-2 font-bold text-xs tracking-[0.2em] transition-all"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
