import type { Metadata } from 'next';
import MenuClient from './MenuClient';

export const metadata: Metadata = {
  title: 'Menu | Bear Street Tavern | Pizza, Classics, Drinks',
  description: 'Browse our complete menu: oven-baked pizzas, tavern classics, salads, handhelds, desserts, and craft drinks. Gluten-free and vegan options available.',
  alternates: { canonical: '/menu' },
  openGraph: {
    title: 'Menu | Bear Street Tavern',
    description: 'Explore our full menu including award-winning pizzas and craft beverages in Banff.',
    url: 'https://bearstreettavern.ca/menu',
    type: 'website',
    images: [
      {
        url: '/images/Food/Food1.jpg',
        width: 1200,
        height: 630,
        alt: 'Signature Pizza - Menu',
      },
    ],
  },
};

export default function MenuPage() {
  return <MenuClient />;
}
