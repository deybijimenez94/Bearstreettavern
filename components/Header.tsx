'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/menu', label: 'MENU' },
    { href: '/about', label: 'ABOUT' },
    { href: '/reservations', label: 'RESERVATIONS' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'top-0' : '-top-40'
      } ${
        isScrolled
          ? 'bg-black/98 backdrop-blur-lg border-b border-white/10'
          : 'bg-black/40 backdrop-blur-sm'
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
                className="text-white/80 hover:text-white px-4 py-2 text-sm tracking-wider font-medium transition-all hover:bg-white/5 rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:4037622021"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors tracking-wide"
            >
            </a>
            <Link
              href="/reservations"
              className="bg-white text-black hover:bg-white/90 px-6 py-2.5 font-bold text-sm tracking-wider transition-all border border-white hover:shadow-lg hover:shadow-white/20"
            >
              BOOK NOW
            </Link>
          </div>

        {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-white/70 transition-colors p-2 z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center space-y-6 py-24 relative z-10">
          {/* Logo in mobile menu */}
          <div className="mb-6">
            <div className="relative w-28 h-28">
              <Image
                src="/images/BSTLOGO-01.png"
                alt="Bear Street Tavern Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-6 w-full max-w-md">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-warm-brown text-3xl tracking-[0.2em] font-bold transition-all hover:scale-105 transform border-b-2 border-white/30 pb-4 w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="pt-10 space-y-6 text-center w-full max-w-md">
            <a
              href="tel:4037622021"
              className="flex items-center justify-center text-white hover:text-warm-brown text-xl tracking-wider transition-colors gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              403.762.2021
            </a>
            <Link
              href="/reservations"
              className="block bg-white text-black hover:bg-white/90 px-12 py-5 font-bold tracking-[0.25em] transition-all text-center border-2 border-white hover:scale-105 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK NOW
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 pt-8">
            <a
              href="https://instagram.com/bearstreettavern"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border-2 border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
              aria-label="Instagram"
            >
              <span className="text-base text-white font-bold">IG</span>
            </a>
            <a
              href="https://facebook.com/bearstreettavern"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border-2 border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
              aria-label="Facebook"
            >
              <span className="text-base text-white font-bold">FB</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
