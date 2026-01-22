import type { Metadata } from 'next';
import SpecialsClient from './SpecialsClient';

export const metadata: Metadata = {
  title: 'Daily Specials | Bear Street Tavern | Save on Pizzas & Drinks',
  description: 'Explore daily specials at Bear Street Tavern: 50% off select pizzas Sunday & Monday from 5pm; Tuesday-Thursday deals all day. Dine-in only.',
  alternates: { canonical: '/specials' },
  openGraph: {
    title: 'Daily Specials | Bear Street Tavern',
    description: 'Great deals on pizzas, calzones and drinks in Banff. Dine-in only.',
    url: 'https://bearstreettavern.ca/specials',
    type: 'website',
  },
};

export default function SpecialsPage() {
  return <SpecialsClient />;
}
