import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery | Bear Street Tavern | Photos of Food, Drinks, Patio & Pets',
  description: 'Explore our photo gallery: pizzas, craft drinks, cozy interior, year-round heated patio, and pet-friendly moments at Bear Street Tavern in Banff.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Gallery | Bear Street Tavern',
    description: 'See what makes us special—food, drinks, interior, patio and pets in our Banff tavern.',
    url: 'https://bearstreettavern.ca/gallery',
    type: 'website',
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
