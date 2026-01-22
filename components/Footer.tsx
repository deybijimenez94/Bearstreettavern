'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate newsletter signup
    setTimeout(() => {
      setMessage(t('footer.subscribed'));
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 3000);
    }, 1000);
  };

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/footer-background.svg"
          alt="Footer background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-10"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10">
        {/* Newsletter Section - Compact */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-display text-2xl md:text-4xl tracking-[0.2em] mb-2 md:mb-3 font-bold">
                {t('footer.newsletter')}
              </h3>
              <p className="text-white/60 mb-4 md:mb-6 tracking-wide text-xs md:text-sm">
                {t('footer.newsletterDesc')}
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-2 md:gap-3 max-w-lg mx-auto"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email Address for Newsletter
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.email')}
                  required
                  aria-required="true"
                  aria-label="Email address for newsletter subscription"
                  className="flex-1 px-4 md:px-6 py-2 md:py-3 bg-white/5 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white focus:ring-2 focus:ring-white transition-all tracking-wide text-xs md:text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="bg-white text-black hover:bg-white/90 px-6 md:px-8 py-2 md:py-3 font-bold tracking-wider transition-all disabled:opacity-50 border border-white text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  {isSubmitting ? t('footer.subscribing') : t('footer.subscribe')}
                </button>
              </form>
              {message && (
                <div
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                  className="mt-3 md:mt-4 text-white/80 font-bold tracking-wider text-xs md:text-sm bg-green-900/30 border border-green-500 p-3 rounded"
                >
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Content - Compact & Professional */}
        <div className="container mx-auto px-4 lg:px-8 py-6 md:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Column 1: Logo & Info - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block text-center sm:text-left">
              <Link href="/" className="inline-flex items-center mb-4 group">
                <div className="relative w-20 h-20 md:w-24 md:h-24 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/images/BST.jpg"
                    alt="Bear Street Tavern Logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="ml-3">
                  <div className="font-display text-sm md:text-base tracking-[0.2em] text-white">
                    BEAR STREET
                  </div>
                  <div className="text-xs tracking-[0.3em] text-white/60 -mt-0.5">
                    TAVERN
                  </div>
                </div>
              </Link>
              <div className="inline-block border border-white/20 px-3 py-1.5">
                <p className="text-xs text-white/80 tracking-wider">
                  {t('footer.collective')}
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="text-left">
              <h4 className="font-display text-xs md:text-sm tracking-[0.3em] mb-3 md:mb-4 font-bold">
                {t('footer.menu')}
              </h4>
              <ul className="space-y-1.5 md:space-y-2">
                {[
                  { href: '/', label: 'footer.home' },
                  { href: '/menu', label: 'footer.menuLink' },
                  { href: '/order-online', label: 'footer.orderOnline' },
                  { href: '/reservations', label: 'footer.reservations' },
                  { href: '/gift-cards', label: 'footer.giftCards' },
                  { href: '/specials', label: 'footer.specials' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-[10px] md:text-xs tracking-wider inline-block"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="text-left">
              <h4 className="font-display text-xs md:text-sm tracking-[0.3em] mb-3 md:mb-4 font-bold">
                {t('footer.contact')}
              </h4>
              <ul className="space-y-2 md:space-y-3 text-xs">
                <li>
                  <p className="text-white/40 text-[10px] md:text-xs tracking-wider mb-1">{t('footer.address')}</p>
                  <p className="text-white/80 tracking-wide text-[10px] md:text-xs">{t('footer.address1')}</p>
                  <p className="text-white/80 tracking-wide text-[10px] md:text-xs">{t('footer.address2')}</p>
                </li>
                <li>
                  <p className="text-white/40 text-[10px] md:text-xs tracking-wider mb-1">{t('footer.phone')}</p>
                  <a
                    href="tel:4037622021"
                    className="text-white/80 hover:text-white transition-colors tracking-wide inline-block text-[10px] md:text-xs"
                  >
                    403.762.2021
                  </a>
                </li>
                <li>
                  <p className="text-white/40 text-[10px] md:text-xs tracking-wider mb-1">{t('footer.hours')}</p>
                  <p className="text-white/80 tracking-wide text-[10px] md:text-xs">{t('footer.hoursValue')}</p>
                </li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
              <h4 className="font-display text-xs md:text-sm tracking-[0.3em] mb-3 md:mb-4 font-bold">
                {t('footer.followUs')}
              </h4>
              <div className="flex space-x-2 md:space-x-3 mb-4 md:mb-6 justify-center lg:justify-start">
                <a
                  href="https://instagram.com/bearstreettavern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
                  aria-label="Instagram"
                >
                  <span className="text-xs md:text-sm">IG</span>
                </a>
                <a
                  href="https://facebook.com/bearstreettavern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
                  aria-label="Facebook"
                >
                  <span className="text-xs md:text-sm">FB</span>
                </a>
                <a
                  href="https://twitter.com/bearstreettavern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
                  aria-label="Twitter"
                >
                  <span className="text-xs md:text-sm">X</span>
                </a>
              </div>
              <div className="hidden md:block">
                <p className="text-white/40 text-xs tracking-wider mb-2">{t('footer.emailLabel')}</p>
                <a
                  href="mailto:info@bearstreettavern.ca"
                  className="text-white/80 hover:text-white transition-colors tracking-wide text-xs break-all inline-block"
                >
                  {t('footer.emailAddress')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 lg:px-8 py-3 md:py-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-white/40 text-[10px] md:text-xs tracking-wider text-center md:text-left">
                © {new Date().getFullYear()} {t('footer.copyright')}
              </p>
              <div className="flex space-x-3 md:space-x-4 text-[10px] md:text-xs">
                <Link
                  href="/accessibility"
                  className="text-white/40 hover:text-white transition-colors tracking-wider"
                >
                  {t('footer.accessibility')}
                </Link>
                <Link
                  href="/privacy"
                  className="text-white/40 hover:text-white transition-colors tracking-wider"
                >
                  {t('footer.privacy')}
                </Link>
                <Link
                  href="/terms"
                  className="text-white/40 hover:text-white transition-colors tracking-wider"
                >
                  {t('footer.terms')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
