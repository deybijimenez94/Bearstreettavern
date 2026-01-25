import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "About | Bear Street Tavern | Our Story in Banff",
  description: "Discover Bear Street Tavern: our story, awards, pet-friendly patio, and craft beers from Three Bears Brewery in the heart of Banff.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: "About | Bear Street Tavern",
    description: "Learn about our philosophy, awards, and what makes us special in downtown Banff.",
    url: 'https://bearstreettavern.ca/about',
    type: 'website',
    images: [
      {
        url: '/images/2019_BearStreetTavern_ScenicDining_PaulZizka.jpg',
        width: 1200,
        height: 630,
        alt: 'Bear Street Tavern Interior - About',
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
