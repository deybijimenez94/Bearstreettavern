import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Bear Street Tavern | Banff Pizza & Craft Beer',
  description: 'Browse our complete menu featuring oven-baked pizzas, tavern classics, salads, handhelds, craft beers from Three Bears Brewery, signature cocktails, and desserts. Gluten-free and vegan options available!',
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
