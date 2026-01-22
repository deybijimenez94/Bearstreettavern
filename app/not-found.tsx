import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 flex items-center justify-center">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Large 404 */}
          <div className="mb-8">
            <h1 className="font-display text-9xl md:text-[12rem] font-black text-warm-brown leading-none mb-4">
              404
            </h1>
            <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
          </div>

          {/* Bear Icon */}
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6 opacity-50">
              <Image
                src="/images/BST.jpg"
                alt="Bear Street Tavern Logo"
                fill
                style={{ objectFit: 'contain' }}
                className="filter grayscale"
              />
            </div>
          </div>

          {/* Message */}
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-6 font-black text-charcoal">
            OOPS! PAGE NOT FOUND
          </h2>
          <p className="text-charcoal/70 text-xl mb-4 max-w-2xl mx-auto">
            Looks like this page went out for pizza and didn't come back.
          </p>
          <p className="text-charcoal/60 text-lg mb-10 max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved. But don't worry, we have plenty of other delicious options!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="inline-block bg-black text-white hover:bg-black/80 px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-black hover:scale-105"
            >
              🏠 BACK TO HOME
            </Link>
            <Link
              href="/menu"
              className="inline-block bg-warm-brown text-white hover:bg-warm-brown/90 px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-warm-brown hover:scale-105"
            >
              🍕 VIEW MENU
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
            <h3 className="font-display text-xl tracking-wider mb-6 font-bold text-charcoal">
              POPULAR PAGES
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/about"
                className="text-charcoal/70 hover:text-warm-brown transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="/reservations"
                className="text-charcoal/70 hover:text-warm-brown transition-colors font-medium"
              >
                Reservations
              </Link>
              <Link
                href="/specials"
                className="text-charcoal/70 hover:text-warm-brown transition-colors font-medium"
              >
                Daily Specials
              </Link>
              <Link
                href="/contact"
                className="text-charcoal/70 hover:text-warm-brown transition-colors font-medium"
              >
                Contact
              </Link>
              <Link
                href="/gallery"
                className="text-charcoal/70 hover:text-warm-brown transition-colors font-medium"
              >
                Gallery
              </Link>
              <Link
                href="/order-online"
                className="text-charcoal/70 hover:text-warm-brown transition-colors font-medium"
              >
                Order Online
              </Link>
              <Link
                href="/gift-cards"
                className="text-charcoal/70 hover:text-warm-brown transition-colors font-medium"
              >
                Gift Cards
              </Link>
              <Link
                href="/"
                className="text-charcoal/70 hover:text-warm-brown transition-colors font-medium"
              >
                Home
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-charcoal/60 text-sm mb-4">
              Need help? Get in touch with us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:4037622021"
                className="text-warm-brown hover:text-warm-brown/80 font-bold transition-colors"
              >
                📞 403.762.2021
              </a>
              <span className="hidden sm:inline text-charcoal/30">•</span>
              <a
                href="mailto:info@bearstreettavern.ca"
                className="text-warm-brown hover:text-warm-brown/80 font-bold transition-colors"
              >
                ✉️ info@bearstreettavern.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
