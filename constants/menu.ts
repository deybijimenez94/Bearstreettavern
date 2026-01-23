export const MENU_DATA = {
  pizzas: [
    {
      name: "THE GODFATHER",
      price: "29.50",
      description: "Prosciutto, confit garlic, herbed panko, truffle oil, grana padano, mozzarella, arugula",
      tags: ["SIGNATURE"]
    },
    {
      name: "THE BISON",
      price: "28.25",
      description: "Fior di latte, smoked bison, pomegranate molasses, roasted red peppers, basil",
      tags: []
    },
    {
      name: "THE CANADIAN",
      price: "28.25",
      description: "Mushroom, bacon, pepperoni, maple syrup, mozzarella",
      tags: []
    },
    {
      name: "THE HAWAIIAN",
      price: "28.00",
      description: "Pulled pork, pineapple, caramelized onions, apple bbq sauce, mozzarella",
      tags: []
    },
    {
      name: "THE BIG BIRD",
      price: "27.50",
      description: "Pesto marinated chicken, bacon, spinach, red onions, goat cheese, mozzarella",
      tags: ["POPULAR"]
    },
    {
      name: "THE MEDITERRANEAN",
      price: "27.00",
      description: "Olives, feta cheese, sun-dried tomatoes, artichokes, red onions, chili flakes, spinach, mozzarella, balsamic glaze",
      tags: ["VEGETARIAN", "VEGAN OPTION"]
    },
    {
      name: "VIVA LA PIZZA",
      price: "27.00",
      description: "Soppressata, roasted red peppers, caramelized onions, mozzarella, goat cheese, chipotle mayo, fresh basil",
      tags: []
    },
    {
      name: "THE WHEELER HUT",
      price: "26.75",
      description: "Mushrooms, ricotta, truffle oil, pesto, mozzarella",
      tags: ["VEGETARIAN", "VEGAN OPTION"]
    },
    {
      name: "THE DOUBLE DOUBLE",
      price: "26.50",
      description: "Double pepperoni, double cheese",
      tags: []
    },
    {
      name: "THE MARGHERITA",
      price: "23.50",
      description: "Fior di latte, maldon sea salt, fresh basil",
      tags: ["VEGETARIAN", "VEGAN OPTION"]
    }
  ],
  salads: [
    {
      name: "CAESAR SALAD",
      price: "24",
      description: "Grana padano, crispy bacon, garlic croutons, lemon, romaine, creamy caesar dressing",
      tags: []
    },
    {
      name: "WINTER SALAD",
      price: "24",
      description: "Roasted squash, beets, arugula, whipped feta, walnuts, herb dressing",
      tags: ["V+", "DAIRY FREE"]
    },
    {
      name: "TAVERN CHOP SALAD",
      price: "25",
      description: "Shredded lettuce, pepperoncini, olives, mixed cheese, shallots, chickpeas, grana padano, roasted red peppers, Italian dressing, parsley",
      tags: ["GLUTEN FREE"]
    },
    {
      name: "TAVERN BOWL",
      price: "24",
      description: "Tahini miso dressing, roasted carrots, green onions, sweet potatoes, chickpeas, pickled red cabbage, kimchi",
      tags: ["V+", "GLUTEN FREE", "NUT FREE"]
    }
  ],
  forthetable: [
    {
      name: "GARLIC CHEESE FINGERS",
      price: "17",
      description: "Garlic butter, mozzarella, green onions, served with sweet garlic & marinara sauce",
      tags: ["VEGETARIAN"]
    },
    {
      name: "NACHOS",
      price: "25",
      description: "Corn chips, grape tomatoes, mixed cheese, pickled jalapeños, green onions, salsa, sour cream",
      notes: "Add guacamole +$5 | Add pulled pork or chicken +$7",
      tags: ["GLUTEN FREE"]
    },
    {
      name: "BAKED CHICKEN WINGS",
      price: "23.50",
      description: "Cast iron roasted, choose: s&p, hot sauce, or apple butter bbq sauce",
      notes: "Vegetarian option: cauliflower fries +$15",
      tags: []
    },
    {
      name: "PIMENTO CHEESE DIP",
      price: "17",
      description: "Roasted red peppers, artichokes, cheddar, cream cheese, served with corn chips",
      tags: ["GLUTEN FREE", "VEGETARIAN"]
    },
    {
      name: "PULLED PORK MAC & CHEESE",
      price: "25",
      description: "Pulled pork, cherry tomatoes, green onion, 4 cheese, panko crust",
      tags: []
    }
  ],
  beers: [
    {
      type: "category_section",
      title: "PINTS & STEINS",
      subtitle: "16oz | 32oz",
      items: [
        { name: "'COPPER' ALE", price: "9.75 | 17.25", description: "THREE BEARS BREWERY - BANFF, AB | 4.2% ABV", tags: [] },
        { name: "'PINERY' PILSNER", price: "9.75 | 17.25", description: "THREE BEARS BREWERY - BANFF, AB | 4.9% ABV", tags: [] },
        { name: "'BEAR NECESSITIES' LIGHT LAGER", price: "9.75 | 17.25", description: "THREE BEARS BREWERY - BANFF, AB | 3.5% ABV", tags: [] },
        { name: "'HAPPY TRAILS' PALE ALE", price: "9.75 | 17.25", description: "THREE BEARS BREWERY - BANFF, AB | 5% ABV", tags: [] },
        { name: "'WISHING TREE' HAZY IPA", price: "9.75 | 17.25", description: "THREE BEARS BREWERY - BANFF, AB | 6% ABV", tags: [] },
        { name: "'ENGLISH' DARK ALE", price: "9.75 | 17.25", description: "THREE BEARS BREWERY - BANFF, AB | 6% ABV", tags: [] }
      ]
    },
    {
      type: "category_section",
      title: "OTHER SELECTIONS",
      items: [
        { name: "'RIVER CITY' RASPBERRY ALE", price: "10.25 | 18.25", description: "Brewster Brewing, Calgary AB | 5% ABV", tags: [] },
        { name: "'WHITE WHIT' BELGIAN WHEAT BEER", price: "10.25 | 18.25", description: "Banff Ave Brewing, Banff AB | 5% ABV", tags: [] }
      ]
    },
    {
      type: "category_section",
      title: "CANS",
      sections: [
        { type: "subsection", title: "LIGHT & FRUITY", items: [
          { name: "'PAPA BEAR' PRAIRIE BLONDE ALE", price: "8.50", description: "Half Hitch Brewing, Cochrane AB (355ml, 5%)", tags: [] },
          { name: "'POWDER HOUND' BLONDE ALE", price: "9", description: "Grizzly Paw, Canmore AB (355ml, 4.5%)", tags: [] },
          { name: "'MEXCELLENT' MEXICAN LAGER", price: "9", description: "Brewster Brewing, Calgary AB (355ml, 4.5%)", tags: [] },
          { name: "'GET LUCKY' LAGER", price: "12.50", description: "Born Brewing, Calgary AB (473ml, 5%)", tags: [] },
          { name: "'CZECH' PILSNER", price: "14", description: "Brewster Brewing, Calgary AB (473ml, 5%)", tags: [] },
          { name: "'RUN OR DRY' LIGHT LAGER", price: "9", description: "Banff Ave Brewing, Banff AB (355ml, 4.0%)", tags: [] },
          { name: "'GRUMPY BEAR' HONEY WHEAT ALE", price: "9", description: "Grizzly Paw, Canmore AB (355ml, 5%)", tags: [] },
          { name: "'BOND STREET' PEACH ALE", price: "9.50", description: "Brewster Brewing, Calgary AB (355ml, 5%)", tags: [] }
        ]},
        { type: "subsection", title: "HOPPY", items: [
          { name: "'FARMER'S DAUGHTER' PALE ALE", price: "9", description: "Half Hitch Brewing, Cochrane AB (355ml, 4.5%)", tags: [] },
          { name: "'THE WOLF' HAZY PALE ALE", price: "15", description: "Sea Change, Edmonton AB (473ml, 5.5%)", tags: [] },
          { name: "'WAVEPOOL' TROPICAL IPA", price: "14.50", description: "Eighty Eight, Calgary AB (473ml, 6.2%)", tags: [] },
          { name: "'NAMESAKE' HAZY IPA", price: "14", description: "Valley Brewing, Penticton BC (473ml, 6.5%)", tags: [] },
          { name: "'WASTE LAND' WEST COAST IPA", price: "10.50", description: "Annex, Calgary AB (355ml, 6.4%)", tags: [] },
          { name: "'TOKYO DRIFT' IPA", price: "14", description: "Last Best Brewing, Calgary AB (473ml, 7.2%)", tags: [] }
        ]},
        { type: "subsection", title: "DARK", items: [
          { name: "'LOWER BANKHEAD' BLACK PILSNER", price: "9", description: "Banff Ave Brewing, Banff AB (355ml, 4.5%)", tags: [] },
          { name: "'RUTTING ELK' RED ALE", price: "9", description: "Grizzly Paw Brewing, Canmore AB (355ml, 5%)", tags: [] },
          { name: "'POWER UP' VANILLA SESSION PORTER", price: "14", description: "Analog, Edmonton AB (473ml, 4.9%)", tags: [] },
          { name: "'GENTLEMEN' STOUT", price: "9", description: "Medicine Hat Brewing, Medicine Hat AB (355ml, 7%)", tags: [] }
        ]},
        { type: "subsection", title: "SOURS & CIDERS", items: [
          { name: "APPLE CIDER", price: "14.50", description: "No Boats On Sunday, Kelowna BC (473ml, 5%)", tags: [] },
          { name: "PEACH CIDER", price: "14.50", description: "No Boats On Sunday, Kelowna BC (473ml, 5%)", tags: [] },
          { name: "PEAR CIDER", price: "14.50", description: "No Boats On Sunday, Kelowna BC (473ml, 5%)", tags: [] },
          { name: "GINGER APPLE CIDER", price: "8.75", description: "Lone Tree, Vancouver BC (355ml, 5.5%)", tags: [] }
        ]}
      ]
    },
    {
      type: "category_section",
      title: "GLUTEN FREE",
      items: [
        { name: "'FORAGER' LAGER", price: "9", description: "Whistler Brewing, Whistler BC (355ml, 5%)", tags: [] },
        { name: "'FORAGER' PALE ALE", price: "9", description: "Whistler Brewing, Whistler BC (355ml, 5%)", tags: [] }
      ]
    }
  ],
  cocktails: [
    {
      name: "TAVERN CAESAR",
      price: "16",
      description: "Park chili vodka, housemade rim, pickle juice | 16oz",
      tags: []
    },
    {
      name: "SPICY SUNSET",
      price: "16",
      description: "Park chili vodka, peach schnapps, passionfruit, lemon | 1.5oz",
      tags: []
    },
    {
      name: "CLASSIC MARG",
      price: "16.50",
      description: "Espolon blanco, triple sec, lime, agave | 16oz",
      tags: []
    },
    {
      name: "SPICY COCONUT MARG",
      price: "16.50",
      description: "Park chili vodka, 1800 coconut tequila, triple sec, lime, agave | 16oz",
      tags: []
    },
    {
      name: "ORANGE & THYME SANGRIA",
      price: "15 / 35",
      description: "Vodka, peachtree schnapps/brandy, malbec, orange, orange & thyme syrup, ginger beer | 6oz",
      tags: []
    },
    {
      name: "KODIAK MULE",
      price: "15",
      description: "Park vanilla vodka, 1800 coconut tequila, blackcurrant, lime, agave, ginger beer | 1.5oz",
      tags: []
    },
    {
      name: "HOT HONEY OLD FASHIONED",
      price: "16.75",
      description: "Park maple rye, forty creek copper pot, bitters, rosemary | 8oz",
      tags: []
    },
    {
      name: "PARK GIN-GERBORE SLING",
      price: "16.75",
      description: "Park alpine dry gin, triple sec, ginger, pineapple, lemon, lime, soda | 8oz",
      tags: []
    },
    {
      name: "MOUNTAIN JOE",
      price: "9",
      description: "Vodka, cold brew, oat milk, touch of sweetness | 250ml can | 6.8% abv",
      tags: []
    }
  ],
  wine: [
    {
      type: "category_section",
      title: "SPARKLING",
      items: [
        { name: "CANELLA PROSECCO DOC", price: "13.25 / 54.50", description: "Veneto, Italy", tags: [] }
      ]
    },
    {
      type: "category_section",
      title: "WHITE",
      items: [
        { name: "ASTROLABE", price: "13.50 / 21 / 64", description: "Sauvignon Blanc, Marlborough, New Zealand", tags: [] },
        { name: "VIGNETI DEL SOLE", price: "12.50 / 18.50 / 53", description: "Pinot Grigio, Vineto, Italy", tags: [] },
        { name: "FIELDING ESTATE", price: "12 / 18.50 / 59", description: "Unoaked Chardonnay, Niagara Peninsula, ON", tags: [] }
      ]
    },
    {
      type: "category_section",
      title: "RED",
      items: [
        { name: "DUSTY RIVER", price: "10.50 / 16.50 / 51", description: "Pinot Noir, Languedoc-Roussillon, France", tags: [] },
        { name: "GABBIANO", price: "13 / 19 / 62", description: "Chianti Classico DOCG, Tuscany, Italy", tags: [] },
        { name: "BORTOLUZZI", price: "12.50 / 19.50 / 62", description: "Cabernet Sauvignon, Friuli-Venezia-Giulia, Italy", tags: [] }
      ]
    },
    {
      type: "category_section",
      title: "ROSÉ",
      items: [
        { name: "CEDAR CREEK", price: "13 / 19 / 64", description: "Pinot Noir Rosé, Okanagan Valley, BC", tags: [] }
      ]
    }
  ],
  nonalcohol: [
    {
      type: "category_section",
      title: "NON-ALCOHOLIC BEER",
      items: [
        { name: "'STRAIGHT EDGE' PALE ALE", price: "11", description: "Sea Change Brewery, Edmonton AB (473ml, 0.5%)", tags: [] },
        { name: "PEACH GOSE", price: "7.50", description: "Partake Brewing, Edmonton AB (355ml, 0.3%)", tags: [] },
        { name: "'DEATH WAVE' NA LAGER", price: "7.50", description: "Sea Change Brewery, Edmonton AB (355ml, 0.5%)", tags: [] },
        { name: "'PARADISCO' NA HAZY IPA", price: "7.50", description: "Tuesday Brewing, Calgary AB (355ml, 0.5%)", tags: [] },
        { name: "'MANGOLORIAN' NA", price: "11", description: "Alley Kat, Edmonton AB (473ml, 0.5%)", tags: [] },
        { name: "DE-ALC APPLE GINGER CIDER", price: "8", description: "Lone Tree, Vancouver BC (355ml, 0%)", tags: [] }
      ]
    },
    {
      type: "category_section",
      title: "SPIRIT-FREE COCKTAILS",
      items: [
        { name: "BLACKCURRANT MULE", price: "10", description: "Blackcurrant puree, lime, ginger beer", tags: [] },
        { name: "FUZZY PEACHLESS", price: "10", description: "Raspberry, pineapple, yuzu, lemon", tags: [] },
        { name: "NOJITO", price: "10", description: "Your choice of passionfruit, yuzu, raspberry puree or classic, lime, mint, soda", tags: [] }
      ]
    },
    {
      type: "category_section",
      title: "SODAS & MORE",
      items: [
        { name: "TRUEBUCH KOMBUCHA", price: "6.75", description: "15oz bottle - Mojito mint | Vanilla chai", tags: [] },
        { name: "GRIZZLY PAW SODAS", price: "6", description: "341ml - Cream soda | Orange cream | Root beer | Grapefruit | Black cherry cola", tags: [] },
        { name: "ANNEX SODA", price: "6", description: "330ml - Ginger beer | Saskatoon berry lemonade", tags: [] }
      ]
    }
  ],
  kids: [
    {
      type: "category_section",
      title: "KIDS MENU",
      items: [
        { name: "KIDS CHEESE PIZZA", price: "12", description: "7\" personal pizza with mozzarella cheese", tags: [] },
        { name: "KIDS PEPPERONI PIZZA", price: "14", description: "7\" personal pizza with pepperoni & mozzarella", tags: [] },
        { name: "KIDS CHICKEN FINGERS", price: "12", description: "Served with fries and dipping sauce", tags: [] }
      ]
    },
    {
      type: "category_section",
      title: "DESSERTS",
      items: [
        { name: "SALTED CARAMEL BROWNIE", price: "10", description: "Warm chocolate brownie with salted caramel sauce, vanilla ice cream", tags: [] },
        { name: "VANILLA ICE CREAM", price: "6", description: "Two scoops of premium vanilla ice cream", tags: [] }
      ]
    }
  ]
};