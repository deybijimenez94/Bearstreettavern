import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact | Bear Street Tavern | Get in Touch',
  description: "Contact Bear Street Tavern in Banff. Phone: 403.762.2021 • Email: info@bearstreettavern.ca • Address: 211 Bear Street, Banff, AB.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Bear Street Tavern',
    description: 'Reach out to our team for reservations, questions or feedback.',
    url: 'https://bearstreettavern.ca/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
