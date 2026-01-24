'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

type CTAButtonType = 'reserve' | 'order';

interface FloatingCTAProps {
  type: CTAButtonType;
}

export default function FloatingCTA({ type }: FloatingCTAProps) {
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

  const buttonText = type === 'reserve' ? 'BOOK' : 'ORDER';
  const buttonLink = type === 'reserve' ? '/reservations' : '/order-online';

  return (
    <Link
      href={buttonLink}
      className="fixed bottom-4 right-4 z-50"
      aria-label={buttonText}
    >
      <div className="bg-black hover:bg-accent-primary text-white hover:text-black border border-white/20 hover:border-accent-primary rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 px-4 py-3">
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 shrink-0"
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
        <span className="font-bold text-xs uppercase tracking-wider">
          BOOK
        </span>
      </div>
    </Link>
  );
}
