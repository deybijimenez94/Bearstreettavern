'use client';

import { useEffect, useRef } from 'react';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(
  animationType: AnimationType = 'fade-up',
  options: ScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<any>(null);

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
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [ref, animationType, threshold, rootMargin, triggerOnce]);

  return { ref };
}
