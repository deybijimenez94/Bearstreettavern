import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import SchemaOrg from "@/components/SchemaOrg";

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
  title: {
    default: "Bear Street Tavern | Banff's Best Pizza | Dog-Friendly Patio",
    template: "%s | Bear Street Tavern"
  },
  description: "Award-winning pizza in Banff, Alberta. Featured on 'You Gotta Eat Here'. Dog-friendly heated patio year-round, craft beers from Three Bears Brewery, gluten-free & vegan options. Reserve your table today!",
  keywords: [
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
    "Banff Hospitality Collective",
    "heated patio Banff",
    "Banff dining",
    "211 Bear Street"
  ],
  authors: [{ name: "Bear Street Tavern" }],
  creator: "Bear Street Tavern",
  publisher: "Banff Hospitality Collective",
  alternates: {
    canonical: '/',
    languages: {
      'en-CA': '/',
      'fr-CA': '/'
    }
  },
  openGraph: {
    title: "Bear Street Tavern | Banff's Best Pizza | Dog-Friendly Patio",
    description: "Award-winning pizza featured on 'You Gotta Eat Here'. Dog-friendly heated patio year-round, craft beers, GF & vegan options. Book your table in Banff!",
    type: "website",
    locale: "en_CA",
    alternateLocale: "fr_CA",
    url: "https://bearstreettavern.ca",
    siteName: "Bear Street Tavern",
    images: [
      {
        url: '/images/2019_BearStreetTavern_ScenicDining_PaulZizka.jpg',
        width: 1200,
        height: 630,
        alt: "Bear Street Tavern - Banff's Best Pizza with Mountain Views",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bear Street Tavern | Banff's Best Pizza",
    description: "Award-winning pizza featured on 'You Gotta Eat Here'. Dog-friendly heated patio, craft beers, GF & vegan options.",
    images: ['/images/2019_BearStreetTavern_ScenicDining_PaulZizka.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification token when available
    // google: 'your-verification-token',
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
        <SchemaOrg />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
