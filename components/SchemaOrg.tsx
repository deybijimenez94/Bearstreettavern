import { RESTAURANT_INFO, DIETARY_OPTIONS } from '@/constants/restaurant';

export default function SchemaOrg() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": RESTAURANT_INFO.name,
    "image": "https://bearstreettavern.ca/images/BST.jpg",
    "description": RESTAURANT_INFO.description,
    "@id": RESTAURANT_INFO.links.website,
    "url": RESTAURANT_INFO.links.website,
    "telephone": RESTAURANT_INFO.contact.phone,
    "priceRange": "$$",
    "servesCuisine": ["Pizza", "Italian", "Canadian", "Pub Food"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": RESTAURANT_INFO.address.street,
      "addressLocality": RESTAURANT_INFO.address.city,
      "addressRegion": RESTAURANT_INFO.address.province,
      "postalCode": RESTAURANT_INFO.address.postalCode,
      "addressCountry": RESTAURANT_INFO.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": RESTAURANT_INFO.geo.latitude,
      "longitude": RESTAURANT_INFO.geo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
      ],
      "opens": RESTAURANT_INFO.hours.openTime,
      "closes": RESTAURANT_INFO.hours.closeTime
    },
    "acceptsReservations": "True",
    "menu": `${RESTAURANT_INFO.links.website}/menu`,
    "hasMenu": {
      "@type": "Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Signature Pizzas",
          "hasMenuItem": [
            {
              "@type": "MenuItem",
              "name": "The Godfather",
              "description": "Italian sausage, prosciutto, confit garlic, truffle oil, grana padano",
              "offers": {
                "@type": "Offer",
                "price": "29.50",
                "priceCurrency": "CAD"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Big Bird",
              "description": "Spinach, bacon, red onion, goat cheese, pesto chicken",
              "offers": {
                "@type": "Offer",
                "price": "28.50",
                "priceCurrency": "CAD"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Margarita",
              "description": "Buffalo mozzarella, sea salt, basil",
              "offers": {
                "@type": "Offer",
                "price": "23.50",
                "priceCurrency": "CAD"
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": RESTAURANT_INFO.social.tripadvisor.rating,
      "reviewCount": RESTAURANT_INFO.social.tripadvisor.reviewCount,
      "bestRating": "5"
    },
    "sameAs": [
      RESTAURANT_INFO.social.instagram.url,
      RESTAURANT_INFO.social.facebook.url,
      RESTAURANT_INFO.social.tripadvisor.url
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Pet Friendly",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Outdoor Seating",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Heated Patio",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "WiFi",
        "value": true
      }
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": RESTAURANT_INFO.links.reservations,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Book a Table at Bear Street Tavern"
      }
    }
  };

  // Local Business Schema (additional)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": RESTAURANT_INFO.name,
    "image": "https://bearstreettavern.ca/images/BST.jpg",
    "url": RESTAURANT_INFO.links.website,
    "telephone": RESTAURANT_INFO.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": RESTAURANT_INFO.address.street,
      "addressLocality": RESTAURANT_INFO.address.city,
      "addressRegion": RESTAURANT_INFO.address.province,
      "postalCode": RESTAURANT_INFO.address.postalCode,
      "addressCountry": RESTAURANT_INFO.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": RESTAURANT_INFO.geo.latitude,
      "longitude": RESTAURANT_INFO.geo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
      ],
      "opens": RESTAURANT_INFO.hours.openTime,
      "closes": RESTAURANT_INFO.hours.closeTime
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": RESTAURANT_INFO.links.website
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Menu",
        "item": `${RESTAURANT_INFO.links.website}/menu`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": `${RESTAURANT_INFO.links.website}/about`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Reservations",
        "item": `${RESTAURANT_INFO.links.website}/reservations`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
