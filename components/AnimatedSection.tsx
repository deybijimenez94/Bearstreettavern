'use client';

import { useRef, useEffect } from 'react';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animationType?: AnimationType;
  delay?: number;
  className?: string;
  triggerOnce?: boolean;
}

export default function AnimatedSection({
  children,
  animationType = 'fade-up',
  delay = 0,
  className = '',
  triggerOnce = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let animationClass = '';
            switch (animationType) {
              case 'fade-left':
                animationClass = 'scroll-reveal-left';
                break;
              case 'fade-right':
                animationClass = 'scroll-reveal-right';
                break;
              default:
                animationClass = 'scroll-reveal';
                break;
            }
            entry.target.classList.add(animationClass);
            if (delay > 0) {
              entry.target.classList.add(`scroll-reveal-delay-${delay}`);
            }

            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [ref, animationType, delay, triggerOnce]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
