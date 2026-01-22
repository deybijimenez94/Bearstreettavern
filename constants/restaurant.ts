// Bear Street Tavern - Restaurant Constants
// Centralized information to maintain consistency across the website

export const RESTAURANT_INFO = {
  name: "Bear Street Tavern",
  tagline: "Banff's Best Pizza",
  description: "Award-winning pizza in Banff, Alberta. Featured on 'You Gotta Eat Here'. Dog-friendly heated patio, craft beers from Three Bears Brewery, gluten-free & vegan options.",

  address: {
    street: "211 Bear Street",
    city: "Banff",
    province: "AB",
    postalCode: "T1L 1A1",
    country: "Canada",
    full: "211 Bear Street, Banff, AB T1L 1A1, Canada"
  },

  geo: {
    latitude: 51.1784,
    longitude: -115.5708
  },

  contact: {
    phone: "403.762.2021",
    phoneLink: "tel:4037622021",
    phoneDisplay: "403.762.2021",
    email: "info@bearstreettavern.ca",
    emailLink: "mailto:info@bearstreettavern.ca"
  },

  hours: {
    days: "Daily",
    open: "11:30AM",
    close: "9PM",
    openTime: "11:30",
    closeTime: "21:00",
    display: "Daily 11:30AM - 9PM",
    displayFr: "Tous les jours 11h30 - 21h",
    note: "Kitchen closes at 9:00 PM",
    noteFr: "La cuisine ferme à 21h00"
  },

  social: {
    instagram: {
      url: "https://instagram.com/bearstreettavern",
      handle: "@bearstreettavern"
    },
    facebook: {
      url: "https://facebook.com/bearstreettavern",
      handle: "bearstreettavern"
    },
    tripadvisor: {
      url: "https://www.tripadvisor.com/Restaurant_Review-g154911-d2315759-Reviews-Bear_Street_Tavern-Banff_Banff_National_Park_Alberta.html",
      rating: "4.4",
      reviewCount: "2067"
    }
  },

  links: {
    website: "https://bearstreettavern.ca",
    reservations: "https://www.opentable.ca/restaurant/profile/1014859/reserve",
    orderOnline: "https://bearsttavern.xdineapp.com",
    giftCards: "https://bearsttavern.xdineapp.com#giftshop/49/chooseCard",
    careers: "https://www.banffcollective.com/careers",
    banffCollective: "https://www.banffcollective.com"
  },

  features: [
    "Dog-friendly heated patio year-round",
    "Craft beers from Three Bears Brewery",
    "Gluten-free crust available (dedicated oven)",
    "Vegan cheese & vegan meat options",
    "Featured on 'You Gotta Eat Here'",
    "Part of Banff Hospitality Collective",
    "Special menu for dogs & dog-friendly beer"
  ],

  awards: [
    {
      name: "You Gotta Eat Here",
      year: "",
      description: "Featured on Food Network Canada"
    },
    {
      name: "Restaurant Guru",
      year: "2019",
      description: "Best Pizza in Banff"
    },
    {
      name: "OpenTable Diners' Choice",
      year: "2024",
      description: "Top-rated restaurant"
    }
  ]
} as const;

export const DIETARY_OPTIONS = {
  glutenFree: {
    available: true,
    extraCharge: 4.50,
    note: "Dedicated separate oven for GF pizzas",
    celiacFriendly: true,
    description: "GF crust available for any pizza (+$4.50). We use a dedicated separate oven to prevent cross-contamination."
  },
  vegan: {
    cheese: true,
    meat: true,
    extraCharge: 5.00,
    note: "Any pizza can be made vegan",
    description: "Vegan cheese and vegan meat options available (+$5). Ask your server to customize any pizza."
  },
  vegetarian: {
    available: true,
    pizzas: ["Wheeler Hut", "Cheese Pizza", "Mediterranean", "Margarita"],
    description: "4+ vegetarian pizzas on our menu"
  },
  nutFree: {
    available: true,
    note: "Please inform your server of any nut allergies",
    description: "We accommodate nut-free requests. Please inform your server."
  }
} as const;

export const SPECIALS = {
  sunday: {
    day: "Sunday",
    time: "5:00 PM onwards",
    deals: ["$10 Steins", "$6 Hi-Balls"]
  },
  monday: {
    day: "Monday",
    time: "5:00 PM onwards",
    deals: ["50% OFF select pizzas"]
  },
  tuesday: {
    day: "Tuesday",
    time: "All day",
    deals: ["$12 Calzones", "$6 Hi-Balls"]
  },
  wednesday: {
    day: "Wednesday & Thursday",
    time: "All day",
    deals: ["$6 Margaritas"]
  },
  restrictions: [
    "Specials are dine-in only",
    "Not available on holidays or long weekends",
    "Select pizzas and calzones only"
  ]
} as const;

export const SEO_KEYWORDS = [
  "Banff pizza",
  "Bear Street Tavern",
  "dog friendly restaurant Banff",
  "gluten free pizza Banff",
  "best pizza Banff",
  "You Gotta Eat Here",
  "Banff restaurants",
  "craft beer Banff",
  "Three Bears Brewery",
  "vegan pizza Banff",
  "pet friendly patio Banff",
  "Banff Hospitality Collective"
] as const;

// Helper function to format phone number for display
export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1.$2.$3');
};

// Helper function to get Google Maps directions URL
export const getDirectionsUrl = (): string => {
  const { full } = RESTAURANT_INFO.address;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(full)}`;
};

// Helper function to get Google Maps embed URL
export const getMapEmbedUrl = (): string => {
  const { latitude, longitude } = RESTAURANT_INFO.geo;
  const { full } = RESTAURANT_INFO.address;
  return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(full)}&center=${latitude},${longitude}&zoom=15`;
};
