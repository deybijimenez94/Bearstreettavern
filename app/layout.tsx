import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bearstreettavern.ca'),
  title: "Bear Street Tavern | Banff's Best Pizza | Bear St, Banff AB",
  description: "Award-winning restaurant in Banff featuring Banff's Best Pizza as seen on You Gotta Eat Here. Dog-friendly patio, craft beers from Three Bears Brewery, and bear-sized cocktails. Located at 211 Bear Street, Banff, Alberta.",
  keywords: ["Banff restaurant", "Bear Street Tavern", "Banff pizza", "dog-friendly patio Banff", "Three Bears Brewery", "You Gotta Eat Here", "Banff dining"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Bear Street Tavern - Banff's Best Pizza",
    description: "Award-winning tavern in the heart of Banff serving premium pizza, craft beers, and cast iron specialties.",
    type: "website",
    locale: "en_CA",
    url: "https://bearstreettavern.ca",
    siteName: "Bear Street Tavern",
    images: [
      {
        url: '/Gallery-1.jpg',
        width: 1200,
        height: 630,
        alt: "Bear Street Tavern - Banff's Best Pizza",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bear Street Tavern - Banff's Best Pizza",
    description: "Award-winning tavern in the heart of Banff serving premium pizza, craft beers, and cast iron specialties.",
    images: ['/Gallery-1.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Bear Street Tavern',
              url: 'https://bearstreettavern.ca',
              logo: 'https://bearstreettavern.ca/BST.jpg',
              image: 'https://bearstreettavern.ca/Gallery-1.jpg',
              telephone: '+1-403-762-2021',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '211 Bear Street',
                addressLocality: 'Banff',
                addressRegion: 'AB',
                postalCode: 'T1L 1A1',
                addressCountry: 'CA',
              },
              servesCuisine: ['Pizza', 'Pub', 'Canadian'],
              priceRange: '$'
              ,openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday'
                  ],
                  opens: '11:30',
                  closes: '21:00'
                }
              ],
              sameAs: [
                'https://instagram.com/bearstreettavern',
                'https://facebook.com/bearstreettavern'
              ],
              potentialAction: {
                '@type': 'ReserveAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.opentable.com/r/bear-street-tavern-banff',
                  actionPlatform: [
                    'http://schema.org/DesktopWebPlatform',
                    'http://schema.org/MobileWebPlatform'
                  ]
                }
              }
            })
          }}
        />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
