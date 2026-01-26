import type { Metadata } from 'next';
import ReservationsClient from './ReservationsClient';

export const metadata: Metadata = {
  title: 'Reservations | Bear Street Tavern | Book Your Table in Banff',
  description: 'Reserve your table at Bear Street Tavern in Banff. Book online through OpenTable for our award-winning oven-baked pizzas, craft beers, and dog-friendly patio. Daily specials available!',
  openGraph: {
    title: 'Reservations | Bear Street Tavern',
    description: 'Book a table at our Banff location and enjoy award-winning pizza and craft drinks.',
    url: 'https://bearstreettavern.ca/reservations',
    type: 'website',
    images: [
      {
        url: '/images/Interior/Inside1.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior Dining - Reservations',
      },
    ],
  },
};

export default function ReservationsPage() {
  return <ReservationsClient />;
}
