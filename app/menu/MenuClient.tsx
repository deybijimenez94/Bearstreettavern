'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MENU_DATA } from '../../constants/menu';

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
              Add-ons: Any Meat +$7 • Any Vegetable +$5 • Any Cheese +$4.50 • Gluten-Free Crust (11") +$4.50 • Vegan Cheese/Meat +$5
            </p>
            <p className="text-black/60 mb-6 text-sm italic">
              Crust Dips ($3.50): Chipotle lime crema (gf) • Garlic parmesan • Blackened ranch (gf)
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Margherita */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE MARGHERITA</h3>
                  <span className="text-black font-bold">$23.50</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Fior di latte, maldon sea salt, fresh basil
                </p>
                <span className="inline-block mt-2 text-xs bg-green-800 text-white px-3 py-1 tracking-wider mr-2">VEGETARIAN</span>
                <span className="inline-block mt-2 text-xs bg-green-600 text-white px-3 py-1 tracking-wider">VEGAN OPTION</span>
              </div>

              {/* Godfather */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE GODFATHER</h3>
                  <span className="text-black font-bold">$29.50</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Prosciutto, confit garlic, herbed panko, truffle oil, grana padano, mozzarella, arugula
                </p>
                <span className="inline-block mt-2 text-xs bg-black text-white px-3 py-1 tracking-wider">SIGNATURE</span>
              </div>

              {/* Wheeler Hut */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE WHEELER HUT</h3>
                  <span className="text-black font-bold">$26.75</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Mushrooms, ricotta, truffle oil, pesto, mozzarella
                </p>
                <span className="inline-block mt-2 text-xs bg-green-800 text-white px-3 py-1 tracking-wider mr-2">VEGETARIAN</span>
                <span className="inline-block mt-2 text-xs bg-green-600 text-white px-3 py-1 tracking-wider">VEGAN OPTION</span>
              </div>

              {/* Hawaiian */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE HAWAIIAN</h3>
                  <span className="text-black font-bold">$28.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Pulled pork, pineapple, caramelized onions, apple bbq sauce, mozzarella
                </p>
              </div>

              {/* Double Double */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE DOUBLE DOUBLE</h3>
                  <span className="text-black font-bold">$26.50</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Double pepperoni, double cheese
                </p>
              </div>

              {/* Big Bird */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE BIG BIRD</h3>
                  <span className="text-black font-bold">$27.50</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Pesto marinated chicken, bacon, spinach, red onions, goat cheese, mozzarella
                </p>
                <span className="inline-block mt-2 text-xs bg-red-800 text-white px-3 py-1 tracking-wider">POPULAR</span>
              </div>

              {/* Bison */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE BISON</h3>
                  <span className="text-black font-bold">$28.25</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Fior di latte, smoked bison, pomegranate molasses, roasted red peppers, basil
                </p>
              </div>

              {/* Canadian */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE CANADIAN</h3>
                  <span className="text-black font-bold">$28.25</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Mushroom, bacon, pepperoni, maple syrup, mozzarella
                </p>
              </div>

              {/* Mediterranean */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">THE MEDITERRANEAN</h3>
                  <span className="text-black font-bold">$27.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Olives, feta cheese, sun-dried tomatoes, artichokes, red onions, chili flakes, spinach, mozzarella, balsamic glaze
                </p>
                <span className="inline-block mt-2 text-xs bg-green-800 text-white px-3 py-1 tracking-wider mr-2">VEGETARIAN</span>
                <span className="inline-block mt-2 text-xs bg-green-600 text-white px-3 py-1 tracking-wider">VEGAN OPTION</span>
              </div>

              {/* Viva La Pizza */}
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">VIVA LA PIZZA</h3>
                  <span className="text-black font-bold">$27.00</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Soppressata, roasted red peppers, caramelized onions, mozzarella, goat cheese, chipotle mayo, fresh basil
                </p>
              </div>
            </div>
          </section>
          )}

          {/* FOR THE TABLE */}
          {(filter === 'all' || filter === 'food') && (
          <section>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-8 border-b-2 border-warm-brown pb-4 font-bold text-charcoal">
              FOR THE TABLE
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">GARLIC CHEESE FINGERS</h3>
                  <span className="text-black font-bold text-sm">V</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Garlic butter, mozzarella, green onions, served with sweet garlic & marinara sauce
                </p>
                <span className="inline-block mt-2 text-xs bg-green-800 text-white px-3 py-1 tracking-wider">VEGETARIAN</span>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">NACHOS</h3>
                  <span className="text-black font-bold text-sm">GF</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Corn chips, grape tomatoes, mixed cheese, pickled jalapeños, green onions, salsa, sour cream
                </p>
                <p className="text-xs text-black/50 mt-2">$25 • Add guacamole +$5 • Add pulled pork or chicken +$7</p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">BAKED CHICKEN WINGS</h3>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Cast iron roasted - choose: s&p, hot sauce, or apple butter bbq sauce
                </p>
                <p className="text-xs text-black/50 mt-2">$23.50 • Vegetarian option: cauliflower fries +$15</p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">PIMENTO CHEESE DIP</h3>
                  <span className="text-black font-bold text-sm">GF, V</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Roasted red peppers, artichokes, cheddar, cream cheese, served with corn chips
                </p>
                <p className="text-xs text-black/50 mt-2">$17</p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">PULLED PORK MAC & CHEESE</h3>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Pulled pork, cherry tomatoes, green onion, 4 cheese, panko crust
                </p>
                <p className="text-xs text-black/50 mt-2">$25</p>
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
            <p className="text-black/60 mb-6 text-sm italic">Add chicken +$7</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">CAESAR SALAD</h3>
                  <span className="text-black font-bold">$24</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Grana padano, crispy bacon, garlic croutons, lemon, romaine, creamy caesar dressing
                </p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">WINTER SALAD</h3>
                  <span className="text-black font-bold text-sm">V+, DF</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Roasted squash, beets, arugula, whipped feta, walnuts, herb dressing
                </p>
                <p className="text-xs text-black/50 mt-2">$24</p>
                <span className="inline-block mt-2 text-xs bg-green-800 text-white px-3 py-1 tracking-wider">VEGETARIAN</span>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">TAVERN CHOP SALAD</h3>
                  <span className="text-black font-bold text-sm">GF</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Shredded lettuce, pepperoncini, olives, mixed cheese, shallots, chickpeas, grana padano, roasted red peppers, Italian dressing, parsley
                </p>
                <p className="text-xs text-black/50 mt-2">$25</p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">TAVERN BOWL</h3>
                  <span className="text-black font-bold text-sm">V+, GF, N</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Tahini miso dressing, roasted carrots, green onions, sweet potatoes, chickpeas, pickled red cabbage, kimchi
                </p>
                <p className="text-xs text-black/50 mt-2">$24</p>
                <span className="inline-block mt-2 text-xs bg-green-600 text-white px-3 py-1 tracking-wider">VEGAN</span>
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
            <p className="text-black/60 mb-4 italic">Available until 5pm | all items served with salad</p>
            <p className="text-black/70 mb-6 text-sm font-semibold">
              Upgrade: caesar +$3
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">TORPEDO SUB</h3>
                  <span className="text-black font-bold">$20</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Sesame roll, soppressata, salami, mortadella, provolone, roasted red peppers, shallots, pepperoncini, lettuce, mayo, italian vinaigrette
                </p>
              </div>

              <div className="border-b border-black/10 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl tracking-wider text-black">CUBANO</h3>
                  <span className="text-black font-bold">$21</span>
                </div>
                <p className="text-black/70 text-sm tracking-wide">
                  Slow-roasted pork shoulder, provolone, mojo vinaigrette, mustard, honey ham, pickles
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
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">COCKTAILS</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">TAVERN CAESAR</span>
                    <span className="text-black">$16</span>
                  </div>
                  <p className="text-xs text-black/60">Park chili vodka, housemade rim, pickle juice | 16oz</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">SPICY SUNSET</span>
                    <span className="text-black">$16</span>
                  </div>
                  <p className="text-xs text-black/60">Park chili vodka, peach schnapps, passionfruit, strawberry, lemon | 1.5oz</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">CLASSIC MARG</span>
                    <span className="text-black">$16.5</span>
                  </div>
                  <p className="text-xs text-black/60">Espolon blanco, triple sec, lime, agave | 16oz</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">SPICY COCONUT MARG</span>
                    <span className="text-black">$16.5</span>
                  </div>
                  <p className="text-xs text-black/60">Park chili vodka, 1800 coconut tequila, triple sec, lime, agave | 16oz</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">ORANGE & THYME SANGRIA</span>
                    <span className="text-black">$15 / $35</span>
                  </div>
                  <p className="text-xs text-black/60">Vodka, peachtree schnapps/brandy, malbec, orange, orange & thyme syrup, ginger beer | 6oz</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">APPLE PIE ON THE ROCKS</span>
                    <span className="text-black">$15</span>
                  </div>
                  <p className="text-xs text-black/60">Park vanilla vodka, cinnamon liqueur, jaleno's teahouse vanilla apple chai syrup | 1.5oz</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">PARK GIN-GERBORE SLING</span>
                    <span className="text-black">$16.75</span>
                  </div>
                  <p className="text-xs text-black/60">Park alpine dry gin, triple sec, ginger, pineapple, lemon, lime, soda | 8oz</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">FLORAL SMASH</span>
                    <span className="text-black">$16.75</span>
                  </div>
                  <p className="text-xs text-black/60">Park flora & fauna floral gin, chambord, cucumber, lemon, lime, soda | 8oz</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">ALPINE G N' T</span>
                    <span className="text-black">$16</span>
                  </div>
                  <p className="text-xs text-black/60">Park alpine dry gin, fentiman's tonic, rosemary, lime | 1.5oz</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">KODIAK MULE</span>
                    <span className="text-black">$15</span>
                  </div>
                  <p className="text-xs text-black/60">Park vanilla vodka, 1800 coconut tequila, blackcurrant, lime, agave, ginger beer | 1.5oz</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">HOT HONEY OLD FASHIONED</span>
                    <span className="text-black">$16.75</span>
                  </div>
                  <p className="text-xs text-black/60">Park maple rye, forty creek copper pot, bitters, rosemary | 8oz</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">MOUNTAIN JOE</span>
                    <span className="text-black">$9</span>
                  </div>
                  <p className="text-xs text-black/60">Vodka, cold brew, oat milk, touch of sweetness | 250ml can | 6.8% abv | Add rum +$2</p>
                </div>
              </div>
            </div>

            {/* Pints & Steins */}
            <div className="mb-10">
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">PINTS & STEINS</h3>
              <p className="text-black/60 text-sm mb-4 italic">16oz | 32oz</p>

              <div className="mb-6">
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">THREE BEARS BREWERY - BANFF, AB</p>
                <div className="space-y-3">
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold tracking-wide text-sm text-black">'COPPER' ALE</span>
                      <span className="text-black/60 text-sm">$9.75 | $17.25</span>
                    </div>
                    <p className="text-xs text-black/60 mt-1">4.2% ABV</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold tracking-wide text-sm text-black">'PINERY' PILSNER</span>
                      <span className="text-black/60 text-sm">$9.75 | $17.25</span>
                    </div>
                    <p className="text-xs text-black/60 mt-1">4.9% ABV</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold tracking-wide text-sm text-black">'BEAR NECESSITIES' LIGHT LAGER</span>
                      <span className="text-black/60 text-sm">$9.75 | $17.25</span>
                    </div>
                    <p className="text-xs text-black/60 mt-1">3.5% ABV</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold tracking-wide text-sm text-black">'HAPPY TRAILS' PALE ALE</span>
                      <span className="text-black/60 text-sm">$9.75 | $17.25</span>
                    </div>
                    <p className="text-xs text-black/60 mt-1">5% ABV</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold tracking-wide text-sm text-black">'WISHING TREE' HAZY IPA</span>
                      <span className="text-black/60 text-sm">$9.75 | $17.25</span>
                    </div>
                    <p className="text-xs text-black/60 mt-1">6% ABV</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold tracking-wide text-sm text-black">'ENGLISH' DARK ALE</span>
                      <span className="text-black/60 text-sm">$9.75 | $17.25</span>
                    </div>
                    <p className="text-xs text-black/60 mt-1">6% ABV</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">OTHER SELECTIONS</p>
                <div className="space-y-3">
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold tracking-wide text-sm text-black">'RIVER CITY' RASPBERRY ALE</span>
                      <span className="text-black/60 text-sm">$10.25 | $18.25</span>
                    </div>
                    <p className="text-xs text-black/60 mt-1">Brewster Brewing, Calgary AB | 5% ABV</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold tracking-wide text-sm text-black">'WHITE WHIT' BELGIAN WHEAT BEER</span>
                      <span className="text-black/60 text-sm">$10.25 | $18.25</span>
                    </div>
                    <p className="text-xs text-black/60 mt-1">Banff Ave Brewing, Banff AB | 5% ABV</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cans */}
            <div className="mb-10">
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">CANS</h3>

              {/* Light & Fruity */}
              <div className="mb-6">
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">LIGHT & FRUITY</p>
                <div className="space-y-2 text-sm">
                  <p className="text-black/70">'PAPA BEAR' PRAIRIE BLONDE ALE <span className="font-semibold">8.5</span> <span className="text-xs">Half Hitch Brewing, Cochrane AB (355ml, 5%)</span></p>
                  <p className="text-black/70">'POWDER HOUND' BLONDE ALE <span className="font-semibold">9</span> <span className="text-xs">Grizzly Paw, Canmore AB (355ml, 4.5%)</span></p>
                  <p className="text-black/70">'MEXCELLENT' MEXICAN LAGER <span className="font-semibold">9</span> <span className="text-xs">Brewster Brewing, Calgary AB (355ml, 4.5%)</span></p>
                  <p className="text-black/70">'GET LUCKY' LAGER <span className="font-semibold">12.5</span> <span className="text-xs">Born Brewing, Calgary AB (473ml, 5%)</span></p>
                  <p className="text-black/70">'CZECH' PILSNER <span className="font-semibold">14</span> <span className="text-xs">Brewster Brewing, Calgary AB (473ml, 5%)</span></p>
                  <p className="text-black/70">'HOT WEDNESDAY' DRY-HOPPED STYLED C-OLSCH <span className="font-semibold">14</span> <span className="text-xs">Xhale, Calgary AB (473ml, 4.6%)</span></p>
                  <p className="text-black/70">'RUN OR DRY' LIGHT LAGER <span className="font-semibold">9</span> <span className="text-xs">Banff Ave Brewing, Banff AB (355ml, 4.0%)</span></p>
                  <p className="text-black/70">'BABE' TANGERINE DREAM LAGER <span className="font-semibold">9.5</span> <span className="text-xs">Jasper Brewing, Jasper AB (355ml, 4.8%)</span></p>
                  <p className="text-black/70">'OKAMI KASU' JAPANESE ALE <span className="font-semibold">9.5</span> <span className="text-xs">Ot Beautiful Brewing, Calgary AB (355ml, 5%)</span></p>
                  <p className="text-black/70">'BOND STREET' PEACH ALE <span className="font-semibold">9.5</span> <span className="text-xs">Brewster Brewing, Calgary AB (355ml, 5%)</span></p>
                  <p className="text-black/70">'BREWFOOT' BLUEBERRY ALE <span className="font-semibold">9.5</span> <span className="text-xs">Brewster Brewing, Calgary AB (355ml, 5%)</span></p>
                  <p className="text-black/70">'MANGOLORIAN' MANGO ALE <span className="font-semibold">14.5</span> <span className="text-xs">Alley Kat, Edmonton AB (473ml, 5%)</span></p>
                  <p className="text-black/70">'GRUMPY BEAR' HONEY WHEAT ALE <span className="font-semibold">9</span> <span className="text-xs">Grizzly Paw, Canmore AB (355ml, 5%)</span></p>
                  <p className="text-black/70">'PRAIRIE FAIRY' BLACKBERRY WHEAT ALE <span className="font-semibold">14.50</span> <span className="text-xs">Sea Change, Edmonton AB (473ml, 5%)</span></p>
                  <p className="text-black/70">'HEFE' HEFEWEIZEN <span className="font-semibold">9</span> <span className="text-xs">Fahr Brewing, Turner Valley AB (355ml, 5.3%)</span></p>
                </div>
              </div>

              {/* Hoppy */}
              <div className="mb-6">
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">HOPPY</p>
                <div className="space-y-2 text-sm">
                  <p className="text-black/70">'FARMER'S DAUGHTER' PALE ALE <span className="font-semibold">9</span> <span className="text-xs">Half Hitch Brewing, Cochrane AB (355ml, 4.5%)</span></p>
                  <p className="text-black/70">'THE WOLF' HAZY PALE ALE <span className="font-semibold">15</span> <span className="text-xs">Sea Change, Edmonton AB (473ml, 5.5%)</span></p>
                  <p className="text-black/70">'WAVEPOOL' TROPICAL IPA <span className="font-semibold">14.5</span> <span className="text-xs">Eighty Eight, Calgary AB (473ml, 6.2%)</span></p>
                  <p className="text-black/70">'NAMESAKE' HAZY IPA <span className="font-semibold">14</span> <span className="text-xs">Valley Brewing, Penticton BC (473ml, 6.5%)</span></p>
                  <p className="text-black/70">'HI-FI' HAZY IPA <span className="font-semibold">15</span> <span className="text-xs">Eighty Eight, Calgary AB (473ml, 6.7%)</span></p>
                  <p className="text-black/70">'WASTE LAND' WEST COAST IPA <span className="font-semibold">10.50</span> <span className="text-xs">Annex, Calgary AB (355ml, 6.4%)</span></p>
                  <p className="text-black/70">'JUICY GOSSIP' NEW ENGLAND IPA <span className="font-semibold">14.50</span> <span className="text-xs">Troubled Monk, Red Deer AB (473ml, 6.5%)</span></p>
                  <p className="text-black/70">'TOKYO DRIFT' IPA <span className="font-semibold">14</span> <span className="text-xs">Last Best Brewing, Calgary AB (473ml, 7.2%)</span></p>
                </div>
              </div>

              {/* Dark */}
              <div className="mb-6">
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">DARK</p>
                <div className="space-y-2 text-sm">
                  <p className="text-black/70">'LOWER BANKHEAD' BLACK PILSNER <span className="font-semibold">9</span> <span className="text-xs">Banff Ave Brewing, Banff AB (355ml, 4.5%)</span></p>
                  <p className="text-black/70">'IT ALWAYS STARTS IN A TAVERN' AMBER ALE <span className="font-semibold">14</span> <span className="text-xs">Analog, Edmonton AB (473ml, 5.5%)</span></p>
                  <p className="text-black/70">'RUTTING ELK' RED ALE <span className="font-semibold">9</span> <span className="text-xs">Grizzly Paw Brewing, Canmore AB (355ml, 5%)</span></p>
                  <p className="text-black/70">'POWER UP' VANILLA SESSION PORTER <span className="font-semibold">14</span> <span className="text-xs">Analog, Edmonton AB (473ml, 4.9%)</span></p>
                  <p className="text-black/70">MARSHMALLOW PORTER <span className="font-semibold">13</span> <span className="text-xs">Field & Forge, Innisfail, AB (473ml, 5%)</span></p>
                  <p className="text-black/70">'GOOD MORNING' VIETNAMESE COFFEE STOUT <span className="font-semibold">15</span> <span className="text-xs">Eighty Eight, Calgary AB (473ml, 6.5%)</span></p>
                  <p className="text-black/70">'GENTLEMEN' STOUT <span className="font-semibold">9</span> <span className="text-xs">Medicine Hat Brewing, Medicine Hat AB (355ml, 7%)</span></p>
                </div>
              </div>

              {/* Sours & Ciders */}
              <div>
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">SOURS & CIDERS</p>
                <div className="space-y-2 text-sm">
                  <p className="text-black/70">'HAZZYWAT' RASPBERRY SOUR <span className="font-semibold">14.5</span> <span className="text-xs">Alley Kat, Edmonton AB (473ml, 5%)</span></p>
                  <p className="text-black/70">'JAM ROCK' BLACKBERRY VANILLA SOUR <span className="font-semibold">15.5</span> <span className="text-xs">The Establishment, Calgary AB (473ml, 5.6%)</span></p>
                  <p className="text-black/70">APPLE CIDER <span className="font-semibold">14.5</span> <span className="text-xs">No Boats On Sunday, Kelowna BC (473ml, 5%)</span></p>
                  <p className="text-black/70">PEACH CIDER <span className="font-semibold">14.5</span> <span className="text-xs">No Boats On Sunday, Kelowna BC (473ml, 5%)</span></p>
                  <p className="text-black/70">PEAR CIDER <span className="font-semibold">14.5</span> <span className="text-xs">No Boats On Sunday, Kelowna BC (473ml, 5%)</span></p>
                  <p className="text-black/70">GINGER APPLE CIDER <span className="font-semibold">8.75</span> <span className="text-xs">Lone Tree, Vancouver BC (355ml, 5.5%)</span></p>
                  <p className="text-black/70">'RETUN OF THE MAC' CIDER <span className="font-semibold">16</span> <span className="text-xs">Core Values, Canmore AB (473ml, 6.5%)</span></p>
                </div>
              </div>
            </div>

            {/* Wine */}
            <div className="mb-10">
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">WINE</h3>
              <p className="text-black/60 text-sm mb-4 italic">5oz glass / 9oz glass / bottle (750ml)</p>

              <div className="mb-6">
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">SPARKLING</p>
                <div className="border-b border-black/10 pb-3 mb-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-sm text-black">CANELLA PROSECCO DOC</span>
                    <span className="text-black/60 text-sm">$13.25 / $54.5</span>
                  </div>
                  <p className="text-xs text-black/60">Veneto, Italy</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">WHITE</p>
                <div className="space-y-3">
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">ASTROLABE</span>
                      <span className="text-black/60 text-sm">$13.5 / $21 / $64</span>
                    </div>
                    <p className="text-xs text-black/60">Sauvignon Blanc, Marlborough, New Zealand</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">VIGNETI DEL SOLE</span>
                      <span className="text-black/60 text-sm">$12.5 / $18.5 / $53</span>
                    </div>
                    <p className="text-xs text-black/60">Pinot Grigio Delle Venezie DOC, Vineto, Italy</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">FIELDING ESTATE WINERY</span>
                      <span className="text-black/60 text-sm">$12 / $18.5 / $59</span>
                    </div>
                    <p className="text-xs text-black/60">Unoaked Chardonnay, Niagara Peninsula, ON</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">RED</p>
                <div className="space-y-3">
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">DUSTY RIVER</span>
                      <span className="text-black/60 text-sm">$10.5 / $16.5 / $51</span>
                    </div>
                    <p className="text-xs text-black/60">Pinot Noir, Languedoc-Roussillon, France</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">GABBIANO</span>
                      <span className="text-black/60 text-sm">$13 / $19 / $62</span>
                    </div>
                    <p className="text-xs text-black/60">Chianti Classico DOCG, Tuscany, Italy</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">BORTOLUZZI</span>
                      <span className="text-black/60 text-sm">$12.5 / $19.5 / $62</span>
                    </div>
                    <p className="text-xs text-black/60">Cabernet Sauvignon, Friuli-Venezia-Giulia, Italy</p>
                  </div>
                  <div className="border-b border-black/10 pb-3">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold tracking-wide text-sm text-black">ROAD 13 'HONEST JOHN'S'</span>
                      <span className="text-black/60 text-sm">$15 / $24 / $70.5</span>
                    </div>
                    <p className="text-xs text-black/60">Red Blend, Okanagan Valley, BC</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-sm tracking-wide mb-3 text-black/80">ROSÉ</p>
                <div className="border-b border-black/10 pb-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-sm text-black">CEDAR CREEK</span>
                    <span className="text-black/60 text-sm">$13 / $19 / $64</span>
                  </div>
                  <p className="text-xs text-black/60">Pinot Noir Rosé, Okanagan Valley, BC</p>
                </div>
              </div>
            </div>

            {/* Gluten Free */}
            <div className="mb-10">
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">GLUTEN FREE</h3>
              <div className="space-y-2 text-sm">
                <p className="text-black/70">'FORAGER' LAGER <span className="font-semibold">9</span> <span className="text-xs">Whistler Brewing, Whistler BC (355ml, 5%)</span></p>
                <p className="text-black/70">'FORAGER' PALE ALE <span className="font-semibold">9</span> <span className="text-xs">Whistler Brewing, Whistler BC (355ml, 5%)</span></p>
              </div>
            </div>

            {/* Non-Alc Beer */}
            <div className="mb-10">
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">NON - ALC BEER</h3>
              <div className="space-y-2 text-sm">
                <p className="text-black/70">'STRAIGHT EDGE' PALE ALE <span className="font-semibold">11</span> <span className="text-xs">Sea Change Brewery, Edmonton AB (473ml, 0.5%)</span></p>
                <p className="text-black/70">PEACH GOSE <span className="font-semibold">7.5</span> <span className="text-xs">Partake Brewing, Edmonton AB (355ml, 0.3%)</span></p>
                <p className="text-black/70">'DEATH WAVE' NA LAGER <span className="font-semibold">7.5</span> <span className="text-xs">Sea Change Brewery, Edmonton AB (355ml, 0.5%)</span></p>
                <p className="text-black/70">'PARADISCO' NA HAZY IPA <span className="font-semibold">7.5</span> <span className="text-xs">Tuesday Brewing, Calgary AB (355ml, 0.5%)</span></p>
                <p className="text-black/70">'MANGOLORIAN' NA <span className="font-semibold">11</span> <span className="text-xs">Alley Kat, Edmonton AB (473ml, 0.5%)</span></p>
                <p className="text-black/70">DE-ALC APPLE GINGER CIDER <span className="font-semibold">8</span> <span className="text-xs">Lone Tree, Vancouver BC (355ml, 0%)</span></p>
              </div>
            </div>

            {/* Spirit-Free Cocktails */}
            <div className="mb-10">
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">SPIRIT-FREE COCKTAILS</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">BLACKCURRANT MULE</span>
                    <span className="text-black">$10</span>
                  </div>
                  <p className="text-xs text-black/60">Blackcurrant puree, lime, ginger beer</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">FUZZY PEACHLESS</span>
                    <span className="text-black">$10</span>
                  </div>
                  <p className="text-xs text-black/60">Raspberry, pineapple, yuzu, lemon</p>
                </div>
                <div className="border-b border-black/10 pb-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">NOJITO</span>
                    <span className="text-black">$10</span>
                  </div>
                  <p className="text-xs text-black/60">Your choice of passionfruit, yuzu, raspberry puree or classic, lime, mint, soda</p>
                </div>
              </div>
            </div>

            {/* Sodas, Etc. */}
            <div>
              <h3 className="font-bold text-xl tracking-wider mb-4 text-charcoal">SODAS, ETC.</h3>
              <div className="space-y-3">
                <div className="border-b border-black/10 pb-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">TRUEBUCH KOMBUCHA</span>
                    <span className="text-black">$6.75</span>
                  </div>
                  <p className="text-xs text-black/60">(15oz bottle) - Mojito mint | Vanilla chai</p>
                </div>
                <div className="border-b border-black/10 pb-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">GRIZZLY PAW BREWERY SODAS</span>
                    <span className="text-black">$6</span>
                  </div>
                  <p className="text-xs text-black/60">(341ml) - Cream soda | Orange cream soda | Root beer | Grapefruit soda | Black cherry cola</p>
                </div>
                <div className="border-b border-black/10 pb-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold tracking-wide text-black">ANNEX SODA</span>
                    <span className="text-black">$6</span>
                  </div>
                  <p className="text-xs text-black/60">(330ml) - Ginger beer | Saskatoon berry lemonade</p>
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
