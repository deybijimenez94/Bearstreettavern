'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type CTAButtonType = 'reserve' | 'order';

interface FloatingCTAProps {
  type: CTAButtonType;
}

export default function FloatingCTA({ type }: FloatingCTAProps) {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Tailwind's 'md' breakpoint is typically 768px
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return null;
  }

  const buttonText = type === 'reserve' ? t('common.reserve') : t('common.order');
  const buttonLink = type === 'reserve' ? '/reservations' : '/order-online';

  return (
    <Link
      href={buttonLink}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={buttonText}
    >
      <div className="bg-accent-primary hover:bg-accent-secondary text-black rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 px-6 py-4">
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {/* Text */}
        <span className="font-bold text-sm uppercase tracking-wide">
          {type === 'reserve' ? 'RESERVE' : 'ORDER'}
        </span>
      </div>
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-accent-primary opacity-20 animate-ping"></div>
    </Link>
  );
}
