'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MenuClient() {
  const [filter, setFilter] = useState<string>('all');

  return (
    <main id="main-content" className="min-h-screen bg-linear-to-b from-gray-50 to-white pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-warm-brown text-white text-xs tracking-[0.3em] mb-6 font-bold">
            BANFF'S BEST PIZZA
          </div>
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-charcoal">
            MENU
          </h1>
          <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
          <p className="text-charcoal/70 text-lg tracking-wide font-medium max-w-3xl mx-auto">
            Oven-Baked Pizzas • Tavern Classics • Craft Beers • Signature Cocktails • Handhelds • Salads
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'food', 'drinks', 'desserts'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 font-bold text-sm tracking-wider transition-all border-2 ${
                filter === category
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black/20 hover:border-black'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Takeout/Para Llevar Section - Compact */}
        <div className="max-w-4xl mx-auto mb-8 bg-warm-brown/10 border-2 border-warm-brown/30 p-6 rounded-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h2 className="font-display text-xl md:text-2xl tracking-tight mb-1 font-black text-charcoal">
                ORDER FOR TAKEOUT
              </h2>
              <p className="text-charcoal/70 text-sm">
                Order online and pick up at the restaurant
              </p>
            </div>
            <Link
              href="/order-online"
              className="inline-block bg-black text-white hover:bg-warm-brown px-8 py-3 font-bold text-xs tracking-wider transition-all whitespace-nowrap"
            >
              ORDER NOW
            </Link>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="max-w-6xl mx-auto space-y-16">

          {/* PIZZAS */}
          {(filter === 'all' || filter === 'food') && (
          <section>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-8 border-b-2 border-warm-brown pb-4 font-bold text-charcoal">
              OVEN-BAKED PIZZAS
            </h2>
            <p className="text-black/60 mb-8 italic">
              11" personal pies • 24-hour fermented dough • Organic San Marzano tomato sauce
            </p>
            <p className="text-black/70 mb-6 text-sm font-semibold">
              Add-ons: Meat +$7 • Vegetables +$3.50 • Cheese +$4.50 • Gluten-Free Crust +$4.50 • Vegan Cheese/Meat +$5
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Margherita */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE MARGHERITA</h3>
                  <span className="text-black font-bold">$23.50</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Buffalo mozzarella, sea salt, basil
                </p>
                <span className="inline-block mt-2 text-xs bg-green-800 text-white px-3 py-1 tracking-wider">VEGETARIAN</span>
              </div>

              {/* Godfather */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE GODFATHER</h3>
                  <span className="text-black font-bold">$29.50</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Prosciutto, confit garlic, truffle oil, grana padano
                </p>
                <span className="inline-block mt-2 text-xs bg-black text-white px-3 py-1 tracking-wider">SIGNATURE</span>
              </div>

              {/* Big Bird */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE BIG BIRD</h3>
                  <span className="text-black font-bold">$27.50</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Pesto chicken, bacon, spinach, goat cheese
                </p>
                <span className="inline-block mt-2 text-xs bg-red-800 text-white px-3 py-1 tracking-wider">POPULAR</span>
              </div>

              {/* Hawaiian */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE HAWAIIAN</h3>
                  <span className="text-black font-bold">$28.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Pulled pork, pineapple, caramelized onions, apple BBQ sauce
                </p>
              </div>

              {/* Double-Double */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE DOUBLE-DOUBLE</h3>
                  <span className="text-black font-bold">$26.50</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Double pepperoni, double cheese
                </p>
              </div>

              {/* Wheeler Hut */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE WHEELER HUT</h3>
                  <span className="text-black font-bold">$26.75</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  B.C. mushrooms, pine nuts, truffle oil, pesto
                </p>
                <span className="inline-block mt-2 text-xs bg-green-800 text-white px-3 py-1 tracking-wider">VEGETARIAN</span>
              </div>

              {/* Bison */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE BISON</h3>
                  <span className="text-black font-bold">$28.25</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Smoked bison, pomegranate molasses, roasted peppers
                </p>
              </div>

              {/* Canadian */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE CANADIAN</h3>
                  <span className="text-black font-bold">$28.25</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Mushroom, bacon, pepperoni, maple syrup
                </p>
              </div>

              {/* Mediterranean */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE MEDITERRANEAN</h3>
                  <span className="text-black font-bold">$27.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Olives, feta, tomatoes, artichokes, red onions
                </p>
                <span className="inline-block mt-2 text-xs bg-green-800 text-white px-3 py-1 tracking-wider">VEGETARIAN</span>
              </div>

              {/* Viva La Pizza */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">VIVA LA PIZZA</h3>
                  <span className="text-black font-bold">$27.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Soppressata, roasted peppers, caramelized onions, chipotle mayo
                </p>
              </div>
            </div>
          </section>
          )}

          {/* TAVERN CLASSICS */}
          {(filter === 'all' || filter === 'food') && (
          <section>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-8 border-b-2 border-warm-brown pb-4 font-bold text-charcoal">
              TAVERN CLASSICS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">GARLIC CHEESE FINGERS</h3>
                  <span className="text-black font-bold">$23.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Garlic butter, mozzarella, green onions with donair and marinara
                </p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">BAKED CHICKEN WINGS</h3>
                  <span className="text-black font-bold">$23.50</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Cast iron roasted with choice of seasonings: salt & pepper, hot sauce, or apple butter BBQ
                </p>
                <p className="text-xs text-black/50 mt-2">Cauliflower vegan option available $15</p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">NACHOS</h3>
                  <span className="text-black font-bold">$25.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Corn chips, tomatoes, mixed cheese, jalapeños, green onions, salsa, sour cream
                </p>
                <p className="text-xs text-black/50 mt-2">Add guacamole +$5 • Add protein +$7</p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">PIMENTO CHEESE DIP</h3>
                  <span className="text-black font-bold">$17.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Roasted red peppers, artichokes, cheddar, cream cheese with corn chips
                </p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">PULLED PORK MAC & CHEESE</h3>
                  <span className="text-black font-bold">$25.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Pork, tomatoes, green onion, four-cheese blend, panko crust
                </p>
              </div>
            </div>
          </section>
          )}

          {/* SALADS */}
          {(filter === 'all' || filter === 'food') && (
          <section>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-8 border-b-2 border-warm-brown pb-4 font-bold text-charcoal">
              SALADS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify_between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">CAESAR SALAD</h3>
                  <span className="text-black font-bold">$19.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Romaine, grana padano, crispy bacon, croutons, creamy dressing
                </p>
                <p className="text-xs text-black/50 mt-2">Add grilled chicken +$7</p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">WINTER SALAD</h3>
                  <span className="text-black font-bold">$24.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Roasted squash, beets, arugula, whipped feta, walnuts
                </p>
                <span className="inline-block mt-2 text-xs bg-green-800 text-white px-3 py-1 tracking-wider">VEGETARIAN</span>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify_between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">TAVERN CHOP SALAD</h3>
                  <span className="text-black font-bold">$25.00</span>
                </div>
                <p className="text-black/70 text_sm tracking-wide">
                  Salami, romaine, pepperoncini, grana padano, chickpeas, Italian dressing
                </p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">TAVERN BOWL</h3>
                  <span className="text-black font-bold">$24.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Tahini-miso dressing, kale, carrots, sweet potatoes, chickpeas, pickled cabbage, kimchi
                </p>
                <span className="inline-block mt-2 text-xs bg-green-800 text-white px-3 py-1 tracking-wider">VEGAN</span>
              </div>
            </div>
          </section>
          )}

          {/* HANDHELDS */}
          {(filter === 'all' || filter === 'food') && (
          <section>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-8 border-b-2 border-warm-brown pb-4 font-bold text-charcoal">
              HANDHELDS
            </h2>
            <p className="text-black/60 mb-4 italic">Available until 5pm</p>
            <p className="text-black/70 mb-6 text-sm font-semibold">
              All served with salad • Upgrade to Caesar +$3
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify_between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">TORPEDO SUB</h3>
                  <span className="text-black font-bold">$20.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Sesame roll, soppressata, salami, provolone, roasted peppers, pepperoncini
                </p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify_between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">CUBANO</h3>
                  <span className="text-black font-bold">$21.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Slow-roasted pork shoulder, provolone, mojo vinaigrette, ham, pickles
                </p>
              </div>
            </div>
          </section>
          )}

          {/* BEVERAGES */}
          {(filter === 'all' || filter === 'drinks') && (
          <section>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-8 border-b-2 border-warm-brown pb-4 font-bold text-charcoal">
              BEVERAGES
            </h2>

            {/* Cocktails */}
            <div className="mb-10">
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">HOUSE COCKTAILS</h3>
              <p className="text-black/60 text-sm mb-4 italic">Signature craft cocktails made with premium spirits</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">TAVERN CAESAR</span>
                    <span className="text-black">$16.00</span>
                  </div>
                  <p className="text-xs text-black/60">Chili vodka, housemade rim, pickle juice</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">SPICY SUNSET</span>
                    <span className="text-black">$15.00</span>
                  </div>
                  <p className="text-xs text-black/60">Chili vodka, peach schnapps, passionfruit, strawberry</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">CLASSIC MARGARITA</span>
                    <span className="text-black">$16.50</span>
                  </div>
                  <p className="text-xs text-black/60">Espolon blanco, triple sec, lime, agave</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">SPICY COCONUT MARGARITA</span>
                    <span className="text-black">$16.50</span>
                  </div>
                  <p className="text-xs text-black/60">Chili vodka, coconut tequila, triple sec</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">ORANGE & THYME SANGRIA</span>
                    <span className="text-black">$15 / $35</span>
                  </div>
                  <p className="text-xs text-black/60">Vodka, brandy, malbec, citrus</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">APPLE PIE ON THE ROCKS</span>
                    <span className="text-black">$15.00</span>
                  </div>
                  <p className="text-xs text-black/60">Vanilla vodka, cinnamon liqueur, chai syrup</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">PARK GINGER SLING</span>
                    <span className="text-black">$16.75</span>
                  </div>
                  <p className="text-xs text-black/60">Alpine gin, triple sec, ginger, pineapple</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">FLORAL SMASH</span>
                    <span className="text-black">$16.75</span>
                  </div>
                  <p className="text-xs text-black/60">Floral gin, Chambord, cucumber, citrus</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">ALPINE G&T</span>
                    <span className="text-black">$16.00</span>
                  </div>
                  <p className="text-xs text-black/60">Alpine gin, Fentiman's tonic, rosemary</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">KODIAK MULE</span>
                    <span className="text-black">$15.00</span>
                  </div>
                  <p className="text-xs text-black/60">Vanilla vodka, blackcurrant, ginger beer</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">HOT HONEY OLD FASHIONED</span>
                    <span className="text-black">$16.75</span>
                  </div>
                  <p className="text-xs text-black/60">Maple rye, hot honey, rosemary</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">MOUNTAIN JOE</span>
                    <span className="text-black">$9.00</span>
                  </div>
                  <p className="text-xs text-black/60">Vodka, cold brew, oat milk (250ml can, 6.8%)</p>
                </div>
              </div>
            </div>

            {/* Craft Beers */}
            <div className="mb-10">
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">CRAFT BEERS ON TAP</h3>
              <p className="text-black/60 text-sm mb-4 italic">Pints (16oz) / Steins (32oz) • $9.25-$10.25</p>

              <div className="mb-6">
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">THREE BEARS BREWERY - BANFF</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-b border-black/10 pb-3">
                    <span className="font-semibold tracking-wide text-sm text-black">COPPER ALE</span>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <span className="font-semibold tracking-wide text-sm text-black">PINERY PILSNER</span>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <span className="font-semibold tracking-wide text-sm text-black">FUJI RICE LAGER</span>
                  </div>
                  <div className="border-b border_black/10 pb-3">
                    <span className="font-semibold tracking-wide text-sm text-black">HAPPY TRAILS PALE ALE</span>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <span className="font-semibold tracking-wide text-sm text-black">WISHING TREE HAZY IPA</span>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <span className="font-semibold tracking-wide text-sm text-black">ENGLISH DARK ALE</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text_sm tracking-wide mb-3 text-black/80">OTHER ALBERTA & BC SELECTIONS</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-b border-black/10 pb-3">
                    <span className="font-semibold tracking-wide text-sm text-black">BREWSTERS</span>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <span className="font-semibold tracking-wide text-sm text-black">BANFF AVE BREWING</span>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <span className="font-semibold tracking-wide text-sm text-black">REGIONAL SELECTIONS</span>
                    <p className="text-xs text-black/50 mt-1">Ask your server for current taps</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottles & Cans */}
            <div className="mb-10">
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">BOTTLES & CANS</h3>
              <p className="text-black/60 text-sm mb-4 italic">Over 30 Alberta & BC craft selections • $8.50-$16</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-b border-black/10 pb-3">
                  <span className="font-semibold tracking-wide text-sm text-black">CRAFT IPAs & PALE ALES</span>
                </div>
                <div className="border-b border-black/10 pb-3">
                  <span className="font-semibold tracking-wide text-sm text-black">SOURS & FRUIT ALES</span>
                </div>
                <div className="border-b border-black/10 pb-3">
                  <span className="font-semibold tracking-wide text-sm text-black">WHEAT BEERS & LAGERS</span>
                </div>
                <div className="border-b border-black/10 pb-3">
                  <span className="font-semibold tracking-wide text-sm text-black">CIDERS</span>
                </div>
              </div>
              <p className="text-xs text-black/50 mt-4">Ask your server for our complete bottle and can selection</p>
            </div>

            {/* Wine */}
            <div className="mb-10">
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">WINES</h3>
              <p className="text-black/60 text-sm mb-4 italic">By the glass (5oz / 9oz) or bottle</p>

              <div className="mb-6">
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">SPARKLING</p>
                <div className="border-b border-black/10 pb-3 mb-3">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-sm text-black">CANELLA PROSECCO</span>
                    <span className="text-black/60 text-sm">$13.25 / $54.50</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">WHITE WINES</p>
                <div className="space-y-3">
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify_between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">ASTROLABE SAUVIGNON BLANC</span>
                      <span className="text-black/60 text-sm">$13.50 / $21 / $64</span>
                    </div>
                    <p className="text-xs text-black/60">New Zealand</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify_between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">VIGNETI DEL SOLE PINOT GRIGIO</span>
                      <span className="text-black/60 text-sm">$12.50 / $18.50 / $53</span>
                    </div>
                    <p className="text-xs text-black/60">Italy</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify_between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">FIELDING ESTATE UNOAKED CHARDONNAY</span>
                      <span className="text-black/60 text-sm">$12 / $18.50 / $59</span>
                    </div>
                    <p className="text-xs text-black/60">Ontario</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">RED WINES</p>
                <div className="space-y-3">
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify_between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">DUSTY RIVER PINOT NOIR</span>
                      <span className="text-black/60 text-sm">$10.50 / $16.50 / $51</span>
                    </div>
                    <p className="text-xs text-black/60">France</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify_between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">GABBIANO CHIANTI CLASSICO</span>
                      <span className="text-black/60 text-sm">$13 / $19 / $62</span>
                    </div>
                    <p className="text-xs text-black/60">Italy</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify_between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">BORTOLUZZI CABERNET SAUVIGNON</span>
                      <span className="text-black/60 text-sm">$12.50 / $19.50 / $62</span>
                    </div>
                    <p className="text-xs text-black/60">Italy</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify_between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">ROAD 13 "HONEST JOHN'S" RED BLEND</span>
                      <span className="text-black/60 text-sm">$15 / $24 / $70.50</span>
                    </div>
                    <p className="text-xs text-black/60">British Columbia</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">ROSÉ</p>
                <div className="border-b border-black/10 pb-3">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-sm text-black">CEDAR CREEK PINOT NOIR ROSÉ</span>
                    <span className="text-black/60 text-sm">$13 / $19 / $64</span>
                  </div>
                  <p className="text-xs text-black/60">British Columbia</p>
                </div>
              </div>
            </div>

            {/* Spirit-Free */}
            <div className="mb-10">
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">SPIRIT-FREE COCKTAILS</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">BLACKCURRANT MULE</span>
                    <span className="text-black">$10.00</span>
                  </div>
                  <p className="text-xs text-black/60">Blackcurrant, lime, ginger beer</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">FUZZY PEACHLESS</span>
                    <span className="text-black">$10.00</span>
                  </div>
                  <p className="text-xs text-black/60">Raspberry, pineapple, yuzu, lemon</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">NOJITO</span>
                    <span className="text-black">$10.00</span>
                  </div>
                  <p className="text-xs text-black/60">Choice: passionfruit, yuzu, or raspberry with lime, mint, soda</p>
                </div>
              </div>
            </div>

            {/* Non-Alcoholic */}
            <div>
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">NON-ALCOHOLIC BEVERAGES</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">TRUEBUCH KOMBUCHA</span>
                    <span className="text-black">$6.75</span>
                  </div>
                  <p className="text-xs text-black/60">Mojito mint or vanilla chai (12oz)</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">GRIZZLY PAW SODAS</span>
                    <span className="text-black">$6.00</span>
                  </div>
                  <p className="text-xs text-black/60">Cream, orange cream, root beer, grapefruit, black cherry</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify_between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">ANNEX SODA</span>
                    <span className="text-black">$6.00</span>
                  </div>
                  <p className="text-xs text-black/60">Ginger beer or saskatoon berry lemonade</p>
                </div>
              </div>
            </div>
          </section>
          )}

          {/* DESSERTS */}
          {(filter === 'all' || filter === 'desserts') && (
          <section>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-8 border-b-2 border-warm-brown pb-4 font-bold text-charcoal">
              DESSERTS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify_between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">SALTED CARAMEL BROWNIE</h3>
                  <span className="text-black font-bold">$13.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Topped with vanilla ice cream
                </p>
              </div>
            </div>
          </section>
          )}

          {/* KIDS MENU */}
          {(filter === 'all' || filter === 'food') && (
          <section>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-8 border-b-2 border-warm-brown pb-4 font-bold text-charcoal">
              KIDS MENU
            </h2>
            <p className="text-black/60 mb-8 italic">For guests under 12 years old</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify_between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">PEPPERONI PIZZA</h3>
                  <span className="text-black font-bold">$13.00</span>
                </div>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify_between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">CHEESY CHEESE PIZZA</h3>
                  <span className="text-black font-bold">$14.00</span>
                </div>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify_between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">HAWAIIAN PIZZA</h3>
                  <span className="text-black font-bold">$14.00</span>
                </div>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify_between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">MAC & CHEESE</h3>
                  <span className="text-black font-bold">$13.00</span>
                </div>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify_between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text_black">NACHOS</h3>
                  <span className="text-black font-bold">$13.00</span>
                </div>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify_between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text_black">CAESAR SALAD</h3>
                  <span className="text-black font-bold">$9.00</span>
                </div>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify_between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">ICE CREAM</h3>
                  <span className="text-black font-bold">$6.00</span>
                </div>
              </div>
            </div>
          </section>
          )}

          {/* Daily Specials Banner */}
          <section className="bg-black text-white p-12 text-center rounded-lg mb-16">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-4 font-black">
              DAILY SPECIALS
            </h2>
            <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-white/90 tracking-wide font-medium text-lg mb-4">
              Pizza & Calzone Specials Available
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
              <div>
                <p className="text-white font-bold mb-2">Sunday & Monday</p>
                <p className="text-white/70 text-sm">5:00 PM onwards • Dine-in only</p>
              </div>
              <div>
                <p className="text-white font-bold mb-2">Tuesday - Thursday</p>
                <p className="text-white/70 text-sm">All day • Dine-in only</p>
              </div>
            </div>
            <p className="text-white/60 text-xs mt-6">Select pizzas and calzones only • Ask your server for details</p>
          </section>

          {/* Dietary Options Banner */}
          <section className="bg-gray-50 border-2 border-gray-200 p-12 text-center rounded-lg">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4 font-black text-charcoal">
              DIETARY OPTIONS
            </h2>
            <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
            <p className="text-black/90 tracking-wide font-medium text-lg mb-4">
              We offer Gluten-Free, Vegetarian, Vegan, and Nut-Free options
            </p>
            <p className="text-black/60 text-sm mb-4">
              Please inform your server of any dietary restrictions or allergies
            </p>
            <p className="text-black/70 text-xs">
              Take-out available via XDineApp • Dog-friendly patio
            </p>
          </section>

        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-block bg-black text-white hover:bg-black/80 px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-black"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
