'use client';

import { useState, useEffect, useRef } from 'react';
import { MENU_DATA } from '@/constants/menu';

type MenuTab = 'pizzas' | 'salads' | 'beers' | 'cocktails' | 'wine' | 'nonalcohol';

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
    <section ref={sectionRef} id="menu" className="py-16 md:py-20 bg-bg-secondary relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`text-center mb-8 ${isVisible ? 'scroll-reveal' : ''}`}>
          <h2 className="text-4xl md:text-5xl text-white mb-4 tracking-tight font-bold">
            OUR MENU
          </h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto"></div>
        </div>

        {/* Tab Navigation - Compact */}
        <div className={`flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto ${isVisible ? 'scroll-reveal scroll-reveal-delay-1' : ''}`}>
          {[
            { id: 'pizzas' as MenuTab, label: 'PIZZAS' },
            { id: 'salads' as MenuTab, label: 'SALADS' },
            { id: 'beers' as MenuTab, label: 'BEERS' },
            { id: 'cocktails' as MenuTab, label: 'COCKTAILS' },
            { id: 'wine' as MenuTab, label: 'WINE' },
            { id: 'nonalcohol' as MenuTab, label: 'NON ALCOHOL' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-5 py-2 font-semibold text-xs tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent-primary text-black'
                  : 'bg-transparent border border-border-tabs text-white/70 hover:text-white hover:border-white/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Content - Compact */}
        <div className="max-w-4xl mx-auto">
          {/* PIZZAS TAB */}
          {activeTab === 'pizzas' && (
            <div className="animate-fade-in space-y-10">
              {/* Pizzas */}
              <div>
                <h3 className="text-2xl text-white mb-5 text-center font-bold">
                  SIGNATURE PIZZAS
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {MENU_DATA.pizzas.map((pizza, idx) => (
                    <div
                      key={idx}
                      className="bg-bg-card backdrop-blur-sm border border-border-subtle rounded-xl p-4 hover:border-accent-primary/30 transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-sm text-white">
                          {pizza.name}
                        </h4>
                        <span className="text-accent-secondary font-semibold text-sm ml-2 flex-shrink-0">
                          ${pizza.price}
                        </span>
                      </div>
                      <p className="text-text-secondary text-xs mb-2 leading-relaxed">
                        {pizza.description}
                      </p>
                      {pizza.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {pizza.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="bg-accent-primary/20 text-accent-secondary px-2 py-0.5 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-bg-card/50 border border-border-subtle rounded-lg">
                  <p className="text-text-muted text-xs">
                    <span className="text-accent-primary font-semibold">Add-ons:</span> Meat +$7 • Vegetable +$5 • Cheese +$4.50 • GF Crust +$4.50
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SALADS TAB */}
          {activeTab === 'salads' && (
            <div className="animate-fade-in">
              <h3 className="text-2xl text-white mb-4 text-center font-bold">
                SALADS
              </h3>
              <p className="text-text-muted text-center text-xs mb-5">Add chicken +$7</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'CAESAR SALAD', price: '$24', desc: 'Grana padano, crispy bacon, garlic croutons, lemon, romaine, creamy caesar dressing' },
                  { name: 'WINTER SALAD', price: '$24', desc: 'Roasted squash, beets, arugula, whipped feta, walnuts, herb dressing', tags: ['V+', 'DF'] },
                  { name: 'TAVERN CHOP SALAD', price: '$25', desc: 'Shredded lettuce, pepperoncini, olives, mixed cheese, shallots, chickpeas, grana padano, roasted red peppers, Italian dressing', tags: ['GF'] },
                  { name: 'TAVERN BOWL', price: '$24', desc: 'Tahini miso dressing, roasted carrots, green onions, sweet potatoes, chickpeas, pickled red cabbage, kimchi', tags: ['V+', 'GF'] }
                ].map((item, idx) => (
                  <div key={idx} className="bg-bg-card border border-border-subtle rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm text-white">{item.name}</h4>
                      <span className="text-accent-secondary font-semibold text-sm">{item.price}</span>
                    </div>
                    <p className="text-text-secondary text-xs mb-2">{item.desc}</p>
                    {item.tags && (
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, i) => (
                          <span key={i} className="bg-accent-primary/20 text-accent-secondary px-2 py-0.5 text-xs font-medium">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BEERS TAB */}
          {activeTab === 'beers' && (
            <div className="animate-fade-in space-y-8">
              <div>
                <h3 className="text-2xl text-white mb-4 text-center font-bold">
                  PINTS & STEINS
                </h3>
                <p className="text-text-muted text-center text-xs mb-5">16oz | 32oz</p>

                {/* Three Bears Brewery */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-accent-primary mb-4 text-center">THREE BEARS BREWERY - BANFF</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { name: "'COPPER' ALE", abv: '4.2%', price: '$9.75 | $17.25' },
                      { name: "'GRIZZLY' PALE ALE", abv: '5%', price: '$9.75 | $17.25' },
                      { name: "'MAMA BEAR' HAZY IPA", abv: '6%', price: '$10.25 | $18.25' },
                      { name: "'KODIAK' BROWN ALE", abv: '5.5%', price: '$9.75 | $17.25' }
                    ].map((beer, idx) => (
                      <div key={idx} className="bg-bg-card border border-border-subtle rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-xs text-white">{beer.name}</h5>
                            <p className="text-text-muted text-xs">{beer.abv} ABV</p>
                          </div>
                          <span className="text-accent-secondary text-xs font-semibold">{beer.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other Selections */}
                <div>
                  <h4 className="text-sm font-bold text-white mb-4 text-center">OTHER SELECTIONS</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      { name: 'BUDWEISER', abv: '5%', price: '$8.50 | $15.50' },
                      { name: 'GUINNESS', abv: '4.2%', price: '$10.25 | $18.25' }
                    ].map((beer, idx) => (
                      <div key={idx} className="bg-bg-card border border-border-subtle rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-xs text-white">{beer.name}</h5>
                            <p className="text-text-muted text-xs">{beer.abv} ABV</p>
                          </div>
                          <span className="text-accent-secondary text-xs font-semibold">{beer.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* COCKTAILS TAB */}
          {activeTab === 'cocktails' && (
            <div className="animate-fade-in">
              <h3 className="text-2xl text-white mb-5 text-center font-bold">
                COCKTAILS
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { name: 'TAVERN CAESAR', price: '$16', desc: 'Park chili vodka, housemade rim, pickle juice' },
                  { name: 'STRAWBERRY LEMONADE', price: '$16', desc: 'Vodka, strawberry purée, lemon, simple, soda' },
                  { name: 'BOURBON SOUR', price: '$16', desc: 'Bourbon, brown sugar, lemon, egg white, bitters' },
                  { name: 'APEROL SPRITZ', price: '$15', desc: 'Aperol, prosecco, soda' },
                  { name: 'ESPRESSO MARTINI', price: '$16', desc: 'Vodka, coffee liqueur, espresso' },
                  { name: 'MARGARITA', price: '$16', desc: 'Tequila, lime, triple sec, agave' },
                  { name: 'OLD FASHIONED', price: '$16', desc: 'Bourbon, bitters, sugar, orange peel' },
                  { name: 'NEGRONI', price: '$16', desc: 'Gin, Campari, sweet vermouth' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-bg-card border border-border-subtle rounded-lg p-3">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-xs text-white">{item.name}</h4>
                      <span className="text-accent-secondary text-xs font-semibold">{item.price}</span>
                    </div>
                    <p className="text-text-muted text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* WINE TAB */}
          {activeTab === 'wine' && (
            <div className="animate-fade-in">
              <h3 className="text-2xl text-white mb-4 text-center font-bold">
                WINE
              </h3>
              <p className="text-text-muted text-center text-xs mb-5">6oz glass / bottle (750ml)</p>
              <div className="space-y-6">
                {/* Sparkling */}
                <div>
                  <h4 className="text-sm font-bold text-accent-primary mb-3">SPARKLING</h4>
                  <div className="bg-bg-card border border-border-subtle rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold text-xs text-white">PROSECCO</h5>
                        <p className="text-text-muted text-xs">Italy</p>
                      </div>
                      <span className="text-accent-secondary text-xs">$13 / $65</span>
                    </div>
                  </div>
                </div>

                {/* White */}
                <div>
                  <h4 className="text-sm font-bold text-accent-primary mb-3">WHITE</h4>
                  <div className="space-y-2">
                    {[
                      { name: 'PINOT GRIGIO', region: 'Italy', price: '$12 / $60' },
                      { name: 'SAUVIGNON BLANC', region: 'New Zealand', price: '$13 / $65' },
                      { name: 'CHARDONNAY', region: 'California', price: '$14 / $70' }
                    ].map((wine, idx) => (
                      <div key={idx} className="bg-bg-card border border-border-subtle rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-xs text-white">{wine.name}</h5>
                            <p className="text-text-muted text-xs">{wine.region}</p>
                          </div>
                          <span className="text-accent-secondary text-xs">{wine.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Red */}
                <div>
                  <h4 className="text-sm font-bold text-accent-primary mb-3">RED</h4>
                  <div className="space-y-2">
                    {[
                      { name: 'PINOT NOIR', region: 'Oregon', price: '$14 / $70' },
                      { name: 'MALBEC', region: 'Argentina', price: '$13 / $65' },
                      { name: 'CABERNET SAUVIGNON', region: 'California', price: '$15 / $75' }
                    ].map((wine, idx) => (
                      <div key={idx} className="bg-bg-card border border-border-subtle rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-xs text-white">{wine.name}</h5>
                            <p className="text-text-muted text-xs">{wine.region}</p>
                          </div>
                          <span className="text-accent-secondary text-xs">{wine.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* NON ALCOHOL TAB */}
          {activeTab === 'nonalcohol' && (
            <div className="animate-fade-in space-y-8">
              {/* Non-Alc Beer */}
              <div>
                <h3 className="text-2xl text-white mb-5 text-center font-bold">
                  NON-ALC BEER
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { name: 'BUDWEISER ZERO', abv: '0%', size: '355ml', price: '$7.50' },
                    { name: 'PARTAKE PALE ALE', abv: '0.3%', size: '355ml', price: '$8.50' }
                  ].map((beer, idx) => (
                    <div key={idx} className="bg-bg-card border border-border-subtle rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-xs text-white">{beer.name}</h4>
                          <p className="text-text-muted text-xs">{beer.abv} ABV | {beer.size}</p>
                        </div>
                        <span className="text-accent-secondary text-xs font-semibold">{beer.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spirit-Free Cocktails */}
              <div>
                <h3 className="text-xl text-white mb-5 text-center font-bold">
                  SPIRIT-FREE COCKTAILS
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { name: 'VIRGIN CAESAR', price: '$8', desc: 'Housemade rim, pickle juice' },
                    { name: 'VIRGIN MOJITO', price: '$8', desc: 'Lime, mint, soda, simple syrup' },
                    { name: 'VIRGIN STRAWBERRY LEMONADE', price: '$8', desc: 'Strawberry purée, lemon, simple, soda' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-bg-card border border-border-subtle rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-xs text-white">{item.name}</h4>
                        <span className="text-accent-secondary text-xs font-semibold">{item.price}</span>
                      </div>
                      <p className="text-text-muted text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sodas */}
              <div>
                <h3 className="text-xl text-white mb-5 text-center font-bold">
                  SODAS & MORE
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { name: 'SOFT DRINKS', price: '$4.50', desc: 'Coke, Diet Coke, Sprite, Ginger Ale, Root Beer' },
                    { name: 'ICED TEA', price: '$4.50', desc: 'Sweetened or Unsweetened' },
                    { name: 'FRESH JUICE', price: '$5.50', desc: 'Orange, Apple, Cranberry, Pineapple' },
                    { name: 'COFFEE', price: '$4', desc: 'Freshly brewed' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-bg-card border border-border-subtle rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-xs text-white">{item.name}</h4>
                        <span className="text-accent-secondary text-xs font-semibold">{item.price}</span>
                      </div>
                      <p className="text-text-muted text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
