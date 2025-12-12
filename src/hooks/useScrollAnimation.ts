import { useEffect, useState, useRef, RefObject } from 'react';
import { calculateParallax, getScrollProgress } from '../lib/animations';

export interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  parallaxSpeed?: number;
}

/**
 * Hook for scroll-triggered animations using Intersection Observer
 */
export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): {
  ref: RefObject<HTMLDivElement>;
  isVisible: boolean;
  hasAnimated: boolean;
} => {
  const { threshold = 0.1, once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use Intersection Observer for better performance and accuracy
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        
        // If we've already animated and once is true, don't update again
        if (hasAnimated && once && !visible) return;
        
        setIsVisible(visible);
        
        if (visible && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -10% 0px' // Start animation when element is 10% from bottom
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once, hasAnimated]);

  return { ref, isVisible, hasAnimated };
};

/**
 * Hook for parallax scrolling effects
 */
export const useParallax = (speed: number = 0.5, offset: number = 0) => {
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const parallaxValue = calculateParallax(scrollY, speed, offset);
      setTransform(parallaxValue);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, offset]);

  return transform;
};

/**
 * Hook for scroll progress tracking
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setProgress(getScrollProgress());
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return progress;
};

/**
 * Hook for sticky header behavior
 */
export const useStickyHeader = (threshold: number = 100) => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollY > threshold);
      setScrollProgress(getScrollProgress());
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isSticky, scrollProgress };
};

