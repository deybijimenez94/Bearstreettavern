'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Determinar si estamos scrolleando hacia arriba o abajo
          if (currentScrollY > lastScrollY && currentScrollY > 150) {
            // Scrolling hacia abajo y pasamos 150px
            setIsVisible(false);
          } else {
            // Scrolling hacia arriba o en la parte superior
            setIsVisible(true);
          }

          setIsScrolled(currentScrollY > 50);
          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Si el cursor está en los primeros 100px de la pantalla, mostrar el header
      if (e.clientY <= 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  // Accessibility: focus management, Escape to close, and focus trap in mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    // Focus the close button or the panel when opened
    const toFocus = closeBtnRef.current || panelRef.current;
    toFocus?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        return;
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'header.home' },
    { href: '/#menu', label: 'header.menu' },
    { href: '/about', label: 'header.about' },
    { href: '/reservations', label: 'header.reservations' },
    { href: '/gallery', label: 'header.gallery' },
    { href: '/contact', label: 'header.contact' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'top-0' : '-top-40'
      } ${
        isMobileMenuOpen
          ? 'bg-black'
          : isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group relative"
            aria-label="Bear Street Tavern Home"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/BST.jpg"
                alt="Bear Street Tavern Logo"
                layout="fill"
                objectFit="contain"
                className="p-1"
              />
            </div>
            <div className="ml-2 hidden sm:block">
              <div className="font-display text-base md:text-lg tracking-[0.2em] text-white group-hover:text-white/80 transition-colors">
                BEAR STREET
              </div>
              <div className="text-xs tracking-[0.3em] text-white/60 -mt-1">
                TAVERN
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white px-4 py-2 text-sm tracking-wider font-medium transition-all hover:bg-white/5 rounded"
              >
                {t(link.label)}
              </Link>
            ))}
            <a
              href="https://www.banffcollective.com/banff-careers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white px-4 py-2 text-sm tracking-wider font-medium transition-all hover:bg-white/5 rounded"
            >
              Join Our Team
            </a>
            <a
              href="https://bearsttavern.xdineapp.com/#giftshop/49/chooseCard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white px-4 py-2 text-sm tracking-wider font-medium transition-all hover:bg-white/5 rounded"
            >
              GIFT CARD
            </a>
          </div>

          {/* Right Side Actions */}


        {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden text-white hover:text-white/70 transition-colors p-2 relative ${isMobileMenuOpen ? 'z-[110]' : 'z-50'}`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop - Black Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30"
          style={{
            zIndex: 9998
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Overlay - Compact Right-Side Menu */}
      <div
        className={`lg:hidden fixed inset-0 flex items-stretch justify-end pointer-events-none`}
        style={{
          zIndex: 9999
        }}
      >
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          ref={panelRef}
          tabIndex={-1}
          className={`w-[85%] max-w-sm h-full bg-black border-l border-white/10 shadow-2xl relative overflow-hidden transform will-change-transform transition-transform duration-300 ease-out pointer-events-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors z-20 p-2"
          aria-label="Close menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none" aria-hidden="true">
          <div className="relative w-48 h-48">
            <Image
              src="/images/BST.jpg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Menu Content */}
        <div className="relative z-10 h-full flex flex-col px-6 pt-20 pb-[max(2rem,env(safe-area-inset-bottom))] overflow-y-auto">
          {/* Logo at top */}
          <div className="mb-8 text-center">
            <div className="relative w-16 h-16 mx-auto mb-2">
              <Image
                src="/images/BST.jpg"
                alt="Bear Street Tavern Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="font-display text-xs tracking-[0.2em] text-white">
              BEAR STREET
            </div>
            <div className="text-[10px] tracking-[0.3em] text-white/60">
              TAVERN
            </div>
          </div>

          {/* Language Switcher */}
          <div className="mb-6 flex justify-center">
            <LanguageSwitcher />
          </div>

          {/* Navigation Links - Compact */}
          <nav className="flex-1 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:bg-white/10 hover:text-white px-4 py-3 text-sm tracking-wider font-medium transition-all border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.label)}
              </Link>
            ))}
            <a
              href="https://www.banffcollective.com/banff-careers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:bg-white/10 hover:text-white px-4 py-3 text-sm tracking-wider font-medium transition-all border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Our Team
            </a>
            <a
              href="https://bearsttavern.xdineapp.com/#giftshop/49/chooseCard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:bg-white/10 hover:text-white px-4 py-3 text-sm tracking-wider font-medium transition-all border-b border-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GIFT CARD
            </a>
          </nav>

          {/* Contact & CTA - Compact */}
          <div className="pt-6 space-y-4 border-t border-white/10">
            <a
              href="tel:4037622021"
              className="flex items-center text-white/80 hover:text-white text-sm tracking-wide transition-colors gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              403.762.2021
            </a>


            {/* Social Links - Compact */}
            <div className="flex gap-3 justify-center pt-4">
              <a
                href="https://instagram.com/bearstreettavern"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                <span className="text-xs text-white font-bold">IG</span>
              </a>
              <a
                href="https://facebook.com/bearstreettavern"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
                aria-label="Facebook"
              >
                <span className="text-xs text-white font-bold">FB</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
}
