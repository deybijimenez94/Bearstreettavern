'use client';

import { useState, useEffect, useRef } from 'react';
import { MENU_DATA } from '@/constants/menu';

type MenuTab = 'pizzas' | 'salads' | 'forthetable' | 'beers' | 'cocktails' | 'wine' | 'nonalcohol' | 'kids';

export default function InteractiveMenu() {
  const [activeTab, setActiveTab] = useState<MenuTab>('pizzas');
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="menu" className="py-16 md:py-24 bg-bg-secondary relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-12 ${isVisible ? 'scroll-reveal' : ''}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight font-bold">
            OUR MENU
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
        </div>

        {/* Tab Navigation */}
        <div className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-16 max-w-5xl mx-auto ${isVisible ? 'scroll-reveal scroll-reveal-delay-1' : ''}`}>
          <button
            onClick={() => setActiveTab('pizzas')}
            className={`px-4 md:px-6 py-3 font-bold text-xs md:text-sm tracking-wider transition-all duration-300 ${
              activeTab === 'pizzas'
                ? 'bg-accent-primary text-black'
                : 'bg-transparent border-2 border-border-tabs text-white/70 hover:text-white hover:border-white/30'
            }`}
          >
            PIZZAS
          </button>
          <button
            onClick={() => setActiveTab('salads')}
            className={`px-4 md:px-6 py-3 font-bold text-xs md:text-sm tracking-wider transition-all duration-300 ${
              activeTab === 'salads'
                ? 'bg-accent-primary text-black'
                : 'bg-transparent border-2 border-border-tabs text-white/70 hover:text-white hover:border-white/30'
            }`}
          >
            SALADS
          </button>
          <button
            onClick={() => setActiveTab('forthetable')}
            className={`px-4 md:px-6 py-3 font-bold text-xs md:text-sm tracking-wider transition-all duration-300 ${
              activeTab === 'forthetable'
                ? 'bg-accent-primary text-black'
                : 'bg-transparent border-2 border-border-tabs text-white/70 hover:text-white hover:border-white/30'
            }`}
          >
            FOR THE TABLE
          </button>
          <button
            onClick={() => setActiveTab('beers')}
            className={`px-4 md:px-6 py-3 font-bold text-xs md:text-sm tracking-wider transition-all duration-300 ${
              activeTab === 'beers'
                ? 'bg-accent-primary text-black'
                : 'bg-transparent border-2 border-border-tabs text-white/70 hover:text-white hover:border-white/30'
            }`}
          >
            BEERS
          </button>
          <button
            onClick={() => setActiveTab('cocktails')}
            className={`px-4 md:px-6 py-3 font-bold text-xs md:text-sm tracking-wider transition-all duration-300 ${
              activeTab === 'cocktails'
                ? 'bg-accent-primary text-black'
                : 'bg-transparent border-2 border-border-tabs text-white/70 hover:text-white hover:border-white/30'
            }`}
          >
            COCKTAILS
          </button>
          <button
            onClick={() => setActiveTab('wine')}
            className={`px-4 md:px-6 py-3 font-bold text-xs md:text-sm tracking-wider transition-all duration-300 ${
              activeTab === 'wine'
                ? 'bg-accent-primary text-black'
                : 'bg-transparent border-2 border-border-tabs text-white/70 hover:text-white hover:border-white/30'
            }`}
          >
            WINE
          </button>
          <button
            onClick={() => setActiveTab('nonalcohol')}
            className={`px-4 md:px-6 py-3 font-bold text-xs md:text-sm tracking-wider transition-all duration-300 ${
              activeTab === 'nonalcohol'
                ? 'bg-accent-primary text-black'
                : 'bg-transparent border-2 border-border-tabs text-white/70 hover:text-white hover:border-white/30'
            }`}
          >
            NON-ALCOHOL
          </button>
          <button
            onClick={() => setActiveTab('kids')}
            className={`px-4 md:px-6 py-3 font-bold text-xs md:text-sm tracking-wider transition-all duration-300 ${
              activeTab === 'kids'
                ? 'bg-accent-primary text-black'
                : 'bg-transparent border-2 border-border-tabs text-white/70 hover:text-white hover:border-white/30'
            }`}
          >
            KIDS & DESSERT
          </button>
        </div>

        {/* Menu Content */}
        <div className="max-w-7xl mx-auto">
          {activeTab === 'pizzas' && (
            <div className="animate-fade-in">
              {/* Signature Pizzas */}
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl text-white mb-4 text-center font-bold tracking-wide">
                  SIGNATURE PIZZAS
                </h3>
                <p className="text-text-muted text-center text-sm mb-4 italic">
                  11" personal pies • 24-hour fermented dough • Organic San Marzano tomato sauce
                </p>
                <p className="text-text-secondary text-center text-sm mb-6 font-semibold">
                  Add-ons: Any Meat +$7 • Any Vegetable +$5 • Any Cheese +$4.50 • Gluten-Free Crust +$4.50 • Vegan Cheese/Meat +$5
                </p>
                <p className="text-text-muted text-center text-sm mb-8 italic">
                  Crust Dips ($3.50): Chipotle lime crema (gf) • Garlic parmesan • Blackened ranch (gf)
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {MENU_DATA.pizzas.map((pizza, idx) => (
                    <div
                      key={idx}
                      className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8 hover:border-accent-primary/30 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-xl text-white">
                          {pizza.name}
                        </h4>
                        <span className="text-accent-secondary font-mono text-xl ml-4 shrink-0">
                          ${pizza.price}
                        </span>
                      </div>
                      <p className="text-text-secondary text-base mb-4 leading-relaxed">
                        {pizza.description}
                      </p>
                      {pizza.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {pizza.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="bg-accent-primary/20 text-accent-secondary px-3 py-1 text-xs tracking-wider font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Important Notes */}
                <div className="mt-8 p-6 bg-accent-primary/10 backdrop-blur-sm border border-accent-primary/30 rounded-[3rem]">
                  <p className="text-accent-secondary text-sm font-semibold text-center mb-2">
                    ⚠️ ALLERGY INFORMATION
                  </p>
                  <p className="text-text-secondary text-sm text-center">
                    Please inform your server of any allergies. All pizzas can be made gluten-free or vegan upon request.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'salads' && (
            <div className="animate-fade-in">
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl text-white mb-4 text-center font-bold tracking-wide">
                  SALADS
                </h3>
                <p className="text-text-muted text-center text-base mb-8 italic">Add chicken +$7</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">CAESAR SALAD</h4>
                      <span className="text-accent-secondary font-mono text-xl">$24</span>
                    </div>
                    <p className="text-text-secondary text-base">
                      Grana padano, crispy bacon, garlic croutons, lemon, romaine, creamy caesar dressing
                    </p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">WINTER SALAD</h4>
                      <span className="text-accent-secondary font-mono text-xl">$24</span>
                    </div>
                    <p className="text-text-secondary text-base mb-4">
                      Roasted squash, beets, arugula, whipped feta, walnuts, herb dressing
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent-primary/20 text-accent-secondary px-3 py-1 text-xs tracking-wider font-semibold">
                        V+
                      </span>
                      <span className="bg-accent-primary/20 text-accent-secondary px-3 py-1 text-xs tracking-wider font-semibold">
                        DAIRY FREE
                      </span>
                    </div>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">TAVERN CHOP SALAD</h4>
                      <span className="text-accent-secondary font-mono text-xl">$25</span>
                    </div>
                    <p className="text-text-secondary text-base mb-4">
                      Shredded lettuce, pepperoncini, olives, mixed cheese, shallots, chickpeas, grana padano, roasted red peppers, Italian dressing, parsley
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent-primary/20 text-accent-secondary px-3 py-1 text-xs tracking-wider font-semibold">
                        GLUTEN FREE
                      </span>
                    </div>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">TAVERN BOWL</h4>
                      <span className="text-accent-secondary font-mono text-xl">$24</span>
                    </div>
                    <p className="text-text-secondary text-base mb-4">
                      Tahini miso dressing, roasted carrots, green onions, sweet potatoes, chickpeas, pickled red cabbage, kimchi
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent-primary/20 text-accent-secondary px-3 py-1 text-xs tracking-wider font-semibold">
                        V+
                      </span>
                      <span className="bg-accent-primary/20 text-accent-secondary px-3 py-1 text-xs tracking-wider font-semibold">
                        GLUTEN FREE
                      </span>
                      <span className="bg-accent-primary/20 text-accent-secondary px-3 py-1 text-xs tracking-wider font-semibold">
                        NUT FREE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-accent-primary/10 backdrop-blur-sm border border-accent-primary/30 rounded-[3rem]">
                  <p className="text-accent-secondary text-sm font-semibold text-center mb-2">
                    ⚠️ ALLERGY INFORMATION
                  </p>
                  <p className="text-text-secondary text-sm text-center">
                    Please inform your server of any allergies or dietary restrictions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'forthetable' && (
            <div className="animate-fade-in">
              <div className="mb-12">
                <h3 className="text-3xl md:text-4xl text-white mb-8 text-center font-bold tracking-wide">
                  FOR THE TABLE
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">GARLIC CHEESE FINGERS</h4>
                      <span className="text-accent-secondary font-mono text-xl">$17</span>
                    </div>
                    <p className="text-text-secondary text-base mb-4">
                      Garlic butter, mozzarella, green onions, served with sweet garlic & marinara sauce
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent-primary/20 text-accent-secondary px-3 py-1 text-xs tracking-wider font-semibold">
                        VEGETARIAN
                      </span>
                    </div>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">NACHOS</h4>
                      <span className="text-accent-secondary font-mono text-xl">$25</span>
                    </div>
                    <p className="text-text-secondary text-base mb-3">
                      Corn chips, grape tomatoes, mixed cheese, pickled jalapeños, green onions, salsa, sour cream
                    </p>
                    <p className="text-text-muted text-sm italic mb-3">
                      Add guacamole +$5 | Add pulled pork or chicken +$7
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent-primary/20 text-accent-secondary px-3 py-1 text-xs tracking-wider font-semibold">
                        GLUTEN FREE
                      </span>
                    </div>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">BAKED CHICKEN WINGS</h4>
                      <span className="text-accent-secondary font-mono text-xl">$23.50</span>
                    </div>
                    <p className="text-text-secondary text-base mb-3">
                      Cast iron roasted, choose: s&p, hot sauce, or apple butter bbq sauce
                    </p>
                    <p className="text-text-muted text-sm italic">
                      Vegetarian option: cauliflower fries +$15
                    </p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">PIMENTO CHEESE DIP</h4>
                      <span className="text-accent-secondary font-mono text-xl">$17</span>
                    </div>
                    <p className="text-text-secondary text-base mb-4">
                      Roasted red peppers, artichokes, cheddar, cream cheese, served with corn chips
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent-primary/20 text-accent-secondary px-3 py-1 text-xs tracking-wider font-semibold">
                        GLUTEN FREE
                      </span>
                      <span className="bg-accent-primary/20 text-accent-secondary px-3 py-1 text-xs tracking-wider font-semibold">
                        VEGETARIAN
                      </span>
                    </div>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">PULLED PORK MAC & CHEESE</h4>
                      <span className="text-accent-secondary font-mono text-xl">$25</span>
                    </div>
                    <p className="text-text-secondary text-base">
                      Pulled pork, cherry tomatoes, green onion, 4 cheese, panko crust
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-accent-primary/10 backdrop-blur-sm border border-accent-primary/30 rounded-[3rem]">
                  <p className="text-accent-secondary text-sm font-semibold text-center mb-2">
                    ⚠️ ALLERGY INFORMATION
                  </p>
                  <p className="text-text-secondary text-sm text-center">
                    Please inform your server of any allergies or dietary restrictions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'beers' && (
            <div className="animate-fade-in">
              {/* Pints & Steins */}
              <div className="mb-16">
                <h3 className="text-3xl md:text-4xl text-white mb-4 text-center font-bold tracking-wide">
                  PINTS & STEINS
                </h3>
                <p className="text-text-muted text-center text-base mb-8 italic">16oz | 32oz</p>

                <div className="mb-10">
                  <h4 className="font-bold text-2xl text-accent-primary mb-6 text-center">THREE BEARS BREWERY - BANFF, AB</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-bold text-xl text-white">'COPPER' ALE</h5>
                          <p className="text-text-muted text-sm">4.2% ABV</p>
                        </div>
                        <span className="text-accent-secondary font-mono text-lg">$9.75 | $17.25</span>
                      </div>
                    </div>
                    <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-bold text-xl text-white">'PINERY' PILSNER</h5>
                          <p className="text-text-muted text-sm">4.9% ABV</p>
                        </div>
                        <span className="text-accent-secondary font-mono text-lg">$9.75 | $17.25</span>
                      </div>
                    </div>
                    <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-bold text-xl text-white">'BEAR NECESSITIES' LIGHT LAGER</h5>
                          <p className="text-text-muted text-sm">3.5% ABV</p>
                        </div>
                        <span className="text-accent-secondary font-mono text-lg">$9.75 | $17.25</span>
                      </div>
                    </div>
                    <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-bold text-xl text-white">'HAPPY TRAILS' PALE ALE</h5>
                          <p className="text-text-muted text-sm">5% ABV</p>
                        </div>
                        <span className="text-accent-secondary font-mono text-lg">$9.75 | $17.25</span>
                      </div>
                    </div>
                    <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-bold text-xl text-white">'WISHING TREE' HAZY IPA</h5>
                          <p className="text-text-muted text-sm">6% ABV</p>
                        </div>
                        <span className="text-accent-secondary font-mono text-lg">$9.75 | $17.25</span>
                      </div>
                    </div>
                    <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-bold text-xl text-white">'ENGLISH' DARK ALE</h5>
                          <p className="text-text-muted text-sm">6% ABV</p>
                        </div>
                        <span className="text-accent-secondary font-mono text-lg">$9.75 | $17.25</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="font-semibold text-xl text-white mb-6 text-center">OTHER SELECTIONS</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-bold text-xl text-white">'RIVER CITY' RASPBERRY ALE</h5>
                          <p className="text-text-muted text-sm">Brewster Brewing, Calgary AB | 5% ABV</p>
                        </div>
                        <span className="text-accent-secondary font-mono text-lg">$10.25 | $18.25</span>
                      </div>
                    </div>
                    <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-bold text-xl text-white">'WHITE WHIT' BELGIAN WHEAT BEER</h5>
                          <p className="text-text-muted text-sm">Banff Ave Brewing, Banff AB | 5% ABV</p>
                        </div>
                        <span className="text-accent-secondary font-mono text-lg">$10.25 | $18.25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cans */}
              <div className="mb-16">
                <h3 className="text-3xl md:text-4xl text-white mb-8 text-center font-bold tracking-wide">
                  CANS
                </h3>

                {/* Light & Fruity */}
                <div className="mb-10">
                  <h4 className="font-bold text-xl text-accent-primary mb-6 text-center">LIGHT & FRUITY</h4>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-6">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <p className="text-text-secondary">'PAPA BEAR' PRAIRIE BLONDE ALE <span className="text-accent-secondary font-semibold">$8.50</span> <span className="text-text-muted text-xs block">Half Hitch Brewing, Cochrane AB (355ml, 5%)</span></p>
                      <p className="text-text-secondary">'POWDER HOUND' BLONDE ALE <span className="text-accent-secondary font-semibold">$9</span> <span className="text-text-muted text-xs block">Grizzly Paw, Canmore AB (355ml, 4.5%)</span></p>
                      <p className="text-text-secondary">'MEXCELLENT' MEXICAN LAGER <span className="text-accent-secondary font-semibold">$9</span> <span className="text-text-muted text-xs block">Brewster Brewing, Calgary AB (355ml, 4.5%)</span></p>
                      <p className="text-text-secondary">'GET LUCKY' LAGER <span className="text-accent-secondary font-semibold">$12.50</span> <span className="text-text-muted text-xs block">Born Brewing, Calgary AB (473ml, 5%)</span></p>
                      <p className="text-text-secondary">'CZECH' PILSNER <span className="text-accent-secondary font-semibold">$14</span> <span className="text-text-muted text-xs block">Brewster Brewing, Calgary AB (473ml, 5%)</span></p>
                      <p className="text-text-secondary">'RUN OR DRY' LIGHT LAGER <span className="text-accent-secondary font-semibold">$9</span> <span className="text-text-muted text-xs block">Banff Ave Brewing, Banff AB (355ml, 4.0%)</span></p>
                      <p className="text-text-secondary">'GRUMPY BEAR' HONEY WHEAT ALE <span className="text-accent-secondary font-semibold">$9</span> <span className="text-text-muted text-xs block">Grizzly Paw, Canmore AB (355ml, 5%)</span></p>
                      <p className="text-text-secondary">'BOND STREET' PEACH ALE <span className="text-accent-secondary font-semibold">$9.50</span> <span className="text-text-muted text-xs block">Brewster Brewing, Calgary AB (355ml, 5%)</span></p>
                    </div>
                  </div>
                </div>

                {/* Hoppy */}
                <div className="mb-10">
                  <h4 className="font-bold text-xl text-accent-primary mb-6 text-center">HOPPY</h4>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-6">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <p className="text-text-secondary">'FARMER'S DAUGHTER' PALE ALE <span className="text-accent-secondary font-semibold">$9</span> <span className="text-text-muted text-xs block">Half Hitch Brewing, Cochrane AB (355ml, 4.5%)</span></p>
                      <p className="text-text-secondary">'THE WOLF' HAZY PALE ALE <span className="text-accent-secondary font-semibold">$15</span> <span className="text-text-muted text-xs block">Sea Change, Edmonton AB (473ml, 5.5%)</span></p>
                      <p className="text-text-secondary">'WAVEPOOL' TROPICAL IPA <span className="text-accent-secondary font-semibold">$14.50</span> <span className="text-text-muted text-xs block">Eighty Eight, Calgary AB (473ml, 6.2%)</span></p>
                      <p className="text-text-secondary">'NAMESAKE' HAZY IPA <span className="text-accent-secondary font-semibold">$14</span> <span className="text-text-muted text-xs block">Valley Brewing, Penticton BC (473ml, 6.5%)</span></p>
                      <p className="text-text-secondary">'WASTE LAND' WEST COAST IPA <span className="text-accent-secondary font-semibold">$10.50</span> <span className="text-text-muted text-xs block">Annex, Calgary AB (355ml, 6.4%)</span></p>
                      <p className="text-text-secondary">'TOKYO DRIFT' IPA <span className="text-accent-secondary font-semibold">$14</span> <span className="text-text-muted text-xs block">Last Best Brewing, Calgary AB (473ml, 7.2%)</span></p>
                    </div>
                  </div>
                </div>

                {/* Dark */}
                <div className="mb-10">
                  <h4 className="font-bold text-xl text-accent-primary mb-6 text-center">DARK</h4>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-6">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <p className="text-text-secondary">'LOWER BANKHEAD' BLACK PILSNER <span className="text-accent-secondary font-semibold">$9</span> <span className="text-text-muted text-xs block">Banff Ave Brewing, Banff AB (355ml, 4.5%)</span></p>
                      <p className="text-text-secondary">'RUTTING ELK' RED ALE <span className="text-accent-secondary font-semibold">$9</span> <span className="text-text-muted text-xs block">Grizzly Paw Brewing, Canmore AB (355ml, 5%)</span></p>
                      <p className="text-text-secondary">'POWER UP' VANILLA SESSION PORTER <span className="text-accent-secondary font-semibold">$14</span> <span className="text-text-muted text-xs block">Analog, Edmonton AB (473ml, 4.9%)</span></p>
                      <p className="text-text-secondary">'GENTLEMEN' STOUT <span className="text-accent-secondary font-semibold">$9</span> <span className="text-text-muted text-xs block">Medicine Hat Brewing, Medicine Hat AB (355ml, 7%)</span></p>
                    </div>
                  </div>
                </div>

                {/* Sours & Ciders */}
                <div className="mb-10">
                  <h4 className="font-bold text-xl text-accent-primary mb-6 text-center">SOURS & CIDERS</h4>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-6">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <p className="text-text-secondary">APPLE CIDER <span className="text-accent-secondary font-semibold">$14.50</span> <span className="text-text-muted text-xs block">No Boats On Sunday, Kelowna BC (473ml, 5%)</span></p>
                      <p className="text-text-secondary">PEACH CIDER <span className="text-accent-secondary font-semibold">$14.50</span> <span className="text-text-muted text-xs block">No Boats On Sunday, Kelowna BC (473ml, 5%)</span></p>
                      <p className="text-text-secondary">PEAR CIDER <span className="text-accent-secondary font-semibold">$14.50</span> <span className="text-text-muted text-xs block">No Boats On Sunday, Kelowna BC (473ml, 5%)</span></p>
                      <p className="text-text-secondary">GINGER APPLE CIDER <span className="text-accent-secondary font-semibold">$8.75</span> <span className="text-text-muted text-xs block">Lone Tree, Vancouver BC (355ml, 5.5%)</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gluten Free */}
              <div className="mb-10">
                <h3 className="text-3xl md:text-4xl text-white mb-8 text-center font-bold tracking-wide">
                  GLUTEN FREE
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-xl text-white">'FORAGER' LAGER</h4>
                        <p className="text-text-muted text-sm mt-1">Whistler Brewing, Whistler BC (355ml, 5%)</p>
                      </div>
                      <span className="text-accent-secondary font-mono text-xl">$9</span>
                    </div>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-xl text-white">'FORAGER' PALE ALE</h4>
                        <p className="text-text-muted text-sm mt-1">Whistler Brewing, Whistler BC (355ml, 5%)</p>
                      </div>
                      <span className="text-accent-secondary font-mono text-xl">$9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cocktails' && (
            <div className="animate-fade-in">
              <div className="mb-16">
                <h3 className="text-3xl md:text-4xl text-white mb-8 text-center font-bold tracking-wide">
                  SIGNATURE COCKTAILS
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">TAVERN CAESAR</h4>
                      <span className="text-accent-secondary font-mono text-xl">$16</span>
                    </div>
                    <p className="text-text-muted text-sm">Park chili vodka, housemade rim, pickle juice | 16oz</p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">SPICY SUNSET</h4>
                      <span className="text-accent-secondary font-mono text-xl">$16</span>
                    </div>
                    <p className="text-text-muted text-sm">Park chili vodka, peach schnapps, passionfruit, strawberry, lemon | 1.5oz</p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">CLASSIC MARG</h4>
                      <span className="text-accent-secondary font-mono text-xl">$16.50</span>
                    </div>
                    <p className="text-text-muted text-sm">Espolon blanco, triple sec, lime, agave | 16oz</p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">SPICY COCONUT MARG</h4>
                      <span className="text-accent-secondary font-mono text-xl">$16.50</span>
                    </div>
                    <p className="text-text-muted text-sm">Park chili vodka, 1800 coconut tequila, triple sec, lime, agave | 16oz</p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">ORANGE & THYME SANGRIA</h4>
                      <span className="text-accent-secondary font-mono text-xl">$15 / $35</span>
                    </div>
                    <p className="text-text-muted text-sm">Vodka, peachtree schnapps/brandy, malbec, orange, orange & thyme syrup, ginger beer | 6oz</p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">KODIAK MULE</h4>
                      <span className="text-accent-secondary font-mono text-xl">$15</span>
                    </div>
                    <p className="text-text-muted text-sm">Park vanilla vodka, 1800 coconut tequila, blackcurrant, lime, agave, ginger beer | 1.5oz</p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">HOT HONEY OLD FASHIONED</h4>
                      <span className="text-accent-secondary font-mono text-xl">$16.75</span>
                    </div>
                    <p className="text-text-muted text-sm">Park maple rye, forty creek copper pot, bitters, rosemary | 8oz</p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">PARK GIN-GERBORE SLING</h4>
                      <span className="text-accent-secondary font-mono text-xl">$16.75</span>
                    </div>
                    <p className="text-text-muted text-sm">Park alpine dry gin, triple sec, ginger, pineapple, lemon, lime, soda | 8oz</p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">MOUNTAIN JOE</h4>
                      <span className="text-accent-secondary font-mono text-xl">$9</span>
                    </div>
                    <p className="text-text-muted text-sm">Vodka, cold brew, oat milk, touch of sweetness | 250ml can | 6.8% abv</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'wine' && (
            <div className="animate-fade-in">
              <div className="mb-16">
                <h3 className="text-3xl md:text-4xl text-white mb-4 text-center font-bold tracking-wide">
                  WINE
                </h3>
                <p className="text-text-muted text-center text-base mb-8 italic">5oz glass / 9oz glass / bottle (750ml)</p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Sparkling */}
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="mb-4">
                      <h4 className="font-bold text-xl text-accent-primary mb-4">SPARKLING</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-lg text-white">CANELLA PROSECCO DOC</h5>
                            <p className="text-text-muted text-sm">Veneto, Italy</p>
                          </div>
                          <span className="text-accent-secondary font-mono text-base">$13.25 / $54.50</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* White */}
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="mb-4">
                      <h4 className="font-bold text-xl text-accent-primary mb-4">WHITE</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-lg text-white">ASTROLABE</h5>
                            <p className="text-text-muted text-sm">Sauvignon Blanc, Marlborough, New Zealand</p>
                          </div>
                          <span className="text-accent-secondary font-mono text-base">$13.50 / $21 / $64</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-lg text-white">VIGNETI DEL SOLE</h5>
                            <p className="text-text-muted text-sm">Pinot Grigio, Vineto, Italy</p>
                          </div>
                          <span className="text-accent-secondary font-mono text-base">$12.50 / $18.50 / $53</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-lg text-white">FIELDING ESTATE</h5>
                            <p className="text-text-muted text-sm">Unoaked Chardonnay, Niagara Peninsula, ON</p>
                          </div>
                          <span className="text-accent-secondary font-mono text-base">$12 / $18.50 / $59</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Red */}
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="mb-4">
                      <h4 className="font-bold text-xl text-accent-primary mb-4">RED</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-lg text-white">DUSTY RIVER</h5>
                            <p className="text-text-muted text-sm">Pinot Noir, Languedoc-Roussillon, France</p>
                          </div>
                          <span className="text-accent-secondary font-mono text-base">$10.50 / $16.50 / $51</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-lg text-white">GABBIANO</h5>
                            <p className="text-text-muted text-sm">Chianti Classico DOCG, Tuscany, Italy</p>
                          </div>
                          <span className="text-accent-secondary font-mono text-base">$13 / $19 / $62</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-lg text-white">BORTOLUZZI</h5>
                            <p className="text-text-muted text-sm">Cabernet Sauvignon, Friuli-Venezia-Giulia, Italy</p>
                          </div>
                          <span className="text-accent-secondary font-mono text-base">$12.50 / $19.50 / $62</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rosé */}
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="mb-4">
                      <h4 className="font-bold text-xl text-accent-primary mb-4">ROSÉ</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-lg text-white">CEDAR CREEK</h5>
                            <p className="text-text-muted text-sm">Pinot Noir Rosé, Okanagan Valley, BC</p>
                          </div>
                          <span className="text-accent-secondary font-mono text-base">$13 / $19 / $64</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'nonalcohol' && (
            <div className="animate-fade-in">
              {/* Non-Alcoholic Beer */}
              <div className="mb-16">
                <h3 className="text-3xl md:text-4xl text-white mb-8 text-center font-bold tracking-wide">
                  NON-ALCOHOLIC BEER
                </h3>
                <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-6">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <p className="text-text-secondary">'STRAIGHT EDGE' PALE ALE <span className="text-accent-secondary font-semibold">$11</span> <span className="text-text-muted text-xs block">Sea Change Brewery, Edmonton AB (473ml, 0.5%)</span></p>
                    <p className="text-text-secondary">PEACH GOSE <span className="text-accent-secondary font-semibold">$7.50</span> <span className="text-text-muted text-xs block">Partake Brewing, Edmonton AB (355ml, 0.3%)</span></p>
                    <p className="text-text-secondary">'DEATH WAVE' NA LAGER <span className="text-accent-secondary font-semibold">$7.50</span> <span className="text-text-muted text-xs block">Sea Change Brewery, Edmonton AB (355ml, 0.5%)</span></p>
                    <p className="text-text-secondary">'PARADISCO' NA HAZY IPA <span className="text-accent-secondary font-semibold">$7.50</span> <span className="text-text-muted text-xs block">Tuesday Brewing, Calgary AB (355ml, 0.5%)</span></p>
                    <p className="text-text-secondary">'MANGOLORIAN' NA <span className="text-accent-secondary font-semibold">$11</span> <span className="text-text-muted text-xs block">Alley Kat, Edmonton AB (473ml, 0.5%)</span></p>
                    <p className="text-text-secondary">DE-ALC APPLE GINGER CIDER <span className="text-accent-secondary font-semibold">$8</span> <span className="text-text-muted text-xs block">Lone Tree, Vancouver BC (355ml, 0%)</span></p>
                  </div>
                </div>
              </div>

              {/* Spirit-Free Cocktails */}
              <div className="mb-16">
                <h3 className="text-3xl md:text-4xl text-white mb-8 text-center font-bold tracking-wide">
                  SPIRIT-FREE COCKTAILS
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">BLACKCURRANT MULE</h4>
                      <span className="text-accent-secondary font-mono text-xl">$10</span>
                    </div>
                    <p className="text-text-muted text-sm">Blackcurrant puree, lime, ginger beer</p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">FUZZY PEACHLESS</h4>
                      <span className="text-accent-secondary font-mono text-xl">$10</span>
                    </div>
                    <p className="text-text-muted text-sm">Raspberry, pineapple, yuzu, lemon</p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">NOJITO</h4>
                      <span className="text-accent-secondary font-mono text-xl">$10</span>
                    </div>
                    <p className="text-text-muted text-sm">Your choice of passionfruit, yuzu, raspberry puree or classic, lime, mint, soda</p>
                  </div>
                </div>
              </div>

              {/* Sodas, Etc. */}
              <div>
                <h3 className="text-3xl md:text-4xl text-white mb-8 text-center font-bold tracking-wide">
                  SODAS & MORE
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">TRUEBUCH KOMBUCHA</h4>
                      <span className="text-accent-secondary font-mono text-xl">$6.75</span>
                    </div>
                    <p className="text-text-muted text-sm">15oz bottle - Mojito mint | Vanilla chai</p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">GRIZZLY PAW SODAS</h4>
                      <span className="text-accent-secondary font-mono text-xl">$6</span>
                    </div>
                    <p className="text-text-muted text-sm">341ml - Cream soda | Orange cream | Root beer | Grapefruit | Black cherry cola</p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">ANNEX SODA</h4>
                      <span className="text-accent-secondary font-mono text-xl">$6</span>
                    </div>
                    <p className="text-text-muted text-sm">330ml - Ginger beer | Saskatoon berry lemonade</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'kids' && (
            <div className="animate-fade-in">
              {/* Kids Menu */}
              <div className="mb-16">
                <h3 className="text-3xl md:text-4xl text-white mb-8 text-center font-bold tracking-wide">
                  KIDS MENU
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">KIDS CHEESE PIZZA</h4>
                      <span className="text-accent-secondary font-mono text-xl">$12</span>
                    </div>
                    <p className="text-text-secondary text-base">
                      7" personal pizza with mozzarella cheese
                    </p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">KIDS PEPPERONI PIZZA</h4>
                      <span className="text-accent-secondary font-mono text-xl">$14</span>
                    </div>
                    <p className="text-text-secondary text-base">
                      7" personal pizza with pepperoni & mozzarella
                    </p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">KIDS CHICKEN FINGERS</h4>
                      <span className="text-accent-secondary font-mono text-xl">$12</span>
                    </div>
                    <p className="text-text-secondary text-base">
                      Served with fries and dipping sauce
                    </p>
                  </div>
                </div>
              </div>

              {/* Desserts */}
              <div>
                <h3 className="text-3xl md:text-4xl text-white mb-8 text-center font-bold tracking-wide">
                  DESSERTS
                </h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">SALTED CARAMEL BROWNIE</h4>
                      <span className="text-accent-secondary font-mono text-xl">$10</span>
                    </div>
                    <p className="text-text-secondary text-base">
                      Warm chocolate brownie with salted caramel sauce, vanilla ice cream
                    </p>
                  </div>
                  <div className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-[3rem] p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-xl text-white">VANILLA ICE CREAM</h4>
                      <span className="text-accent-secondary font-mono text-xl">$6</span>
                    </div>
                    <p className="text-text-secondary text-base">
                      Two scoops of premium vanilla ice cream
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
